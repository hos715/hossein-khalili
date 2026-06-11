import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 md:mb-10", className)}>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
