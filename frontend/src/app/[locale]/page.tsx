import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsGrid } from "@/components/sections/project-card";
import { ExperienceTeaser } from "@/components/sections/experience-teaser";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { SectionHeading } from "@/components/sections/section-heading";
import { getFeaturedProjects } from "@/content/data/projects";
import { ProfilePageJsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return buildPageMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "projects" });
  const featured = getFeaturedProjects();

  return (
    <>
      <ProfilePageJsonLd locale={locale as Locale} />
      <HeroSection locale={locale as Locale} />
      <SkillsSection locale={locale as Locale} />
      <section className="py-16 md:py-20">
        <SectionHeading title={t("featured")} />
        <ProjectsGrid items={featured} locale={locale as Locale} />
      </section>
      <ExperienceTeaser locale={locale as Locale} />
      <BlogTeaser locale={locale as Locale} />
    </>
  );
}
