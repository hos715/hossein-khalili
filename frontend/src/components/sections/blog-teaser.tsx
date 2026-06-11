import { getTranslations } from "next-intl/server";
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
import type { Locale } from "@/i18n/routing";

export async function BlogTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const home = await getTranslations({ locale, namespace: "home" });
  const posts = getBlogPosts(locale).slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <SectionHeading title={home("blogTeaser")} className="mb-0" />
        <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
          {home("viewAll")}
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.slug} className="transition-colors hover:border-accent/40">
            <CardHeader>
              <CardTitle className="text-base leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <p className="px-6 pb-6 text-xs text-muted-foreground">
              {t("readingTime", { minutes: readingTime(post.content) })}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
