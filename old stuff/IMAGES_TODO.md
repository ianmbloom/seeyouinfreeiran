# Crouching Lion — Image Generation Punch List

This is the **status briefing** for `game.html` image assets. Cross-reference each missing entry with the listed section of `IMAGE_PROMPTS.md` (or `BATCH_STORY_SCENES.md` / `BATCH_NEW_IMAGES.md`) to grab the locked prompt and pixel dimensions.

**Folder layout:** all assets live under `images/<subfolder>/<filename>`. Subfolders: `buttons`, `irgc`, `events`, `portraits`, `icons`, `cutouts`, `endings`, `info`, `story`. Still-missing subfolders: `map`, `standee`, `codex`.

---

## ✅ COMPLETE — already on disk

| Folder              | Count | Notes |
| ------------------- | ----- | ----- |
| `images/buttons/`   | 10    | All Trump moves wired |
| `images/irgc/`      | 4     | All IRGC moves wired |
| `images/icons/`     | 6     | All bar icons wired |
| `images/cutouts/`   | 2     | Mojtaba front + side |
| `images/events/`    | 36    | All 36 character-event scenes wired (12 originals + 6 originals never-prior + 18 expansion) |
| `images/portraits/` | 28    | 26 wired into character events; 2 stub portraits (`irgc.png`, `trump.png`) unused |
| `images/endings/`   | 7     | All 7 endings wired (5 just dropped from `new images/`) |
| `images/info/`      | 20    | All 20 information cards wired (just dropped from `new images/`) |
| `images/story/`     | 5     | All 5 opening story panels wired (just dropped from `new images/`) |

**Cross-checked: of 139 unique image paths referenced by `game.html`, 108 now resolve to real files on disk.**

---

## 🔴 PRIORITY 1 — Game-shell visuals (3)

These are the highest-impact missing assets. Without them, the arena renders with placeholder data-labels in the most prominent on-screen positions.

| File                              | Bucket          | Prompt § | Status |
| --------------------------------- | --------------- | -------- | ------ |
| `images/map/iran-gulf.png`        | Scene 480 × 270 | `IMAGE_PROMPTS.md` § L1 | 🔴 missing |
| `images/standee/trump.png`        | Cutout 256 × 384 | § L2 | 🔴 missing |
| `images/standee/irgc.png`         | Cutout 256 × 384 | § L2 | 🔴 missing |

---

## 🟢 PRIORITY 2 — Original-roster character portraits (8)

96×96 portraits for the eight original-roster events that fire in `CHARACTER_EVENTS` but still lack a portrait. Game uses `onerror` placeholder until they exist.

| File                                       | Character                  | Prompt § |
| ------------------------------------------ | -------------------------- | -------- |
| `images/portraits/houthi.png`              | HOUTHI COMMANDER           | § E |
| `images/portraits/tucker.png`              | TUCKER QATARLSON           | § E |
| `images/portraits/rajavi.png`              | MARYAM RAJAVI (MEK)        | § E |
| `images/portraits/diaspora.png`            | DIASPORA ORGANIZER         | § E |
| `images/portraits/mossad.png`              | MOSSAD CYBER UNIT          | § E |
| `images/portraits/assembly.png`            | ASSEMBLY OF EXPERTS        | § E |
| `images/portraits/opec.png`                | OPEC OIL MINISTER          | § E |
| `images/portraits/anonymous.png`           | ANONYMOUS — INSIDE IRAN    | § E |

---

## 🔵 PRIORITY 3 — Codex thumbnails (20)

The Free Iran Briefing screen renders 20 cards. **None of the thumbnails exist yet.** The grid renders fine — every card just shows a placeholder.

| Folder           | Count | Prompt § |
| ---------------- | ----- | -------- |
| `images/codex/`  | 20    | § P1–P16 (originals) + § M2 (Day-122 speech) |

Files needed:

```
ORIGINALS (§ P1-P16):
1979-hijack.png            irgc.png
pahlavi.png                basij.png
lion-and-sun.png           proxies.png
mahsa.png                  hormuz.png
january-surge.png          bibi-as-ally.png
massacre.png               diaspora.png
internet-blackout.png      free-iran.png
khamenei.png
cardboard-mojtaba.png

DAY-122 SPEECH (§ M2 a-d):
hyperinflation.png         sanctions.png
strikes.png                defections.png
```

> Note: codex thumbnails can be cropped/recolored variants of the matching info-card scene where the topic overlaps. § P prompts are explicitly the simpler "iconic single motif" versions.

---

## 📊 ROLL-UP — every missing asset has a locked prompt

| Priority | Bucket                      | Missing | Prompt source |
| -------- | --------------------------- | ------- | ------------- |
| 🔴 P1     | Map + standees              | 3       | `IMAGE_PROMPTS.md` § L1 (map), § L2 (standees) |
| 🟢 P2     | Original-roster portraits   | 8       | `IMAGE_PROMPTS.md` § E |
| 🔵 P3     | Codex thumbnails            | 20      | `IMAGE_PROMPTS.md` § P + § M2 |
| **TOTAL** |                             | **31** | all locked |

---

## 🎉 RECENTLY COMPLETED (this generation pass)

The following 66 narrative scenes were just wired in from the `new images/` staging folder. Every one was generated using the UI-free prompts from `BATCH_STORY_SCENES.md`, and every reference path in `game.html` now resolves.

| Group                                  | Count | Folder         |
| -------------------------------------- | ----- | -------------- |
| Opening story panels                   | 5     | `images/story/`    |
| Original character event scenes (regen)| 12    | `images/events/`   |
| Original character event scenes (new)  | 6     | `images/events/`   |
| Expanded character event scenes        | 18    | `images/events/`   |
| Information cards                      | 20    | `images/info/`     |
| Endings (the missing 5)                | 5     | `images/endings/`  |
| **TOTAL**                              | **66**|                |

---

## 🛠 Recommended generation order for the remaining 31

1. **P1 (3 assets) — map + standees.** Biggest single visual unlock; every turn renders these.
2. **P2 (8 assets) — original-roster portraits.** Each one fills a 96×96 slot in an existing character-event modal — small but immediately visible.
3. **P3 (20 assets) — codex thumbnails.** Iconic single-motif compositions are fast to generate; the codex grid is reference material so any aesthetically consistent set works.

After all 31 are generated, `game.html` will have **zero missing image references** end-to-end.
