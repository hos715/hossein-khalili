import { getTranslations } from "next-intl/server";
import { Mail, Send, ExternalLink } from "lucide-react";
import { social } from "@/content/data/social";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {year} Hossein Khalili. {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${social.email}`}
            className="text-muted-foreground hover:text-foreground"
            aria-label={social.email}
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Telegram"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">{t("builtWith")}</p>
      </div>
    </footer>
  );
}
