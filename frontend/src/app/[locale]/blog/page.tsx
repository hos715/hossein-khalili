import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getBlogPosts } from "@/content/data/blog-posts";
import { readingTime } from "@/lib/utils";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const t = await getTranslations({ locale, namespace: "metadata.blog" });
  return buildPageMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/blog",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getBlogPosts(locale as Locale);

  return (
    <section className="py-16 md:py-24">
      <SectionHeading title={t("pageTitle")} subtitle={t("subtitle")} as="h1" />
      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="transition-colors hover:border-accent/40">
            <CardHeader>
              <CardTitle className="text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.description}</CardDescription>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                <span className="text-xs text-muted-foreground">
                  {t("readingTime", { minutes: readingTime(post.content) })}
                </span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
