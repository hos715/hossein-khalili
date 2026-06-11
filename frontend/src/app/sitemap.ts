import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/data/blog-posts";
import { projects } from "@/content/data/projects";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/utils";

const staticPaths = [
  "",
  "/about",
  "/projects",
  "/skills",
  "/experience",
  "/blog",
  "/resume",
  "/contact",
];

function localeAlternates(path: string) {
  const base = getSiteUrl();
  return {
    languages: Object.fromEntries(
      routing.locales.map((l) => [l, `${base}/${l}${path}`]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/resume" ? 0.85 : 0.8,
        alternates: localeAlternates(path),
      });
    }

    for (const project of projects) {
      entries.push({
        url: `${base}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: project.featured ? 0.9 : 0.7,
        alternates: localeAlternates(`/projects/${project.slug}`),
      });
    }

    for (const post of blogPosts.filter((p) => p.locale === locale && !p.draft)) {
      entries.push({
        url: `${base}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: localeAlternates(`/blog/${post.slug}`),
      });
    }
  }

  return entries;
}
