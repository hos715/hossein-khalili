import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

const ITEM_KEYS = [
  "complex",
  "realtime",
  "dashboards",
  "fintech",
  "commerce",
  "emerging",
] as const;

export async function SpecializationSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "specialize" });

  return (
    <section className="py-16 md:py-20">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <ul className="grid gap-6 md:grid-cols-2">
        {ITEM_KEYS.map((key) => (
          <li
            key={key}
            className="border-s-2 border-accent/40 ps-4 py-1"
          >
            <h3 className="font-semibold tracking-tight">
              {t(`items.${key}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t(`items.${key}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
