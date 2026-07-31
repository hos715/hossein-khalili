import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getProject, projects } from "@/content/data/projects";
import { buildDetailTitle } from "@/content/data/profile";
import { buildPageMetadata } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildPageMetadata({
    locale: locale as Locale,
    title: buildDetailTitle(locale as Locale, project.title[locale as Locale]),
    description: project.summary[locale as Locale],
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "projects" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const a11y = await getTranslations({ locale, namespace: "a11y" });
  const loc = locale as Locale;

  return (
    <article className="py-16 md:py-24">
      <BreadcrumbJsonLd
        locale={loc}
        items={[
          { name: nav("home"), path: "" },
          { name: t("title"), path: "/projects" },
          { name: project.title[loc], path: `/projects/${slug}` },
        ]}
      />
      <Link
        href="/projects"
        className="mb-8 inline-block text-sm text-accent hover:underline"
      >
        ← {t("back")}
      </Link>

      <header className="max-w-prose">
        <p className="mb-3 text-sm font-medium text-accent">
          {project.category[loc]}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title[loc]}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.summary[loc]}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            {t("visitSite")}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
            <span className="sr-only">{a11y("externalLink")}</span>
          </a>
        )}
      </header>

      <div className="mt-14 max-w-prose space-y-10">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            {t("challenge")}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.problem[loc]}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">{t("role")}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.role[loc]}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            {t("keyWork")}
          </h2>
          <ul className="mt-3 list-disc space-y-2 ps-5 text-muted-foreground leading-relaxed">
            {project.keyWork.map((item, i) => (
              <li key={i}>{item[loc]}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            {t("outcome")}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.outcome[loc]}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">{t("stack")}</h2>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={t("stack")}>
            {project.stack.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
