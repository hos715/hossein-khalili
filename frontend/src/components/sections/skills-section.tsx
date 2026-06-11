import { getTranslations } from "next-intl/server";
import { skillGroups } from "@/content/data/skills";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Locale } from "@/i18n/routing";

export async function SkillsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "skills" });

  return (
    <section className="py-16 md:py-20">
      <SectionHeading title={t("title")} />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
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
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} learning={group.learning}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
