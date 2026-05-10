# BATCH — Story / Cinematic Scenes (UI-FREE REGENERATION)

This is the **single source of truth** for every narrative-moment image in the game. If you only generate from one document, generate from this one. Every prompt below is engineered to produce a **pure cinematic scene** — no HUD bars, no percentage pips, no buttons, no menu chrome. The HTML overlays the real game UI on top at runtime; anything baked into the source PNG visually collides with it.

> **What's in scope (66 scenes):** opening story panels, character event scenes (originals + expansion), information cards, endings.
> **What's out of scope:** move buttons, IRGC bunker buttons, bar icons, character portraits, the map, the standees. Those are tiny 1:1 or specialized assets covered in `IMAGE_PROMPTS.md` § A/B/G/F/L1/L2.

---

## Why this batch exists

The previous renders of these scenes accidentally baked in HUD elements because **the prompt copy itself mentioned them**. For example, the original N5 prompt said:

> "JAW-MAXX Trump at the Resolute Desk... a Trump-green stat-bar HUD over his shoulder..."

The model dutifully drew a stat-bar HUD. We're fixing that here. Every scene in this batch has been rewritten or audited so:

1. **No prompt asks for HUD bars, percentages, buttons, or game-engine chrome.**
2. **Every prompt ends with the PURE CINEMATIC SCENE tail** (§3 below) as a hard reminder.
3. **The negative prompt explicitly forbids UI overlays** (§2 below).

Diegetic in-world signs ARE fine — banners on a wall, a TV chyron *inside the TV the characters are watching*, a hand-painted strike placard. What's NOT fine is anything that looks like it belongs to *our* game's interface (status bars, score panels, button gradients).

---

## §1 — Master style header (paste BEFORE every prompt body)

```
16-bit pixel art, late 80s/early 90s SNES-era arcade game style,
limited 8–12 color palette per scene, heavy 1px black outlines,
flat cel-shading, no anti-aliasing, no gradients, scanline-friendly.
Dark dystopian neon palette on a deep navy background.
```

---

## §2 — Aggressive anti-UI negative prompt (USE THIS, replaces the old negative)

Paste this entire block into your tool's negative-prompt field for every image:

```
photorealistic, 3D render, octane, blurry, anti-aliased,
smooth gradients, modern cartoon, anime, watercolor,
oil painting, lens flare, depth of field, motion blur,
hands with extra fingers, watermarks, signatures.

NO game UI: no HUD bars, no status bars, no health bars,
no percentage indicators, no score counters, no day counters,
no menu buttons, no overlay icons, no minimap, no game-engine
chrome, no progress meters, no inventory bar, no on-screen
prompts ("Press X"), no rendered captions or subtitles,
no Persian or English text overlays floating outside the scene,
no UI bezels, no rounded-corner panels, no quest markers.
```

---

## §3 — "PURE CINEMATIC SCENE" tail (paste at the END of every prompt body)

```
PURE CINEMATIC SCENE. Fill the entire frame with the described
action only. NO game HUD, NO status bars, NO percentage indicators,
NO buttons, NO menu chrome, NO baked-in subtitles or captions.
The host HTML overlays the real game UI on top at runtime; any UI
element in this image will visually collide with it.
Diegetic in-world signage (banners, posters, signs that exist
inside the scene's world) is allowed; floating game UI is not.
```

---

## §4 — Color palette (lock to these hex values, max ~10 per scene)

| Role            | Hex       | Notes                              |
| --------------- | --------- | ---------------------------------- |
| Background      | `#06080c` | Deep navy / near-black             |
| Trump green     | `#52ff8f` | Primary US accent                  |
| Trump green dk  | `#1ecc5e` | Shadow tone for US assets          |
| Warning yellow  | `#ffd54a` | Caution / Political Capital        |
| IRGC red        | `#ff5a67` | Primary Iran-regime accent         |
| IRGC red dk     | `#c0222e` | Shadow tone for regime assets      |
| Allies cyan     | `#5ad7ff` | Allies bar / Israel/Gulf assets    |
| War Chest orange| `#ff9e3a` | Money / oil revenue                |
| Proxies magenta | `#ff5ad7` | Proxies / Hezbollah / Houthis      |
| Skin warm       | `#f4c89c` | Faces                              |
| Skin shadow     | `#a86c4a` | Face shadow                        |
| Pahlavi gold    | `#ffd24a` | Lion & Sun emblem                  |

---

## §5 — Output rules

- **Format:** PNG, solid `#06080c` background unless transparent specified.
- **Native size:** generate at the size listed per scene group (story panels and event scenes are typically **256×144** or **480×270**; info cards and endings are **480×270**). Upscale 3× with **nearest-neighbor / point sampling only** — never bicubic, never bilinear.
- **Persian / English text:** do NOT bake legible glyphs into the image. The HTML overlays text with the Vazirmatn font. Persian script mentioned in a prompt body is contextual reference only — render as abstract pixel-block shapes if a sign is part of the composition.
- **No real-world photographic likeness.** All character renderings are stylized pixel-art editorial portraits — recognizable by silhouette / wardrobe / setting, not facial fidelity.

---

# §6 — THE 66 PROMPTS

## A. Opening story panels (5)

Path: `images/story/`. Native size: **480 × 270**.

### A.1 — `01-the-call.png` — THE CALL

```
16-bit pixel-art TV-broadcast scene. Reza Pahlavi at a podium speaking calmly into a single boom-microphone, dressed in a dark suit with a small Lion & Sun lapel pin glowing Pahlavi-gold. Behind him a large Lion & Sun emblem on a deep crimson backdrop. In the foreground, the edge of a CRT television showing the broadcast — its CRT bevel and a slight phosphor glow framing the scene. In the corner of the room, a faint reflection of an Iranian family gathered around the TV: an old grandmother, a teenage daughter, a small boy on the floor — all listening intently. Mood: dignified, historical, the weight of a turning point. Composition: Pahlavi center-left at podium, Lion & Sun emblem dominating the upper-mid background, CRT bevel framing the right edge, family reflection lower-right small. Palette: Pahlavi-gold lapel + Pahlavi-gold emblem + cyan CRT phosphor + warm skin tones + deep navy negative space.
[append §3 tail]
```

### A.2 — `02-the-surge.png` — THE SURGE

```
16-bit pixel-art three-quarter aerial perspective looking down a major Tehran intersection at night, completely choked with protesters as far as the eye can see. Hundreds of small Pahlavi-gold Lion & Sun pennants bobbing in the crowd. Two protesters mid-foreground are dancing — a young woman with hair uncovered swinging a small girl on her shoulders. Helicopters with searchlights overhead. The Azadi Tower silhouette in the deep upper-right against a star-filled sky. Mood: euphoric, defiant, joyful. NOT yet violent — this is the surge BEFORE the massacre. Composition: sweeping diagonal road from foreground-left to upper-right, dancers mid-foreground, Azadi Tower silhouette upper-right. Palette: deep navy night + Pahlavi-gold pennants + warm streetlamp gold + cyan helicopter searchlight beams + warm skin tones.
[append §3 tail]
```

### A.3 — `03-the-massacre.png` — THE MASSACRE

```
16-bit pixel-art respectful documentary scene at dawn after the crackdown. A wide Tehran avenue, surface charred and littered with spent brass shell casings, a single torn Lion & Sun flag draped reverently over a covered body in the foreground (silhouette only, no gore — implication only). In the mid-ground, an IRGC machine-gun-mounted truck recedes, its barrel still smoking. In the deep background, a line of unmarked 18-wheeler trucks. The dawn sky is a low-saturation sickly pink with a single black smoke plume rising. Mood: solemn, tragic, NOT exploitative — visual restraint is paramount. Composition: flag-covered body lower-foreground center (focal point), MG truck mid-frame angled away, 18-wheelers distant horizon, smoke plume vertical right-edge. Palette: ash-grey + low-saturation IRGC-red shell casings + Pahlavi-gold flag + sickly dawn pink + black smoke.
[append §3 tail]
```

### A.4 — `04-the-impossible.png` — THE IMPOSSIBLE

```
16-bit pixel-art split-composition diptych. LEFT HALF: Khamenei's official wall portrait framed in mourning black, with cracked glass radiating from a small bullet-shaped hole in the upper-third of the frame. A single black ribbon hangs across the corner. The wall around the portrait is bare. RIGHT HALF: a dim hospital room with a thin figure (Mojtaba) lying inert under a sheet on a bed, multiple monitors showing flatlining waveforms (the monitors are physical CRT props inside the scene, not game UI). Beside the bed, two regime propaganda crew members are setting up a CARDBOARD CUTOUT of Mojtaba — the cardboard's bent edge and the masking-tape brace on its back are visible (the joke). A studio light on a tripod glows magenta. The ceiling above both halves has visible cracks running between them. Composition: vertical split right at frame center; ceiling cracks bridge both halves. Palette: cold cyan medical light + IRGC-red mourning ribbons + cardboard-brown + magenta studio light + black cracked-glass.
[append §3 tail]
```

### A.5 — `05-the-stakes.png` — THE STAKES *(REWRITTEN — no HUD bars)*

```
16-bit pixel-art three-panel triptych standoff composition, the three thirds separated only by thin vertical bands of deep-navy negative space. LEFT THIRD: JAW-MAXX Trump at the Resolute Desk in the Oval Office, phone in hand, jaw squared, lit dramatically from above by a Trump-green desk-lamp glow casting his determined silhouette in profile. CENTER THIRD: a vertical-aerial view of the Strait of Hormuz at night, the choke-point glowing with a Pahlavi-gold luminous trade-path between Iranian and Omani coasts, oil tankers transiting, tiny Iranian protesters as pennant-bearing silhouettes lining the Iranian coast. RIGHT THIRD: an IRGC Commander in his concrete bunker, helmet off on the console, palm flat on a paper war-room map (paper map only — no animated UI), lit from below by a sickly IRGC-red console-screen glow. The three figures all look toward the center — toward the strait, toward the people. Mood: the world holds its breath; one human on each side, the people in the middle. Composition: classic triptych frame, equal thirds. Palette: Trump-green lamp left + IRGC-red glow right + Pahlavi-gold trade-path center + deep navy negative space.
[append §3 tail]
```

---

## B. Original character event scenes — REGENERATE these (12)

These are the 12 scenes already on disk that have UI bleed-through. Path: `images/events/`. Native size: **480 × 270**.

### B.1 — `cardboard-mojtaba.png`

```
16-bit pixel art press-photo composition: a state-TV news set, IRIB-style backdrop. In the center, a life-sized CARDBOARD CUTOUT of Mojtaba Khamenei in cleric robes, propped on a wooden stand. The shot is taken from a slight 30° side angle so the FLAT EDGE of the cardboard, the wooden A-frame stand, and a strip of grey gaffer tape are all clearly visible. A microphone bouquet on a stand in front of him. A nervous IRGC officer at the edge of frame trying to block the view with his hand. Tone: dark satire — the cutout should look earnestly propped up and accidentally exposed. Palette: muted regime-red and beige with a single ridiculous warning-yellow stage light.
[append §3 tail]
```

### B.2 — `assembly-deadlock.png`

```
16-bit pixel-art interior of the Assembly of Experts chamber in Qom. A horseshoe of robed clerics in turbans (white, black, brown) shouting at each other. Pixel-art speech-balloon outlines (empty, no text) crossing each other. A cracked portrait of the late Ali Khamenei on the back wall, draped in mourning black. One cleric is asleep. Composition: wide horseshoe across full frame, portrait on back wall centered. Palette: stale yellow-incandescent.
[append §3 tail]
```

### B.3 — `qaani-threat.png`

```
16-bit pixel-art press-conference scene of Esmail Qaani — a stern, mustached IRGC general in dark olive uniform with red shoulder boards — at a podium with multiple microphones. IRGC banner on the back wall. Stage-lit harshly. His hand raised in a clenched fist. Soldiers in formation behind him in soft focus. Composition: Qaani waist-up center-frame, mics radiating from podium, soldiers in BG. Palette: aggressive red.
[append §3 tail]
```

### B.4 — `larijani-returns.png`

```
16-bit pixel-art parliament floor (Majles): Ali Larijani — bearded, glasses, beige cleric robe — at a microphone, addressing seated rows of MPs. Calmer palette than the Qaani scene — warmer beiges, muted greens. A few MPs leaning forward attentively. Sun streaming through tall arched windows in pixel-bands. Composition: Larijani 3/4 view at right, audience receding to vanishing point at left.
[append §3 tail]
```

### B.5 — `khatami-letter.png`

```
16-bit pixel-art still-life: an ornate Persian samovar steaming on a small table, beside an open hand-written letter on aged paper (the writing is abstract pixel-block shapes, not legible glyphs). A pair of reading glasses rests on the letter. A framed photo of Mohammad Khatami (older, white beard, green sash) faces the camera. A Persian carpet pixel pattern on the floor edge. Mood: warm domestic, "voice from the past." Composition: letter foreground center, samovar right, framed photo back-left.
[append §3 tail]
```

### B.6 — `putin-sams.png`

```
16-bit pixel-art rail-yard at night somewhere near the Caspian. A Russian freight train with crates labeled with stylized Cyrillic-looking pixel marks (no real text) being unloaded by IRGC personnel. A Russian flag pin and a small portrait of Putin nailed crookedly on the side of a railcar. Cold blue-grey palette with single orange sodium-lamp glow. Composition: train horizontal across mid-frame, crate being lifted by crane upper-right.
[append §3 tail]
```

### B.7 — `bibi-strike.png`

```
16-bit pixel-art high-altitude scene: a single Israeli F-35I Adir (Star of David subtly on tail) banking sharply over the Natanz nuclear-facility complex, which is below in pixel ground-detail with circular cooling structures. Sonic-boom shockwave drawn as concentric pixel rings. Allies-cyan dominant. Persian-night palette below the jet. Composition: F-35 upper-right, Natanz site centered below, shockwave concentric.
[append §3 tail]
```

### B.8 — `pahlavi-address.png`

```
16-bit pixel-art TV-broadcast composition: Crown Prince Reza Pahlavi behind a simple desk, calm and dignified, in a dark suit. Behind him: the pre-1979 Lion & Sun flag of Iran (red-white-green stripes with the gold lion-and-sun emblem center) — highly recognizable and proudly rendered. Pahlavi-gold rim light from a small lamp on the desk. A subtle scanline overlay across the entire scene like an old broadcast feed (NOT a UI bar — the whole image is the broadcast). Tone: noble, statesmanlike. Composition: Pahlavi 3/4 portrait at desk, flag filling upper 70% of background.
[append §3 tail]
```

### B.9 — `houthi-tanker.png`

```
16-bit pixel-art Red Sea scene at dusk: a small unmanned Houthi drone-boat (with crude IRGC-magenta painted markings) closing on a much larger commercial oil tanker. Wake of the drone-boat as a hot-pink streak. Tanker hull is grey-cyan. Burning-pink sunset on horizon. Sense of looming impact. Composition: drone-boat foreground-left, tanker mid-right, wake connecting them.
[append §3 tail]
```

### B.10 — `maga-revolt.png`

```
16-bit pixel-art conference-stage scene: a tall, smug TV-pundit (Tucker-Carlson-style — blue blazer, blond hair, square jaw, no specific face) at a podium, "AMERICA FIRST" banner-shape behind him (no readable text — just a pixel banner with stars). Audience hands raised in foreground silhouette. Trump-green stage lights — but the green is sour, sickly. A diegetic "BREAKING" cable-news lower-third bar appears INSIDE a TV monitor in the corner of the room (it's part of the scene's world, not our game's UI). Composition: pundit at podium center, banner upper-half, audience silhouettes lower-third, TV monitor in corner.
[append §3 tail]
```

### B.11 — `mek-leak.png`

```
16-bit pixel-art monitor-cluster scene: three CRT-style monitors on a desk showing greyscale aerial drone footage of Iranian missile sites. Pixel timecode overlays in the corner of each screen ARE part of the in-world drone-footage feed visible on the CRTs (diegetic, not floating UI). A folder labeled with a stylized pixel symbol that hints at "MEK" without being explicit (a faded star within a triangle). Cold green CRT-glow palette. Composition: three monitors in row across mid-frame, folder foreground-center.
[append §3 tail]
```

### B.12 — `diaspora-la.png`

```
16-bit pixel-art crowd scene: the Westwood Tehrangeles district in LA, daytime. Crowd of diverse Iranian-Americans waving Lion-and-Sun flags. Palm trees in pixel silhouette. A pixel placard with bold abstract Pahlavi-gold shapes (no readable text). Bright cyan California sky. Joyful palette. Composition: crowd filling lower 60% of frame, palms upper-left, flag-poles diagonals throughout.
[append §3 tail]
```

---

## C. Original character event scenes — never generated, prompts NEW (6)

Path: `images/events/`. Native size: **480 × 270**.

### C.1 — `qaani-backlash.png` — QAANI AFTERMATH

```
16-bit pixel-art aftermath scene in a desolate IRGC dock courtyard at dawn. Two burned-out IRGC speedboats slumped at the pier, an oil slick on the water, an officer's broken sunglasses on the cracked concrete. In the mid-distance, IRGC commander Esmail Qaani in dark olive uniform stands alone, hand on his temple, staring at the wreckage. A bent QUDS FORCE banner half-fallen on a snapped flagpole, the cloth still trying to flutter. A single seagull silhouette wheels overhead. Mood: a humiliation he cannot pin on anyone. Composition: speedboats foreground-left, Qaani mid-right, broken flagpole upper-right cropping. Palette: cold blue-grey morning + rust-orange burn marks + IRGC-olive uniform + faint warning-yellow oil-slick reflections.
[append §3 tail]
```

### C.2 — `martyr.png` — EXECUTE_DISSIDENTS AFTERMATH

```
16-bit pixel-art respectful documentary scene. A coffin draped in the Islamic Republic flag carried on the shoulders of four uniformed Basij down a Tehran street, surrounded by a small staged crowd of mourners holding regime-issued placards (placards have abstract pixel-block markings, not readable text). In the windows of buildings above, real Iranian residents watch with closed faces — one balcony quietly drapes a small Pahlavi-gold Lion & Sun pennant in defiance. A regime stage-manager in a dark suit with a clipboard checks his watch off-frame. Mood: propaganda funeral, civic resistance hidden in plain sight. Composition: coffin processional center diagonal, staged mourners filling lower 60%, balconies with watchers upper third, defiant pennant on one balcony as the visual hook upper-right. Palette: regime-red flag + ash-grey street + cold-bone winter sky + warm skin tones + single Pahlavi-gold pennant accent.
[append §3 tail]
```

### C.3 — `mossad-cyber.png` — MOSSAD CYBER UNIT

```
16-bit pixel-art darkened operations room deep inside an IDF Unit 8200 facility, late night. A row of CRT-style monitors all showing fragmented Persian-script source code cascading green-on-black (abstract pixel-blocks, not readable glyphs). CENTER: an anonymous figure in dark IDF uniform, face mostly in shadow except a faint cyan rim-light, fingers paused above an old beige mechanical keyboard. On the wall behind: a pinned printout marked "NATANZ" with red string trailing to a smaller "FORDOW" pin. The clock on the wall reads 03:14 — the moment a centrifuge somewhere just stopped spinning. Mood: surgical, silent, the war fought without a uniform. Composition: monitor row across mid-frame, hooded figure center-foreground at keyboard, printout-with-red-string upper-right wall. Palette: cyan CRT glow + IDF-olive shadow + warm faint warning-yellow lamp + deep navy.
[append §3 tail]
```

### C.4 — `opec-veto.png` — OPEC OIL MINISTER

```
16-bit pixel-art high-tension OPEC summit boardroom in Vienna. Long oval table with twelve country nameplates in abstract pixel-block lettering. A Saudi oil minister in a white thawb and red-and-white shemagh stands at one end, hand raised palm-down — the universal "stop the increase" gesture. Across from him, an Iranian representative in a dark cleric-adjacent suit slumps in his chair, face flat. Production-quota charts on the back wall show a downward red arrow drawn as a real chart on paper (not a UI overlay). A wooden gavel suspended mid-air just before striking. Composition: Saudi minister stage-right standing, Iranian rep stage-left seated, gavel hanging center-frame, chart on rear wall. Palette: warm boardroom wood + Saudi-white robe + red shemagh accent + IRGC-red Iranian regalia + warning-yellow chart accents + deep navy.
[append §3 tail]
```

### C.5 — `hezbollah-envoy.png` — NAIM QASSEM ARRIVES TEHRAN

```
16-bit pixel-art covert nighttime arrival scene. A black armored Mercedes with diplomatic plates pulls up at a Tehran airport service gate. The rear door swings open to reveal a bearded Hezbollah delegate in a dark suit (Naim Qassem) stepping onto wet asphalt, lit only by the single sodium lamp above the gate. An IRGC officer in olive uniform waits with a folded yellow-and-green Hezbollah pennant in his hands. A faint silhouette of a transport jet on the tarmac in the deep distance. Mood: covert continuity, the wire reopens. Composition: Mercedes diagonal foreground, delegate stepping out center, IRGC officer mid-right with pennant, transport jet silhouette upper-back. Palette: deep navy night + cold sodium-yellow gate light + IRGC-olive uniform + magenta-and-yellow pennant + black armored car.
[append §3 tail]
```

### C.6 — `anonymous-radio.png` — ANONYMOUS — INSIDE IRAN

```
16-bit pixel-art quiet rooftop scene at deep night, Tehran skyline silhouetted in the deep background. CENTER: a small short-wave radio transmitter on a milk crate, its single red transmit-light glowing, antenna disappearing upward off-frame. Concentric pixel rings radiate outward as broadcast waveforms. To one side, an anonymous figure (silhouetted, face entirely in shadow, hood up) leans toward the microphone — only the rim of one cheek and the curl of fingers around the mic catch the warm transmit-light glow. The deepest background shows a sea of dark apartment windows, with FOUR small windows lit warmly, indicating quiet listeners. Mood: a single voice reaching millions. Composition: transmitter center, hooded figure left-of-center bent toward mic, broadcast rings expanding outward, distant apartment windows in the background. Palette: deep navy night + cold cyan waveform rings + warm radio-light glow on cheek/finger + tiny warm window-lights in background.
[append §3 tail]
```

---

## D. Expanded character event scenes (18)

Path: `images/events/`. Native size: **256 × 144**.

### D.1 — `rubio-podium.png`

```
A 16-bit pixel-art editorial scene. State Department briefing room. CENTER: Marco Rubio at the podium, dark navy suit, red tie, hand mid-gesture, jaw set. BACKDROP: large US State Department seal on dark blue wall. SIDE LECTERN: an aide turning a page labeled "SECONDARY SANCTIONS." A row of microphones bristles at podium edge. Camera sees the speaker from press-pit angle, slightly low. Mood: legal, hawkish, controlled. NO real-world photographic likeness — stylized pixel-art editorial portrait only.
[append §3 tail]
```

### D.2 — `xi-tea.png`

```
A 16-bit pixel-art geopolitical scene. Beijing reception room, low warm lighting. CENTER: Xi Jinping seated at low lacquered tea table, dark suit, hands resting on knees, calm half-smile. OPPOSITE: an Iranian envoy in dark suit leaning forward, papers between them showing oil tanker silhouettes and a 25-year contract. BACKDROP: red-and-gold panel art, faint gold dragon motif. Mood: patient, immovable, transactional. NO photographic likeness.
[append §3 tail]
```

### D.3 — `macron-elysee.png`

```
A 16-bit pixel-art diplomatic scene. Élysée Palace press hall, gold-framed mirrors, parquet floor. CENTER: Macron at podium with French and EU flags, mid-gesture, signature side-part hair. RIGHT: an Iranian foreign minister in cleric-adjacent dark robes shaking his hand awkwardly. BACKGROUND: photographers' flash bursts, white sparks across pixels. Tiny sign on podium reads "PARIS" in EU blue. Mood: courtly, slightly improvised, allies will be furious. NO photographic likeness.
[append §3 tail]
```

### D.4 — `starmer-downing.png`

```
A 16-bit pixel-art political-procedural scene. 10 Downing Street cabinet room, long polished wood table. CENTER: Keir Starmer in dark suit, glasses on, reading a thick legal brief stamped "PRIVILEGED — IRAQ WAR PRECEDENTS." TABLE: stacks of red folders, two open laptops, one Union Jack mug. WALL: black-and-white portraits in pixel mosaic. Mood: cautious, lawyerly, the British state grinding slowly. NO photographic likeness.
[append §3 tail]
```

### D.5 — `zelensky-bunker.png`

```
A 16-bit pixel-art wartime intelligence scene. Kyiv command bunker, exposed concrete walls, single bare bulb glow. CENTER: Zelensky in his trademark olive fleece, beard, leaning over a metal table. ON TABLE: a captured Iranian Shahed-136 drone with its triangular wing visible, casing opened to expose tiny circuit boards, labeled "IRGC SUPPLY CHAIN." Two Ukrainian officers behind him in body armor with yellow shoulder patches. BACKGROUND: a Ukrainian flag draped behind, slightly crumpled. Mood: dark humor under siege, intel-as-currency. NO photographic likeness.
[append §3 tail]
```

### D.6 — `lindsey-rally.png`

```
A 16-bit pixel-art rally scene. A diaspora rally in Los Angeles (Westwood). CENTER: an older US senator in a charcoal suit and red tie standing on a small wooden stage, mic in hand, fist half-raised. CROWD: a sea of pixel-art protesters waving the pre-revolution Lion-and-Sun flag, some holding signs reading "WOMAN LIFE FREEDOM" and "FREE IRAN." Banner above the stage reads "AMOO LINDSEY." Sky: dusk pink-purple. Mood: defiant, transatlantic alliance, genuine warmth. NO photographic likeness.
[append §3 tail]
```

### D.7 — `katz-warroom.png`

```
A 16-bit pixel-art military operations scene. IDF underground war room, blue-tinted lighting. CENTER: Israel Katz, white open-collar shirt no tie, sleeves rolled up, leaning over a glowing tactical map of the Persian Gulf and Iran (the map is a back-lit physical situation table inside the room — a real prop, not floating UI). AROUND HIM: three IDF officers in olive uniforms, one wearing a beret. WALL: huge pixel-art map of Iran with red threat markers, satellite imagery overlay tiles, a digital wall clock reading "03:00." Mood: quiet, surgical, no announcement coming. NO photographic likeness.
[append §3 tail]
```

### D.8 — `ghalibaf-majlis.png`

```
A 16-bit pixel-art legislative-chamber scene. Iranian Majlis hall, tiered green seats, brass railings. CENTER: Speaker Ghalibaf at the speaker's chair on a raised dais, gavel in hand, dark suit, cropped grey beard, expression flat. BACKDROP: large Iranian flag and Khatam al-Anbiya construction-arm seal pinned over the chair. FOREGROUND: rows of Majlis deputies in dark suits and clerical robes. A scrolling news-style banner across the bottom of an in-world chamber screen reads "NATIONAL SECURITY BILL — APPROVED" (it's the chamber's own LED ticker, diegetic, NOT our game's UI). Mood: institutional laundering, quiet brutality. NO photographic likeness.
[append §3 tail]
```

### D.9 — `taeb-cell.png`

```
A 16-bit pixel-art interrogation scene. Tehran prison cell, single overhead bulb, scorched concrete walls. CENTER: a hooded male figure in orange jumpsuit seated at a small metal table, head bowed, reading from a paper labeled "اعتراف" (CONFESSION — pixel-block shapes only, no real glyphs). LEFT: a TV camera on a tripod, red recording light glowing. RIGHT (in shadow): the silhouette of an older bearded cleric — Taeb — in dark IRGC uniform jacket, expression unreadable. WALL: a faded poster of Khomeini half-peeled. Mood: cold, scripted, machine-of-state. NO photographic likeness.
[append §3 tail]
```

### D.10 — `salami-parade.png`

```
A 16-bit pixel-art military-parade scene. Tehran parade ground, dusk, low angle from below the podium. CENTER: IRGC Commander-in-Chief Hossein Salami in olive-green uniform with red shoulder boards and gold braid, fist thrust upward, beard cropped, mouth open mid-shout. BACKDROP: a massive banner with stylized missiles and the slogan "هشت دقیقه" (EIGHT MINUTES — pixel-block shapes only, no real glyphs). ROWS: IRGC soldiers below in olive uniforms, rifles vertical, marching in lockstep, faces uniformly stern. SKY: smoke-streaked, four ballistic missile silhouettes rising in pixel-art trails. Mood: maximalist, theatrical, dangerous. NO photographic likeness.
[append §3 tail]
```

### D.11 — `rezaee-archive.png`

```
A 16-bit pixel-art institutional-archive scene. A dimly lit IRGC founders' hall, parquet floor, brown wood paneling. CENTER: Mohsen Rezaee, white beard, dark suit and modest tie, standing in front of a wall of faded sepia photographs of young IRGC commanders from 1981. He holds a thick brown ledger labeled "1986 LEDGER — VAULT 7." TABLE: an old rotary-dial phone, a brass desk lamp glowing yellow, a tarnished IRGC pin. WINDOW: dusty light slanting in. Mood: institutional memory, networks older than the EU. NO photographic likeness.
[append §3 tail]
```

### D.12 — `nilufari-crackdown.png`

```
A 16-bit pixel-art urban-crackdown scene. A Tehran avenue at night, neon signs in Persian (pixel-block shapes only, no real glyphs). CENTER: a column of Basij motorbike riders rolling forward, each rider in black helmet and olive jacket, batons in hand. LEAD RIDER: an IRGC ground-ops commander in a dark green field jacket, no helmet, pointing forward with one outstretched arm. BACKGROUND: scattered protesters running, one red headscarf flying, a smashed satellite dish on the curb. SKY: orange smoke from a tire fire reflecting in puddles. Mood: brutal, disciplined, the world is watching. NO photographic likeness.
[append §3 tail]
```

### D.13 — `shamkhani-channel.png`

```
A 16-bit pixel-art back-channel diplomacy scene. A Riyadh palace anteroom, marble columns, gold-leaf ceiling, low warm lamp. CENTER: an older bearded Iranian envoy in dark cleric-adjacent suit (Shamkhani) seated on an ornate sofa. OPPOSITE: a Saudi prince in white thawb and red-and-white shemagh, also seated. BETWEEN THEM: a low table with two delicate teacups, a stack of folders, and a handwritten note. BACKGROUND: a Chinese diplomat half-visible in the doorway, hands clasped, watching. Mood: deceptive moderation, the deal is real and so is the trap. NO photographic likeness.
[append §3 tail]
```

### D.14 — `iravani-un.png`

```
A 16-bit pixel-art United Nations scene. UN Security Council horseshoe chamber, blue carpet, the famous Norwegian wood mural in pixel form. CENTER: Iran's ambassador Iravani at the IRAN nameplate, dark suit, hand raised holding a single sheet of paper. AROUND HIM: other ambassadors in muted suits at their desks (small "RUSSIA" and "CHINA" placards visible — both raising their hands in vote alignment). VOTING BOARD: pixel-art display showing red X marks on a draft resolution titled "IRAN ARMS EMBARGO" (it's the UN chamber's own physical voting display, diegetic, NOT our game's UI). Mood: paperwork as warfare, ghost-banker statecraft. NO photographic likeness.
[append §3 tail]
```

### D.15 — `irib-confession.png`

```
A 16-bit pixel-art state-television scene. Inside an IRIB studio, anchor desk under harsh studio lights. CENTER: a male anchor in dark suit gesturing to an in-room broadcast monitor that displays a hooded, downcast detainee being interviewed in a dim cell. The IRIB green-and-white "صدا و سیما" lower-third chyron and the IRIB logo in upper corner are PART OF THE TV BROADCAST visible inside the in-world monitor — they are NOT our game's UI. BACKGROUND: control-room window, technicians at a mixing board, signal-jamming waveforms pulsing on a side screen. Mood: propaganda factory, signal as weapon. NO photographic likeness.
[append §3 tail]
```

### D.16 — `aqil-empty-chair.png`

```
A 16-bit pixel-art memorial scene. Hezbollah command room in Beirut's Dahiyeh suburb. CENTER: an empty leather command chair behind a map table, a green-and-yellow Hezbollah flag draped over its back. ON THE TABLE: a hand-drawn raid map of northern Israel labeled "GALILEE — RADWAN PLAN," partly singed at the edges. ABOVE THE CHAIR: a framed pixel-art portrait of Ibrahim Aqil with a black mourning ribbon across the corner. WALL: cracked from a recent strike, dust still settling. Mood: succession vacuum. NO photographic likeness.
[append §3 tail]
```

### D.17 — `afif-broadcast.png`

```
A 16-bit pixel-art destroyed-newsroom scene. The interior of Hezbollah's Al-Manar TV studio after an Israeli precision strike. CENTER: a toppled anchor desk with the yellow-and-green Al-Manar logo, papers scattered, a dead microphone hanging by its cable. BACKGROUND: shattered glass, the broadcast camera knocked to its side, red recording light dim and flickering. ON THE WALL: a cracked monitor still showing the last frame — Muhammad Afif mid-sentence, frozen. SKY: a strip of grey Beirut dawn through a hole in the ceiling. Mood: information operation silenced. NO photographic likeness.
[append §3 tail]
```

### D.18 — `safa-resignation.png`

```
A 16-bit pixel-art quiet-power scene. An office at Hezbollah's Beirut HQ, late evening, a single lit desk lamp. CENTER: an older man (Safa) in a dark grey suit, beard close-trimmed, placing a brass nameplate face-down on the desk. ON THE DESK: a single typed letter labeled "RESIGNATION — 5 FEB 2026," a black diplomatic pouch, a passport with a UAE entry stamp visible on its open page. WALL: a photo of Nasrallah, slightly askew. WINDOW: faint Beirut city lights through closed blinds. Mood: an era ends without a press conference. NO photographic likeness.
[append §3 tail]
```

---

## E. Information-card scenes (20)

Path: `images/info/`. Native size: **480 × 270**. These are educational beats that fire mid-game alongside character events. Use ONE clear focal point per scene — the player needs to read the image fast.

### E.1 — `bloody-january.png`

```
16-bit pixel-art respectful documentary scene at dawn. A row of unmarked 18-wheeler trucks at the edge of a Tehran avenue, with bodies in covered shrouds being loaded by uniformed IRGC. An older officer in shadow tallies on a clipboard, expressionless. In the foreground asphalt: a single child's pink shoe lying abandoned, lit by the first streak of sunrise. The skyline behind shows the Tehran ridge with one column of smoke rising. Mood: documentary-grade horror without explicit gore. Composition: truck row foreground-left, loading mid, child's pink shoe lower-right (visual focus), smoke column distant right. Palette: ash-grey + IRGC-olive uniforms + warning-yellow streetlamp + warm pink-shoe accent + deep navy sky.
[append §3 tail]
```

### E.2 — `internet-blackout.png`

```
16-bit pixel-art Tehran rooftop at deep night. A young Iranian's hand reaches up to plug a cable into a smuggled Starlink dish — its single LED has just turned green. Behind: the entire apartment block below is BLACK except for the IRGC-red checkpoint lights at the major intersections, like cold red eyes scattered across a dark city. In the very foreground, a laptop screen on a milk crate shows pixel-text "VPN CONNECTING" in abstract pixel-block shapes (not legible). Composition: dish + plugging hand foreground-right, dark city backdrop, single point of green light is the visual hero. Palette: deep navy near-black + cyan LED + tiny green dish-light + IRGC-red checkpoints + cool laptop-screen blue.
[append §3 tail]
```

### E.3 — `mahsa-amini.png`

```
16-bit pixel-art respectful memorial portrait. A young Kurdish woman in soft three-quarter profile, her face calm, hair fully visible — long, dark, flowing beyond the frame. Behind her, a wall of stylized handwritten Persian-script calligraphy of "Zan, Zendegi, Azadi" (abstract calligraphy blocks, not legible). A single lit candle in the foreground bottom-center, its small flame the only warm light. Mood: dignified, sacred, NOT mournful. Composition: profile face right of center, calligraphy wall left/back, candle bottom-center as anchor. Palette: warm skin + dark flowing hair + magenta calligraphy on a deep navy wall + Pahlavi-gold candle flame.
[append §3 tail]
```

### E.4 — `javid-shah.png`

```
16-bit pixel-art chest-up close-up of a defiant protester (mid-30s, ambiguous gender, ethnically Persian) shouting at the night sky, mouth open mid-chant, one hand raised in the "long-live" gesture. A small Pahlavi-gold Lion & Sun pin glints on their lapel. In the soft-focus background: hundreds of other protesters with the same posture and gesture, blurred but visibly chanting in unison. Mood: defiant joy, not anger — a release. Composition: centered chest-up portrait, raised hand cropping the upper-right edge, blurred crowd filling background. Palette: Pahlavi-gold pin (visual hero) + warm skin + warning-yellow streetlamp light + deep navy crowd silhouettes.
[append §3 tail]
```

### E.5 — `prince-in-exile.png`

```
16-bit pixel-art quiet evening scene. Reza Pahlavi alone in side-silhouette on a Western-city balcony at night (could be Washington DC or Paris — keep it ambiguous Western). His hands rest on the iron railing. His shadow falls long behind him onto a wall lit by a single sodium streetlamp. Below the balcony: a quiet city of yellow window-lights, no people. On a small table beside him: an unopened letter and a small framed photograph (face away from viewer). Mood: dignified solitude, the weight of forty years. Composition: figure right at railing, city below mid-frame, long shadow trailing left across the wall. Palette: warm sodium-yellow streetlamp + cool navy night sky + warm balcony tones + a single Pahlavi-gold cufflink accent.
[append §3 tail]
```

### E.6 — `1979-hijack.png`

```
16-bit pixel-art horizontal split-composition memory image. LEFT HALF: vintage warm-sepia 1979 Tehran street scene, broad coalition of celebrating protesters — a leftist student with raised fist, a woman without hijab, a labor organizer with a banner, all jubilant. RIGHT HALF: the same crowd being slowly engulfed by a creeping black ink stain spreading from a shadowy clerical figure at the seam. The black ink covers the colorful coalition as it spreads. The figure points off-frame at an unseen Khomeini portrait. Composition: horizontal split with the clerical-shadow figure as the seam-divider, coalition crowd being progressively erased right-to-left. Palette: vintage warm sepia LEFT + black ink spreading RIGHT + crimson banner accents.
[append §3 tail]
```

### E.7 — `lion-and-sun.png`

```
16-bit pixel-art tight, slightly-rendered Lion & Sun emblem on a piece of folded fabric, like an embroidered patch on a faded military banner. The lion holds the curved Persian sword (Zulfiqar-curve), the sun rises behind with rays. Slight fabric folds, patina, and edge-fraying — the look of a banner that has been folded and unfolded for 800 years. Composition: centered medallion, slight off-center to right, fabric folds shaping the lower-left, frayed edge upper-left corner. Palette: Pahlavi-gold + deep crimson background + cream highlights + ash patina edges.
[append §3 tail]
```

### E.8 — `walking-ghosts.png`

```
16-bit pixel-art Tehran alley at first dawn. A column of IRGC soldiers patrolling away from camera in helmets and olive uniforms, but each soldier is rendered with a faint TRANSLUCENT/SPECTRAL aura — visibly half-faded. Their shadows on the pavement are SHORTER than they should be at this angle, as if the men casting them are already partly gone. On the wall behind them: large Pahlavi-gold graffiti of "JAVID SHAH" (abstract Persian script blocks, not legible). Composition: soldier column receding into upper-right vanishing point, graffiti wall left, dawn sky upper-right, foreground bare. Palette: cyan ghost-aura + IRGC-olive uniforms + deep navy alley + Pahlavi-gold graffiti + warm dawn glow upper-right.
[append §3 tail]
```

### E.9 — `basij.png`

```
16-bit pixel-art Tehran alley at dusk. A Basij paramilitary (mid-30s, scruffy beard, plainclothes "lebas-shakhsi" look) on a battered IRGC-red motorbike, riding straight toward camera, baton raised in his right hand. He is the threat. In a doorway to his right: a young woman in a chador stands her ground, NOT cowering — her face is calm, watching him. A mosque dome silhouette in the background. Mood: menacing, but the woman is the moral center. Composition: motorbike charging center-frame head-on, woman in lit doorway right, mosque dome distant left-back. Palette: rust-IRGC-red motorbike + olive plain-clothes + warm doorway warning-yellow + deep navy alley + woman in shadow with pale face.
[append §3 tail]
```

### E.10 — `proxy-octopus.png`

```
16-bit pixel-art literal Octopus rising from a stylized warm-paper map of the Middle East. Its head is a stylized IRGC commander silhouette in a helmet (the "Tehran" head). Four primary tentacles extend out: one wraps Lebanon (with a small Hezbollah flag iconography), one drops on Yemen (Houthi rocket), one curls into Iraq (Kataib pennant), one drapes over Syria (Fatemiyoun crescent). TWO of the tentacles are SEVERED at their tips, dripping IRGC-red. Composition: octopus body center, tentacles radiate outward to map edges, severed tips visible upper-left and lower-right. Palette: IRGC-red octopus body + magenta tentacles + warm paper map + cyan Mediterranean ocean.
[append §3 tail]
```

### E.11 — `bibi-as-ally.png`

```
16-bit pixel-art vertical split composition. UPPER HALF (sky): an Israeli F-15I jet (silhouette only) banking away from a precision-strike on an IRGC missile-storage depot at night, the explosion blooming Pahlavi-gold not red. LOWER HALF (ground): in front of an Iranian government building, a small group of Iranian protesters lit by the distant explosion glow are holding up Israeli flags ALONGSIDE Lion & Sun pennants. One protester reaches up with both hands, as if catching the light. Mood: solidarity across borders. Composition: vertical split, sky scene above, ground scene below; the explosion light from upper half illuminates the protesters in the lower half. Palette: cyan jet + Pahlavi-gold explosion (NOT red) + Israeli-blue flags + Pahlavi-gold pennants + deep navy.
[append §3 tail]
```

### E.12 — `diaspora-loud.png`

```
16-bit pixel-art Westwood Boulevard (Los Angeles, "Tehrangeles") street rally at warm afternoon. An Iranian-American family center-frame: a mother wearing a Lion & Sun headscarf as a pennant tied at her shoulder, a father with a chrome megaphone raised, a young daughter on his shoulders waving a small Pahlavi-gold pennant. Behind them: storefronts with abstract Persian-script signage (calligraphy blocks, not legible). A larger Lion & Sun flag hangs from a balcony above. Palm trees and California sun. Composition: family center, megaphone arc pointing upper-left, balcony flag upper-right, palm tree silhouette right edge. Palette: warm SoCal sun + Pahlavi-gold pennants + cyan California sky + deep navy storefront windows + warm skin tones.
[append §3 tail]
```

### E.13 — `final-phase.png` *(REWRITTEN — diegetic table-map, not "game board")*

```
16-bit pixel-art high-angle shot of a hand-drawn paper strategy map of Iran spread across a warm wood desk. Toy-like wooden soldier pieces in two colors — IRGC-red pieces are being SWEPT off the paper by a giant invisible-hand gust (motion lines indicate the sweep), while Pahlavi-gold pieces are being placed by a careful hand on Tehran, Mashhad, Qom, and provincial cities. A wall-clock leaning against a stack of books in the upper-right shows the hour-hand approaching midnight. A single coffee cup steams beside the map. Mood: a quiet historical moment, not a game. Composition: paper map dominant center, sweeping motion left-to-right, clock upper-right, coffee cup lower-left. Palette: warm tabletop wood + IRGC-red pieces + Pahlavi-gold pieces + warning-yellow clock + deep navy negative space.
[append §3 tail]
```

### E.14 — `free-iran.png`

```
16-bit pixel-art sunrise over Tehran. The Azadi Tower dominates the center-back. A large Lion & Sun flag flies from its spire, catching the first light. Below the tower, people walking toward it from all directions — an old woman with a cane on the left path, a young couple holding hands center, a father with a child on his shoulders right path. Their long pixel-shadows stretch toward the camera, all converging at the camera's point. The sky is gradient sunrise. Mood: triumphant, hopeful, ceremonial. Composition: Azadi Tower center-back as the visual focal point, three converging foreground paths of people, long converging shadows. Palette: Pahlavi-gold sunrise + cyan upper sky + warm skin tones + deep navy ground + Pahlavi-gold flag (visual hero).
[append §3 tail]
```

### E.15 — `hyperinflation.png`

```
16-bit pixel-art Tehran corner-shop scene at dusk. An exhausted middle-aged Iranian woman counts a thick brick of rial notes at the counter, but the loaf of barbari bread in front of her has a price-tag ribbon trailing zeros that wraps around the entire counter twice. Behind her, an old shopkeeper rubs his face. Outside the shop window, a long line of customers waits in the cold. Empty shelves above the counter — only a few cans, a bag of rice. Warning-yellow light from a single bulb. Mood: quiet desperation, dignified survival. Composition: woman + counter foreground, shopkeeper mid-ground, line outside through window upper-right.
[append §3 tail]
```

### E.16 — `currency-spiral.png`

```
16-bit pixel-art high-angle isometric of an Iranian central-bank floor. A massive printing press in the foreground churns out fresh stacks of rial notes that spill onto the floor and immediately get carted off by uniformed IRGC quartermasters with hand-trucks. In the background, terrified bank clerks at empty teller windows wave their hands at angry depositors behind a dim glass partition. Cracks in the ceiling. A portrait of Khamenei on the back wall hangs slightly crooked. Composition: press dominant left foreground, quartermasters mid, depositors right background. Palette: deep navy + Pahlavi-gold money + IRGC-red uniforms.
[append §3 tail]
```

### E.17 — `general-strikes.png`

```
16-bit pixel-art wide shot of a petrochemical facility at Asaluyeh / South Pars at golden hour. The pipes and flare-stacks are SILENT — flares unlit, valves chained shut. A line of about thirty oil workers in blue coveralls and hard hats stand together in front of the main gate, arms folded, defiant. One holds a hand-painted sign in Persian (abstract Persian-script blocks, not legible). The flare-stack in the distance has a single tiny figure climbed atop it waving a small Lion & Sun pennant. Composition: strikers in foreground row, gate mid, flare-stack with pennant in distance. Palette: warm orange dusk + workers-blue + Pahlavi-gold pennant accent.
[append §3 tail]
```

### E.18 — `sanctions-strangle.png`

```
16-bit pixel-art split composition. LEFT HALF: an IRGC missile-truck at a checkpoint with its hood open and a line of empty fuel cans next to it; a frustrated commander shouts into a radio. RIGHT HALF: a US Treasury seal embossed on a steel vault door slowly closing on a pipeline of cash, stamping it shut with a glowing red "OFAC" warning. Heavy chains hang between the two halves. Composition: vertical split with chains crossing the centerline, IRGC commander left, vault door right. Palette: IRGC-red (left) vs Trump-green + warning-yellow (right) on dark navy.
[append §3 tail]
```

### E.19 — `silent-underground.png`

```
16-bit pixel-art cross-section of a Tehran apartment building at night, viewed like a side-cutaway diorama. In the basement: a clandestine meeting — a young Iranian woman in plain clothes, an off-duty IRGC conscript still in fatigues but with his cap off and badge removed, and an older bearded cleric without his turban, all huddled around a single oil lamp at a small table. Faint blue laptop glow. Above them on each floor: an ordinary family eating dinner, a teenager on a phone with a VPN icon (the icon is on the phone screen IN the scene — diegetic, not our UI), a couple watching a satellite dish. The whole building has tiny invisible threads of magenta light connecting the basement meeting to similar basements visible in neighboring buildings through the windows. Composition: building cutaway center, neighboring buildings cropped on left/right, basement is the visual focal point. Palette: cool deep navy + warm lamp gold + magenta thread accents.
[append §3 tail]
```

### E.20 — `liberated-zones.png` *(audited — old prompt referenced "CRT-monitor overlay aesthetic" which can read as game UI; rewritten to be a hand-drawn paper map)*

```
16-bit pixel-art top-down hand-drawn paper map of Iran, the cartography style of an underground samizdat document on warm cream paper. Three glowing Pahlavi-gold dots pulse on Tehran, Mashhad, and Qom — each labeled in abstract Persian-style script (not legible). Smaller magenta dots scatter across provincial cities (Esfahan, Shiraz, Tabriz, Ahvaz). A hand-drawn arrow sweeps from a coastal "secured zone" inland, painted with a faint Lion & Sun. The corners of the paper are slightly burned. A small candle stub at the lower-right corner of the desk illuminates the map. Composition: map fills the frame, three primary glow-points dominant, secondary dots scattered, sweeping arrow as primary motion. Palette: cream paper + Pahlavi-gold (the holy cities) + magenta (provincial) + cyan arrow + warm candlelight.
[append §3 tail]
```

---

## F. Ending screens — 5 missing (5)

Path: `images/endings/`. Native size: **480 × 270**. These play as full-screen cinematics when a status bar hits 0%.

### F.1 — `surrender.png` — TRUMP LEVERAGE → 0

```
16-bit pixel-art Oval Office interior. Resolute Desk. A manila folder labeled with a faded "TEHRAN ACCORDS" stamp (just a stamp shape, no readable text). The US flag at half-mast in the corner. The chair is empty and pushed in. Atmosphere: defeat without battle. Composition: desk dominant center-frame, folder slightly rotated foreground. Palette: cold blue-grey + yellow desk lamp glow as the only warm tone.
[append §3 tail]
```

### F.2 — `coalition.png` — TRUMP ALLIES → 0

```
16-bit pixel-art aerial-side view of an empty G20 round table. Name plates being removed by an attendant, chairs pushed back, two flag stands left toppled (vague flag silhouettes). Cold cyan and grey palette. The room is empty except for the attendant. Dust motes in a pixel beam of light from a high window. Composition: round table dominant, attendant lower-left.
[append §3 tail]
```

### F.3 — `lion-rises.png` — IRGC GRIP → 0 (PLAYER WIN)

```
16-bit pixel-art triumphant wide shot of central Tehran. Azadi Tower silhouette recognizable in mid-distance. The pre-1979 Lion & Sun flag of Iran flying large in the foreground from a tall pole. Golden dawn sky. Crowd silhouettes below cheering, pixel confetti rising. Mood: hopeful, dignified, not jingoistic. Composition: flag pole foreground-right, Azadi Tower mid-left, crowd silhouettes lower 1/4. Palette: Pahlavi-gold dominant.
[append §3 tail]
```

### F.4 — `bankrupt.png` — IRGC CHEST → 0 (PLAYER WIN)

```
16-bit pixel-art shot of an Iranian oil refinery at idle — no flame stacks, dust on equipment, a "CLOSED" pixel sign on the gate (abstract pixel-block, not legible glyphs). Outside the gates: a crowd of oil workers in coveralls holding banners (abstract pixel-block placards). One placard has the Lion & Sun in Pahlavi gold. Empty oil drums in foreground. Composition: refinery upper-half, strike crowd lower-half, gate as fulcrum. Palette: dominant orange-and-rust.
[append §3 tail]
```

### F.5 — `proxies.png` — IRGC PROXY → 0 (PLAYER WIN)

```
16-bit pixel-art abandoned Hezbollah / IRGC proxy outpost — a half-buried Houthi rocket launcher in the foreground covered in dust, a torn IRGC pennant flapping on a leaning pole, a faded propaganda poster peeling off a concrete wall. Empty AK casings on the ground. Mood: abandoned-base, recently emptied, not destroyed. Composition: rocket launcher dominant foreground, wall mid-ground, sky upper-third. Palette: cold magenta-grey dusk.
[append §3 tail]
```

---

# §7 — Tool-specific tips

**Midjourney v6+:** prepend `--style raw --ar 16:9 --s 50` to keep it from over-stylizing. If output drifts photoreal, add `pixel art tileset reference, --niji 6`.

**DALL-E 3 / GPT Image:** put "SNES era 16-bit pixel art" in the FIRST sentence; this tool drifts toward modern flat illustration otherwise. **Always include the §3 PURE CINEMATIC SCENE tail** — DALL-E is the worst offender for adding HUD chrome.

**Stable Diffusion:** load a pixel-art LoRA (e.g. `pixel-art-xl`, `pix-art`) at weight 0.7–0.9. Add `(pixel art:1.3)` token weighting. Generate at native size, then upscale with **nearest-neighbor** only.

**Aseprite-AI / Retro Diffusion:** native pixel output — generate at the listed native size directly and skip the downsample step.

---

# §8 — Filename checklist (66 scenes)

```
A. STORY PANELS (5)                       B. ORIGINALS — REGEN (12)
[ ] A.1  story/01-the-call.png            [ ] B.1  events/cardboard-mojtaba.png
[ ] A.2  story/02-the-surge.png           [ ] B.2  events/assembly-deadlock.png
[ ] A.3  story/03-the-massacre.png        [ ] B.3  events/qaani-threat.png
[ ] A.4  story/04-the-impossible.png      [ ] B.4  events/larijani-returns.png
[ ] A.5  story/05-the-stakes.png ★rewrite [ ] B.5  events/khatami-letter.png
                                          [ ] B.6  events/putin-sams.png
C. ORIGINALS — NEW PROMPTS (6)            [ ] B.7  events/bibi-strike.png
[ ] C.1  events/qaani-backlash.png        [ ] B.8  events/pahlavi-address.png
[ ] C.2  events/martyr.png                [ ] B.9  events/houthi-tanker.png
[ ] C.3  events/mossad-cyber.png          [ ] B.10 events/maga-revolt.png
[ ] C.4  events/opec-veto.png             [ ] B.11 events/mek-leak.png
[ ] C.5  events/hezbollah-envoy.png       [ ] B.12 events/diaspora-la.png
[ ] C.6  events/anonymous-radio.png

D. EXPANDED CHAR EVENTS (18)              E. INFO CARDS (20)
[ ] D.1  events/rubio-podium.png          [ ] E.1  info/bloody-january.png
[ ] D.2  events/xi-tea.png                [ ] E.2  info/internet-blackout.png
[ ] D.3  events/macron-elysee.png         [ ] E.3  info/mahsa-amini.png
[ ] D.4  events/starmer-downing.png       [ ] E.4  info/javid-shah.png
[ ] D.5  events/zelensky-bunker.png       [ ] E.5  info/prince-in-exile.png
[ ] D.6  events/lindsey-rally.png         [ ] E.6  info/1979-hijack.png
[ ] D.7  events/katz-warroom.png          [ ] E.7  info/lion-and-sun.png
[ ] D.8  events/ghalibaf-majlis.png       [ ] E.8  info/walking-ghosts.png
[ ] D.9  events/taeb-cell.png             [ ] E.9  info/basij.png
[ ] D.10 events/salami-parade.png         [ ] E.10 info/proxy-octopus.png
[ ] D.11 events/rezaee-archive.png        [ ] E.11 info/bibi-as-ally.png
[ ] D.12 events/nilufari-crackdown.png    [ ] E.12 info/diaspora-loud.png
[ ] D.13 events/shamkhani-channel.png     [ ] E.13 info/final-phase.png ★rewrite
[ ] D.14 events/iravani-un.png            [ ] E.14 info/free-iran.png
[ ] D.15 events/irib-confession.png       [ ] E.15 info/hyperinflation.png
[ ] D.16 events/aqil-empty-chair.png      [ ] E.16 info/currency-spiral.png
[ ] D.17 events/afif-broadcast.png        [ ] E.17 info/general-strikes.png
[ ] D.18 events/safa-resignation.png      [ ] E.18 info/sanctions-strangle.png
                                          [ ] E.19 info/silent-underground.png
F. ENDINGS (5 missing)                    [ ] E.20 info/liberated-zones.png ★rewrite
[ ] F.1  endings/surrender.png
[ ] F.2  endings/coalition.png            (★ = was UI-bleeding before; rewritten)
[ ] F.3  endings/lion-rises.png
[ ] F.4  endings/bankrupt.png
[ ] F.5  endings/proxies.png
```

**66 scenes total.** All are pure cinematic moments — no game UI baked in. The HTML overlays the real interface on top at runtime.

---

# §9 — How to actually paste a prompt

For every scene above, the final paste into your generator looks like this:

```
[paste §1 master style header]

[paste the prompt body from the Q.X / E.X / etc. block]

[paste §3 PURE CINEMATIC SCENE tail]
```

Then in the negative-prompt field: paste the entire **§2 aggressive anti-UI negative prompt** block.

**The bracketed `[append §3 tail]` line at the bottom of every prompt block in this document is your reminder to glue the §3 tail on before pasting. Don't include the bracketed reminder itself.**
