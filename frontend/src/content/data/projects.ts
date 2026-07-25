export type Project = {
  slug: string;
  featured: boolean;
  url?: string;
  stack: string[];
  title: { en: string; fa: string };
  summary: { en: string; fa: string };
  problem: { en: string; fa: string };
  role: { en: string; fa: string };
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
    title: { en: "Crypto Exchange — arz.me", fa: "صرافی ارز — arz.me" },
    summary: {
      en: "Exchange landing and authenticated app — wallet, buy/sell, live prices, and support — on one Next.js stack.",
      fa: "لندینگ و اپ صرافی — کیف پول، خرید/فروش، قیمت لحظه‌ای و پشتیبانی — روی یک استک Next.js.",
    },
    problem: {
      en: "Persian crypto users need a marketing site and a logged-in trading surface that share reliable live prices and wallet state.",
      fa: "کاربران فارسی‌زبان به لندینگ و سطح ترید لاگین‌شده نیاز دارند که قیمت زنده و state کیف پول را پایدار نگه دارد.",
    },
    role: {
      en: "Led front-end architecture for the exchange app and landing; Socket.io market feeds, trading/wallet flows, and backend coordination.",
      fa: "معماری فرانت‌اند اپ و لندینگ صرافی؛ فید بازار Socket.io، فلوهای ترید/کیف پول و هماهنگی با backend.",
    },
    outcome: {
      en: "Production arz.me experience spanning public SEO pages and a dashboard with live market updates and complex trade state.",
      fa: "تجربه production در arz.me شامل صفحات SEO عمومی و داشبورد با به‌روزرسانی زنده بازار و state پیچیده معاملات.",
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
    title: { en: "Crypto Exchange — xpay.co", fa: "صرافی ارز — xpay.co" },
    summary: {
      en: "User trading SPA, ops admin, and digital receipt viewer for a production crypto exchange.",
      fa: "SPA ترید کاربر، پنل عملیات و نمایشگر رسید دیجیتال برای یک صرافی production.",
    },
    problem: {
      en: "Traders and operators need separate UIs — wallet, spot/markets, gifts, tickets — kept in sync with real-time market and order data.",
      fa: "تریدرها و اپراتورها به UIهای مجزا — کیف پول، اسپات/بازار، هدیه، تیکت — همگام با داده لحظه‌ای بازار و سفارش نیاز دارند.",
    },
    role: {
      en: "Built and maintained front-end across the user app, admin console, and public digital-receipt surface; SignalR live updates and RTL/Jalali UX.",
      fa: "توسعه و نگهداری فرانت‌اند اپ کاربر، کنسول ادمین و سطح عمومی رسید دیجیتال؛ به‌روزرسانی SignalR و UX راست‌چین/جلالی.",
    },
    outcome: {
      en: "Multi-surface XPay front-end at xpay.co / app.xpay.co — trading UI, ops tools, and shareable payment receipts.",
      fa: "فرانت‌اند چندسطحی XPay در xpay.co / app.xpay.co — UI ترید، ابزار عملیات و رسید پرداخت قابل اشتراک.",
    },
  },
  {
    slug: "ariascale",
    featured: true,
    url: "https://ariascale.ir",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    title: { en: "Ariascale", fa: "Ariascale" },
    summary: {
      en: "Professional web platform — front-end development and delivery.",
      fa: "پلتفرم وب حرفه‌ای — توسعه و تحویل فرانت‌اند.",
    },
    problem: {
      en: "Build a polished, performant public-facing web experience.",
      fa: "ساخت تجربه وب عمومی حرفه‌ای و بهینه.",
    },
    role: {
      en: "Front-end development — UI implementation, responsive layout, and production delivery.",
      fa: "توسعه فرانت‌اند — پیاده‌سازی UI، layout واکنش‌گرا و تحویل production.",
    },
    outcome: {
      en: "Live production site at ariascale.ir.",
      fa: "سایت production فعال در ariascale.ir.",
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
    title: { en: "Crypto Exchange — VisaPay", fa: "صرافی ارز — VisaPay" },
    summary: {
      en: "Marketing site plus user panel and Ant Design ops admin for a crypto exchange.",
      fa: "سایت مارکتینگ به‌همراه پنل کاربر و ادمین Ant Design برای یک صرافی.",
    },
    problem: {
      en: "One product needed a public trade/marketing site and a separate internal console for users, wallets, markets, and support.",
      fa: "یک محصول به سایت عمومی ترید/مارکتینگ و کنسول داخلی جدا برای کاربران، کیف پول، بازار و پشتیبانی نیاز داشت.",
    },
    role: {
      en: "Contributed front-end for the Next.js user site/panel and the Vite admin dashboard — wallet, trade, and ops modules.",
      fa: "مشارکت در فرانت‌اند سایت/پنل Next.js کاربر و داشبورد ادمین Vite — ماژول‌های کیف پول، ترید و عملیات.",
    },
    outcome: {
      en: "Paired customer and admin surfaces for VisaPay at visapay.me.",
      fa: "سطوح جفت مشتری و ادمین برای VisaPay در visapay.me.",
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
    title: { en: "Crypto Exchange — SwapNet", fa: "صرافی ارز — SwapNet" },
    summary: {
      en: "Telegram-oriented trading PWA, marketing landing, and ops admin for SwapNet.",
      fa: "PWA ترید مبتنی بر تلگرام، لندینگ مارکتینگ و ادمین عملیات برای SwapNet.",
    },
    problem: {
      en: "Users discover the exchange via a marketing site and trade mainly inside a Telegram/PWA panel, while ops need a full admin console.",
      fa: "کاربران از لندینگ وارد می‌شوند و عمدتاً داخل پنل تلگرام/PWA معامله می‌کنند؛ عملیات به کنسول ادمین کامل نیاز دارد.",
    },
    role: {
      en: "Built front-end across the Next.js landing, Vite+PWA user panel (markets, wallet, history), and Ant Design admin.",
      fa: "ساخت فرانت‌اند لندینگ Next.js، پنل کاربر Vite+PWA (بازار، کیف پول، تاریخچه) و ادمین Ant Design.",
    },
    outcome: {
      en: "End-to-end SwapNet UI — SEO landing, Telegram mini-app style trading, and back-office ops.",
      fa: "UI سرتاسری SwapNet — لندینگ SEO، ترید شبیه مینی‌اپ تلگرام و عملیات بک‌آفیس.",
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
    title: { en: "Crypto Exchange — EppoChange", fa: "صرافی ارز — اپو چنج" },
    summary: {
      en: "Customer exchange dashboard and Ant Design admin for wallet, trade, and ops workflows.",
      fa: "داشبورد صرافی مشتری و ادمین Ant Design برای کیف پول، ترید و فلوهای عملیات.",
    },
    problem: {
      en: "A Persian crypto product needed a modern logged-in trading UI plus a separate back-office for users, markets, and support.",
      fa: "یک محصول کریپتو فارسی به UI ترید لاگین‌شده مدرن و بک‌آفیس جدا برای کاربران، بازار و پشتیبانی نیاز داشت.",
    },
    role: {
      en: "Contributed front-end for the Next.js customer dashboard (buy/sell, wallet, live prices) and the Vite admin console.",
      fa: "مشارکت در فرانت‌اند داشبورد مشتری Next.js (خرید/فروش، کیف پول، قیمت زنده) و کنسول ادمین Vite.",
    },
    outcome: {
      en: "Paired user and admin exchange UIs with Socket.io market updates on the customer side.",
      fa: "UIهای جفت کاربر و ادمین صرافی با به‌روزرسانی بازار Socket.io در سمت مشتری.",
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
    title: { en: "Adgame — Telegram Mini App", fa: "Adgame — مینی‌اپ تلگرام" },
    summary: {
      en: "Telegram mini-app with tap/leaderboard, ads, referral, and TON-connected wallet UI.",
      fa: "مینی‌اپ تلگرام با tap/لیدربورد، تبلیغات، رفرال و UI کیف پول متصل به TON.",
    },
    problem: {
      en: "Engage users inside Telegram with game-like loops while wiring wallet and admin views for ads and withdrawals.",
      fa: "درگیر کردن کاربر داخل تلگرام با حلقه‌های بازی‌مانند و اتصال ویوهای کیف پول و ادمین برای تبلیغات و برداشت.",
    },
    role: {
      en: "Built the React mini-app front-end — Telegram SDK integration, wallet views, and admin/ads surfaces.",
      fa: "ساخت فرانت‌اند مینی‌اپ React — یکپارچه‌سازی Telegram SDK، ویوهای کیف پول و سطوح ادمین/تبلیغات.",
    },
    outcome: {
      en: "Live Telegram mini-app experience with TON Connect and referral/leaderboard flows.",
      fa: "تجربه مینی‌اپ تلگرام زنده با TON Connect و فلوهای رفرال/لیدربورد.",
    },
  },
  {
    slug: "pspro-storefront",
    featured: false,
    stack: ["Vite", "Sass", "OpenCart", "RTL"],
    title: { en: "PSPro — OpenCart Storefront", fa: "PSPro — استورفرانت OpenCart" },
    summary: {
      en: "RTL, mobile-first ecommerce UI built as static HTML/SCSS for OpenCart theme handoff.",
      fa: "UI فروشگاهی راست‌چین و موبایل‌اول به‌صورت HTML/SCSS استاتیک برای تحویل تم OpenCart.",
    },
    problem: {
      en: "Design-to-theme handoff needed pixel-faithful cart and checkout pages without a heavy SPA stack.",
      fa: "تحویل design-to-theme به صفحات سبد و checkout وفادار به طرح نیاز داشت بدون استک سنگین SPA.",
    },
    role: {
      en: "Implemented the storefront front-end from design — home, cart, and checkout — for OpenCart integration.",
      fa: "پیاده‌سازی فرانت‌اند استورفرانت از روی طرح — خانه، سبد و checkout — برای یکپارچه‌سازی OpenCart.",
    },
    outcome: {
      en: "Production-ready static theme assets and OpenCart templates for an RTL ecommerce storefront.",
      fa: "دارایی‌های تم استاتیک و قالب‌های OpenCart آماده production برای استورفرانت راست‌چین.",
    },
  },
  {
    slug: "ketabfeed",
    featured: false,
    url: "https://ketabfeed.com",
    stack: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    title: { en: "Bookstore — Ketabfeed", fa: "کتاب‌فروشی — کتاب‌فید" },
    summary: {
      en: "Customized WooCommerce/Elementor theme for an RTL bookstore (Parsan-based).",
      fa: "سفارشی‌سازی تم WooCommerce/Elementor برای کتاب‌فروشی راست‌چین (مبتنی بر پارسان).",
    },
    problem: {
      en: "A bookstore needed a tailored shop theme — header, catalog, cart, and account — on WordPress.",
      fa: "کتاب‌فروشی به تم فروشگاهی سفارشی — هدر، کاتالوگ، سبد و حساب — روی WordPress نیاز داشت.",
    },
    role: {
      en: "Customized the WooCommerce theme and shop templates for catalog, cart, checkout, and account flows.",
      fa: "سفارشی‌سازی تم WooCommerce و قالب‌های فروشگاه برای کاتالوگ، سبد، checkout و حساب کاربری.",
    },
    outcome: {
      en: "Live RTL bookstore storefront at ketabfeed.com.",
      fa: "استورفرانت راست‌چین کتاب‌فروشی در ketabfeed.com.",
    },
  },
  {
    slug: "ecommerce-multi-panel",
    featured: false,
    stack: ["Next.js", "Redux", "PWA", "TypeScript"],
    title: { en: "Multi-Panel E-Commerce", fa: "فروشگاه چندپنلی" },
    summary: {
      en: "Full e-commerce with admin, warehouse, basket-picker, postman, storefront, and PWA.",
      fa: "فروشگاه کامل با admin، انبار، basket-picker، postman، storefront و PWA.",
    },
    problem: {
      en: "Operations teams need separate panels while sharing one product and order domain.",
      fa: "تیم عملیات به پنل‌های جدا نیاز دارد در حالی که دامنه محصول و سفارش مشترک است.",
    },
    role: {
      en: "Built front-end panels and storefront; Redux state across complex operational flows.",
      fa: "ساخت پنل‌ها و storefront؛ state Redux در فلوهای عملیاتی پیچیده.",
    },
    outcome: {
      en: "Multi-panel ops platform with PWA storefront and role-specific dashboards.",
      fa: "پلتفرم عملیات چندپنلی با PWA فروشگاه و dashboard نقش‌محور.",
    },
  },
  {
    slug: "techsnovel-chatbot",
    featured: false,
    stack: ["React", "TypeScript", "Zustand", "SignalR"],
    title: { en: "AI Chatbot — Techsnovel", fa: "چت‌بات AI — Techsnovel" },
    summary: {
      en: "Real-time chat with typing indicators, message queue, and role-based interactions.",
      fa: "چت بلادرنگ با typing indicator، صف پیام و تعامل نقش‌محور.",
    },
    problem: {
      en: "Chat UI must feel instant while handling queued messages and multiple user roles.",
      fa: "UI چت باید instant باشد در حالی که صف پیام و نقش‌های مختلف را مدیریت کند.",
    },
    role: {
      en: "Front-end architecture and real-time chat interface with SignalR.",
      fa: "معماری فرانت‌اند و رابط چت بلادرنگ با SignalR.",
    },
    outcome: {
      en: "Production chat platform with reliable real-time delivery and clean state boundaries.",
      fa: "پلتفرم چت production با تحویل بلادرنگ و مرزبندی state تمیز.",
    },
  },
  {
    slug: "pars-data-marketplace",
    featured: false,
    stack: ["React", "Next.js", "TypeScript"],
    title: { en: "Marketplace — Pars Data", fa: "مارکت‌پلیس — Pars Data" },
    summary: {
      en: "Product listings, seller dashboard, and multi-step checkout flows.",
      fa: "لیست محصول، dashboard فروشنده و checkout چندمرحله‌ای.",
    },
    problem: {
      en: "Marketplace needs distinct buyer and seller journeys without duplicating catalog logic.",
      fa: "مارکت‌پلیس به مسیر خریدار و فروشنده مجزا بدون تکرار logic کاتالوگ نیاز دارد.",
    },
    role: {
      en: "Front-end for listings, seller tools, and checkout step flows.",
      fa: "فرانت‌اند لیستینگ، ابزار فروشنده و فلو checkout.",
    },
    outcome: {
      en: "Complete marketplace UI with seller dashboard and guided checkout.",
      fa: "UI مارکت‌پلیس با dashboard فروشنده و checkout هدایت‌شده.",
    },
  },
  {
    slug: "arsal-hypermarket-pwa",
    featured: false,
    stack: ["Next.js", "Tailwind CSS", "PWA"],
    title: { en: "Hypermarket PWA — Arsal Web", fa: "هایپرمارکت PWA — Arsal Web" },
    summary: {
      en: "Offline-capable e-commerce PWA with logistics dashboard and customer panel.",
      fa: "PWA فروشگاه با قابلیت offline، dashboard لجستیک و پنل مشتری.",
    },
    problem: {
      en: "Retail customers and logistics staff need reliable access even with unstable connectivity.",
      fa: "مشتری و لجستیک به دسترسی پایدار حتی با اتصال ناپایدار نیاز دارند.",
    },
    role: {
      en: "Built PWA storefront and operational panels with Next.js and Tailwind.",
      fa: "ساخت PWA فروشگاه و پنل‌های عملیاتی با Next.js و Tailwind.",
    },
    outcome: {
      en: "Offline-capable PWA with separate logistics and customer experiences.",
      fa: "PWA با قابلیت offline و تجربه مجزا برای لجستیک و مشتری.",
    },
  },
  {
    slug: "drug-monitoring",
    featured: false,
    stack: ["React", "TypeScript"],
    title: {
      en: "Drug Monitoring System — Mazandaran University of Medical Sciences",
      fa: "سامانه پایش دارو — دانشگاه علوم پزشکی مازندران",
    },
    summary: {
      en: "Controlled drug monitoring system for medical sciences university operations.",
      fa: "سامانه پایش داروهای کنترل‌شده برای عملیات دانشگاه علوم پزشکی.",
    },
    problem: {
      en: "Track controlled substances with audit-friendly workflows for institutional compliance.",
      fa: "ردیابی داروهای کنترل‌شده با workflow مناسب audit و compliance.",
    },
    role: {
      en: "Front-end development for monitoring dashboards and data entry flows.",
      fa: "توسعه فرانت‌اند dashboard پایش و فلوهای ثبت داده.",
    },
    outcome: {
      en: "Specialized monitoring UI for university medical operations.",
      fa: "UI تخصصی پایش برای عملیات پزشکی دانشگاه.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
