import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

export async function AboutTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className="py-16 md:py-20">
      <SectionHeading title={t("homeTitle")} />
      <div className="max-w-prose space-y-4 text-muted-foreground leading-relaxed">
        <p>{t("summary1")}</p>
        <p>{t("summary2")}</p>
        <p className="text-sm text-foreground">{t("since")}</p>
      </div>
      <Link
        href="/about"
        className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
      >
        {t("homeCta")}
      </Link>
    </section>
  );
}
