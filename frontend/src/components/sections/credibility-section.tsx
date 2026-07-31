import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

const ITEM_KEYS = [
  "realtime",
  "trading",
  "dashboards",
  "admin",
  "commerce",
  "pwa",
] as const;

export async function CredibilitySection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "credibility" });

  return (
    <section className="border-y border-border py-16 md:py-20">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEM_KEYS.map((key) => (
          <li key={key}>
            <h3 className="text-base font-semibold tracking-tight">
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
