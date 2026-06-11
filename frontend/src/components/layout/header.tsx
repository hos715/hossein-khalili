import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { getProfileName } from "@/content/data/profile";
import type { Locale } from "@/i18n/routing";

const links = [
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/skills", key: "skills" },
  { href: "/experience", key: "experience" },
  { href: "/blog", key: "blog" },
  { href: "/resume", key: "resume" },
  { href: "/contact", key: "contact" },
] as const;

export async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations("nav");
  const a11y = await getTranslations("a11y");
  const name = getProfileName(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="max-w-[10rem] truncate text-sm font-semibold tracking-tight hover:text-accent sm:max-w-none"
          aria-label={name}
        >
          {name}
        </Link>
        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label={a11y("mainNav")}
        >
          {links.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <LocaleSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
