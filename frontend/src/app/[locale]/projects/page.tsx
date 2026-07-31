import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectsGrid } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  getFeaturedProjects,
  getSupportingProjects,
} from "@/content/data/projects";
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
  const t = await getTranslations({ locale, namespace: "metadata.projects" });
  return buildPageMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "projects" });
  const loc = locale as Locale;
  const featured = getFeaturedProjects();
  const supporting = getSupportingProjects();

  return (
    <div className="py-16 md:py-24">
      <SectionHeading title={t("pageTitle")} as="h1" />
      <section className="mt-10">
        <SectionHeading
          title={t("featured")}
          subtitle={t("featuredSubtitle")}
        />
        <ProjectsGrid items={featured} locale={loc} />
      </section>
      <section className="mt-16 md:mt-20">
        <SectionHeading
          title={t("supporting")}
          subtitle={t("supportingSubtitle")}
        />
        <ProjectsGrid items={supporting} locale={loc} />
      </section>
    </div>
  );
}
