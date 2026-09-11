import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProfilePageJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/sections/section-heading";
import { social } from "@/content/data/social";
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
  const a11y = await getTranslations({ locale, namespace: "a11y" });

  return (
    <section className="py-16 md:py-24">
      <ProfilePageJsonLd locale={locale as Locale} />
      <SectionHeading title={t("pageTitle")} as="h1" />
      <div className="max-w-prose space-y-4 text-muted-foreground leading-relaxed">
        <p>{t("summary1")}</p>
        <p>{t("summary2")}</p>
        <p>{t("summary3")}</p>
        <p className="pt-4 text-sm text-foreground">{t("education")}</p>
        <p className="text-sm text-muted-foreground">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {t("linkedinRecommendations", {
              count: social.linkedinRecommendations,
            })}
            <span className="sr-only"> {a11y("externalLink")}</span>
          </a>
        </p>
      </div>
    </section>
  );
}
