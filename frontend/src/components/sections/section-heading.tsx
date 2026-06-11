import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
  as: Heading = "h2",
}: {
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("mb-8 md:mb-10", className)}>
      <Heading className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</Heading>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
