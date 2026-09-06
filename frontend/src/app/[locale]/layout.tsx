import type { Metadata } from "next";
import { googleSiteVerification } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MoodProvider } from "@/components/layout/mood-provider";
import { MoodDecorations } from "@/components/layout/mood-decorations";
import { ThemeMoodScript } from "@/components/layout/theme-mood-script";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { pickClientMessages } from "@/lib/client-messages";
import { DEFAULT_MOOD } from "@/lib/mood";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...googleSiteVerification(),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "a11y" });
  const isFa = locale === "fa";
  // Dynamic import so next/font only preloads the active locale family.
  const { localeFont } = isFa
    ? await import("@/lib/font-fa")
    : await import("@/lib/font-en");

  return (
    <html
      lang={locale}
      dir={isFa ? "rtl" : "ltr"}
      suppressHydrationWarning
      data-mood={DEFAULT_MOOD}
      className={`h-full ${localeFont.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeMoodScript />
        <NextIntlClientProvider messages={pickClientMessages(messages)}>
          <MoodProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
            >
              {t("skipToContent")}
            </a>
            <PersonJsonLd locale={locale as Locale} />
            <WebSiteJsonLd />
            <Header locale={locale as Locale} />
            <MoodDecorations />
            <main id="main-content" className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
              {children}
            </main>
            <Footer locale={locale as Locale} />
          </MoodProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
