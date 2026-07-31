import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { experience } from "@/content/data/experience";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

export async function ExperienceTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "experience" });
  const home = await getTranslations({ locale, namespace: "home" });

  return (
    <section className="py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          title={t("title")}
          subtitle={t("homeSubtitle")}
          className="mb-0"
        />
        <Link
          href="/experience"
          className="shrink-0 text-sm font-medium text-accent hover:underline"
        >
          {home("viewAll")}
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {experience.map((entry) => (
          <article key={entry.id} className="rounded-lg border border-border p-5">
            <h3 className="font-semibold">{entry.org}</h3>
            <p className="mt-1 text-sm text-accent">{entry.role[locale]}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {entry.scope[locale]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
