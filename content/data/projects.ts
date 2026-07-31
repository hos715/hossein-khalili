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
      en: "Persian crypto exchange: marketing site and logged-in app (wallet, buy/sell, live prices, support) on one Next.js stack.",
      fa: "صرافی کریپتو فارسی: سایت مارکتینگ و اپ لاگین‌شده (کیف پول، خرید/فروش، قیمت لحظه‌ای، پشتیبانی) روی یک استک Next.js.",
    },
    problem: {
      en: "Users needed both a public, SEO-friendly landing and a reliable authenticated trading surface. Live market prices and wallet state had to stay consistent across pages without fragile refresh hacks — and the front-end had to coordinate cleanly with backend services.",
      fa: "کاربر هم به لندینگ عمومی و SEO-friendly نیاز داشت، هم به فضای ترید لاگین‌شدهٔ قابل اعتماد. قیمت زندهٔ بازار و وضعیت کیف پول باید بین صفحات پایدار می‌ماند — بدون ترفندهای شکنندهٔ رفرش — و فرانت‌اند باید با سرویس‌های بک‌اند هماهنگ کار می‌کرد.",
    },
    role: {
      en: "Led front-end architecture from scratch for the exchange app and landing (barman-tech / graphay context). Built Socket.io market feeds, trading and wallet flows, and shared state with Zustand and TanStack Query while coordinating API contracts with backend.",
      fa: "معماری فرانت‌اند را از صفر برای اپ و لندینگ صرافی رهبری کردم (زمینهٔ barman-tech / graphay). فید بازار Socket.io، فلوهای ترید و کیف پول، و state مشترک با Zustand و TanStack Query را پیاده کردم و قراردادهای API را با بک‌اند هماهنگ نگه داشتم.",
    },
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
    title: { en: "Crypto Exchange — xpay.co", fa: "صرافی ارز — xpay.co" },
    summary: {
      en: "Production crypto exchange front-end: user trading SPA, ops admin, and digital receipt viewer — with SignalR live updates.",
      fa: "فرانت‌اند صرافی کریپتو در production: SPA ترید کاربر، پنل عملیات و نمایشگر رسید دیجیتال — با به‌روزرسانی زندهٔ SignalR.",
    },
    problem: {
      en: "Traders and operators need different UIs — wallet, spot/markets, gifts, support tickets — while sharing the same real-time market and order data. The product also needed a public digital-receipt surface and branded maintenance/error pages, all in an RTL/Jalali-friendly experience.",
      fa: "تریدر و اپراتور به UIهای متفاوت نیاز دارند — کیف پول، اسپات/بازار، هدیه، تیکت پشتیبانی — در حالی که دادهٔ لحظه‌ای بازار و سفارش مشترک است. محصول همچنین به سطح عمومی رسید دیجیتال و صفحات خطای برندشده نیاز داشت؛ همه در تجربهٔ راست‌چین و جلالی‌پسند.",
    },
    role: {
      en: "Built and maintained front-end across the user app (app.xpay.co), admin console, and public receipt viewer (viral-team). Wired SignalR for live updates, Redux Toolkit for complex client state, and Ant Design for dense ops screens — including RTL and Jalali date UX.",
      fa: "فرانت‌اند اپ کاربر (app.xpay.co)، کنسول ادمین و نمایشگر عمومی رسید را توسعه و نگهداری کردم (viral-team). SignalR برای به‌روزرسانی زنده، Redux Toolkit برای state پیچیدهٔ کلاینت، و Ant Design برای صفحه‌های فشردهٔ عملیات — به‌همراه UX راست‌چین و تاریخ جلالی.",
    },
    outcome: {
      en: "A multi-surface XPay front-end at xpay.co / app.xpay.co: trading UI for users, tools for ops, and shareable payment receipts — with static branded error/maintenance pages folded into the same product story.",
      fa: "فرانت‌اند چندسطحی XPay در xpay.co / app.xpay.co: UI ترید برای کاربر، ابزار برای عملیات، و رسید پرداخت قابل اشتراک — به‌همراه صفحات استاتیک خطا/نگهداری برندشده در همان داستان محصول.",
    },
  },
  {
    slug: "ariascale",
    featured: true,
    url: "https://ariascale.ir",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    title: { en: "Ariascale", fa: "Ariascale" },
    summary: {
      en: "Front-end development and delivery for a professional public web platform at ariascale.ir.",
      fa: "توسعه و تحویل فرانت‌اند برای یک پلتفرم وب عمومی حرفه‌ای در ariascale.ir.",
    },
    problem: {
      en: "The product needed a polished, performant public-facing site — clear information architecture, responsive layout, and production-ready UI — without bloating the front-end stack.",
      fa: "محصول به سایتی عمومی، تمیز و سریع نیاز داشت — معماری اطلاعات روشن، layout واکنش‌گرا و UI آمادهٔ production — بدون سنگین‌کردن بی‌دلیل استک فرانت‌اند.",
    },
    role: {
      en: "Front-end development: implemented UI from design, responsive layouts, and production delivery on a React / Next.js / TypeScript stack with Tailwind CSS.",
      fa: "توسعهٔ فرانت‌اند: پیاده‌سازی UI از روی طرح، layout واکنش‌گرا و تحویل production روی استک React / Next.js / TypeScript با Tailwind CSS.",
    },
    outcome: {
      en: "Live production site at ariascale.ir — featured external work with a professional, performance-conscious front-end.",
      fa: "سایت production فعال در ariascale.ir — کار خارجی برجسته با فرانت‌اند حرفه‌ای و حساس به عملکرد.",
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
      en: "Crypto exchange marketing site and user panel (Next.js) plus an Ant Design ops admin — wallet, trade, and support modules.",
      fa: "سایت مارکتینگ و پنل کاربر صرافی (Next.js) به‌همراه ادمین عملیات Ant Design — ماژول‌های کیف پول، ترید و پشتیبانی.",
    },
    problem: {
      en: "One exchange product needed a public marketing/trade-facing site and a separate internal console for users, wallets, markets, and support. Customer and ops surfaces had to feel like one product without sharing the wrong UI density.",
      fa: "یک محصول صرافی به سایت عمومی مارکتینگ/ترید و کنسول داخلی جدا برای کاربران، کیف پول، بازار و پشتیبانی نیاز داشت. سطح مشتری و عملیات باید حس یک محصول واحد می‌داد، بدون اینکه تراکم UI اشتباه را به هم قرض بدهند.",
    },
    role: {
      en: "Contributed front-end for the Next.js user site/panel and the Vite Ant Design admin (viral-team). Covered wallet, trade, and ops modules as part of the team — not sole ownership of the product.",
      fa: "در فرانت‌اند سایت/پنل Next.js کاربر و داشبورد ادمین Vite با Ant Design مشارکت کردم (viral-team). ماژول‌های کیف پول، ترید و عملیات را به‌عنوان بخشی از تیم پوشش دادم — نه مالکیت انحصاری محصول.",
    },
    outcome: {
      en: "Paired customer and admin surfaces for VisaPay at visapay.me — public exchange UI alongside a denser back-office console.",
      fa: "سطوح جفت مشتری و ادمین برای VisaPay در visapay.me — UI عمومی صرافی در کنار کنسول فشرده‌تر بک‌آفیس.",
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
      en: "SwapNet exchange UI: SEO marketing landing, Telegram/PWA trading panel, and Ant Design ops admin.",
      fa: "UI صرافی SwapNet: لندینگ مارکتینگ SEO، پنل ترید تلگرام/PWA و ادمین عملیات Ant Design.",
    },
    problem: {
      en: "Discovery happens on a marketing site, but most trading happens inside a Telegram-oriented PWA panel. Ops still need a full admin console for markets, users, and support — three surfaces, one product domain.",
      fa: "کشف محصول از لندینگ مارکتینگ شروع می‌شود، اما بخش عمدهٔ ترید داخل پنل PWA مبتنی بر تلگرام است. عملیات همچنان به کنسول ادمین کامل برای بازار، کاربران و پشتیبانی نیاز دارد — سه سطح، یک دامنهٔ محصول.",
    },
    role: {
      en: "Built front-end across the Next.js landing, Vite+PWA user panel (markets, wallet, history), and Ant Design admin (viral-team). Focused on coherent navigation and trading flows across those entry points.",
      fa: "فرانت‌اند لندینگ Next.js، پنل کاربر Vite+PWA (بازار، کیف پول، تاریخچه) و ادمین Ant Design را ساختم (viral-team). تمرکز روی ناوبری منسجم و فلوهای ترید در این نقاط ورود بود.",
    },
    outcome: {
      en: "End-to-end SwapNet UI — SEO landing, Telegram mini-app style trading, and back-office ops — shipped as a coherent exchange front-end at swapnet.app.",
      fa: "UI سرتاسری SwapNet — لندینگ SEO، ترید شبیه مینی‌اپ تلگرام و عملیات بک‌آفیس — به‌صورت فرانت‌اند منسجم صرافی در swapnet.app.",
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
      en: "Persian crypto exchange: Next.js customer dashboard with live prices, plus a Vite Ant Design admin for ops.",
      fa: "صرافی کریپتو فارسی: داشبورد مشتری Next.js با قیمت زنده، به‌همراه ادمین Vite / Ant Design برای عملیات.",
    },
    problem: {
      en: "The product needed a modern logged-in trading UI for customers and a separate back-office for users, markets, and support. Live prices on the customer side had to update without turning the dashboard into an unmaintainable mess of subscriptions.",
      fa: "محصول به UI مدرن ترید لاگین‌شده برای مشتری و بک‌آفیس جدا برای کاربران، بازار و پشتیبانی نیاز داشت. قیمت زنده در سمت مشتری باید بدون تبدیل داشبورد به انبوهی از subscriptionهای غیرقابل نگهداری به‌روز می‌شد.",
    },
    role: {
      en: "Contributed front-end for the Next.js customer dashboard (buy/sell, wallet, Socket.io live prices) and the Vite Ant Design admin console (viral-team). Internal product surfaces — no public marketing site to link.",
      fa: "در فرانت‌اند داشبورد مشتری Next.js (خرید/فروش، کیف پول، قیمت زنده با Socket.io) و کنسول ادمین Vite / Ant Design مشارکت کردم (viral-team). سطوح داخلی محصول — بدون سایت عمومی مارکتینگ برای لینک.",
    },
    outcome: {
      en: "Paired user and admin exchange UIs with Socket.io market updates on the customer side — a complete internal exchange front-end without a public product site.",
      fa: "UIهای جفت کاربر و ادمین صرافی با به‌روزرسانی بازار Socket.io در سمت مشتری — فرانت‌اند کامل داخلی صرافی، بدون سایت عمومی محصول.",
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
      en: "Telegram mini-app with tap/leaderboard loops, ads, referral, and a TON Connect wallet UI.",
      fa: "مینی‌اپ تلگرام با حلقه‌های tap/لیدربورد، تبلیغات، رفرال و UI کیف پول متصل به TON Connect.",
    },
    problem: {
      en: "Engagement had to live inside Telegram: short game-like loops, ads, and referrals — while wallet and admin views handled TON-connected balances and withdrawals. The UI had to feel native to the mini-app shell, not like a bolted-on web page.",
      fa: "درگیری کاربر باید داخل تلگرام اتفاق می‌افتاد: حلقه‌های کوتاه بازی‌مانند، تبلیغات و رفرال — در حالی که ویوهای کیف پول و ادمین موجودی و برداشت متصل به TON را مدیریت می‌کردند. UI باید حس بومی مینی‌اپ می‌داد، نه صفحهٔ وب وصله‌شده.",
    },
    role: {
      en: "Built the React / Vite mini-app front-end (graphay context): Telegram SDK integration, wallet views with TON Connect, and admin/ads surfaces with Zustand and TanStack Query.",
      fa: "فرانت‌اند مینی‌اپ React / Vite را ساختم (زمینهٔ graphay): یکپارچه‌سازی Telegram SDK، ویوهای کیف پول با TON Connect، و سطوح ادمین/تبلیغات با Zustand و TanStack Query.",
    },
    outcome: {
      en: "Live Telegram mini-app at miniapp.adgame.fun with TON Connect, referral, and leaderboard flows — a complete engagement + wallet UI inside Telegram.",
      fa: "مینی‌اپ زندهٔ تلگرام در miniapp.adgame.fun با TON Connect، رفرال و لیدربورد — UI کامل درگیری + کیف پول داخل تلگرام.",
    },
  },
  {
    slug: "pspro-storefront",
    featured: false,
    url: "https://pspro.ir",
    stack: ["Vite", "Sass", "OpenCart", "RTL"],
    title: { en: "PSPro — OpenCart Storefront", fa: "PSPro — استورفرانت OpenCart" },
    summary: {
      en: "RTL, mobile-first gaming retail UI as static HTML/SCSS for OpenCart theme handoff — live at pspro.ir.",
      fa: "UI خرده‌فروشی گیمینگ راست‌چین و موبایل‌اول به‌صورت HTML/SCSS استاتیک برای تحویل تم OpenCart — زنده در pspro.ir.",
    },
    problem: {
      en: "Design-to-theme handoff needed pixel-faithful home, cart, and checkout pages without a heavy SPA stack. The storefront had to be RTL and mobile-first so OpenCart integration could reuse markup and styles cleanly.",
      fa: "تحویل design-to-theme به صفحات خانه، سبد و checkout وفادار به طرح نیاز داشت — بدون استک سنگین SPA. استورفرانت باید راست‌چین و موبایل‌اول می‌بود تا یکپارچه‌سازی OpenCart بتواند markup و استایل را تمیز استفاده کند.",
    },
    role: {
      en: "Implemented the storefront front-end from design — home, cart, and checkout — as static HTML/SCSS via Vite, prepared for OpenCart theme integration.",
      fa: "فرانت‌اند استورفرانت را از روی طرح پیاده کردم — خانه، سبد و checkout — به‌صورت HTML/SCSS استاتیک با Vite، آماده برای یکپارچه‌سازی تم OpenCart.",
    },
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
    title: { en: "Bookstore — Ketabfeed", fa: "کتاب‌فروشی — کتاب‌فید" },
    summary: {
      en: "Customized WooCommerce / Elementor theme for an RTL bookstore (Parsan-based) — catalog, cart, and account.",
      fa: "سفارشی‌سازی تم WooCommerce / Elementor برای کتاب‌فروشی راست‌چین (مبتنی بر پارسان) — کاتالوگ، سبد و حساب کاربری.",
    },
    problem: {
      en: "A bookstore needed a tailored RTL shop experience — header, catalog, cart, checkout, and account — on WordPress/WooCommerce, starting from a Parsan-based theme rather than a greenfield app.",
      fa: "کتاب‌فروشی به تجربهٔ فروشگاهی راست‌چین سفارشی نیاز داشت — هدر، کاتالوگ، سبد، checkout و حساب — روی WordPress/WooCommerce، با شروع از تم مبتنی بر پارسان به‌جای اپ از صفر.",
    },
    role: {
      en: "Customized the WooCommerce/Elementor theme and shop templates for catalog, cart, checkout, and account flows (viral-team). Work stayed in the WordPress theme layer — not a custom React storefront.",
      fa: "تم WooCommerce/Elementor و قالب‌های فروشگاه را برای کاتالوگ، سبد، checkout و حساب سفارشی کردم (viral-team). کار در لایهٔ تم WordPress ماند — نه استورفرانت سفارشی React.",
    },
    outcome: {
      en: "Live RTL bookstore storefront at ketabfeed.com with a shop flow adapted to the brand and catalog needs.",
      fa: "استورفرانت راست‌چین کتاب‌فروشی در ketabfeed.com با فلو فروشگاهی متناسب با برند و نیاز کاتالوگ.",
    },
  },
  {
    slug: "ecommerce-multi-panel",
    featured: false,
    stack: ["Next.js", "Redux", "PWA", "TypeScript"],
    title: { en: "Multi-Panel E-Commerce", fa: "فروشگاه چندپنلی" },
    summary: {
      en: "Full e-commerce front-end: admin, warehouse, basket-picker, postman, storefront, and PWA — shared order domain, role-specific UIs.",
      fa: "فرانت‌اند فروشگاه کامل: ادمین، انبار، انتخاب‌گر سبد، پستچی، فروشگاه و PWA — دامنهٔ سفارش مشترک، UI نقش‌محور.",
    },
    problem: {
      en: "Ops teams need separate panels (admin, warehouse, basket-picker, postman) while sharing one product and order domain. Customers need a storefront — including PWA — that does not expose internal tooling density.",
      fa: "تیم عملیات به پنل‌های جدا (ادمین، انبار، انتخاب‌گر سبد، پستچی) نیاز دارد در حالی که دامنهٔ محصول و سفارش یکی است. مشتری به فروشگاهی نیاز دارد — از جمله PWA — که تراکم ابزار داخلی را نشان ندهد.",
    },
    role: {
      en: "Built front-end panels and storefront with Next.js and Redux across complex operational flows. Focused on role-specific dashboards and keeping client state coherent as orders move between panels.",
      fa: "پنل‌ها و فروشگاه را با Next.js و Redux در فلوهای عملیاتی پیچیده ساختم. تمرکز روی داشبوردهای نقش‌محور و حفظ انسجام state کلاینت وقتی سفارش بین پنل‌ها جابه‌جا می‌شود.",
    },
    outcome: {
      en: "A multi-panel ops platform with a PWA storefront and role-specific dashboards — internal delivery without a single public marketing URL.",
      fa: "پلتفرم عملیات چندپنلی با فروشگاه PWA و داشبوردهای نقش‌محور — تحویل داخلی بدون یک URL عمومی مارکتینگ واحد.",
    },
  },
  {
    slug: "techsnovel-chatbot",
    featured: false,
    url: "https://www.teechats.com",
    stack: ["React", "TypeScript", "Zustand", "SignalR"],
    title: { en: "AI Chatbot — Techsnovel", fa: "چت‌بات AI — Techsnovel" },
    summary: {
      en: "Real-time AI chat front-end: typing indicators, message queue, and role-based interactions — React, Zustand, SignalR.",
      fa: "فرانت‌اند چت AI بلادرنگ: نشانگر تایپ، صف پیام و تعامل نقش‌محور — React، Zustand، SignalR.",
    },
    problem: {
      en: "Chat UI must feel instant while handling queued messages, typing indicators, and multiple user roles. Real-time delivery (SignalR) had to stay reliable without leaking messy subscription logic into every component.",
      fa: "UI چت باید حس فوری بدهد، در حالی که صف پیام، نشانگر تایپ و نقش‌های مختلف کاربر را مدیریت می‌کند. تحویل بلادرنگ (SignalR) باید پایدار بماند بدون اینکه منطق subscription به همهٔ کامپوننت‌ها نشت کند.",
    },
    role: {
      en: "Front-end architecture and real-time chat interface with React, TypeScript, Zustand, and SignalR — including RBAC-aware interaction patterns for different user roles.",
      fa: "معماری فرانت‌اند و رابط چت بلادرنگ با React، TypeScript، Zustand و SignalR — از جمله الگوهای تعامل آگاه از RBAC برای نقش‌های مختلف کاربر.",
    },
    outcome: {
      en: "Production chat platform at teechats.com with reliable real-time delivery and clear client-state boundaries around the message queue.",
      fa: "پلتفرم چت production در teechats.com با تحویل بلادرنگ قابل اعتماد و مرزبندی روشن state کلاینت حول صف پیام.",
    },
  },
  {
    slug: "pars-data-marketplace",
    featured: false,
    url: "https://www.parsdata.com",
    stack: ["React", "Next.js", "TypeScript"],
    title: { en: "Marketplace — Pars Data", fa: "مارکت‌پلیس — Pars Data" },
    summary: {
      en: "Marketplace front-end: product listings, seller dashboard, and multi-step checkout — buyer and seller journeys on one catalog.",
      fa: "فرانت‌اند مارکت‌پلیس: لیست محصول، داشبورد فروشنده و checkout چندمرحله‌ای — مسیر خریدار و فروشنده روی یک کاتالوگ.",
    },
    problem: {
      en: "A marketplace needs distinct buyer and seller journeys without duplicating catalog logic. Listings, seller tools, and multi-step checkout had to stay coherent as one product domain.",
      fa: "مارکت‌پلیس به مسیر خریدار و فروشندهٔ مجزا نیاز دارد بدون تکرار منطق کاتالوگ. لیستینگ، ابزار فروشنده و checkout چندمرحله‌ای باید به‌عنوان یک دامنهٔ محصول منسجم بمانند.",
    },
    role: {
      en: "Front-end for listings, seller dashboard tools, and multi-step checkout flows on React / Next.js / TypeScript — focused on clear step UX and shared catalog surfaces.",
      fa: "فرانت‌اند لیستینگ، ابزار داشبورد فروشنده و فلوهای checkout چندمرحله‌ای روی React / Next.js / TypeScript — با تمرکز روی UX روشن مراحل و سطوح مشترک کاتالوگ.",
    },
    outcome: {
      en: "Complete marketplace UI at parsdata.com with a seller dashboard and guided multi-step checkout.",
      fa: "UI کامل مارکت‌پلیس در parsdata.com با داشبورد فروشنده و checkout چندمرحله‌ای هدایت‌شده.",
    },
  },
  {
    slug: "arsal-hypermarket-pwa",
    featured: false,
    stack: ["Next.js", "Tailwind CSS", "PWA"],
    title: { en: "Hypermarket PWA — Arsal Web", fa: "هایپرمارکت PWA — Arsal Web" },
    summary: {
      en: "Offline-capable hypermarket PWA: customer panel plus logistics dashboard — Next.js and Tailwind.",
      fa: "PWA هایپرمارکت با قابلیت آفلاین: پنل مشتری به‌همراه داشبورد لجستیک — Next.js و Tailwind.",
    },
    problem: {
      en: "Retail customers and logistics staff need reliable access even when connectivity is unstable. The storefront and ops panels had to work as a PWA so core shopping and logistics flows stay usable on flaky networks.",
      fa: "مشتری خرده‌فروشی و کارکنان لجستیک به دسترسی پایدار نیاز دارند حتی وقتی اتصال ناپایدار است. فروشگاه و پنل عملیات باید به‌صورت PWA کار کنند تا فلوهای اصلی خرید و لجستیک روی شبکهٔ ناپایدار قابل استفاده بمانند.",
    },
    role: {
      en: "Built the PWA storefront and operational panels with Next.js and Tailwind — customer shopping flows alongside logistics dashboard views.",
      fa: "فروشگاه PWA و پنل‌های عملیاتی را با Next.js و Tailwind ساختم — فلوهای خرید مشتری در کنار ویوهای داشبورد لجستیک.",
    },
    outcome: {
      en: "Offline-capable PWA with separate logistics and customer experiences — internal product without a public marketing URL.",
      fa: "PWA با قابلیت آفلاین و تجربهٔ مجزا برای لجستیک و مشتری — محصول داخلی بدون URL عمومی مارکتینگ.",
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
      en: "Controlled-drug monitoring UI for Mazandaran University of Medical Sciences — dashboards and data-entry flows.",
      fa: "UI پایش داروهای کنترل‌شده برای دانشگاه علوم پزشکی مازندران — داشبوردها و فلوهای ثبت داده.",
    },
    problem: {
      en: "Institutional teams needed to track controlled substances with audit-friendly workflows. The UI had to support monitoring dashboards and careful data entry — clarity and traceability over flashy interaction.",
      fa: "تیم‌های سازمانی به ردیابی داروهای کنترل‌شده با فلوهای مناسب audit نیاز داشتند. UI باید از داشبورد پایش و ثبت دقیق داده پشتیبانی می‌کرد — وضوح و قابلیت ردیابی، نه تعامل نمایشی.",
    },
    role: {
      en: "Front-end development for monitoring dashboards and data-entry flows in React and TypeScript — focused on clear forms and audit-friendly screens.",
      fa: "توسعهٔ فرانت‌اند داشبوردهای پایش و فلوهای ثبت داده با React و TypeScript — با تمرکز روی فرم‌های روشن و صفحه‌های مناسب audit.",
    },
    outcome: {
      en: "Specialized monitoring UI for university medical operations — a focused institutional tool, not a consumer product site.",
      fa: "UI تخصصی پایش برای عملیات پزشکی دانشگاه — ابزار سازمانی متمرکز، نه سایت محصول مصرف‌کننده.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
