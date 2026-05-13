// ────────────────────────────────────────────────────────────────────────────
// DAILY BRIEFINGS - Theme and narrative per day
// ────────────────────────────────────────────────────────────────────────────
const DAILY_BRIEFINGS = [
  {
    day: 1,
    theme: "Day 1 — The First Wave",
    brief: "U.S. and Israeli forces launch Operation Epic Fury at dawn; Supreme Leader Ali Khamenei is killed in strikes on his Tehran compound alongside dozens of senior officials. Iran's state media confirms his death and declares 40 days of national mourning."
  },
  {
    day: 2,
    theme: "Day 2 — Retaliation Across the Gulf",
    brief: "Iran fires roughly 170 ballistic missiles at Israel and four U.S. bases across the Gulf; a drone kills a U.S. soldier in Kuwait, the first American combat death of the war. Trump declares the strikes will continue 'throughout the week and beyond,' while Tehran's streets fill with both mourners and pro-government marchers."
  },
  {
    day: 3,
    theme: "Day 3 — Natanz Confirmed, Hezbollah Moves",
    brief: "Satellite imagery confirms damage to Natanz's entrance buildings, though the IAEA finds no radiological consequence; Hezbollah declares war on Israel after Khamenei's killing. Iran's top security official Ali Larijani announces a temporary leadership council to fill the power vacuum in Tehran."
  },
  {
    day: 4,
    theme: "Day 4 — Nine Nations at War",
    brief: "The conflict expands to nine countries as Israel invades southern Lebanon and Iranian strikes reach Cyprus, Saudi Arabia, and Iraqi Kurdistan; Iran bans food exports and announces IRGC checkpoints in cities nationwide. Mojtaba Khamenei, Ali's son, is reported to have survived the opening strike."
  },
  {
    day: 5,
    theme: "Day 5 — Stadiums and Schools",
    brief: "U.S. and Israeli strikes destroy Tehran's Azadi Indoor Stadium, cited as a military staging site, alongside a girls' elementary school in Khomein; Iran targets an oil tanker in the Persian Gulf and fires drones into Azerbaijani airspace, opening a new diplomatic crisis. Casualty counts inside Iran climb past 1,000."
  },
  {
    day: 6,
    theme: "Day 6 — Oil Fires at Midnight",
    brief: "Israeli jets hit Iranian oil facilities for the first time overnight, releasing dark smoke visible from space and raising alarms over fuel and water contamination; Qatar declares force majeure on LNG exports after Iranian drone strikes damage its gas facilities. Both sides announce they are targeting the other's energy lifelines."
  },
  {
    day: 7,
    theme: "Day 7 — Internet Cut, Streets Tense",
    brief: "Iran's internet goes dark nationwide, repeating the blackout tactic used during the June 2025 war; strike tallies reach over 485 attacks across 30 provinces in a single day. Ordinary Iranians describe overwhelming fear, with teachers and students in Tehran reporting trauma at every passing aircraft sound."
  },
  {
    day: 8,
    theme: "Day 8 — Naval Clash in the Gulf",
    brief: "The U.S. Navy sinks multiple Iranian warships, including the frigate IRIS Dena off Sri Lanka and the submarine IRIS Fateh — the first submarine sunk in combat since the Falklands War. Iran claims to have destroyed ten commercial vessels attempting the Strait of Hormuz, effectively choking the waterway."
  },
  {
    day: 9,
    theme: "Day 9 — New Supreme Leader Named",
    brief: "Iran's Assembly of Experts, meeting under wartime conditions, selects Mojtaba Khamenei as the third Supreme Leader of the Islamic Republic, with over 30 percent of the Assembly boycotting the vote. Trump publicly calls the choice 'unacceptable' and says Mojtaba 'won't last long' without U.S. approval."
  },
  {
    day: 10,
    theme: "Day 10 — Fractures in the Ranks",
    brief: "Reports emerge of mass desertions within Iran's regular army, with soldiers abandoning bases and fleeing to border regions with their families; the IRGC refuses to transport wounded Artesh soldiers, deepening a dangerous rift between the two forces. Reserve mobilization attempts go largely unanswered."
  },
  {
    day: 11,
    theme: "Day 11 — Proxies at the Gate",
    brief: "IRGC units in western Iran are confirmed to be using Iraqi Popular Mobilization Forces to maintain order in restive Kurdish cities, signaling that domestic conscripts alone cannot hold the streets. Meanwhile Israel targets 'regime infrastructure' in a fresh wave timed to Mojtaba's confirmation."
  },
  {
    day: 12,
    theme: "Day 12 — Resistance in the Streets",
    brief: "Iranian resistance units carry out coordinated operations in major cities during Nowruz preparations; a Carnegie Endowment analysis notes the protest movement that killed tens of thousands in January is not gone but dormant, waiting for the bombardment to ease. The White House frames the war as a liberation campaign."
  },
  {
    day: 13,
    theme: "Day 13 — Hormuz Under Siege",
    brief: "150 commercial vessels stall behind the Strait of Hormuz as insurance markets price in near-certain conflict; Iran warns that 'no vessel should move without coordination' with IRGC naval forces. Trump threatens to 'permanently open' the strait by force if Iran does not comply."
  },
  {
    day: 14,
    theme: "Day 14 — Two Weeks of Fire",
    brief: "At the two-week mark, CENTCOM reports over 8,000 sorties flown and more than 7,800 targets struck, with an estimated 70 percent of Iran's missile launchers destroyed. Inside Iran, Tehran is described by residents as a city half-emptied, its northern neighborhoods still pulsing with fear under round-the-clock alerts."
  },
  {
    day: 15,
    theme: "Day 15 — Russia Confirmed In",
    brief: "Ukraine's President Zelensky confirms Iran is deploying drones fitted with Russian components; CENTCOM strikes a supply route along the Caspian Sea. The White House requests Ukrainian assistance targeting Iranian drone technology, and Trump accepts the offer — a striking reversal of his earlier posture toward Kyiv."
  },
  {
    day: 16,
    theme: "Day 16 — Houthis Enter the War",
    brief: "Houthi forces fire 18 missiles and a drone at USS Truman in the Red Sea, all intercepted; they announce a ban on U.S. vessels from the Red Sea, Arabian Sea, and Gulf of Aden. The war's maritime footprint now spans two chokepoints — Hormuz and Bab el-Mandeb — controlling roughly 35 percent of global seaborne trade."
  },
  {
    day: 17,
    theme: "Day 17 — Evin and the Prisoners",
    brief: "Human rights organizations raise urgent alarm over tens of thousands of protest detainees jailed since January, many held in Evin Prison without charges as strikes hit central Tehran; authorities begin threatening political prisoners with execution under revived 'espionage' statutes. The outside world has almost no visibility inside."
  },
  {
    day: 18,
    theme: "Day 18 — Desertions Spreading",
    brief: "Iran International reports that IRGC missile unit crews are operating without adequate food, water, or ammunition, and that some have abandoned their posts; field commanders are calling command centers in Tehran only to find them destroyed or unresponsive. The institutional coherence of Iran's military is visibly fraying."
  },
  {
    day: 19,
    theme: "Day 19 — Civilian Toll Mounts",
    brief: "The Iranian Red Crescent's cumulative death count passes 2,000 civilians; a new IAEA inspection scheduled for a covert Isfahan facility is canceled after the site appears in satellite imagery. Iranians in Tehran describe buying whatever food remains on shelves, uncertain whether supply lines will hold another week."
  },
  {
    day: 20,
    theme: "Day 20 — Ceasefire Signals",
    brief: "Pakistan opens a backchannel between Washington and Tehran, with Pakistani officials meeting separately with Araghchi and White House envoys; Trump says publicly he is 'open to a deal' if Hormuz is reopened. Inside Iran, state media runs footage of Mojtaba Khamenei reviewing troops in an undisclosed location."
  },
  {
    day: 21,
    theme: "Day 21 — Largest Strike Package Yet",
    brief: "CENTCOM executes what commanders call 'the largest strike package of the war,' using 5,000-lb deep-penetrating munitions on underground coastal defense sites; Iran responds with a barrage of eight ballistic missiles reaching central Israel in a single night, two killing civilians in Ramat Gan. The war shows no sign of exhaustion on either side."
  },
  {
    day: 22,
    theme: "Day 22 — Nuclear Site Revealed",
    brief: "The IAEA discloses a previously unknown underground nuclear facility near Isfahan, with a scheduled inspection canceled by Iranian authorities; the White House issues a statement saying the discovery 'changes the calculus' of any potential deal. Tehran denies operational activity at the site."
  },
  {
    day: 23,
    theme: "Day 23 — Resistance Units Strike",
    brief: "PMOI resistance units execute 15 coordinated operations across Tehran, Isfahan, and Ahvaz during the Nowruz fire festival, targeting regime infrastructure and Basij posts; an IRGC commander publicly pleads with forces to hold the streets, admitting 'the enemy fears your presence more than missiles.' The streets of Tehran are contested ground."
  },
  {
    day: 24,
    theme: "Day 24 — The Patrol State",
    brief: "IRGC checkpoints are now reported in every major Iranian city, with Afghan militias and Iraqi PMF units filling gaps left by desertions in poorer neighborhoods; a senior IRGC adviser privately acknowledges 'suspicious faces' and organized resistance teams circulating throughout Tehran. Morale among street-level Basij forces is described as historically low."
  },
  {
    day: 25,
    theme: "Day 25 — Energy War Deepens",
    brief: "Strikes on Iran's oil infrastructure cut output to near zero; inside the White House, Trump frames continued bombing as leverage for Hormuz negotiations while advisers debate how long the Iranian government can function without oil revenue. Iran's rial, already in freefall since December, loses another 30 percent of its value in a week."
  },
  {
    day: 26,
    theme: "Day 26 — Gulf Ceasefire Talk",
    brief: "Gulf states quietly signal to Washington that they want the fighting to end before their own infrastructure is further degraded; Qatar has lost LNG export capacity and Saudi Arabia has seen a refinery damaged. Trump threatens a broader bombing campaign but privately acknowledges the Gulf partners' limits."
  },
  {
    day: 27,
    theme: "Day 27 — Hormuz Ultimatum",
    brief: "Trump posts a stark warning that 'a whole civilization will die' if Iran does not reopen the Strait of Hormuz; the IRGC fires on an Indian tanker attempting to cross under what Tehran had described as a permitted corridor, drawing India into the crisis and prompting New Delhi to summon Iran's ambassador. The strait is closed in all but name."
  },
  {
    day: 28,
    theme: "Day 28 — Four Weeks In",
    brief: "At one month of war, more than 5,000 people across nearly a dozen countries have been killed; inside Iran, the electricity grid is intermittent across provinces, with water desalination plants on Qeshm Island struck and 30 villages losing access to clean water. Tehran's population endures the rhythm of sirens, darkness, and scarce bread."
  },
  {
    day: 29,
    theme: "Day 29 — Dubai and Doha Burning",
    brief: "A resumed Iranian missile barrage targets Gulf city centers, with fires visible at Dubai's port district and residential buildings in Doha hit; the UAE confirms it has destroyed 148 Iranian drones in the conflict's first month. The world's busiest oil trading hub is operating on emergency protocols."
  },
  {
    day: 30,
    theme: "Day 30 — Pakistan Mediates",
    brief: "Pakistani Prime Minister Shehbaz Sharif publicly appeals for a ceasefire and offers Islamabad as neutral ground; Iran's Foreign Minister Araghchi tweets that Hormuz could be opened 'in a corridor coordinated by Iran,' generating a brief flash of optimism in Asian markets before the IRGC contradicts him hours later. The split between Iran's diplomats and its military is now plainly visible."
  },
  {
    day: 31,
    theme: "Day 31 — IRGC Overrides Diplomats",
    brief: "The IRGC formally reverses Araghchi's Hormuz announcement, firing on vessels that attempt to cross and declaring the strait under 'strict military control'; an intercepted IRGC radio transmission tells a ship captain that the waterway will only open 'by the command of the Supreme Leader' — a phrase that baffles observers given Khamenei is dead. The Washington-based ISW concludes the IRGC is now running Iranian foreign policy."
  },
  {
    day: 32,
    theme: "Day 32 — Trump Threatens Civilization",
    brief: "Trump raises the rhetorical stakes to their highest point, warning that 'a whole civilization will die tonight, never to be brought back again' if Iran does not agree to ceasefire terms; the White House simultaneously signals it is willing to accept Iran's 10-point framework as 'a workable basis' for talks. The gap between Trump's public threats and private diplomacy is at its widest."
  },
  {
    day: 33,
    theme: "Day 33 — Ceasefire Framework",
    brief: "Pakistan brokers an agreement framework exchanged between Araghchi and U.S. envoys in Islamabad back-channels; Iran's Supreme National Security Council votes internally on whether to accept a two-week pause. In Tehran, residents describe cautious, disbelieving hope — the first in over a month."
  },
  {
    day: 34,
    theme: "Day 34 — Strikes On Lavan Island",
    brief: "Even as ceasefire language circulates, strikes hit oil facilities on Lavan and Siri islands off southern Iran, with reports of UAE aircraft involvement in a covert operation; Iran fires thousands of missiles and drones at UAE cities in response. The ceasefire is simultaneously being drafted and broken."
  },
  {
    day: 35,
    theme: "Day 35 — The Fragile Pause",
    brief: "After nearly 40 days of war and more than 5,000 deaths, the U.S. and Iran announce a two-week ceasefire brokered by Pakistan; Trump declares it 'total and complete victory,' while Iran's National Security Council calls it a 'historic defeat' for the U.S. and presents its own 10-point terms. Both sides keep air defenses active as the first hours of nominal quiet settle over Tehran."
  },
  {
    day: 36,
    theme: "Day 36 — Oil Crashes, Streets Exhale",
    brief: "Oil prices fall 16 percent — the largest single-day drop since the Gulf War of 1991 — as markets process the ceasefire announcement; in Tehran, people cautiously return to cafes and parks for the first time in over a month, though many remain doubtful the pause will hold. Israel immediately states the ceasefire does not apply to Lebanon and resumes strikes on Beirut."
  },
  {
    day: 37,
    theme: "Day 37 — Islamabad Talks Begin",
    brief: "Vice President Vance leads the U.S. delegation to Islamabad for the first direct ceasefire-extension negotiations; Iran's Araghchi arrives but states publicly that Tehran has 'yet to see whether the U.S. is truly serious about diplomacy.' The underlying core demands — sanctions removal, U.S. troop withdrawal, and full Hormuz reopening — remain unresolved."
  },
  {
    day: 38,
    theme: "Day 38 — Hormuz Flares Again",
    brief: "The IRGC reverses Iran's announced reopening of the strait, firing on ships and declaring the waterway closed until the U.S. naval blockade is lifted; an Indian tanker captain is heard on maritime radio desperately pleading with IRGC forces to stop shooting, having been given permission to cross. India summons Iran's ambassador in a sign the crisis is widening to new partners."
  },
  {
    day: 39,
    theme: "Day 39 — Ceasefire Expires",
    brief: "The two-week ceasefire formally expires with no successor agreement in place; Trump calls off Steve Witkoff and Jared Kushner's planned trip to Islamabad, saying he will not 'sit around talking about nothing.' Iran's IRGC announces the war's resumption is possible at any moment, while Araghchi flies to Oman to consult with mediators."
  },
  {
    day: 40,
    theme: "Day 40 — Blockade and Tankers",
    brief: "U.S. Navy F/A-18s disable two Iranian-flagged tankers attempting to breach the U.S. naval blockade, firing into their smokestacks; thick black smoke rises from stalled vessels in the Gulf of Oman. Inside Iran, state television airs footage of the blockade as evidence of American aggression, with Mojtaba Khamenei calling for national resistance."
  },
  {
    day: 41,
    theme: "Day 41 — IRGC Holds the Cards",
    brief: "A source familiar with mediation efforts tells reporters that Iran's military leadership has more power to accept or reject any deal than its president or foreign minister; the IRGC's standing has never been higher domestically, buoyed by nationalist sentiment generated by the war. Pro-deal factions within Tehran's government are described as isolated and fearful."
  },
  {
    day: 42,
    theme: "Day 42 — Regional Ripples",
    brief: "Reports surface that the UAE conducted covert strikes on Iranian targets in early April, including an oil refinery on Lavan Island; Iran responds with drone and missile salvos at UAE cities, opening yet another front the ceasefire had not formally addressed. The war's geography is now larger than any formal agreement has covered."
  },
  {
    day: 43,
    theme: "Day 43 — Evin Pressure Mounts",
    brief: "Iran's regime intensifies pressure on political prisoners inside Evin Prison, banning participation in the 'No to Execution Tuesdays' campaign and threatening women detainees with solitary confinement; tens of thousands held since January's protests remain forcibly disappeared with no charges. Human rights groups warn of secret executions under cover of wartime."
  },
  {
    day: 44,
    theme: "Day 44 — Trump Claims Executions Halted",
    brief: "Trump announces that Iran has canceled plans to execute eight imprisoned women, calling it a sign of goodwill; Iran's judiciary flatly denies the claim, calling it fabricated. The exchange reveals how far apart the two sides remain on basic facts, let alone a durable agreement."
  },
  {
    day: 45,
    theme: "Day 45 — Collapse of Talks",
    brief: "Ceasefire extension talks collapse entirely as Araghchi leaves Islamabad to consult allies in Oman and Trump cancels the U.S. delegation's trip; Iran insists the U.S. must lift its naval blockade before substantive talks can resume. The Strait of Hormuz remains in a state of armed ambiguity, open in theory and contested in practice."
  },
  {
    day: 46,
    theme: "Day 46 — Swarm in the Strait",
    brief: "Satellite imagery and naval monitors detect over 100 IRGC fast-attack craft massing near three U.S. destroyers in the Strait of Hormuz; the Pentagon warns any vessel crossing a 'security line' will be engaged, while oil prices surge as insurance markets price in another closure. Both navies are at the edge of direct engagement."
  },
  {
    day: 47,
    theme: "Day 47 — IRGC Tests the Line",
    brief: "After U.S. strikes on Iranian port facilities on May 7th, the IRGC deploys its asymmetric 'mosquito fleet' in a direct show of force; Apache gunships and F/A-18s hold position overhead as the standoff lasts eight hours before the Iranian boats withdraw. Neither side formally declares hostilities resumed, but the ceasefire exists only on paper."
  },
  {
    day: 48,
    theme: "Day 48 — IRGC Grips Tehran",
    brief: "An internal power struggle between Iran's pro-deal political class and its IRGC military leadership is now openly acknowledged by regional sources; the IRGC's power, a source tells the New York Post, is 'at its highest point in history,' fortified by wartime nationalism. Iran's president and foreign minister are increasingly sidelined on strategic decisions."
  },
  {
    day: 49,
    theme: "Day 49 — UAE Covert War Exposed",
    brief: "The Wall Street Journal reports that the UAE conducted secret strikes inside Iran, including on a Lavan Island oil refinery in early April; this revelation reframes the ceasefire period as one in which multiple undeclared actors continued operating. Iran's missile response to the UAE has now drawn in a Gulf partner that had no formal role in the original conflict."
  },
  {
    day: 50,
    theme: "Day 50 — Civilians Count the Cost",
    brief: "Ordinary Iranians have now endured nearly two months of bombardment, blackouts, economic collapse, and an internet shutdown that has kept them cut off from the world; TIME's reporting from Tehran describes a population that wants peace and normalization but has no mechanism to demand it from a government controlled by a IRGC that benefits from war. The rial has lost over half its value since the war began."
  },
  {
    day: 51,
    theme: "Day 51 — New Hormuz Rules",
    brief: "Iran announces new transit rules for the Strait of Hormuz, requiring vessels to register with IRGC naval authorities and pay fees of up to $2 million per crossing; the U.S. calls the rules 'illegal extortion' and says it will not recognize them. Gulf shipping companies face an impossible choice between compliance and continued blockade."
  },
  {
    day: 52,
    theme: "Day 52 — White House Recalibrates",
    brief: "With no deal in sight and Gulf partners signaling fatigue, the White House quietly signals it is willing to accept a longer-term arrangement that falls short of its original regime-change framing; Al Jazeera's analysts describe Trump as having entered the war expecting collapse within days and instead finding himself in an attritional conflict on Iran's terms. The White House insists negotiations are continuing."
  },
  {
    day: 53,
    theme: "Day 53 — Missiles Built This Month",
    brief: "An IRGC commander tells Iranian state television that if war resumes, 'Iran will use missiles built just this month,' signaling that Iran has reconstituted a portion of its arsenal during the ceasefire period; U.S. intelligence separately estimates Iran has retained roughly 40 percent of its pre-war missile arsenal and 60 percent of its launchers. The White House had publicly claimed the arsenal was 'obliterated.'"
  },
  {
    day: 54,
    theme: "Day 54 — Defection Fear in Tehran",
    brief: "Ahmad Alamolhoda, the Supreme Leader's representative in Mashhad, makes a public plea to Basij forces urging them to remain in the streets, warning that abandoning posts means 'resigning from being a Hezbollahi'; the speech, broadcast on state media, is widely read inside Iran as a confession of how fragile the regime's street presence has become. Resistance units continue operations in four cities."
  },
  {
    day: 55,
    theme: "Day 55 — Oman Back-Channel",
    brief: "Araghchi travels to Muscat for renewed indirect talks with U.S. envoys through Omani mediators, the same format that produced the original April ceasefire; both sides acknowledge substantial gaps remain on sanctions, the naval blockade, and Iran's nuclear program. The war has lasted long enough that both governments are now managing domestic audiences exhausted by it."
  },
  {
    day: 56,
    theme: "Day 56 — Three Clocks Ticking",
    brief: "An Al Jazeera analysis notes that the war is being driven by three separate clocks: Trump's political calendar, Iran's economic collapse timeline, and the IRGC's consolidation of power — and none of them are synchronized toward peace. Inside Iran, pragmatists around Zarif quietly attempt to reopen channels with Europe, arguing that survival requires reintegration."
  },
  {
    day: 57,
    theme: "Day 57 — Lebanon's Toll",
    brief: "Continued Israeli strikes on Lebanon kill over 300 people in a single day, complicating any broader ceasefire that might also cover Tehran; Iran frames the Lebanon campaign as proof the U.S.-Israeli operation was never limited to nuclear disarmament. The White House declines to comment on the Israeli strikes."
  },
  {
    day: 58,
    theme: "Day 58 — Evin Stirs",
    brief: "Smuggled communications from Evin Prison describe a growing 'No to Execution Tuesdays' movement among political detainees; prison authorities respond by banning all protest, threatening transfer to solitary confinement, and cutting phone access to families. The resistance inside Iran's most notorious prison mirrors the broader struggle on its streets."
  },
  {
    day: 59,
    theme: "Day 59 — Regime Reads the Room",
    brief: "SIGINT intercepts and leaked Iranian government communications, reported by regional intelligence analysts, suggest senior officials are privately exploring what post-war arrangements would look like that preserve the Islamic Republic's structure while conceding on nuclear terms; the IRGC is described as the principal obstacle to any such framework. Mojtaba Khamenei has not made a public appearance in six days."
  },
  {
    day: 60,
    theme: "Day 60 — Surrender or Stand",
    brief: "At two months of war, Iran and the U.S. remain formally at an impasse: the naval blockade holds, Hormuz is contested, and Islamabad talks have produced no binding agreement; inside Evin Prison, political detainees passed notes through smuggled channels marking the sixtieth day of fighting. SIGINT reported by U.S. officials suggests elements of Iran's government are privately drafting language for a framework surrender, though the IRGC has given no indication it will accept one."
  }
];