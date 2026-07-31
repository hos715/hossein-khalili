import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { CredibilitySection } from "@/components/sections/credibility-section";
import { SpecializationSection } from "@/components/sections/specialization-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsGrid } from "@/components/sections/project-card";
import { ExperienceTeaser } from "@/components/sections/experience-teaser";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ContactCta } from "@/components/sections/contact-cta";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  getFeaturedProjects,
  getSupportingProjects,
} from "@/content/data/projects";
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
  const home = await getTranslations({ locale, namespace: "home" });
  const loc = locale as Locale;
  const featured = getFeaturedProjects();
  const supporting = getSupportingProjects().slice(0, 6);

  return (
    <>
      <ProfilePageJsonLd locale={loc} />
      <HeroSection locale={loc} />
      <CredibilitySection locale={loc} />
      <section className="py-16 md:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title={t("featured")}
            subtitle={t("featuredSubtitle")}
            className="mb-0"
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-accent hover:underline"
          >
            {home("viewAll")}
          </Link>
        </div>
        <ProjectsGrid items={featured} locale={loc} />
      </section>
      <SpecializationSection locale={loc} />
      <ExperienceTeaser locale={loc} />
      <section className="py-16 md:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title={t("supporting")}
            subtitle={t("supportingSubtitle")}
            className="mb-0"
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-accent hover:underline"
          >
            {home("viewAll")}
          </Link>
        </div>
        <ProjectsGrid items={supporting} locale={loc} columns={3} />
      </section>
      <SkillsSection locale={loc} compact />
      <AboutTeaser locale={loc} />
      <BlogTeaser locale={loc} />
      <ContactCta locale={loc} />
    </>
  );
}
