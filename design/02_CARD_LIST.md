# 02 — Card List

> Canonical mechanical reference for all 18 in-roster cards and ~30 Newsfeed Events.
> Cross-references: `01_OVERVIEW.md` §9 (rosters), `04_ART_DIRECTION.md` (art prompts).

---

## A. Trump's Roster — 9 Cards (Green Border)

All cards have a **2-day cooldown** after play. Theatre amplification (×1.5) applies when the card's theatre matches the Daily Briefing's focus theatre.

### T1. CONFUSE

| Field | Value |
|-------|-------|
| **ID** | `trump_confuse` |
| **Theatre** | WORLD |
| **Border** | Green `#52ff8f` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: +3 LEV, −5 ALL · IRGC: −4 GRIP |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"Their military is totally defeated. I would rate this war a 12 out of 10. Maybe higher."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_confuse.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B1 |

---

### T2. AIRSTRIKE

| Field | Value |
|-------|-------|
| **ID** | `trump_airstrike` |
| **Theatre** | AIR |
| **Border** | Green `#52ff8f` |
| **Gate** | POL CAP ≥ 30 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +6 LEV, −8 POL · IRGC: −5 CHEST, −3 GRIP |
| **Reactive Triggers** | Sets `airstrikeUsed` flag (enables IRGC's CAPTURE AIRMEN) |
| **Voice (EN)** | *"Tuesday will be Power Plant Day, and Bridge Day, all wrapped up in one. They know what that means."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_airstrike.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B2 |

---

### T3. BLOCKADE

| Field | Value |
|-------|-------|
| **ID** | `trump_blockade` |
| **Theatre** | SEA |
| **Border** | Green `#52ff8f` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: +5 LEV, −2 POL · IRGC: −8 CHEST |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"Open the F***in' Strait, you crazy bastards, or you'll be living in Hell!"* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_blockade.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B3 |

---

### T4. ESCORT

| Field | Value |
|-------|-------|
| **ID** | `trump_escort` |
| **Theatre** | SEA |
| **Border** | Green `#52ff8f` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: +2 LEV, −1 POL, +6 ALL · IRGC: 0 |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"Tankers moving through under our flag. They tested us. Bad idea."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_escort.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B4 |

---

### T5. SANCTION

| Field | Value |
|-------|-------|
| **ID** | `trump_sanction` |
| **Theatre** | WORLD |
| **Border** | Green `#52ff8f` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: +4 LEV, +2 ALL · IRGC: −6 CHEST |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"Frozen. Every account. Every shell company. Economic obliteration — no bombs required."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_sanction.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B5 |

---

### T6. DIPLOMACY

| Field | Value |
|-------|-------|
| **ID** | `trump_diplomacy` |
| **Theatre** | WORLD |
| **Border** | Green `#52ff8f` |
| **Gate** | ALLIES > 0 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +2 LEV, +8 ALL · IRGC: −3 PROXY |
| **Reactive Triggers** | If ALLIES > 80 and IRGC GRIP > 60: triggers **THE GRAND BARGAIN** story ending |
| **Voice (EN)** | *"The offer is very fair. If they reject it, I will do what has to be done. They've seen what I'm willing to do."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_diplomacy.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B6 |

---

### T7. SELL OIL

| Field | Value |
|-------|-------|
| **ID** | `trump_selloil` |
| **Theatre** | WORLD |
| **Border** | Green `#52ff8f` |
| **Gate** | ALLIES ≥ 10 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +5 LEV, −3 ALL · IRGC: −10 CHEST |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"If gas prices rise, they rise. We have leverage they don't. That's the deal."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_selloil.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B7 |

---

### T8. ARM JAVIDAN

| Field | Value |
|-------|-------|
| **ID** | `trump_armjavidan` |
| **Theatre** | STREET |
| **Border** | Green `#52ff8f` |
| **Gate** | ALLIES ≥ 20 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +6 LEV, −1 ALL · IRGC: −5 GRIP, −2 PROXY |
| **Reactive Triggers** | If Trump wins 3 consecutive rounds after playing this: triggers **RESTORATION** story ending |
| **Voice (EN)** | *"Crates landing tonight. The regime is surrounded — outside AND inside. The Lion is waking up."* |
| **Voice (FA)** | *"شیر بیدار می‌شود"* (The Lion awakens) |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_armjavidan.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B8 |

---

### T9. INVADE

| Field | Value |
|-------|-------|
| **ID** | `trump_invade` |
| **Theatre** | STREET |
| **Border** | Green `#52ff8f` |
| **Gate** | POL ≥ 50 AND ALL ≥ 40 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +15 LEV, −20 POL, −10 ALL · IRGC: −25 CHEST, −10 GRIP |
| **Reactive Triggers** | If Trump wins this round: triggers **GROUND ZERO** story ending |
| **Voice (EN)** | *"A whole civilization will die tonight. Never to be brought back again. They know I can. That's the point."* |
| **Voice (FA)** | — |
| **Portrait ID** | `portraits/trump.png` |
| **Move-Event Art** | `moves/trump_invade.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §B9 |

---

## B. IRGC's Roster — 9 Cards (Red Border)

### I1. HARASS THE STRAIT

| Field | Value |
|-------|-------|
| **ID** | `irgc_harass` |
| **Theatre** | SEA |
| **Border** | Red `#ff5a67` |
| **Gate** | PROXIES ≥ 20 |
| **Cooldown** | 2 days |
| **Effects** | Trump: −3 LEV, −6 POL, −2 ALL · IRGC: −5 PROXY |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"We do not retreat from our waters."* |
| **Voice (FA)** | *"ما از آب‌های خود عقب نمی‌نشینیم"* |
| **Portrait ID** | `portraits/salami.png` |
| **Move-Event Art** | `moves/irgc_harass.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C1 |

---

### I2. ATTACK NEIGHBORS

| Field | Value |
|-------|-------|
| **ID** | `irgc_attack_neighbors` |
| **Theatre** | AIR |
| **Border** | Red `#ff5a67` |
| **Gate** | PROXIES ≥ 30 |
| **Cooldown** | 2 days |
| **Effects** | Trump: −2 LEV, −3 POL, +5 ALL (Gulf states recoil) · IRGC: −8 PROXY |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"We strike anywhere we choose."* |
| **Voice (FA)** | *"هرجا بخواهیم می‌زنیم"* |
| **Portrait ID** | `portraits/qaani.png` |
| **Move-Event Art** | `moves/irgc_attack_neighbors.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C2 |

---

### I3. EXECUTE DISSIDENTS

| Field | Value |
|-------|-------|
| **ID** | `irgc_execute` |
| **Theatre** | STREET |
| **Border** | Red `#ff5a67` |
| **Gate** | GRIP ≥ 25 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +4 ALL (world condemns) · IRGC: +3 GRIP |
| **Reactive Triggers** | Queues **martyr aftermath**: −6 GRIP next round |
| **Voice (EN)** | *"The traitors paid the price at first light."* |
| **Voice (FA)** | *"خائنین تاوان دادند"* |
| **Portrait ID** | `portraits/nilufari.png` |
| **Move-Event Art** | `moves/irgc_execute.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C3 |
| **Sensitivity** | Restrained imagery only — empty yard, white rose, dawn light. Never depicted. |

---

### I4. CAPTURE AIRMEN

| Field | Value |
|-------|-------|
| **ID** | `irgc_capture` |
| **Theatre** | STREET |
| **Border** | Red `#ff5a67` |
| **Gate** | `airstrikeUsed` flag set AND PROXIES ≥ 25 |
| **Cooldown** | 2 days |
| **Effects** | Trump: −10 LEV, −15 POL, −3 ALL · IRGC: −8 PROXY |
| **Reactive Triggers** | Only playable after Trump plays AIRSTRIKE |
| **Voice (EN)** | *"We have the airman. Negotiate."* |
| **Voice (FA)** | *"خلبان را داریم. مذاکره کنید."* |
| **Portrait ID** | `portraits/irgc_commander.png` |
| **Move-Event Art** | `moves/irgc_capture.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C4 |

---

### I5. AI VIDEO

| Field | Value |
|-------|-------|
| **ID** | `irgc_aivideo` |
| **Theatre** | WORLD |
| **Border** | Red `#ff5a67` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: −2 LEV · IRGC: +2 GRIP |
| **Reactive Triggers** | **If previous Intel feed was STREET-tagged smuggled video:** backfires → −15 GRIP instead |
| **Voice (EN)** | *"Glorious advance of the Sepah."* |
| **Voice (FA)** | *"پیشروی با شکوه سپاه"* |
| **Portrait ID** | `portraits/irib_anchor.png` |
| **Move-Event Art** | `moves/irgc_aivideo.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C5 |
| **Note** | Cringe LEGO-style "victory" propaganda aesthetic |

---

### I6. FREE HIJAB

| Field | Value |
|-------|-------|
| **ID** | `irgc_freehijab` |
| **Theatre** | STREET |
| **Border** | Red `#ff5a67` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: 0 · IRGC: +3 GRIP |
| **Reactive Triggers** | Signals weakness: queues +6 STREET-event chance next round |
| **Voice (EN)** | *"We listen to our daughters. (Reluctantly.)"* |
| **Voice (FA)** | *"به دختران‌مان گوش می‌دهیم"* |
| **Portrait ID** | `portraits/ghalibaf.png` |
| **Move-Event Art** | `moves/irgc_freehijab.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C6 |

---

### I7. NIGHTLY RALLY

| Field | Value |
|-------|-------|
| **ID** | `irgc_rally` |
| **Theatre** | STREET |
| **Border** | Red `#ff5a67` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: −3 ALL · IRGC: +3 GRIP, +1 PROXY |
| **Reactive Triggers** | — |
| **Voice (EN)** | *"Hundreds of thousands love their leader."* (They're paid.) |
| **Voice (FA)** | *"صدها هزار نفر رهبرشان را دوست دارند"* |
| **Portrait ID** | `portraits/basij_commander.png` |
| **Move-Event Art** | `moves/irgc_rally.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C7 |

---

### I8. MESSAGE

| Field | Value |
|-------|-------|
| **ID** | `irgc_message` |
| **Theatre** | WORLD |
| **Border** | Red `#ff5a67` |
| **Gate** | — |
| **Cooldown** | 2 days |
| **Effects** | Trump: −2 LEV · IRGC: +4 GRIP, +2 PROXY |
| **Reactive Triggers** | **5% chance per play:** exposure → −15 GRIP and triggers *Cardboard Mojtaba* or *Khamenei is Dead* newsfeed |
| **Voice (EN)** | *"His Eminence has spoken from his place of deep prayer."* |
| **Voice (FA)** | *"حضرت آقا از محل عبادت عمیق خود سخن گفتند"* |
| **Portrait ID** | `portraits/cardboard_mojtaba.png` |
| **Move-Event Art** | `moves/irgc_message.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C8 |
| **Lore** | Ali Khamenei is dead (Feb 28 strike). Mojtaba is in a coma. The regime broadcasts from a dead man's name or in front of a cardboard cutout. |

---

### I9. IMPORT MILITIA

| Field | Value |
|-------|-------|
| **ID** | `irgc_importmilitia` |
| **Theatre** | STREET |
| **Border** | Red `#ff5a67` |
| **Gate** | WAR CHEST ≥ 15 AND PROXIES ≥ 20 |
| **Cooldown** | 2 days |
| **Effects** | Trump: +3 ALL (foreign-Shia-militia outrage tightens Gulf coalition) · IRGC: +5 GRIP, −15 CHEST, −10 PROXY |
| **Reactive Triggers** | Disables NIGHTLY RALLY for 2 rounds. Queues 2-round STREET amplifier for Trump: ARM JAVIDAN and INVADE at +2 effect. ≥25% chance to trigger `Foreign Enforcers Visible` newsfeed. |
| **Voice (EN, regime)** | *"Loyal forces from beyond our borders strengthen the Sepah."* |
| **Voice (EN, dissident)** | *"They send Afghans and Iraqis to fight us in our own streets — because their own conscripts are putting down their guns."* |
| **Voice (FA)** | *"نیروهای وفادار از آن سوی مرزها سپاه را تقویت می‌کنند"* |
| **Portrait ID** | `portraits/iraqi_pmf.png` |
| **Move-Event Art** | `moves/irgc_importmilitia.png` |
| **Art Prompt Ref** | `04_ART_DIRECTION.md` §C9 |
| **Lore** | The regime cannot trust its own conscripts. Hezbollah, Iraqi PMF, and Afghan Fatemiyoun are deployed inside Iran. The tentacles of the regional octopus are pulled inward to defend Tehran. |

---

## C. Newsfeed Events (~30 Character Wildcards)

Newsfeed Events fire ~30% of rounds after resolution. Each has one or more effect types:
- **delta** — push specific resource bars
- **disable** — lock a card for 1–3 days
- **queue** — delayed effect next round

### Allied / Opposition Events (Green or Gold border)

| # | ID | Name | Border | Effect Type | Effects | Portrait | Scene Art |
|---|----|----|--------|-------------|---------|----------|-----------|
| N1 | `news_pahlavi_address` | Pahlavi Address | Green/Gold | delta, queue | −5 GRIP, +5 LEV; queues +8 STREET-event chance | `portraits/pahlavi.png` | `story/pahlavi_address.png` |
| N2 | `news_bibi_strike` | IDF Strike on Natanz | Green | delta | −8 CHEST, −4 GRIP | `portraits/bibi.png` | `story/natanz_strike.png` |
| N3 | `news_macron` | Macron Statement | Green | delta | +3 ALL | `portraits/macron.png` | `story/macron_statement.png` |
| N4 | `news_rubio` | Rubio Podium | Green | delta | +4 LEV, +2 ALL | `portraits/rubio.png` | `story/rubio_podium.png` |
| N5 | `news_starmer` | Starmer Downing Street | Green | delta | +2 ALL | `portraits/starmer.png` | `story/starmer_downing.png` |
| N6 | `news_mossad_cyber` | Mossad Cyber Unit | Green | delta, disable | −6 CHEST; disables MESSAGE 2 days | `portraits/mossad.png` | `story/mossad_cyber.png` |
| N7 | `news_mek_leak` | MEK Drone Leak | Green | delta | −4 GRIP, +2 LEV | `portraits/mek.png` | `story/mek_leak.png` |
| N8 | `news_anonymous_iran` | Anonymous — Inside Iran | Gold | delta | −3 GRIP, +3 LEV | `portraits/anonymous_iran.png` | `story/anonymous_broadcast.png` |
| N9 | `news_diaspora_rally` | Diaspora Rally — Westwood | Gold | delta | +4 ALL, −2 GRIP | `portraits/diaspora.png` | `story/diaspora_westwood.png` |
| N10 | `news_rajavi` | Maryam Rajavi Communiqué | Green | delta | +2 LEV, −2 PROXY | `portraits/rajavi.png` | `story/rajavi_communique.png` |
| N11 | `news_oil_strike` | Oil Worker Strike — South Pars | Gold | delta | −10 CHEST, −3 GRIP | `portraits/oil_worker.png` | `story/oil_strike.png` |
| N12 | `news_smuggled_video` | Smuggled Rooftop Video | Gold | delta | −4 GRIP; sets STREET intel flag | `portraits/anonymous_iran.png` | `story/smuggled_video.png` |
| N13 | `news_basij_defection` | Basij Conscript Defection | Gold | delta | −5 GRIP, +3 LEV | `portraits/defector.png` | `story/basij_defection.png` |
| N14 | `news_liberated_zone` | Liberated Zone Declared | Gold | delta, queue | −6 GRIP; queues ARM JAVIDAN +3 effect | `portraits/resistance_fighter.png` | `story/liberated_zone.png` |
| N15 | `news_foreign_enforcers` | Foreign Enforcers Visible | Gold | delta | −4 GRIP, +4 ALL; amplifies Trump STREET +2 | `portraits/fatemiyoun.png` | `story/foreign_enforcers.png` |

### Regime / Regime-Allied Events (Red border)

| # | ID | Name | Border | Effect Type | Effects | Portrait | Scene Art |
|---|----|----|--------|-------------|---------|----------|-----------|
| N16 | `news_salami_parade` | Salami Parade | Red | delta | +3 GRIP | `portraits/salami.png` | `story/salami_parade.png` |
| N17 | `news_qaani_threat` | Qaani Threat | Red | delta | +2 GRIP, −2 ALL | `portraits/qaani.png` | `story/qaani_threat.png` |
| N18 | `news_ghalibaf_speech` | Ghalibaf Majles Speech | Red | delta | +2 GRIP, +1 PROXY | `portraits/ghalibaf.png` | `story/ghalibaf_speech.png` |
| N19 | `news_taeb_cell` | Taeb Cell Formation | Red | delta, disable | +3 GRIP; disables ARM JAVIDAN 1 day | `portraits/taeb.png` | `story/taeb_cell.png` |
| N20 | `news_larijani_returns` | Larijani Returns | Red | delta | +2 ALL (backchannel hope) | `portraits/larijani.png` | `story/larijani_returns.png` |
| N21 | `news_khatami_letter` | Khatami Open Letter | Red | delta, disable | +3 ALL; disables AIRSTRIKE 2 days | `portraits/khatami.png` | `story/khatami_letter.png` |
| N22 | `news_shamkhani` | Shamkhani Back-Channel | Red | delta | +2 GRIP, −3 LEV | `portraits/shamkhani.png` | `story/shamkhani_channel.png` |
| N23 | `news_iravani_un` | Iravani at the UN | Red | delta | +3 ALL, −2 LEV | `portraits/iravani.png` | `story/iravani_un.png` |
| N24 | `news_irib_confession` | IRIB On-Air Confession | Red | delta | +4 GRIP, +4 ALL (world outrage) | `portraits/irib_anchor.png` | `story/irib_confession.png` |
| N25 | `news_nilufari_crackdown` | Nilufari Basij Crackdown | Red | delta | +5 GRIP, +3 ALL | `portraits/nilufari.png` | `story/nilufari_crackdown.png` |
| N26 | `news_rezaee_archive` | Rezaee Historical Archive | Red | delta | +2 GRIP | `portraits/rezaee.png` | `story/rezaee_archive.png` |
| N27 | `news_putin_s400` | Putin's S-400 Crate | Red | delta | +4 GRIP, −4 ALL | `portraits/putin.png` | `story/putin_s400.png` |
| N28 | `news_xi_tea` | Xi Jinping Tea | Red | delta | +3 CHEST, −2 ALL | `portraits/xi.png` | `story/xi_tea.png` |
| N29 | `news_hezbollah_envoy` | Hezbollah Envoy | Red | delta | +2 PROXY | `portraits/hezbollah.png` | `story/hezbollah_envoy.png` |
| N30 | `news_houthi_tanker` | Houthi Tanker Hit | Red | delta | −3 LEV, −4 POL, +2 PROXY | `portraits/houthi.png` | `story/houthi_tanker.png` |

### One-Shot Flagship Events

| # | ID | Name | Border | Trigger | Effects | Portrait | Scene Art |
|---|----|----|--------|---------|---------|----------|-----------|
| N31 | `news_cardboard_mojtaba` | Cardboard Mojtaba Revealed | Gold | MESSAGE exposure OR GRIP < 35 | Forces GRIP collapse → THE LION RISES ending | `portraits/cardboard_mojtaba.png` | `story/cardboard_revealed.png` |

---

## D. Summary Counts

| Category | Count |
|----------|-------|
| Trump in-roster cards | 9 |
| IRGC in-roster cards | 9 |
| Allied/Opposition newsfeed events | 15 |
| Regime/Regime-allied newsfeed events | 15 |
| One-shot flagship events | 1 |
| **Total playable elements** | **49** |

---

## E. Art Asset Cross-Reference

| Asset Type | Count | Native Size | Location |
|------------|-------|-------------|----------|
| Move-Event Art (cards) | 18 | 240 × 360 | `moves/` |
| Character Portraits | ~35 | 96 × 96 | `portraits/` |
| Story Element Scenes | ~31 | 480 × 270 | `story/` |

Full prompt specifications: see `04_ART_DIRECTION.md`.

---

*End of 02_CARD_LIST.md*
