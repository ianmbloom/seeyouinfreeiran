# BATCH — 18 New Character-Event Scenes (Section Q)

Self-contained generation manifest for the **expanded character roster** added to `game.html`. Every prompt below is ready to paste into Midjourney, DALL-E 3 / GPT Image, Stable Diffusion, Aseprite-AI, or Retro Diffusion.

> Each prompt has THREE parts you must paste together:
> 1. **STYLE HEADER** (§ 1 — same for all 18)
> 2. **THE PROMPT BODY** (Q.1 through Q.18 — unique per image)
> 3. **NEGATIVE PROMPT** (§ 2 — same for all 18, paste in your tool's negative-prompt field)

After generation, drop the file at the listed path. Filenames are referenced by `game.html` and **must match exactly**.

---

## §1 — Master style header (paste BEFORE every prompt body)

```
16-bit pixel art, late 80s/early 90s SNES-era arcade game style,
limited 8–12 color palette per scene, heavy 1px black outlines,
flat cel-shading, no anti-aliasing, no gradients, scanline-friendly.
Dark dystopian neon palette on a deep navy background.
```

---

## §2 — Universal negative prompt (paste in negative-prompt field for every image)

```
photorealistic, 3D render, octane, blurry, anti-aliased,
smooth gradients, modern cartoon, anime, watercolor,
oil painting, lens flare, depth of field, motion blur,
hands with extra fingers, modern UI elements, watermarks, signatures.
```

---

## §3 — Color palette (lock to these hex values, max ~10 per scene)

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

## §4 — Output rules (every image)

- **Format:** PNG, solid `#06080c` background unless transparent specified.
- **Native size:** **256 × 144** pixels. Generate at this exact size, then upscale 3× (768 × 432) with **nearest-neighbor / point sampling only** — never bicubic, never bilinear. The host CSS uses `image-rendering:pixelated` to scale crisply at runtime, so source pixels must stay sharp.
- **Persian text:** do NOT bake Persian/Farsi text into the image. The HTML overlays text with the Vazirmatn font. Where Persian is mentioned in a prompt (e.g. "اعتراف"), it's contextual reference only — keep text-shaped pixel blocks if a sign is part of the composition, but no real glyphs.
- **No real-world photographic likeness.** All character renderings are stylized pixel-art editorial portraits — recognizable by silhouette/wardrobe/setting, not facial fidelity.
- **Path:** save to `images/events/<filename>` exactly as listed.

---

# THE 18 PROMPTS

---

## Q.1 — RUBIO — `images/events/rubio-podium.png`

```
A 16-bit pixel-art editorial scene. State Department briefing room. CENTER: Marco Rubio at the podium, dark navy suit, red tie, hand mid-gesture, jaw set. BACKDROP: large US State Department seal on dark blue wall. SIDE LECTERN: an aide turning a page labeled "SECONDARY SANCTIONS." A row of microphones bristles at podium edge. Camera sees the speaker from press-pit angle, slightly low. Mood: legal, hawkish, controlled. NO real-world photographic likeness — stylized pixel-art editorial portrait only.
```

---

## Q.2 — XI JINPING — `images/events/xi-tea.png`

```
A 16-bit pixel-art geopolitical scene. Beijing reception room, low warm lighting. CENTER: Xi Jinping seated at low lacquered tea table, dark suit, hands resting on knees, calm half-smile. OPPOSITE: an Iranian envoy in dark suit leaning forward, papers between them showing oil tanker silhouettes and a 25-year contract. BACKDROP: red-and-gold panel art, faint gold dragon motif. ICON detail: tiny ship silhouettes on the document. Mood: patient, immovable, transactional. NO photographic likeness.
```

---

## Q.3 — MACRON — `images/events/macron-elysee.png`

```
A 16-bit pixel-art diplomatic scene. Élysée Palace press hall, gold-framed mirrors, parquet floor. CENTER: Macron at podium with French and EU flags, mid-gesture, signature side-part hair. RIGHT: an Iranian foreign minister in cleric-adjacent dark robes shaking his hand awkwardly. BACKGROUND: photographers' flash bursts, white sparks across pixels. Tiny sign on podium reads "PARIS" in EU blue. Mood: courtly, slightly improvised, allies will be furious. NO photographic likeness.
```

---

## Q.4 — STARMER — `images/events/starmer-downing.png`

```
A 16-bit pixel-art political-procedural scene. 10 Downing Street cabinet room, long polished wood table. CENTER: Keir Starmer in dark suit, glasses on, reading a thick legal brief stamped "PRIVILEGED — IRAQ WAR PRECEDENTS." TABLE: stacks of red folders, two open laptops, one Union Jack mug. WALL: black-and-white portraits in pixel mosaic. Mood: cautious, lawyerly, the British state grinding slowly. NO photographic likeness.
```

---

## Q.5 — ZELENSKY — `images/events/zelensky-bunker.png`

```
A 16-bit pixel-art wartime intelligence scene. Kyiv command bunker, exposed concrete walls, single bare bulb glow. CENTER: Zelensky in his trademark olive fleece, beard, leaning over a metal table. ON TABLE: a captured Iranian Shahed-136 drone with its triangular wing visible, casing opened to expose tiny circuit boards, labeled "IRGC SUPPLY CHAIN." Two Ukrainian officers behind him in body armor with yellow shoulder patches. BACKGROUND: a Ukrainian flag draped behind, slightly crumpled. Mood: dark humor under siege, intel-as-currency. NO photographic likeness.
```

---

## Q.6 — AMOO LINDSEY — `images/events/lindsey-rally.png`

```
A 16-bit pixel-art rally scene. A diaspora rally in Los Angeles (Westwood). CENTER: an older US senator in a charcoal suit and red tie standing on a small wooden stage, mic in hand, fist half-raised. CROWD: a sea of pixel-art protesters waving the pre-revolution Lion-and-Sun flag (green-white-red with golden lion-and-sun centered), some holding signs reading "WOMAN LIFE FREEDOM" and "FREE IRAN." Banner above the stage reads "AMOO LINDSEY." Sky: dusk pink-purple. Mood: defiant, transatlantic alliance, genuine warmth. NO photographic likeness.
```

---

## Q.7 — KATZ — `images/events/katz-warroom.png`

```
A 16-bit pixel-art military operations scene. IDF underground war room, blue-tinted lighting. CENTER: Israel Katz, white open-collar shirt no tie, sleeves rolled up, leaning over a glowing tactical map of the Persian Gulf and Iran. AROUND HIM: three IDF officers in olive uniforms, one wearing a beret. WALL: huge pixel-art map of Iran with red threat markers, satellite imagery overlay tiles, a digital clock reading "03:00." Mood: quiet, surgical, no announcement coming. NO photographic likeness.
```

---

## Q.8 — GHALIBAF — `images/events/ghalibaf-majlis.png`

```
A 16-bit pixel-art legislative-chamber scene. Iranian Majlis hall, tiered green seats, brass railings. CENTER: Speaker Ghalibaf at the speaker's chair on a raised dais, gavel in hand, dark suit, cropped grey beard, expression flat. BACKDROP: large Iranian flag and Khatam al-Anbiya construction-arm seal pinned over the chair. FOREGROUND: rows of Majlis deputies in dark suits and clerical robes, all seated, a few raising hands. A scrolling news-style banner across the bottom of the chamber screen reads "NATIONAL SECURITY BILL — APPROVED." Mood: institutional laundering, quiet brutality. NO photographic likeness.
```

---

## Q.9 — TAEB — `images/events/taeb-cell.png`

```
A 16-bit pixel-art interrogation scene. Tehran prison cell, single overhead bulb, scorched concrete walls. CENTER: a hooded male figure in orange jumpsuit seated at a small metal table, head bowed, reading from a paper labeled "اعتراف" (CONFESSION — pixel-block shapes only, no real glyphs). LEFT: a TV camera on a tripod, red recording light glowing. RIGHT (in shadow): the silhouette of an older bearded cleric — Taeb — in dark IRGC uniform jacket, expression unreadable. WALL: a faded poster of Khomeini half-peeled. Mood: cold, scripted, machine-of-state. NO photographic likeness.
```

---

## Q.10 — SALAMI — `images/events/salami-parade.png`

```
A 16-bit pixel-art military-parade scene. Tehran parade ground, dusk, low angle from below the podium. CENTER: IRGC Commander-in-Chief Hossein Salami in olive-green uniform with red shoulder boards and gold braid, fist thrust upward, beard cropped, mouth open mid-shout. BACKDROP: a massive banner with stylized missiles and the slogan "هشت دقیقه" (EIGHT MINUTES — pixel-block shapes only, no real glyphs). ROWS: IRGC soldiers below in olive uniforms, rifles vertical, marching in lockstep, faces uniformly stern. SKY: smoke-streaked, four ballistic missile silhouettes rising in pixel-art trails. Mood: maximalist, theatrical, dangerous. NO photographic likeness.
```

---

## Q.11 — REZAEE — `images/events/rezaee-archive.png`

```
A 16-bit pixel-art institutional-archive scene. A dimly lit IRGC founders' hall, parquet floor, brown wood paneling. CENTER: Mohsen Rezaee, white beard, dark suit and modest tie, standing in front of a wall of faded sepia photographs of young IRGC commanders from 1981. He holds a thick brown ledger labeled "1986 LEDGER — VAULT 7." TABLE: an old rotary-dial phone, a brass desk lamp glowing yellow, a tarnished IRGC pin. WINDOW: dusty light slanting in. Mood: institutional memory, networks older than the EU. NO photographic likeness.
```

---

## Q.12 — NILUFARI — `images/events/nilufari-crackdown.png`

```
A 16-bit pixel-art urban-crackdown scene. A Tehran avenue at night, neon signs in Persian (pixel-block shapes only, no real glyphs). CENTER: a column of Basij motorbike riders rolling forward, each rider in black helmet and olive jacket, batons in hand. LEAD RIDER: an IRGC ground-ops commander in a dark green field jacket, no helmet, pointing forward with one outstretched arm. BACKGROUND: scattered protesters running, one red headscarf flying, a smashed satellite dish on the curb. SKY: orange smoke from a tire fire reflecting in puddles. Mood: brutal, disciplined, the world is watching. NO photographic likeness.
```

---

## Q.13 — SHAMKHANI — `images/events/shamkhani-channel.png`

```
A 16-bit pixel-art back-channel diplomacy scene. A Riyadh palace anteroom, marble columns, gold-leaf ceiling, low warm lamp. CENTER: an older bearded Iranian envoy in dark cleric-adjacent suit (Shamkhani) seated on an ornate sofa. OPPOSITE: a Saudi prince in white thawb and red-and-white shemagh, also seated. BETWEEN THEM: a low table with two delicate teacups, a stack of folders, and a handwritten note. BACKGROUND: a Chinese diplomat half-visible in the doorway, hands clasped, watching. Mood: deceptive moderation, the deal is real and so is the trap. NO photographic likeness.
```

---

## Q.14 — IRAVANI — `images/events/iravani-un.png`

```
A 16-bit pixel-art United Nations scene. UN Security Council horseshoe chamber, blue carpet, the famous Norwegian wood mural in pixel form. CENTER: Iran's ambassador Iravani at the IRAN nameplate, dark suit, hand raised holding a single sheet of paper. AROUND HIM: other ambassadors in muted suits at their desks (small "RUSSIA" and "CHINA" placards visible — both raising their hands in vote alignment). VOTING BOARD: pixel-art display showing red X marks on a draft resolution titled "IRAN ARMS EMBARGO." Mood: paperwork as warfare, ghost-banker statecraft. NO photographic likeness.
```

---

## Q.15 — IRIB / MORTAZAVI — `images/events/irib-confession.png`

```
A 16-bit pixel-art state-television scene. Inside an IRIB studio, anchor desk under harsh studio lights. CENTER: a green-and-white "صدا و سیما" (IRIB) chyron lower-third with the IRIB logo in upper corner (pixel-block shapes only, no real glyphs). ON-SCREEN MONITOR: a hooded, downcast detainee being interviewed in a dim cell, captioned "اعتراف زنده" (LIVE CONFESSION — pixel-block shapes only). FOREGROUND: a male anchor in dark suit gesturing to the monitor, expression flat. BACKGROUND: control-room window, technicians at a mixing board, signal-jamming waveforms pulsing on a side screen. Mood: propaganda factory, signal as weapon. NO photographic likeness.
```

---

## Q.16 — AQIL — `images/events/aqil-empty-chair.png`

```
A 16-bit pixel-art memorial scene. Hezbollah command room in Beirut's Dahiyeh suburb. CENTER: an empty leather command chair behind a map table, a green-and-yellow Hezbollah flag draped over its back. ON THE TABLE: a hand-drawn raid map of northern Israel labeled "GALILEE — RADWAN PLAN," partly singed at the edges. ABOVE THE CHAIR: a framed pixel-art portrait of Ibrahim Aqil with a black mourning ribbon across the corner. WALL: cracked from a recent strike, dust still settling in slow particle motes. Mood: succession vacuum, an elite force without its commander. NO photographic likeness.
```

---

## Q.17 — AFIF — `images/events/afif-broadcast.png`

```
A 16-bit pixel-art destroyed-newsroom scene. The interior of Hezbollah's Al-Manar TV studio after an Israeli precision strike. CENTER: a toppled anchor desk with the yellow-and-green Al-Manar logo, papers scattered, a dead microphone hanging by its cable. BACKGROUND: shattered glass, the broadcast camera knocked to its side, red recording light dim and flickering. ON THE WALL: a cracked monitor still showing the last frame — Muhammad Afif mid-sentence, frozen. SKY: a strip of grey Beirut dawn through a hole in the ceiling. Mood: information operation silenced, journalism-as-target. NO photographic likeness.
```

---

## Q.18 — SAFA — `images/events/safa-resignation.png`

```
A 16-bit pixel-art quiet-power scene. An office at Hezbollah's Beirut HQ, late evening, a single lit desk lamp. CENTER: an older man (Safa) in a dark grey suit, beard close-trimmed, placing a brass nameplate face-down on the desk. ON THE DESK: a single typed letter labeled "RESIGNATION — 5 FEB 2026," a black diplomatic pouch, a passport with a UAE entry stamp visible on its open page. WALL: a photo of Nasrallah, slightly askew. WINDOW: faint Beirut city lights through closed blinds. Mood: an era ends without a press conference. NO photographic likeness.
```

---

# Tool-specific tips

**Midjourney v6+:** prepend `--style raw --ar 16:9 --s 50` to keep it from over-stylizing. If output drifts photoreal, add `pixel art tileset reference, --niji 6`.

**DALL-E 3 / GPT Image:** put "SNES era 16-bit pixel art" in the FIRST sentence; this tool drifts toward modern flat illustration otherwise. Always include a reminder in-prompt that text should be pixel-block shapes, not real glyphs.

**Stable Diffusion:** load a pixel-art LoRA (e.g. `pixel-art-xl`, `pix-art`) at weight 0.7–0.9. Add `(pixel art:1.3)` token weighting. Generate at 256×144 native, then upscale with **nearest-neighbor** only.

**Aseprite-AI / Retro Diffusion:** native pixel output — generate at 256×144 directly and skip the downsample step.

---

# Quick checklist

```
[ ] Q.1  rubio-podium.png
[ ] Q.2  xi-tea.png
[ ] Q.3  macron-elysee.png
[ ] Q.4  starmer-downing.png
[ ] Q.5  zelensky-bunker.png
[ ] Q.6  lindsey-rally.png
[ ] Q.7  katz-warroom.png
[ ] Q.8  ghalibaf-majlis.png
[ ] Q.9  taeb-cell.png
[ ] Q.10 salami-parade.png
[ ] Q.11 rezaee-archive.png
[ ] Q.12 nilufari-crackdown.png
[ ] Q.13 shamkhani-channel.png
[ ] Q.14 iravani-un.png
[ ] Q.15 irib-confession.png
[ ] Q.16 aqil-empty-chair.png
[ ] Q.17 afif-broadcast.png
[ ] Q.18 safa-resignation.png
```

After all 18 PNGs are dropped into `images/events/`, every new character event in `game.html` will display its custom theatre scene instead of the placeholder data-label.
