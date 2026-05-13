// ════════════════════════════════════════════════════════════════════════════
// FREE IRAN BRIEFING (CODEX) — Educational entries about the Iranian situation
// Structure: id, title{en,fa}, body{en,fa}, bullets[], img, label_data
// ════════════════════════════════════════════════════════════════════════════

const CODEX_DATA = [
  {
      "id": "c1-1979",
      "tag": "HIJACK",
      "title": {
          "en": "1979 — THE HIJACK",
          "fa": "۱۳۵۷ — ربودن انقلاب"
      },
      "body": {
          "en": "The 1979 revolution toppled the Shah, our nation was hijacked by an brutal theocracy that has grown into a military dictatorship. The Iranian people have been resisting an occupying force from within ever since.",
          "fa": ""
      },
      "bullets": [
          "Original 1979 coalition: leftists, nationalists, liberals, clerics",
          "Khomeini consolidated by purging non-Islamist allies within 12 months",
          "Islamic Republic constitution ratified December 1979",
          "46 years of continuous internal resistance and external pressure"
      ],
      "img": "image/codex/codex_hijack.png",
      "label_data": "[ CODEX — 1979 HIJACK ]"
  },
  {
      "id": "c2-pahlavi",
      "tag": "TRANSITION",
      "title": {
          "en": "REZA PAHLAVI — 40 YEARS OF SOLITUDE",
          "fa": "رضا پهلوی — چهل سال تنهایی"
      },
      "body": {
          "en": "For four decades, the Crown Prince walked alone. Mocked by the regime. Ignored by Western politicians who preferred appeasing terrorists to supporting freedom. He carried the weight of an exiled crown without any guarantee his nation would call him back. Then, in January 2026, it did.",
          "fa": "چهل سال — شاهزاده در تنهایی محض راه رفت. رژیم مسخره‌اش کرد. غرب نادیده‌اش گرفت. اما او وزن تاجی در تبعید را بر دوش کشید — تا ژانویه ۲۰۲۵، وقتی ملت او را خواند."
      },
      "bullets": [
          "Living in exile since 1979",
          "He created the Iran Prosperity Project, a detailed plan to transition Iran to secular democracy.",
          "Pahlavi is a household name inside Iran and a unifying figure when no opposition can rise up under oppression.",
          "His support inside Iran was demonstrated by the January 2026 surge when millions of protesters moved on his explicit call to action."
      ],
      "img": "image/portrait/iranian_people/pahlavi.png",
      "label_data": "[ CODEX — REZA PAHLAVI ]"
  },
  {
      "id": "c3-lion-sun",
      "tag": "SYMBOL",
      "title": {
          "en": "THE LION & SUN",
          "fa": "شیر و خورشید"
      },
      "body": {
          "en": "Iran's flag before 1979. A lion holding a sword, a sun rising behind. Banned by the regime, criminalized inside Iran, but worn proudly by every protester from Tehran to Westwood. It predates the Islamic Republic by more than 800 years.",
          "fa": "پرچم ایران پیش از ۱۳۵۷. شیری که شمشیر دارد و خورشیدی که از پشتش طلوع می‌کند. ممنوع. جرم. اما با افتخار از تهران تا وست‌وود برافراشته می‌شود — و تاریخش از جمهوری اسلامی هشت قرن قدیمی‌تر است."
      },
      "bullets": [
          "Used as a Persian state emblem since the 12th century",
          "Banned by the Islamic Republic in 1980",
          "Carrying it inside Iran can be prosecuted as moharebeh",
          "Reza Pahlavi: post-regime flag is a question for the people's referendum"
      ],
      "img": "image/codex/codex_lion_sun.png",
      "label_data": "[ CODEX — LION & SUN FLAG ]"
  },
  {
      "id": "c4-mahsa",
      "tag": "SPARK",
      "title": {
          "en": "ZHINA \"MAHSA\" AMINI — 2022",
          "fa": "ژینا «مهسا» امینی — ۲۰۲۲"
      },
      "body": {
          "en": "A 22-year-old Iranian-Kurdish woman beaten to death by the morality police for showing too much hair. Her death set off the largest protest movement in the regime's 40-year history. The chant: Woman, Life, Freedom (Zan, Zendegi, Azadi).",
          "fa": "دختر ۲۲ ساله کرد که گشت ارشاد او را به‌خاطر چند تار مو کشت. مرگش بزرگ‌ترین جنبش اعتراضی ۴۰ سال اخیر را برپا کرد. شعار: زن، زندگی، آزادی."
      },
      "bullets": [
          "\"Zhina\" was her real (Kurdish) name; \"Mahsa\" was a regime-approved alias",
          "Arrested by the morality police (Gasht-e Ershad) in Tehran, Sept 13 2022",
          "Died in custody Sept 16 2022",
          "The 2022-23 protests reached every Iranian province and ~120 cities"
      ],
      "img": "image/portrait/dissident/portait_mahsa_v2.png",
      "label_data": "[ CODEX — MAHSA AMINI ]"
  },
  {
      "id": "c5-january-surge",
      "tag": "UPRISING",
      "title": {
          "en": "JANUARY 2026 — THE SURGE",
          "fa": "ژانویه ۲۰۲۵ — خروش"
      },
      "body": {
          "en": "48 hours of joy in early January. Millions flooded the streets after Reza Pahlavi's call. The chant \"Javid Shah\" — Long Live the King — filled neighborhoods. The fear evaporated. People looked to their left and right and saw a nation reborn.",
          "fa": "۴۸ ساعت شادی در ابتدای ژانویه. به دعوت رضا پهلوی، میلیون‌ها نفر به خیابان‌ها ریختند. شعار «جاوید شاه» محله‌ها را پر کرد. ترس بخار شد."
      },
      "bullets": [
          "Following the Prince's explicit January call to action",
          "Estimated millions of demonstrators in 48 hours",
          "\"Javid Shah\" chants in every city in Iran, from Tehran to Mashhad, Esfahan, Shiraz, and Tabriz",
          "The regime responded by firing live rounds into crowds and even hunting protestors in hospitals.",
          "More than 40,000 of mostly young people were killed."
      ],
      "img": "image/codex/codex_january_surge.png",
      "label_data": "[ CODEX — JANUARY SURGE ]"
  },
  {
      "id": "c6-massacre",
      "tag": "TRAGEDY",
      "title": {
          "en": "THE MASSACRE — 40,000 SOULS",
          "fa": "کشتار — ۴۰هزار جان"
      },
      "body": {
          "en": "When the streets surged after the Prince's call, the regime's answer was slaughter. Body bags ran out. Eighteen-wheelers carried away the bravest children. They tried to drown the revolution in blood.",
          "fa": "وقتی خیابان‌ها به صدای شاهزاده پاسخ دادند، پاسخ رژیم کشتار بود. کیسه‌های جنازه تمام شد. کامیون‌های هجده‌چرخ، جوانان بی‌باک ما را با خود بردند. خواستند انقلاب را در خون غرق کنند."
      },
      "bullets": [
          "Estimated 40,000+ killed during the January 2026 wave",
          "IRGC trucks mounted with machine guns opened fire on civilians",
          "Families were forced to search for their loved ones among thousands of body bags.",
          "The internet went dark to hide casualty counts from the world"
      ],
      "img": "image/story/massacre.png",
      "label_data": "[ CODEX — JANUARY MASSACRE ]"
  },
  {
      "id": "c7-internet-blackout",
      "tag": "CENSORSHIP",
      "title": {
          "en": "WHEN THE INTERNET GOES DARK",
          "fa": "وقتی اینترنت قطع می‌شود"
      },
      "body": {
          "en": "The regime cuts the cable when bullets fly. A blackout is not a glitch — it is the prelude to a massacre. Diaspora groups have built mesh networks, smuggled Starlink terminals, and trained citizen reporters to keep the truth coming out.",
          "fa": "وقتی گلوله می‌بارد، رژیم اینترنت را قطع می‌کند. خاموشی یک نقص فنی نیست — مقدمه کشتار است."
      },
      "bullets": [
          "Iran has the highest rate of internet shutdowns of any country",
          "Starlink terminals smuggled inside are illegal and their use has been punished by execution.",
          "Officials and propagandists have \"White SIM Cards\" which allow them to communicate only the regimes message to the outside world.",
          "When a government resorts to censoring its entire population, the world should assume the worst is happening."
      ],
      "img": "image/story/internet-blackout.png",
      "label_data": "[ CODEX — INTERNET BLACKOUT ]"
  },
  {
      "id": "c8-khamenei",
      "tag": "TYRANT",
      "title": {
          "en": "ALI KHAMENEI — THE ARCHITECT OF MISERY",
          "fa": "علی خامنه‌ای — معمار رنج"
      },
      "body": {
          "en": "A savory, pan-fried meat patty made from a blend of ground beef or lamb, grated potatoes, and onions. It is seasoned with herbs, then coated in breadcrumbs to achieve a golden, crispy exterior.",
          "fa": "یک کتلت خوشمزه و سرخ‌شده از مخلوط گوشت چرخ‌کرده گاو یا گوسفند، سیب‌زمینی رنده‌شده و پیاز. با زردچوبه، زعفران و سبزی‌های معطر چاشنی زده شده و با آرد سوخاری پوشانده می‌شود تا پوسته‌ای طلایی و ترد پیدا کند."
      },
      "bullets": [
          "The second so called Supreme Leader of Iran beggining in 1989",
          "He is responsible for countless atrocities and unbelievable cruelty to the Iranian people.",
          "Ordered a brutal response to every major protest wave: 1999, 2009, 2017, 2019, 2022, 2026",
          "Held final authority over IRGC, judiciary, foreign policy, nuclear program",
          "Killed by an all female Israeli Airstrike on February 28th using munitions that we dipped in pork fat.",
          "Supporters could not give Khamenei a proper barrial and he is believe to be still in refrigeration.",
          "Regime propagandists still control his social media accounts and occasional send tweets on his behalf from hell."
      ],
      "img": "image/codex/codex_khamenei.png",
      "label_data": "[ CODEX — ALI KHAMENEI ]"
  },
  {
      "id": "c9-mojtaba-cardboard",
      "tag": "VACUUM",
      "title": {
          "en": "MOJTABA + THE CARDBOARD",
          "fa": "مجتبی و مقوای تبلیغاتی"
      },
      "body": {
          "en": "Khamenei's son and presumed heir lies in a coma. The regime, desperate for continuity, props up an actual cardboard cutout of Mojtaba to issue official statements \"from his bedside.\" A leaked photo of the cutout's edge is the meme that broke the regime's spell.",
          "fa": "پسر خامنه‌ای و جانشین فرضی او در کما است. رژیم، در ناامیدی برای حفظ تداوم، یک مقوای تبلیغاتیِ واقعی از مجتبی ساخته است تا «از بستر بیماری» بیانیه صادر کند."
      },
      "bullets": [
          "Mojtaba Khamenei was selected by the Assembly of Experts and installed as the third Supreme Leader.",
          "He has not been seen in public, created a video or an audio recording since the first airstrikes of the war.",
          "He is believed to be severely injured, potentially in a coma or even dead.",
          "A crude cardboard cutout was used at ceremonies celebrating his installation.",
          "Elements of the regime now claim to deliver unverifyable message from Mojtaba.",
          "His condition creates a power vacuum delegitimizing the religious authorities and allowing the IRGC to defacto run the country."
      ],
      "img": "image/codex/codex_cardboard_mojtaba.png",
      "label_data": "[ CODEX — MOJTABA CARDBOARD ]"
  },
  {
      "id": "c10-irgc",
      "tag": "MILITARY",
      "title": {
          "en": "IRGC — THE GUARD CORPS",
          "fa": "سپاه پاسداران انقلاب اسلامی"
      },
      "body": {
          "en": "A parallel army founded in 1979 by Khomeini, loyal not to the nation but to the regime. They control major sectors of the Iranian economy through front companies. They are the iron skeleton holding the Islamic Republic upright. They are the obstacle waiting to be removed.",
          "fa": "ارتشی موازی که خمینی در ۱۳۵۷ بنیان نهاد — وفادار نه به ملت، که به نظام. ستون آهنیِ نگه‌دارنده جمهوری اسلامی. مانعی که باید برداشته شود."
      },
      "bullets": [
          "Designated terrorist organization by the US (2019), Canada (2024), and others",
          "Also a mafia that controls 20-40% of the Iranian economy through front companies",
          "Operates Quds Force (foreign ops) and the Basij (internal repression)",
          "Their commanders are in line for personal sanctions, indictments, and prosecution"
      ],
      "img": "image/portrait/irgc/irgc.png",
      "label_data": "[ CODEX — IRGC ]"
  },
  {
      "id": "c11-basij",
      "tag": "ENFORCERS",
      "title": {
          "en": "BASIJ — THE VOLUNTEER ENFORCERS",
          "fa": "بسیج — مأموران داوطلب"
      },
      "body": {
          "en": "The IRGC's paramilitary auxiliary. Mosque-recruited, ideologically primed, often unpaid in money but rewarded in privilege — university quotas, jobs, exemption from rules. They are who is on the corner when the protest starts. They are what the protest fears most.",
          "fa": "نیروی شبه‌نظامیِ سپاه. در مساجد جذب می‌شوند. اغلب بی‌حقوق، اما با امتیاز."
      },
      "bullets": [
          "Membership estimates: from several hundred thousand to several million",
          "First-line crowd-control against demonstrations",
          "\"Lebas-Shakhsi\" plain-clothes motorcycle squads beat and kidnap protesters",
          "Recruitment incentives: university quotas, government jobs, special permits"
      ],
      "img": "image/story/basij.png",
      "label_data": "[ CODEX — BASIJ MILITIA ]"
  },
  {
      "id": "c12-proxies",
      "tag": "PROXIES",
      "title": {
          "en": "THE OCTOPUS — IRGC PROXIES",
          "fa": "هشت‌پا — نیروهای نیابتی سپاه"
      },
      "body": {
          "en": "Hezbollah in Lebanon. The Houthis in Yemen. Kataib Hezbollah in Iraq. Liwa Fatemiyoun in Syria. Hamas in Gaza. The IRGC's tentacles. Funded, trained, armed, and given missions from Tehran. Cripple the tentacles, and the head can be cut.",
          "fa": "حزب‌الله. حوثی‌ها. کتائب حزب‌الله. لشکر فاطمیون. حماس. بازوهای هشت‌پای سپاه — همگی از تهران تأمین، تربیت و مأموریت می‌گیرند."
      },
      "bullets": [
          "Estimated annual proxy spending in the multiple billions of USD",
          "Hezbollah substantially degraded since 2024 Israeli operations",
          "Houthis continue Red Sea / Bab-el-Mandeb attacks",
          "Iraqi Shia militias control border crossings and skim oil revenue"
      ],
      "img": "image/story/proxy-octopus.png",
      "label_data": "[ CODEX — PROXY OCTOPUS ]"
  },
  {
      "id": "c13-hormuz",
      "tag": "GEOGRAPHY",
      "title": {
          "en": "STRAIT OF HORMUZ — THE CHOKEPOINT",
          "fa": "تنگه هرمز — گلوگاه جهان"
      },
      "body": {
          "en": "A narrow passage between Iran and Oman. Roughly 20% of all the world's petroleum passes through it every day. Whoever controls Hormuz holds the world's gas pump. Iran's southern coast lines its entire northern shore.",
          "fa": "گذرگاهی باریک میان ایران و عمان. حدود ۲۰٪ نفت جهان روزانه از آن می‌گذرد. هرکس هرمز را در دست دارد، پمپ بنزین جهان را در دست دارد."
      },
      "bullets": [
          "About 21 million barrels of oil per day pass through (~20% of global supply)",
          "Width at narrowest point: ~21 nautical miles",
          "Bandar-e Abbas (Iran) and Khasab (Oman) are the dominant ports",
          "Even with limited resources the IRGC Sepah navy can prevent passage by threatening billion dollar oil tankers and making them uninsurable.",
          "IRGC speedboats from Bandar-e Abbas, missiles, drones and underwater mines are used to harass the strait and curtail freedom of navigation.",
          "This effects all countries that use the Persian Gulf to transport oil and other goods including UAE, Saudi Arabia, Qatar, Kuwait and Oman."
      ],
      "img": "image/codex/codex_hormuz.png",
      "label_data": "[ CODEX — STRAIT OF HORMUZ ]"
  },
  {
      "id": "c14-hyperinflation",
      "tag": "ECONOMY",
      "title": {
          "en": "HYPERINFLATION — A DAILY GAMBLE",
          "fa": "تورم لجام‌گسیخته — قمار روزانه"
      },
      "body": {
          "en": "Inside Iran, ordinary acts — buying boots, paying rent, taking a bus — have become daily gambles. The rial has lost over 99% of its value since 1979 as the government has attempted to print new money to paper over domestic problems. Inflation devours wages faster than workers can earn them. The regime's response is to print more money, accelerating the spiral, and to claw the same worthless currency back out of the pockets of the people they pretend to govern.",
          "fa": "در ایران، کارهای ساده روزمره — خریدن چکمه، اجاره، اتوبوس — قمار مالی شده‌اند. ریال از ۱۳۵۷ تاکنون بیش از ۹۹٪ ارزشش را از دست داده. تورم، حقوق را سریع‌تر از کسب می‌خورد. واکنش رژیم: چاپ پول بیشتر، تشدید بحران، و کشیدن همان پول بی‌ارزش از جیب مردم."
      },
      "bullets": [
          "Rial has lost >99% of its value vs. USD since 1979",
          "Annual inflation has run 30-50% for several consecutive years",
          "Real wages have been negative for most of the last decade",
          "The regime prints money to pay the IRGC and military first; the rest of the country last",
          "This has resulted in job loss and food insecurity for most Iranians."
      ],
      "img": "image/codex/codex_hyperinflation.png",
      "label_data": "[ CODEX — HYPERINFLATION ]"
  },
  {
      "id": "c15-strikes",
      "tag": "RESISTANCE",
      "title": {
          "en": "GENERAL STRIKES — THE LIFEBLOOD",
          "fa": "اعتصاب عمومی — رگ حیاتِ رژیم"
      },
      "body": {
          "en": "When oil workers walk off, the regime stops bleeding hard currency. Petrochemical, steel, and refinery strikes have hit Iran in waves since 2018. In 2025 the pattern is sharper — wages can no longer buy bread, and the workers in the modern industries the regime feeds on are at the breaking point. The general strike is no longer a question of \"if\". It is invisible until it isn't.",
          "fa": "وقتی کارگران نفت از کار می‌کشند، رژیم خون‌ریزی ارز سخت را متوقف می‌بیند. اعتصابات پتروشیمی، فولاد و پالایش از ۱۳۹۷ به این سو موج‌وار به ایران رسیده."
      },
      "bullets": [
          "Asaluyeh / South Pars: largest petrochemical strike waves 2018, 2021, 2025",
          "Mahshahr, Abadan: prolonged refinery worker stoppages",
          "Esfahan, Ahvaz: steel-mill worker actions",
          "Pensioner protests in 30+ cities now monthly"
      ],
      "img": "image/story/general-strikes.png",
      "label_data": "[ CODEX — GENERAL STRIKES ]"
  },
  {
      "id": "c16-bibi-ally",
      "tag": "ISRAEL",
      "title": {
          "en": "THE ISRAELI MILITARY - STRIKING THE HEAD OF THE OCTOPUS",
          "fa": "ضربه به سر هشت‌پا"
      },
      "body": {
          "en": "The Israeli people have stood as a genuine ally to the Iranian people. The IDF strikes the head of the octopus while the Iranian people dismantle its tentacles from within. This is one fight, on two fronts. A free Iran will normalize relations with Israel. The Crown Prince has said so explicitly.",
          "fa": "مردم اسرائیل متحد واقعی مردم ایران بوده‌اند. ارتش اسرائیل سر هشت‌پا را می‌زند، در حالی‌که مردم ایران از درون بازوهایش را قطع می‌کنند. ایران آزاد، روابط با اسرائیل را عادی خواهد کرد."
      },
      "bullets": [
          "The Israeli Air force partnered with US forces to destroy targets in Iran during the current war effort.",
          "The Islamic Republic calls publicly for Israel's destruction",
          "On its own borders Israel is battling with IRGC proxies, Hamas in Gaza and Hezbolla in souther Lebanon.",
          "Reza Pahlavi has visited Israel and called for normalization of relations once Iran is free.",
          "Iranian protesters have publicly thanked the IDF in 2024-25 demonstrations"
      ],
      "img": "image/portrait/outsider/bibi.png",
      "label_data": "[ CODEX — IDF AS ALLY ]"
  },
  {
      "id": "c17-dignified-transfer",
      "tag": "AMERICA",
      "title": {
          "en": "THE EAGLE AND THE LION",
          "fa": "عقاب و شیر"
      },
      "body": {
          "en": "American boots walk Persian sand. American eyes watch from the Gulf. American steel fills resistance crates. This is not a distant conflict — this is an alliance, forged in shared sacrifice. When a flag-draped coffin returns to Dover, the question is no longer whether America stands with the Lion. The question is whether it will see this through.",
          "fa": "چکمه‌های آمریکایی بر خاک ایران راه می‌روند. چشمان آمریکایی از خلیج می‌نگرند. فولاد آمریکایی جعبه‌های مقاومت را پر می‌کند. این جنگی دور نیست — این اتحادی است، ساخته‌شده در فداکاری مشترک. وقتی تابوتی پوشیده از پرچم به دوور بازمی‌گردد، سؤال دیگر این نیست که آمریکا در کنار شیر ایستاده یا نه. سؤال این است که تا آخر خواهد ماند یا نه."
      },
      "bullets": [
          "US Fifth Fleet has patrolled the Persian Gulf continuously since 1980",
          "Joint US-Israeli operations dismantled IRGC networks in 2024-25",
          "Covert arms supply to Javidan resistance began under executive authority",
          "The first American KIA transforms the war — at home and abroad"
      ],
      "img": "image/codex/codex_dignified_transfer.png",
      "label_data": "[ CODEX — DIGNIFIED TRANSFER ]"
  },
  {
      "id": "c18-diaspora",
      "tag": "DIASPORA",
      "title": {
          "en": "WESTWOOD. TRAFALGAR. DUNDAS.",
          "fa": "وست‌وود. ترافالگار. داندس."
      },
      "body": {
          "en": "The Iranian diaspora — Los Angeles, London, Toronto, Berlin, Stockholm — is the voice of their family and friends inside Iran during the internet blackout. Lion & Sun flags fill streets in cities the state media cannot reach. Every rally is a megaphone the regime cannot silence.",
          "fa": "دیاسپورای ایرانی — لس‌آنجلس، لندن، تورنتو، برلین، استکهلم — از رژیم بلندتر است. بلندگویی که رژیم نمی‌تواند خاموشش کند."
      },
      "bullets": [
          "Largest diaspora hubs: USA (especially LA), Canada (Toronto), UK, Germany, Sweden",
          "Diaspora-funded media (Manoto, Iran International) reach inside Iran via satellite",
          "Many diaspora professionals build circumvention/encryption tools used inside Iran",
          "Overwhelmingly anti-regime; predominantly Pahlavi-aligned"
      ],
      "img": "image/portrait/iranian_people/diaspora.png",
      "label_data": "[ CODEX — DIASPORA ]"
  },
  {
      "id": "c19-defections",
      "tag": "DEFECTORS",
      "title": {
          "en": "THE SILENT UNDERGROUND",
          "fa": "زیرزمینِ خاموش"
      },
      "body": {
          "en": "Defections are already happening. A silent underground network is forming between ordinary citizens and the conscripts, soldiers, and clerics breaking away from the system. After decades of total security control, the regime has suffered an irreversible fracture. Cracks become tunnels. Tunnels become highways out.",
          "fa": "ریزش‌ها آغاز شده‌اند. شبکه‌ای زیرزمینی و خاموش، میان شهروندان عادی و سربازان، سربازوظیفه‌ها و روحانیانی که از نظام می‌گریزند، در حال شکل‌گیری است."
      },
      "bullets": [
          "Conscripts increasingly refuse orders to fire on civilians",
          "Mid-rank IRGC officers leak documents to diaspora media",
          "Clerics outside Khamenei's inner circle quietly distance from the regime",
          "Defection-protection networks run through the diaspora",
          "Reza Pahlavi's organization allows defectors to covertly communicate their willingness to support the transitional government when finally called upon."
      ],
      "img": "image/codex/codex_defector.png",
      "label_data": "[ CODEX — SILENT UNDERGROUND ]"
  },
  {
      "id": "c20-free-iran",
      "tag": "FINALE",
      "title": {
          "en": "FREE IRAN — THE FINAL BATTLE",
          "fa": "ایران آزاد — نبرد نهایی"
      },
      "body": {
          "en": "The board is set. The pieces are finally in our favor. The issue is no longer whether the Islamic Republic will fall — only the timing of its collapse. The Iranian people and their King are moving to the absolute top of the battlefield. We will see each other in Free Iran.",
          "fa": "صفحه چیده شده. مهره‌ها به نفع ماست. دیگر سؤال این نیست که جمهوری اسلامی سقوط می‌کند یا نه — تنها سؤال، زمان آن است. یکدیگر را در ایران آزاد خواهیم دید."
      },
      "bullets": [
          "Succession crisis post-Khamenei has fractured the clerical establishment",
          "War chest hemorrhaging: sanctions + sabotage + worker strikes",
          "Proxy network significantly degraded",
          "Coordinated diaspora and inside-Iran movement is operationally aligned"
      ],
      "img": "image/codex/codex_finalbattle.png",
      "label_data": "[ CODEX — FREE IRAN ]"
  }
];