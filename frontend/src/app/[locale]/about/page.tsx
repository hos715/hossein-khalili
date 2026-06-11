import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";
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
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return buildPageMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className="py-16 md:py-24">
      <SectionHeading title={t("title")} />
      <div className="max-w-prose space-y-4 text-muted-foreground leading-relaxed">
        <p>{t("summary1")}</p>
        <p>{t("summary2")}</p>
        <p>{t("summary3")}</p>
        <p className="pt-4 text-sm text-foreground">{t("education")}</p>
      </div>
    </section>
  );
}
