import { profile } from "@/content/data/profile";
import { social } from "@/content/data/social";
import { getSiteUrl } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

function personEntity(locale: Locale) {
  const base = getSiteUrl();
  return {
    "@type": "Person" as const,
    name: profile.name.en,
    alternateName: profile.alternateName,
    jobTitle: profile.jobTitle[locale],
    url: `${base}/${locale}`,
    email: social.email,
    image: `${base}/opengraph-image`,
    sameAs: [social.linkedin, social.telegram],
    knowsAbout: profile.knowsAbout,
  };
}

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    ...personEntity(locale),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name.en,
    alternateName: profile.alternateName,
    url: base,
    inLanguage: ["en", "fa"],
    publisher: {
      "@type": "Person",
      name: profile.name.en,
      url: base,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProfilePageJsonLd({ locale }: { locale: Locale }) {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${base}/${locale}`,
    mainEntity: personEntity(locale),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type BreadcrumbItem = { name: string; path: string };

export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale;
  items: BreadcrumbItem[];
}) {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}/${locale}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostingJsonLd({
  locale,
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
}: {
  locale: Locale;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
}) {
  const url = `${getSiteUrl()}/${locale}/blog/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: profile.name.en,
      alternateName: profile.alternateName,
    },
    inLanguage: locale === "fa" ? "fa" : "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ResumeCreativeWorkJsonLd({ locale }: { locale: Locale }) {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `Resume — ${profile.name[locale]}`,
    url: `${base}/${locale}/resume`,
    author: personEntity(locale),
    inLanguage: locale === "fa" ? "fa" : "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
