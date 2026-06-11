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
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {project.title[loc]}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {project.summary[loc]}
      </p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          {t("visitSite")}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="mt-12 max-w-prose space-y-8">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t("problem")}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{project.problem[loc]}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t("role")}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{project.role[loc]}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t("outcome")}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{project.outcome[loc]}</p>
        </div>
      </div>
    </article>
  );
}
