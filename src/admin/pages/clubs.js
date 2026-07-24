import { supabase } from '../../lib/supabase.js'
import { encodeVowels } from '../../components/card.js'
import { generateKitPreviewSVG, KIT_STYLES, DEFAULT_KIT } from '../../components/avatar.js'
import { assignFace } from '../../lib/portrait.js'
import { renderPlayerCard } from '../../components/player-card.js'

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

  // ── Pools de prénoms et noms par zone géographique ─────────────────────────
  const NAMES_BY_ZONE = {
    FR: {
      first: ['Lucas','Tom','Hugo','Théo','Antoine','Kylian','Rayan','Axel','Paul','Enzo',
              'Léo','Mathis','Nathan','Alexis','Ethan','Maxime','Julien','Baptiste','Nicolas','Pierre',
              'Clément','Adrien','Valentin','Dylan','Loïc','Quentin','Florian','Kevin','Corentin','Raphaël'],
      last:  ['Martin','Bernard','Petit','Dupont','Moreau','Laurent','Robert','Michel','Leroy','Roux',
              'David','Bertrand','Morel','Fournier','Girard','Bonnet','Rousseau','Fontaine','Chevalier','Blanc',
              'Garnier','Boyer','Gauthier','Garcia','Perrin','Robin','Clément','Morin','Nicolas','Henry',
              'Lemaire','Noël','Dufour','Meunier','Brun','Blanchard','Giraud','Joly','Rivière','Brunet']
    },
    ES: {
      first: ['Carlos','Miguel','Javier','Alejandro','Sergio','David','Diego','Pablo','Álvaro','Marcos',
              'Adrián','Rubén','Iker','Raúl','Fernando','Roberto','Víctor','Iván','Gonzalo','Antonio',
              'Manuel','Jesús','Josué','Rodrigo','Cristian','Héctor','Óscar','Mario','Daniel','Jorge'],
      last:  ['García','Rodríguez','Martínez','López','Sánchez','González','Pérez','Hernández','Jiménez','Díaz',
              'Torres','Ramírez','Flores','Rivera','Gómez','Morales','Álvarez','Romero','Herrera','Medina',
              'Aguilar','Vargas','Guzmán','Muñoz','Salazar','Soto','Contreras','Rojas','Ramos','Ortiz']
    },
    PT: {
      first: ['João','Pedro','Diogo','Rúben','Bruno','Tiago','André','Ricardo','Luís','Gonçalo',
              'Nuno','Mário','Fábio','Rui','Miguel','Sérgio','Hugo','Filipe','Paulo','Vítor'],
      last:  ['Silva','Santos','Costa','Pereira','Oliveira','Mendes','Ferreira','Alves','Carvalho','Gomes',
              'Ribeiro','Araújo','Barbosa','Cardoso','Correia','Teixeira','Machado','Vieira','Monteiro','Cunha',
              'Pinto','Melo','Barros','Freitas','Fonseca','Andrade','Castro','Neves','Figueiredo','Duarte']
    },
    BR: {
      first: ['Gabriel','Lucas','Mateus','Gustavo','Felipe','Rodrigo','Thiago','Rafael','Bruno','Diego',
              'Leonardo','Eduardo','Victor','Pedro','Carlos','Alexandre','André','Paulo','Danilo','Marcelo'],
      last:  ['Silva','Santos','Oliveira','Souza','Lima','Ferreira','Costa','Nascimento','Alves','Pereira',
              'Rodrigues','Almeida','Nunes','Melo','Barbosa','Rocha','Brito','Castro','Carvalho','Gomes',
              'Lopes','Ramos','Mendes','Cavalcanti','Batista','Azevedo','Campos','Freitas','Reis','Andrade']
    },
    AR: {
      first: ['Lionel','Sergio','Rodrigo','Nicolás','Ezequiel','Gonzalo','Federico','Mauro','Pablo','Diego',
              'Lucas','Matías','Alejandro','Maximiliano','Emiliano','Marcos','Lautaro','Ángel','Leandro','Julián'],
      last:  ['González','Rodríguez','Martínez','García','López','Pérez','Sánchez','Romero','Torres','Flores',
              'Díaz','Gómez','Alvarez','Ruiz','Castro','Herrera','Cabrera','Medina','Ferreyra','Suárez']
    },
    IT: {
      first: ['Marco','Luca','Alessandro','Matteo','Davide','Andrea','Francesco','Federico','Lorenzo','Riccardo',
              'Stefano','Simone','Roberto','Nicola','Giovanni','Antonio','Emanuele','Daniele','Alberto','Giorgio'],
      last:  ['Rossi','Russo','Ferrari','Esposito','Bianchi','Romano','Ricci','Marino','Greco','Bruno',
              'Gallo','Conti','De Luca','Mancini','Giordano','Rizzo','Lombardi','Moretti','Fontana','Rinaldi']
    },
    DE: {
      first: ['Lukas','Max','Jonas','Florian','Tobias','Stefan','Markus','Sebastian','Niklas','Leon',
              'Tim','Felix','Alexander','Philipp','Christian','Thomas','Michael','Jan','Moritz','Fabian'],
      last:  ['Müller','Schmidt','Schneider','Fischer','Weber','Richter','Bauer','Wolf','Schröder','Neumann',
              'Schwarz','Zimmermann','Braun','Krüger','Hofmann','Wagner','Becker','Koch','Lehmann','Kaiser']
    },
    GB: {
      first: ['James','Harry','Oliver','Jack','George','Charlie','William','Thomas','Alfie','Edward',
              'Ryan','Liam','Noah','Ethan','Kyle','Jordan','Callum','Aaron','Declan','Connor'],
      last:  ['Smith','Jones','Williams','Brown','Taylor','Davies','Evans','Wilson','Thomas','Roberts',
              'Johnson','Walker','Wright','Robinson','White','Thompson','Hughes','Edwards','Green','Hall']
    },
    MA: {
      first: ['Yassine','Karim','Mehdi','Amine','Hamza','Bilal','Soufiane','Rachid','Omar','Mohammed',
              'Zakaria','Ilyas','Ayoub','Saad','Khalid','Adil','Tarik','Hicham','Reda','Nabil'],
      last:  ['Benali','Amrani','Bouazza','Cherif','Haddad','Meziane','Belkacem','Rahmani','Saidi','Zidane',
              'Belhadj','Tazi','Idrissi','Alaoui','Bennani','Fassi','Lahlou','Naciri','Tahiri','Zniber']
    },
    DZ: {
      first: ['Yacine','Riyad','Sofiane','Haris','Adem','Islam','Bilal','Omar','Nassim','Mehdi',
              'Ryad','Zinedine','Youssef','Farid','Karim','Mourad','Walid','Anes','Ferhat','Djamel'],
      last:  ['Amrouche','Boudiaf','Cherki','Guessab','Hamdi','Jaber','Lakhal','Mahjoub','Rezki','Sahnoun',
              'Talbi','Zerrouki','Achour','Bakri','Chaouch','Djaballah','Ferhat','Gacem','Khaldi','Larbi']
    },
    SN: {
      first: ['Sadio','Ismaïla','Cheikhou','Gana','Famara','Mbaye','Pape','Aliou','Moussa','Sidy',
              'Idrissa','Lamine','Bamba','Fallou','Abdou','Diallo','Mamadou','Souleymane','Oumar','Cheikh'],
      last:  ['Diallo','Traoré','Coulibaly','Bah','Konaté','Touré','Camara','Barry','Diop','Ndiaye',
              'Sow','Cissé','Fofana','Keita','Sylla','Kane','Diarra','Sanogo','Baldé','Kouyaté']
    },
    CI: {
      first: ['Didier','Wilfried','Serge','Jonathan','Franck','Maxwel','Salomon','Gervinho','Nicolas','Maxime',
              'Ismael','Romaric','Abdul','Cheick','Arouna','Kolo','Yaya','Geoffroy','Siaka','Adama'],
      last:  ['Drogba','Zaha','Gnagnon','Koné','Touré','Bamba','Diomandé','Konaté','Coulibaly','Fofana',
              'Traoré','Doumbia','Sanogo','Diabaté','Kalou','Bakayoko','Gradel','Seri','Aurier','Haller']
    },
    CM: {
      first: ['Samuel','Alex','Karl','Fabrice','Cédric','Nicolas','Georges','André','Joël','Roger',
              'François','Jean','Patrick','Thierry','Eric','Benjamin','Aristide','Clinton','Clinton','Stéphane'],
      last:  ['Eto\'o','Song','Choupo-Moting','Aboubakar','Bassogog','Kunde','Toko','Nkoudou','Ngadeu','Oyongo',
              'Fai','Zambo','Mokoena','Ekambi','Tchamba','Mbida','Biya','Kameni','Meyong','Webo']
    },
    NG: {
      first: ['Kelechi','Ahmed','Victor','John','Emmanuel','Samuel','Moses','Ola','Chukwuemeka','Odion',
              'Sunday','Chidi','Nnamdi','Chisom','Tunde','Emeka','Obinna','Uchenna','Ifeanyi','Segun'],
      last:  ['Osimhen','Iheanacho','Musa','Onyekuru','Iwobi','Ndidi','Nwankwo','Obi','Mikel','Martins',
              'Okocha','Yekini','Amunike','Babangida','Fash','Lawal','Onuoha','Taiwo','Ayodele','Ameobi']
    },
    JP: {
      first: ['Ryota','Kenji','Hiroshi','Takumi','Yuto','Daichi','Shinji','Makoto','Koji','Naoki',
              'Yuya','Shoya','Ryo','Shu','Atsuto','Masato','Hotaru','Genki','Ko','Ritsu'],
      last:  ['Nakamura','Tanaka','Suzuki','Sato','Yamamoto','Watanabe','Ito','Yamada','Saito','Matsumoto',
              'Inoue','Kimura','Hayashi','Shimizu','Yamazaki','Mori','Abe','Ikeda','Kato','Honda']
    },
    KR: {
      first: ['Heung','Son','Ji','Sung','Jae','Young','Kang','Hyun','Woo','Tae',
              'Seung','Min','Jun','Dong','Chang','Sang','Yo','Hee','Jin','Bum'],
      last:  ['Kim','Park','Lee','Choi','Jung','Kang','Cho','Yoon','Lim','Oh',
              'Han','Seo','Kwon','Hwang','Ahn','Yang','Shin','Yoo','Jang','Song']
    },
    MX: {
      first: ['Carlos','Hirving','Andrés','Javier','Miguel','Raúl','Héctor','Diego','Jorge','Luis',
              'Rodolfo','Erick','Jonathan','Néstor','Tecatito','Chicharito','Oswaldo','Oribe','Uriel','Giovanni'],
      last:  ['Hernández','Lozano','Guardado','Vela','Morales','Jiménez','Reyes','Corona','Herrera','Rodríguez',
              'Ochoa','Chicharito','Flores','Domínguez','Araujo','Álvarez','Pineda','Sánchez','Antuna','Meza']
    },
    _DEFAULT_EUROPE: {
      first: ['Stefan','Ivan','Luca','Marco','Andrei','Cristian','Bogdan','Mircea','Adrian','Florin',
              'Dušan','Aleksandar','Nikola','Nemanja','Marko','Filip','Milan','Branislav','Radomir','Dejan'],
      last:  ['Popescu','Ionescu','Stan','Marin','Stoica','Popa','Radu','Constantin','Barbu','Dobre',
              'Petrović','Marković','Nikolić','Jovanović','Popović','Stanković','Đorđević','Lukić','Simić','Ilić']
    },
    _DEFAULT_AFRIQUE: {
      first: ['Mamadou','Ibrahima','Moussa','Seydou','Boubacar','Oumar','Modibo','Adama','Bakary','Abdoulaye',
              'Lamine','Ousmane','Sekou','Demba','Tidiane','Amadou','Issiaka','Siaka','Fode','Samba'],
      last:  ['Diallo','Traoré','Coulibaly','Koné','Doumbia','Kouyaté','Bah','Konaté','Touré','Camara',
              'Sylla','Keita','Diakité','Sangaré','Sanou','Sidibé','Bathily','Niakaté','Dioumassi','Sissoko']
    },
    _DEFAULT_ASIE: {
      first: ['Wei','Ming','Jae','Van','Duc','Sorn','Ali','Hassan','Reza','Arman',
              'Yusuf','Tariq','Faris','Khalid','Saad','Rashid','Nasser','Walid','Ziad','Adel'],
      last:  ['Zhang','Wang','Liu','Chen','Yang','Huang','Zhou','Wu','Xu','Sun',
              'Al-Rashidi','Al-Dosari','Al-Harthi','Al-Balushi','Al-Farsi','Al-Shamsi','Al-Neyadi','Al-Breiki','Al-Hammadi','Al-Mansouri']
    },
    _DEFAULT_AMERIQUE: {
      first: ['James','Ryan','Tyler','Kevin','Nathan','Liam','Noah','Ethan','Oliver','Marcus',
              'Jordan','Andre','Devonte','Malik','Tyrone','Jamal','Darius','DeShawn','Brandon','Cody'],
      last:  ['Johnson','Williams','Brown','Davis','Wilson','Moore','Martinez','Lopez','Taylor','Anderson',
              'Jackson','White','Harris','Clark','Lewis','Walker','Hall','Allen','Young','King']
    }
  }

  // Mapping country_code → zone de noms
  const CC_TO_ZONE = {
    FR:'FR', BE:'FR', CH:'FR', MC:'FR', LU:'FR',
    ES:'ES', MX:'MX', CO:'ES', VE:'ES', PE:'ES', CL:'ES', EC:'ES', UY:'ES', PY:'ES', BO:'ES', CR:'ES', PA:'ES', HN:'ES', GT:'ES', SV:'ES', NI:'ES', DO:'ES', CU:'ES',
    PT:'PT', AO:'PT', MZ:'PT', CV:'PT',
    BR:'BR',
    AR:'AR',
    IT:'IT', SM:'IT',
    DE:'DE', AT:'DE',
    GB:'GB', IE:'GB', AU:'GB', NZ:'GB', CA:'GB',
    MA:'MA', TN:'DZ', LY:'DZ',
    DZ:'DZ',
    SN:'SN', ML:'SN', GN:'SN', GW:'SN', GM:'SN', MR:'SN',
    CI:'CI', BF:'CI', TG:'CI', BJ:'CI', GH:'CI',
    CM:'CM', GA:'CM', CG:'CM', CD:'CM',
    NG:'NG',
    JP:'JP',
    KR:'KR',
    MX:'MX',
    // Fallbacks
    PL:'_DEFAULT_EUROPE', CZ:'_DEFAULT_EUROPE', SK:'_DEFAULT_EUROPE', HU:'_DEFAULT_EUROPE',
    HR:'_DEFAULT_EUROPE', RS:'_DEFAULT_EUROPE', SI:'_DEFAULT_EUROPE', RO:'_DEFAULT_EUROPE',
    BG:'_DEFAULT_EUROPE', GR:'_DEFAULT_EUROPE', TR:'_DEFAULT_EUROPE', RU:'_DEFAULT_EUROPE',
    UA:'_DEFAULT_EUROPE', NL:'_DEFAULT_EUROPE', DK:'_DEFAULT_EUROPE', SE:'_DEFAULT_EUROPE',
    NO:'_DEFAULT_EUROPE', FI:'_DEFAULT_EUROPE', AL:'_DEFAULT_EUROPE',
    EG:'_DEFAULT_AFRIQUE', ZA:'_DEFAULT_AFRIQUE', KE:'_DEFAULT_AFRIQUE',
    ET:'_DEFAULT_AFRIQUE', TZ:'_DEFAULT_AFRIQUE', UG:'_DEFAULT_AFRIQUE',
    CN:'_DEFAULT_ASIE', VN:'_DEFAULT_ASIE', TH:'_DEFAULT_ASIE', ID:'_DEFAULT_ASIE',
    PH:'_DEFAULT_ASIE', IN:'_DEFAULT_ASIE', PK:'_DEFAULT_ASIE', BD:'_DEFAULT_ASIE',
    IR:'_DEFAULT_ASIE', SA:'_DEFAULT_ASIE', AE:'_DEFAULT_ASIE', QA:'_DEFAULT_ASIE',
    KW:'_DEFAULT_ASIE', IQ:'_DEFAULT_ASIE', SY:'_DEFAULT_ASIE', JO:'_DEFAULT_ASIE',
    US:'_DEFAULT_AMERIQUE',
  }

  function getZone(cc) {
    return CC_TO_ZONE[cc] || '_DEFAULT_EUROPE'
  }
  function pickFirstname(cc) {
    const zone = getZone(cc)
    const pool = (NAMES_BY_ZONE[zone] || NAMES_BY_ZONE['_DEFAULT_EUROPE']).first
    return pick(pool)
  }
  function getSurnamePool(cc) {
    const zone = getZone(cc)
    return (NAMES_BY_ZONE[zone] || NAMES_BY_ZONE['_DEFAULT_EUROPE']).last
  }

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
  function pickUniqueSurname(cc) {
    const basePool = getSurnamePool(cc)
    const fullyFresh = basePool.filter(s => !usedSurnamesInSquad.has(s) && !usedSurnamesGlobal.has(s))
    const avail = fullyFresh.length ? fullyFresh : basePool.filter(s => !usedSurnamesInSquad.has(s))
    const pool = avail.length ? avail : basePool
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
    const surnameReal = pickUniqueSurname(cc)

    return {
      job, job2,
      firstname: pickFirstname(cc),
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
  const countMap = {}
  ;(playerCounts || []).forEach(p => { countMap[p.club_id] = (countMap[p.club_id] || 0) + 1 })
  renderClubs(container, helpers, countMap)
}

function renderClubs(container, helpers, countMap = {}) {
  const { toast, openModal, closeModal } = helpers

  container.innerHTML = `
    <div style="display:flex;gap:16px;height:calc(100vh - 56px);overflow:hidden;padding:16px">

      <!-- Colonne gauche : liste des clubs -->
      <div style="width:300px;flex-shrink:0;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;gap:8px;align-items:center">
          <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
          <button class="btn btn-primary btn-sm" id="add-club-btn" style="white-space:nowrap">+ Club</button>
        </div>
        <div id="clubs-list" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px"></div>
      </div>

      <!-- Colonne droite : fiche club -->
      <div id="club-panel" class="card-panel" style="flex:1;overflow-y:auto;display:flex;align-items:center;justify-content:center">
        <div style="color:var(--tile-fg-dim);text-align:center;padding:40px">← Sélectionnez un club ou créez-en un nouveau</div>
      </div>
    </div>`

  renderList(clubs)

  document.getElementById('search-clubs').addEventListener('input', e => {
    const q = e.target.value.toLowerCase()
    renderList(clubs.filter(c => c.real_name.toLowerCase().includes(q) || c.encoded_name.toLowerCase().includes(q)))
  })

  document.getElementById('add-club-btn').addEventListener('click', () => openClubPanel(null, container, helpers))

  function renderList(list) {
    const el = document.getElementById('clubs-list')
    if (!list.length) { el.innerHTML = '<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>'; return }
    el.innerHTML = list.map(c => {
      const kit  = buildKitFromClub(c)
      const logo = c.logo_url
        ? `<img src="${c.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`
        : `<div style="width:36px;height:36px;background:linear-gradient(135deg,${kit.color1},${kit.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${c.encoded_name.slice(0,3)}</div>`
      const nbPlayers = countMap[c.id] || 0
      return `
        <div class="club-row" data-club-id="${c.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${logo}
          <img src="https://flagsapi.com/${c.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.encoded_name}</div>
            <div style="font-size:10px;color:${nbPlayers === 0 ? '#e67e22' : 'var(--tile-fg-dim)'}">${nbPlayers === 0 ? '⚠️ 0 joueur' : `👥 ${nbPlayers}`}</div>
          </div>
          <button class="btn-del-club" data-del="${c.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`
    }).join('')

    el.querySelectorAll('.club-row').forEach(row => {
      row.addEventListener('click', () => {
        const c = clubs.find(x => x.id === row.dataset.clubId)
        if (c) openClubPanel(c, container, helpers)
        el.querySelectorAll('.club-row').forEach(r => r.style.background = 'var(--tile-bg)')
        row.style.background = 'rgba(26,107,60,0.18)'
      })
    })
    el.querySelectorAll('.btn-del-club').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Supprimer ce club ?')) return
        const { error } = await supabase.from('clubs').delete().eq('id', btn.dataset.del)
        if (error) toast(error.message, 'error')
        else { toast('Club supprimé', 'success'); loadClubs(container, helpers) }
      })
    })
  }
}

// ── Panneau droit (fiche club + joueurs) ────────────────────────────────
async function openClubPanel(club, container, helpers) {
  const { toast } = helpers
  const isEdit = !!club
  const kit = club ? buildKitFromClub(club) : { ...DEFAULT_KIT }
  const panel = document.getElementById('club-panel')
  if (!panel) return

  const kitStyleOptions = Object.entries(KIT_STYLES)
    .map(([k, v]) => `<option value="${k}" ${kit.style === k ? 'selected' : ''}>${v.label}</option>`).join('')
  const countryOptions = ALL_COUNTRIES
    .map(c => `<option value="${c}" ${(club?.country_code || 'FR') === c ? 'selected' : ''}>${c}</option>`).join('')

  panel.style.display = 'block'
  panel.style.alignItems = ''
  panel.style.justifyContent = ''
  panel.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${isEdit ? `✏️ ${club.real_name}` : '➕ Nouveau club'}</h3>
      ${isEdit ? `<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>` : ''}
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;max-width:640px">
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

      <!-- Logo : upload de fichier, plus une URL -->
      <div class="form-group">
        <label>Logo du club</label>
        <div style="display:flex;align-items:center;gap:12px">
          <div id="logo-preview" style="width:56px;height:56px;border-radius:10px;background:var(--tile-bg);border:1.5px solid var(--tile-border);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">
            ${club?.logo_url ? `<img src="${club.logo_url}" style="width:100%;height:100%;object-fit:contain">` : '<span style="font-size:22px;opacity:.4">🏟️</span>'}
          </div>
          <div style="flex:1">
            <input type="file" id="m-logo-file" accept="image/png,image/jpeg,image/webp,image/svg+xml">
            <div style="font-size:11px;color:var(--tile-fg-dim);margin-top:4px">PNG/JPG/WEBP/SVG — remplace le logo actuel si un fichier est choisi</div>
          </div>
        </div>
        <input type="hidden" id="m-logo-url-current" value="${club?.logo_url || ''}">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--tile-border);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px;color:var(--tile-fg-on-page)">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
          <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:8px">
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
                  <input type="color" id="${id}" value="${val || '#000000'}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${id}-txt" value="${val || '#000000'}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join('')}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${!isEdit ? `
      <div style="border-top:1px solid var(--tile-border);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px;color:var(--tile-fg-on-page)">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.1);border-radius:8px;border:1px solid rgba(26,107,60,0.3);color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.1);border-radius:8px;border:1px solid rgba(26,107,60,0.3);color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.1);border-radius:8px;border:1px solid rgba(212,160,23,0.4);margin-left:12px;color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:var(--tile-fg-dim);font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
      </div>` : ''}

      <div id="m-error" style="color:#ff6b6b;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${isEdit ? '💾 Enregistrer' : '✅ Créer le club'}
      </button>
    </div>

    ${isEdit ? `
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <h4 style="font-size:14px;font-weight:900;margin-bottom:12px;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>` : ''}
  `

  // Prévisualisation logo au choix de fichier
  document.getElementById('m-logo-file')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      document.getElementById('logo-preview').innerHTML = `<img src="${reader.result}" style="width:100%;height:100%;object-fit:contain">`
    }
    reader.readAsDataURL(file)
  })

  refreshKit()

  function updateColor3Visibility() {
    const style = document.getElementById('m-kit-style')?.value || 'uni'
    const needs3 = KIT_STYLES[style]?.colors === 3
    const wrap = document.getElementById('wrap-m-kit-color3')
    if (wrap) wrap.style.display = needs3 ? '' : 'none'
  }
  updateColor3Visibility()

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

  document.getElementById('m-save')?.addEventListener('click', () => saveClub(club, isEdit, container, helpers))

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

  // Génération d'effectif depuis le panneau (club existant)
  document.getElementById('btn-gen-squad-panel')?.addEventListener('click', () => {
    openGenSquadPopup(club, helpers, container)
  })

  // Grille des joueurs du club
  if (isEdit) loadClubPlayers(club.id)
}

async function loadClubPlayers(clubId) {
  const { data: players } = await supabase
    .from('players')
    .select('*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)')
    .eq('club_id', clubId)
    .order('surname_real')

  const grid = document.getElementById('club-players-grid')
  const countEl = document.getElementById('club-players-count')
  if (countEl) countEl.textContent = (players||[]).length
  if (!grid) return
  if (!players?.length) { grid.innerHTML = '<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>'; return }
  grid.innerHTML = players.map(p => renderPlayerCard(p, { width: 100 })).join('')
}

function openGenSquadPopup(club, helpers, container) {
  const { openModal, closeModal, toast } = helpers
  openModal(
    `⚽ Générer — ${club.real_name}`,
    `<div style="display:flex;flex-direction:column;gap:14px">
      <div style="font-size:12px;color:#888;background:#f8f8f8;border-radius:8px;padding:10px;line-height:1.6">
        Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20<br>
        2 pépites + 2 papytes · 50% nationalité du club
      </div>
      <label style="display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;padding:12px;background:rgba(212,160,23,0.08);border-radius:10px;border:1.5px solid rgba(212,160,23,0.35)">
        <input type="checkbox" id="qg-strong" style="width:18px;height:18px;accent-color:#D4A017;flex-shrink:0">
        <div>
          <div style="font-weight:700">💪 Équipe Forte</div>
          <div style="font-size:11px;color:#888;margin-top:2px">10 joueurs avec une note entre 15 et 20 garantis</div>
        </div>
      </label>
    </div>`,
    `<div style="display:flex;gap:10px;width:100%">
      <button id="qg-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
      <button id="qg-ok" class="btn btn-primary" style="flex:1">⚽ Générer</button>
    </div>`
  )
  setTimeout(() => {
    document.getElementById('qg-cancel')?.addEventListener('click', () => closeModal())
    document.getElementById('qg-ok')?.addEventListener('click', async () => {
      const strong = document.getElementById('qg-strong')?.checked ?? false
      closeModal()
      toast('Génération en cours…', 'info')
      await runGenSquad(club.id, club.country_code, toast, strong)
      toast('Effectif généré ✅', 'success')
      loadClubPlayers(club.id)
      loadClubs(container, helpers)
    })
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
  wrap.innerHTML = generateKitPreviewSVG(getKit(), 'panel')
}

// ── Upload logo vers Supabase Storage ────────────────────────────────────
async function uploadClubLogo(file, clubIdHint) {
  const ext  = (file.name.split('.').pop() || 'png').toLowerCase()
  const path = `clubs/${clubIdHint || 'new'}-${Date.now()}.${ext}`
  const { error } = await supabase.storage.from('assets').upload(path, file, { upsert: true, cacheControl: '3600' })
  if (error) throw error
  const { data } = supabase.storage.from('assets').getPublicUrl(path)
  return data.publicUrl
}

// ── Sauvegarde ────────────────────────────────────────────
async function saveClub(club, isEdit, container, helpers) {
  const { toast } = helpers
  const errEl = document.getElementById('m-error')
  const btn   = document.getElementById('m-save')

  const realName    = document.getElementById('m-real')?.value.trim()
  const encodedName = document.getElementById('m-encoded')?.value.trim().toUpperCase()
  const countryCode = document.getElementById('m-country')?.value.trim().toUpperCase()
  const logoFile    = document.getElementById('m-logo-file')?.files?.[0] || null
  const currentLogo = document.getElementById('m-logo-url-current')?.value || null
  const genStadium  = document.getElementById('m-gen-stadium')?.checked ?? false
  const genSquad    = document.getElementById('m-gen-squad')?.checked   ?? false
  const genStrong   = document.getElementById('m-gen-strong')?.checked  ?? false
  const k = getKit()

  if (!realName)    { errEl.textContent = 'Le nom du club est requis.';  return }
  if (!encodedName) { errEl.textContent = 'Le nom encodé est requis.';   return }
  if (!countryCode) { errEl.textContent = 'Le pays est requis.';         return }

  btn.disabled = true; btn.textContent = 'Enregistrement…'

  let logoUrl = currentLogo
  if (logoFile) {
    try {
      btn.textContent = '📤 Envoi du logo…'
      logoUrl = await uploadClubLogo(logoFile, club?.id)
    } catch (e) {
      errEl.textContent = 'Erreur upload logo : ' + e.message
      btn.disabled = false; btn.textContent = isEdit ? '💾 Enregistrer' : '✅ Créer le club'
      return
    }
  }

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

    if (genSquad) {
      btn.textContent = '⚽ Génération des joueurs…'
      await runGenSquad(clubId, countryCode, toast, genStrong)
    }
  }

  toast(isEdit ? 'Club modifié ✅' : 'Club créé ✅', 'success')
  loadClubs(container, helpers)
}
