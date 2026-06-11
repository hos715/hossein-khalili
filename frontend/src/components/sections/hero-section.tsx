import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { social } from "@/content/data/social";
import type { Locale } from "@/i18n/routing";

export async function HeroSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium text-accent">{t("eyebrow")}</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {t("name")}
        </h1>
        <p className="mt-4 text-xl text-foreground md:text-2xl">{t("title")}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {t("linkedinBadge", { count: social.linkedinRecommendations })}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/contact">{t("ctaContact")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">{t("ctaProjects")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume">{t("ctaResume")}</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
