# BATCH — The Final 31 (ship-the-game pass)

This is the **last generation pass** for `game.html`. Once these 31 PNGs land in their listed paths, every image reference in the game will resolve and the experience renders end-to-end with zero placeholder data-labels.

**Status as of this document:** of 139 unique image paths referenced by `game.html`, 108 are on disk. **31 remain.**

---

## What's in here

| # | Bucket | Path | Count | Native size | Why it matters |
| --- | --- | --- | --- | --- | --- |
| §6 | Map (gameboard) | `images/map/iran-gulf.png` | 1 | 800×450 | Center-stage on every turn — the player stares at this all game |
| §7 | Character standees | `images/standee/*.png` | 2 | 256×512, **transparent** | The two pixel-art figures flanking the map. Nothing else fills these slots |
| §8 | Original-roster portraits | `images/portraits/*.png` | 8 | 96×96 | Fills the modal portrait slot for the 8 original-roster character events |
| §9 | Codex thumbnails | `images/codex/*.png` | 20 | 480×270 | Free Iran Briefing grid — the educational reference screen |
| | **TOTAL** | | **31** | | |

---

## §1 — Master style header (paste BEFORE every prompt body)

```
16-bit pixel art, late 80s/early 90s SNES-era arcade game style,
limited 8–12 color palette per scene, heavy 1px black outlines,
flat cel-shading, no anti-aliasing, no gradients, scanline-friendly.
Dark dystopian neon palette on a deep navy background.
```

---

## §2 — Universal negative prompt (paste in negative-prompt field)

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

(Same negative as `BATCH_STORY_SCENES.md` — the standees and codex thumbnails specifically benefit from "no game UI", because the model wants to put HUD bars on character cutouts otherwise.)

---

## §3 — Color palette (lock to these hex values)

| Role            | Hex       |
| --------------- | --------- |
| Background      | `#06080c` |
| Trump green     | `#52ff8f` |
| Trump green dk  | `#1ecc5e` |
| Warning yellow  | `#ffd54a` |
| IRGC red        | `#ff5a67` |
| IRGC red dk     | `#c0222e` |
| Allies cyan     | `#5ad7ff` |
| War Chest orange| `#ff9e3a` |
| Proxies magenta | `#ff5ad7` |
| Skin warm       | `#f4c89c` |
| Skin shadow     | `#a86c4a` |
| Pahlavi gold    | `#ffd24a` |

---

## §4 — Output rules

- **Format:** PNG. Solid `#06080c` background unless transparent specified (standees + portraits may use transparent).
- **Native size:** generate at the EXACT size listed per scene. Upscale 3× with **nearest-neighbor / point sampling only** — never bicubic, never bilinear.
- **No baked text glyphs.** Persian/English text mentioned in a prompt body is contextual reference only — render as abstract pixel-block shapes if a sign is part of the composition.
- **Path:** save to the listed path exactly. Filenames are referenced by `game.html` and must match.

---

## §5 — Tonal note

These are **codex / character / arena reference images** — the most institutional, slowed-down assets in the game. Aim for **single dominant motif per image** wherever possible. The Free Iran Briefing especially needs to read fast at thumbnail size.

---

# §6 — Map of Iran + Persian Gulf (1 image)

The center-stage gameboard. Every turn happens on top of this image.

## §6.1 — `images/map/iran-gulf.png` — 800 × 450 PNG

```
16-bit pixel-art geographic map, top-down, of Iran and surrounding region. Iranian land mass dominant in Pahlavi gold (#ffd24a), cleanly outlined. Persian Gulf and Gulf of Oman in deep navy (#06080c to #1a2a44 water with pixelated banding). Strait of Hormuz clearly recognizable. Arabian Peninsula (Saudi / UAE / Qatar / Bahrain) in dim cyan-grey. Partial Iraq / Turkey / Pakistan / Afghanistan borders in similar cyan-grey. Caspian Sea sliver visible at top. Pixelated coastlines, no anti-aliasing. NO city labels (the HTML overlays those). A subtle Lion & Sun watermark optionally in the deep desert center-east, very faint. Iran fills upper-right two-thirds of frame; Gulf in lower-center; Hormuz at center-right pinch; UAE / Saudi at bottom edge.
```

> **Coordinate accuracy matters here.** The marker SVG overlay assumes specific positions: Tehran near (456,128), Bandar-e Abbas near (528,290), Hormuz Strait near (508,308), UAE near (488,346). The artist doesn't need to be exact, but rough geographic placement matters or the markers will float in ocean.

---

# §7 — Character standees (2 images)

The two pixel-art figures flanking the map. Both **256 × 512 PNG** with **TRANSPARENT background**.

## §7.1 — `images/standee/trump.png`

```
Full-body pixel-art standee of JAW-MAXX TRUMP. Exaggerated cartoon-square jaw (the "jaw-maxx" caricature), blond hair-helmet, red MAGA tie, dark suit, slight forward stance with arms crossed (or one hand raised in a gesture). Looking slightly to the right (toward the map). Subtle Trump-green rim-light from his right side. TRANSPARENT background — no scenery, no floor, just the figure. Limit 8 colors. Centered, full-bleed top-to-bottom; head ~15% from top, feet at bottom edge.
```

## §7.2 — `images/standee/irgc.png`

```
Full-body pixel-art standee of an IRGC commander — generic, NOT a specific real person. Olive uniform, red shoulder boards, peaked cap with a small red star, mustache, stern expression. Hand on a holstered sidearm. Looking slightly to the LEFT (toward Trump). IRGC-red rim-light from the left. TRANSPARENT background — no scenery. Limit 8 colors. Centered, full-bleed top-to-bottom; mirror composition of trump.png so the two figures face each other across the map.
```

---

# §8 — Original-roster portraits (8 images)

96 × 96 PNG. Path: `images/portraits/`. Background can be solid `#06080c` OR transparent. Each is a head-and-shoulders 3/4-view pixel avatar with the same lighting setup: single key light from upper-left, 1px black outline, limit 6–8 colors.

## §8.1 — `images/portraits/anonymous.png` — ANONYMOUS — INSIDE IRAN

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders front view of an anonymous figure entirely in shadow, hood pulled up over the head, face completely dark except for a single pinpoint cyan rim-light catching the edge of one cheek and the curl of one finger near the chin. NO facial features visible. Behind the figure: faint pixel-art concentric short-wave radio waveform rings. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 6 colors, retro arcade game style, no text.
```

## §8.2 — `images/portraits/assembly.png` — ASSEMBLY OF EXPERTS

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of an elderly Iranian Assembly-of-Experts cleric — white turban, long white beard, beige cleric robe collar visible at bottom edge, severe expression, eyes narrowed in calculation. Slight wrinkle lines pixel-rendered. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 7 colors, retro arcade game style, no text.
```

## §8.3 — `images/portraits/diaspora.png` — DIASPORA ORGANIZER

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of a young Iranian-American diaspora organizer, mid-30s, expressive face, dark hair pulled back, mid-shout. A small Pahlavi-gold Lion & Sun pin glints on the jacket lapel. The chrome top of a megaphone is visible cropping the bottom edge. Warm skin tones. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 7 colors, retro arcade game style, no text.
```

## §8.4 — `images/portraits/houthi.png` — HOUTHI COMMANDER

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of a Houthi militia commander, mid-40s, full dark beard, white-and-grey checkered keffiyeh wrapped around the head and draped over one shoulder, grey-green tactical jacket collar visible, defiant expression with raised chin. A single small green "Sarkha" Houthi banner pin on the jacket. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 7 colors, retro arcade game style, no text.
```

## §8.5 — `images/portraits/mossad.png` — MOSSAD CYBER UNIT

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of an anonymous Israeli intelligence operator in a black balaclava — only the eyes visible, hard cyan rim-light catching the edge of the balaclava and the bridge of the nose. Plain dark IDF-olive collar visible at the bottom edge. NO identifiable face — this is the institutional portrait of the apparatus, not a person. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 6 colors, retro arcade game style, no text.
```

## §8.6 — `images/portraits/opec.png` — OPEC OIL MINISTER

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of a Gulf-state oil minister in a clean white thawb, red-and-white checkered shemagh held in place by a black agal, neat dark beard, calm authoritative expression. Slight gold-tone embroidery on the thawb collar. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 7 colors, retro arcade game style, no text.
```

## §8.7 — `images/portraits/rajavi.png` — MARYAM RAJAVI (MEK)

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of Maryam Rajavi — a woman in her mid-70s, dark hair partly visible at the temples, dignified expression, wearing a deep magenta-red hijab tied loosely under the chin and a dark structured suit jacket. Calm authority. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 7 colors, retro arcade game style, no text.
```

## §8.8 — `images/portraits/tucker.png` — TUCKER QATARLSON

```
16-bit pixel-art HUD avatar, 96x96 native, head-and-shoulders 3/4 view of a smug TV-pundit caricature — navy-blue blazer, blond side-parted hair, square jaw, slight raised eyebrow as if mid-rant, mouth slightly open. Pixel-blocky cable-news-set bokeh of red and blue lights in the background. Single key light from upper-left, deep navy #06080c background, 1px black outline, limit 7 colors, retro arcade game style, no text.
```

---

# §9 — Codex thumbnails (20 images)

480 × 270 PNG. Path: `images/codex/`. These render as cards in the Free Iran Briefing reference screen (max ~200px wide on display), so **single dominant motif per image**. NO crowded compositions, NO secondary detail. The codex is iconic, not narrative — the info cards in `images/info/` are the narrative versions of overlapping topics.

## §9.1 — `images/codex/1979-hijack.png` — 1979 ISLAMIC HIJACK

```
16-bit pixel-art iconic still: a single hand in a clerical-black robe-sleeve grasping and TEARING the upper edge of a fabric banner that bears abstract Persian-style "آزادی" (freedom) calligraphy (calligraphy as pixel-block shapes only, not legible glyphs). Pieces of the banner falling. Single iconic hand-and-banner motif, no surrounding scene. Composition: banner upper-half, hand center-right grasping the tear, torn pieces falling lower-frame. Palette: black robe + crimson torn banner + warm sepia background + cream banner letters.
```

## §9.2 — `images/codex/pahlavi.png` — REZA PAHLAVI

```
16-bit pixel-art clean side-profile portrait of Reza Pahlavi in a dark suit, dignified, looking slightly upward. A small Pahlavi-gold Lion & Sun pin on the lapel is the visual hero. Solid deep navy background with a faint vignette. Lighting from camera-right with a hint of warm rim-light from camera-left. Composition: centered profile portrait, slight tilt of head, lapel pin lower-right of face (focal point). Palette: warm skin + dark suit + Pahlavi-gold pin + cool navy background.
```

## §9.3 — `images/codex/lion-and-sun.png` — LION & SUN FLAG

```
16-bit pixel-art the Lion & Sun emblem rendered as a centered pseudo-logo on a clean fabric background. Lion holds the curved Persian sword (Zulfiqar curve), sun rises behind with rays. NO frame, NO patina, NO folds — this is the codex reference image, so present it crisply. Composition: dead-center medallion, equal margins, no decorative framing. Palette: pure Pahlavi-gold emblem + deep crimson fabric + cream highlights.
```

## §9.4 — `images/codex/mahsa.png` — MAHSA AMINI

```
16-bit pixel-art respectful memorial portrait. Mahsa Amini's face in three-quarter view, hair flowing, a soft Pahlavi-gold halo of light behind her — could be sunlight, could be a single candle flame, kept ambiguous. Eyes calm, NOT mournful. Composition: centered three-quarter portrait, halo behind, no surrounding elements. Palette: warm skin + dark flowing hair + Pahlavi-gold halo glow + deep navy background.
```

## §9.5 — `images/codex/january-surge.png` — THE JANUARY SURGE

```
16-bit pixel-art a single Pahlavi-gold Lion & Sun flag held aloft against a night sky, the flagpole and a fragment of the bearer's silhouetted forearm visible. Below the upper-third: an ocean of crowd-silhouette heads cropped at frame-bottom (don't show full bodies — just the dense tops of heads). One distant streetlamp warning-yellow. Composition: flag upper-center as the sole focal point, silhouette crowd cropping the lower third. Palette: Pahlavi-gold flag (hero) + deep navy sky + warning-yellow streetlamp + black silhouette crowd.
```

## §9.6 — `images/codex/massacre.png` — JANUARY MASSACRE

```
16-bit pixel-art respectful iconic still. A single thick white memorial candle on a soot-blackened street. The flame burns. Around its base: spent IRGC-red brass shell casings scattered. NO bodies, NO blood. The implication does the work. Composition: candle dead-center, casings circling base, lit by the candle's own glow only. Palette: cream candle wax + Pahlavi-gold flame + ash-grey street + IRGC-red brass casings + deep navy background.
```

## §9.7 — `images/codex/internet-blackout.png` — INTERNET BLACKOUT

```
16-bit pixel-art tight close-up of a smartphone screen showing pixel-text "NO SIGNAL" (abstract pixel-block shapes, not legible glyphs) and a struck-through wifi/cellular icon. The phone is held by a pixel-art Iranian hand, slight thumb visible. The phone's screen is the ONLY light source — a faint cyan glow on the surrounding hand and dark navy background. Single iconic still. Composition: phone screen dead-center as the hero, hand cropped lower-frame. Palette: cyan screen glow + warm skin tone + deep navy negative space + IRGC-red strike-through.
```

## §9.8 — `images/codex/khamenei.png` — ALI KHAMENEI

```
16-bit pixel-art official-style framed wall portrait of Khamenei in his black turban and clerical robes. A diagonal black mourning ribbon stretches across the frame's upper-left corner. The glass over the photo is CRACKED — radiating cracks emanate from a small bullet-shaped hole upper-third. The wall around the frame is bare. Composition: centered framed portrait, mourning ribbon upper-left diagonal, crack pattern radiating from upper-third hole. Palette: IRGC-red turban + warm skin + black mourning ribbon + cracked-glass overlay + cream wall.
```

## §9.9 — `images/codex/cardboard-mojtaba.png` — MOJTABA CARDBOARD

```
16-bit pixel-art the visual punchline from the game lore. A propped-up cardboard cutout of Mojtaba Khamenei in clerical robes, head shot pasted onto cardboard. The cardboard's BENT EDGE and the masking-tape brace on its back are CLEARLY visible — that's the joke. A propaganda photographer's hand reaches in from the left edge to "adjust" the photo angle. A tripod studio-light glows magenta lower-right. Composition: cutout center, photographer's hand cropping left edge, tripod lower-right; ALL three together as the satirical tableau. Palette: cardboard-brown + IRGC-red turban + cream face + grey shadow + magenta studio light.
```

## §9.10 — `images/codex/irgc.png` — IRGC

```
16-bit pixel-art chest-up anonymous masked IRGC officer, viewed straight-on. Black balaclava + IRGC-olive helmet + chrome aviator sunglasses reflecting tiny pixel-fire. Small IRGC-red flag patch on the helmet. NO identifiable face — this is the institutional portrait of the apparatus. Composition: centered chest-up portrait, masked face dominating upper-two-thirds, deep negative space below. Palette: IRGC-olive + IRGC-red patch + chrome aviator + black balaclava + deep navy background.
```

## §9.11 — `images/codex/basij.png` — BASIJ MILITIA

```
16-bit pixel-art iconic still: a clenched fist gripping a wooden police baton. On the wrist of the same arm: a Basij motorbike helmet hanging by its chinstrap. The fist is mid-tension, knuckles whitened. Solid background, no surrounding elements. Single iconic motif. Composition: vertical-diagonal arrangement: baton upper-left to lower-right, fist center, helmet hanging right. Palette: rust-orange baton + grey-leather helmet + IRGC-red helmet stripe + warning-yellow baton grip-tape + warm skin fist + deep navy background.
```

## §9.12 — `images/codex/proxies.png` — PROXY OCTOPUS

```
16-bit pixel-art iconic still: a single SEVERED octopus tentacle lying on a stylized warm-paper map of the Middle East. The cut-end of the tentacle emits a thin wisp of smoke. The tentacle is magenta, the cut-end drips IRGC-red, the map is warm sepia. Single dominant motif. Composition: tentacle diagonal lower-left to upper-right, cut-end lower-left as visual focal point, smoke wisp rising. Palette: magenta tentacle + IRGC-red cut + warm map + cyan ocean strip + deep navy negative space.
```

## §9.13 — `images/codex/hormuz.png` — STRAIT OF HORMUZ

```
16-bit pixel-art top-down stylized map of the Strait of Hormuz chokepoint. A single oil tanker centered, transiting north-to-south. Iranian coast as a warm-paper landmass at the top, Omani coast at the bottom. Three glowing Pahlavi-gold trade-arrows trace through the strait. A small IRGC-red speedboat icon harassing from the Iranian side. Composition: horizontal strait, tanker center, coast bands top and bottom, arrows tracing left-to-right. Palette: warm map landmasses + cyan strait water + Pahlavi-gold arrows + Trump-green tanker + IRGC-red speedboat.
```

## §9.14 — `images/codex/bibi-as-ally.png` — IDF AS ALLY

```
16-bit pixel-art tight close-up: two anonymous hands holding two flags side-by-side at chest level — an Israeli flag (blue Star of David on white) and a Pahlavi Lion & Sun flag. The flags slightly overlap at their inner edges. Single iconic gesture, no surrounding elements. Composition: two flags side-by-side dead-center, hands cropped lower-frame. Palette: Israeli-blue + cream + Pahlavi-gold + deep crimson + warm skin hands + deep navy background.
```

## §9.15 — `images/codex/diaspora.png` — DIASPORA

```
16-bit pixel-art iconic still: a chrome megaphone with a small Pahlavi-gold Lion & Sun pennant attached to its handle by a ribbon. The megaphone is angled upward as if mid-call. Behind it (soft-focus): a stylized Westwood/LA storefront facade with abstract Persian-script signage and a strip of palm-tree silhouettes. Composition: megaphone diagonal lower-left to upper-right, pennant ribbon trailing, storefront soft-focus background. Palette: chrome megaphone + Pahlavi-gold pennant + warm SoCal sun + deep navy storefront + palm-silhouette green-black.
```

## §9.16 — `images/codex/free-iran.png` — FREE IRAN

```
16-bit pixel-art iconic still: the Pahlavi Lion & Sun flag flying from the spire of the Azadi Tower silhouette at sunrise. Pahlavi-gold flag is the visual hero, framed against a gradient sky from cyan upper to Pahlavi-gold lower (sunrise). Tower as a clean dark navy silhouette. NO crowd, NO street level — this is the symbolic apex shot. Composition: tower spire upper-center, flag flying horizontal Pahlavi-gold, sunrise gradient filling background. Palette: Pahlavi-gold flag + Pahlavi-gold sunrise gradient + cyan upper sky + deep navy tower silhouette.
```

## §9.17 — `images/codex/hyperinflation.png` — HYPERINFLATION

```
16-bit pixel-art still-life: a single barbari bread loaf on a wooden cutting board, with a curling shop-receipt ribbon next to it that trails zeros (`0,000,000…`) off the edge of the frame. A tiny exhausted figure of a worker silhouetted in the corner, head in hands. Single iconic image. Composition: centered bread, ribbon trailing right, figure tiny lower-left. Palette: warm bread color + warning-yellow ribbon + deep navy background.
```

## §9.18 — `images/codex/strikes.png` — GENERAL STRIKES

```
16-bit pixel-art tight portrait of a single oil worker in a dusty blue coverall and red hard hat, soot on his face, holding a wrench like a torch. A flare-stack with an UNLIT flare visible behind his shoulder. He looks straight at the viewer — defiant, not angry, exhausted but unbroken. Composition: centered chest-up portrait, flare-stack soft-focus over right shoulder. Palette: workers-blue + warning-yellow soot accents + IRGC-red hard hat repurposed as worker's red.
```

## §9.19 — `images/codex/sanctions.png` — SANCTIONS

```
16-bit pixel-art iconic still-life: a heavy steel padlock embossed with a US Treasury OFAC seal, clamped through the chain of a rusting Iranian oil pipeline valve. The valve handle is bent. A single drop of crude oil hangs at the spigot, never to fall. Single iconic image. Composition: padlock dead-center, valve curving from lower-left to upper-right. Palette: rust-orange + Trump-green seal + deep navy.
```

## §9.20 — `images/codex/defections.png` — THE SILENT UNDERGROUND

```
16-bit pixel-art iconic still-life: an IRGC olive-green uniform jacket folded neatly on a wooden chair, badge removed and laid on top, the empty thread holes still visible. Beside the chair: a civilian leather jacket draped over an arm-rest, ready to be put on. A single shaft of pre-dawn light comes through a slatted window, catching dust motes. Composition: uniform-on-chair dominant, civilian jacket lower-right, light beam diagonal upper-left to lower-right. Palette: muted IRGC-olive vs warm civilian-brown + cyan dawn-light accent.
```

---

# §10 — Tool-specific tips

**Midjourney v6+:** prepend `--style raw --ar 16:9 --s 50` for the codex/map scenes; for portraits and standees use `--ar 1:1 --style raw --s 50`. Add `pixel art tileset reference` if it drifts.

**DALL-E 3 / GPT Image:** put "SNES era 16-bit pixel art" in the FIRST sentence; this tool drifts toward modern flat illustration otherwise. **For portraits, explicitly say "16-bit pixel-art HUD avatar" — that phrase locks the style hard.**

**Stable Diffusion:** load a pixel-art LoRA at weight 0.7–0.9. For 96×96 portraits, render at 256×256 then downsample to 96 with nearest-neighbor (LoRAs struggle below 128px native).

**Aseprite-AI / Retro Diffusion:** native pixel output — generate at the listed native size directly.

---

# §11 — Filename checklist (31 PNGs)

```
SHELL (3)                                 PORTRAITS (8)
[ ] §6.1  map/iran-gulf.png  (800×450)    [ ] §8.1  portraits/anonymous.png
[ ] §7.1  standee/trump.png  (256×512α)   [ ] §8.2  portraits/assembly.png
[ ] §7.2  standee/irgc.png   (256×512α)   [ ] §8.3  portraits/diaspora.png
                                          [ ] §8.4  portraits/houthi.png
                                          [ ] §8.5  portraits/mossad.png
                                          [ ] §8.6  portraits/opec.png
                                          [ ] §8.7  portraits/rajavi.png
                                          [ ] §8.8  portraits/tucker.png

CODEX THUMBNAILS (20)
[ ] §9.1   codex/1979-hijack.png          [ ] §9.11  codex/basij.png
[ ] §9.2   codex/pahlavi.png              [ ] §9.12  codex/proxies.png
[ ] §9.3   codex/lion-and-sun.png         [ ] §9.13  codex/hormuz.png
[ ] §9.4   codex/mahsa.png                [ ] §9.14  codex/bibi-as-ally.png
[ ] §9.5   codex/january-surge.png        [ ] §9.15  codex/diaspora.png
[ ] §9.6   codex/massacre.png             [ ] §9.16  codex/free-iran.png
[ ] §9.7   codex/internet-blackout.png    [ ] §9.17  codex/hyperinflation.png
[ ] §9.8   codex/khamenei.png             [ ] §9.18  codex/strikes.png
[ ] §9.9   codex/cardboard-mojtaba.png    [ ] §9.19  codex/sanctions.png
[ ] §9.10  codex/irgc.png                 [ ] §9.20  codex/defections.png
```

α = transparent background.

---

# §12 — Recommended generation order

1. **§6 Map (1 image, 800×450).** Highest-impact single asset — every turn renders this. Generate FIRST and dial in the model + LoRA + seed combo on this one image; everything else inherits the calibration.
2. **§7 Standees (2 images, 256×512 transparent).** Second-highest impact. Pair them in the same generation session so the lighting / color treatment matches.
3. **§8 Portraits (8 images, 96×96).** Easy to batch — same prompt template, just swap subject. Run them all in one session.
4. **§9 Codex thumbnails (20 images, 480×270).** The longest tail. They're reference material — generate in any order, the player only sees them when they open the Free Iran Briefing screen.

---

# §13 — Where these go after generation

Drop each file at its listed `images/<subfolder>/<filename>` path. Run this audit any time to verify connections:

```bash
python3 -c "
import os, re
txt = open('game.html').read()
refs = sorted(set(re.findall(r'images/[A-Za-z0-9_/.-]+\.png', txt)))
missing = [r for r in refs if not os.path.isfile(r)]
print(f'References: {len(refs)}  |  Resolved: {len(refs)-len(missing)}  |  Missing: {len(missing)}')
for m in missing: print(f'  MISSING: {m}')
"
```

When this prints `Missing: 0`, the game is fully populated end-to-end.
