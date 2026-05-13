// ────────────────────────────────────────────────────────────────────────────
// DAILY BRIEFINGS - Theme and narrative per day
// ────────────────────────────────────────────────────────────────────────────
const DAILY_BRIEFINGS = [
  {
    day: 1,
    theme: "Day 1 — The First Wave",
    brief: "U.S. and Israeli forces launch Operation Epic Fury; Supreme Leader Ali Khamenei is killed in strikes on his Tehran compound. Iran's state media confirms his death and declares 40 days of mourning."
  },
  {
    day: 2,
    theme: "Day 2 — Retaliation Across the Gulf",
    brief: "Iran fires roughly 170 ballistic missiles at Israel and U.S. bases; a drone kills a U.S. soldier in Kuwait — the first American combat death. Trump says the strikes will continue 'throughout the week and beyond.'"
  },
  {
    day: 3,
    theme: "Day 3 — Natanz Confirmed",
    brief: "Satellite imagery confirms damage to Natanz's enrichment hall; Hezbollah declares war on Israel. Iran's security council assembles a temporary leadership committee to fill Khamenei's vacuum."
  },
  {
    day: 4,
    theme: "Day 4 — Nine Fronts Open",
    brief: "The conflict spreads to nine countries as Israel invades southern Lebanon and Iranian strikes reach Cyprus and Saudi Arabia. IRGC checkpoints appear in Iranian cities as food exports are banned."
  },
  {
    day: 5,
    theme: "Day 5 — Stadiums and Schools",
    brief: "U.S. strikes destroy a Tehran sports stadium cited as a staging site, alongside a school in Khomein; casualty counts inside Iran pass 1,000. Iran fires on an oil tanker in the Persian Gulf."
  },
  {
    day: 6,
    theme: "Day 6 — Oil Fires at Midnight",
    brief: "Israeli jets hit Iranian oil facilities for the first time, releasing smoke visible from space. Qatar declares force majeure on LNG exports after its own gas infrastructure is struck."
  },
  {
    day: 7,
    theme: "Day 7 — Internet Cut",
    brief: "Iran cuts internet access nationwide as over 485 strikes hit 30 provinces in a single day. Tehran residents describe trauma at every passing aircraft sound."
  },
  {
    day: 8,
    theme: "Day 8 — Naval War Begins",
    brief: "The U.S. Navy sinks Iranian frigates and a submarine — the first submarine sunk in combat since the Falklands. Iran claims ten commercial vessels destroyed in the Strait, effectively closing it."
  },
  {
    day: 9,
    theme: "Day 9 — New Supreme Leader",
    brief: "Iran's Assembly of Experts selects Mojtaba Khamenei as Supreme Leader, with over 30 percent of the Assembly boycotting. Trump calls the choice 'unacceptable.'"
  },
  {
    day: 10,
    theme: "Day 10 — Army Fractures",
    brief: "Mass desertions spread through Iran's regular army; soldiers abandon bases and flee to the border with their families. The IRGC refuses to transport wounded Artesh soldiers, splitting the two forces openly."
  },
  {
    day: 11,
    theme: "Day 11 — Proxies Fill the Gap",
    brief: "Iraqi PMF units are now holding Iranian cities where domestic conscripts deserted; the IRGC cannot rely on its own reserves to police the streets. Israel opens a new strike wave timed to Mojtaba's confirmation."
  },
  {
    day: 12,
    theme: "Day 12 — Resistance in the Streets",
    brief: "Resistance units carry out coordinated operations in major cities as Nowruz approaches; protest sentiment suppressed since January is visibly stirring. The White House frames the war publicly as a liberation campaign."
  },
  {
    day: 13,
    theme: "Day 13 — Hormuz Under Siege",
    brief: "150 commercial vessels stall behind the Strait as Iran warns no ship moves without IRGC coordination. Trump threatens to 'permanently open' the waterway by force."
  },
  {
    day: 14,
    theme: "Day 14 — Two Weeks of Fire",
    brief: "CENTCOM reports over 8,000 sorties and 7,800 targets struck, with 70 percent of Iran's missile launchers assessed destroyed. Tehran is described by residents as half-emptied, living under round-the-clock alerts."
  },
  {
    day: 15,
    theme: "Day 15 — Russia Confirmed In",
    brief: "Ukraine confirms Iran's drones carry Russian components; Trump accepts Zelensky's offer of technical assistance targeting Iranian drone networks — a notable reversal of his posture toward Kyiv. CENTCOM strikes a supply route along the Caspian."
  },
  {
    day: 16,
    theme: "Day 16 — Houthis Enter",
    brief: "Houthi forces fire 18 missiles at USS Truman and ban U.S. vessels from the Red Sea, Arabian Sea, and Gulf of Aden. Two chokepoints — Hormuz and Bab el-Mandeb — now cover roughly 35 percent of global seaborne trade."
  },
  {
    day: 17,
    theme: "Day 17 — Evin Darkens",
    brief: "Tens of thousands of protest detainees jailed since January sit in Evin and other prisons as strikes hit central Tehran; authorities revive 'espionage' statutes and threaten executions. The outside world has almost no visibility inside."
  },
  {
    day: 18,
    theme: "Day 18 — Desertions Spread",
    brief: "IRGC missile crews are reported operating without food, water, or ammunition, with some abandoning posts; field commanders call command centers in Tehran only to find them destroyed or unreachable. Iran's military coherence is visibly collapsing."
  },
  {
    day: 19,
    theme: "Day 19 — Civilian Toll",
    brief: "The Iranian Red Crescent's civilian death count passes 2,000; Iranians in Tehran strip shelves bare, uncertain whether supply chains will hold another week. An IAEA inspection of a covert Isfahan facility is canceled after satellite imagery shows the site."
  },
  {
    day: 20,
    theme: "Day 20 — Mojtaba on Camera",
    brief: "State media airs footage of Mojtaba Khamenei reviewing troops at an undisclosed location, his first significant appearance since the Assembly vote. The broadcast is read inside Iran as an attempt to signal regime stability to a skeptical public."
  },
  {
    day: 21,
    theme: "Day 21 — Largest Strike Yet",
    brief: "CENTCOM executes what commanders call the war's largest strike package, hitting underground coastal defense sites with 5,000-lb bunker-busters. Iran responds with eight ballistic missiles into central Israel in a single night, two killing civilians in Ramat Gan."
  },
  {
    day: 22,
    theme: "Day 22 — Secret Site Revealed",
    brief: "The IAEA discloses a previously unknown underground nuclear facility near Isfahan; Iran cancels the scheduled inspection and denies operational activity. The White House says the discovery 'changes the calculus' of any potential framework."
  },
  {
    day: 23,
    theme: "Day 23 — Nowruz in the Crossfire",
    brief: "Resistance units execute 15 coordinated operations across Tehran, Isfahan, and Ahvaz during the Nowruz fire festival. An IRGC commander publicly begs forces to hold the streets, admitting 'the enemy fears your presence more than missiles.'"
  },
  {
    day: 24,
    theme: "Day 24 — The Patrol State",
    brief: "Afghan militias and Iraqi PMF units now hold some Tehran neighborhoods where IRGC conscripts deserted; a senior IRGC adviser privately reports 'suspicious faces' and organized teams circulating through the capital. Basij morale is described as historically low."
  },
  {
    day: 25,
    theme: "Day 25 — Oil Output Zero",
    brief: "Strikes cut Iran's oil output to near zero; the rial loses another 30 percent of its value in a single week. Iran's government cannot pay salaries in three provinces."
  },
  {
    day: 26,
    theme: "Day 26 — Gulf Partners Waver",
    brief: "Qatar has lost major LNG capacity and Saudi Arabia has seen a refinery damaged; Gulf states quietly signal to Washington they need the fighting to stop. Trump acknowledges privately that his Gulf partners have limits."
  },
  {
    day: 27,
    theme: "Day 27 — Civilization Warning",
    brief: "Trump posts that 'a whole civilization will die tonight, never to be brought back again' if Hormuz is not reopened; the IRGC fires on an Indian tanker that had been given permission to cross. India summons Iran's ambassador."
  },
  {
    day: 28,
    theme: "Day 28 — One Month In",
    brief: "At one month, over 5,000 people across a dozen countries have been killed; water desalination plants on Qeshm Island are struck, cutting clean water to 30 villages. Tehran endures the rhythm of sirens, darkness, and scarce bread."
  },
  {
    day: 29,
    theme: "Day 29 — Gulf Cities Hit",
    brief: "Iranian missile barrages target Dubai's port district and residential buildings in Doha; the UAE confirms it has destroyed 148 Iranian drones in the war's first month. The world's busiest oil trading hub is on emergency protocols."
  },
  {
    day: 30,
    theme: "Day 30 — Diplomats vs. Generals",
    brief: "Iran's Foreign Minister Araghchi signals Hormuz could open through a 'coordinated corridor'; the IRGC contradicts him within hours and fires on another vessel. The split between Iran's diplomats and its military command is now impossible to conceal."
  },
  {
    day: 31,
    theme: "Day 31 — IRGC Takes Control",
    brief: "The IRGC formally reverses Araghchi's Hormuz statement and declares the strait under 'strict military control'; ISW concludes the IRGC is now running Iranian foreign policy. Iran's president and foreign minister are effectively sidelined."
  },
  {
    day: 32,
    theme: "Day 32 — Rhetoric at Its Peak",
    brief: "Trump raises his public threats to their most extreme — 'a whole civilization will die' — while advisers attempt quiet back-channel contact through Oman. The gap between Trump's public posture and his actual diplomatic position is at its widest."
  },
  {
    day: 33,
    theme: "Day 33 — Paper Ceasefire",
    brief: "A nominal two-week ceasefire is announced after Pakistani mediation; Trump calls it 'total and complete victory,' and Iran's National Security Council calls it a 'historic defeat' for the U.S. Neither side stands down air defenses."
  },
  {
    day: 34,
    theme: "Day 34 — Ceasefire Already Breaking",
    brief: "Strikes continue hitting Lavan and Siri island oil facilities even as the ceasefire is officially in effect; Iran fires missiles at UAE cities in response. The pause exists on paper and nowhere else."
  },
  {
    day: 35,
    theme: "Day 35 — Oil Crashes",
    brief: "Oil prices fall 16 percent — the largest single-day drop since 1991 — on ceasefire news; Tehran residents cautiously return to cafes for the first time in five weeks. Israel immediately states the ceasefire does not apply to Lebanon and resumes strikes on Beirut."
  },
  {
    day: 36,
    theme: "Day 36 — Talks That Go Nowhere",
    brief: "U.S. and Iranian envoys meet in Islamabad but exchange no binding commitments; Araghchi says Iran has 'yet to see whether the U.S. is truly serious.' Core demands on sanctions, the naval blockade, and the nuclear program remain entirely unresolved."
  },
  {
    day: 37,
    theme: "Day 37 — Hormuz Flares Again",
    brief: "The IRGC fires on a tanker that carried explicit permission to cross, and India summons Iran's ambassador after an Indian crew is targeted. The ceasefire corridor is a fiction."
  },
  {
    day: 38,
    theme: "Day 38 — Talks Collapse",
    brief: "Trump cancels the U.S. delegation's Islamabad trip; Araghchi flies to Oman to consult with mediators who have nothing new to offer. The two-week ceasefire expires with no successor agreement."
  },
  {
    day: 39,
    theme: "Day 39 — Naval Standoff",
    brief: "U.S. Navy jets disable two Iranian tankers attempting to breach the blockade, firing into their smokestacks. Oil prices surge again as markets price in a return to full hostilities."
  },
  {
    day: 40,
    theme: "Day 40 — IRGC Holds the Cards",
    brief: "Regional sources describe the IRGC's domestic power as 'the highest in its history,' fortified by wartime nationalism; pro-deal factions inside Tehran's government are isolated and fearful. Iran's president and foreign minister make no major public statements."
  },
  {
    day: 41,
    theme: "Day 41 — UAE War Exposed",
    brief: "The Wall Street Journal reports the UAE conducted covert strikes on Iran's Lavan Island refinery in early April; Iran fires missile salvos at UAE cities in response, opening a front the original ceasefire never covered."
  },
  {
    day: 42,
    theme: "Day 42 — Evin Tightens",
    brief: "Iran bans the 'No to Execution Tuesdays' campaign inside Evin Prison and threatens women detainees with solitary confinement; tens of thousands held since January remain charged with nothing. Human rights groups warn of secret executions under cover of wartime."
  },
  {
    day: 43,
    theme: "Day 43 — Fabricated Goodwill",
    brief: "Trump claims Iran canceled the execution of eight imprisoned women as a goodwill gesture; Iran's judiciary flatly denies it ever happened. The exchange illustrates how little shared reality exists between the two governments."
  },
  {
    day: 44,
    theme: "Day 44 — New Hormuz Fees",
    brief: "Iran announces IRGC transit fees of up to $2 million per vessel to cross the Strait of Hormuz; the U.S. calls it illegal extortion and refuses to recognize the rules. Shipping companies face an impossible choice."
  },
  {
    day: 45,
    theme: "Day 45 — Mosquito Fleet Masses",
    brief: "Over 100 IRGC fast-attack craft mass near three U.S. destroyers in the strait; Apache gunships and F/A-18s hold position for eight hours before Iranian boats withdraw. Neither side formally declares hostilities resumed."
  },
  {
    day: 46,
    theme: "Day 46 — Arsenal Rebuilt",
    brief: "An IRGC commander tells state television that Iran has 'missiles built just this month'; U.S. intelligence separately estimates Iran has reconstituted 40 percent of its pre-war missile arsenal during the nominal ceasefire period. The White House had publicly claimed the arsenal was 'obliterated.'"
  },
  {
    day: 47,
    theme: "Day 47 — Basij Pleads for Loyalty",
    brief: "Mashhad's supreme leader representative makes a public broadcast urging Basij forces not to abandon their posts, warning that doing so means 'resigning from being a Hezbollahi.' The speech is widely read inside Iran as a confession of how fragile the regime's street presence has become."
  },
  {
    day: 48,
    theme: "Day 48 — Three Clocks",
    brief: "Trump's political calendar, Iran's economic collapse, and the IRGC's consolidation of power are each moving on their own timeline — none synchronized toward peace. Pragmatists around Zarif quietly attempt to reopen channels with Europe, arguing survival requires reintegration."
  },
  {
    day: 49,
    theme: "Day 49 — Lebanon's Toll",
    brief: "Israeli strikes on Lebanon kill over 300 in a single day; Iran frames it as proof the operation was never limited to nuclear disarmament. The White House declines to comment on the Israeli strikes."
  },
  {
    day: 50,
    theme: "Day 50 — Two Months of War",
    brief: "Tehran has now lived through two months of bombardment, blackouts, internet shutdown, and economic collapse; the rial has lost over half its value since February. Ordinary Iranians want peace and have no mechanism to demand it from a government the IRGC now controls."
  },
  {
    day: 51,
    theme: "Day 51 — Mojtaba Goes Silent",
    brief: "Mojtaba Khamenei has not made a public appearance in six days; state media fills the silence with footage of IRGC drills. Senior officials are quietly exploring what a post-war arrangement would look like that preserves the Islamic Republic's structure."
  },
  {
    day: 52,
    theme: "Day 52 — White House Recalibrates",
    brief: "The White House quietly signals willingness to accept an arrangement short of its original regime-change framing; Trump entered the war expecting collapse within days and is now in an attritional conflict on Iran's terms. The White House insists negotiations are continuing."
  },
  {
    day: 53,
    theme: "Day 53 — Resistance Holds",
    brief: "Smuggled communications from Evin Prison describe the 'No to Execution Tuesdays' movement still alive among detainees; resistance units continue operations in four cities outside Tehran. The resistance inside Iran's most notorious prison mirrors the broader struggle on its streets."
  },
  {
    day: 54,
    theme: "Day 54 — Oman Backchannel",
    brief: "Araghchi travels to Muscat for renewed indirect contacts through Omani mediators; both sides privately acknowledge substantial gaps on sanctions, the naval blockade, and the nuclear program. Both governments are now managing domestic audiences exhausted by a war that was supposed to end quickly."
  },
  {
    day: 55,
    theme: "Day 55 — IRGC Obstacle",
    brief: "Internal Iranian government communications, reported by regional intelligence analysts, suggest senior officials are privately exploring a deal that preserves the Islamic Republic's structure while conceding on nuclear terms; the IRGC is identified as the principal obstacle. It has given no indication it will accept one."
  },
  {
    day: 56,
    theme: "Day 56 — Hormuz Rules Firm",
    brief: "The IRGC reaffirms its transit fee rules for the Strait and fires warning shots at a Japanese tanker testing the corridor; the strait remains a contested toll road under military occupation. Global oil markets close the week sharply higher."
  },
  {
    day: 57,
    theme: "Day 57 — War Becomes Permanent",
    brief: "With no agreement and no collapse, the war has settled into a grinding standoff: Iran battered but functional, Hormuz half-open, the IRGC ascendant, and Washington holding a blockade it cannot translate into a deal. The day passes with strikes, counter-strikes, and no change in any fundamental position."
  },
  {
    day: 58,
    theme: "Day 58 — Evin Stirs",
    brief: "Notes passed between detainees inside Evin Prison mark the sixtieth day of war; guards respond with a full communications blackout for the prison wing. The resistance inside Evin and the resistance on Iran's streets have been running in parallel for two months."
  },
  {
    day: 59,
    theme: "Day 59 — Signals in the Dark",
    brief: "Leaked Iranian government communications suggest elements of the regime are privately drafting framework surrender language; the IRGC, whose institutional interests depend on the conflict continuing, has given no signal it will permit any such move."
  },
  {
    day: 60,
    theme: "Day 60 — Surrender or Stand",
    brief: "At sixty days, Iran and the U.S. remain at impasse: the naval blockade holds, Hormuz is contested, and no agreement has been reached. SIGINT confirms regime officials are drafting surrender language — whether the IRGC will allow them to use it is another question entirely."
  }
];