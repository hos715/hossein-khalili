import { getTranslations } from "next-intl/server";
import { skillGroups } from "@/content/data/skills";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

export async function SkillsSection({
  locale,
  standalone = false,
  compact = false,
}: {
  locale: Locale;
  standalone?: boolean;
  compact?: boolean;
}) {
  const t = await getTranslations({ locale, namespace: "skills" });
  const groups = compact
    ? skillGroups.filter((g) => g.id !== "tools" && g.id !== "ai")
    : skillGroups;

  return (
    <section className="py-16 md:py-20">
      <SectionHeading
        title={standalone ? t("pageTitle") : t("title")}
        subtitle={
          standalone ? t("intro") : compact ? t("homeSubtitle") : undefined
        }
        as={standalone ? "h1" : "h2"}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.id}
            className={
              group.learning
                ? "rounded-lg border border-dashed border-border p-5"
                : "rounded-lg border border-border p-5"
            }
          >
            <h3 className="mb-3 text-sm font-semibold">
              {group.learning ? t("learningLabel") : group.label[locale]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Badge learning={group.learning}>{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
