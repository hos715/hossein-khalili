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

  return (
    <Card className="flex h-full flex-col transition-colors hover:border-accent/40">
      <CardHeader>
        <CardTitle>{project.title[locale]}</CardTitle>
        <CardDescription>{project.summary[locale]}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
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
              <ArrowUpRight className="h-3.5 w-3.5" />
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
}: {
  items: Project[];
  locale: Locale;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project) => (
        <ProjectCard key={project.slug} project={project} locale={locale} />
      ))}
    </div>
  );
}
