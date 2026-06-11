import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("nav");

  return (
    <section className="flex flex-col items-center py-24 text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="mt-4 text-muted-foreground">Page not found</p>
      <Link href="/" className="mt-8 text-accent hover:underline">
        {t("home")}
      </Link>
    </section>
  );
}
