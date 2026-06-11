export type ExperienceEntry = {
  id: string;
  org: string;
  role: { en: string; fa: string };
  period?: { en: string; fa: string };
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
    highlights: [
      {
        en: "Built front-end architecture from scratch for arz.me — landing, trading, wallet, and reporting.",
        fa: "معماری فرانت‌اند صرافی arz.me از صفر — لندینگ، ترید، کیف پول و گزارش‌گیری.",
      },
      {
        en: "Implemented WebSocket live prices and complex trade state management.",
        fa: "پیاده‌سازی قیمت لحظه‌ای WebSocket و مدیریت state معاملات.",
      },
    ],
  },
  {
    id: "graphay",
    org: "graphay",
    role: {
      en: "Front-End · AI Products",
      fa: "فرانت‌اند · محصولات AI",
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
    ],
  },
  {
    id: "collaborations",
    org: "Collaborations",
    role: {
      en: "Front-End Developer",
      fa: "توسعه‌دهنده فرانت‌اند",
    },
    highlights: [
      {
        en: "Takanesh Academy, xpay, and others — Figma implementation, performance, and feature work on existing apps.",
        fa: "Takanesh Academy، xpay و پروژه‌های دیگر — پیاده‌سازی Figma، بهینه‌سازی و توسعه فیچر.",
      },
    ],
  },
];
