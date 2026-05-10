# Crouching Lion — Image Asset Prompt Sheet

This is the production manifest for every image asset in the game. Each entry has a **filename**, **native pixel size**, **placeholder data-label** (matches the existing in-deck placeholder system), and an **image-generation prompt** ready for Midjourney / DALL-E / Stable Diffusion / Aseprite-AI.

> **Tone:** retro arcade satire. Pro-Pahlavi, anti-regime. JAW-MAXX Trump is a knowing caricature, not a hagiography. The IRGC and clerical elite are the antagonists.

---

## 1. Master style header (paste at the start of every prompt)

```
16-bit pixel art, late 80s/early 90s SNES-era arcade game style,
limited 8–12 color palette per scene, heavy 1px black outlines,
flat cel-shading, no anti-aliasing, no gradients, scanline-friendly.
Dark dystopian neon palette on a deep navy background.
```

## 2. Universal negative prompt

```
photorealistic, 3D render, octane, blurry, anti-aliased,
smooth gradients, modern cartoon, anime, watercolor,
oil painting, lens flare, depth of field, motion blur,
hands with extra fingers, modern UI elements, watermarks, signatures.
```

## 3. Color palette (lock to these hex values)

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

Limit each scene to ~10 of these. Do not introduce new colors.

## 4. Output rules

- **Format:** PNG. Transparent background only where indicated; otherwise solid `#06080c`.
- **Size:** generate at the **exact native pixel size** listed per asset. Do NOT pre-upscale — the host CSS uses `image-rendering:pixelated` to scale crisply at runtime.
- **Path:** drop into `images/<subfolder>/<filename>` exactly as listed.
- **Persian text:** do NOT bake Persian/Farsi text into the image. The HTML overlays it with the Vazirmatn font. Where a caption is mentioned in the prompt, it's contextual reference for the artist, not text to render.

## 5. Size buckets

| Bucket   | Native px  | Aspect | Use                                  |
| -------- | ---------- | ------ | ------------------------------------ |
| Scene    | 480 × 270  | 16:9   | Full event-box illustration          |
| Hero     | 320 × 240  | 4:3    | Center-stage moment in `.center-img` |
| Cutout   | 256 × 384  | 2:3    | Cardboard Mojtaba portrait gag       |
| Portrait | 96 × 96    | 1:1    | Character HUD avatar                 |
| Icon     | 32 × 32    | 1:1    | Bar / button decoration              |

## 6. Placeholder mechanism (already wired)

`index.html` already supports image-missing fallback. Every `<img>` has `onerror="this.style.display='none'"`, and the parent `.img-zone` has a `data-label="[ ... ]"` attribute that renders dim retro green text when no image loads. This means **the game is fully playable before any of these assets exist** — placeholders show the data-label string until art is dropped in.

For each asset below, the listed data-label is what to put in the HTML attribute.

---

# SECTION A — Trump's 10 move scenes

All Scene-bucket: **480 × 270 PNG**. Path: `images/buttons/`.

### A1 — `blockade.png`
- **Data-label:** `[ BLOCKADE — TANKER STOPPED IN HORMUZ STRAIT ]`
- **Prompt:** 16-bit pixel art scene of a US Navy guided-missile destroyer at the right edge of frame, blocking an Iranian-flagged oil tanker that fills the center. Strait of Hormuz at golden hour. Pixelated chains/buoys across the tanker's bow. Distant brown mountains of Hormuz Island. Mint green running lights on the destroyer; red rust streaks on the tanker. Calm pixelated water with regular wave dashes. 8-color palette. Heavy black outlines.
- **Composition:** tanker centered, destroyer right-cropped, low sun upper-left.

### A2 — `airstrike.png`
- **Data-label:** `[ AIRSTRIKE — F-22 OVER BURNING REFINERY ]`
- **Prompt:** 16-bit pixel art aerial scene, two angular F-22 Raptor silhouettes banking left over a burning Iranian oil refinery at night. Orange/red fire pixels rising from cracking towers; black smoke columns. Searchlight beams crossing in the sky. Distant city grid below. Trump-green wing markings. Stark contrast — mostly dark navy sky with hot orange fire core. Limit 9 colors.
- **Composition:** jets upper-third, refinery lower-half, smoke connecting the two.

### A3 — `escort.png`
- **Data-label:** `[ ESCORT — US DESTROYER GUARDS GULF TANKER ]`
- **Prompt:** 16-bit pixel art side-view of a US destroyer running parallel to a friendly Saudi/Emirati commercial tanker in calm Persian Gulf waters at midday. Allies-cyan banding on the tanker's hull. Mint green on the destroyer. Single Lion-and-Sun pennant fluttering on a small Iranian opposition vessel in the background (subtle). Calm sky with two cyan cloud shapes.
- **Composition:** two ships filling the horizontal frame, water lower third, sky upper two-thirds.

### A4 — `confuse.png`
- **Data-label:** `[ CONFUSE — TWO CONTRADICTORY TWEETS ]`
- **Prompt:** 16-bit pixel art split-screen showing two phone-screen mockups side-by-side, each displaying a stylized social-media post in pixel font. Left post has a green check, right post has a red X — same author avatar (jaw-maxx Trump pixel portrait). Confused pixel-art emoji faces floating around the edges. Background dark navy with faint scanline texture. Yellow warning glow around the seam between phones.
- **Composition:** two phones equal halves, content readable as pixel-block paragraphs (no real text needed — abstract pixel-line "lorem").

### A5 — `sanctions.png`
- **Data-label:** `[ SANCTIONS — TREASURY FREEZE PAPERS ]`
- **Prompt:** 16-bit pixel art top-down view of a US Treasury Department desk: stamped "OFAC FROZEN" document (visual stamp only, no real text needed), ledger showing column of orange numbers crossed out, gavel, US flag pin in corner, coffee mug with Trump-green eagle. Warning-yellow lamp glow. Limit 8 colors.
- **Composition:** desk fills frame, document slightly rotated, gavel diagonal.

### A6 — `infowar.png`
- **Data-label:** `[ INFO WAR — TEHRAN TV HACKED ]`
- **Prompt:** 16-bit pixel art interior of an Iranian state-TV broadcast studio mid-hijack. The IRIB anchor desk is empty and crooked; the wall screen behind it shows a glitching pixel image of the **Lion & Sun** emblem in Pahlavi gold, with TV-static bands of cyan/magenta scanlines. A toppled IRIB logo sign on the floor. Red emergency-light wash on left wall, cyan diaspora-broadcast wash on right.
- **Composition:** studio in center, big Lion & Sun on rear wall dominates upper half.

### A7 — `diplomacy.png`
- **Data-label:** `[ DIPLOMACY — TRUMP & BIBI HANDSHAKE ]`
- **Prompt:** 16-bit pixel art profile-handshake between JAW-MAXX Trump (right side, exaggerated lantern jaw, blond hair-helmet, MAGA-red tie) and Bibi Netanyahu (left side, suit, recognizable square face). Hands clasped in center. Behind them, two flag poles: US flag and Israeli flag. Allies-cyan rim-light on both subjects. Subtle Pahlavi-gold accent on a small Lion & Sun lapel pin on Trump.
- **Composition:** waist-up, handshake at frame center, flags as vertical bars behind shoulders.

### A8 — `selloil.png`
- **Data-label:** `[ SELL OIL — SPR TANKERS LEAVING TEXAS ]`
- **Prompt:** 16-bit pixel art aerial-side view of a long line of US oil tanker trucks departing the Strategic Petroleum Reserve in Texas. Texas star flag on a pole. Sunbaked orange palette dominant. Heat-haze pixelation on horizon. Trump-green digital readout on a price-board sign showing oil-price arrow trending down. Limit 9 colors with War-Chest-orange dominance.
- **Composition:** tanker line receding to vanishing point upper-right, price sign foreground-left.

### A9 — `armjavidan.png`
- **Data-label:** `[ ARM JAVIDAN — CRATE WITH PAHLAVI EMBLEM ]`
- **Prompt:** 16-bit pixel art covert-night handoff scene: a wooden crate stenciled with the **Lion & Sun** in Pahlavi gold sits open on dusty ground. Inside: pixel-art rifles and radio sets. Two silhouetted figures (faces in shadow) shake hands beside it. Cold night palette — deep navy, mint green moonlight rim-light, single warm orange lantern glow on the crate.
- **Composition:** crate centered foreground, figures upper-half in silhouette.

### A10 — `invade.png`
- **Data-label:** `[ INVADE — MARINES LANDING AT BANDAR-E ABBAS ]`
- **Prompt:** 16-bit pixel art beach-landing scene at Bandar-e Abbas at first light. US Marines in pixel formation disembarking from a hovercraft, V-22 Ospreys tilt-rotor overhead. Burning IRGC patrol boat in mid-distance. Iranian port cranes silhouetted against a smoke-streaked sky. Deliberate gravity — this is the "max-risk" scene. Dominant red and orange palette over deep navy.
- **Composition:** hovercraft + Marines lower-third, Ospreys upper-third, port cranes mid-ground.

---

# SECTION B — IRGC's 4 move scenes

All Scene-bucket: **480 × 270 PNG**. Path: `images/irgc/`.

### B1 — `harass-strait.png`
- **Data-label:** `[ HARASS — IRGC SPEEDBOATS BOXING TANKER ]`
- **Prompt:** 16-bit pixel art top-down/iso view of a flotilla of small IRGC fast-attack speedboats (each tiny, with a pixel-red IRGC flag) swarming around a stationary international oil tanker in the Strait of Hormuz. Wakes drawn as pixel-foam dashes. Tanker is grey-cyan; speedboats are IRGC-red. Tense palette.
- **Composition:** tanker dominant-center, 6–8 speedboats encircling.

### B2 — `attack-neighbors.png`
- **Data-label:** `[ ATTACK — MISSILE ARC TOWARD UAE ]`
- **Prompt:** 16-bit pixel art wide-horizon shot from inside Iran looking south across the Persian Gulf. Three IRGC-red ballistic missiles in mid-arc, their trails forming pixel-dotted parabolas across a dark dawn sky. UAE skyline (Burj-like silhouette) glows allies-cyan in the far distance. A small Lion-and-Sun graffiti tag on a foreground concrete wall — subtle dissident presence.
- **Composition:** missile arcs upper-half, distant Gulf horizon at center, foreground wall lower-left.

### B3 — `execute-dissidents.png`
- **Data-label:** `[ EXECUTE — DAWN GALLOWS, EVIN WALLS ]`
- **Prompt:** 16-bit pixel art somber wide shot of the exterior of Evin Prison's outer wall at first light. Tall pixel-art crane silhouettes loom in a yard behind the wall. NO bodies, NO figures depicted — this is a **suggestion** scene, not a graphic one. Cold red dawn glow on the wall. Single small white-rose pixel pinned to the outside of the gate by an unseen hand. Persian protest stencil "آزادی" suggested abstractly as broken pixel marks on the wall (no readable text — visual texture only).
- **Composition:** prison wall horizontal across lower 60%, crane silhouettes upper-right, sky red-dawn upper-left.
- **Note:** this is the most sensitive image. Restraint is the design goal. The viewer should feel grief, not gore.

### B4 — `capture-airman.png`
- **Data-label:** `[ CAPTURE — DOWNED PILOT, IRGC FLAG ]`
- **Prompt:** 16-bit pixel art scene: a downed F-22 (or generic stealth jet) wreckage on rocky Iranian desert terrain, smoke rising. A US pilot's helmet on the ground with pixel-mint green visor. IRGC-red flag planted nearby, foreground shadowy boots. Pilot themselves NOT shown (off-frame, captured). Heavy red dusk lighting — this is the IRGC's "nuclear option" scene; it must feel like a disaster for Trump.
- **Composition:** wreckage center, helmet foreground-left, flag foreground-right.

---

# SECTION C — Succession-crisis events (5)

All Scene-bucket: **480 × 270 PNG**. Path: `images/events/`.

### C1 — `cardboard-mojtaba.png` ★ centerpiece gag
- **Data-label:** `[ CARDBOARD MOJTABA — CUTOUT EDGE EXPOSED ]`
- **Prompt:** 16-bit pixel art press-photo composition: a state-TV news set, IRIB-style backdrop. In the center, a life-sized **cardboard cutout** of Mojtaba Khamenei in cleric robes, propped on a wooden stand. The shot is taken from a slight 30° side angle so the FLAT EDGE of the cardboard, the wooden A-frame stand, and a strip of grey gaffer tape are all clearly visible. A microphone bouquet on a stand in front of him. A nervous IRGC officer at the edge of frame trying to block the view with his hand. Color palette: muted regime-red and beige with a single ridiculous warning-yellow stage light.
- **Composition:** cutout center-frame, cardboard edge clearly visible at right side of figure, IRGC officer cropped at right edge.
- **Tone:** dark satire — this is the funniest beat in the game. The cutout should look earnestly propped up and accidentally exposed.

### C2 — `assembly-deadlock.png`
- **Data-label:** `[ ASSEMBLY OF EXPERTS — TURBANS ARGUING ]`
- **Prompt:** 16-bit pixel art interior of the Assembly of Experts chamber in Qom. A horseshoe of robed clerics in turbans (white, black, brown) shouting at each other. Pixel-art speech-balloon outlines (empty, no text) crossing each other. A cracked portrait of the late Ali Khamenei on the back wall, draped in mourning black. One cleric is asleep. Stale yellow-incandescent palette.
- **Composition:** wide horseshoe across full frame, portrait on back wall centered.

### C3 — `qaani-threat.png`
- **Data-label:** `[ QAANI — IRGC GENERAL AT PODIUM ]`
- **Prompt:** 16-bit pixel art press-conference scene of Esmail Qaani — a stern, mustached IRGC general in dark olive uniform with red shoulder boards — at a podium with multiple microphones. IRGC banner on the back wall. Stage-lit harshly. His hand raised in a clenched fist. Soldiers in formation behind him in soft focus (suggested, not detailed). Aggressive red palette.
- **Composition:** Qaani waist-up center-frame, mics radiating from podium, soldiers in BG.

### C4 — `larijani-returns.png`
- **Data-label:** `[ LARIJANI — PRAGMATIC CLERIC AT MAJLES ]`
- **Prompt:** 16-bit pixel art parliament floor (Majles): Ali Larijani — bearded, glasses, beige cleric robe — at a microphone, addressing seated rows of MPs. Calmer palette than Qaani scene — warmer beiges, muted greens. A few MPs leaning forward attentively. Sun streaming through tall arched windows in pixel-bands.
- **Composition:** Larijani 3/4 view at right, audience receding to vanishing point at left.

### C5 — `khatami-letter.png`
- **Data-label:** `[ KHATAMI — OPEN LETTER ON SAMOVAR TABLE ]`
- **Prompt:** 16-bit pixel art still-life: an ornate Persian samovar steaming on a small table, beside an open hand-written letter on aged paper. A pair of reading glasses rests on the letter. A framed photo of Mohammad Khatami (older, white beard, green sash) faces the camera. A Persian carpet pixel pattern on the floor edge. Warm domestic palette. The "voice from the past" mood.
- **Composition:** letter foreground center, samovar right, framed photo back-left.

---

# SECTION D — Regular global-cast events (7)

All Scene-bucket: **480 × 270 PNG**. Path: `images/events/`.

### D1 — `putin-sams.png`
- **Data-label:** `[ PUTIN — CRATE OF S-400s ARRIVING ]`
- **Prompt:** 16-bit pixel art rail-yard at night somewhere near the Caspian. A Russian freight train with crates labeled with stylized Cyrillic-looking pixel marks (no real text) being unloaded by IRGC personnel. A Russian flag pin and a small portrait of Putin nailed crookedly on the side of a railcar. Cold blue-grey palette with single orange sodium-lamp glow.
- **Composition:** train horizontal across mid-frame, crate being lifted by crane upper-right.

### D2 — `bibi-strike.png`
- **Data-label:** `[ BIBI — F-35I OVER NATANZ ]`
- **Prompt:** 16-bit pixel art high-altitude scene: a single Israeli F-35I Adir (Star of David subtly on tail) banking sharply over the Natanz nuclear-facility complex, which is below in pixel ground-detail with circular cooling structures. Sonic-boom shockwave drawn as concentric pixel rings. Allies-cyan dominant. Persian-night palette below the jet.
- **Composition:** F-35 upper-right, Natanz site centered below, shockwave concentric.

### D3 — `pahlavi-address.png` ★ hero moment
- **Data-label:** `[ REZA PAHLAVI — TV ADDRESS, LION & SUN ]`
- **Prompt:** 16-bit pixel art TV-broadcast composition: Crown Prince Reza Pahlavi behind a simple desk, calm and dignified, in a dark suit. Behind him: the **pre-1979 Lion & Sun** flag of Iran (red-white-green stripes with the gold lion-and-sun emblem center) — this should be highly recognizable and proudly rendered. Pahlavi-gold rim light from a small lamp on the desk. Trumpet of mint-green TV-broadcast scanlines. The flag should dominate the back third of the frame.
- **Composition:** Pahlavi 3/4 portrait at desk, flag filling upper 70% of background.
- **Tone:** noble, statesmanlike. This is the hopeful counterweight to the regime scenes.

### D4 — `houthi-tanker.png`
- **Data-label:** `[ HOUTHI — DRONE BOAT VS TANKER ]`
- **Prompt:** 16-bit pixel art Red Sea scene at dusk: a small unmanned Houthi drone-boat (with crude IRGC-magenta painted markings) closing on a much larger commercial oil tanker. Wake of the drone-boat as a hot-pink streak. Tanker hull is grey-cyan. Burning-pink sunset on horizon. Sense of looming impact.
- **Composition:** drone-boat foreground-left, tanker mid-right, wake connecting them.

### D5 — `maga-revolt.png`
- **Data-label:** `[ MAGA REVOLT — TUCKER ON STAGE ]`
- **Prompt:** 16-bit pixel art conference-stage scene: a tall, smug TV-pundit (Tucker-Carlson-style — blue blazer, blond hair, square jaw, no specific face) at a podium, "AMERICA FIRST" banner-shape behind him (no readable text — just a pixel banner with stars). Audience hands raised in foreground silhouette. Trump-green stage lights — but the green is sour, sickly. A pixel "BREAKING" banner glitches at the bottom of the frame.
- **Composition:** pundit at podium center, banner upper-half, audience silhouettes lower-third.

### D6 — `mek-leak.png`
- **Data-label:** `[ MEK — DRONE FOOTAGE TRANSCRIPT ]`
- **Prompt:** 16-bit pixel art monitor-cluster scene: three CRT-style monitors on a desk showing greyscale aerial drone footage of Iranian missile sites. Pixel timecode overlays in corner of each screen. A folder labeled with a stylized pixel symbol that hints at "MEK" without being explicit (a faded star within a triangle). Cold green CRT-glow palette.
- **Composition:** three monitors in row across mid-frame, folder foreground-center.

### D7 — `diaspora-la.png`
- **Data-label:** `[ DIASPORA — LION & SUN AT WESTWOOD ]`
- **Prompt:** 16-bit pixel art crowd scene: the Westwood Tehrangeles district in LA, daytime. Crowd of diverse Iranian-Americans waving Lion-and-Sun flags. Palm trees in pixel silhouette. A pixel placard reads in Pahlavi-gold (no real text — just bold pixel shapes). Bright cyan California sky. Joyful palette.
- **Composition:** crowd filling lower 60% of frame, palms upper-left, flag-poles diagonals throughout.

---

# SECTION E — Cardboard Mojtaba cutout (gag asset)

Cutout-bucket: **256 × 384 PNG**. Path: `images/cutouts/`. Transparent background.

### E1 — `mojtaba-front.png`
- **Data-label:** `[ MOJTABA — FRONT, LOOKS REAL ]`
- **Prompt:** 16-bit pixel art front-facing portrait of Mojtaba Khamenei: bearded, black turban (sayyid), dark cleric robes, eyes closed serenely (he is comatose — the regime's framing is that he is "deep in prayer"). Hands folded across his chest. From this dead-front angle, he looks like an authentic painted portrait. **Transparent background.** No stand visible.
- **Composition:** centered portrait, head + torso, full bleed.

### E2 — `mojtaba-side.png`
- **Data-label:** `[ MOJTABA — SIDE, CARDBOARD EDGE EXPOSED ]`
- **Prompt:** Identical subject to E1 (Mojtaba Khamenei in turban and robes, eyes closed) but rendered as a SIDE-VIEW of a propped-up cardboard cutout. Visible from this 80°-side angle: the FLAT 1px edge of the cardboard sheet, a folding wooden A-frame stand at the base, a strip of grey gaffer tape stuck to the back, a tiny IRGC-red logo sticker on the back of the stand. The illusion is broken. Slightly comic, slightly sad. **Transparent background.**
- **Composition:** cutout centered, stand visible at bottom 1/4, edge visible as the silhouette outline.

---

# SECTION F — Character HUD portraits (9)

Portrait-bucket: **96 × 96 PNG**. Path: `images/portraits/`. Transparent or solid `#06080c` background.

> Each portrait is a head-and-shoulders pixel avatar in 96×96. Same lighting setup: 3/4 view, single key light from upper-left, deep navy background, 1px black outline. Limit to 6–8 colors per portrait.

| # | Filename            | Subject                                        | Notes                                                          |
|---|---------------------|------------------------------------------------|----------------------------------------------------------------|
| F1| `trump.png`         | JAW-MAXX TRUMP                                 | Exaggerated lantern jaw, blond hair-helmet, red tie, smirk     |
| F2| `irgc.png`          | IRGC Commander (generic)                       | Olive uniform, red shoulder boards, peaked cap, stern          |
| F3| `mojtaba.png`       | Mojtaba (cardboard hint)                       | Eyes closed; thin grey gaffer-tape strip subtly visible at neck|
| F4| `pahlavi.png`       | Reza Pahlavi                                   | Calm, suit, slight smile, tasteful                             |
| F5| `bibi.png`          | Bibi Netanyahu                                 | Square jaw, grey hair, dark suit, blue tie                     |
| F6| `putin.png`         | Vladimir Putin                                 | Pale, blond, suit, expressionless                              |
| F7| `qaani.png`         | Esmail Qaani                                   | Mustache, olive uniform, peaked cap, fierce                    |
| F8| `khatami.png`       | Mohammad Khatami                               | White beard, green sash, beige robe, kind eyes                 |
| F9| `larijani.png`      | Ali Larijani                                   | Beard, glasses, beige cleric robe                              |

**Universal portrait prompt template** — fill in `{NAME}` and `{DESCRIPTORS}`:

```
16-bit pixel art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of {NAME},
{DESCRIPTORS}. Single key light from upper-left, deep navy #06080c background,
1px black outline, limit 7 colors, retro arcade game style, no text.
```

---

# SECTION G — Bar icons (6)

Icon-bucket: **32 × 32 PNG**. Path: `images/icons/`. Transparent background. Single-tone with bar-color accent.

| # | Filename       | Bar              | Subject                                        |
|---|----------------|------------------|------------------------------------------------|
| G1| `leverage.png` | US Leverage      | Pixel gavel striking a small globe             |
| G2| `polcap.png`   | Political Capital| Pixel eagle head with MAGA-red sweat-drop      |
| G3| `allies.png`   | Allies           | Three flag-poles bundled (US/Israeli/Saudi)    |
| G4| `grip.png`     | Regime Grip      | Pixel clenched fist with broken chain link     |
| G5| `warchest.png` | War Chest        | Pixel oil barrel with orange dollar sign       |
| G6| `proxy.png`    | Proxies          | Pixel missile silhouette with magenta exhaust  |

**Universal icon prompt template:**

```
16-bit pixel art icon, 32x32 native, transparent background,
{SUBJECT}, single accent color {COLOR}, 1px black outline,
flat shading, retro arcade game UI style, no text.
```

---

# SECTION H — Endings (3)

Scene-bucket: **480 × 270 PNG**. Path: `images/endings/`.

### H1 — `pahlavi-flag.png` (Trump-win cinematic)
- **Status:** REUSE existing `images/flagovertehran.png` if it crops cleanly to 480×270; otherwise regenerate.
- **Data-label:** `[ ENDING — LION & SUN OVER TEHRAN ]`
- **Prompt (if regenerating):** 16-bit pixel art triumphant wide shot of central Tehran (Azadi Tower silhouette recognizable in mid-distance), the Lion & Sun flag of Iran flying large in the foreground from a tall pole. Dawn-gold sky. Crowd silhouettes below cheering, pixel confetti. Pahlavi-gold dominant palette. Hopeful, dignified.
- **Composition:** flag pole foreground-right, Azadi Tower mid-left, crowd silhouettes lower 1/4.

### H2 — `impeachment.png` (IRGC-win cinematic)
- **Data-label:** `[ ENDING — EMPTY OVAL OFFICE, FLAG AT HALF-MAST ]`
- **Prompt:** 16-bit pixel art Oval Office interior, empty Resolute Desk, the chair pushed back askew. A red MAGA cap on the desk. The US flag in the corner at half-mast. A pixel "BREAKING" chyron glow from an off-screen TV reflected on the back wall. Cold blue-grey funeral palette. Defeat without violence.
- **Composition:** desk center-frame, flag corner-left, chair pushed back at angle.

### H3 — `marathon.png` (stalemate)
- **Status:** REUSE existing `images/marathon.png`.
- **Data-label:** `[ ENDING — MARATHON, 30 DAYS ELAPSED ]`

---

# SECTION L — `game.html` Arena, Story, and Bar-Specific Endings

These are the assets the standalone [game.html](game.html) consumes. All sit alongside Sections A–H. Drop them in their listed paths and `game.html` picks them up automatically (it falls back to data-label placeholders before art arrives).

## L1 — Map of Iran + Persian Gulf (the gameboard)

Scene-bucket: **800 × 450 PNG**. Path: `images/map/iran-gulf.png`.

- **Data-label:** `[ MAP — IRAN + PERSIAN GULF ]`
- **Prompt:** 16-bit pixel-art geographic map, top-down, of Iran and surrounding region. Iranian land mass dominant in **Pahlavi gold** (`#ffd24a`), cleanly outlined. Persian Gulf and Gulf of Oman in **deep navy** (`#06080c` to `#1a2a44` water gradient — pixelated banding). Strait of Hormuz clearly recognizable. Arabian Peninsula (Saudi / UAE / Qatar / Bahrain) in **dim cyan-grey**, partial Iraq / Turkey / Pakistan / Afghanistan borders in similar cyan-grey. Caspian Sea sliver visible at top. Pixelated coastlines, no anti-aliasing. NO city labels (overlay handles those). Subtle Lion & Sun watermark optionally in the deep desert center-east, very faint.
- **Composition:** Iran fills upper-right two-thirds; Gulf in lower-center; Hormuz at center-right pinch; UAE/Saudi at bottom edge.
- **Notes:** the marker SVG overlay assumes specific coordinates. Land masses should approximate real geography — Tehran near (456,128), Bandar-e Abbas near (528,290), Hormuz Strait near (508,308), UAE near (488,346), etc. The artist doesn't need to be exact, but rough geographic placement matters.

## L2 — Character standees

Cutout-bucket: **256 × 512 PNG**, **transparent background**. Path: `images/standee/`.

### L2a — `trump.png`
- **Data-label:** `[ TRUMP STANDEE ]`
- **Prompt:** Full-body pixel-art standee of JAW-MAXX TRUMP. Exaggerated cartoon-square jaw (the "jaw-maxx" caricature), blond hair-helmet, red MAGA tie, dark suit, slight forward stance with arms crossed or one hand raised in a gesture. Looking slightly toward the right (toward the map / IRGC). Subtle mint-green rim-light from his right side. **Transparent background.** Limit 8 colors.
- **Composition:** centered, full bleed top-to-bottom, head ~15% from top, feet at bottom edge.

### L2b — `irgc.png`
- **Data-label:** `[ IRGC STANDEE ]`
- **Prompt:** Full-body pixel-art standee of an IRGC commander — generic, not a specific person. Olive uniform, red shoulder boards, peaked cap with red star, mustache, stern expression. Hand on a holstered sidearm. Looking slightly toward the left (toward Trump). Red rim-light from the left. **Transparent background.** Limit 8 colors.
- **Composition:** centered, full bleed, mirror of trump.png.

## L3 — Opening story panels (3)

Scene-bucket: **480 × 270 PNG**. Path: `images/story/`.

### L3a — `01-death.png`
- **Data-label:** `[ STORY 01 — KHAMENEI FUNERAL ]`
- **Prompt:** 16-bit pixel-art wide shot of Ayatollah Ali Khamenei's funeral. Massive crowd of mourners in black, a flag-draped coffin in mid-distance, IRGC honor guard saluting, overcast sky. Dignified but cold. The Supreme Leader's chair, in the foreground, sits empty with a black mourning sash across it. No cheering, no celebration — the mood is uncertainty.
- **Composition:** crowd lower 60%, coffin centered, empty chair in lower-left foreground.

### L3b — `02-vacuum.png`
- **Data-label:** `[ STORY 02 — MOJTABA COMA + CARDBOARD ]`
- **Prompt:** 16-bit pixel-art hospital interior. Mojtaba Khamenei in a hospital bed, IV stand beside him, eyes closed. A nurse stands at the foot of the bed. At the **edge of frame on the right**, a wooden A-frame stand and the FLAT EDGE of a cardboard cutout are visible — implying a cutout copy of him also exists. Cold green hospital lighting. Slightly comic, slightly melancholy. The viewer should notice the cardboard but it's not the headline.
- **Composition:** Mojtaba left-center, nurse right of bed, cardboard edge intentional in right margin.

### L3c — `03-stakes.png`
- **Data-label:** `[ STORY 03 — STAKES — TRUMP / IRGC / HORMUZ ]`
- **Prompt:** 16-bit pixel-art split-frame composition. Left third: Trump at the Resolute Desk, looking at a phone. Center third: an aerial top-down of the **Strait of Hormuz** with one tanker mid-channel, an IRGC speedboat closing from the north, a US destroyer from the south. Right third: an IRGC commander in a bunker, lit red, leaning on a console. Subtle vertical seams between thirds done as pixel-banding. Tense.
- **Composition:** equal thirds; Hormuz the visual fulcrum.

## L4 — Endings (7) — used by `game.html`

Scene-bucket: **480 × 270 PNG**. Path: `images/endings/`.

### L4a — `surrender.png` — LEVERAGE → 0 — "STRATEGIC SURRENDER"
- **Data-label:** `[ ENDING — EMPTY OVAL OFFICE, FOLDER ]`
- **Prompt:** 16-bit pixel-art Oval Office interior. Resolute Desk. A manila folder labeled with a faded "TEHRAN ACCORDS" stamp (no readable text — just a stamp shape). The US flag at half-mast in the corner. The chair is empty and pushed in. Cold blue-grey palette. Yellow desk lamp glow as the only warm tone. Atmosphere: defeat without battle.
- **Composition:** desk dominant center-frame, folder slightly rotated foreground.

### L4b — `impeachment.png` — POL CAP → 0 — "IMPEACHMENT"
- **Data-label:** `[ ENDING — EMPTY RESOLUTE DESK, FLAG HALF-MAST ]`
- **Prompt:** 16-bit pixel-art Oval Office. Empty Resolute Desk, chair pushed back askew. A red MAGA cap left on the desk. US flag at half-mast. A pixel "BREAKING NEWS" chyron glows on a TV monitor reflected in the back wall. Cold red-on-blue funeral palette.
- **Composition:** desk center, flag corner-left, chair angled away from camera.

### L4c — `coalition.png` — ALLIES → 0 — "COALITION COLLAPSED"
- **Data-label:** `[ ENDING — EMPTY G20 TABLE ]`
- **Prompt:** 16-bit pixel-art aerial-side view of an empty G20 round table. Name plates being removed by an attendant, chairs pushed back, two flag stands left toppled (vague flag silhouettes). Cold cyan and grey palette. The room is empty except for the attendant. Dust motes in a pixel beam of light from a high window.
- **Composition:** round table dominant, attendant lower-left.

### L4d — `lion-rises.png` — GRIP → 0 — "★ THE LION RISES ★"
- **Data-label:** `[ ENDING — LION & SUN OVER AZADI TOWER ]`
- **Prompt:** 16-bit pixel-art triumphant wide shot of central Tehran. Azadi Tower silhouette recognizable in mid-distance. The pre-1979 **Lion & Sun flag of Iran** flying large in the foreground from a tall pole. Golden dawn sky. Crowd silhouettes below cheering, pixel confetti rising. Pahlavi-gold dominates. Hopeful, dignified, not jingoistic.
- **Composition:** flag pole foreground-right, Azadi Tower mid-left, crowd silhouettes lower 1/4.

### L4e — `bankrupt.png` — CHEST → 0 — "BANKRUPT"
- **Data-label:** `[ ENDING — EMPTY REFINERY + STRIKE ]`
- **Prompt:** 16-bit pixel-art shot of an Iranian oil refinery at idle — no flame stacks, dust on equipment, a "CLOSED" pixel sign on the gate. Outside the gates: a crowd of oil workers in coveralls holding banners (no readable text — pixel-block placards). One placard has the **Lion & Sun** in Pahlavi gold. Empty oil drums in foreground. Dominant orange-and-rust palette.
- **Composition:** refinery upper-half, strike crowd lower-half, gate as fulcrum.

### L4f — `proxies.png` — PROXY → 0 — "PROXY NETWORK BROKEN"
- **Data-label:** `[ ENDING — ABANDONED HEZBOLLAH OUTPOST ]`
- **Prompt:** 16-bit pixel-art abandoned Hezbollah / IRGC proxy outpost — a half-buried Houthi rocket launcher in the foreground covered in dust, a torn IRGC pennant flapping on a leaning pole, a faded propaganda poster peeling off a concrete wall. Empty AK casings on the ground. Cold magenta-grey dusk palette. The abandoned-base mood — recently emptied, not destroyed.
- **Composition:** rocket launcher dominant foreground, wall mid-ground, sky upper-third.

### L4g — `marathon.png` — STALEMATE — "MARATHON"
- **Data-label:** `[ ENDING — RUNNERS, ONE WITH LION & SUN ]`
- **Prompt:** 16-bit pixel-art two-runner side-view: one runner collapsed to one knee, panting, mostly silhouetted; the other still going, holding a small **Lion & Sun pennant** aloft, on a long road heading into a sunrise. Dust-cloud trail behind both. Hopeful but tired palette — Pahlavi gold + pale cyan dawn.
- **Composition:** collapsed runner foreground-left, ongoing runner mid-right, road receding to horizon.

---

## L — Total asset count for `game.html`

| Asset                    | Count |
| ------------------------ | ----- |
| Map                      | 1     |
| Standees                 | 2     |
| Story panels             | 3     |
| Endings (bar-specific+1) | 7     |
| **L total NEW assets**   | **13**|

These 13 assets, plus the per-move scene images already specified in Sections A–D and the Cardboard Mojtaba cutout from Section E (referenced by the event theatre), are everything `game.html` needs.

---

# SECTION M — Educational layer additions (Day 122 speech)

Six new INFORMATION_CARDS and four new CODEX entries were added based on the speech delivered from inside Iran on the 122nd day of the national revolution. Each card is shown in its own modal during a turn (info cards) or in the Free Iran Briefing reference screen (codex). All are **Scene** bucket (480×270) PNGs.

## M1 — Info card images (drop into `images/info/`)

### M1a — `hyperinflation.png` — A DAILY GAMBLE
- **Data-label:** `[ INFO — HYPERINFLATION TRAP ]`
- **Prompt:** 16-bit pixel-art Tehran corner-shop scene at dusk. An exhausted middle-aged Iranian woman counts a thick brick of rial notes at the counter, but the loaf of barbari bread in front of her has a price-tag ribbon trailing zeros that wraps around the entire counter twice. Behind her, an old shopkeeper rubs his face. Outside the shop window, a long line of customers waits in the cold. Empty shelves above the counter — only a few cans, a bag of rice. Warning-yellow light from a single bulb. Mood: quiet desperation, dignified survival.
- **Composition:** woman + counter foreground, shopkeeper mid-ground, line outside through window upper-right. Big stack of money front-center.

### M1b — `currency-spiral.png` — WORTHLESS MONEY, FAKE LOANS
- **Data-label:** `[ INFO — CURRENCY DEATH SPIRAL ]`
- **Prompt:** 16-bit pixel-art high-angle isometric of an Iranian central-bank floor. A massive printing press in the foreground churns out fresh stacks of rial notes that spill onto the floor and immediately get carted off by uniformed IRGC quartermasters with hand-trucks. In the background, terrified bank clerks at empty teller windows wave their hands at angry depositors behind a dim glass partition. Cracks in the ceiling. A portrait of Khamenei on the back wall hangs slightly crooked. Palette: deep navy + Pahlavi-gold money + IRGC-red uniforms.
- **Composition:** press dominant left foreground, quartermasters mid, depositors right background.

### M1c — `general-strikes.png` — WHEN THE OIL WORKERS WALK
- **Data-label:** `[ INFO — GENERAL STRIKES ]`
- **Prompt:** 16-bit pixel-art wide shot of a petrochemical facility at Asaluyeh / South Pars at golden hour. The pipes and flare-stacks are SILENT — flares unlit, valves chained shut. A line of about thirty oil workers in blue coveralls and hard hats stand together in front of the main gate, arms folded, defiant. One holds a hand-painted sign in Persian (don't render legible text — abstract Persian script blocks). The flare-stack in the distance has a single tiny figure climbed atop it waving a small Lion & Sun pennant. Palette: warm orange dusk + workers-blue + Pahlavi-gold pennant accent.
- **Composition:** strikers in foreground row, gate mid, flare-stack with pennant in distance.

### M1d — `sanctions-strangle.png` — OUT OF FUEL
- **Data-label:** `[ INFO — SANCTIONS STRANGLE ]`
- **Prompt:** 16-bit pixel-art split composition. LEFT HALF: an IRGC missile-truck at a checkpoint with its hood open and a line of empty fuel cans next to it; a frustrated commander shouts into a radio. RIGHT HALF: a US Treasury seal embossed on a steel vault door slowly closing on a pipeline of cash, stamping it shut with a glowing red "OFAC" warning. Heavy chains hang between the two halves. Palette: IRGC-red (left) vs Trump-green + warning-yellow (right) on dark navy.
- **Composition:** vertical split with chains crossing the centerline, IRGC commander left, vault door right.

### M1e — `silent-underground.png` — THE SILENT UNDERGROUND
- **Data-label:** `[ INFO — SILENT UNDERGROUND ]`
- **Prompt:** 16-bit pixel-art cross-section of a Tehran apartment building at night, viewed like a side-cutaway diorama. In the basement: a clandestine meeting — a young Iranian woman in plain clothes, an off-duty IRGC conscript still in fatigues but with his cap off and badge removed, and an older bearded cleric without his turban, all huddled around a single oil lamp at a small table. Faint blue laptop glow. Above them on each floor: an ordinary family eating dinner, a teenager on a phone with a VPN icon, a couple watching a satellite dish. The whole building has tiny invisible threads of magenta light connecting the basement meeting to similar basements visible in neighboring buildings through the windows. Palette: cool deep navy + warm lamp gold + magenta thread accents.
- **Composition:** building cutaway center, neighboring buildings cropped on left/right, basement is the visual focal point.

### M1f — `liberated-zones.png` — LIBERATED ZONES
- **Data-label:** `[ INFO — LIBERATED ZONES STRATEGY ]`
- **Prompt:** 16-bit pixel-art tactical-style map of Iran with a CRT-monitor overlay aesthetic. Three glowing Pahlavi-gold dots pulse on Tehran, Mashhad, and Qom — labeled in Persian-style abstract script (don't render legible text). Smaller magenta dots scatter across provincial cities (Esfahan, Shiraz, Tabriz, Ahvaz). A glowing arrow sweeps from a coastal "secured zone" inland, painted with a faint Lion & Sun. Faint scanlines and CRT bloom. Palette: deep navy + Pahlavi-gold (the holy cities) + magenta (provincial) + cyan (arrow path).
- **Composition:** map fills the frame, three primary glow-points dominant, secondary dots scattered, sweeping arrow as primary motion.

## M2 — Codex thumbnail images (drop into `images/codex/`)

These four are simpler, more iconic compositions intended to read at thumbnail size in the Free Iran Briefing grid (≤200px wide). Aim for a single dominant motif per image.

### M2a — `hyperinflation.png` — HYPERINFLATION
- **Data-label:** `[ CODEX — HYPERINFLATION ]`
- **Prompt:** 16-bit pixel-art still-life: a single barbari bread loaf on a wooden cutting board, with a curling shop-receipt ribbon next to it that trails zeros (`0,000,000…`) off the edge of the frame. A tiny exhausted figure of a worker silhouetted in the corner, head in hands. Warm bread color + warning-yellow ribbon + deep navy background. Single iconic image.
- **Composition:** centered bread, ribbon trailing right, figure tiny lower-left.

### M2b — `strikes.png` — GENERAL STRIKES
- **Data-label:** `[ CODEX — GENERAL STRIKES ]`
- **Prompt:** 16-bit pixel-art tight portrait of a single oil worker in a dusty blue coverall and red hard hat, soot on his face, holding a wrench like a torch. A flare-stack with an UNLIT flare visible behind his shoulder. He looks straight at the viewer — defiant, not angry, exhausted but unbroken. Palette: workers-blue + warning-yellow soot accents + IRGC-red hard hat repurposed as worker's red.
- **Composition:** centered chest-up portrait, flare-stack soft-focus over right shoulder.

### M2c — `sanctions.png` — SANCTIONS
- **Data-label:** `[ CODEX — SANCTIONS ]`
- **Prompt:** 16-bit pixel-art iconic still-life: a heavy steel padlock embossed with a US Treasury OFAC seal, clamped through the chain of a rusting Iranian oil pipeline valve. The valve handle is bent. A single drop of crude oil hangs at the spigot, never to fall. Palette: rust-orange + Trump-green seal + deep navy. Single iconic image.
- **Composition:** padlock dead-center, valve curving from lower-left to upper-right.

### M2d — `defections.png` — THE SILENT UNDERGROUND
- **Data-label:** `[ CODEX — SILENT UNDERGROUND ]`
- **Prompt:** 16-bit pixel-art iconic still-life: an IRGC olive-green uniform jacket folded neatly on a wooden chair, badge removed and laid on top, the empty thread holes still visible. Beside the chair: a civilian leather jacket draped over an arm-rest, ready to be put on. A single shaft of pre-dawn light comes through a slatted window, catching dust motes. Palette: muted IRGC-olive vs warm civilian-brown + cyan dawn-light accent.
- **Composition:** uniform-on-chair dominant, civilian jacket lower-right, light beam diagonal upper-left to lower-right.

## M — Updated total asset count (adds to Sections L+J)

| Asset                       | Count |
| --------------------------- | ----- |
| M1 New info card scenes     | 6     |
| M2 New codex thumbnails     | 4     |
| **M total NEW assets**      | **10**|

These 10 new educational-layer assets bring the grand total to **66 distinct image assets** across the project.

---

# SECTION I — Existing reusable assets

These already exist in `images/` and should be kept. Verify each is roughly 480×270 or scales cleanly:

- `images/jawmaxx_s01.png` — title (lion & sun)
- `images/jawmaxx_s02.png` — backstory split panel
- `images/jawmaxx_s04.png` — locked button
- `images/jawmaxx_s05.png` — TBD usage
- `images/jawmaxx_s08.png` — blockade screen
- `images/trump.png` — Trump intro
- `images/buttons.png` — button panel
- `images/centcom.png` — RPG menu
- `images/bunker.png` — IRGC bunker
- `images/hyperinflation.png` — scoreboard
- `images/marathon.png` — endings/marathon
- `images/flagovertehran.png` — Trump-win ending

If any of these are off-aspect or low-quality compared to the new assets, flag for regeneration in a v2 pass.

---

# SECTION J — Total asset count

| Section                                    | Count | Bucket   |
| ------------------------------------------ | ----- | -------- |
| Trump moves                                | 10    | Scene    |
| IRGC moves                                 | 4     | Scene    |
| Succession events                          | 5     | Scene    |
| Regular events                             | 7     | Scene    |
| Mojtaba cutouts                            | 2     | Cutout   |
| Character portraits                        | 9     | Portrait |
| Bar icons                                  | 6     | Icon     |
| Endings — Sections H+L (3 + 7, deduped)    | 7     | Scene    |
| L1 Map                                     | 1     | Scene    |
| L2 Standees                                | 2     | Cutout   |
| L3 Story panels                            | 3     | Scene    |
| **Total NEW assets**                       | **56**|          |

---

# SECTION K — Recommended generation workflow

1. **Burn-in style.** Generate ONE test asset (recommend C1 cardboard-mojtaba — it's the centerpiece) using the master style header + universal negative + one of the prompts. Lock in the look.
2. **Regenerate the test until palette + pixelation feels right.** Spend the time here, not later.
3. **Batch by category.** Generate all Scene-bucket assets together; they share the same canvas size and palette so the model stays consistent.
4. **Portraits last.** They're small, reference-heavy, and benefit from having scenes done first as palette training.
5. **Drop into `images/<subfolder>/<filename>` exactly.** Filename mismatches will leave the placeholder text on screen — which is fine for testing but bad for shipping.
6. **Spot-check at 1080p.** View `index.html` after dropping each batch in. The CSS `image-rendering:pixelated` will scale crisply only if you didn't pre-upscale.

---

# SECTION N — Opening story panels (5)

The 5-panel arc that runs **before** Player Select. Each panel is a Scene-bucket image (480 × 270) with English + Persian caption overlaid by HTML. The panels narrate: **CALL → SURGE → MASSACRE → IMPOSSIBLE → STAKES.**

Drop into `images/story/` exactly as named.

### N1 — `01-the-call.png` — THE CALL
- **Data-label:** `[ STORY 01 — THE CALL — PAHLAVI ADDRESS ]`
- **Caption echo (for context, not to render):** *"When Prince Reza Pahlavi asked us to stand — we did not just stand. We surged."*
- **Prompt:** 16-bit pixel-art TV-broadcast scene. Reza Pahlavi at a podium speaking calmly into a single boom-microphone, dressed in a dark suit with a small Lion & Sun lapel pin glowing Pahlavi-gold. Behind him a large Lion & Sun emblem on a deep crimson backdrop. In the foreground, the edge of a CRT television showing the broadcast — its CRT bevel and a slight phosphor glow framing the scene. In the corner of the room, a faint reflection of an Iranian family gathered around the TV: an old grandmother, a teenage daughter, a small boy on the floor — all listening intently. Mood: dignified, historical, the weight of a turning point. Palette: Pahlavi-gold lapel + Pahlavi-gold emblem + cyan CRT phosphor + warm skin tones + deep navy negative space.
- **Composition:** Pahlavi center-left at podium, Lion & Sun emblem dominating the upper-mid background, CRT bevel framing the right edge, family reflection lower-right small.

### N2 — `02-the-surge.png` — THE SURGE
- **Data-label:** `[ STORY 02 — THE SURGE — MILLIONS IN STREETS ]`
- **Caption echo:** *"For 48 hours in early January, millions of us flooded the streets. The fear evaporated."*
- **Prompt:** 16-bit pixel-art three-quarter aerial perspective looking down a major Tehran intersection at night, completely choked with protesters as far as the eye can see. Hundreds of small Pahlavi-gold Lion & Sun pennants bobbing in the crowd. Two protesters mid-foreground are dancing — a young woman with hair uncovered swinging a small girl on her shoulders. Helicopters with searchlights overhead. The Azadi Tower silhouette in the deep upper-right against a star-filled sky. Mood: euphoric, defiant, joyful. NOT yet violent — this is the surge BEFORE the massacre. Palette: deep navy night + Pahlavi-gold pennants + warm streetlamp gold + cyan helicopter searchlight beams + warm skin tones.
- **Composition:** sweeping diagonal road from foreground-left to upper-right, dancers mid-foreground, Azadi Tower silhouette upper-right.

### N3 — `03-the-massacre.png` — THE MASSACRE
- **Data-label:** `[ STORY 03 — THE MASSACRE — BLOODY JANUARY ]`
- **Caption echo:** *"Then the internet went dark. The machine guns opened fire. Body bags ran out. 40,000 souls."*
- **Prompt:** 16-bit pixel-art respectful documentary scene at dawn after the crackdown. A wide Tehran avenue, surface charred and littered with spent brass shell casings, a single torn Lion & Sun flag draped reverently over a covered body in the foreground (silhouette only, no gore — implication only). In the mid-ground, an IRGC machine-gun-mounted truck recedes, its barrel still smoking. In the deep background, a line of unmarked 18-wheeler trucks. The dawn sky is a low-saturation sickly pink with a single black smoke plume rising. Mood: solemn, tragic, NOT exploitative — visual restraint is paramount. Palette: ash-grey + low-saturation IRGC-red shell casings + Pahlavi-gold flag + sickly dawn pink + black smoke.
- **Composition:** flag-covered body lower-foreground center (focal point), MG truck mid-frame angled away, 18-wheelers distant horizon, smoke plume vertical right-edge.

### N4 — `04-the-impossible.png` — THE IMPOSSIBLE
- **Data-label:** `[ STORY 04 — THE IMPOSSIBLE — KHAMENEI DEAD + CARDBOARD ]`
- **Caption echo:** *"Khamenei assassinated. Mojtaba lies in a coma. The regime is propping up a cardboard cutout for state functions."*
- **Prompt:** 16-bit pixel-art split-composition diptych. **LEFT HALF:** Khamenei's official wall portrait framed in mourning black, with cracked glass radiating from a small bullet-shaped hole in the upper-third of the frame. A single black ribbon hangs across the corner. The wall around the portrait is bare. **RIGHT HALF:** A dim hospital room with a thin figure (Mojtaba) lying inert under a sheet on a bed, multiple monitors showing flatlining waveforms. Beside the bed, two regime propaganda crew members are setting up a CARDBOARD CUTOUT of Mojtaba — the cardboard's bent edge and the masking-tape brace on its back are visible (the joke). A studio light on a tripod glows magenta. The ceiling above both halves has visible cracks running between them. Palette: cold cyan medical light + IRGC-red mourning ribbons + cardboard-brown + magenta studio light + black cracked-glass.
- **Composition:** vertical split right at frame center; ceiling cracks bridge both halves to suggest the regime itself fracturing. Mojtaba bed mid-right, cardboard prop foreground-right (visual punchline).

### N5 — `05-the-stakes.png` — THE STAKES
- **Data-label:** `[ STORY 05 — THE STAKES — TRUMP / IRGC / HORMUZ ]`
- **Caption echo:** *"We are no longer waiting to be saved. We are forcing the world to react. Choose your side."*
- **Prompt:** 16-bit pixel-art three-panel triptych standoff composition. **LEFT THIRD:** JAW-MAXX Trump at the Resolute Desk, phone in hand, jaw squared, a Trump-green stat-bar HUD over his shoulder. **RIGHT THIRD:** an IRGC Commander in his bunker, helmet off on the console, hand hovering over a war-room button, an IRGC-red stat-bar HUD over his shoulder. **CENTER THIRD:** a vertical-aerial view of the Strait of Hormuz, glowing with a Pahlavi-gold luminous trade-path between Iranian and Omani coasts, oil tankers transiting, tiny Iranian protesters as pennant-bearing silhouettes lining the Iranian coast. Above the whole composition: a giant glowing pixel cursor descending with the words "CHOOSE YOUR SIDE" implied (don't render text). Palette: Trump-green left, IRGC-red right, Pahlavi-gold center strait, deep navy negative space.
- **Composition:** classic triptych frame, equal thirds. Trump left, strait center (vertical chokepoint visual), IRGC right.

---

# SECTION O — Original information-card scenes (14)

These are the educational beats from the FIRST batch of `INFORMATION_CARDS` (the ones that pre-date the Day-122 speech). All are Scene-bucket (480 × 270) PNGs in `images/info/`. Six MORE info-card prompts already exist in § M1 (the speech-derived ones).

> **Tonal note:** these alternate with character events during gameplay, so the player needs to read the image fast. Use ONE clear focal point per scene.

### O1 — `bloody-january.png`
- **Data-label:** `[ INFO — BLOODY JANUARY 2025 ]`
- **Prompt:** 16-bit pixel-art respectful documentary scene at dawn. A row of unmarked 18-wheeler trucks at the edge of a Tehran avenue, with bodies in covered shrouds being loaded by uniformed IRGC. An older officer in shadow tallies on a clipboard, expressionless. In the foreground asphalt: a single child's pink shoe lying abandoned, lit by the first streak of sunrise. The skyline behind shows the Tehran ridge with one column of smoke rising. Mood: documentary-grade horror without explicit gore. Palette: ash-grey + IRGC-olive uniforms + warning-yellow streetlamp + warm pink-shoe accent + deep navy sky.
- **Composition:** truck row foreground-left, loading mid, child's pink shoe lower-right (visual focus), smoke column distant right.

### O2 — `internet-blackout.png`
- **Data-label:** `[ INFO — INTERNET BLACKOUT ]`
- **Prompt:** 16-bit pixel-art Tehran rooftop at deep night. A young Iranian's hand reaches up to plug a cable into a smuggled Starlink dish — its single LED has just turned green. Behind: the entire apartment block below is BLACK except for the IRGC-red checkpoint lights at the major intersections, like cold red eyes scattered across a dark city. In the very foreground, a laptop screen on a milk crate shows pixel-text "VPN CONNECTING ▮▮▮…" Palette: deep navy near-black + cyan LED + tiny green dish-light + IRGC-red checkpoints + cool laptop-screen blue.
- **Composition:** dish + plugging hand foreground-right, dark city as the dominant backdrop, single point of green light is the visual hero.

### O3 — `mahsa-amini.png`
- **Data-label:** `[ INFO — MAHSA AMINI ]`
- **Prompt:** 16-bit pixel-art respectful memorial portrait. A young Kurdish woman in soft three-quarter profile, her face calm, hair fully visible — long, dark, flowing beyond the frame. Behind her, a wall of stylized handwritten Persian-script calligraphy of "Zan, Zendegi, Azadi" (don't render legible text — abstract calligraphy blocks). A single lit candle in the foreground bottom-center, its small flame the only warm light. Mood: dignified, sacred, NOT mournful. Palette: warm skin + dark flowing hair + magenta calligraphy on a deep navy wall + Pahlavi-gold candle flame.
- **Composition:** profile face right of center, calligraphy wall left/back, candle bottom-center as anchor.

### O4 — `javid-shah.png`
- **Data-label:** `[ INFO — JAVID SHAH CHANT ]`
- **Prompt:** 16-bit pixel-art chest-up close-up of a defiant protester (mid-30s, ambiguous gender, ethnically Persian) shouting at the night sky, mouth open mid-chant, one hand raised in the "long-live" gesture. A small Pahlavi-gold Lion & Sun pin glints on their lapel. In the soft-focus background: hundreds of other protesters with the same posture and gesture, blurred but visibly chanting in unison. Mood: defiant joy, not anger — a release. Palette: Pahlavi-gold pin (visual hero) + warm skin + warning-yellow streetlamp light + deep navy crowd silhouettes.
- **Composition:** centered chest-up portrait, raised hand cropping the upper-right edge, blurred crowd filling background.

### O5 — `prince-in-exile.png`
- **Data-label:** `[ INFO — REZA PAHLAVI IN EXILE ]`
- **Prompt:** 16-bit pixel-art quiet evening scene. Reza Pahlavi alone in side-silhouette on a Western-city balcony at night (could be Washington DC or Paris — keep it ambiguous Western). His hands rest on the iron railing. His shadow falls long behind him onto a wall lit by a single sodium streetlamp. Below the balcony: a quiet city of yellow window-lights, no people. On a small table beside him: an unopened letter and a small framed photograph (face away from viewer). Mood: dignified solitude, contemplation, the weight of forty years. Palette: warm sodium-yellow streetlamp + cool navy night sky + warm balcony tones + a single Pahlavi-gold cufflink accent.
- **Composition:** figure right at railing, city below mid-frame, long shadow trailing left across the wall.

### O6 — `1979-hijack.png`
- **Data-label:** `[ INFO — 1979 ISLAMIC HIJACK ]`
- **Prompt:** 16-bit pixel-art horizontal split-composition memory image. **LEFT HALF:** vintage warm-sepia 1979 Tehran street scene, broad coalition of celebrating protesters — a leftist student with raised fist, a woman without hijab, a labor organizer with a banner, all jubilant. **RIGHT HALF:** the same crowd being slowly engulfed by a creeping black ink stain spreading from a shadowy clerical figure at the seam. The black ink covers the colorful coalition as it spreads. The figure points off-frame at an unseen Khomeini portrait. Palette: vintage warm sepia LEFT + black ink spreading RIGHT + crimson banner accents.
- **Composition:** horizontal split with the clerical-shadow figure as the seam-divider, coalition crowd being progressively erased right-to-left.

### O7 — `lion-and-sun.png`
- **Data-label:** `[ INFO — LION & SUN FLAG ]`
- **Prompt:** 16-bit pixel-art tight, slightly-rendered Lion & Sun emblem on a piece of folded fabric, like an embroidered patch on a faded military banner. The lion holds the curved Persian sword (Zulfiqar-curve), the sun rises behind with rays. Slight fabric folds, patina, and edge-fraying — the look of a banner that has been folded and unfolded for 800 years. Palette: Pahlavi-gold + deep crimson background + cream highlights + ash patina edges.
- **Composition:** centered medallion, slight off-center to right, fabric folds shaping the lower-left, frayed edge upper-left corner.

### O8 — `walking-ghosts.png`
- **Data-label:** `[ INFO — IRGC WALKING GHOSTS ]`
- **Prompt:** 16-bit pixel-art Tehran alley at first dawn. A column of IRGC soldiers patrolling away from camera in helmets and olive uniforms, but each soldier is rendered with a faint TRANSLUCENT/SPECTRAL aura — visibly half-faded. Their shadows on the pavement are SHORTER than they should be at this angle, as if the men casting them are already partly gone. On the wall behind them: large Pahlavi-gold graffiti reading "JAVID SHAH" (don't render legible text — abstract Persian script blocks). Palette: cyan ghost-aura + IRGC-olive uniforms + deep navy alley + Pahlavi-gold graffiti + warm dawn glow upper-right.
- **Composition:** soldier column receding into upper-right vanishing point, graffiti wall left, dawn sky upper-right, foreground bare.

### O9 — `basij.png`
- **Data-label:** `[ INFO — BASIJ MILITIA ]`
- **Prompt:** 16-bit pixel-art Tehran alley at dusk. A Basij paramilitary (mid-30s, scruffy beard, plainclothes "lebas-shakhsi" look) on a battered IRGC-red motorbike, riding straight toward camera, baton raised in his right hand. He is the threat. In a doorway to his right: a young woman in a chador stands her ground, NOT cowering — her face is calm, watching him. A mosque dome silhouette in the background. Mood: menacing, but the woman is the moral center. Palette: rust-IRGC-red motorbike + olive plain-clothes + warm doorway warning-yellow + deep navy alley + woman in shadow with pale face.
- **Composition:** motorbike charging center-frame head-on, woman in lit doorway right, mosque dome distant left-back.

### O10 — `proxy-octopus.png`
- **Data-label:** `[ INFO — PROXY OCTOPUS ]`
- **Prompt:** 16-bit pixel-art literal Octopus rising from a stylized warm-paper map of the Middle East. Its head is a stylized IRGC commander silhouette in a helmet (the "Tehran" head). Four primary tentacles extend out, each labeled by visual context: one wraps Lebanon (with a small Hezbollah flag iconography), one drops on Yemen (Houthi rocket), one curls into Iraq (Kataib pennant), one drapes over Syria (Fatemiyoun crescent). TWO of the tentacles are SEVERED at their tips, dripping IRGC-red. Palette: IRGC-red octopus body + magenta tentacles + warm paper map + cyan Mediterranean ocean.
- **Composition:** octopus body center, tentacles radiate outward to map edges, severed tips visible upper-left and lower-right.

### O11 — `bibi-as-ally.png`
- **Data-label:** `[ INFO — IDF AS ALLY OF THE PEOPLE ]`
- **Prompt:** 16-bit pixel-art vertical split composition. **UPPER HALF (sky):** an Israeli F-15I jet (silhouette only) banking away from a precision-strike on an IRGC missile-storage depot at night, the explosion blooming Pahlavi-gold not red. **LOWER HALF (ground):** in front of an Iranian government building, a small group of Iranian protesters lit by the distant explosion glow are holding up Israeli flags ALONGSIDE Lion & Sun pennants. One protester reaches up with both hands, as if catching the light. Mood: solidarity across borders. Palette: cyan jet + Pahlavi-gold explosion (NOT red) + Israeli-blue flags + Pahlavi-gold pennants + deep navy.
- **Composition:** vertical split, sky scene above, ground scene below; the explosion light from upper half illuminates the protesters in the lower half.

### O12 — `diaspora-loud.png`
- **Data-label:** `[ INFO — DIASPORA RALLY ]`
- **Prompt:** 16-bit pixel-art Westwood Boulevard (Los Angeles, "Tehrangeles") street rally at warm afternoon. An Iranian-American family center-frame: a mother wearing a Lion & Sun headscarf as a pennant tied at her shoulder, a father with a chrome megaphone raised, a young daughter on his shoulders waving a small Pahlavi-gold pennant. Behind them: storefronts with abstract Persian-script signage (don't render legible text — calligraphy blocks). A larger Lion & Sun flag hangs from a balcony above. Palm trees and California sun. Palette: warm SoCal sun + Pahlavi-gold pennants + cyan California sky + deep navy storefront windows + warm skin tones.
- **Composition:** family center, megaphone arc pointing upper-left, balcony flag upper-right, palm tree silhouette right edge.

### O13 — `final-phase.png`
- **Data-label:** `[ INFO — FINAL PHASE ]`
- **Prompt:** 16-bit pixel-art high-angle table shot of a Risk-style game-board map of Iran on warm wood. Toy-like soldier pieces in two colors: IRGC-red pieces are being SWEPT off the board by a giant invisible-hand gust (motion lines), while Pahlavi-gold pieces are being placed on Tehran, Mashhad, Qom, and provincial cities. A wall-clock leaning against a stack of books in the upper-right shows the hour-hand approaching midnight. A single coffee cup steams beside the map. Palette: warm tabletop wood + IRGC-red pieces (most being swept) + Pahlavi-gold pieces (being placed) + warning-yellow clock + deep navy negative space.
- **Composition:** map dominant center, sweeping motion left-to-right, clock upper-right corner, coffee cup lower-left.

### O14 — `free-iran.png`
- **Data-label:** `[ INFO — FREE IRAN ]`
- **Prompt:** 16-bit pixel-art sunrise over Tehran. The Azadi Tower dominates the center-back. A large Lion & Sun flag flies from its spire, catching the first light. Below the tower, people walking toward it from all directions — an old woman with a cane on the left path, a young couple holding hands center, a father with a child on his shoulders right path. Their long pixel-shadows stretch toward the camera, all converging at the camera's point. The sky is gradient sunrise. Mood: triumphant, hopeful, ceremonial. Palette: Pahlavi-gold sunrise + cyan upper sky + warm skin tones + deep navy ground + Pahlavi-gold flag (visual hero).
- **Composition:** Azadi Tower center-back as the visual focal point, three converging foreground paths of people, long converging shadows.

---

# SECTION P — Original codex thumbnails (16)

These are the **codex grid thumbnails** for the Free Iran Briefing screen. Each is Scene-bucket (480 × 270) but designed to read at THUMBNAIL size (≤200px wide in the grid). Therefore: **one dominant motif per image**, no fine detail, high color contrast.

Drop into `images/codex/`. Four MORE codex prompts already exist in § M2 (the Day-122 speech ones).

> Codex thumbnails can sometimes be cropped/recolored variants of the matching info-card scene where the topic overlaps. When in doubt, generate the codex version FIRST as the simpler iconic still, then the info card as the wider scene.

### P1 — `1979-hijack.png`
- **Data-label:** `[ CODEX — 1979 HIJACK ]`
- **Prompt:** 16-bit pixel-art iconic still: a single hand in clerical black robe-sleeve grasping and TEARING the upper edge of a banner that reads abstract Persian "آزادی" calligraphy (don't render legible text). Pieces of the banner falling. Single iconic hand-and-banner motif. Palette: black robe + crimson torn banner + warm sepia background + cream banner letters.
- **Composition:** banner upper-half, hand center-right grasping the tear, torn pieces falling lower-frame.

### P2 — `pahlavi.png`
- **Data-label:** `[ CODEX — REZA PAHLAVI ]`
- **Prompt:** 16-bit pixel-art clean side-profile portrait of Reza Pahlavi in a dark suit, dignified, looking slightly upward. A small Pahlavi-gold Lion & Sun pin on the lapel is the visual hero. Solid deep navy background with a faint vignette. The lighting is from camera-right with a hint of warm rim-light from camera-left. Palette: warm skin + dark suit + Pahlavi-gold pin + cool navy background.
- **Composition:** centered profile portrait, slight tilt of head, lapel pin lower-right of face (focal point).

### P3 — `lion-and-sun.png`
- **Data-label:** `[ CODEX — LION & SUN FLAG ]`
- **Prompt:** 16-bit pixel-art the Lion & Sun emblem rendered as a centered pseudo-logo on a clean fabric background. Lion holds the curved Persian sword, sun rises behind with rays. NO frame, NO patina, NO folds — this is the codex reference image, so present it crisply. Palette: pure Pahlavi-gold emblem + deep crimson fabric + cream highlights.
- **Composition:** dead-center medallion, equal margins, no decorative framing.

### P4 — `mahsa.png`
- **Data-label:** `[ CODEX — MAHSA AMINI ]`
- **Prompt:** 16-bit pixel-art respectful memorial portrait. Mahsa Amini's face in three-quarter view, hair flowing, a soft Pahlavi-gold halo of light behind her — could be sunlight, could be a single candle flame, kept ambiguous. Eyes calm. Palette: warm skin + dark flowing hair + Pahlavi-gold halo glow + deep navy background.
- **Composition:** centered three-quarter portrait, halo behind, no surrounding elements.

### P5 — `january-surge.png`
- **Data-label:** `[ CODEX — JANUARY SURGE ]`
- **Prompt:** 16-bit pixel-art a single Pahlavi-gold Lion & Sun flag held aloft against a night sky, the flagpole and a fragment of the bearer's silhouetted forearm visible. Below the upper-third: an ocean of crowd-silhouette heads cropped at frame-bottom (don't show full bodies — just the dense tops of heads). One distant streetlamp warning-yellow. Palette: Pahlavi-gold flag (hero) + deep navy sky + warning-yellow streetlamp + black silhouette crowd.
- **Composition:** flag upper-center as the sole focal point, silhouette crowd floor cropping the lower third.

### P6 — `massacre.png`
- **Data-label:** `[ CODEX — JANUARY MASSACRE ]`
- **Prompt:** 16-bit pixel-art respectful iconic still. A single thick white memorial candle on a soot-blackened street. The flame burns. Around its base: spent IRGC-red brass shell casings scattered. NO bodies, NO blood. The implication does the work. Palette: cream candle wax + Pahlavi-gold flame + ash-grey street + IRGC-red brass casings + deep navy background.
- **Composition:** candle dead-center, casings circling base, lit by the candle's own glow only.

### P7 — `internet-blackout.png`
- **Data-label:** `[ CODEX — INTERNET BLACKOUT ]`
- **Prompt:** 16-bit pixel-art tight close-up of a smartphone screen showing pixel-text "NO SIGNAL" and a struck-through wifi/cellular icon. The phone is held by a pixel-art Iranian hand, slight thumb visible. The phone's screen is the only light source — a faint cyan glow on the surrounding hand and dark navy background. Single iconic still. Palette: cyan screen glow + warm skin tone + deep navy negative space + IRGC-red strike-through.
- **Composition:** phone screen dead-center as the hero, hand cropped lower-frame.

### P8 — `khamenei.png`
- **Data-label:** `[ CODEX — ALI KHAMENEI ]`
- **Prompt:** 16-bit pixel-art official-style framed wall portrait of Khamenei in his black turban and clerical robes. A diagonal black mourning ribbon stretches across the frame's upper-left corner. The glass over the photo is CRACKED — radiating cracks emanate from a small bullet-shaped hole upper-third. The wall around the frame is bare. Palette: IRGC-red turban + warm skin + black mourning ribbon + cracked-glass overlay + cream wall.
- **Composition:** centered framed portrait, mourning ribbon upper-left diagonal, crack pattern radiating from upper-third hole.

### P9 — `cardboard-mojtaba.png`
- **Data-label:** `[ CODEX — MOJTABA CARDBOARD ]`
- **Prompt:** 16-bit pixel-art the visual punchline from the game lore. A propped-up cardboard cutout of Mojtaba Khamenei in clerical robes, head shot pasted onto cardboard. The cardboard's BENT EDGE and the masking-tape brace on its back are CLEARLY visible — that's the joke. A propaganda photographer's hand reaches in from the left edge to "adjust" the photo angle. A tripod studio-light glows magenta lower-right. Palette: cardboard-brown + IRGC-red turban + cream face + grey shadow + magenta studio light.
- **Composition:** cutout center, photographer's hand cropping left edge, tripod lower-right; ALL three together as the satirical tableau.

### P10 — `irgc.png`
- **Data-label:** `[ CODEX — IRGC ]`
- **Prompt:** 16-bit pixel-art chest-up anonymous masked IRGC officer, viewed straight-on. Black balaclava + IRGC-olive helmet + chrome aviator sunglasses reflecting tiny pixel-fire. Small IRGC-red flag patch on the helmet. NO identifiable face — this is the institutional portrait of the apparatus. Palette: IRGC-olive + IRGC-red patch + chrome aviator + black balaclava + deep navy background.
- **Composition:** centered chest-up portrait, masked face dominating upper-two-thirds, deep negative space below.

### P11 — `basij.png`
- **Data-label:** `[ CODEX — BASIJ MILITIA ]`
- **Prompt:** 16-bit pixel-art iconic still: a clenched fist gripping a wooden police baton. On the wrist of the same arm: a Basij motorbike helmet hanging by its chinstrap. The fist is mid-tension, knuckles whitened. Solid background, no surrounding elements. Single iconic motif. Palette: rust-orange baton + grey-leather helmet + IRGC-red helmet stripe + warning-yellow baton grip-tape + warm skin fist + deep navy background.
- **Composition:** vertical-diagonal arrangement: baton upper-left to lower-right, fist center, helmet hanging right.

### P12 — `proxies.png`
- **Data-label:** `[ CODEX — PROXY OCTOPUS ]`
- **Prompt:** 16-bit pixel-art iconic still: a single SEVERED octopus tentacle lying on a stylized warm-paper map of the Middle East. The cut-end of the tentacle emits a thin wisp of smoke. The tentacle is magenta, the cut-end drips IRGC-red, the map is warm sepia. Single dominant motif. Palette: magenta tentacle + IRGC-red cut + warm map + cyan ocean strip + deep navy negative space.
- **Composition:** tentacle diagonal lower-left to upper-right, cut-end lower-left as visual focal point, smoke wisp rising.

### P13 — `hormuz.png`
- **Data-label:** `[ CODEX — STRAIT OF HORMUZ ]`
- **Prompt:** 16-bit pixel-art top-down stylized map of the Strait of Hormuz chokepoint. A single oil tanker centered, transiting north-to-south. Iranian coast as a warm-paper landmass at the top, Omani coast at the bottom. Three glowing Pahlavi-gold trade-arrows trace through the strait. A small IRGC-red speedboat icon harassing from the Iranian side. Palette: warm map landmasses + cyan strait water + Pahlavi-gold arrows + Trump-green tanker + IRGC-red speedboat.
- **Composition:** horizontal strait, tanker center, coast bands top and bottom, arrows tracing left-to-right.

### P14 — `bibi-as-ally.png`
- **Data-label:** `[ CODEX — IDF AS ALLY ]`
- **Prompt:** 16-bit pixel-art tight close-up: two anonymous hands holding two flags side-by-side at chest level — an Israeli flag (blue Star of David on white) and a Pahlavi Lion & Sun flag. The flags slightly overlap at their inner edges. Single iconic gesture, no surrounding elements. Palette: Israeli-blue + cream + Pahlavi-gold + deep crimson + warm skin hands + deep navy background.
- **Composition:** two flags side-by-side dead-center, hands cropped lower-frame.

### P15 — `diaspora.png`
- **Data-label:** `[ CODEX — DIASPORA ]`
- **Prompt:** 16-bit pixel-art iconic still: a chrome megaphone with a small Pahlavi-gold Lion & Sun pennant attached to its handle by a ribbon. The megaphone is angled upward as if mid-call. Behind it (soft-focus): a stylized Westwood/LA storefront facade with abstract Persian-script signage and a strip of palm-tree silhouettes. Palette: chrome megaphone + Pahlavi-gold pennant + warm SoCal sun + deep navy storefront + palm-silhouette green-black.
- **Composition:** megaphone diagonal lower-left to upper-right, pennant ribbon trailing, storefront soft-focus background.

### P16 — `free-iran.png`
- **Data-label:** `[ CODEX — FREE IRAN ]`
- **Prompt:** 16-bit pixel-art iconic still: the Pahlavi Lion & Sun flag flying from the spire of the Azadi Tower silhouette at sunrise. Pahlavi-gold flag is the visual hero, framed against a gradient sky from cyan upper to Pahlavi-gold lower (sunrise). Tower as a clean dark navy silhouette. NO crowd, NO street level — this is the symbolic apex shot. Palette: Pahlavi-gold flag + Pahlavi-gold sunrise gradient + cyan upper sky + deep navy tower silhouette.
- **Composition:** tower spire upper-center, flag flying horizontal Pahlavi-gold, sunrise gradient filling background.

---

## N+O+P Total asset count

| Section | Asset             | Count |
| ------- | ----------------- | ----- |
| N       | Story panels      | 5     |
| O       | Info-card scenes  | 14    |
| P       | Codex thumbnails  | 16    |
| **N+O+P TOTAL**     |       | **35**|

These 35, combined with the 10 prompts already locked in § M (M1+M2 from the Day-122 speech update), cover **every remaining missing image** in `IMAGES_TODO.md` priorities P2/P6/P7. After all of these are generated, only the **3 Section L1/L2 shell visuals** (map + 2 standees), **5 Section L4 endings** (already prompted), and **6 Section F event scenes / Section E portraits** (already prompted) remain — and those all already have prompts written.

---

# SECTION Q — 18 expanded character event scenes

Every prompt below renders one **event-theatre scene**: a small story image that fills the dialogue panel when the character fires. Path is the exact `scene.img` field used in `game.html`. Same global header/negative-prompt rules as § N–P.

## Q.1 RUBIO — `images/events/rubio-podium.png`

```
[STYLE_HEADER]
A 16-bit pixel-art editorial scene. State Department briefing room. CENTER: Marco Rubio at the podium, dark navy suit, red tie, hand mid-gesture, jaw set. BACKDROP: large US State Department seal on dark blue wall. SIDE LECTERN: an aide turning a page labeled "SECONDARY SANCTIONS." A row of microphones bristles at podium edge. Camera sees the speaker from press-pit angle, slightly low. Mood: legal, hawkish, controlled. NO real-world photographic likeness — stylized pixel-art editorial portrait only.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.2 XI JINPING — `images/events/xi-tea.png`

```
[STYLE_HEADER]
A 16-bit pixel-art geopolitical scene. Beijing reception room, low warm lighting. CENTER: Xi Jinping seated at low lacquered tea table, dark suit, hands resting on knees, calm half-smile. OPPOSITE: an Iranian envoy in dark suit leaning forward, papers between them showing oil tanker silhouettes and a 25-year contract. BACKDROP: red-and-gold panel art, faint gold dragon motif. ICON detail: tiny ship silhouettes on the document. Mood: patient, immovable, transactional. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.3 MACRON — `images/events/macron-elysee.png`

```
[STYLE_HEADER]
A 16-bit pixel-art diplomatic scene. Élysée Palace press hall, gold-framed mirrors, parquet floor. CENTER: Macron at podium with French and EU flags, mid-gesture, signature side-part hair. RIGHT: an Iranian foreign minister in cleric-adjacent dark robes shaking his hand awkwardly. BACKGROUND: photographers' flash bursts, white sparks across pixels. Tiny sign on podium reads "PARIS" in EU blue. Mood: courtly, slightly improvised, allies will be furious. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.4 STARMER — `images/events/starmer-downing.png`

```
[STYLE_HEADER]
A 16-bit pixel-art political-procedural scene. 10 Downing Street cabinet room, long polished wood table. CENTER: Keir Starmer in dark suit, glasses on, reading a thick legal brief stamped "PRIVILEGED — IRAQ WAR PRECEDENTS." TABLE: stacks of red folders, two open laptops, one Union Jack mug. WALL: black-and-white portraits in pixel mosaic. Mood: cautious, lawyerly, the British state grinding slowly. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.5 ZELENSKY — `images/events/zelensky-bunker.png`

```
[STYLE_HEADER]
A 16-bit pixel-art wartime intelligence scene. Kyiv command bunker, exposed concrete walls, single bare bulb glow. CENTER: Zelensky in his trademark olive fleece, beard, leaning over a metal table. ON TABLE: a captured Iranian Shahed-136 drone with its triangular wing visible, casing opened to expose tiny circuit boards, labeled "IRGC SUPPLY CHAIN." Two Ukrainian officers behind him in body armor with yellow shoulder patches. BACKGROUND: a Ukrainian flag draped behind, slightly crumpled. Mood: dark humor under siege, intel-as-currency. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.6 AMOO LINDSEY — `images/events/lindsey-rally.png`

```
[STYLE_HEADER]
A 16-bit pixel-art rally scene. A diaspora rally in Los Angeles (Westwood). CENTER: an older US senator in a charcoal suit and red tie standing on a small wooden stage, mic in hand, fist half-raised. CROWD: a sea of pixel-art protesters waving the pre-revolution Lion-and-Sun flag (green-white-red with golden lion-and-sun centered), some holding signs reading "WOMAN LIFE FREEDOM" and "FREE IRAN." Banner above the stage reads "AMOO LINDSEY." Sky: dusk pink-purple. Mood: defiant, transatlantic alliance, genuine warmth. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.7 KATZ — `images/events/katz-warroom.png`

```
[STYLE_HEADER]
A 16-bit pixel-art military operations scene. IDF underground war room, blue-tinted lighting. CENTER: Israel Katz, white open-collar shirt no tie, sleeves rolled up, leaning over a glowing tactical map of the Persian Gulf and Iran. AROUND HIM: three IDF officers in olive uniforms, one wearing a beret. WALL: huge pixel-art map of Iran with red threat markers, satellite imagery overlay tiles, a digital clock reading "03:00." Mood: quiet, surgical, no announcement coming. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.8 GHALIBAF — `images/events/ghalibaf-majlis.png`

```
[STYLE_HEADER]
A 16-bit pixel-art legislative-chamber scene. Iranian Majlis hall, tiered green seats, brass railings. CENTER: Speaker Ghalibaf at the speaker's chair on a raised dais, gavel in hand, dark suit, cropped grey beard, expression flat. BACKDROP: large Iranian flag and Khatam al-Anbiya construction-arm seal pinned over the chair. FOREGROUND: rows of Majlis deputies in dark suits and clerical robes, all seated, a few raising hands. A scrolling news-style banner across the bottom of the chamber screen reads "NATIONAL SECURITY BILL — APPROVED." Mood: institutional laundering, quiet brutality. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.9 TAEB — `images/events/taeb-cell.png`

```
[STYLE_HEADER]
A 16-bit pixel-art interrogation scene. Tehran prison cell, single overhead bulb, scorched concrete walls. CENTER: a hooded male figure in orange jumpsuit seated at a small metal table, head bowed, reading from a paper labeled "اعتراف" (CONFESSION). LEFT: a TV camera on a tripod, red recording light glowing. RIGHT (in shadow): the silhouette of an older bearded cleric — Taeb — in dark IRGC uniform jacket, expression unreadable. WALL: a faded poster of Khomeini half-peeled. Mood: cold, scripted, machine-of-state. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.10 SALAMI — `images/events/salami-parade.png`

```
[STYLE_HEADER]
A 16-bit pixel-art military-parade scene. Tehran parade ground, dusk, low angle from below the podium. CENTER: IRGC Commander-in-Chief Hossein Salami in olive-green uniform with red shoulder boards and gold braid, fist thrust upward, beard cropped, mouth open mid-shout. BACKDROP: a massive banner with stylized missiles and the slogan "هشت دقیقه" (EIGHT MINUTES) in Persian calligraphy. ROWS: IRGC soldiers below in olive uniforms, rifles vertical, marching in lockstep, faces uniformly stern. SKY: smoke-streaked, four ballistic missile silhouettes rising in pixel-art trails. Mood: maximalist, theatrical, dangerous. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.11 REZAEE — `images/events/rezaee-archive.png`

```
[STYLE_HEADER]
A 16-bit pixel-art institutional-archive scene. A dimly lit IRGC founders' hall, parquet floor, brown wood paneling. CENTER: Mohsen Rezaee, white beard, dark suit and modest tie, standing in front of a wall of faded sepia photographs of young IRGC commanders from 1981. He holds a thick brown ledger labeled "1986 LEDGER — VAULT 7." TABLE: an old rotary-dial phone, a brass desk lamp glowing yellow, a tarnished IRGC pin. WINDOW: dusty light slanting in. Mood: institutional memory, networks older than the EU. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.12 NILUFARI — `images/events/nilufari-crackdown.png`

```
[STYLE_HEADER]
A 16-bit pixel-art urban-crackdown scene. A Tehran avenue at night, neon signs in Persian. CENTER: a column of Basij motorbike riders rolling forward, each rider in black helmet and olive jacket, batons in hand. LEAD RIDER: an IRGC ground-ops commander in a dark green field jacket, no helmet, pointing forward with one outstretched arm. BACKGROUND: scattered protesters running, one red headscarf flying, a smashed satellite dish on the curb. SKY: orange smoke from a tire fire reflecting in puddles. Mood: brutal, disciplined, the world is watching. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.13 SHAMKHANI — `images/events/shamkhani-channel.png`

```
[STYLE_HEADER]
A 16-bit pixel-art back-channel diplomacy scene. A Riyadh palace anteroom, marble columns, gold-leaf ceiling, low warm lamp. CENTER: an older bearded Iranian envoy in dark cleric-adjacent suit (Shamkhani) seated on an ornate sofa. OPPOSITE: a Saudi prince in white thawb and red-and-white shemagh, also seated. BETWEEN THEM: a low table with two delicate teacups, a stack of folders, and a handwritten note. BACKGROUND: a Chinese diplomat half-visible in the doorway, hands clasped, watching. Mood: deceptive moderation, the deal is real and so is the trap. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.14 IRAVANI — `images/events/iravani-un.png`

```
[STYLE_HEADER]
A 16-bit pixel-art United Nations scene. UN Security Council horseshoe chamber, blue carpet, the famous Norwegian wood mural in pixel form. CENTER: Iran's ambassador Iravani at the IRAN nameplate, dark suit, hand raised holding a single sheet of paper. AROUND HIM: other ambassadors in muted suits at their desks (small "RUSSIA" and "CHINA" placards visible — both raising their hands in vote alignment). VOTING BOARD: pixel-art display showing red X marks on a draft resolution titled "IRAN ARMS EMBARGO." Mood: paperwork as warfare, ghost-banker statecraft. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.15 IRIB / MORTAZAVI — `images/events/irib-confession.png`

```
[STYLE_HEADER]
A 16-bit pixel-art state-television scene. Inside an IRIB studio, anchor desk under harsh studio lights. CENTER: a green-and-white "صدا و سیما" (IRIB) chyron lower-third with the IRIB logo in upper corner. ON-SCREEN MONITOR: a hooded, downcast detainee being interviewed in a dim cell, captioned "اعتراف زنده" (LIVE CONFESSION). FOREGROUND: a male anchor in dark suit gesturing to the monitor, expression flat. BACKGROUND: control-room window, technicians at a mixing board, signal-jamming waveforms pulsing on a side screen. Mood: propaganda factory, signal as weapon. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.16 AQIL — `images/events/aqil-empty-chair.png`

```
[STYLE_HEADER]
A 16-bit pixel-art memorial scene. Hezbollah command room in Beirut's Dahiyeh suburb. CENTER: an empty leather command chair behind a map table, a green-and-yellow Hezbollah flag draped over its back. ON THE TABLE: a hand-drawn raid map of northern Israel labeled "GALILEE — RADWAN PLAN," partly singed at the edges. ABOVE THE CHAIR: a framed pixel-art portrait of Ibrahim Aqil with a black mourning ribbon across the corner. WALL: cracked from a recent strike, dust still settling in slow particle motes. Mood: succession vacuum, an elite force without its commander. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.17 AFIF — `images/events/afif-broadcast.png`

```
[STYLE_HEADER]
A 16-bit pixel-art destroyed-newsroom scene. The interior of Hezbollah's Al-Manar TV studio after an Israeli precision strike. CENTER: a toppled anchor desk with the yellow-and-green Al-Manar logo, papers scattered, a dead microphone hanging by its cable. BACKGROUND: shattered glass, the broadcast camera knocked to its side, red recording light dim and flickering. ON THE WALL: a cracked monitor still showing the last frame — Muhammad Afif mid-sentence, frozen. SKY: a strip of grey Beirut dawn through a hole in the ceiling. Mood: information operation silenced, journalism-as-target. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

## Q.18 SAFA — `images/events/safa-resignation.png`

```
[STYLE_HEADER]
A 16-bit pixel-art quiet-power scene. An office at Hezbollah's Beirut HQ, late evening, a single lit desk lamp. CENTER: an older man (Safa) in a dark grey suit, beard close-trimmed, placing a brass nameplate face-down on the desk. ON THE DESK: a single typed letter labeled "RESIGNATION — 5 FEB 2026," a black diplomatic pouch, a passport with a UAE entry stamp visible on its open page. WALL: a photo of Nasrallah, slightly askew. WINDOW: faint Beirut city lights through closed blinds. Mood: an era ends without a press conference. NO photographic likeness.
[NEGATIVE]
[OUTPUT_RULES] 256×144 native, 3× upscale.
```

---

These 18 prompts cover the new event-theatre scenes for the expanded character roster (`game.html`'s `CHARACTER_EVENTS` extension). All 18 portraits were already on disk before this section was authored — Section Q covers only the **scene images** that fire when each character intervenes.

---

# Appendix — Prompt-engineering tips per tool

**Midjourney v6+:** prepend `--style raw --ar 16:9 --s 50` to keep it from over-stylizing. Add `pixel art tileset reference, --niji 6` only if it's pulling toward photoreal.

**DALL-E 3 / GPT Image:** be explicit about "SNES era 16-bit pixel art" in the FIRST sentence of the prompt; it's prone to drifting toward modern flat illustration otherwise.

**Stable Diffusion:** use a pixel-art LoRA (e.g. `pixel-art-xl`, `pix-art`) at weight 0.7–0.9. Add `(pixel art:1.3)` token weighting. Negative-prompt `smooth, render, photo, painted, blurry, 3d`.

**Aseprite-AI / Retro Diffusion:** native pixel output — generate at the native size directly and skip the downsample step.
