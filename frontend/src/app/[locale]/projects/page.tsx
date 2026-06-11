import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectsGrid } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/content/data/projects";
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

  return (
    <section className="py-16 md:py-24">
      <SectionHeading title={t("title")} subtitle={t("all")} />
      <ProjectsGrid items={projects} locale={locale as Locale} />
    </section>
  );
}
