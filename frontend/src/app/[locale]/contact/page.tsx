import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, Phone, Send, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { social } from "@/content/data/social";
import { buildPageMetadata } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

const ContactForm = nextDynamic(
  () =>
    import("@/components/sections/contact-form").then((m) => m.ContactForm),
  {
    loading: () => (
      <div className="h-64 animate-pulse rounded-lg bg-foreground/5" />
    ),
  },
);

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
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return buildPageMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  const links = [
    {
      icon: Mail,
      label: t("email"),
      href: `mailto:${social.email}`,
      text: social.email,
    },
    {
      icon: Phone,
      label: t("phone"),
      href: `tel:${social.phone}`,
      text: social.phone,
      ltr: true,
    },
    {
      icon: Send,
      label: t("telegram"),
      href: social.telegram,
      external: true,
      text: "Telegram",
    },
    {
      icon: ExternalLink,
      label: t("linkedin"),
      href: social.linkedin,
      external: true,
      text: "LinkedIn",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-12 lg:grid-cols-2">
        <ul className="space-y-4">
          {links.map(({ icon: Icon, label, href, text, external, ltr }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent/40"
              >
                <Icon className="h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium" dir={ltr ? "ltr" : undefined}>
                    {text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div>
          <ContactForm />
          <p className="mt-4 text-sm text-muted-foreground">
            {t("mailtoFallback")}:{" "}
            <a href={`mailto:${social.email}`} className="text-accent hover:underline">
              {social.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
