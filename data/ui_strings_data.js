// ════════════════════════════════════════════════════════════════════════════
// UI STRINGS - All button labels, headers, tooltips
// Bilingual format: { en: 'English', fa: 'فارسی' }
// ════════════════════════════════════════════════════════════════════════════

const UI = {
  // Title screen
  title: { en: 'SEE YOU IN FREE IRAN', fa: 'شیر نهفته' },
  subtitle: { en: 'Strategy Game of the Iranian Revolution', fa: 'بازی استراتژیک انقلاب ایران' },
  contentWarning: { en: 'This game depicts the atrocities of war and oppression.', fa: 'این بازی فجایع جنگ و سرکوب را به تصویر می‌کشد.' },
  notSuitable: { en: 'Not suitable for children.', fa: 'مناسب کودکان نیست.' },
  begin: { en: '▶ BEGIN', fa: '▶ شروع' },
  
  // Story screens
  skip: { en: '▶ SKIP', fa: '▶ رد کردن' },
  continue: { en: '▶ CONTINUE', fa: '▶ ادامه' },
  continueRight: { en: 'CONTINUE ▶', fa: 'ادامه ▶' },
  tracking: { en: '▶ TRACKING', fa: '▶ ردیابی' },
  selectYourSide: { en: '▶ SELECT YOUR SIDE', fa: '▶ طرف خود را انتخاب کنید' },
  
  // PDB screen
  classification: { en: 'TOP SECRET // SI // NOFORN', fa: 'فوق سری // اطلاعات حساس' },
  pdbTitle: { en: "PRESIDENT'S DAILY BRIEF", fa: 'خلاصه روزانه رئیس جمهور' },
  eyesOnly: { en: 'EYES ONLY', fa: 'فقط برای مشاهده' },
  pdbDate: { en: 'DATE:', fa: 'تاریخ:' },
  pdbSubject: { en: 'SUBJECT:', fa: 'موضوع:' },
  pdbPage: { en: 'PAGE', fa: 'صفحه' },
  pdbOf: { en: 'OF', fa: 'از' },
  pdbSource: { en: 'SOURCE:', fa: 'منبع:' },
  
  // Select screen
  chooseSide: { en: 'CHOOSE YOUR SIDE', fa: 'طرف خود را انتخاب کنید' },
  trumpName: { en: 'TRUMP', fa: 'ترامپ' },
  trumpDesc: { en: 'The madman strategy. Airstrikes, sanctions, and calculated chaos. Break the regime before they recover from the Strike.', fa: 'استراتژی دیوانه‌وار. حملات هوایی، تحریم‌ها و هرج‌ومرج حساب‌شده.' },
  irgcName: { en: 'IRGC', fa: 'سپاه' },
  irgcDesc: { en: "Vahidi's command. Propaganda, proxies, and desperate measures. The Supreme Leader is dead — survive at any cost.", fa: 'فرماندهی وحیدی. تبلیغات، نیروهای نیابتی و اقدامات ناامیدانه.' },
  
  // Game screen labels
  yourCards: { en: 'YOUR CARDS', fa: 'کارت‌های شما' },
  situationUpdate: { en: 'SITUATION UPDATE', fa: 'به‌روزرسانی وضعیت' },
  vs: { en: 'VS', fa: 'در مقابل' },
  nextDay: { en: 'NEXT DAY', fa: 'روز بعد' },
  
  // Navigation buttons
  prev: { en: '◀ PREV', fa: '◀ قبلی' },
  next: { en: 'NEXT ▶', fa: 'بعدی ▶' },
  back: { en: '◀ BACK', fa: '◀ بازگشت' },
  backToGrid: { en: '◀ BACK TO GRID', fa: '◀ بازگشت به شبکه' },
  
  // Briefing labels
  freeIranBriefing: { en: '▶ FREE IRAN BRIEFING', fa: '▶ آزادی ایران' },
  freeIran: { en: 'FREE IRAN', fa: 'آزادی ایران' },
  javidNam: { en: 'JAVID NAM', fa: 'جاوید نام' },
  javidNamSymbol: { en: '◆ JAVID NAM', fa: '◆ جاوید نام' },
  javidNamSubtitle: { en: '"ETERNAL NAME" — THE TERM IRANIANS USE TO HONOR THEIR FALLEN', fa: '«نام جاوید» — اصطلاحی که ایرانیان برای بزرگداشت عزیزان خود به کار می‌برند' },
  javidNamNote1: { en: 'Javid Nam reclaims martyrdom from the regime\'s religious framing — honoring the dead as eternal heroes of the now captive nation of Iran, not of the illegitimate Islamic Republic.', fa: 'جاوید نام، شهادت را از چارچوب مذهبی رژیم پس می‌گیرد — به یاد قهرمانان جاودان ملت، نه حکومت.' },
  javidNamNote2: { en: 'These are just a few stories from the hundreds of thousands killed, raped, tortured, and executed by the Islamic Republic since 1979.', fa: 'اینها تنها چند داستان از صدها هزار نفری است که از سال ۱۳۵۷ تاکنون توسط جمهوری اسلامی کشته، مورد تجاوز، شکنجه و اعدام شده‌اند.' },
  
  // Memorial detail labels
  age: { en: 'Age', fa: 'سن' },
  born: { en: 'BORN:', fa: 'تولد:' },
  imprisoned: { en: 'IMPRISONED', fa: 'زندانی' },
  currentlyImprisoned: { en: 'CURRENTLY IMPRISONED', fa: 'در حال حاضر زندانی است' },
  location: { en: 'Location:', fa: 'مکان:' },
  
  // Wildcard
  wildcard: { en: 'WILDCARD', fa: 'کارت وحشی' },
  
  // Consequences panel
  ongoing: { en: 'ONGOING', fa: 'در جریان' },
  blocked: { en: 'BLOCKED', fa: 'مسدود شده' },
  perTurn: { en: '/turn', fa: '/نوبت' },
  
  // Meters - Trump
  leverage: { en: 'LEVERAGE', fa: 'اهرم فشار' },
  leverageDesc: { en: "America's strategic position and ability to pressure the regime.", fa: 'موقعیت استراتژیک آمریکا و توانایی فشار بر رژیم.' },
  leverageUp: { en: '↑ Airstrikes, sanctions, chaos', fa: '↑ حملات هوایی، تحریم، هرج‌ومرج' },
  leverageDown: { en: '↓ Failed ops, overreach', fa: '↓ عملیات شکست‌خورده' },
  leverageWin: { en: 'IF ZERO: IRGC wins — leverage lost', fa: 'اگر صفر: سپاه برنده — اهرم از دست رفت' },
  
  politicalCap: { en: 'POLITICAL CAP', fa: 'سرمایه سیاسی' },
  politicalCapFull: { en: 'POLITICAL CAPITAL', fa: 'سرمایه سیاسی' },
  politicalCapDesc: { en: 'Domestic support and congressional backing for military action.', fa: 'حمایت داخلی و پشتیبانی کنگره برای اقدام نظامی.' },
  politicalCapUp: { en: '↑ Diplomacy, allied support', fa: '↑ دیپلماسی، حمایت متحدان' },
  politicalCapDown: { en: '↓ Aggressive actions, casualties', fa: '↓ اقدامات تهاجمی، تلفات' },
  politicalCapWin: { en: 'IF ZERO: IRGC wins — Congress pulls out', fa: 'اگر صفر: سپاه برنده — کنگره کنار می‌کشد' },
  
  allies: { en: 'ALLIES', fa: 'متحدان' },
  alliesFull: { en: 'ALLIED SUPPORT', fa: 'حمایت متحدان' },
  alliesDesc: { en: 'Coalition strength — Israel, Gulf states, and NATO backing.', fa: 'قدرت ائتلاف — اسرائیل، کشورهای خلیج و ناتو.' },
  alliesUp: { en: '↑ Diplomacy, shared ops', fa: '↑ دیپلماسی، عملیات مشترک' },
  alliesDown: { en: '↓ Unilateral action, PMF', fa: '↓ اقدام یک‌جانبه' },
  alliesWin: { en: 'IF ZERO: IRGC wins — coalition fractures', fa: 'اگر صفر: سپاه برنده — ائتلاف فرو می‌پاشد' },
  
  // Meters - IRGC
  regimeGrip: { en: 'REGIME GRIP', fa: 'کنترل رژیم' },
  regimeGripDesc: { en: "The regime's control over the population and security forces.", fa: 'کنترل رژیم بر مردم و نیروهای امنیتی.' },
  regimeGripUp: { en: '↑ Rallies, militias, crackdowns', fa: '↑ تجمعات، شبه‌نظامیان، سرکوب' },
  regimeGripDown: { en: '↓ Protests, defections, strikes', fa: '↓ اعتراضات، انشعاب، اعتصاب' },
  regimeGripWin: { en: 'IF ZERO: TRUMP wins — the lion rises', fa: 'اگر صفر: ترامپ برنده — شیر برمی‌خیزد' },
  
  warChest: { en: 'WAR CHEST', fa: 'خزانه جنگی' },
  warChestDesc: { en: 'Regime finances — oil revenue, frozen assets, smuggling networks.', fa: 'مالیه رژیم — درآمد نفت، دارایی‌های منجمد، شبکه‌های قاچاق.' },
  warChestUp: { en: '↑ Oil sales, allies', fa: '↑ فروش نفت، متحدان' },
  warChestDown: { en: '↓ Sanctions, blockade, strikes', fa: '↓ تحریم، محاصره، اعتصاب' },
  warChestWin: { en: 'IF ZERO: TRUMP wins — economic ruin', fa: 'اگر صفر: ترامپ برنده — ویرانی اقتصادی' },
  
  proxies: { en: 'PROXIES', fa: 'نیروهای نیابتی' },
  proxiesFull: { en: 'PROXY NETWORK', fa: 'شبکه نیابتی' },
  proxiesDesc: { en: "Iran's regional militias — Hezbollah, Houthis, PMF, Fatemiyoun.", fa: 'شبه‌نظامیان منطقه‌ای — حزب‌الله، حوثی‌ها، حشد، فاطمیون.' },
  proxiesUp: { en: '↑ Attacks, militia imports', fa: '↑ حملات، واردات شبه‌نظامی' },
  proxiesDown: { en: '↓ Airstrikes, carrier group', fa: '↓ حملات هوایی، ناوگان' },
  proxiesWin: { en: 'IF ZERO: TRUMP wins — axis severed', fa: 'اگر صفر: ترامپ برنده — محور قطع شد' },
  
  // Ending screen
  gameOver: { en: 'GAME OVER', fa: 'پایان بازی' },
  playAgain: { en: '▶ PLAY AGAIN', fa: '▶ بازی مجدد' },
  trumpWins: { en: 'TRUMP WINS', fa: 'ترامپ برنده شد' },
  irgcWins: { en: 'IRGC WINS', fa: 'سپاه برنده شد' },
  stalemateLabel: { en: 'STALEMATE', fa: 'بن‌بست' },
  
  // Day label
  day: { en: 'DAY', fa: 'روز' },
  
  // Card roster labels
  selectCard: { en: 'SELECT A CARD', fa: 'کارت انتخاب کنید' },
  enemyOptions: { en: 'ENEMY OPTIONS', fa: 'گزینه‌های دشمن' },
  
  // Bar abbreviations for tooltips/effects
  levAbbr: { en: 'LEVR', fa: 'اهرم' },
  polAbbr: { en: 'POL', fa: 'سیاسی' },
  allAbbr: { en: 'ALLY', fa: 'متحد' },
  gripAbbr: { en: 'GRIP', fa: 'کنترل' },
  chestAbbr: { en: 'CHEST', fa: 'خزانه' },
  proxyAbbr: { en: 'PROXY', fa: 'نیابت' },
  resolution: { en: 'RESOLUTION', fa: 'نتیجه' },
  cooldownDays: { en: 'd', fa: 'ر' },
  
  // Audio controls
  enableMusic: { en: '♪ ENABLE MUSIC', fa: '♪ فعال کردن موسیقی' },
  langToggleEn: { en: 'فارسی FARSI', fa: 'ENGLISH انگلیسی' },
};
