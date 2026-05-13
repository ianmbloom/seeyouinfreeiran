# 04 — Art Direction

> Locked-format prompts for all ~170 raster assets, organized by the 5-type taxonomy.
> Cross-references: `01_OVERVIEW.md` §12 (visual style), `02_CARD_LIST.md` (card/event IDs).

---

## A. Master Style Header

Paste this at the start of every image prompt:

```
Neo-noir HD pixel art, rendered in the aesthetic space between 16-bit SNES and
32-bit PC adventure games — inspired by Snatcher, Beneath a Steel Sky, and
The Last Night. Heavy dithering throughout: dense pointillist dot patterns govern
all tonal transitions across skies, surfaces, and light falloff — no smooth
gradients anywhere. Characters and key objects carry crisp 1px black outlines,
slightly thicker on foreground elements to enforce depth separation. All shading
uses flat cel-shading foundations with dithered transitions between tonal zones.
No anti-aliasing, no sub-pixel rendering, scanline-friendly pixel structure.
Mixed-resolution texture detail — select surfaces carry finer grain than the base
pixel grid. Lighting is volumetric and cinematic, with multiple distinct light
sources per scene (lanterns, neon signs, moonlight, streetlamps, fire); high
contrast deep blacks against warm isolated light pools, with all light falloff
rendered through dithering rather than gradients. Strict locked palette:
deep-navy #06080c, greens #52ff8f and #1ecc5e, reds #ff5a67 and #c0222e,
gold #ffd24a, off-white #fafff7, orange #ff9e3a, amber #ffd54a, warm skin tones
#f4c89c and #a86c4a — maximum 8–12 colors per scene, with complementary color
pairings (teal/orange, blue/yellow) for cinematic contrast. Human figures use
realistic adult proportions — no chibi, no stylization. Compositions are cinematic
and wide with dramatic vanishing points, strong foreground/background separation,
and dense environmental storytelling; every scene loaded with narrative detail.
Persian text and signage integrated naturally into environments.
Mood: gritty retrofuturist pixel noir — the atmosphere of a Ridley Scott film
rendered through a late-90s adventure game lens. Serious, dramatic, visceral.
SCENE LIGHTING: night or dawn ONLY — never midday.
```

## A2. Universal Negative Prompt

```
--no photorealism, 3D render, anime, cartoon-modern, chibi, soft gradients,
smooth gradients, anti-aliasing, sub-pixel rendering, lens flare, motion blur,
depth of field, HDR, daylight, noon sun, bright midday, flat unlit surfaces,
modern UI elements, social media logos, Twitter bird, platform branding, game UI,
borders, frames, picture frames, decorative borders, card frames, HUD elements,
interface chrome, vignette, rounded corners, drop shadows on edges,
painterly brushwork, watercolor, impressionism, cel-shading without dithering
```

**Critical:** All assets are raw art only. The game applies borders, frames, and UI chrome at runtime via CSS. Never bake frames or borders into the generated images.

**Style references:** Snatcher (1988), Beneath a Steel Sky (1994), The Last Night (2017). The target is the tonal overlap between these — cinematic noir atmosphere, dithered pixel precision, adult proportions, dense world-building detail.

---

## B. Move-Event Art (18 images)

**Native size:** 240 × 360 px (2:3 tall trading-card portrait)
**Folder:** `images/moves/`
**Display:** 1× in roster row, 2× when committed, 3× (480×720) in showdown reveal

**CRITICAL — No card frames:**
- These are the **interior art** for cards, not complete card designs
- **No card borders, frames, or UI elements** — the game composites these at runtime
- Art should fill the entire 240×360 canvas edge-to-edge
- No rounded corners, no drop shadows, no decorative borders

### B1. trump_confuse.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_confuse` |
| **Atmosphere** | 3am Situation Room, CRT glow |
| **Composition** | Trump at desk, phone in hand mid-tweet, intense expression. Multiple CRT screens behind — one shows war footage, one shows a corgi video, one shows Lady Gaga. The tonal juxtaposition IS the composition. Green glow dominant. |
| **Palette focus** | Trump green, deep navy, off-white CRT glow |
| **Prompt** | `[MASTER STYLE] Trump at the Resolute Desk at 3am, typing on phone, intense expression. Multiple CRT monitors behind him — one shows missile strike footage, one shows a corgi video, one shows celebrity news. Tonal dissonance. Cold blue CRT light, single yellow desk lamp. Green glow from phone screen. Tall 2:3 trading card composition.` |

### B2. trump_airstrike.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_airstrike` |
| **Atmosphere** | Dawn over Persian Gulf, drone's-eye view |
| **Composition** | MQ-9 Reaper silhouette in foreground, explosion blooming on compound below. First-light gold rim on horizon. |
| **Palette focus** | Deep navy sky, gold dawn rim, orange explosion, off-white contrails |
| **Prompt** | `[MASTER STYLE] Drone strike at dawn. MQ-9 Reaper silhouette in upper third, compound explosion below. Persian Gulf visible in background. Gold sunrise rim on horizon. Smoke plume rising. Tall 2:3 trading card composition.` |

### B3. trump_blockade.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_blockade` |
| **Atmosphere** | Night, Strait of Hormuz |
| **Composition** | US destroyer silhouette blocking passage. Tanker lights in background. Navy blue water, navigation lights glowing. |
| **Palette focus** | Deep navy, off-white navigation lights, green running lights |
| **Prompt** | `[MASTER STYLE] US Navy destroyer at night blocking the Strait of Hormuz. Tanker silhouettes in background with running lights. Dark navy water. Moon reflection. Green navigation lights. Tall 2:3 trading card composition.` |

### B4. trump_escort.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_escort` |
| **Atmosphere** | Dawn, Strait of Hormuz |
| **Composition** | US destroyer escorting allied tanker through strait. Gold dawn light on water. Distant Iranian coast. |
| **Palette focus** | Gold dawn, deep navy, off-white ship highlights |
| **Prompt** | `[MASTER STYLE] Dawn over Strait of Hormuz. US destroyer escorting large tanker. Gold sunrise reflecting on calm water. Distant mountainous coast. Peaceful but vigilant. Tall 2:3 trading card composition.` |

### B5. trump_sanction.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_sanction` |
| **Atmosphere** | Night, abstract financial |
| **Composition** | Frozen bank vault door, ice crystals forming. Iranian rial notes visible behind glass, worthless. Green "FROZEN" stamp overlay. |
| **Palette focus** | Deep navy, Trump green, off-white ice, gold rial |
| **Prompt** | `[MASTER STYLE] Bank vault door at night covered in ice crystals. Iranian rial banknotes visible through frosted glass. Green "FROZEN" stamp glowing. Cold blue lighting. Financial destruction. Tall 2:3 trading card composition.` |

### B6. trump_diplomacy.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_diplomacy` |
| **Atmosphere** | Night, diplomatic setting |
| **Composition** | Two hands reaching across a table — one American (green cuff), one Iranian (red cuff). Document between them. Flags in shadow. |
| **Palette focus** | Deep navy, Trump green, IRGC red, off-white document |
| **Prompt** | `[MASTER STYLE] Diplomatic negotiation at night. Two hands reaching across polished table — American hand (green suit cuff), Iranian hand (red suit cuff). Official document between them. Flags in shadowy background. Tall 2:3 trading card composition.` |

### B7. trump_selloil.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_selloil` |
| **Atmosphere** | Dusk, Texas oil field |
| **Composition** | Pumping oil derricks silhouetted against orange Texas sunset. "SPR RELEASE" text on barrel in foreground. American flag on pole. |
| **Palette focus** | Orange sunset, deep navy sky, green American elements |
| **Prompt** | `[MASTER STYLE] Texas oil field at dusk. Multiple pump jacks silhouetted against orange sunset. Oil barrel in foreground labeled "SPR RELEASE". Small American flag on pole. Economic warfare. Tall 2:3 trading card composition.` |

### B8. trump_armjavidan.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_armjavidan` |
| **Atmosphere** | Night, covert delivery |
| **Composition** | Weapons crates being unloaded from unmarked plane. Lion & Sun stencil on crates. Iranian resistance fighters receiving. Gold highlights. |
| **Palette focus** | Deep navy, gold Lion & Sun, Trump green crate markings |
| **Prompt** | `[MASTER STYLE] Night airfield in Iran. Weapons crates being unloaded from unmarked cargo plane. Lion & Sun symbol stenciled on crates in gold. Iranian resistance fighters receiving. Covert operation. Gold and green accents. Tall 2:3 trading card composition.` |

### B9. trump_invade.png

| Field | Value |
|-------|-------|
| **Card ID** | `trump_invade` |
| **Atmosphere** | Dawn, beach landing |
| **Composition** | Marines emerging from landing craft at Bandar Abbas. First light. Smoke rising from port. Maximum stakes composition. |
| **Palette focus** | Gold dawn, deep navy sea, green military gear |
| **Prompt** | `[MASTER STYLE] Marine landing at dawn. Soldiers emerging from landing craft onto Bandar Abbas beach. First light breaking over mountains. Smoke rising from port facilities. Helicopters in sky. Maximum stakes. Tall 2:3 trading card composition.` |

### C1. irgc_harass.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_harass` |
| **Atmosphere** | Night, Strait of Hormuz |
| **Composition** | IRGC speedboat swarm, aggressive angles. Tanker lights in background. Red searchlights. Chaotic energy. |
| **Palette focus** | Deep navy, IRGC red searchlights, orange boat lights |
| **Prompt** | `[MASTER STYLE] IRGC speedboat swarm at night in Strait of Hormuz. Multiple small boats with aggressive angles, red searchlights. Large tanker silhouette in background. Chaotic, threatening energy. Tall 2:3 trading card composition.` |

### C2. irgc_attack_neighbors.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_attack_neighbors` |
| **Atmosphere** | Night, drone/missile launch |
| **Composition** | Iranian drone swarm launching. Glowing red exhaust trails. Target symbols for UAE/Saudi visible in HUD-style overlay. |
| **Palette focus** | Deep navy, IRGC red trails, orange explosions |
| **Prompt** | `[MASTER STYLE] Iranian attack drones launching at night. Swarm of drones with red exhaust trails. HUD-style target symbols for neighboring Gulf states. Aggressive, threatening. Tall 2:3 trading card composition.` |

### C3. irgc_execute.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_execute` |
| **Atmosphere** | Dawn, Evin Prison exterior |
| **Composition** | Prison wall at first light. Single white rose at gate. Long shadows. Restrained, never explicit. |
| **Palette focus** | Deep navy transitioning to gold dawn, off-white rose |
| **Prompt** | `[MASTER STYLE] Evin Prison exterior at dawn. High concrete wall. Single white rose placed at the gate. Long shadows. First gold light on horizon. Restrained, somber, dignified. Never explicit. Tall 2:3 trading card composition.` |
| **Sensitivity** | Restrained imagery only. Never depict violence. |

### C4. irgc_capture.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_capture` |
| **Atmosphere** | Night, interrogation room |
| **Composition** | Empty chair under harsh light. American flight suit on table. IRGC guards in shadow. Implied threat. |
| **Palette focus** | Deep navy shadows, harsh red light, off-white flight suit |
| **Prompt** | `[MASTER STYLE] IRGC interrogation room at night. Empty metal chair under single harsh red light. American flight helmet and suit on table. Guards in shadow. Threatening implication. Tall 2:3 trading card composition.` |

### C5. irgc_aivideo.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_aivideo` |
| **Atmosphere** | Night, state TV studio |
| **Composition** | LEGO-style 3D propaganda video on screen. IRIB anchor presenting. Cringe aesthetic. Obvious fakery. |
| **Palette focus** | IRGC red studio, off-white screen glow, plastic toy colors |
| **Prompt** | `[MASTER STYLE] IRIB state TV studio at night. Screen showing obviously fake LEGO-style 3D animation of "IRGC victory". Anchor gesturing proudly. Cringe propaganda aesthetic. Cheap and desperate. Tall 2:3 trading card composition.` |

### C6. irgc_freehijab.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_freehijab` |
| **Atmosphere** | Night, Tehran street |
| **Composition** | Young Iranian woman, hijab loosened, looking cautiously hopeful. Morality police retreating in background. Reluctant concession. |
| **Palette focus** | Deep navy, gold on woman's face, IRGC red on retreating police |
| **Prompt** | `[MASTER STYLE] Tehran street at night. Young Iranian woman with loosened hijab, cautiously hopeful expression. Morality police retreating in background. Streetlamp orange light. Reluctant regime concession. Tall 2:3 trading card composition.` |

### C7. irgc_rally.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_rally` |
| **Atmosphere** | Night, stadium |
| **Composition** | Pro-regime rally, harsh stadium lights. Crowd sparse on wide shot. Bussed-in supporters. Paid enthusiasm. |
| **Palette focus** | IRGC red banners, harsh white lights, deep navy sky |
| **Prompt** | `[MASTER STYLE] Regime rally at night in stadium. Harsh white stadium lights. Red regime banners. Crowd visibly sparse when seen wide. Buses parked in background. Paid enthusiasm, hollow display. Tall 2:3 trading card composition.` |

### C8. irgc_message.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_message` |
| **Atmosphere** | Night, broadcast bunker |
| **Composition** | Cardboard cutout of Mojtaba visible at edge of frame. IRIB camera filming empty podium. Gaffer tape visible. Desperate fakery. |
| **Palette focus** | IRGC red lighting, off-white cardboard, bunker amber |
| **Prompt** | `[MASTER STYLE] Regime broadcast bunker at night. Cardboard cutout of Mojtaba Khamenei visible at edge of frame. IRIB camera filming empty podium. Gaffer tape visible on cutout. Red work-light. Desperate propaganda. Tall 2:3 trading card composition.` |

### C9. irgc_importmilitia.png

| Field | Value |
|-------|-------|
| **Card ID** | `irgc_importmilitia` |
| **Atmosphere** | Night, Tehran checkpoint |
| **Composition** | Foreign fighters (Iraqi PMF, Fatemiyoun) manning Tehran checkpoint. Wrong uniforms. Iranians passing with fear/anger. |
| **Palette focus** | IRGC red, deep navy, streetlamp orange |
| **Prompt** | `[MASTER STYLE] Tehran checkpoint at night. Foreign militia fighters (Iraqi PMF insignia) manning the position instead of Iranians. Local citizens passing with fearful, angry expressions. Wrong uniforms. Regime desperation. Tall 2:3 trading card composition.` |

---

## C. Character Portraits (35 images)

**Native size:** 96 × 96 px (1:1)
**Folder:** `images/portraits/`
**Display:** 96px in Communication Panel, 192px for emphasis reveals

**CRITICAL — No frames or borders:**
- Portraits are **head-and-shoulders only**, filling the 96×96 canvas
- **No picture frames, decorative borders, or card frames** — raw pixel art only
- **No vignettes, rounded corners, or UI chrome** — the game adds borders at runtime
- Background should be simple/neutral (deep navy, or contextual lighting) — never a framed "portrait" composition
- Subject should be cropped tight, not floating in a frame

**Portrait prompt suffix** (add to every portrait prompt):
```
Head and shoulders portrait, tight crop, no frame, no border, no picture frame,
no decorative elements. Raw pixel art. Simple deep-navy background or single
contextual light source. Realistic adult proportions. Heavy dithering on skin
tones and background falloff. Multiple light sources permitted (e.g. CRT glow
+ desk lamp). Cinematic mood. Serious, not caricatured.
```

### Allied / Trump Side

| # | Filename | Character | Notes |
|---|----------|-----------|-------|
| 1 | `trump.png` | Trump | Late-night intensity, phone in hand, 3am lighting. Not caricatured — the menace is in the expression, not exaggeration. Green CRT glow on face. |
| 2 | `pahlavi.png` | Reza Pahlavi | Calm, dignified, statesmanlike. Dawn lighting on face. |
| 3 | `bibi.png` | Bibi Netanyahu | Serious, professional, determined. Never comedic. |
| 4 | `macron.png` | Emmanuel Macron | Measured, diplomatic. Neutral lighting. |
| 5 | `rubio.png` | Marco Rubio | Sharp, determined. American flag pin. |
| 6 | `starmer.png` | Keir Starmer | Reserved, professional. British backdrop hint. |
| 7 | `mossad.png` | Mossad Agent | Face in shadow, only eyes visible. Professional. |
| 8 | `mek.png` | MEK Representative | Professional, opposition figure. |
| 9 | `rajavi.png` | Maryam Rajavi | Opposition leader. Determined. |
| 10 | `anonymous_iran.png` | Anonymous Inside Iran | **Face hidden/silhouetted.** Gold rim light. Voice known. |
| 11 | `diaspora.png` | Diaspora Organizer | Iranian-American, hopeful. Lion & Sun pin. |
| 12 | `oil_worker.png` | Oil Worker | Hard hat, determined face. Working class hero. |
| 13 | `defector.png` | Basij Defector | Young man, conflicted, hopeful. Former uniform. |
| 14 | `resistance_fighter.png` | Javidan Resistance | Armed civilian, Lion & Sun armband. Gold highlights. |

### IRGC / Regime Side

| # | Filename | Character | Notes |
|---|----------|-----------|-------|
| 15 | `salami.png` | Hossein Salami | IRGC commander. Stern, threatening. Red lighting. |
| 16 | `qaani.png` | Esmail Qaani | Quds Force. Cold, calculating. |
| 17 | `ghalibaf.png` | Mohammad Bagher Ghalibaf | Parliament speaker. Political. |
| 18 | `taeb.png` | Hossein Taeb | Intelligence chief. Sinister. |
| 19 | `larijani.png` | Ali Larijani | Pragmatist. Calculating. |
| 20 | `khatami.png` | Mohammad Khatami | Former reformist. Tired, compromised. |
| 21 | `shamkhani.png` | Ali Shamkhani | Back-channel operator. Shadowy. |
| 22 | `iravani.png` | Amir Saeid Iravani | UN ambassador. Diplomatic mask. |
| 23 | `irib_anchor.png` | IRIB Anchor | State TV face. Propaganda smile. |
| 24 | `nilufari.png` | Basij Commander (Nilufari-type) | Brutal enforcer. Cold eyes. |
| 25 | `rezaee.png` | Mohsen Rezaee | Old guard. Historical figure. |
| 26 | `khamenei_official.png` | Khamenei Office Official | Spokesman. Reads from script. |
| 27 | `mojtaba.png` | Mojtaba Khamenei (real) | Heir apparent. Sickly, weak. |
| 28 | `cardboard_mojtaba.png` | Cardboard Mojtaba | **Literal cardboard cutout.** Comedic, pathetic. |
| 29 | `irgc_commander.png` | Generic IRGC Commander | For CAPTURE AIRMEN. Stern. |
| 30 | `basij_commander.png` | Generic Basij Commander | For NIGHTLY RALLY. Enforcer type. |

### Foreign Powers

| # | Filename | Character | Notes |
|---|----------|-----------|-------|
| 31 | `putin.png` | Vladimir Putin | Cold, calculating. Snowy blue lighting. |
| 32 | `xi.png` | Xi Jinping | Opaque, unreadable. Neutral lighting. |
| 33 | `hezbollah.png` | Hezbollah Commander | Militia figure. Yellow/green palette shifted to red. |
| 34 | `houthi.png` | Houthi Commander | Yemeni proxy. Aggressive. |
| 35 | `iraqi_pmf.png` | Iraqi PMF Fighter | Imported militia. Foreign enforcer. |
| 36 | `fatemiyoun.png` | Afghan Fatemiyoun | Imported militia. Desperate regime tool. |

---

## D. Story Elements (96 images)

**Native size:** 480 × 270 px (16:9 cinematic)
**Folder:** `images/story/`
**Display:** 480px standard, 960px for modal emphasis

**CRITICAL — No frames or borders:**
- Story elements are **scene art only**, edge-to-edge
- **No picture frames, decorative borders, letterboxing, or vignettes**
- **No UI overlays, text placeholders, or chrome** — all text is composited at runtime
- Art fills the entire 480×270 canvas

### D1. Endings (11 images)

| # | Filename | Ending | Atmosphere | Composition |
|---|----------|--------|------------|-------------|
| 1 | `ending_lion_rises.png` | THE LION RISES | Dawn | Lion & Sun flag rising over Azadi Tower at golden hour. Crowds below. Hope. |
| 2 | `ending_bankrupt.png` | BANKRUPT | Golden hour | Silent refinery. Cold flare stacks. Workers on strike. Economic collapse. |
| 3 | `ending_proxy_broken.png` | PROXY NETWORK BROKEN | Dusk | Abandoned Hezbollah outpost. Dust on IRGC pennant. Alone. |
| 4 | `ending_surrender.png` | STRATEGIC SURRENDER | 2am | Empty Oval Office. "TEHRAN ACCORDS" folder. Lamp still on. Defeat. |
| 5 | `ending_impeachment.png` | IMPEACHMENT | After midnight | Empty Resolute Desk. MAGA cap left behind. "BREAKING" chyron. |
| 6 | `ending_coalition.png` | COALITION COLLAPSED | Night | Empty G20 table. Name plates being removed. Abandoned. |
| 7 | `ending_marathon.png` | MARATHON | Sunrise | Two runners on long road. One carries small Lion & Sun pennant. Tired hope. |
| 8 | `ending_cardboard.png` | CARDBOARD MOJTABA REVEALED | Night/flash | World media cameras. Cardboard cutout revealed. Regime laughed out. |
| 9 | `ending_grand_bargain.png` | THE GRAND BARGAIN | Night | Handshake at diplomatic table. Iranian people in shadow, betrayed. Complex. |
| 10 | `ending_ground_zero.png` | GROUND ZERO | Dawn | Marines at Bandar. Smoke. Real cost of kinetic ending. Sober. |
| 11 | `ending_restoration.png` | RESTORATION | Dawn | Pahlavi at podium. Lion & Sun flag. "Iran Prosperity Project" banner. Dignified. |

### D2. Intel Feed Scenes (25 images)

See `03_EDUCATIONAL_LAYER.md` §C for full context. Each scene matches its intel entry.

| # | Filename | Scene |
|---|----------|-------|
| 1 | `strait_escort.png` | Destroyer escorting tanker through Hormuz at dawn |
| 2 | `cardboard_revealed.png` | Cardboard cutout on state TV set |
| 3 | `natanz_strike.png` | Natanz facility secondary explosions |
| 4 | `irgc_comms.png` | Radio intercept visualization |
| 5 | `anonymous_broadcast.png` | Tehran rooftop at 4am, silhouette speaking |
| 6 | `refinery_silent.png` | South Pars refinery with cold flare stacks |
| 7 | `defector_call.png` | Basij conscript on phone |
| 8 | `speedboat_burning.png` | IRGC speedboats burning at night |
| 9 | `tunnel_map.png` | Bunker network schematic |
| 10 | `rooftop_dawn.png` | Tehran rooftops at dawn, phones glowing |
| 11 | `convoy_border.png` | Militia convoy crossing Iraq-Iran border |
| 12 | `treasury_panic.png` | Central bank in chaos |
| 13 | `diaspora_la.png` | Westwood Boulevard march |
| 14 | `airstrike_compound.png` | IRGC compound strike |
| 15 | `empty_rally.png` | Sparse regime rally |
| 16 | `mossad_brief.png` | Mossad briefing room |
| 17 | `oil_dumping.png` | Crude oil pouring into Persian Gulf from regime terminal, black slick spreading |
| 18 | `hezbollah_call.png` | Intercepted Hezbollah communication |
| 19 | `pahlavi_address.png` | Pahlavi in studio with Lion & Sun flag |
| 20 | `checkpoint_foreign.png` | Foreign militia at Tehran checkpoint |
| 21 | `bandar_smoke.png` | Bandar Abbas burning from satellite |
| 22 | `general_defection.png` | Senior IRGC general silhouette defecting |
| 23 | `evin_dawn.png` | Evin Prison at dawn, white rose |
| 24 | `liberated_city.png` | Provincial city with Lion & Sun flags |
| 25 | `final_broadcast.png` | Regime surrender document draft |

### D3. Newsfeed Event Scenes (30 images)

See `02_CARD_LIST.md` §C for event IDs. Each scene accompanies its newsfeed modal.

| # | Filename | Event |
|---|----------|-------|
| 1 | `pahlavi_address_event.png` | Pahlavi at dawn studio |
| 2 | `natanz_strike_event.png` | Natanz from IDF perspective |
| 3 | `macron_statement.png` | Élysée press room |
| 4 | `rubio_podium.png` | State Department briefing |
| 5 | `starmer_downing.png` | Downing Street door |
| 6 | `mossad_cyber.png` | Cyber operations room |
| 7 | `mek_leak.png` | Drone footage handoff |
| 8 | `anonymous_broadcast_event.png` | Rooftop VPN uplink |
| 9 | `diaspora_westwood.png` | Lion & Sun flags on Westwood Blvd |
| 10 | `rajavi_communique.png` | NCRI press conference |
| 11 | `oil_strike.png` | South Pars workers walking out |
| 12 | `smuggled_video.png` | Phone screen showing rooftop footage |
| 13 | `basij_defection.png` | Young man removing Basij patch |
| 14 | `liberated_zone.png` | City square with resistance fighters |
| 15 | `foreign_enforcers.png` | Foreign militia at night checkpoint |
| 16 | `salami_parade.png` | IRGC military parade |
| 17 | `qaani_threat.png` | Qaani at podium |
| 18 | `ghalibaf_speech.png` | Majles chamber |
| 19 | `taeb_cell.png` | Intelligence operation room |
| 20 | `larijani_returns.png` | Larijani arriving at government building |
| 21 | `khatami_letter.png` | Khatami writing |
| 22 | `shamkhani_channel.png` | Back-channel meeting in shadow |
| 23 | `iravani_un.png` | UN Security Council |
| 24 | `irib_confession.png` | Coerced confession on state TV |
| 25 | `nilufari_crackdown.png` | Basij dispersing crowd |
| 26 | `rezaee_archive.png` | Historical war footage |
| 27 | `putin_s400.png` | S-400 components being unloaded |
| 28 | `xi_tea.png` | Diplomatic tea ceremony |
| 29 | `hezbollah_envoy.png` | Hezbollah commander in meeting |
| 30 | `houthi_tanker.png` | Tanker burning from Houthi strike |

### D4. Codex Thumbnails (25 images)

Each Codex entry gets a small scene thumbnail. Dimensions same as story elements.

| # | Filename | Codex Topic |
|---|----------|-------------|
| 1 | `codex_mahsa.png` | Mahsa Amini memorial |
| 2 | `codex_january_surge.png` | January 8–9 protest crowds |
| 3 | `codex_massacre.png` | Empty street at dawn, shoes left behind |
| 4 | `codex_feb28_strike.png` | Khamenei compound strike |
| 5 | `codex_cardboard.png` | Cardboard cutout close-up |
| 6 | `codex_pahlavi.png` | Pahlavi portrait |
| 7 | `codex_prosperity.png` | Iran Prosperity Project logo/document |
| 8 | `codex_monarchists.png` | Protesters with Lion & Sun |
| 9 | `codex_shah_legacy.png` | 1970s Iran modernization photo style |
| 10 | `codex_lion_sun.png` | Pre-1979 flag |
| 11 | `codex_blackout.png` | Dark screen with signal bars |
| 12 | `codex_inflation.png` | Worthless rial notes |
| 13 | `codex_strikes.png` | Oil workers assembled |
| 14 | `codex_liberated.png` | Provincial city with flags |
| 15 | `codex_underground.png` | Shadowy meeting |
| 16 | `codex_irgc.png` | IRGC structure diagram style |
| 17 | `codex_basij.png` | Basij patrol |
| 18 | `codex_hezbollah.png` | Hezbollah flag/fighters |
| 19 | `codex_houthis.png` | Houthi drone |
| 20 | `codex_hormuz.png` | Strait of Hormuz map |
| 21 | `codex_gulf.png` | Persian Gulf geography |
| 22 | `codex_drones.png` | MQ-9 Reaper |
| 23 | `codex_solidarity.png` | Iranian-Israeli flags together |
| 24 | `codex_imported.png` | Foreign militia |
| 25 | `codex_axis.png` | "Axis" network diagram |
| 26 | `codex_oil_dumping.png` | Black oil slick spreading in Persian Gulf, aerial view |

### D5. Opening Story Panels (5 images)

Opening cinematic sequence.

| # | Filename | Scene |
|---|----------|-------|
| 1 | `opening_1.png` | January surge — millions in streets, Lion & Sun flags |
| 2 | `opening_2.png` | The massacre — empty street at dawn, overturned barriers |
| 3 | `opening_3.png` | February 28 — Khamenei compound explosion |
| 4 | `opening_4.png` | Cardboard Mojtaba — regime propping up cutout |
| 5 | `opening_5.png` | "The board is set" — situation room with map |

---

## E. Backgrounds (5 images)

**Native size:** 1280 × 720 px (16:9 full canvas)
**Folder:** `images/backgrounds/`
**Display:** 1× only, full screen

| # | Filename | Scene | Atmosphere | Composition |
|---|----------|-------|------------|-------------|
| 1 | `bg_centcom.png` | CENTCOM Situation Room | 3am | Cold blue CRT light. Multiple monitors. Single yellow desk lamp. Deep navy dominant. |
| 2 | `bg_tehran_bunker.png` | Tehran Bunker | Windowless night | Red work-lights. Harsh shadows. Concrete. Paranoid. Claustrophobic. |
| 3 | `bg_persian_gulf_map.png` | Situation Map | 3am palette | Strategic map of Persian Gulf. Ship positions. Strike markers. War-room aesthetic. |
| 4 | `bg_title.png` | Title Screen | Dawn | Lion & Sun rising over Tehran skyline silhouette. Gold rays. "SEE YOU IN FREE IRAN" title space. |
| 5 | `bg_pass_device.png` | Hot-Seat Pass | Solid night | Deep navy `#06080c` with centered Lion & Sun icon in gold. "PASS DEVICE" text space. |

---

## F. Icons (16 images)

**Native size:** 32 × 32 px (1:1)
**Folder:** `images/icons/`
**Display:** 32px native, 64px (2×), 96px (3×)

| # | Filename | Icon | Palette |
|---|----------|------|---------|
| 1 | `icon_air.png` | AIR theatre tag | Off-white, deep navy |
| 2 | `icon_sea.png` | SEA theatre tag | Off-white, deep navy |
| 3 | `icon_street.png` | STREET theatre tag | Off-white, gold accent |
| 4 | `icon_world.png` | WORLD theatre tag | Off-white, deep navy |
| 5 | `icon_lev.png` | LEVERAGE bar | Trump green |
| 6 | `icon_pol.png` | POL CAP bar | Trump green |
| 7 | `icon_all.png` | ALLIES bar | Trump green |
| 8 | `icon_grip.png` | GRIP bar | IRGC red |
| 9 | `icon_chest.png` | WAR CHEST bar | IRGC red |
| 10 | `icon_proxy.png` | PROXIES bar | IRGC red |
| 11 | `icon_cooldown.png` | Cooldown badge | Gray, clock motif |
| 12 | `icon_locked.png` | Gate-locked padlock | Gray, padlock |
| 13 | `icon_exposure.png` | Exposure warning | Gold, eye motif |
| 14 | `icon_audio.png` | Audio toggle | Off-white, speaker |
| 15 | `icon_pass.png` | Pass device | Gold, two arrows |
| 16 | `icon_close.png` | Close X | Off-white, X |

---

## G. Communication Panel CSS Spec

The Communication Panel is **CSS chrome, not raster art**. It renders at runtime, composing:
- Portrait (96×96 from portraits folder)
- Transmission-type label (text)
- Message body (text)
- Optional scene thumb (from story folder)
- Trim color (per speaker side)

### G1. Layout (480 × 270 canvas space)

```
┌──────────────────────────────────────────────────────────┐
│ [PORTRAIT 96×96] │ [TRANSMISSION TYPE LABEL]             │
│                  │ font: Press Start 2P, 8px             │
│                  │ color: side trim color                │
│                  │ e.g. "TRUTH SOCIAL POST — 02:47Z"     │
├──────────────────┴───────────────────────────────────────┤
│ Message body                                             │
│ font: VT323, 12px (EN) / Vazirmatn, 12px (FA)            │
│ color: #fafff7                                           │
│ padding: 8px                                             │
│                                                          │
│                               [SCENE THUMB 160×90]       │
│                               (optional, lower-right)    │
└──────────────────────────────────────────────────────────┘
```

### G2. Trim Colors

| Speaker | Border | Label Color |
|---------|--------|-------------|
| MAXJAW Trump | `#52ff8f` 2px | `#52ff8f` |
| IRGC official | `#ff5a67` 2px | `#ff5a67` |
| Anonymous / Iranian dissident | `#ffd24a` 2px | `#ffd24a` |
| CENTCOM / Mossad / SIGINT | `#fafff7` 1px | `#fafff7` |
| Pahlavi | `#52ff8f` outer, `#ffd24a` inner | `#ffd24a` |

### G3. Fonts

```css
.panel-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.panel-body-en {
  font-family: 'VT323', monospace;
  font-size: 14px;
  line-height: 1.4;
}

.panel-body-fa {
  font-family: 'Vazirmatn', sans-serif;
  font-size: 14px;
  direction: rtl;
  line-height: 1.6;
}
```

### G4. Background

```css
.communication-panel {
  background: #06080c;
  border: 2px solid var(--trim-color);
  box-shadow: 0 0 8px var(--trim-color);
  image-rendering: pixelated;
}
```

---

## H. Asset Count Summary

| Type | Native Size | Count |
|------|-------------|-------|
| Move Events | 240 × 360 | 18 |
| Character Portraits | 96 × 96 | 36 |
| Story Elements | 480 × 270 | 98 |
| Backgrounds | 1280 × 720 | 5 |
| Icons | 32 × 32 | 16 |
| **TOTAL RASTER** | | **173** |

Communication Panel = CSS chrome (0 raster images)

---

*End of 04_ART_DIRECTION.md*
