import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/data/projects";
import type { Locale } from "@/i18n/routing";

export async function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = await getTranslations({ locale, namespace: "projects" });
  const a11y = await getTranslations({ locale, namespace: "a11y" });

  return (
    <Card className="flex h-full flex-col transition-colors hover:border-accent/40">
      <CardHeader>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent">
          {project.category[locale]}
        </p>
        <CardTitle className="text-lg leading-snug">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent"
          >
            {project.title[locale]}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {project.summary[locale]}
        </CardDescription>
        {project.confidential && (
          <p className="mt-2 text-xs text-muted-foreground">
            {t("confidential")}
          </p>
        )}
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        {project.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label={t("stack")}>
            {project.stack.slice(0, 4).map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-accent hover:underline"
          >
            {t("viewCaseStudy")}
          </Link>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              {t("visitSite")}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              <span className="sr-only">{a11y("externalLink")}</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export async function ProjectsGrid({
  items,
  locale,
  columns = 2,
}: {
  items: Project[];
  locale: Locale;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={
        columns === 3
          ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          : "grid gap-6 md:grid-cols-2"
      }
    >
      {items.map((project) => (
        <ProjectCard key={project.slug} project={project} locale={locale} />
      ))}
    </div>
  );
}
