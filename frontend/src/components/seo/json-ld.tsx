import { social } from "@/content/data/social";
import { getSiteUrl } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hossein Khalili",
    jobTitle: "Front-End Developer",
    url: `${getSiteUrl()}/${locale}`,
    email: social.email,
    sameAs: [social.linkedin, social.telegram],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "WebSocket",
      "NestJS",
    ],
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
      name: "Hossein Khalili",
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
