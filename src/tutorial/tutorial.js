import { supabase } from '../lib/supabase.js'

const STEPS = [
  {
    emoji: '⚽',
    title: 'Bienvenue dans Manager Wars !',
    color: '#1A6B3C',
    content: `<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
    <p>Ton objectif : constituer la meilleure équipe de cartes, affronter d'autres managers et gravir les échelons du classement.</p>
    <p>Ce tutoriel va t'apprendre les bases en quelques étapes. C'est parti ! 🚀</p>`
  },
  {
    emoji: '🃏',
    title: 'Ta Collection de Cartes',
    color: '#D4A017',
    content: `<p>Chaque carte représente un <strong>joueur de football</strong> avec :</p>
    <ul>
      <li>🟢 Un <strong>poste principal</strong> (GK, DEF, MIL, ATT) et sa note</li>
      <li>⭐ Un <strong>poste secondaire</strong> optionnel</li>
      <li>🌍 Une nationalité et un club</li>
    </ul>
    <p>Les cartes ont 4 raretés :<br>
      <span style="color:#ccc">■</span> Normal &nbsp;
      <span style="color:#D4A017">■</span> Pépite &nbsp;
      <span style="color:#909090">■</span> Papyte &nbsp;
      <span style="color:#7a28b8">■</span> Légende
    </p>
    <p>Ouvre des <strong>boosters</strong> pour agrandir ta collection !</p>`
  },
  {
    emoji: '📋',
    title: 'Construire ton Deck',
    color: '#1A6B3C',
    content: `<p>Avant de jouer, tu dois créer un <strong>deck de 11 joueurs</strong> dans l'onglet <em>Decks</em>.</p>
    <ul>
      <li>Choisis une <strong>formation</strong> (4-3-3, 4-4-2, 5-3-2…)</li>
      <li>Place un joueur sur chaque poste</li>
      <li>Un joueur joue mieux sur son poste principal</li>
      <li>Tu peux préparer plusieurs decks pour différentes stratégies</li>
    </ul>
    <p>💡 Un bon deck est la clé de la victoire !</p>`
  },
  {
    emoji: '🏟️',
    title: 'Comment se déroule un Match ?',
    color: '#1A6B3C',
    content: `<p>Un match se joue en <strong>3 phases</strong> :</p>
    <ol>
      <li>⚽ <strong>Milieu de terrain</strong> — un joueur de chaque équipe s'affronte. Le gagnant donne la possession à son équipe.</li>
      <li>🛡️ <strong>Attaque vs Défense</strong> — les attaquants affrontent les défenseurs. Si l'attaque passe, l'équipe marque.</li>
      <li>🧤 <strong>Tir au but</strong> — si l'attaque passe la défense, elle affronte le gardien. Un but est marqué si elle gagne !</li>
    </ol>
    <p>Le match se joue en <strong>plusieurs rounds</strong>. Le meilleur score à la fin remporte la victoire.</p>`
  },
  {
    emoji: '⚡',
    title: 'Les Cartes Game Changer',
    color: '#7a28b8',
    content: `<p>Les <strong>Game Changer</strong> sont des cartes spéciales qui peuvent retourner un match !</p>
    <ul>
      <li>⚡ <strong>VAR</strong> — annule le dernier but adverse</li>
      <li>👥 <strong>Remplacement</strong> — effectue un remplacement supplémentaire</li>
      <li>🌧️ <strong>Météo pluvieuse</strong> — réduit les stats des attaquants adverses</li>
      <li>🟥 <strong>Carton rouge</strong> — exclut un joueur adverse</li>
      <li>⚽ <strong>Coup franc</strong> — ajoute un but en cas de match nul</li>
    </ul>
    <p>Tu peux jouer jusqu'à <strong>3 Game Changer</strong> par match. Utilise-les au bon moment !</p>`
  },
  {
    emoji: '🔄',
    title: 'Les Remplacements',
    color: '#1A6B3C',
    content: `<p>Au cours d'un match, tu peux effectuer des <strong>remplacements</strong>.</p>
    <ul>
      <li>Tu as droit à <strong>3 remplacements</strong> par match (plus avec certains GC)</li>
      <li>Un joueur remplacé ne peut plus jouer</li>
      <li>Si un joueur clé est éliminé par l'adversaire, pense à le remplacer vite !</li>
    </ul>
    <p>💡 Garde tes remplacements pour les moments critiques.</p>`
  },
  {
    emoji: '📈',
    title: 'Cartes Évolutives',
    color: '#D4A017',
    content: `<p>Certaines cartes évoluent avec tes résultats :</p>
    <ul>
      <li>⭐ <strong>Pépite</strong> — Démarre à sa note minimale. <span style="color:#22c55e">+2</span> en victoire, <span style="color:#cc2222">−1</span> en défaite.</li>
      <li>💎 <strong>Papyte</strong> — Démarre à sa note maximale. <span style="color:#22c55e">+1</span> en victoire, <span style="color:#cc2222">−2</span> en défaite.</li>
    </ul>
    <p>Les <strong>notes secondaires</strong> évoluent du même delta.</p>
    <p>Prends soin de tes Pépites — une série de défaites peut les affaiblir !</p>`
  },
  {
    emoji: '🛒',
    title: 'Le Marché des Transferts',
    color: '#111',
    content: `<p>Tu peux <strong>acheter et vendre</strong> des cartes sur le marché !</p>
    <ul>
      <li>Vends tes doublons pour gagner des crédits</li>
      <li>Trouve la carte parfaite pour compléter ton deck</li>
      <li>Filtre par poste, rareté, note, pays ou club</li>
    </ul>
    <p>💰 Les crédits s'obtiennent aussi en remportant des matchs et en ouvrant des boosters.</p>`
  },
  {
    emoji: '🏆',
    title: 'Les Mini Leagues',
    color: '#5b3a8c',
    content: `<p>Défie plusieurs managers dans un <strong>championnat privé</strong> !</p>
    <ul>
      <li>3 à 8 joueurs par league</li>
      <li>Mode <em>Aller</em> ou <em>Aller-Retour</em></li>
      <li>Chaque joueur mise des crédits — le pot est distribué au podium :<br>
        🥇 70% · 🥈 20% · 🥉 10%</li>
      <li>Leagues publiques ou privées (mot de passe)</li>
    </ul>
    <p>Le classement se met à jour après chaque match joué.</p>`
  },
  {
    emoji: '🎯',
    title: 'Tu es prêt !',
    color: '#1A6B3C',
    content: `<p>Tu connais maintenant toutes les bases de <strong>Manager Wars</strong>.</p>
    <p>Pour bien démarrer :</p>
    <ol>
      <li>📦 Ouvre des <strong>boosters</strong> pour obtenir tes premières cartes</li>
      <li>📋 Crée ton premier <strong>deck</strong></li>
      <li>🤖 Entraîne-toi en <strong>Match IA</strong></li>
      <li>⚔️ Lance-toi dans le <strong>Match Aléatoire</strong> ou une <strong>Mini League</strong> !</li>
    </ol>
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`
  },
]

export function showTutorial(profile, steps, onComplete) {
  let step = 0

  const ov = document.createElement('div')
  ov.id = 'tutorial-overlay'
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px'

  const render = () => {
    const s = steps[step]
    const isLast = step === steps.length - 1
    const pct = Math.round(((step + 1) / steps.length) * 100)

    ov.innerHTML = `
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${pct}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${step + 1} / ${steps.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url ? `<div style="padding:0 24px 8px;text-align:center"><img src="${BASE}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>` : ''}
        <!-- Contenu -->
        <div style="padding:${s.image_url?'8':'16'}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${step > 0
            ? `<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>`
            : `<div style="flex:1"></div>`
          }
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${isLast ? '' : 'Passer le tutoriel'}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${isLast ? '🚀 Commencer !' : 'Suivant ›'}
          </button>
        </div>
      </div>
    `
    // Styles liste
    ov.querySelectorAll('ul,ol').forEach(el => {
      el.style.paddingLeft = '20px'
      el.style.marginTop = '6px'
      el.style.marginBottom = '6px'
    })
    ov.querySelectorAll('li').forEach(el => { el.style.marginBottom = '4px' })
    ov.querySelectorAll('p').forEach(el => { el.style.marginBottom = '8px' })

    ov.querySelector('#tuto-prev')?.addEventListener('click', () => { step--; render() })
    ov.querySelector('#tuto-next')?.addEventListener('click', () => {
      if (isLast) finish()
      else { step++; render() }
    })
    ov.querySelector('#tuto-skip')?.addEventListener('click', () => {
      if (confirm('Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.')) finish()
    })
  }

  const finish = async () => {
    ov.remove()
    if (profile?.id) {
      await supabase.from('users').update({ tutorial_done: true }).eq('id', profile.id)
    }
    onComplete?.()
  }

  document.body.appendChild(ov)
  render()
}

export async function checkAndShowTutorial(profile, navigate, toast) {
  if (!profile || profile.tutorial_done) return

  let dbSteps = []

  // Essai 1 : via RPC (SECURITY DEFINER, bypass RLS)
  const { data: rpcData, error: rpcErr } = await supabase.rpc('get_tutorial_steps')
  if (!rpcErr && rpcData?.length > 0) {
    dbSteps = rpcData
    console.log(`[Tutorial] RPC OK → ${dbSteps.length} étapes`)
  } else {
    // Essai 2 : lecture directe (dépend des policies RLS)
    const { data: directData, error: directErr } = await supabase
      .from('tutorial_steps').select('*').eq('is_active', true).order('step_order')
    if (!directErr && directData?.length > 0) {
      dbSteps = directData
      console.log(`[Tutorial] Direct OK → ${dbSteps.length} étapes`)
    } else {
      console.warn(`[Tutorial] Aucune étape DB (RPC: ${rpcErr?.message}, Direct: ${directErr?.message})`)
      toast && toast(`[Tutorial] DB vide ou inaccessible — tuto local utilisé`, 'warning', 5000)
    }
  }

  const steps = dbSteps.length > 0
    ? dbSteps.map(s => ({ emoji: s.emoji, title: s.title, color: s.color, content: s.content, image_url: s.image_url || null }))
    : STEPS

  showTutorial(profile, steps, () => navigate('boosters'))
}
