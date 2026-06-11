import { Inter, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { PersonJsonLd } from "@/components/seo/json-ld";
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
      className={`h-full ${inter.variable} ${vazirmatn.variable}`}
      style={
        {
          "--font-sans-active": isFa
            ? "var(--font-sans-fa)"
            : "var(--font-sans-en)",
        } as React.CSSProperties
      }
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
            >
              {t("skipToContent")}
            </a>
            <PersonJsonLd locale={locale as Locale} />
            <Header />
            <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
