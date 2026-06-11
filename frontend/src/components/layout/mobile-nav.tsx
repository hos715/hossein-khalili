"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/experience", key: "experience" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const a11y = useTranslations("a11y");

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-expanded={open}
        aria-label={open ? t("closeMenu") : t("menu")}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div
          className="fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={a11y("mainNav")}
        >
          <nav className="flex flex-col gap-1 p-4">
            {links.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium hover:bg-foreground/5",
                )}
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
