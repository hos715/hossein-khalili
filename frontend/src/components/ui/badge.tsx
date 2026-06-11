import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = ({
  className,
  learning,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { learning?: boolean }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium",
      learning && "border-dashed text-muted-foreground",
      className,
    )}
    {...props}
  />
);

export { Badge };
