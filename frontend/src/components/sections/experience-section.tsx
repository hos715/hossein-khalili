import { getTranslations } from "next-intl/server";
import { experience } from "@/content/data/experience";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

export async function ExperienceSection({
  locale,
  standalone = false,
}: {
  locale: Locale;
  standalone?: boolean;
}) {
  const t = await getTranslations({ locale, namespace: "experience" });

  return (
    <section className="py-16 md:py-20">
      <SectionHeading
        title={standalone ? t("pageTitle") : t("title")}
        as={standalone ? "h1" : "h2"}
      />
      <ol className="relative border-s border-border ps-6">
        {experience.map((entry) => (
          <li key={entry.id} className="mb-10 last:mb-0">
            <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{entry.org}</h3>
              {entry.period && (
                <span className="text-sm text-muted-foreground">
                  {entry.period[locale]}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-accent">{entry.role[locale]}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {entry.scope[locale]}
            </p>
            <ul className="mt-3 list-disc space-y-2 ps-4 text-muted-foreground">
              {entry.highlights.map((item, i) => (
                <li key={i}>{item[locale]}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
