import type { Metadata } from "next";
import { getSiteUrl } from "./utils";
import type { Locale } from "@/i18n/routing";

type PageMetadataOptions = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const base = getSiteUrl();
  const url = `${base}/${locale}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      images: [{ url: `${base}/og-image.png`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${base}/en${path}`,
        fa: `${base}/fa${path}`,
        "x-default": `${base}/en${path}`,
      },
    },
  };
}
