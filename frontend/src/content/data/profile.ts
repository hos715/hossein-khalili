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
  experienceSince: 2018,
  education: {
    en: "Bachelor of Software Engineering — HADAF University of Mazandaran (2015)",
    fa: "کارشناسی مهندسی نرم‌افزار — دانشگاه هدف مازندران (۲۰۱۵)",
  },
  resumePdfPath: "/resume/hossein-khalili-resume.pdf",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "WebSocket",
    "Real-time applications",
    "Multi-role dashboards",
    "NestJS",
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
