import type { Locale } from "@/i18n/routing";

export const profile = {
  name: {
    en: "Hossein Khalili",
    fa: "حسین خلیلی",
  },
  alternateName: ["حسین خلیلی", "Hossein Khalili"],
  jobTitle: {
    en: "Senior Frontend Engineer",
    fa: "مهندس ارشد فرانت‌اند",
  },
  // Matches metadata.home.description — reused for Person JSON-LD.
  description: {
    en: "Senior frontend engineer for complex production web applications — real-time trading, multi-role dashboards, admin tools, and data-heavy React / Next.js systems.",
    fa: "مهندس ارشد فرانت‌اند برای اپلیکیشن‌های وب پیچیده در production — ترید بلادرنگ، داشبورد چندنقشی، ابزار ادمین و سیستم‌های React / Next.js داده‌محور.",
  },
  experienceSince: 2018,
  education: {
    en: "Bachelor of Software Engineering — HADAF University of Mazandaran (2015)",
    fa: "کارشناسی مهندسی نرم‌افزار — دانشگاه هدف مازندران (۲۰۱۵)",
  },
  // Legacy alias of the English PDF — keep so existing public links do not 404.
  resumePdfPath: "/resume/hossein-khalili-resume.pdf",
  resumeFiles: {
    en: {
      pdf: "/resume/hossein-khalili-resume-en.pdf",
      docx: "/resume/hossein-khalili-resume-en.docx",
    },
    fa: {
      pdf: "/resume/hossein-khalili-resume-fa.pdf",
      docx: "/resume/hossein-khalili-resume-fa.docx",
    },
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "WebSocket",
    "Real-time applications",
    "Multi-role dashboards",
  ],
} as const;

export function getProfileName(locale: Locale): string {
  return profile.name[locale];
}

export function getTitleSuffix(locale: Locale): string {
  return locale === "fa" ? `— ${profile.name.fa}` : `— ${profile.name.en}`;
}

export function buildDetailTitle(
  locale: Locale,
  primary: string,
): string {
  return `${primary} ${getTitleSuffix(locale)}`;
}
