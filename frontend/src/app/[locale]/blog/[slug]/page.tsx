import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { BlogPostingJsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getBlogPost } from "@/content/data/blog-posts";
import { buildPageMetadata } from "@/lib/metadata";
import { readingTime } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts
      .filter((p) => p.locale === locale && !p.draft)
      .map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(locale as Locale, slug);
  if (!post) return {};
  return buildPageMetadata({
    locale: locale as Locale,
    title: `${post.title} — Hossein Khalili`,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPost(locale as Locale, slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <article className="py-16 md:py-24">
      <BlogPostingJsonLd
        locale={locale as Locale}
        title={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-accent hover:underline"
      >
        ← {t("back")}
      </Link>
      <header className="max-w-prose">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{post.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("readingTime", { minutes: readingTime(post.content) })}
        </p>
      </header>
      <div className="mt-10">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
}
