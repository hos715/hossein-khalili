import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { social } from "@/content/data/social";
import type { Locale } from "@/i18n/routing";

export async function ContactCta({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "contact" });
  const a11y = await getTranslations({ locale, namespace: "a11y" });

  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {t("ctaTitle")}
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {t("ctaSubtitle")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/contact">{t("ctaButton")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center gap-1"
            >
              {social.email}
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              {t("ctaLinkedIn")}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only">{a11y("externalLink")}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
