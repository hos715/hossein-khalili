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
    stack: ["Next.js", "React", "TypeScript", "WebSocket", "Redux"],
    title: { en: "Crypto Exchange — arz.me", fa: "صرافی ارز — arz.me" },
    summary: {
      en: "Full exchange front-end: landing, trading, wallet, and reporting with live market data.",
      fa: "فرانت‌اند کامل صرافی: لندینگ، ترید، کیف پول و گزارش‌گیری با داده لحظه‌ای.",
    },
    problem: {
      en: "Users need real-time prices and reliable order state across trading, wallet, and reporting surfaces.",
      fa: "کاربران به قیمت لحظه‌ای و state پایدار سفارش در ترید، کیف پول و گزارش نیاز دارند.",
    },
    role: {
      en: "Led front-end architecture from scratch; WebSocket integration, trading flows, and backend coordination.",
      fa: "معماری فرانت‌اند از صفر؛ WebSocket، فلوهای ترید و هماهنگی با backend.",
    },
    outcome: {
      en: "Live trading experience with WebSocket price feeds and complex trade state management.",
      fa: "تجربه ترید زنده با WebSocket و مدیریت state معاملات.",
    },
  },
  {
    slug: "xpay",
    featured: true,
    url: "https://xpay.co",
    stack: ["React", "Next.js", "TypeScript", "WebSocket"],
    title: { en: "Crypto Exchange — xpay.co", fa: "صرافی ارز — xpay.co" },
    summary: {
      en: "Exchange platform front-end with trading interfaces and real-time market updates.",
      fa: "فرانت‌اند پلتفرم صرافی با رابط ترید و به‌روزرسانی لحظه‌ای بازار.",
    },
    problem: {
      en: "Deliver a responsive trading UI that stays in sync with volatile market data.",
      fa: "تحویل UI ترید واکنش‌گرا که با داده پرنوسان بازار همگام بماند.",
    },
    role: {
      en: "Built and maintained front-end features — trading pages, wallet integration, and performance fixes.",
      fa: "توسعه و نگهداری فیچرهای فرانت‌اند — صفحات ترید، کیف پول و بهینه‌سازی.",
    },
    outcome: {
      en: "Production exchange UI with live data flows and maintainable component architecture.",
      fa: "UI production صرافی با جریان داده زنده و معماری component قابل نگهداری.",
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
