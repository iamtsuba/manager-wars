/**
 * ranked.js — Lobby du mode Ranked
 *
 * Affiche :
 *   - Rang + MMR du joueur
 *   - Progression dans la ligue
 *   - Stats ranked (V/N/D) de la saison
 *   - Bouton "Jouer en Ranked" → lance le matchmaking ranked (match-random.js)
 *   - Bouton "Classement Ranked" → rankings.js onglet ranked
 */

import { supabase } from '../lib/supabase.js'
import { getTier, getTierProgress, TIERS, previewDelta } from './glicko2.js'

export async function renderRanked(container, ctx) {
  const { state, navigate, toast } = ctx
  const p = state.profile

  container.innerHTML = `<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>`

  // Charger la saison active + profil complet
  const [{ data: season }, { data: profile }] = await Promise.all([
    supabase.from('ranked_seasons').select('*').eq('is_active', true).maybeSingle(),
    supabase.from('users')
      .select('id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws')
      .eq('id', p.id)
      .single(),
  ])

  if (!profile) { toast('Erreur chargement profil', 'error'); navigate('home'); return }

  const mmr        = profile.mmr ?? 1000
  const rd         = profile.mmr_deviation ?? 350
  const sigma      = profile.mmr_volatility ?? 0.06
  const placed     = (profile.placement_matches ?? 0)
  const isPlacement = placed < 10
  const remaining   = Math.max(0, 10 - placed)
  const tier        = getTier(mmr)
  const progress    = getTierProgress(mmr)

  // Trouver le tier suivant
  const tierIdx  = TIERS.findIndex(t => t.id === tier.id)
  const nextTier = TIERS[tierIdx + 1] || null

  // Couleur de fond par tier
  const TIER_GRADIENTS = {
    bronze:   'linear-gradient(160deg,#3d1c00,#7a3e00)',
    silver:   'linear-gradient(160deg,#1a1a2e,#3a3a5e)',
    gold:     'linear-gradient(160deg,#1a1200,#4a3500)',
    platinum: 'linear-gradient(160deg,#001a20,#003040)',
    diamond:  'linear-gradient(160deg,#001030,#1a2860)',
    master:   'linear-gradient(160deg,#1a0030,#3d0070)',
  }

  const totalRanked = (profile.ranked_wins||0) + (profile.ranked_losses||0) + (profile.ranked_draws||0)
  const winrate     = totalRanked > 0 ? Math.round((profile.ranked_wins||0) / totalRanked * 100) : 0

  // Générer les badges des tiers
  const tiersHTML = TIERS.map(t => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${tier.id === t.id ? 1 : 0.35};
      transform:${tier.id === t.id ? 'scale(1.15)' : 'scale(1)'};transition:all 0.3s">
      <div style="font-size:${tier.id === t.id ? '28px' : '20px'}">${t.emoji}</div>
      <div style="font-size:9px;color:${t.color};font-weight:${tier.id === t.id ? '900' : '400'};letter-spacing:0.5px">${t.label.toUpperCase()}</div>
    </div>
  `).join('')

  container.innerHTML = `
  <div style="min-height:100%;background:${TIER_GRADIENTS[tier.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${tier.color}40">
      <div style="font-size:52px;margin-bottom:4px">${tier.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${tier.color};letter-spacing:3px;text-transform:uppercase">${tier.label}</div>
      <div style="font-size:32px;font-weight:900;color:#fff;margin-top:4px">${mmr} <span style="font-size:14px;color:rgba(255,255,255,0.5);font-weight:400">MMR</span></div>
      ${rd > 100 ? `<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">Incertitude ±${Math.round(rd)} — Jouez plus pour stabiliser votre rang</div>` : ''}
    </div>

    <!-- Progression bar -->
    ${tier.id !== 'master' ? `
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${tier.emoji} ${tier.label}</span>
        ${nextTier ? `<span>${nextTier.emoji} ${nextTier.label} (${nextTier.min} MMR)</span>` : ''}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${progress}%;background:linear-gradient(90deg,${tier.color},${tier.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${progress}% vers ${nextTier ? nextTier.label : 'Maître'}</div>
    </div>` : ''}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${tiersHTML}
    </div>

    <!-- Placement / Stats -->
    ${isPlacement ? `
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${placed}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${remaining} match${remaining > 1 ? 's' : ''} — gains et pertes ×2</div>
    </div>` : `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${profile.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${profile.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${profile.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${winrate}%</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Win rate</div>
      </div>
    </div>`}

    <!-- Saison info -->
    ${season ? `
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${season.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(season.end_at).toLocaleDateString('fr',{day:'numeric',month:'short'})}</div>
    </div>` : ''}

    <!-- Bouton jouer -->
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto;padding-top:8px">
      <button id="ranked-play-btn" style="width:100%;padding:18px;border-radius:16px;border:none;
        background:linear-gradient(135deg,${tier.color},${tier.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${tier.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`

  // Events
  document.getElementById('ranked-back')?.addEventListener('click', () => navigate('home'))
  document.getElementById('ranked-leaderboard-btn')?.addEventListener('click', () => navigate('rankings', { tab: 'ranked' }))
  document.getElementById('ranked-play-btn')?.addEventListener('click', () => {
    // Lance le matchmaking ranked en passant le mode et les données MMR
    navigate('match', {
      matchMode : 'ranked',
      rankedData: { mmr, rd, sigma, isPlacement },
    })
  })
}
