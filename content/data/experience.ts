export type ExperienceEntry = {
  id: string;
  org: string;
  role: { en: string; fa: string };
  period?: { en: string; fa: string };
  scope: { en: string; fa: string };
  highlights: { en: string; fa: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "barman-tech",
    org: "barman-tech",
    role: {
      en: "Front-End Architecture · Crypto Exchange",
      fa: "معماری فرانت‌اند · صرافی ارز دیجیتال",
    },
    scope: {
      en: "Led front-end architecture for a production crypto exchange — trading, wallet, reporting, and real-time markets.",
      fa: "معماری فرانت‌اند یک صرافی کریپتو در production — ترید، کیف پول، گزارش‌گیری و بازار بلادرنگ.",
    },
    highlights: [
      {
        en: "Built front-end architecture from scratch for arz.me — landing, trading, wallet, and reporting.",
        fa: "معماری فرانت‌اند صرافی arz.me از صفر — لندینگ، ترید، کیف پول و گزارش‌گیری.",
      },
      {
        en: "Implemented WebSocket / Socket.io live prices and complex trade/wallet UI state.",
        fa: "پیاده‌سازی قیمت لحظه‌ای WebSocket / Socket.io و state پیچیدهٔ ترید/کیف پول.",
      },
      {
        en: "Coordinated API contracts with backend while shipping authenticated exchange surfaces.",
        fa: "هماهنگی قراردادهای API با بک‌اند در کنار تحویل سطوح لاگین‌شدهٔ صرافی.",
      },
    ],
  },
  {
    id: "graphay",
    org: "graphay",
    role: {
      en: "Front-End · AI & Real-Time Products",
      fa: "فرانت‌اند · محصولات AI و بلادرنگ",
    },
    scope: {
      en: "Front-end for AI chatbots, image-processing integrations, and related product delivery — including Telegram mini-app work.",
      fa: "فرانت‌اند چت‌بات‌های AI، یکپارچه‌سازی پردازش تصویر و تحویل محصول مرتبط — از جمله کار مینی‌اپ تلگرام.",
    },
    highlights: [
      {
        en: "Chatbot platforms with Llama and OpenAI — real-time UI, architecture, and feature delivery.",
        fa: "پلتفرم چت‌بات با Llama و OpenAI — UI بلادرنگ، معماری و تحویل فیچر.",
      },
      {
        en: "Image processing integrations and project startup from design to production fixes.",
        fa: "یکپارچه‌سازی پردازش تصویر و راه‌اندازی پروژه از طراحی تا رفع باگ production.",
      },
      {
        en: "Adgame Telegram mini-app front-end — Telegram SDK, TON Connect wallet UI, ads/referral surfaces.",
        fa: "فرانت‌اند مینی‌اپ تلگرام Adgame — Telegram SDK، UI کیف پول TON Connect، سطوح تبلیغات/رفرال.",
      },
    ],
  },
  {
    id: "collaborations",
    org: "Collaborations",
    role: {
      en: "Front-End · Exchanges, Panels & Product UI",
      fa: "فرانت‌اند · صرافی، پنل و UI محصول",
    },
    scope: {
      en: "Contributed across exchange UIs, admin consoles, Telegram/PWA surfaces, and product work for multiple teams.",
      fa: "مشارکت در UI صرافی، کنسول ادمین، سطوح تلگرام/PWA و کار محصول برای تیم‌های مختلف.",
    },
    highlights: [
      {
        en: "XPay, VisaPay, SwapNet, and related exchange UIs — user panels, admin consoles, landings, and Telegram/PWA surfaces.",
        fa: "XPay، VisaPay، SwapNet و UIهای صرافی مرتبط — پنل کاربر، ادمین، لندینگ و سطوح تلگرام/PWA.",
      },
      {
        en: "Ketabfeed WooCommerce theme customization and other shop/storefront work where needed.",
        fa: "سفارشی‌سازی تم WooCommerce کتاب‌فید و کار فروشگاهی/استورفرانت در صورت نیاز.",
      },
      {
        en: "Takanesh Academy and others — Figma implementation, performance, and feature work on existing apps.",
        fa: "Takanesh Academy و پروژه‌های دیگر — پیاده‌سازی Figma، بهینه‌سازی و توسعه فیچر.",
      },
    ],
  },
];
