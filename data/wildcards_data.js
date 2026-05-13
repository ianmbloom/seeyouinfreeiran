const WILDCARDS = [
  {
      "portrait": "image/portrait/iranian_people/pahlavi.png",
      "character": {
          "en": "PAHLAVI",
          "fa": "پهلوی"
      },
      "name": {
          "en": "Address to the Nation",
          "fa": "خطاب به ملت"
      },
      "quote": {
          "en": "I do not seek a throne. I seek a free Iran.",
          "fa": "من تاج نمی‌خواهم. ایران آزاد می‌خواهم."
      },
      "effect": {
          "en": "GRIP -5, LEV +3",
          "fa": "کنترل -۵، اهرم +۳"
      }
  },
  {
      "portrait": "image/portrait/outsider/bibi.png",
      "character": {
          "en": "NETANYAHU",
          "fa": "نتانیاهو"
      },
      "name": {
          "en": "IDF Strike on Natanz",
          "fa": "حمله ارتش اسرائیل به نطنز"
      },
      "quote": {
          "en": "Striking the head of the octopus.",
          "fa": "ضربه به سر اختاپوس."
      },
      "effect": {
          "en": "CHEST -8, GRIP -4",
          "fa": "خزانه -۸، کنترل -۴"
      }
  },
  {
      "portrait": "image/portrait/anonymous_characters2/anon_oil_worker.png",
      "character": {
          "en": "DISSIDENT",
          "fa": "مخالف"
      },
      "name": {
          "en": "Oil Worker Strike",
          "fa": "اعتصاب کارگران نفت"
      },
      "quote": {
          "en": "When wages cannot buy bread, the regime bleeds.",
          "fa": "وقتی دستمزد نان نمی‌خرد، رژیم خون می‌ریزد."
      },
      "effect": {
          "en": "CHEST -10, GRIP -3",
          "fa": "خزانه -۱۰، کنترل -۳"
      }
  },
  {
      "portrait": "image/portrait/anonymous_characters2/anon_young_podcaster.png",
      "character": {
          "en": "DISSIDENT",
          "fa": "مخالف"
      },
      "name": {
          "en": "Smuggled Video Viral",
          "fa": "ویدیوی قاچاق ویروسی شد"
      },
      "quote": {
          "en": "Iran is waking up.",
          "fa": "ایران بیدار می‌شود."
      },
      "effect": {
          "en": "GRIP -4",
          "fa": "کنترل -۴"
      }
  },
  {
      "portrait": "image/portrait/anonymous_characters2/anon_former_basij.png",
      "character": {
          "en": "DISSIDENT",
          "fa": "مخالف"
      },
      "name": {
          "en": "Basij Defection Report",
          "fa": "گزارش انشعاب بسیج"
      },
      "quote": {
          "en": "Today I was the only person who reported to the resistance base in our local mosque. I won't be going to work tomorrow.",
          "fa": ""
      },
      "effect": {
          "en": "GRIP -5, LEV +3",
          "fa": "کنترل -۵، اهرم +۳"
      }
  },
  {
      "portrait": "image/portrait/outsider/putin.png",
      "character": {
          "en": "PUTIN",
          "fa": "پوتین"
      },
      "name": {
          "en": "S-400 Shipment",
          "fa": "محموله S-400"
      },
      "quote": {
          "en": "Mother Russia remembers her friends.",
          "fa": "مادر روسیه دوستانش را به یاد دارد."
      },
      "effect": {
          "en": "GRIP +4, ALLY -4",
          "fa": "کنترل +۴، متحدان -۴"
      }
  },
  {
      "portrait": "image/portrait/outsider/xi.png",
      "character": {
          "en": "XI JINPING",
          "fa": "شی جین‌پینگ"
      },
      "name": {
          "en": "Beijing Communique",
          "fa": "بیانیه پکن"
      },
      "quote": {
          "en": "The international order is crumbling into disarray. We should enhance communication, consolidate mutual trust, and cooperate closely to resist any regression toward the law of the jungle.",
          "fa": ""
      },
      "effect": {
          "en": "CHEST +3, ALLY -2",
          "fa": "خزانه +۳، متحدان -۲"
      }
  },
  {
      "portrait": "image/portrait/iranian_people/diaspora.png",
      "character": {
          "en": "CNN",
          "fa": "سی‌ان‌ان"
      },
      "name": {
          "en": "Cardboard Mojtaba Exposed",
          "fa": "مقوای مجتبی افشا شد"
      },
      "quote": {
          "en": "",
          "fa": "رهبر معظم یک مقواست."
      },
      "effect": {
          "en": "GRIP -15",
          "fa": "کنترل -۱۵"
      }
  },
  {
      "portrait": "image/portrait/outsider/rubio.png",
      "character": {
          "en": "AMOO LINDSEY",
          "fa": "لیندسی گراهام"
      },
      "name": {
          "en": "Senate Floor Speech",
          "fa": "سخنرانی در سنا"
      },
      "quote": {
          "en": "The Iranian people need a second amendment solution.",
          "fa": "وقت آن است که تمامش کنیم."
      },
      "effect": {
          "en": "POL +5, GRIP -3",
          "fa": "سیاسی +۵"
      }
  },
  {
      "portrait": "image/portrait/outsider/macron.png",
      "character": {
          "en": "MACRON",
          "fa": "مکرون"
      },
      "name": {
          "en": "EU Sanctions Wavering",
          "fa": "تزلزل تحریم‌های اروپا"
      },
      "quote": {
          "en": "Europe must chart its own course.",
          "fa": "اروپا باید مسیر خود را طی کند."
      },
      "effect": {
          "en": "ALLY -3",
          "fa": "متحدان -۳"
      }
  },
  {
      "portrait": "image/portrait/outsider/starmer.png",
      "character": {
          "en": "STARMER",
          "fa": "استارمر"
      },
      "name": {
          "en": "UK Backs Maximum Pressure",
          "fa": "حمایت بریتانیا از فشار حداکثری"
      },
      "quote": {
          "en": "Britain stands with the Iranian people.",
          "fa": "بریتانیا در کنار مردم ایران می‌ایستد."
      },
      "effect": {
          "en": "ALLY +4, POL +2",
          "fa": "متحدان +۴، سیاسی +۲"
      }
  },
  {
      "portrait": "image/portrait/outsider/zelensky.png",
      "character": {
          "en": "ZELENSKY",
          "fa": "زلنسکی"
      },
      "name": {
          "en": "Shahed Drone Evidence",
          "fa": "مدرک پهپاد شاهد"
      },
      "quote": {
          "en": "Every drone that kills my people was built in Tehran.",
          "fa": "هر پهپادی که مردم مرا می‌کشد در تهران ساخته شده."
      },
      "effect": {
          "en": "ALLY +3, PROXY -2",
          "fa": "متحدان +۳، نیابتی -۲"
      }
  },
  {
      "portrait": "image/portrait/outsider/opec.png",
      "character": {
          "en": "OPEC",
          "fa": "اوپک"
      },
      "name": {
          "en": "Production Increase",
          "fa": "افزایش تولید"
      },
      "quote": {
          "en": "The market will be stabilized.",
          "fa": "بازار تثبیت خواهد شد."
      },
      "effect": {
          "en": "CHEST -5",
          "fa": "خزانه -۵"
      }
  }
];