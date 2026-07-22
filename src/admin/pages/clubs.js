import { supabase } from '../../lib/supabase.js'
import { encodeVowels } from '../../components/card.js'
import { generateKitPreviewSVG, KIT_STYLES, DEFAULT_KIT } from '../../components/avatar.js'
import { assignFace } from '../../lib/portrait.js'

// ── Physiques par pays ────────────────────────────────────
const COUNTRY_SKIN = {
  FR:'blanc', DE:'blanc', ES:'blanc', PT:'metisse', IT:'blanc', GB:'blanc',
  NL:'blanc', BE:'blanc', DK:'blanc', SE:'blanc', NO:'blanc', PL:'blanc',
  CH:'blanc', AT:'blanc', CZ:'blanc', HR:'blanc', RS:'blanc', AL:'blanc',
  TR:'metisse', AR:'blanc', BR:'metisse', UY:'blanc', CO:'metisse',
  MX:'metisse', CL:'metisse', PE:'metisse', EC:'metisse', VE:'metisse',
  MA:'metisse', DZ:'metisse', TN:'metisse', EG:'metisse', LY:'metisse',
  NG:'noir', SN:'noir', CI:'noir', CM:'noir', GH:'noir', ML:'noir',
  GN:'noir', BF:'noir', TG:'noir', BJ:'noir', GA:'noir', CG:'noir',
  CD:'noir', AO:'noir', MZ:'noir', ZA:'typ', KE:'noir', ET:'noir',
  JP:'typ', KR:'typ', CN:'typ', VN:'typ', TH:'typ', ID:'typ',
  PH:'typ', MY:'typ', SG:'typ', MM:'typ', US:'blanc', CA:'blanc',
  AU:'blanc', NZ:'blanc', RU:'blanc', UA:'blanc', GR:'metisse',
  RO:'blanc', BG:'blanc', SK:'blanc', SI:'blanc', HU:'blanc',
  IR:'metisse', IQ:'metisse', SA:'metisse', AE:'metisse', JO:'metisse',
  PS:'metisse', LB:'metisse', SY:'metisse', IL:'metisse', PK:'metisse',
  IN:'metisse', BD:'typ', LK:'metisse', NP:'typ', AF:'metisse',
}
const ALL_LENGTHS = ['rase', 'court', 'milong', 'long']
const COUNTRY_HAIR = {} // plus utilisé mais conservé pour compatibilité
const HAIR_COLORS     = ['blond', 'marron', 'noir']

function hairColorForCountry(cc) {
  const skin = skinForCountry(cc)
  if (skin === 'noir')    return 'noir'
  if (skin === 'typ')     return Math.random() < 0.9 ? 'noir' : 'marron'
  if (skin === 'metisse') return Math.random() < 0.6 ? 'noir' : 'marron'
  const r = Math.random()
  return r < 0.35 ? 'blond' : r < 0.75 ? 'marron' : 'noir'
}

// Vérification que chauve est possible (5% de chance)
function randomHair(cc) {
  if (Math.random() < 0.05) return 'chauve'
  return hairColorForCountry(cc)
}
const ALL_COUNTRIES = [
  'FR','DE','ES','PT','IT','GB','NL','BE','DK','SE','NO','PL','CH','AT',
  'CZ','HR','RS','AL','TR','AR','BR','UY','CO','MX','CL','PE','EC',
  'MA','DZ','TN','EG','NG','SN','CI','CM','GH','ML','GN','CD','AO','ZA','KE',
  'JP','KR','CN','VN','TH','ID','PH','US','CA','AU','RU','UA','GR',
  'RO','BG','IR','SA','AE','IN','PK','BD',
]

function skinForCountry(cc)  { return COUNTRY_SKIN[cc] || 'blanc' }
function hairForCountry(cc)  { return randomHair(cc) }
function rand(a, b)  { return Math.floor(Math.random() * (b - a + 1)) + a }
function pick(arr)   { return arr[Math.floor(Math.random() * arr.length)] }
function randCC(exclude) {
  const pool = ALL_COUNTRIES.filter(c => c !== exclude)
  return pick(pool)
}

// ── Génération effectif ───────────────────────────────────
// Ethnie selon le pays
function ethnieForCountry(cc) {
  const europeans = ['FR','DE','ES','PT','IT','GB','NL','BE','DK','SE','NO','PL','CH','AT','CZ','HR','RS','AL','TR','GR','RO','BG','UA','RU']
  const northAfricans = ['MA','DZ','TN','EG','LY']
  const africans = ['NG','SN','CI','CM','GH','ML','GN','CD','AO','ZA','KE','TZ','UG','ET']
  const asians = ['JP','KR','CN','VN','TH','ID','PH','IN','PK','BD','SA','AE','IR']
  if (europeans.includes(cc) || ['AR','UY','CL','PE','EC','CO','MX','BR'].includes(cc)) return 'Europeans'
  if (northAfricans.includes(cc)) return 'North Africans'
  if (africans.includes(cc)) return 'Africans'
  if (asians.includes(cc)) return 'Asians'
  return 'Europeans'
}

// ── Distribution des notes lors de la génération d'équipe ─
// Normal : 55% note 1-4 · 20% note 5-10 · 10% note 11-14 · 10% note 15-17 · 5% note 18-20
// Fort   : 10 joueurs forcés note 15-20, les 10 autres selon distribution normale
const NOTE_DISTRIBUTION = [
  { min: 1,  max: 4,  pct: 55 },
  { min: 5,  max: 10, pct: 20 },
  { min: 11, max: 14, pct: 10 },
  { min: 15, max: 17, pct: 10 },
  { min: 18, max: 20, pct: 5  },
]
function rollNoteByDistribution() {
  const r = Math.random() * 100
  let cum = 0
  for (const tier of NOTE_DISTRIBUTION) {
    cum += tier.pct
    if (r < cum) return rand(tier.min, tier.max)
  }
  return rand(1, 4)
}
// Indices des 10 joueurs "forts" (pré-calculés) pour le mode Équipe Forte
function buildStrongSet() {
  const all = Array.from({length:20}, (_,i) => i)
  all.sort(() => Math.random() - 0.5)
  return new Set(all.slice(0, 10))
}
let _strongSet = null
function pickNoteByDistribution(strong, idx) {
  if (strong) {
    if (!_strongSet) _strongSet = buildStrongSet()
    if (_strongSet.has(idx)) return rand(15, 20)
  }
  return rollNoteByDistribution()
}

function generateSquad(clubId, countryCode, usedSurnamesGlobal = new Set(), strong = false) {
  const FIRSTNAMES = [
    'Lucas','Mateo','Rafael','Carlos','Luis','Diego','Andre','Paulo','Marco','Stefan',
    'Ahmed','Omar','Yusuf','Mamadou','Ibrahima','Cheikh','Moussa','Kofi','Emeka','Tunde',
    'Ryota','Kenji','Hiroshi','Jae','Sung','Wei','Ming','Van','Duc','Sorn',
    'James','Ryan','Tyler','Kevin','Nathan','Liam','Noah','Ethan','Oliver','Hugo',
    'Alexis','Théo','Antoine','Kylian','Rayan','Axel','Tom','Paul','Enzo','Léo',
    'João','Gabriel','Felipe','Roberto','César','Miguel','Ivan','Luca','Federico','Sergio',
  ]
  const SURNAMES = [
    'Silva','Santos','Costa','Pereira','Oliveira','Mendes','Ferreira','Alves',
    'Souza','Rodrigues','Almeida','Carvalho','Gomes','Ribeiro','Araujo','Barbosa',
    'Nascimento','Cardoso','Correia','Teixeira','Machado','Vieira','Monteiro','Cunha',
    'Barros','Freitas','Melo','Pinto','Moura','Cavalcanti','Batista','Nunes',
    'Lima','Rocha','Azevedo','Marques','Castro','Reis','Fonseca','Andrade',
    'Braga','Peixoto','Coelho','Amaral','Guimaraes','Pires','Salgado','Xavier',
    'Assuncao','Brito','Vasconcelos','Tavares','Duarte','Bastos','Neves','Figueiredo',
    'Sales','Farias','Siqueira','Camargo','Prado','Miranda','Ramos','Correa',
    'Gaspar','Leite','Pacheco','Sequeira','Marcelino','Antunes','Esteves','Rodriguez',
    'Godinho','Faria','Sardinha','Cordeiro','Aguiar','Salvador','Sarmento','Nogueira',
    'Pimentel','Simoes','Loureiro','Abreu','Sepulveda','Quaresma','Portela','Valente',
    'Franco','Pina','Camilo','Falcao','Serra','Trindade','Belo','Cabral',
    'Vidal','Sanches','Furtado','Guerreiro','Delgado','Coutinho','Vale','Marreiros',
    'Bento','Salavessa','Domingues','Diallo','Traore','Coulibaly','Bah','Konate',
    'Toure','Camara','Barry','Diop','Ndiaye','Sow','Cisse','Fofana',
    'Keita','Sylla','Kane','Diarra','Sanogo','Balde','Diakite','Kouyate',
    'Sissoko','Doumbia','Sarr','Mbaye','Fall','Toumbou','Coumbassa','Faye',
    'Gueye','Thiam','Sarré','Kaba','Dabo','Sacko','Kourouma','Konde',
    'Sangare','Sanou','Toubali','Bangoura','Kante','Samake','Nikiema','Ouedraogo',
    'Zongo','Sawadogo','Compaore','Kabore','Tapsoba','Kagambega','Yameogo','Some',
    'Kienou','Dembele','Bamba','Mendy','Djalo','Konte','Diabate','Doumbouya',
    'Fadiga','Tounkara','Cheikh','Dieng','Diagne','Mbengue','Sagna','Sy',
    'Ba','Wade','Niang','Diedhiou','Sonko','Dieye','Diatta','Mane',
    'Coly','Badiane','Ndour','Faty','Seck','Kone','Berthe','Sidibe',
    'Yattara','Cissoko','Bagayoko','Diakhate','Thioune','Bocoum','Guisse','Muller',
    'Schmidt','Schneider','Fischer','Weber','Richter','Bauer','Wolf','Schroder',
    'Neumann','Schwarz','Zimmermann','Braun','Kruger','Hofmann','Klein','Wagner',
    'Becker','Hoffmann','Koch','Bergmann','Lange','Schulze','Krause','Meyer',
    'Werner','Krämer','Schulz','Lehmann','Kaiser','Herrmann','Konig','Walter',
    'Mayer','Huber','Kaufmann','Vogel','Friedrich','Keller','Gunther','Frank',
    'Berger','Winkler','Roth','Beck','Lorenz','Baumann','Franke','Albrecht',
    'Winter','Peters','Vogt','Jager','Simon','Ludwig','Bohm','Horn',
    'Winkelmann','Fuchs','Sommer','Graf','Ebert','Stein','Wilhelm','Seidel',
    'Heinrich','Brandt','Haas','Schuster','Kramer','Sauer','Busch','Voigt',
    'Thomas','Peter','Arnold','Hartmann','Dietrich','Zimmer','Herzog','Pohl',
    'Sturm','Hartung','Vogler','Reichert','Kessler','Bock','Nakamura','Tanaka',
    'Suzuki','Kim','Park','Lee','Chen','Wang','Liu','Sato',
    'Yamamoto','Watanabe','Ito','Yamada','Choi','Jung','Kang','Zhang',
    'Huang','Yamaguchi','Saito','Matsumoto','Inoue','Kimura','Hayashi','Shimizu',
    'Yamazaki','Mori','Abe','Ikeda','Hashimoto','Yamashita','Ishikawa','Nakajima',
    'Ono','Maeda','Fujita','Goto','Okada','Hasegawa','Murakami','Kondo',
    'Ishii','Sakamoto','Endo','Aoki','Fujii','Nishimura','Fukuda','Ota',
    'Han','Yoon','Cho','Song','Shin','Yoo','Jang','Lim',
    'Oh','Seo','Kwon','Hwang','Ahn','Yang','Zhao','Zhou',
    'Wu','Xu','Sun','Zhu','Ma','Guo','He','Lin',
    'Takahashi','Kobayashi','Kato','Yoshida','Sasaki','Yamaoka','Miura','Okamoto',
    'Matsuda','Nakagawa','Ogawa','Uchida','Kubo','Miyazaki','Shimada','Yoshikawa',
    'Yokoyama','Miyamoto','Sakai','Chiba','Kudo','Baek','Nam','Bae',
    'Ha','Ko','Moon','Yu','Woo','Gu','Cha','Chu',
    'Peng','Lu','Xie','Tang','Feng','Deng','Cao','Cai',
    'Jiang','Yuan','Pan','Du','Dai','Fan','Kikuchi','Anzai',
    'Uehara','Oda','Kawai','Noda','Xiao','Jin','Qian','Yan',
    'Johnson','Williams','Brown','Davis','Wilson','Moore','Martinez','Lopez',
    'Taylor','Anderson','Jackson','White','Harris','Clark','Lewis','Walker',
    'Hall','Allen','Young','King','Wright','Scott','Green','Baker',
    'Adams','Nelson','Carter','Mitchell','Roberts','Turner','Phillips','Campbell',
    'Parker','Evans','Edwards','Collins','Stewart','Morris','Murphy','Cook',
    'Rogers','Morgan','Peterson','Cooper','Reed','Bailey','Bell','Gray',
    'Howard','Ward','Cox','Diaz','Richardson','Wood','Watson','Brooks',
    'Bennett','James','Reyes','Cruz','Hughes','Price','Myers','Long',
    'Foster','Sanders','Ross','Henderson','Coleman','Jenkins','Perry','Powell',
    'Sullivan','Russell','Hayes','Kelly','Simpson','Patterson','Ellis','Fisher',
    'Hunter','Grant','Mason','Barnes','Ryan','Palmer','Hamilton','George',
    'Freeman','Wells','Webb','Gordon','Burns','Marshall','Owens','Ford',
    'Snyder','Fox','Warren','Payne','Rice','Weaver','Butler','Simmons',
    'Boyd','Craig','Stone','Franklin','Vasquez','Stephens','Wallace','Woods',
    'Elliott','Chapman','Dunn','Perkins','Hudson','Spencer','Gardner','Stevens',
    'Tucker','Porter','Hicks','Crawford','Dubois','Martin','Bernard','Petit',
    'Dupont','Moreau','Laurent','Robert','Michel','Leroy','Roux','David',
    'Bertrand','Morel','Fournier','Girard','Bonnet','Rousseau','Fontaine','Chevalier',
    'Blanc','Guerin','Boyer','Garnier','Chevallier','Francois','Legrand','Gauthier',
    'Garcia','Perrin','Robin','Clement','Morin','Nicolas','Henry','Roussel',
    'Mathieu','Gautier','Masson','Marchand','Duval','Denis','Dumont','Marie',
    'Lemaire','Noel','Dufour','Meunier','Brun','Blanchard','Giraud','Joly',
    'Riviere','Lucas','Brunet','Gaillard','Barbier','Arnaud','Martel','Rolland',
    'Renaud','Roger','Roche','Fabre','Aubert','Poulain','Guyot','Lefebvre',
    'Leclerc','Michaud','Colin','Charpentier','Renard','Legros','Caron','Picard',
    'Roy','Guillot','Regnier','Marechal','Perrot','Antoine','Poirier','Voisin',
    'Prevost','Adam','Lecomte','Marty','Charles','Rousset','Chauvin','Jacquet',
    'Lambert','Bouvier','Beaumont','Roulet','Chartier','Deschamps','Lecoq','Perret',
    'Charrier','Sauvage','Rivet','Dumas','Bourgeois','Blondel','Payet','Isambert',
    'Auger','Lemoine','Millet','Guillon','Aubry','Humbert','Constant','Gilbert',
    'Renou','Barre','Vallet','Cardon','Fernandez','Gonzalez','Hernandez','Sanchez',
    'Ramirez','Torres','Flores','Rivera','Gomez','Morales','Ortiz','Gutierrez',
    'Chavez','Ruiz','Alvarez','Mendoza','Vazquez','Romero','Herrera','Medina',
    'Aguilar','Vargas','Guzman','Munoz','Salazar','Soto','Contreras','Rojas',
    'Nunez','Vega','Guerrero','Rios','Acosta','Fuentes','Cabrera','Espinoza',
    'Mendez','Molina','Cortez','Suarez','Pena','Cervantes','Estrada','Ochoa',
    'Bravo','Padilla','Carrillo','Escobar','Marin','Ibarra','Salinas','Mora',
    'Trejo','Cardenas','Aguirre','Villanueva','Villalobos','Solis','Robles','Beltran',
    'Camacho','Zamora','Valdez','Meza','Avila','Lara','Segura','Cano',
    'Prieto','Cabello','Pardo','Serrano','Nieto','Crespo','Gil','Iglesias',
    'Santana','Gallego','Zapata','Paredes','Nava','Barrera','Montes','Peralta',
    'Cortes','Galvan','Rosales','Maldonado','Rossi','Russo','Ferrari','Esposito',
    'Bianchi','Romano','Ricci','Marino','Greco','Bruno','Gallo','Conti',
    'Deluca','Mancini','Giordano','Rizzo','Lombardi','Moretti','Barone','Fontana',
    'Santoro','Mariani','Rinaldi','Caruso','Ferrara','Galli','Martini','Leone',
    'Longo','Gentile','Martinelli','Vitale','Lombardo','Coppola','Deangelis','Marchetti',
    'Parisi','Villa','Conte','Ferro','Fabbri','Bianco','Marini','Grasso',
    'Valentini','Messina','Sala','Farina','Rizzi','Monti','Cattaneo','Morelli',
    'Amato','Fiore','Colombo','Testa','Riva','Barbieri','Fiorentino','Sarti',
    'Piras','Neri','Palumbo','Sanna','Grieco','Sartori','Basile','Bernardi',
    'Marchi','Ferretti','Milani','Guerra','Silvestri','Cocco','Ferraro','Damico',
    'Vitali','Basso','Guerrini','Carbone','Ruggiero','Piazza','Rossetti','Cristofaro',
    'Palma','Franchini','Bruni','Villani','Marconi','Sforza','Sarno','Damato',
    'Angeli','Bosco','Ferri','Grimaldi','Costantini','Marchese','Iannotti','Palermo',
    'Vitiello','Damiani','Orlando','De Jong','Van Dijk','Bakker','Jansen','Visser',
    'Smit','Meijer','Bos','Andersen','Hansen','Nielsen','Pedersen','Larsen',
    'Johansson','Karlsson','Vermeulen','Van Den Berg','Van Der Meer','Dekker','Brouwer','Mulder',
    'De Groot','Hoekstra','Van Leeuwen','Vos','Peeters','De Boer','Kok','Andersson',
    'Eriksson','Persson','Lindqvist','Gustafsson','Olsen','Berg','Jorgensen','Sorensen',
    'Rasmussen','Christiansen','Poulsen','Madsen','Kristensen','Van Der Berg','Klaassen','Van Der Linden',
    'Postma','Vink','Terpstra','Schouten','Van Zanten','Hendriks','Van Der Laan','Wolters',
    'Blom','Van Vliet','Van Der Velde','Hermansen','Bergstrom','Lindberg','Holm','Nystrom',
    'Blomqvist','Sandberg','Wikstrom','Forsberg','Dahl','Falk','Ostergaard','Mortensen',
    'Simonsen','Thomsen','Iversen','Kristiansen','Vermeer','Willems','Aarts','Sondergaard',
    'Frandsen','Bang','Lindholm','Berglund','Wikman','Backstrom','Benali','Amrani',
    'Bouazza','Cherif','Haddad','Meziane','Belkacem','Rahmani','Boumediene','Yacoub',
    'Saidi','Zidane','Belhadj','Tazi','Idrissi','Alaoui','Bennani','Chraibi',
    'Fassi','Kadiri','Lahlou','Naciri','Sbai','Skalli','Tahiri','Zniber',
    'Boukhris','Chakroun','Gharbi','Jendoubi','Karoui','Mansouri','Sassi','Toumi',
    'Zaidi','Ayari','Bouazizi','Chaabane','Dhaouadi','Ghannouchi','Hammami','Jemai',
    'Khedher','Mabrouk','Nasri','Ouali','Rekik','Sahli','Zaoui','Amrouche',
    'Boudiaf','Cherki','Guessab','Hamdi','Jaber','Karim','Lakhal','Mahjoub',
    'Nabil','Rezki','Sahnoun','Talbi','Zerrouki','Achour','Bakri','Chaouch',
    'Djaballah','Ferhat','Gacem','Hachani','Islah','Jemili','Khaldi','Larbi',
    'Mokrani','Nadir','Ouahes','Riahi','Salhi','Taleb','Wahabi','Zeroual',
    'Aissa','Belaid','Chami','Djelloul','Fekih','Guerfi','Bouzid','Chettouh',
    'Djebbari','Ferjani','Guenaoui','Hallaoui','Khemiri','Mejri','Ouarda','Selmi',
  ]

  // 20 slots : 2 GK, 8 DEF, 6 MIL, 4 ATT
  const slots = [
    ...Array(2).fill('GK'),
    ...Array(8).fill('DEF'),
    ...Array(6).fill('MIL'),
    ...Array(4).fill('ATT'),
  ]

  // 4 joueurs auront une 2e note (indices aléatoires, jamais les GK)
  const nonGKIdxs = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  const dualIdxs  = new Set(nonGKIdxs.sort(() => Math.random()-0.5).slice(0,4))

  // Raretés : 2 papytes + 2 pépites parmi les non-GK, le reste normal
  const rarPool  = [...nonGKIdxs].sort(() => Math.random()-0.5)
  const pepites  = new Set(rarPool.slice(0,2))
  const papytes  = new Set(rarPool.slice(2,4))

  // 50% natifs, 50% étrangers (mélangés)
  const nativeCount = 10
  const isNativeArr = slots.map((_,i) => i < nativeCount)
  // Mélanger pour ne pas que les 10 premiers soient tous GK/DEF
  for (let i = isNativeArr.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [isNativeArr[i],isNativeArr[j]] = [isNativeArr[j],isNativeArr[i]]
  }

  const usedSurnamesInSquad = new Set()
  function pickUniqueSurname() {
    const fullyFresh = SURNAMES.filter(s => !usedSurnamesInSquad.has(s) && !usedSurnamesGlobal.has(s))
    const avail = fullyFresh.length ? fullyFresh : SURNAMES.filter(s => !usedSurnamesInSquad.has(s))
    const pool = avail.length ? avail : SURNAMES // si vraiment épuisé (effectif très grand), on retombe sur le pool complet
    const s = pick(pool)
    usedSurnamesInSquad.add(s)
    return s
  }

  return slots.map((job, idx) => {
    const cc   = isNativeArr[idx] ? countryCode : randCC(countryCode)
    const skin = skinForCountry(cc)
    const hair = hairForCountry(cc)
    const len  = pick(ALL_LENGTHS)

    const note     = pickNoteByDistribution(strong, idx)
    const hasDual  = dualIdxs.has(idx)
    const noteSec  = hasDual ? Math.max(0, note - 2) : 0

    // Construction des notes selon les règles
    let note_g = 0, note_d = 0, note_m = 0, note_a = 0
    let job2 = null

    if (job === 'GK') {
      note_g = note
    } else if (job === 'DEF') {
      note_d = note
      if (hasDual) { note_m = noteSec; job2 = 'MIL' }
    } else if (job === 'ATT') {
      note_a = note
      if (hasDual) { note_m = noteSec; job2 = 'MIL' }
    } else { // MIL
      note_m = note
      if (hasDual) {
        const side = Math.random() < 0.5 ? 'DEF' : 'ATT'
        if (side === 'DEF') { note_d = noteSec; job2 = 'DEF' }
        else                { note_a = noteSec; job2 = 'ATT' }
      }
    }

    const rarity = pepites.has(idx) ? 'pepite' : papytes.has(idx) ? 'papyte' : 'normal'
    const surnameReal = pickUniqueSurname()

    return {
      job, job2,
      firstname: pick(FIRSTNAMES),
      surname_real: surnameReal,
      country_code: cc,
      club_id: clubId,
      note_g, note_d, note_m, note_a,
      skin, hair, hair_length: len,
      rarity,
      sell_price: 0,
      ethnie: ethnieForCountry(cc),
      _ethnie: ethnieForCountry(cc),  // pour attribuer la face après
    }
  })
}

// ── Génération effectif (réutilisable) ────────────────────
async function runGenSquad(clubId, countryCode, toast, strong = false) {
  _strongSet = null  // reset pour chaque nouvelle génération
  // Noms déjà présents en base : à éviter en priorité pour limiter les doublons
  const { data: usedSurnamesData } = await supabase.from('players').select('surname_real').not('surname_real', 'is', null)
  const usedSurnamesGlobal = new Set((usedSurnamesData || []).map(r => r.surname_real).filter(Boolean))

  const squad = generateSquad(clubId, countryCode, usedSurnamesGlobal, strong)

  // Charger les faces déjà utilisées en base (nouveau système : bucket Supabase "faces/{continent}/...")
  const { data: usedFacesData } = await supabase.from('players').select('face').not('face', 'is', null)
  const usedFaces = new Set((usedFacesData || []).map(r => r.face).filter(Boolean))

  // Attribuer une face unique à chaque joueur selon son pays (→ continent → bucket)
  const usedInBatch = new Set()
  for (const p of squad) {
    const path = await assignFace(p.country_code, new Set([...usedFaces, ...usedInBatch]))
    if (path) { p.face = path; usedInBatch.add(path) }
    // Nettoyer _ethnie (obsolète, plus utilisé)
    delete p._ethnie
  }

  // Insert tous les joueurs en une seule requête batch
  const { data: newPlayers, error: eP } = await supabase
    .from('players')
    .insert(squad)
    .select('id')

  if (eP) {
    console.error('[GenSquad] Erreur batch insert:', eP.message, eP.details)
    toast('Erreur: ' + eP.message, 'error')
    return
  }

  // Insert toutes les cartes en batch
  const cards = (newPlayers || []).map(p => ({ card_type: 'player', player_id: p.id }))
  if (cards.length) {
    const { error: eC } = await supabase.from('cards').insert(cards)
    if (eC) console.warn('[GenSquad] Erreur cartes:', eC.message)
  }

  const ok = newPlayers?.length || 0
  console.log('[GenSquad] Créés:', ok, '/', squad.length)
  if (ok > 0) toast(`${ok} joueurs générés ✅`, 'success')
  else toast('Erreur génération joueurs', 'error')
}
function buildKitFromClub(c) {
  return {
    style:  c.kit_style  || DEFAULT_KIT.style,
    color1: c.kit_color1 || DEFAULT_KIT.color1,
    color2: c.kit_color2 || DEFAULT_KIT.color2,
    color3: c.kit_color3 || DEFAULT_KIT.color3,
    shorts: c.kit_shorts || DEFAULT_KIT.shorts,
    socks:  c.kit_socks  || DEFAULT_KIT.socks,
  }
}

let clubs = []

export async function pageClubs(container, helpers) {
  await loadClubs(container, helpers)
}

async function loadClubs(container, helpers) {
  const [{ data, error }, { data: playerCounts }] = await Promise.all([
    supabase.from('clubs').select('*').order('real_name'),
    supabase.from('players').select('club_id'),
  ])
  if (error) { container.innerHTML = `<p style="color:red">${error.message}</p>`; return }
  clubs = data || []
  // Compter les joueurs par club
  const countMap = {}
  ;(playerCounts || []).forEach(p => { countMap[p.club_id] = (countMap[p.club_id] || 0) + 1 })
  renderClubs(container, helpers, countMap)
}

function renderClubs(container, helpers, countMap = {}) {
  const { toast, openModal, closeModal } = helpers

  container.innerHTML = `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`

  renderList(clubs)

  document.getElementById('search-clubs').addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    renderList(clubs.filter(c => c.real_name.toLowerCase().includes(q) || c.encoded_name.toLowerCase().includes(q)))
  })

  document.getElementById('add-club-btn').addEventListener('click', () => openClubModal(null, container, helpers))

  function renderList(list) {
    const el = document.getElementById('clubs-list')
    if (!list.length) { el.innerHTML = '<p style="color:var(--gray-600);padding:20px">Aucun club.</p>'; return }
    el.innerHTML = list.map(c => {
      const kit      = buildKitFromClub(c)
      const kitSVG   = generateKitPreviewSVG(kit, c.id).replace('<svg ', '<svg style="width:40px;height:48px" ')
      const logo     = c.logo_url
        ? `<img src="${c.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`
        : `<div style="width:40px;height:40px;background:linear-gradient(135deg,${kit.color1},${kit.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${c.encoded_name.slice(0,3)}</div>`
      const nbPlayers = countMap[c.id] || 0
      return `
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${logo}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${c.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${c.encoded_name} · ${c.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${nbPlayers === 0 ? '#e67e22' : 'var(--gray-600)'}">
              ${nbPlayers === 0 ? '⚠️ Aucun joueur' : `👥 ${nbPlayers} joueur${nbPlayers > 1 ? 's' : ''}`}
            </div>
          </div>
          ${kitSVG}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${nbPlayers === 0 ? `<button class="btn btn-primary btn-sm" data-gen="${c.id}" data-cc="${c.country_code}" data-name="${c.real_name}" title="Générer joueurs">⚽</button>` : ''}
            <button class="btn btn-ghost btn-sm" data-edit="${c.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${c.id}">🗑️</button>
          </div>
        </div>`
    }).join('')

    el.querySelectorAll('[data-gen]').forEach(btn => {
      btn.addEventListener('click', () => {
        const clubId   = btn.dataset.gen
        const clubName = btn.dataset.name
        const cc       = btn.dataset.cc

        openModal(`
          <div style="display:flex;flex-direction:column;gap:16px">
            <div>
              <div style="font-size:17px;font-weight:900;margin-bottom:4px">⚽ Générer l'effectif</div>
              <div style="font-size:13px;color:#666"><strong>${clubName}</strong> — 20 joueurs</div>
            </div>
            <div style="font-size:12px;color:#888;background:#f8f8f8;border-radius:8px;padding:10px;line-height:1.6">
              Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20<br>
              2 pépites + 2 papytes · 50% nationalité du club
            </div>
            <label style="display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;padding:12px;background:rgba(212,160,23,0.08);border-radius:10px;border:1.5px solid rgba(212,160,23,0.35)">
              <input type="checkbox" id="qg-strong" style="width:18px;height:18px;accent-color:#D4A017;flex-shrink:0">
              <div>
                <div style="font-weight:700">💪 Équipe Forte</div>
                <div style="font-size:11px;color:#888;margin-top:1px">10 joueurs avec une note entre 15 et 20 garantis</div>
              </div>
            </label>
            <div style="display:flex;gap:10px;margin-top:4px">
              <button id="qg-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
              <button id="qg-ok" class="btn btn-primary" style="flex:1">⚽ Générer</button>
            </div>
          </div>
        `)

        setTimeout(() => {
          document.getElementById('qg-cancel')?.addEventListener('click', () => closeModal())
          document.getElementById('qg-ok')?.addEventListener('click', async () => {
            const strong = document.getElementById('qg-strong')?.checked ?? false
            closeModal()
            btn.disabled = true; btn.textContent = '⏳'
            await runGenSquad(clubId, cc, toast, strong)
            loadClubs(container, helpers)
          })
        }, 50)
      })
    })
    el.querySelectorAll('[data-edit]').forEach(btn => {
      const club = clubs.find(c => c.id === btn.dataset.edit)
      btn.addEventListener('click', () => openClubModal(club, container, helpers))
    })
    el.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Supprimer ce club ?')) return
        const { error } = await supabase.from('clubs').delete().eq('id', btn.dataset.del)
        if (error) toast(error.message, 'error')
        else { toast('Club supprimé', 'success'); loadClubs(container, helpers) }
      })
    })
  }
}

// ── Modal ─────────────────────────────────────────────────
function openClubModal(club, container, helpers) {
  const { toast, openModal, closeModal } = helpers
  const isEdit = !!club
  const kit = club ? buildKitFromClub(club) : { ...DEFAULT_KIT }

  const kitStyleOptions = Object.entries(KIT_STYLES)
    .map(([k, v]) => `<option value="${k}" ${kit.style === k ? 'selected' : ''}>${v.label}</option>`).join('')
  const countryOptions = ALL_COUNTRIES
    .map(c => `<option value="${c}" ${(club?.country_code || 'FR') === c ? 'selected' : ''}>${c}</option>`).join('')

  openModal(
    isEdit ? `✏️ ${club.real_name}` : '➕ Nouveau club',
    `<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="form-group">
        <label>Nom du club *</label>
        <input id="m-real" value="${club?.real_name || ''}" placeholder="Paris Saint-Germain">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="form-group">
          <label>Nom encodé *</label>
          <div style="display:flex;gap:6px">
            <input id="m-encoded" value="${club?.encoded_name || ''}" placeholder="PSG" style="flex:1;text-transform:uppercase;font-family:monospace">
            <button class="btn btn-ghost btn-sm" id="auto-encode-btn" title="Auto-générer">↻</button>
          </div>
        </div>
        <div class="form-group">
          <label>Pays *</label>
          <select id="m-country" style="width:100%">
            <option value="">-- Choisir --</option>
            ${countryOptions}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Logo (URL)</label>
        <input id="m-logo" value="${club?.logo_url || ''}" placeholder="https://...">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start">
          <!-- Contrôles -->
          <div style="flex:1;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${kitStyleOptions}</select>
            </div>
            ${[
              ['Couleur 1', 'm-kit-color1', kit.color1, false],
              ['Couleur 2', 'm-kit-color2', kit.color2, false],
              ['Couleur 3', 'm-kit-color3', kit.color3, true],
              ['Short',     'm-kit-shorts',  kit.shorts, false],
              ['Chaussettes','m-kit-socks',  kit.socks, false],
            ].map(([lbl, id, val, isC3]) => `
              <div class="form-group" id="wrap-${id}" ${isC3 ? 'style="display:none"' : ''}>
                <label>${lbl}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${id}" value="${val || '#000000'}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${id}-txt" value="${val || '#000000'}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join('')}
          </div>
          <!-- Aperçu -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--gray-200);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Génération auto (création uniquement) -->
      ${!isEdit ? `
      <div style="border-top:1px solid var(--gray-200);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);border-radius:8px;border:1px solid rgba(212,160,23,0.35);margin-left:12px">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:#888;font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20 · 2 pépites + 2 papytes</div>
      </div>` : ''}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${isEdit ? '💾 Enregistrer' : '✅ Créer le club'}
      </button>
    </div>`
  )

  // ── Init kit preview (setTimeout pour attendre le DOM de la modal) ──
  setTimeout(() => {
    refreshKit()

    // Afficher/masquer couleur 3 selon le style choisi
    function updateColor3Visibility() {
      const style = document.getElementById('m-kit-style')?.value || 'uni'
      const needs3 = KIT_STYLES[style]?.colors === 3
      const wrap = document.getElementById('wrap-m-kit-color3')
      if (wrap) wrap.style.display = needs3 ? '' : 'none'
    }
    updateColor3Visibility()

    // Sync color pickers ↔ text inputs
    ;['m-kit-color1','m-kit-color2','m-kit-color3','m-kit-shorts','m-kit-socks'].forEach(id => {
      const picker = document.getElementById(id)
      const txt    = document.getElementById(id + '-txt')
      if (!picker || !txt) return
      picker.addEventListener('input', () => { txt.value = picker.value; refreshKit() })
      txt.addEventListener('input', () => {
        const v = txt.value.trim()
        if (/^#[0-9a-fA-F]{6}$/.test(v)) { picker.value = v; refreshKit() }
      })
      txt.addEventListener('change', () => {
        let v = txt.value.trim()
        if (!v.startsWith('#')) v = '#' + v
        if (/^#[0-9a-fA-F]{6}$/.test(v)) { picker.value = v; txt.value = v; refreshKit() }
      })
    })
    document.getElementById('m-kit-style')?.addEventListener('change', () => { updateColor3Visibility(); refreshKit() })

    // Auto-encode
    const realInput    = document.getElementById('m-real')
    const encodedInput = document.getElementById('m-encoded')
    function autoEncode() {
      if (!realInput || !encodedInput || encodedInput.value) return
      const words = realInput.value.trim().split(/\s+/)
      const abbr  = words.length === 1
        ? words[0].toUpperCase().slice(0, 6)
        : words.filter(w => w.length > 2).map(w => w[0].toUpperCase()).join('') || words[0].toUpperCase().slice(0, 4)
      encodedInput.value = abbr
    }
    realInput?.addEventListener('input', autoEncode)
    document.getElementById('auto-encode-btn')?.addEventListener('click', () => {
      if (encodedInput) encodedInput.value = ''
      autoEncode()
    })

    // Save
    document.getElementById('m-save')?.addEventListener('click', () => saveClub(club, isEdit, container, helpers))

    // Afficher/masquer la coche "Équipe Forte" selon l'état de "Générer joueurs"
    const squadCb  = document.getElementById('m-gen-squad')
    const strongLbl = document.getElementById('m-gen-strong-label')
    function toggleStrongLabel() {
      if (!strongLbl) return
      strongLbl.style.display = squadCb?.checked ? 'flex' : 'none'
      if (!squadCb?.checked) {
        const strongCb = document.getElementById('m-gen-strong')
        if (strongCb) strongCb.checked = false
      }
    }
    squadCb?.addEventListener('change', toggleStrongLabel)
    toggleStrongLabel()
  }, 50)
}

function getKit() {
  return {
    style:  document.getElementById('m-kit-style')?.value  || 'uni',
    color1: document.getElementById('m-kit-color1')?.value || '#1A6B3C',
    color2: document.getElementById('m-kit-color2')?.value || '#ffffff',
    color3: document.getElementById('m-kit-color3')?.value || '#000000',
    shorts: document.getElementById('m-kit-shorts')?.value || '#111111',
    socks:  document.getElementById('m-kit-socks')?.value  || '#ffffff',
  }
}

function refreshKit() {
  const wrap = document.getElementById('kit-preview-wrap')
  if (!wrap) return
  wrap.innerHTML = generateKitPreviewSVG(getKit(), 'modal')
}

// ── Sauvegarde ────────────────────────────────────────────
async function saveClub(club, isEdit, container, helpers) {
  const { toast, closeModal } = helpers
  const errEl = document.getElementById('m-error')
  const btn   = document.getElementById('m-save')

  const realName    = document.getElementById('m-real')?.value.trim()
  const encodedName = document.getElementById('m-encoded')?.value.trim().toUpperCase()
  const countryCode = document.getElementById('m-country')?.value.trim().toUpperCase()
  const logoUrl     = document.getElementById('m-logo')?.value.trim() || null
  const genStadium  = document.getElementById('m-gen-stadium')?.checked ?? false
  const genSquad    = document.getElementById('m-gen-squad')?.checked   ?? false
  const genStrong   = document.getElementById('m-gen-strong')?.checked  ?? false
  const k = getKit()

  if (!realName)    { errEl.textContent = 'Le nom du club est requis.';  return }
  if (!encodedName) { errEl.textContent = 'Le nom encodé est requis.';   return }
  if (!countryCode) { errEl.textContent = 'Le pays est requis.';         return }

  btn.disabled = true; btn.textContent = 'Enregistrement…'

  const payload = {
    real_name: realName, encoded_name: encodedName,
    country_code: countryCode, logo_url: logoUrl,
    kit_style: k.style, kit_color1: k.color1, kit_color2: k.color2, kit_color3: k.color3,
    kit_shorts: k.shorts, kit_socks: k.socks,
  }

  let clubId = club?.id

  if (isEdit) {
    const { error } = await supabase.from('clubs').update(payload).eq('id', clubId)
    if (error) { errEl.textContent = error.message; btn.disabled = false; btn.textContent = '💾 Enregistrer'; return }
  } else {
    const { data: newClub, error } = await supabase.from('clubs').insert(payload).select().single()
    if (error) { errEl.textContent = error.message; btn.disabled = false; btn.textContent = '✅ Créer le club'; return }
    clubId = newClub.id

    // Carte Stade
    if (genStadium) {
      btn.textContent = '🏟️ Création du stade…'
      const { data: stadDef, error: eSD } = await supabase
        .from('stadium_definitions')
        .insert({ name: `Stade de ${realName}`, club_id: clubId, country_code: countryCode })
        .select().single()
      if (eSD) console.warn('[Stadium] Erreur def stade:', eSD.message)
      else if (stadDef) {
        await supabase.from('cards').insert({ card_type: 'stadium', stadium_id: stadDef.id })
      }
    }

    // Génération effectif
    if (genSquad) {
      btn.textContent = '⚽ Génération des joueurs…'
      await runGenSquad(clubId, countryCode, toast, genStrong)
    }
  }

  toast(isEdit ? 'Club modifié ✅' : 'Club créé ✅', 'success')
  closeModal()
  loadClubs(container, helpers)
}
