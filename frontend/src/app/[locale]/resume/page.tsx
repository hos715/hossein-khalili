import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Download } from "lucide-react";
import { ResumeCreativeWorkJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experience } from "@/content/data/experience";
import { profile } from "@/content/data/profile";
import { skillGroups } from "@/content/data/skills";
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
  const t = await getTranslations({ locale, namespace: "metadata.resume" });
  return buildPageMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/resume",
  });
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "resume" });
  const about = await getTranslations({ locale, namespace: "about" });
  const hero = await getTranslations({ locale, namespace: "hero" });
  const loc = locale as Locale;

  return (
    <section className="py-16 md:py-24">
      <ResumeCreativeWorkJsonLd locale={loc} />
      <SectionHeading title={t("pageTitle")} subtitle={t("intro")} as="h1" />
      <div className="mb-10 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href={profile.resumePdfPath} download>
            <Download className="me-2 h-4 w-4" />
            {t("download")}
          </a>
        </Button>
      </div>
      <p className="mb-10 text-sm text-muted-foreground">{t("downloadNote")}</p>

      <div className="max-w-prose space-y-10">
        <div>
          <h2 className="text-xl font-semibold">{profile.name[loc]}</h2>
          <p className="mt-2 text-muted-foreground">{hero("eyebrow")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{hero("headline")}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{about("summary1")}</p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">{t("skillsHeading")}</h2>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                  {group.label[loc]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} learning={group.learning}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">{t("experienceHeading")}</h2>
          <div className="space-y-6">
            {experience.map((entry) => (
              <article key={entry.id}>
                <h3 className="font-semibold">{entry.org}</h3>
                <p className="text-sm text-accent">{entry.role[loc]}</p>
                <p className="mt-1 text-sm text-muted-foreground">{entry.scope[loc]}</p>
                <ul className="mt-2 list-disc space-y-1 ps-4 text-sm text-muted-foreground">
                  {entry.highlights.map((item, i) => (
                    <li key={i}>{item[loc]}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">{t("educationHeading")}</h2>
          <p className="text-muted-foreground">{profile.education[loc]}</p>
        </div>
      </div>
    </section>
  );
}
