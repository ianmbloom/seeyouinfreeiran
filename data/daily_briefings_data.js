// ────────────────────────────────────────────────────────────────────────────
// DAILY BRIEFINGS - Theme and narrative per day
// ────────────────────────────────────────────────────────────────────────────

const DAILY_BRIEFINGS = [
  {
    day: 1,
    theme: "Day 1 — The First Wave",
    brief: "U.S./Israeli strikes kill Khamenei in Tehran.\nRegime declares mourning; crowds celebrate in streets."
  },
  {
    day: 2,
    theme: "Day 2 — Retaliation Across the Gulf",
    brief: "Regime fires missiles at Israel/U.S. bases.\nU.S. soldier killed in Kuwait; Trump vows more strikes."
  },
  {
    day: 3,
    theme: "Day 3 — Natanz Confirmed",
    brief: "Satellite images confirm Natanz nuclear damage.\nRegime scrambles leadership; civilians remain wary."
  },
  {
    day: 4,
    theme: "Day 4 — Nine Fronts Open",
    brief: "Regime spreads conflict across multiple borders.\nIRGC checkpoints tighten control on civilian life."
  },
  {
    day: 5,
    theme: "Day 5 — Stadiums and Schools",
    brief: "Strikes hit a Tehran stadium and a school in Khomein.\nIranian casualties pass 1,000 as fear and anger deepen."
  },
  {
    day: 6,
    theme: "Day 6 — Oil Fires at Midnight",
    brief: "Israeli jets hit oil facilities; smoke rises over Iran.\nThe White House frames energy strikes as pressure on Tehran."
  },
  {
    day: 7,
    theme: "Day 7 — Internet Cut",
    brief: "Iran imposes a nationwide internet blackout.\nFamilies lose contact as strikes continue across many provinces."
  },
  {
    day: 8,
    theme: "Day 8 — Naval War Begins",
    brief: "U.S. naval action sinks Iranian warships in open combat.\nHormuz turns hazardous as shipping and insurance pull back."
  },
  {
    day: 9,
    theme: "Day 9 — New Supreme Leader",
    brief: "Mojtaba Khamenei is named Supreme Leader in Tehran.\nTrump rejects the move as Iran projects forced continuity."
  },
  {
    day: 10,
    theme: "Day 10 — Army Fractures",
    brief: "Desertions spread through Iran's regular army units.\nIRGC-Artesh tensions sharpen as military trust begins to crack."
  },
  {
    day: 11,
    theme: "Day 11 — Proxies Fill the Gap",
    brief: "Iraqi proxy units help patrol areas inside Iran.\nThe regime leans outward as local conscripts fall away."
  },
  {
    day: 12,
    theme: "Day 12 — Resistance in the Streets",
    brief: "Resistance cells act in major cities before Nowruz.\nThe White House leans into liberation rhetoric as unrest stirs."
  },
  {
    day: 13,
    theme: "Day 13 — Hormuz Under Siege",
    brief: "Commercial shipping backs up behind the Strait of Hormuz.\nTrump threatens force as Iran warns ships off the corridor."
  },
  {
    day: 14,
    theme: "Day 14 — Two Weeks of Fire",
    brief: "CENTCOM reports thousands of sorties and strike targets.\nTehran feels emptier as alerts and exhaustion define daily life."
  },
  {
    day: 15,
    theme: "Day 15 — Russia Confirmed In",
    brief: "Iranian drones are linked to Russian-made components.\nTrump accepts Ukrainian help in targeting drone networks."
  },
  {
    day: 16,
    theme: "Day 16 — Houthis Enter",
    brief: "Houthis fire on USS Truman and widen the war at sea.\nU.S. shipping risks grow from Hormuz to Bab el-Mandeb."
  },
  {
    day: 17,
    theme: "Day 17 — Evin Darkens",
    brief: "Prisoners held since January face new execution threats.\nInside Iran, fear deepens beyond the battlefield and streets."
  },
  {
    day: 18,
    theme: "Day 18 — Desertions Spread",
    brief: "Missile crews report shortages and begin abandoning posts.\nIran's command structure looks more brittle by the day."
  },
  {
    day: 19,
    theme: "Day 19 — Civilian Toll",
    brief: "Civilian deaths pass 2,000 as shelves empty in Tehran.\nFamilies brace for worse while inspections at Isfahan halt."
  },
  {
    day: 20,
    theme: "Day 20 — Mojtaba on Camera",
    brief: "State TV shows Mojtaba reviewing troops from hiding.\nThe broadcast aims to project control to a shaken public."
  },
  {
    day: 21,
    theme: "Day 21 — Largest Strike Yet",
    brief: "A major U.S. strike package hits hardened coastal sites.\nIran answers with missiles into Israel, killing civilians."
  },
  {
    day: 22,
    theme: "Day 22 — Secret Site Revealed",
    brief: "The IAEA reveals an underground site near Isfahan.\nWashington says the finding hardens its view of the war."
  },
  {
    day: 23,
    theme: "Day 23 — Nowruz in the Crossfire",
    brief: "Resistance units strike during the Nowruz fire festival.\nIRGC commanders plead for forces to hold the streets."
  },
  {
    day: 24,
    theme: "Day 24 — The Patrol State",
    brief: "Foreign militia units appear in some Tehran districts.\nBasij morale sags as the capital feels more occupied."
  },
  {
    day: 25,
    theme: "Day 25 — Oil Output Zero",
    brief: "Iran's oil output falls near zero under sustained strikes.\nThe rial plunges again as salaries stop in some provinces."
  },
  {
    day: 26,
    theme: "Day 26 — Gulf Partners Waver",
    brief: "Qatar and Saudi sites are damaged by the widening war.\nGulf allies press Washington to consider the regional limits."
  },
  {
    day: 27,
    theme: "Day 27 — Civilization Warning",
    brief: "Trump warns of catastrophic consequences over Hormuz.\nIran fires on an Indian tanker and deepens the crisis."
  },
  {
    day: 28,
    theme: "Day 28 — One Month In",
    brief: "After a month, thousands are dead across the region.\nIn Iran, blackouts and water loss compound daily strain."
  },
  {
    day: 29,
    theme: "Day 29 — Gulf Cities Hit",
    brief: "Missiles hit Gulf cities as air defenses stay active.\nThe economic shock widens beyond Iran and the battlefield."
  },
  {
    day: 30,
    theme: "Day 30 — Diplomats vs. Generals",
    brief: "Iranian diplomats hint at access through Hormuz.\nThe IRGC overrides them within hours and keeps control."
  },
  {
    day: 31,
    theme: "Day 31 — IRGC Takes Control",
    brief: "The IRGC places Hormuz under direct military control.\nIran's civilian leadership is pushed further to the margins."
  },
  {
    day: 32,
    theme: "Day 32 — Rhetoric at Its Peak",
    brief: "Trump escalates public threats to their sharpest point.\nInside Iran, few expect outside words to change the war."
  },
  {
    day: 33,
    theme: "Day 33 — Paper Ceasefire",
    brief: "A ceasefire is announced but military posture barely shifts.\nIn Tehran and Washington, few treat the pause as durable."
  },
  {
    day: 34,
    theme: "Day 34 — Ceasefire Already Breaking",
    brief: "Strikes continue despite the declared pause in fighting.\nThe ceasefire reads as paperwork more than reality."
  },
  {
    day: 35,
    theme: "Day 35 — Oil Crashes",
    brief: "Oil prices plunge on hopes the fighting may slow.\nTehran exhales briefly, but Lebanon keeps burning."
  },
  {
    day: 36,
    theme: "Day 36 — Talks That Go Nowhere",
    brief: "Envoys meet, but neither side changes core demands.\nThe White House talks while the war's machinery stays active."
  },
  {
    day: 37,
    theme: "Day 37 — Hormuz Flares Again",
    brief: "The IRGC fires on a tanker cleared to pass Hormuz.\nIndia protests as the ceasefire corridor collapses."
  },
  {
    day: 38,
    theme: "Day 38 — Talks Collapse",
    brief: "Trump cancels the U.S. trip as backchannel talks fade.\nIran sees little sign Washington ever meant to stop."
  },
  {
    day: 39,
    theme: "Day 39 — Naval Standoff",
    brief: "U.S. jets disable Iranian tankers near the blockade.\nOil prices jump as markets brace for a harder phase."
  },
  {
    day: 40,
    theme: "Day 40 — IRGC Holds the Cards",
    brief: "The IRGC's political power rises with wartime nationalism.\nTehran's civilian camp looks sidelined and increasingly silent."
  },
  {
    day: 41,
    theme: "Day 41 — UAE War Exposed",
    brief: "Reports link UAE covert strikes to attacks inside Iran.\nAnother undeclared front adds pressure and public uncertainty."
  },
  {
    day: 42,
    theme: "Day 42 — Evin Tightens",
    brief: "Iran cracks down harder inside Evin Prison.\nWomen detainees face solitary threats as the outside war drags on."
  },
  {
    day: 43,
    theme: "Day 43 — Fabricated Goodwill",
    brief: "Trump claims executions were halted as a goodwill step.\nIran denies it, underscoring the gap between narratives."
  },
  {
    day: 44,
    theme: "Day 44 — New Hormuz Fees",
    brief: "Iran announces steep transit fees for passing Hormuz.\nShipping firms face a corridor shaped by force and risk."
  },
  {
    day: 45,
    theme: "Day 45 — Mosquito Fleet Masses",
    brief: "IRGC fast boats mass near U.S. destroyers in the strait.\nA direct clash is avoided, but only narrowly."
  },
  {
    day: 46,
    theme: "Day 46 — Arsenal Rebuilt",
    brief: "Iran signals missile production continued through the pause.\nWashington's earlier claims of total destruction look overstated."
  },
  {
    day: 47,
    theme: "Day 47 — Basij Pleads for Loyalty",
    brief: "A public appeal urges Basij forces not to desert.\nInside Iran, the message lands as a sign of fragility."
  },
  {
    day: 48,
    theme: "Day 48 — Three Clocks",
    brief: "Trump's politics, Iran's economy, and IRGC power diverge.\nNone of the three timelines point cleanly toward peace."
  },
  {
    day: 49,
    theme: "Day 49 — Lebanon's Toll",
    brief: "Israeli strikes kill hundreds in Lebanon in one day.\nIran points to Lebanon as proof the war has widened."
  },
  {
    day: 50,
    theme: "Day 50 — Two Months of War",
    brief: "Two months in, Tehran lives with blackout and decline.\nMany want peace, but the IRGC now sets the terms."
  },
  {
    day: 51,
    theme: "Day 51 — Mojtaba Goes Silent",
    brief: "Mojtaba disappears from public view for several days.\nState media fills the gap with IRGC drills and resolve."
  },
  {
    day: 52,
    theme: "Day 52 — White House Recalibrates",
    brief: "Washington softens its talk of rapid regime collapse.\nThe war looks longer and less decisive than first promised."
  },
  {
    day: 53,
    theme: "Day 53 — Resistance Holds",
    brief: "Messages from Evin show prisoner resistance still alive.\nOutside prison walls, scattered anti-regime action continues."
  },
  {
    day: 54,
    theme: "Day 54 — Oman Backchannel",
    brief: "Indirect contact resumes through Omani mediators.\nBut sanctions, blockades, and missiles still define the real terms."
  },
  {
    day: 55,
    theme: "Day 55 — IRGC Obstacle",
    brief: "Iranian officials quietly explore ways to preserve the state.\nThe IRGC remains the main barrier to any compromise."
  },
  {
    day: 56,
    theme: "Day 56 — Hormuz Rules Firm",
    brief: "Iran reaffirms transit rules and fires warning shots.\nGlobal markets read Hormuz as a militarized toll corridor."
  },
  {
    day: 57,
    theme: "Day 57 — War Becomes Permanent",
    brief: "The war settles into blockade, strikes, and attrition.\nNeither Tehran nor Washington finds a clear way out."
  },
  {
    day: 58,
    theme: "Day 58 — Evin Stirs",
    brief: "Notes from Evin mark two months of war and repression.\nGuards answer with a tighter blackout inside the prison."
  },
  {
    day: 59,
    theme: "Day 59 — Signals in the Dark",
    brief: "Leaked messages suggest officials draft surrender language.\nThe harder question is whether the IRGC would allow it."
  },
  {
    day: 60,
    theme: "Day 60 — Surrender or Stand",
    brief: "At sixty days, blockade and sporadic strikes still hold.\nIran's officials draft options; the IRGC decides what survives."
  }
];