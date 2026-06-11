import type { Metadata } from "next";
import { getSiteUrl } from "./utils";
import type { Locale } from "@/i18n/routing";

type PageMetadataOptions = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const base = getSiteUrl();
  const url = `${base}/${locale}${path}`;
  const ogImage = `${base}/opengraph-image`;

  const openGraph: Metadata["openGraph"] = {
    title,
    description,
    url,
    type: openGraphType,
    locale: locale === "fa" ? "fa_IR" : "en_US",
    images: [{ url: ogImage, width: 1200, height: 630 }],
    ...(openGraphType === "article" && publishedTime
      ? {
          publishedTime,
          ...(modifiedTime ? { modifiedTime } : {}),
        }
      : {}),
  };

  return {
    title,
    description,
    robots: { index: true, follow: true },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
