// ────────────────────────────────────────────────────────────────────────────
// DAILY BRIEFINGS - Theme and narrative per day
// Bilingual format: { en: 'English', fa: 'فارسی' }
// ────────────────────────────────────────────────────────────────────────────

const DAILY_BRIEFINGS = [
  {
      day: 1,
      theme: { en: 'Day 1 — The First Wave', fa: 'روز ۱ — موج اول' },
      brief: { en: 'U.S./Israeli strikes kill Khamenei in Tehran.\nRegime declares mourning; crowds celebrate in streets.', fa: 'حملات آمریکا و اسرائیل خامنه‌ای را در تهران کشت.\nرژیم عزای عمومی اعلام کرد؛ مردم در خیابان‌ها جشن گرفتند.' }
  },
  {
      day: 2,
      theme: { en: 'Day 2 — Retaliation Across the Gulf', fa: 'روز ۲ — انتقام‌جویی در خلیج' },
      brief: { en: 'Regime fires missiles at Israel/U.S. bases.\nU.S. soldier killed in Kuwait; Trump vows more strikes.', fa: 'رژیم به پایگاه‌های اسرائیل و آمریکا موشک شلیک کرد.\nیک سرباز آمریکایی در کویت کشته شد؛ ترامپ حملات بیشتر را وعده داد.' }
  },
  {
      day: 3,
      theme: { en: 'Day 3 — Natanz Confirmed', fa: 'روز ۳ — تأیید نطنز' },
      brief: { en: 'Satellite images confirm Natanz nuclear damage.\nRegime scrambles leadership; civilians remain wary.', fa: 'تصاویر ماهواره‌ای آسیب هسته‌ای نطنز را تأیید کرد.\nرژیم در تکاپوی رهبری است؛ مردم محتاط مانده‌اند.' }
  },
  {
      day: 4,
      theme: { en: 'Day 4 — Nine Fronts Open', fa: 'روز ۴ — نُه جبهه باز شد' },
      brief: { en: 'Regime spreads conflict across multiple borders.\nIRGC checkpoints tighten control on civilian life.', fa: 'رژیم درگیری را به مرزهای متعدد گسترش داد.\nایست‌بازرسی‌های سپاه کنترل بر زندگی مردم را سخت‌تر کرد.' }
  },
  {
      day: 5,
      theme: { en: 'Day 5 — Stadiums and Schools', fa: 'روز ۵ — ورزشگاه‌ها و مدارس' },
      brief: { en: 'Strikes hit a Tehran stadium and a school in Khomein.\nIranian casualties pass 1,000 as fear and anger deepen.', fa: 'حملات به ورزشگاهی در تهران و مدرسه‌ای در خمین اصابت کرد.\nتلفات ایرانی از ۱۰۰۰ نفر گذشت؛ ترس و خشم عمیق‌تر شد.' }
  },
  {
      day: 6,
      theme: { en: 'Day 6 — Oil Fires at Midnight', fa: 'روز ۶ — آتش نفت در نیمه‌شب' },
      brief: { en: 'Israeli jets hit oil facilities; smoke rises over Iran.\nThe White House frames energy strikes as pressure on Tehran.', fa: 'جت‌های اسرائیلی تأسیسات نفتی را زدند؛ دود بر فراز ایران بلند شد.\nکاخ سفید حملات انرژی را فشار بر تهران معرفی کرد.' }
  },
  {
      day: 7,
      theme: { en: 'Day 7 — Internet Cut', fa: 'روز ۷ — قطع اینترنت' },
      brief: { en: 'Iran imposes a nationwide internet blackout.\nFamilies lose contact as strikes continue across many provinces.', fa: 'ایران اینترنت را در سراسر کشور قطع کرد.\nخانواده‌ها ارتباط خود را از دست دادند؛ حملات در استان‌های متعدد ادامه یافت.' }
  },
  {
      day: 8,
      theme: { en: 'Day 8 — Naval War Begins', fa: 'روز ۸ — جنگ دریایی آغاز شد' },
      brief: { en: 'U.S. naval action sinks Iranian warships in open combat.\nHormuz turns hazardous as shipping and insurance pull back.', fa: 'نیروی دریایی آمریکا کشتی‌های جنگی ایران را غرق کرد.\nهرمز خطرناک شد؛ کشتیرانی و بیمه عقب کشیدند.' }
  },
  {
      day: 9,
      theme: { en: 'Day 9 — New Supreme Leader', fa: 'روز ۹ — رهبر جدید' },
      brief: { en: 'Mojtaba Khamenei is named Supreme Leader in Tehran.\nTrump rejects the move as Iran projects forced continuity.', fa: 'مجتبی خامنه‌ای به‌عنوان رهبر جدید در تهران معرفی شد.\nترامپ این اقدام را رد کرد؛ ایران تداوم اجباری را نشان می‌دهد.' }
  },
  {
      day: 10,
      theme: { en: 'Day 10 — Army Fractures', fa: 'روز ۱۰ — شکاف در ارتش' },
      brief: { en: 'Desertions spread through Iran\'s regular army units.\nIRGC-Artesh tensions sharpen as military trust begins to crack.', fa: 'فرار از یگان‌های ارتش ایران گسترش یافت.\nتنش سپاه-ارتش تشدید شد؛ اعتماد نظامی شروع به فروپاشی کرد.' }
  },
  {
      day: 11,
      theme: { en: 'Day 11 — Proxies Fill the Gap', fa: 'روز ۱۱ — نیروهای نیابتی جای خالی را پر می‌کنند' },
      brief: { en: 'Iraqi proxy units help patrol areas inside Iran.\nThe regime leans outward as local conscripts fall away.', fa: 'نیروهای نیابتی عراقی در گشت‌زنی داخل ایران کمک می‌کنند.\nرژیم به بیرون تکیه می‌کند؛ سربازان وظیفه محلی می‌روند.' }
  },
  {
      day: 12,
      theme: { en: 'Day 12 — Resistance in the Streets', fa: 'روز ۱۲ — مقاومت در خیابان‌ها' },
      brief: { en: 'Resistance cells act in major cities before Nowruz.\nThe White House leans into liberation rhetoric as unrest stirs.', fa: 'هسته‌های مقاومت پیش از نوروز در شهرهای بزرگ عمل کردند.\nکاخ سفید روی گفتمان آزادی‌بخشی تأکید کرد؛ ناآرامی شعله‌ور شد.' }
  },
  {
      day: 13,
      theme: { en: 'Day 13 — Hormuz Under Siege', fa: 'روز ۱۳ — هرمز در محاصره' },
      brief: { en: 'Commercial shipping backs up behind the Strait of Hormuz.\nTrump threatens force as Iran warns ships off the corridor.', fa: 'کشتیرانی تجاری پشت تنگه هرمز متوقف شد.\nترامپ تهدید به زور کرد؛ ایران به کشتی‌ها هشدار داد.' }
  },
  {
      day: 14,
      theme: { en: 'Day 14 — Two Weeks of Fire', fa: 'روز ۱۴ — دو هفته آتش' },
      brief: { en: 'CENTCOM reports thousands of sorties and strike targets.\nTehran feels emptier as alerts and exhaustion define daily life.', fa: 'سنتکام هزاران پرواز و هدف حمله را گزارش داد.\nتهران خالی‌تر شده؛ هشدارها و خستگی زندگی روزمره را تعریف می‌کنند.' }
  },
  {
      day: 15,
      theme: { en: 'Day 15 — Russia Confirmed In', fa: 'روز ۱۵ — تأیید حضور روسیه' },
      brief: { en: 'Iranian drones are linked to Russian-made components.\nTrump accepts Ukrainian help in targeting drone networks.', fa: 'پهپادهای ایرانی به قطعات ساخت روسیه مرتبط شدند.\nترامپ کمک اوکراین در هدف‌گیری شبکه‌های پهپادی را پذیرفت.' }
  },
  {
      day: 16,
      theme: { en: 'Day 16 — Houthis Enter', fa: 'روز ۱۶ — حوثی‌ها وارد شدند' },
      brief: { en: 'Houthis fire on USS Truman and widen the war at sea.\nU.S. shipping risks grow from Hormuz to Bab el-Mandeb.', fa: 'حوثی‌ها به یو‌اس‌اس ترومن شلیک کردند و جنگ دریایی را گسترش دادند.\nخطرات کشتیرانی آمریکا از هرمز تا باب‌المندب افزایش یافت.' }
  },
  {
      day: 17,
      theme: { en: 'Day 17 — Evin Darkens', fa: 'روز ۱۷ — اوین تاریک شد' },
      brief: { en: 'Prisoners held since January face new execution threats.\nInside Iran, fear deepens beyond the battlefield and streets.', fa: 'زندانیان از ژانویه با تهدید اعدام جدید روبرو شدند.\nدر داخل ایران، ترس فراتر از میدان جنگ و خیابان‌ها عمیق‌تر شد.' }
  },
  {
      day: 18,
      theme: { en: 'Day 18 — Desertions Spread', fa: 'روز ۱۸ — گسترش فرار' },
      brief: { en: 'Missile crews report shortages and begin abandoning posts.\nIran\'s command structure looks more brittle by the day.', fa: 'خدمه موشکی کمبود گزارش دادند و شروع به ترک پست کردند.\nساختار فرماندهی ایران روز به روز شکننده‌تر به نظر می‌رسد.' }
  },
  {
      day: 19,
      theme: { en: 'Day 19 — Civilian Toll', fa: 'روز ۱۹ — تلفات غیرنظامی' },
      brief: { en: 'Civilian deaths pass 2,000 as shelves empty in Tehran.\nFamilies brace for worse while inspections at Isfahan halt.', fa: 'مرگ غیرنظامیان از ۲۰۰۰ نفر گذشت؛ قفسه‌ها در تهران خالی شد.\nخانواده‌ها برای بدتر شدن آماده می‌شوند؛ بازرسی در اصفهان متوقف شد.' }
  },
  {
      day: 20,
      theme: { en: 'Day 20 — Mojtaba on Camera', fa: 'روز ۲۰ — مجتبی جلوی دوربین' },
      brief: { en: 'State TV shows Mojtaba reviewing troops from hiding.\nThe broadcast aims to project control to a shaken public.', fa: 'تلویزیون دولتی مجتبی را در حال بازدید از نیروها از مخفیگاه نشان داد.\nپخش برای نمایش کنترل به مردم متزلزل است.' }
  },
  {
      day: 21,
      theme: { en: 'Day 21 — Largest Strike Yet', fa: 'روز ۲۱ — بزرگ‌ترین حمله تاکنون' },
      brief: { en: 'A major U.S. strike package hits hardened coastal sites.\nIran answers with missiles into Israel, killing civilians.', fa: 'بسته حمله بزرگ آمریکا به سایت‌های ساحلی مستحکم اصابت کرد.\nایران با موشک به اسرائیل پاسخ داد و غیرنظامیان کشته شدند.' }
  },
  {
      day: 22,
      theme: { en: 'Day 22 — Secret Site Revealed', fa: 'روز ۲۲ — افشای سایت مخفی' },
      brief: { en: 'The IAEA reveals an underground site near Isfahan.\nWashington says the finding hardens its view of the war.', fa: 'آژانس یک سایت زیرزمینی نزدیک اصفهان را فاش کرد.\nواشنگتن گفت این یافته دیدگاهش نسبت به جنگ را سخت‌تر می‌کند.' }
  },
  {
      day: 23,
      theme: { en: 'Day 23 — Nowruz in the Crossfire', fa: 'روز ۲۳ — نوروز در آتش متقاطع' },
      brief: { en: 'Resistance units strike during the Nowruz fire festival.\nIRGC commanders plead for forces to hold the streets.', fa: 'واحدهای مقاومت در جشن آتش نوروز حمله کردند.\nفرماندهان سپاه از نیروها خواستند خیابان‌ها را نگه دارند.' }
  },
  {
      day: 24,
      theme: { en: 'Day 24 — The Patrol State', fa: 'روز ۲۴ — دولت گشتی' },
      brief: { en: 'Foreign militia units appear in some Tehran districts.\nBasij morale sags as the capital feels more occupied.', fa: 'واحدهای شبه‌نظامی خارجی در برخی مناطق تهران ظاهر شدند.\nروحیه بسیج افت کرد؛ پایتخت بیشتر اشغال‌شده به نظر می‌رسد.' }
  },
  {
      day: 25,
      theme: { en: 'Day 25 — Oil Output Zero', fa: 'روز ۲۵ — تولید نفت صفر' },
      brief: { en: 'Iran\'s oil output falls near zero under sustained strikes.\nThe rial plunges again as salaries stop in some provinces.', fa: 'تولید نفت ایران زیر حملات مداوم به صفر نزدیک شد.\nریال دوباره سقوط کرد؛ حقوق در برخی استان‌ها متوقف شد.' }
  },
  {
      day: 26,
      theme: { en: 'Day 26 — Gulf Partners Waver', fa: 'روز ۲۶ — تردید شرکای خلیج' },
      brief: { en: 'Qatar and Saudi sites are damaged by the widening war.\nGulf allies press Washington to consider the regional limits.', fa: 'سایت‌های قطر و عربستان از جنگ گسترده آسیب دیدند.\nمتحدان خلیج از واشنگتن خواستند محدودیت‌های منطقه‌ای را در نظر بگیرد.' }
  },
  {
      day: 27,
      theme: { en: 'Day 27 — Civilization Warning', fa: 'روز ۲۷ — هشدار تمدنی' },
      brief: { en: 'Trump warns of catastrophic consequences over Hormuz.\nIran fires on an Indian tanker and deepens the crisis.', fa: 'ترامپ نسبت به عواقب فاجعه‌بار هرمز هشدار داد.\nایران به یک نفتکش هندی شلیک کرد و بحران را عمیق‌تر کرد.' }
  },
  {
      day: 28,
      theme: { en: 'Day 28 — One Month In', fa: 'روز ۲۸ — یک ماه گذشت' },
      brief: { en: 'After a month, thousands are dead across the region.\nIn Iran, blackouts and water loss compound daily strain.', fa: 'پس از یک ماه، هزاران نفر در سراسر منطقه کشته شدند.\nدر ایران، قطعی برق و آب فشار روزانه را تشدید کرد.' }
  },
  {
      day: 29,
      theme: { en: 'Day 29 — Gulf Cities Hit', fa: 'روز ۲۹ — حمله به شهرهای خلیج' },
      brief: { en: 'Missiles hit Gulf cities as air defenses stay active.\nThe economic shock widens beyond Iran and the battlefield.', fa: 'موشک‌ها به شهرهای خلیج اصابت کردند؛ پدافند هوایی فعال ماند.\nشوک اقتصادی فراتر از ایران و میدان جنگ گسترش یافت.' }
  },
  {
      day: 30,
      theme: { en: 'Day 30 — Diplomats vs. Generals', fa: 'روز ۳۰ — دیپلمات‌ها در برابر ژنرال‌ها' },
      brief: { en: 'Iranian diplomats hint at access through Hormuz.\nThe IRGC overrides them within hours and keeps control.', fa: 'دیپلمات‌های ایرانی به دسترسی از هرمز اشاره کردند.\nسپاه ظرف چند ساعت آن‌ها را نادیده گرفت و کنترل را حفظ کرد.' }
  },
  {
      day: 31,
      theme: { en: 'Day 31 — IRGC Takes Control', fa: 'روز ۳۱ — سپاه کنترل را گرفت' },
      brief: { en: 'The IRGC places Hormuz under direct military control.\nIran\'s civilian leadership is pushed further to the margins.', fa: 'سپاه هرمز را تحت کنترل مستقیم نظامی قرار داد.\nرهبری غیرنظامی ایران بیشتر به حاشیه رانده شد.' }
  },
  {
      day: 32,
      theme: { en: 'Day 32 — Rhetoric at Its Peak', fa: 'روز ۳۲ — اوج لفاظی' },
      brief: { en: 'Trump escalates public threats to their sharpest point.\nInside Iran, few expect outside words to change the war.', fa: 'ترامپ تهدیدهای عمومی را به تیزترین نقطه رساند.\nدر داخل ایران، کمتر کسی انتظار دارد حرف‌های بیرون جنگ را تغییر دهد.' }
  },
  {
      day: 33,
      theme: { en: 'Day 33 — Paper Ceasefire', fa: 'روز ۳۳ — آتش‌بس کاغذی' },
      brief: { en: 'A ceasefire is announced but military posture barely shifts.\nIn Tehran and Washington, few treat the pause as durable.', fa: 'آتش‌بس اعلام شد اما وضعیت نظامی به‌سختی تغییر کرد.\nدر تهران و واشنگتن، کمتر کسی این توقف را پایدار می‌داند.' }
  },
  {
      day: 34,
      theme: { en: 'Day 34 — Ceasefire Already Breaking', fa: 'روز ۳۴ — آتش‌بس در حال شکستن' },
      brief: { en: 'Strikes continue despite the declared pause in fighting.\nThe ceasefire reads as paperwork more than reality.', fa: 'حملات علی‌رغم توقف اعلام‌شده ادامه یافت.\nآتش‌بس بیشتر کاغذبازی به نظر می‌رسد تا واقعیت.' }
  },
  {
      day: 35,
      theme: { en: 'Day 35 — Oil Crashes', fa: 'روز ۳۵ — سقوط نفت' },
      brief: { en: 'Oil prices plunge on hopes the fighting may slow.\nTehran exhales briefly, but Lebanon keeps burning.', fa: 'قیمت نفت با امید به کند شدن جنگ سقوط کرد.\nتهران نفس کوتاهی کشید، اما لبنان همچنان می‌سوزد.' }
  },
  {
      day: 36,
      theme: { en: 'Day 36 — Talks That Go Nowhere', fa: 'روز ۳۶ — مذاکرات بی‌نتیجه' },
      brief: { en: 'Envoys meet, but neither side changes core demands.\nThe White House talks while the war\'s machinery stays active.', fa: 'فرستادگان دیدار کردند، اما هیچ طرفی خواسته‌های اصلی را تغییر نداد.\nکاخ سفید حرف می‌زند؛ ماشین جنگ فعال می‌ماند.' }
  },
  {
      day: 37,
      theme: { en: 'Day 37 — Hormuz Flares Again', fa: 'روز ۳۷ — هرمز دوباره شعله‌ور شد' },
      brief: { en: 'The IRGC fires on a tanker cleared to pass Hormuz.\nIndia protests as the ceasefire corridor collapses.', fa: 'سپاه به نفتکشی که مجوز عبور از هرمز داشت شلیک کرد.\nهند اعتراض کرد؛ دالان آتش‌بس فروپاشید.' }
  },
  {
      day: 38,
      theme: { en: 'Day 38 — Talks Collapse', fa: 'روز ۳۸ — فروپاشی مذاکرات' },
      brief: { en: 'Trump cancels the U.S. trip as backchannel talks fade.\nIran sees little sign Washington ever meant to stop.', fa: 'ترامپ سفر آمریکا را لغو کرد؛ مذاکرات پشت‌پرده محو شد.\nایران نشانه کمی می‌بیند که واشنگتن قصد توقف داشته.' }
  },
  {
      day: 39,
      theme: { en: 'Day 39 — Naval Standoff', fa: 'روز ۳۹ — رویارویی دریایی' },
      brief: { en: 'U.S. jets disable Iranian tankers near the blockade.\nOil prices jump as markets brace for a harder phase.', fa: 'جت‌های آمریکایی نفتکش‌های ایرانی نزدیک محاصره را از کار انداختند.\nقیمت نفت جهش کرد؛ بازارها برای فاز سخت‌تر آماده شدند.' }
  },
  {
      day: 40,
      theme: { en: 'Day 40 — IRGC Holds the Cards', fa: 'روز ۴۰ — سپاه کارت‌ها را در دست دارد' },
      brief: { en: 'The IRGC\'s political power rises with wartime nationalism.\nTehran\'s civilian camp looks sidelined and increasingly silent.', fa: 'قدرت سیاسی سپاه با ناسیونالیسم جنگی بالا رفت.\nجناح غیرنظامی تهران حاشیه‌ای و ساکت‌تر به نظر می‌رسد.' }
  },
  {
      day: 41,
      theme: { en: 'Day 41 — UAE War Exposed', fa: 'روز ۴۱ — افشای جنگ امارات' },
      brief: { en: 'Reports link UAE covert strikes to attacks inside Iran.\nAnother undeclared front adds pressure and public uncertainty.', fa: 'گزارش‌ها حملات مخفی امارات را به حملات داخل ایران مرتبط کردند.\nجبهه اعلام‌نشده دیگری فشار و نااطمینانی عمومی را افزود.' }
  },
  {
      day: 42,
      theme: { en: 'Day 42 — Evin Tightens', fa: 'روز ۴۲ — اوین سخت‌تر شد' },
      brief: { en: 'Iran cracks down harder inside Evin Prison.\nWomen detainees face solitary threats as the outside war drags on.', fa: 'ایران سرکوب در زندان اوین را تشدید کرد.\nزنان زندانی با تهدید انفرادی روبرو شدند؛ جنگ بیرون ادامه دارد.' }
  },
  {
      day: 43,
      theme: { en: 'Day 43 — Fabricated Goodwill', fa: 'روز ۴۳ — حسن‌نیت ساختگی' },
      brief: { en: 'Trump claims executions were halted as a goodwill step.\nIran denies it, underscoring the gap between narratives.', fa: 'ترامپ ادعا کرد اعدام‌ها به‌عنوان حسن‌نیت متوقف شد.\nایران انکار کرد و شکاف بین روایت‌ها را برجسته کرد.' }
  },
  {
      day: 44,
      theme: { en: 'Day 44 — New Hormuz Fees', fa: 'روز ۴۴ — عوارض جدید هرمز' },
      brief: { en: 'Iran announces steep transit fees for passing Hormuz.\nShipping firms face a corridor shaped by force and risk.', fa: 'ایران عوارض سنگین عبور از هرمز را اعلام کرد.\nشرکت‌های کشتیرانی با دالانی شکل‌گرفته از زور و ریسک روبرو شدند.' }
  },
  {
      day: 45,
      theme: { en: 'Day 45 — Mosquito Fleet Masses', fa: 'روز ۴۵ — تجمع ناوگان پشه‌ای' },
      brief: { en: 'IRGC fast boats mass near U.S. destroyers in the strait.\nA direct clash is avoided, but only narrowly.', fa: 'قایق‌های تندرو سپاه نزدیک ناوشکن‌های آمریکا در تنگه تجمع کردند.\nدرگیری مستقیم اجتناب شد، اما به‌سختی.' }
  },
  {
      day: 46,
      theme: { en: 'Day 46 — Arsenal Rebuilt', fa: 'روز ۴۶ — بازسازی زرادخانه' },
      brief: { en: 'Iran signals missile production continued through the pause.\nWashington\'s earlier claims of total destruction look overstated.', fa: 'ایران علامت داد تولید موشک در طول توقف ادامه داشت.\nادعاهای قبلی واشنگتن درباره نابودی کامل اغراق‌آمیز به نظر می‌رسد.' }
  },
  {
      day: 47,
      theme: { en: 'Day 47 — Basij Pleads for Loyalty', fa: 'روز ۴۷ — التماس بسیج برای وفاداری' },
      brief: { en: 'A public appeal urges Basij forces not to desert.\nInside Iran, the message lands as a sign of fragility.', fa: 'یک درخواست عمومی از نیروهای بسیج خواست فرار نکنند.\nدر داخل ایران، این پیام نشانه شکنندگی تلقی شد.' }
  },
  {
      day: 48,
      theme: { en: 'Day 48 — Three Clocks', fa: 'روز ۴۸ — سه ساعت' },
      brief: { en: 'Trump\'s politics, Iran\'s economy, and IRGC power diverge.\nNone of the three timelines point cleanly toward peace.', fa: 'سیاست ترامپ، اقتصاد ایران و قدرت سپاه از هم جدا می‌شوند.\nهیچ‌کدام از سه جدول زمانی به‌طور واضح به صلح اشاره نمی‌کند.' }
  },
  {
      day: 49,
      theme: { en: 'Day 49 — Lebanon\'s Toll', fa: 'روز ۴۹ — تلفات لبنان' },
      brief: { en: 'Israeli strikes kill hundreds in Lebanon in one day.\nIran points to Lebanon as proof the war has widened.', fa: 'حملات اسرائیل در یک روز صدها نفر را در لبنان کشت.\nایران به لبنان به‌عنوان دلیل گسترش جنگ اشاره کرد.' }
  },
  {
      day: 50,
      theme: { en: 'Day 50 — Two Months of War', fa: 'روز ۵۰ — دو ماه جنگ' },
      brief: { en: 'Two months in, Tehran lives with blackout and decline.\nMany want peace, but the IRGC now sets the terms.', fa: 'پس از دو ماه، تهران با قطعی برق و زوال زندگی می‌کند.\nبسیاری صلح می‌خواهند، اما سپاه حالا شرایط را تعیین می‌کند.' }
  },
  {
      day: 51,
      theme: { en: 'Day 51 — Mojtaba Goes Silent', fa: 'روز ۵۱ — سکوت مجتبی' },
      brief: { en: 'Mojtaba disappears from public view for several days.\nState media fills the gap with IRGC drills and resolve.', fa: 'مجتبی برای چند روز از دید عموم ناپدید شد.\nرسانه‌های دولتی جای خالی را با رزمایش و عزم سپاه پر کردند.' }
  },
  {
      day: 52,
      theme: { en: 'Day 52 — White House Recalibrates', fa: 'روز ۵۲ — بازتنظیم کاخ سفید' },
      brief: { en: 'Washington softens its talk of rapid regime collapse.\nThe war looks longer and less decisive than first promised.', fa: 'واشنگتن لحن خود درباره فروپاشی سریع رژیم را نرم کرد.\nجنگ طولانی‌تر و کم‌قاطع‌تر از وعده اول به نظر می‌رسد.' }
  },
  {
      day: 53,
      theme: { en: 'Day 53 — Resistance Holds', fa: 'روز ۵۳ — مقاومت پابرجاست' },
      brief: { en: 'Messages from Evin show prisoner resistance still alive.\nOutside prison walls, scattered anti-regime action continues.', fa: 'پیام‌های اوین نشان می‌دهد مقاومت زندانیان هنوز زنده است.\nبیرون از دیوارهای زندان، اقدامات پراکنده ضدرژیم ادامه دارد.' }
  },
  {
      day: 54,
      theme: { en: 'Day 54 — Oman Backchannel', fa: 'روز ۵۴ — کانال پشتی عمان' },
      brief: { en: 'Indirect contact resumes through Omani mediators.\nBut sanctions, blockades, and missiles still define the real terms.', fa: 'تماس غیرمستقیم از طریق میانجی‌های عمانی از سر گرفته شد.\nاما تحریم‌ها، محاصره‌ها و موشک‌ها هنوز شرایط واقعی را تعیین می‌کنند.' }
  },
  {
      day: 55,
      theme: { en: 'Day 55 — IRGC Obstacle', fa: 'روز ۵۵ — مانع سپاه' },
      brief: { en: 'Iranian officials quietly explore ways to preserve the state.\nThe IRGC remains the main barrier to any compromise.', fa: 'مقامات ایرانی بی‌سروصدا راه‌هایی برای حفظ دولت بررسی می‌کنند.\nسپاه مانع اصلی هرگونه سازش باقی می‌ماند.' }
  },
  {
      day: 56,
      theme: { en: 'Day 56 — Hormuz Rules Firm', fa: 'روز ۵۶ — قوانین محکم هرمز' },
      brief: { en: 'Iran reaffirms transit rules and fires warning shots.\nGlobal markets read Hormuz as a militarized toll corridor.', fa: 'ایران قوانین عبور را تأیید کرد و شلیک هشدار انجام داد.\nبازارهای جهانی هرمز را دالان عوارض نظامی می‌خوانند.' }
  },
  {
      day: 57,
      theme: { en: 'Day 57 — War Becomes Permanent', fa: 'روز ۵۷ — جنگ دائمی شد' },
      brief: { en: 'The war settles into blockade, strikes, and attrition.\nNeither Tehran nor Washington finds a clear way out.', fa: 'جنگ در محاصره، حملات و فرسایش جا افتاد.\nنه تهران و نه واشنگتن راه خروج واضحی پیدا نمی‌کنند.' }
  },
  {
      day: 58,
      theme: { en: 'Day 58 — Evin Stirs', fa: 'روز ۵۸ — جنبش اوین' },
      brief: { en: 'Notes from Evin mark two months of war and repression.\nGuards answer with a tighter blackout inside the prison.', fa: 'یادداشت‌های اوین دو ماه جنگ و سرکوب را نشان می‌دهد.\nنگهبانان با قطعی شدیدتر داخل زندان پاسخ دادند.' }
  },
  {
      day: 59,
      theme: { en: 'Day 59 — Signals in the Dark', fa: 'روز ۵۹ — سیگنال‌ها در تاریکی' },
      brief: { en: 'Leaked messages suggest officials draft surrender language.\nThe harder question is whether the IRGC would allow it.', fa: 'پیام‌های لو رفته نشان می‌دهد مقامات زبان تسلیم را پیش‌نویس می‌کنند.\nسؤال سخت‌تر این است که آیا سپاه اجازه می‌دهد.' }
  },
  {
      day: 60,
      theme: { en: 'Day 60 — Surrender or Stand', fa: 'روز ۶۰ — تسلیم یا ایستادگی' },
      brief: { en: 'At sixty days, blockade and sporadic strikes still hold.\nIran\'s officials draft options; the IRGC decides what survives.', fa: 'در روز شصتم، محاصره و حملات پراکنده ادامه دارد.\nمقامات ایران گزینه‌ها را می‌نویسند؛ سپاه تصمیم می‌گیرد چه چیزی باقی بماند.' }
  }
];
