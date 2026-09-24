import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ tag, title, description, light, center }: SectionHeadingProps) {
  return (
    <div data-reveal className={cn("mb-10 max-w-2xl", center && "mx-auto text-center")}>
      {tag && (
        <p
          className={cn(
            "promo-tag mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide",
            light ? "border-white/40 bg-white/10 text-white" : "text-shopee",
          )}
        >
          {tag}
        </p>
      )}
      <h2 className={cn("text-3xl font-extrabold leading-[1.15] md:text-4xl", light ? "text-white" : "text-charcoal")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/80" : "text-charcoal/70")}>{description}</p>
      )}
    </div>
  );
}
