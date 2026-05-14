const FLAG_DATA = {
  CARRIER_GROUP: {
    title: { en: 'CARRIER GROUP', fa: 'ناوگان هواپیمابر' },
    desc: { en: 'US Navy carrier strike group deployed to the Persian Gulf. Projects American power and protects allied shipping.', fa: 'ناوگان هواپیمابر آمریکا در خلیج فارس مستقر شد. قدرت آمریکا را نشان می‌دهد.' },
    effects: [
      { side: 'irgc', text: { en: 'PROXY -2/turn', fa: 'نیابتی -۲/نوبت' } }
    ],
    perTurn: { proxy: -2 },
    position: { x: 1750, y: 1295 }
  },
  BLOCKADE: {
    title: { en: 'NAVAL BLOCKADE', fa: 'محاصره دریایی' },
    desc: { en: 'US-led blockade of Iranian oil exports through the Strait of Hormuz. Strangles regime revenue.', fa: 'محاصره صادرات نفت ایران از تنگه هرمز. درآمد رژیم را خفه می‌کند.' },
    effects: [
      { side: 'irgc', text: { en: 'CHEST -4/turn', fa: 'خزانه -۴/نوبت' } },
      { side: 'irgc', text: { en: 'Blocks SELL OIL card', fa: 'کارت فروش نفت را مسدود می‌کند' } }
    ],
    perTurn: { chest: -4 },
    position: { x: 1673, y: 1285 }
  },
  INTERNET_SHUTDOWN: {
    title: { en: 'INTERNET BLACKOUT', fa: 'قطعی اینترنت' },
    desc: { en: 'Regime has cut internet access nationwide. Prevents coordination of protests but also blocks their own propaganda.', fa: 'رژیم اینترنت را در سراسر کشور قطع کرده است. هماهنگی اعتراضات را جلوگیری می‌کند.' },
    effects: [
      { side: 'irgc', text: { en: 'Halves PROTEST/BASIJ drain', fa: 'تخلیه اعتراض/بسیج را نصف می‌کند' } },
      { side: 'neutral', text: { en: 'Negated by STARLINK', fa: 'توسط استارلینک خنثی می‌شود' } }
    ],
    perTurn: {},
    position: { x: 1545, y: 716 }
  },
  STARLINK: {
    title: { en: 'STARLINK ACTIVE', fa: 'استارلینک فعال' },
    desc: { en: 'Elon Musk has activated Starlink terminals over Iran. Protesters can coordinate despite the blackout.', fa: 'ایلان ماسک استارلینک را در ایران فعال کرده است. معترضان می‌توانند هماهنگ شوند.' },
    effects: [
      { side: 'irgc', text: { en: 'GRIP -2/turn', fa: 'کنترل -۲/نوبت' } },
      { side: 'trump', text: { en: 'Negates BLACKOUT', fa: 'قطعی را خنثی می‌کند' } }
    ],
    perTurn: { grip: -2 },
    position: { x: 1130, y: 667 }
  },
  IRAQI_PMF: {
    title: { en: 'IRAQI PMF DEPLOYED', fa: 'حشد الشعبی مستقر' },
    desc: { en: 'Iraqi Popular Mobilization Forces brought in to reinforce the regime. Foreign fighters loyal to Tehran.', fa: 'حشد الشعبی عراق برای تقویت رژیم آورده شدند. جنگجویان خارجی وفادار به تهران.' },
    effects: [
      { side: 'irgc', text: { en: 'GRIP +3/turn', fa: 'کنترل +۳/نوبت' } },
      { side: 'irgc', text: { en: 'ALLY -1/turn', fa: 'متحدان -۱/نوبت' } }
    ],
    perTurn: { grip: 3, all: -1 },
    position: { x: 1047, y: 504 }
  },
  FATEMIYOUN: {
    title: { en: 'FATEMIYOUN DEPLOYED', fa: 'فاطمیون مستقر' },
    desc: { en: 'Afghan Shia militia fighters imported to suppress protests. The regime cannot trust its own forces.', fa: 'شبه‌نظامیان شیعه افغان برای سرکوب اعتراضات. رژیم به نیروهای خودش اعتماد ندارد.' },
    effects: [
      { side: 'irgc', text: { en: 'GRIP +2/turn', fa: 'کنترل +۲/نوبت' } }
    ],
    perTurn: { grip: 2 },
    position: { x: 1794, y: 752 }
  },
  PROTESTS: {
    title: { en: 'MASS PROTESTS', fa: 'اعتراضات گسترده' },
    desc: { en: 'Major protests erupting across Iranian cities. The people are rising against the regime.', fa: 'اعتراضات بزرگ در شهرهای ایران. مردم علیه رژیم برمی‌خیزند.' },
    effects: [
      { side: 'irgc', text: { en: 'GRIP -3/turn', fa: 'کنترل -۳/نوبت' } }
    ],
    perTurn: { grip: -3 },
    position: { x: 1429, y: 1079 }
  },
  STRIKE: {
    title: { en: 'GENERAL STRIKE', fa: 'اعتصاب عمومی' },
    desc: { en: 'Workers across Iran have stopped working. Oil fields, factories, and bazaars stand empty.', fa: 'کارگران در سراسر ایران کار را متوقف کرده‌اند. میدان‌های نفتی، کارخانه‌ها و بازارها خالی هستند.' },
    effects: [
      { side: 'irgc', text: { en: 'CHEST -5/turn', fa: 'خزانه -۵/نوبت' } }
    ],
    perTurn: { chest: -5 },
    position: { x: 1349, y: 979 }
  },
  BASIJ_DEFECT: {
    title: { en: 'BASIJ DEFECTIONS', fa: 'انشعاب بسیج' },
    desc: { en: 'Basij militia members are refusing orders or switching sides. The regime\'s enforcers are cracking.', fa: 'اعضای بسیج از دستورات سرپیچی می‌کنند یا طرف عوض می‌کنند. مجریان رژیم ترک برمی‌دارند.' },
    effects: [
      { side: 'irgc', text: { en: 'GRIP -4/turn', fa: 'کنترل -۴/نوبت' } }
    ],
    perTurn: { grip: -4 },
    position: { x: 1725, y: 1073 }
  }
};