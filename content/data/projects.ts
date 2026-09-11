export type Project = {
  slug: string;
  featured: boolean;
  url?: string;
  /** Internal / NDA work — no public marketing URL; show a confidential note instead of a missing link. */
  confidential?: boolean;
  stack: string[];
  category: { en: string; fa: string };
  title: { en: string; fa: string };
  summary: { en: string; fa: string };
  problem: { en: string; fa: string };
  role: { en: string; fa: string };
  keyWork: { en: string; fa: string }[];
  outcome: { en: string; fa: string };
};

export const projects: Project[] = [
  {
    slug: "arz-me",
    featured: true,
    url: "https://arz.me",
    stack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Socket.io",
      "Tailwind CSS",
    ],
    category: { en: "Real-Time Trading", fa: "ترید بلادرنگ" },
    title: { en: "Crypto Exchange — arz.me", fa: "صرافی ارز — arz.me" },
    summary: {
      en: "Full frontend I built myself — landing plus authenticated exchange (wallet, buy/sell, live prices) — freelance through barman-tech / Graphay.",
      fa: "کل فرانت‌اند را خودم ساختم — لندینگ به‌علاوهٔ صرافی لاگین‌شده (کیف پول، خرید/فروش، قیمت زنده) — فریلنس از مسیر barman-tech / Graphay.",
    },
    problem: {
      en: "Users needed both a public, SEO-friendly landing and a reliable authenticated trading surface. Live market prices and wallet state had to stay consistent across pages without fragile refresh hacks — and the front-end had to coordinate cleanly with backend services.",
      fa: "کاربر هم به لندینگ عمومی و SEO-friendly نیاز داشت، هم به فضای ترید لاگین‌شدهٔ قابل اعتماد. قیمت زندهٔ بازار و وضعیت کیف پول باید بین صفحات پایدار می‌ماند — بدون ترفندهای شکنندهٔ رفرش — و فرانت‌اند باید با سرویس‌های بک‌اند هماهنگ کار می‌کرد.",
    },
    role: {
      en: "As a freelance frontend developer I built the full frontend for arz.me myself — public landing and authenticated exchange app — through barman-tech / Graphay; other tech and design members were a team. Socket.io market feeds, trading and wallet flows, and shared state with Zustand and TanStack Query, while coordinating API contracts with backend.",
      fa: "به‌عنوان فریلنسر فرانت‌اند، کل فرانت‌اند arz.me را خودم ساختم — لندینگ عمومی و اپ لاگین‌شدهٔ صرافی — از مسیر barman-tech / Graphay؛ نقش‌های دیگر فنی و دیزاین تیمی بودند. فید بازار Socket.io، فلوهای ترید و کیف پول، و state مشترک با Zustand و TanStack Query، به‌همراه هماهنگی قراردادهای API با بک‌اند.",
    },
    keyWork: [
      {
        en: "Front-end architecture for marketing landing and authenticated exchange app",
        fa: "معماری فرانت‌اند لندینگ مارکتینگ و اپ لاگین‌شدهٔ صرافی",
      },
      {
        en: "Socket.io live market feeds wired into trading and wallet UI state",
        fa: "فید زندهٔ بازار Socket.io متصل به state ترید و کیف پول",
      },
      {
        en: "Buy/sell, wallet, live prices, and support flows with Zustand + TanStack Query",
        fa: "فلوهای خرید/فروش، کیف پول، قیمت لحظه‌ای و پشتیبانی با Zustand و TanStack Query",
      },
      {
        en: "API contract coordination with backend services",
        fa: "هماهنگی قراردادهای API با سرویس‌های بک‌اند",
      },
    ],
    outcome: {
      en: "Production arz.me spans public marketing pages and a dashboard with live market updates and complex trade/wallet UI state — a real exchange surface, not a brochure site.",
      fa: "arz.me در production هم صفحات مارکتینگ عمومی دارد، هم داشبوردی با به‌روزرسانی زندهٔ بازار و state پیچیدهٔ ترید/کیف پول — یک سطح واقعی صرافی، نه فقط سایت معرفی.",
    },
  },
  {
    slug: "xpay",
    featured: true,
    url: "https://xpay.co",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Ant Design",
      "SignalR",
    ],
    category: { en: "Multi-Surface Exchange", fa: "صرافی چندسطحی" },
    title: { en: "Crypto Exchange — xpay.co", fa: "صرافی ارز — xpay.co" },
    summary: {
      en: "User trading SPA, ops admin, and digital receipts — historical team contribution, plus ongoing tech-side support.",
      fa: "SPA ترید کاربر، ادمین عملیات و رسید دیجیتال — مشارکت تاریخی تیمی، به‌علاوهٔ پشتیبانی فنی جاری.",
    },
    problem: {
      en: "Traders and operators need different UIs — wallet, spot/markets, gifts, support tickets — while sharing the same real-time market and order data. The product also needed a public digital-receipt surface and branded maintenance/error pages, all in an RTL/Jalali-friendly experience.",
      fa: "تریدر و اپراتور به UIهای متفاوت نیاز دارند — کیف پول، اسپات/بازار، هدیه، تیکت پشتیبانی — در حالی که دادهٔ لحظه‌ای بازار و سفارش مشترک است. محصول همچنین به سطح عمومی رسید دیجیتال و صفحات خطای برندشده نیاز داشت؛ همه در تجربهٔ راست‌چین و جلالی‌پسند.",
    },
    role: {
      en: "Contributed frontend across the user app (app.xpay.co), admin console, and public receipt viewer (viral-team) — not a from-scratch sole-author build. I still continue tech-side support: features, bugfixes, and frontend improvements. SignalR live updates, Redux Toolkit, Ant Design; RTL and Jalali date UX.",
      fa: "در فرانت‌اند اپ کاربر (app.xpay.co)، کنسول ادمین و نمایشگر عمومی رسید مشارکت کردم (viral-team) — نه ساخت انحصاری از صفر. هنوز پشتیبانی فنی را ادامه می‌دهم: فیچر، رفع باگ و بهبود فرانت‌اند. به‌روزرسانی زندهٔ SignalR، Redux Toolkit، Ant Design؛ UX راست‌چین و تاریخ جلالی.",
    },
    keyWork: [
      {
        en: "User trading SPA at app.xpay.co — wallet, markets, gifts, support",
        fa: "SPA ترید کاربر در app.xpay.co — کیف پول، بازار، هدیه، پشتیبانی",
      },
      {
        en: "Ops admin console with dense Ant Design screens",
        fa: "کنسول ادمین عملیات با صفحه‌های فشردهٔ Ant Design",
      },
      {
        en: "Public digital-receipt viewer and branded error/maintenance pages",
        fa: "نمایشگر عمومی رسید دیجیتال و صفحات خطا/نگهداری برندشده",
      },
      {
        en: "SignalR live updates and Redux Toolkit client state; RTL + Jalali UX",
        fa: "به‌روزرسانی زندهٔ SignalR و state کلاینت با Redux Toolkit؛ UX راست‌چین و جلالی",
      },
    ],
    outcome: {
      en: "A multi-surface XPay front-end at xpay.co / app.xpay.co: trading UI for users, tools for ops, and shareable payment receipts — plus branded error/maintenance pages. I still support the product from the tech side.",
      fa: "فرانت‌اند چندسطحی XPay در xpay.co / app.xpay.co: UI ترید برای کاربر، ابزار برای عملیات، و رسید پرداخت قابل اشتراک — به‌همراه صفحات خطا/نگهداری برندشده. هنوز از سمت فنی از محصول پشتیبانی می‌کنم.",
    },
  },
  {
    slug: "ecommerce-multi-panel",
    featured: true,
    confidential: true,
    stack: ["Next.js", "Redux", "PWA", "TypeScript"],
    category: { en: "Multi-Role Commerce", fa: "فروشگاه چندنقشی" },
    title: { en: "Multi-Panel E-Commerce", fa: "فروشگاه چندپنلی" },
    summary: {
      en: "Admin, warehouse, basket-picker, postman, storefront, and PWA — shared orders, role-specific UIs.",
      fa: "ادمین، انبار، انتخاب‌گر سبد، پستچی، فروشگاه و PWA — سفارش مشترک، UI نقش‌محور.",
    },
    problem: {
      en: "Ops teams need separate panels (admin, warehouse, basket-picker, postman) while sharing one product and order domain. Customers need a storefront — including PWA — that does not expose internal tooling density.",
      fa: "تیم عملیات به پنل‌های جدا (ادمین، انبار، انتخاب‌گر سبد، پستچی) نیاز دارد در حالی که دامنهٔ محصول و سفارش یکی است. مشتری به فروشگاهی نیاز دارد — از جمله PWA — که تراکم ابزار داخلی را نشان ندهد.",
    },
    role: {
      en: "Built front-end panels and storefront with Next.js and Redux across complex operational flows. Focused on role-specific dashboards and keeping client state coherent as orders move between panels.",
      fa: "پنل‌ها و فروشگاه را با Next.js و Redux در فلوهای عملیاتی پیچیده ساختم. تمرکز روی داشبوردهای نقش‌محور و حفظ انسجام state کلاینت وقتی سفارش بین پنل‌ها جابه‌جا می‌شود.",
    },
    keyWork: [
      {
        en: "Role-specific panels: admin, warehouse, basket-picker, postman",
        fa: "پنل‌های نقش‌محور: ادمین، انبار، انتخاب‌گر سبد، پستچی",
      },
      {
        en: "Customer storefront and PWA on a shared order domain",
        fa: "فروشگاه مشتری و PWA روی دامنهٔ مشترک سفارش",
      },
      {
        en: "Redux client state kept coherent as orders move between panels",
        fa: "حفظ انسجام state کلاینت Redux وقتی سفارش بین پنل‌ها جابه‌جا می‌شود",
      },
    ],
    outcome: {
      en: "A multi-panel ops platform with a PWA storefront and role-specific dashboards. Confidential client work (NDA) — no public marketing URL, and no client name to list.",
      fa: "پلتفرم عملیات چندپنلی با فروشگاه PWA و داشبوردهای نقش‌محور. کار محرمانهٔ مشتری (NDA) — بدون URL عمومی مارکتینگ و بدون نام مشتری برای انتشار.",
    },
  },
  {
    slug: "visapay",
    featured: false,
    url: "https://visapay.me",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Ant Design",
      "Tailwind CSS",
    ],
    category: { en: "Exchange + Admin", fa: "صرافی و ادمین" },
    title: { en: "Crypto Exchange — VisaPay", fa: "صرافی ارز — VisaPay" },
    summary: {
      en: "Marketing site and user panel paired with a denser Ant Design ops admin — wallet, trade, support.",
      fa: "سایت مارکتینگ و پنل کاربر در کنار ادمین فشرده‌تر Ant Design — کیف پول، ترید، پشتیبانی.",
    },
    problem: {
      en: "One exchange product needed a public marketing/trade-facing site and a separate internal console for users, wallets, markets, and support. Customer and ops surfaces had to feel like one product without sharing the wrong UI density.",
      fa: "یک محصول صرافی به سایت عمومی مارکتینگ/ترید و کنسول داخلی جدا برای کاربران، کیف پول، بازار و پشتیبانی نیاز داشت. سطح مشتری و عملیات باید حس یک محصول واحد می‌داد، بدون اینکه تراکم UI اشتباه را به هم قرض بدهند.",
    },
    role: {
      en: "Contributed frontend for the Next.js user site/panel and the Vite Ant Design admin (viral-team) — team contribution, not sole ownership. I still continue tech-side support: features, bugfixes, and frontend improvements.",
      fa: "در فرانت‌اند سایت/پنل Next.js کاربر و داشبورد ادمین Vite با Ant Design مشارکت کردم (viral-team) — مشارکت تیمی، نه مالکیت انحصاری. هنوز پشتیبانی فنی را ادامه می‌دهم: فیچر، رفع باگ و بهبود فرانت‌اند.",
    },
    keyWork: [
      {
        en: "Next.js marketing/user panel modules — wallet, trade, support",
        fa: "ماژول‌های پنل مارکتینگ/کاربر Next.js — کیف پول، ترید، پشتیبانی",
      },
      {
        en: "Vite Ant Design admin console for ops (team contribution)",
        fa: "کنسول ادمین Vite / Ant Design برای عملیات (مشارکت تیمی)",
      },
    ],
    outcome: {
      en: "Paired customer and admin surfaces for VisaPay at visapay.me — public exchange UI alongside a denser back-office console. I still support the product from the tech side.",
      fa: "سطوح جفت مشتری و ادمین برای VisaPay در visapay.me — UI عمومی صرافی در کنار کنسول فشرده‌تر بک‌آفیس. هنوز از سمت فنی از محصول پشتیبانی می‌کنم.",
    },
  },
  {
    slug: "swapnet",
    featured: false,
    url: "https://swapnet.app",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Vite",
      "PWA",
      "Telegram Mini Apps",
      "Ant Design",
    ],
    category: { en: "Telegram / PWA Trading", fa: "ترید تلگرام / PWA" },
    title: { en: "Crypto Exchange — SwapNet", fa: "صرافی ارز — SwapNet" },
    summary: {
      en: "SEO landing, Telegram/PWA trading panel, and Ant Design admin — three entry points, one exchange domain.",
      fa: "لندینگ SEO، پنل ترید تلگرام/PWA و ادمین Ant Design — سه نقطهٔ ورود، یک دامنهٔ صرافی.",
    },
    problem: {
      en: "Discovery happens on a marketing site, but most trading happens inside a Telegram-oriented PWA panel. Ops still need a full admin console for markets, users, and support — three surfaces, one product domain.",
      fa: "کشف محصول از لندینگ مارکتینگ شروع می‌شود، اما بخش عمدهٔ ترید داخل پنل PWA مبتنی بر تلگرام است. عملیات همچنان به کنسول ادمین کامل برای بازار، کاربران و پشتیبانی نیاز دارد — سه سطح، یک دامنهٔ محصول.",
    },
    role: {
      en: "I built the full frontend myself — Next.js landing, Vite+PWA user panel (markets, wallet, history), and Ant Design admin (viral-team). I still continue tech-side support alongside xpay and VisaPay: features, bugfixes, and frontend improvements.",
      fa: "کل فرانت‌اند را خودم ساختم — لندینگ Next.js، پنل کاربر Vite+PWA (بازار، کیف پول، تاریخچه) و ادمین Ant Design (viral-team). هنوز پشتیبانی فنی را در کنار xpay و VisaPay ادامه می‌دهم: فیچر، رفع باگ و بهبود فرانت‌اند.",
    },
    keyWork: [
      {
        en: "Next.js SEO marketing landing",
        fa: "لندینگ مارکتینگ SEO با Next.js",
      },
      {
        en: "Vite + PWA trading panel — markets, wallet, history",
        fa: "پنل ترید Vite + PWA — بازار، کیف پول، تاریخچه",
      },
      {
        en: "Ant Design ops admin for markets, users, and support",
        fa: "ادمین عملیات Ant Design برای بازار، کاربران و پشتیبانی",
      },
    ],
    outcome: {
      en: "End-to-end SwapNet UI — SEO landing, Telegram mini-app style trading, and back-office ops — at swapnet.app. Full frontend build, with ongoing tech-side support.",
      fa: "UI سرتاسری SwapNet — لندینگ SEO، ترید شبیه مینی‌اپ تلگرام و عملیات بک‌آفیس — در swapnet.app. ساخت کامل فرانت‌اند، به‌همراه پشتیبانی فنی جاری.",
    },
  },
  {
    slug: "adgame",
    featured: false,
    url: "https://miniapp.adgame.fun",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Telegram Mini Apps",
      "TON Connect",
    ],
    category: { en: "Telegram Mini App", fa: "مینی‌اپ تلگرام" },
    title: { en: "Adgame — Telegram Mini App", fa: "Adgame — مینی‌اپ تلگرام" },
    summary: {
      en: "Tap/leaderboard loops, ads, referral, and TON Connect wallet — built for the Telegram mini-app shell.",
      fa: "حلقه‌های tap/لیدربورد، تبلیغات، رفرال و کیف پول TON Connect — برای پوستهٔ مینی‌اپ تلگرام.",
    },
    problem: {
      en: "Engagement had to live inside Telegram: short game-like loops, ads, and referrals — while wallet and admin views handled TON-connected balances and withdrawals. The UI had to feel native to the mini-app shell, not like a bolted-on web page.",
      fa: "درگیری کاربر باید داخل تلگرام اتفاق می‌افتاد: حلقه‌های کوتاه بازی‌مانند، تبلیغات و رفرال — در حالی که ویوهای کیف پول و ادمین موجودی و برداشت متصل به TON را مدیریت می‌کردند. UI باید حس بومی مینی‌اپ می‌داد، نه صفحهٔ وب وصله‌شده.",
    },
    role: {
      en: "Built the React / Vite mini-app front-end (graphay context): Telegram SDK integration, wallet views with TON Connect, and admin/ads surfaces with Zustand and TanStack Query.",
      fa: "فرانت‌اند مینی‌اپ React / Vite را ساختم (زمینهٔ graphay): یکپارچه‌سازی Telegram SDK، ویوهای کیف پول با TON Connect، و سطوح ادمین/تبلیغات با Zustand و TanStack Query.",
    },
    keyWork: [
      {
        en: "Telegram SDK integration and mini-app-native UX",
        fa: "یکپارچه‌سازی Telegram SDK و UX بومی مینی‌اپ",
      },
      {
        en: "TON Connect wallet views for balances and withdrawals",
        fa: "ویوهای کیف پول TON Connect برای موجودی و برداشت",
      },
      {
        en: "Ads, referral, and leaderboard surfaces with Zustand + TanStack Query",
        fa: "سطوح تبلیغات، رفرال و لیدربورد با Zustand و TanStack Query",
      },
    ],
    outcome: {
      en: "Live Telegram mini-app at miniapp.adgame.fun with TON Connect, referral, and leaderboard flows — a complete engagement + wallet UI inside Telegram.",
      fa: "مینی‌اپ زندهٔ تلگرام در miniapp.adgame.fun با TON Connect، رفرال و لیدربورد — UI کامل درگیری + کیف پول داخل تلگرام.",
    },
  },
  {
    slug: "techsnovel-chatbot",
    featured: false,
    url: "https://www.teechats.com",
    stack: ["React", "TypeScript", "Zustand", "SignalR"],
    category: { en: "AI Shopping Guide", fa: "دستیار خرید AI" },
    title: { en: "AI Shopping Guide — Techsnovel", fa: "دستیار خرید AI — Techsnovel" },
    summary: {
      en: "AI shopping-guide bot for e-commerce stores, as a Wix plugin — store catalog plus merchant rules, not a generic support widget.",
      fa: "بات دستیار خرید AI برای فروشگاه‌های اینترنتی، به‌صورت پلاگین Wix — کاتالوگ فروشگاه به‌علاوهٔ قوانین فروشنده، نه ویجت عمومی پشتیبانی.",
    },
    problem: {
      en: "E-commerce stores needed a store-specific shopping assistant: the bot should know that shop’s products, follow defined rules, and accept extra rules the merchant adds — so it can guide the customer through buying and speed up sales. Real-time chat still had to feel instant (queued messages, typing indicators, roles).",
      fa: "فروشگاه‌ها به دستیار خریدی مخصوص همان فروشگاه نیاز داشتند: بات باید محصولات همان شاپ را بشناسد، قوانین تعریف‌شده را رعایت کند و قوانین اضافه‌ای که فروشنده می‌گذارد بپذیرد — تا مشتری را در مسیر خرید هدایت کند و فروش را تسریع کند. چت بلادرنگ همچنان باید حس فوری می‌داد (صف پیام، نشانگر تایپ، نقش‌ها).",
    },
    role: {
      en: "Frontend for the Techsnovel shopping-guide product (teechats.com) as a Wix plugin — React, TypeScript, Zustand, and SignalR. Separate engagement from Graphay Octopus work.",
      fa: "فرانت‌اند محصول دستیار خرید Techsnovel (teechats.com) به‌صورت پلاگین Wix — React، TypeScript، Zustand و SignalR. قراردادی جدا از کار Octopus در Graphay.",
    },
    keyWork: [
      {
        en: "Wix-plugin shopping assistant driven by the store’s catalog and merchant-defined rules",
        fa: "دستیار خرید پلاگین Wix بر پایهٔ کاتالوگ فروشگاه و قوانین تعریف‌شدهٔ فروشنده",
      },
      {
        en: "Real-time chat UI with SignalR delivery, typing indicators, and message-queue state (Zustand)",
        fa: "UI چت بلادرنگ با تحویل SignalR، نشانگر تایپ و state صف پیام (Zustand)",
      },
      {
        en: "RBAC-aware interaction patterns for different roles",
        fa: "الگوهای تعامل آگاه از RBAC برای نقش‌های مختلف",
      },
    ],
    outcome: {
      en: "Store-specific shopping-guide bot at teechats.com — a Wix plugin that walks customers through buying using that shop’s products and rules.",
      fa: "بات دستیار خرید مخصوص فروشگاه در teechats.com — پلاگین Wix که مشتری را با محصولات و قوانین همان شاپ در مسیر خرید هدایت می‌کند.",
    },
  },
  {
    slug: "pars-data-marketplace",
    featured: false,
    url: "https://www.parsdata.com",
    stack: ["React", "Next.js", "TypeScript"],
    category: { en: "Marketplace", fa: "مارکت‌پلیس" },
    title: { en: "Marketplace — Pars Data", fa: "مارکت‌پلیس — Pars Data" },
    summary: {
      en: "Listings, seller dashboard, and multi-step checkout — buyer and seller journeys on one catalog.",
      fa: "لیستینگ، داشبورد فروشنده و checkout چندمرحله‌ای — مسیر خریدار و فروشنده روی یک کاتالوگ.",
    },
    problem: {
      en: "A marketplace needs distinct buyer and seller journeys without duplicating catalog logic. Listings, seller tools, and multi-step checkout had to stay coherent as one product domain.",
      fa: "مارکت‌پلیس به مسیر خریدار و فروشندهٔ مجزا نیاز دارد بدون تکرار منطق کاتالوگ. لیستینگ، ابزار فروشنده و checkout چندمرحله‌ای باید به‌عنوان یک دامنهٔ محصول منسجم بمانند.",
    },
    role: {
      en: "Front-end for listings, seller dashboard tools, and multi-step checkout flows on React / Next.js / TypeScript — focused on clear step UX and shared catalog surfaces.",
      fa: "فرانت‌اند لیستینگ، ابزار داشبورد فروشنده و فلوهای checkout چندمرحله‌ای روی React / Next.js / TypeScript — با تمرکز روی UX روشن مراحل و سطوح مشترک کاتالوگ.",
    },
    keyWork: [
      {
        en: "Product listing and catalog surfaces",
        fa: "لیستینگ محصول و سطوح کاتالوگ",
      },
      {
        en: "Seller dashboard tools",
        fa: "ابزار داشبورد فروشنده",
      },
      {
        en: "Multi-step checkout with clear step UX",
        fa: "checkout چندمرحله‌ای با UX روشن مراحل",
      },
    ],
    outcome: {
      en: "Complete marketplace UI at parsdata.com with a seller dashboard and guided multi-step checkout.",
      fa: "UI کامل مارکت‌پلیس در parsdata.com با داشبورد فروشنده و checkout چندمرحله‌ای هدایت‌شده.",
    },
  },
  {
    slug: "arsal-hypermarket-pwa",
    featured: false,
    stack: ["Next.js", "Tailwind CSS", "PWA"],
    category: { en: "Offline PWA", fa: "PWA آفلاین" },
    title: {
      en: "Ronda24 Hypermarket PWA (Arsal Web)",
      fa: "هایپرمارکت PWA راندا۲۴ (Arsal Web)",
    },
    summary: {
      en: "Ronda24 hypermarket PWA (Arsal Web) — offline-capable customer shopping plus a logistics dashboard.",
      fa: "PWA هایپرمارکت راندا۲۴ (Arsal Web) — خرید مشتری با قابلیت آفلاین به‌همراه داشبورد لجستیک.",
    },
    problem: {
      en: "Retail customers and logistics staff need reliable access even when connectivity is unstable. The storefront and ops panels had to work as a PWA so core shopping and logistics flows stay usable on flaky networks.",
      fa: "مشتری خرده‌فروشی و کارکنان لجستیک به دسترسی پایدار نیاز دارند حتی وقتی اتصال ناپایدار است. فروشگاه و پنل عملیات باید به‌صورت PWA کار کنند تا فلوهای اصلی خرید و لجستیک روی شبکهٔ ناپایدار قابل استفاده بمانند.",
    },
    role: {
      en: "Built the Ronda24 hypermarket PWA (Arsal Web) storefront and operational panels with Next.js and Tailwind — customer shopping flows alongside logistics dashboard views.",
      fa: "فروشگاه PWA هایپرمارکت راندا۲۴ (Arsal Web) و پنل‌های عملیاتی را با Next.js و Tailwind ساختم — فلوهای خرید مشتری در کنار ویوهای داشبورد لجستیک.",
    },
    keyWork: [
      {
        en: "Offline-capable PWA storefront for customer shopping",
        fa: "فروشگاه PWA با قابلیت آفلاین برای خرید مشتری",
      },
      {
        en: "Logistics dashboard views for ops staff",
        fa: "ویوهای داشبورد لجستیک برای کارکنان عملیات",
      },
    ],
    outcome: {
      en: "Ronda24 (Arsal Web) offline-capable PWA with separate logistics and customer experiences — internal product without a public marketing URL.",
      fa: "PWA راندا۲۴ (Arsal Web) با قابلیت آفلاین و تجربهٔ مجزا برای لجستیک و مشتری — محصول داخلی بدون URL عمومی مارکتینگ.",
    },
  },
  {
    slug: "ariascale",
    featured: false,
    url: "https://ariascale.ir",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: { en: "Public Web Platform", fa: "پلتفرم وب عمومی" },
    title: { en: "Ariascale", fa: "Ariascale" },
    summary: {
      en: "Polished, performant public site — clear IA, responsive layout, production-ready UI.",
      fa: "سایت عمومی تمیز و سریع — معماری اطلاعات روشن، layout واکنش‌گرا، UI آمادهٔ production.",
    },
    problem: {
      en: "The product needed a polished, performant public-facing site — clear information architecture, responsive layout, and production-ready UI — without bloating the front-end stack.",
      fa: "محصول به سایتی عمومی، تمیز و سریع نیاز داشت — معماری اطلاعات روشن، layout واکنش‌گرا و UI آمادهٔ production — بدون سنگین‌کردن بی‌دلیل استک فرانت‌اند.",
    },
    role: {
      en: "Front-end development: implemented UI from design, responsive layouts, and production delivery on a React / Next.js / TypeScript stack with Tailwind CSS.",
      fa: "توسعهٔ فرانت‌اند: پیاده‌سازی UI از روی طرح، layout واکنش‌گرا و تحویل production روی استک React / Next.js / TypeScript با Tailwind CSS.",
    },
    keyWork: [
      {
        en: "UI implementation from design with responsive layouts",
        fa: "پیاده‌سازی UI از روی طرح با layout واکنش‌گرا",
      },
      {
        en: "Production delivery on React / Next.js / TypeScript + Tailwind",
        fa: "تحویل production روی React / Next.js / TypeScript و Tailwind",
      },
    ],
    outcome: {
      en: "Live production site at ariascale.ir — featured external work with a professional, performance-conscious front-end.",
      fa: "سایت production فعال در ariascale.ir — کار خارجی با فرانت‌اند حرفه‌ای و حساس به عملکرد.",
    },
  },
  {
    slug: "pspro-storefront",
    featured: false,
    url: "https://pspro.ir",
    stack: ["Vite", "Sass", "OpenCart", "RTL"],
    category: { en: "RTL Storefront", fa: "استورفرانت راست‌چین" },
    title: { en: "PSPro — OpenCart Storefront", fa: "PSPro — استورفرانت OpenCart" },
    summary: {
      en: "RTL, mobile-first gaming retail UI as static HTML/SCSS for OpenCart theme handoff.",
      fa: "UI خرده‌فروشی گیمینگ راست‌چین و موبایل‌اول به‌صورت HTML/SCSS استاتیک برای تحویل تم OpenCart.",
    },
    problem: {
      en: "Design-to-theme handoff needed pixel-faithful home, cart, and checkout pages without a heavy SPA stack. The storefront had to be RTL and mobile-first so OpenCart integration could reuse markup and styles cleanly.",
      fa: "تحویل design-to-theme به صفحات خانه، سبد و checkout وفادار به طرح نیاز داشت — بدون استک سنگین SPA. استورفرانت باید راست‌چین و موبایل‌اول می‌بود تا یکپارچه‌سازی OpenCart بتواند markup و استایل را تمیز استفاده کند.",
    },
    role: {
      en: "Implemented the storefront front-end from design — home, cart, and checkout — as static HTML/SCSS via Vite, prepared for OpenCart theme integration.",
      fa: "فرانت‌اند استورفرانت را از روی طرح پیاده کردم — خانه، سبد و checkout — به‌صورت HTML/SCSS استاتیک با Vite، آماده برای یکپارچه‌سازی تم OpenCart.",
    },
    keyWork: [
      {
        en: "Home, cart, and checkout as static HTML/SCSS via Vite",
        fa: "خانه، سبد و checkout به‌صورت HTML/SCSS استاتیک با Vite",
      },
      {
        en: "RTL, mobile-first markup prepared for OpenCart theme handoff",
        fa: "markup راست‌چین و موبایل‌اول آماده برای تحویل تم OpenCart",
      },
    ],
    outcome: {
      en: "Live gaming retail storefront at pspro.ir — an RTL OpenCart theme born from a static HTML/SCSS handoff, not a React rewrite.",
      fa: "استورفرانت خرده‌فروشی گیمینگ زنده در pspro.ir — تم راست‌چین OpenCart که از تحویل HTML/SCSS استاتیک آمده، نه بازنویسی React.",
    },
  },
  {
    slug: "ketabfeed",
    featured: false,
    url: "https://ketabfeed.com",
    stack: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    category: { en: "WooCommerce Shop", fa: "فروشگاه WooCommerce" },
    title: { en: "Bookstore — Ketabfeed", fa: "کتاب‌فروشی — کتاب‌فید" },
    summary: {
      en: "Customized WooCommerce / Elementor theme for an RTL bookstore — catalog, cart, and account.",
      fa: "سفارشی‌سازی تم WooCommerce / Elementor برای کتاب‌فروشی راست‌چین — کاتالوگ، سبد و حساب.",
    },
    problem: {
      en: "A bookstore needed a tailored RTL shop experience — header, catalog, cart, checkout, and account — on WordPress/WooCommerce, starting from a Parsan-based theme rather than a greenfield app.",
      fa: "کتاب‌فروشی به تجربهٔ فروشگاهی راست‌چین سفارشی نیاز داشت — هدر، کاتالوگ، سبد، checkout و حساب — روی WordPress/WooCommerce، با شروع از تم مبتنی بر پارسان به‌جای اپ از صفر.",
    },
    role: {
      en: "Customized the WooCommerce/Elementor theme and shop templates for catalog, cart, checkout, and account flows (viral-team). Work stayed in the WordPress theme layer — not a custom React storefront.",
      fa: "تم WooCommerce/Elementor و قالب‌های فروشگاه را برای کاتالوگ، سبد، checkout و حساب سفارشی کردم (viral-team). کار در لایهٔ تم WordPress ماند — نه استورفرانت سفارشی React.",
    },
    keyWork: [
      {
        en: "RTL shop theme customization on WooCommerce / Elementor (Parsan-based)",
        fa: "سفارشی‌سازی تم فروشگاه راست‌چین روی WooCommerce / Elementor (مبتنی بر پارسان)",
      },
      {
        en: "Catalog, cart, checkout, and account template work",
        fa: "کار روی قالب‌های کاتالوگ، سبد، checkout و حساب",
      },
    ],
    outcome: {
      en: "Live RTL bookstore storefront at ketabfeed.com with a shop flow adapted to the brand and catalog needs.",
      fa: "استورفرانت راست‌چین کتاب‌فروشی در ketabfeed.com با فلو فروشگاهی متناسب با برند و نیاز کاتالوگ.",
    },
  },
  {
    slug: "drug-monitoring",
    featured: false,
    stack: [],
    category: { en: "Institutional Dashboard", fa: "داشبورد سازمانی" },
    title: {
      en: "Drug Monitoring System — Mazandaran University of Medical Sciences",
      fa: "سامانه پایش دارو — دانشگاه علوم پزشکی مازندران",
    },
    summary: {
      en: "Controlled-drug monitoring UI for Mazandaran University of Medical Sciences — dashboards and audit-friendly data-entry flows.",
      fa: "UI پایش داروهای کنترل‌شده برای دانشگاه علوم پزشکی مازندران — داشبوردها و فلوهای ثبت داده مناسب audit.",
    },
    problem: {
      en: "Institutional teams needed to track controlled substances with audit-friendly workflows. The UI had to support monitoring dashboards and careful data entry — clarity and traceability over flashy interaction.",
      fa: "تیم‌های سازمانی به ردیابی داروهای کنترل‌شده با فلوهای مناسب audit نیاز داشتند. UI باید از داشبورد پایش و ثبت دقیق داده پشتیبانی می‌کرد — وضوح و قابلیت ردیابی، نه تعامل نمایشی.",
    },
    role: {
      en: "Frontend UI for monitoring dashboards and data-entry flows — focused on clear forms and audit-friendly screens. Stack badges omitted; the specific frontend stack is not listed here.",
      fa: "UI فرانت‌اند برای داشبوردهای پایش و فلوهای ثبت داده — تمرکز روی فرم‌های روشن و صفحه‌های مناسب audit. نشان استک نیامده؛ استک دقیق فرانت‌اند اینجا فهرست نشده است.",
    },
    keyWork: [
      {
        en: "Monitoring dashboards for controlled-drug tracking",
        fa: "داشبوردهای پایش برای ردیابی داروهای کنترل‌شده",
      },
      {
        en: "Clear data-entry forms and audit-friendly screens",
        fa: "فرم‌های ثبت دادهٔ روشن و صفحه‌های مناسب audit",
      },
    ],
    outcome: {
      en: "Specialized monitoring UI for university medical operations — a focused institutional tool, not a consumer product site.",
      fa: "UI تخصصی پایش برای عملیات پزشکی دانشگاه — ابزار سازمانی متمرکز، نه سایت محصول مصرف‌کننده.",
    },
  },
  {
    slug: "eppochange",
    featured: false,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Socket.io",
      "Ant Design",
    ],
    category: { en: "Internal Exchange UI", fa: "UI داخلی صرافی" },
    title: { en: "Crypto Exchange — EppoChange", fa: "صرافی ارز — اپو چنج" },
    summary: {
      en: "Customer dashboard with Socket.io live prices, plus a Vite Ant Design ops admin — internal surfaces only.",
      fa: "داشبورد مشتری با قیمت زندهٔ Socket.io، به‌همراه ادمین Vite / Ant Design — فقط سطوح داخلی.",
    },
    problem: {
      en: "The product needed a modern logged-in trading UI for customers and a separate back-office for users, markets, and support. Live prices on the customer side had to update without turning the dashboard into an unmaintainable mess of subscriptions.",
      fa: "محصول به UI مدرن ترید لاگین‌شده برای مشتری و بک‌آفیس جدا برای کاربران، بازار و پشتیبانی نیاز داشت. قیمت زنده در سمت مشتری باید بدون تبدیل داشبورد به انبوهی از subscriptionهای غیرقابل نگهداری به‌روز می‌شد.",
    },
    role: {
      en: "Contributed front-end for the Next.js customer dashboard (buy/sell, wallet, Socket.io live prices) and the Vite Ant Design admin console (viral-team). Internal product surfaces — no public marketing site to link.",
      fa: "در فرانت‌اند داشبورد مشتری Next.js (خرید/فروش، کیف پول، قیمت زنده با Socket.io) و کنسول ادمین Vite / Ant Design مشارکت کردم (viral-team). سطوح داخلی محصول — بدون سایت عمومی مارکتینگ برای لینک.",
    },
    keyWork: [
      {
        en: "Next.js customer dashboard — buy/sell, wallet, Socket.io prices",
        fa: "داشبورد مشتری Next.js — خرید/فروش، کیف پول، قیمت Socket.io",
      },
      {
        en: "Vite Ant Design admin for users, markets, and support (team contribution)",
        fa: "ادمین Vite / Ant Design برای کاربران، بازار و پشتیبانی (مشارکت تیمی)",
      },
    ],
    outcome: {
      en: "Paired user and admin exchange UIs with Socket.io market updates on the customer side — a complete internal exchange front-end without a public product site.",
      fa: "UIهای جفت کاربر و ادمین صرافی با به‌روزرسانی بازار Socket.io در سمت مشتری — فرانت‌اند کامل داخلی صرافی، بدون سایت عمومی محصول.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getSupportingProjects() {
  return projects.filter((p) => !p.featured);
}
