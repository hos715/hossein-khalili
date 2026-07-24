import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { getSiteUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { MoodProvider } from "@/components/layout/mood-provider";
import { ThemeMoodScript } from "@/components/layout/theme-mood-script";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { DEFAULT_MOOD } from "@/lib/mood";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-en",
  weight: ["400", "600"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-sans-fa",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
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

  return (
    <html
      lang={locale}
      dir={isFa ? "rtl" : "ltr"}
      suppressHydrationWarning
      data-mood={DEFAULT_MOOD}
      className={`h-full ${inter.variable} ${vazirmatn.variable}`}
      style={
        {
          "--font-sans-active": isFa
            ? "var(--font-sans-fa)"
            : "var(--font-sans-en)",
        } as React.CSSProperties
      }
    >
      <body className="flex min-h-full flex-col">
        <ThemeMoodScript />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
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
            <main id="main-content" className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
              {children}
            </main>
            <Footer locale={locale as Locale} />
            </MoodProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
