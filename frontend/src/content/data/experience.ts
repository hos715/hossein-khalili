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
    id: "graphay-barman",
    org: "barman-tech / Graphay",
    role: {
      en: "Freelance Frontend · Collaborating Studios",
      fa: "فریلنسر فرانت‌اند · استودیوهای همکار",
    },
    scope: {
      en: "Freelance frontend through barman-tech and Graphay — collaborating studios that brought the products, not companies I worked as. I owned the frontend implementation; other tech and design members were a team.",
      fa: "فریلنس فرانت‌اند از مسیر barman-tech و Graphay — استودیوهای همکاری که محصول را آوردند، نه کارفرمایی که «منِ شرکت» باشم. پیاده‌سازی فرانت‌اند با من بود؛ نقش‌های دیگر فنی و دیزاین تیمی بودند.",
    },
    highlights: [
      {
        en: "As a freelance frontend developer I built the full frontend for arz.me myself — public landing and authenticated exchange app (wallet, buy/sell, live prices, support) — through barman-tech / Graphay; other disciplines were a team.",
        fa: "به‌عنوان فریلنسر فرانت‌اند، کل فرانت‌اند arz.me را خودم ساختم — لندینگ عمومی و اپ لاگین‌شدهٔ صرافی (کیف پول، خرید/فروش، قیمت زنده، پشتیبانی) — از مسیر barman-tech / Graphay؛ نقش‌های دیگر تیمی بودند.",
      },
      {
        en: "Octopus AI — a Graphay freelance product, ChatGPT-like but more specialized at the time: generate video, Excel files, and research, plus plugins added by writing Python scripts (when that was not yet trivial in ChatGPT).",
        fa: "Octopus AI — پروژهٔ فریلنس Graphay، شبیه ChatGPT اما در آن زمان تخصصی‌تر: تولید ویدیو، فایل Excel و پژوهش، به‌علاوهٔ پلاگین با نوشتن اسکریپت Python (وقتی هنوز در ChatGPT ساده نبود).",
      },
      {
        en: "Adgame Telegram mini-app front-end — Telegram SDK, TON Connect wallet UI, ads/referral surfaces.",
        fa: "فرانت‌اند مینی‌اپ تلگرام Adgame — Telegram SDK، UI کیف پول TON Connect، سطوح تبلیغات/رفرال.",
      },
      {
        en: "Detifi — a Graphay AI crypto-research product (insights, chatbot, landing) that was stopped; same founder as Graphay. Frontend only, not a separate employer.",
        fa: "Detifi — محصول پژوهشی کریپتو Graphay (insights، چت‌بات، لندینگ) که ادامه پیدا نکرد؛ همان بنیان‌گذار Graphay. فقط فرانت‌اند، نه کارفرمای جدا.",
      },
      {
        en: "Ongoing freelance frontend on Graphay React products.",
        fa: "ادامهٔ فریلنس فرانت‌اند روی محصولات React در Graphay.",
      },
    ],
  },
  {
    id: "techsnovel",
    org: "Techsnovel",
    role: {
      en: "Frontend Developer · Contract",
      fa: "توسعه‌دهنده فرانت‌اند · قراردادی",
    },
    scope: {
      en: "Frontend for an AI shopping-guide bot for e-commerce stores, shipped as a Wix plugin — not merged with Graphay Octopus work.",
      fa: "فرانت‌اند دستیار خرید AI برای فروشگاه‌های اینترنتی، به‌صورت پلاگین Wix — جدا از کار Octopus در Graphay.",
    },
    highlights: [
      {
        en: "The bot uses the store’s products plus defined rules and extra rules the merchant adds, so guidance is store-specific — to speed sales and walk the customer through buying.",
        fa: "بات از محصولات همان فروشگاه به‌علاوهٔ قوانین تعریف‌شده و قوانین اضافه‌ای که فروشنده می‌گذارد استفاده می‌کند تا راهنمایی مخصوص همان فروشگاه باشد — برای تسریع فروش و هدایت مشتری در مسیر خرید.",
      },
      {
        en: "Real-time chat UI with SignalR — typing indicators, message queue, and RBAC-aware roles (React, TypeScript, Zustand).",
        fa: "UI چت بلادرنگ با SignalR — نشانگر تایپ، صف پیام و نقش‌های آگاه از RBAC (React، TypeScript، Zustand).",
      },
    ],
  },
  {
    id: "collaborations",
    org: "Collaborations",
    role: {
      en: "Freelance Frontend · Exchanges, Panels & Product UI",
      fa: "فریلنسر فرانت‌اند · صرافی، پنل و UI محصول",
    },
    scope: {
      en: "Further freelance frontend across exchange UIs, admin consoles, Telegram/PWA surfaces, and product work — credit and ongoing support vary by product.",
      fa: "فریلنس فرانت‌اند بیشتر روی UI صرافی، کنسول ادمین، سطوح تلگرام/PWA و کار محصول — میزان مالکیت و پشتیبانی جاری بسته به محصول فرق می‌کند.",
    },
    highlights: [
      {
        en: "SwapNet — I built the full frontend myself (landing, Telegram/PWA panel, admin) and still continue tech-side support: features, bugfixes, and frontend improvements.",
        fa: "SwapNet — کل فرانت‌اند را خودم ساختم (لندینگ، پنل تلگرام/PWA، ادمین) و هنوز پشتیبانی فنی را ادامه می‌دهم: فیچر، رفع باگ و بهبود فرانت‌اند.",
      },
      {
        en: "xpay.co and VisaPay — historical frontend contribution (not a from-scratch sole-author build). I still continue tech-side support on both: features, bugfixes, and frontend improvements.",
        fa: "xpay.co و VisaPay — مشارکت تاریخی در فرانت‌اند (نه ساخت انحصاری از صفر). هنوز پشتیبانی فنی هر دو را ادامه می‌دهم: فیچر، رفع باگ و بهبود فرانت‌اند.",
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
