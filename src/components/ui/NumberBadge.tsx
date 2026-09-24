import { cn } from "@/lib/utils";

/** Selo circular sólido com o número da etapa — sem gradiente, contorno tracejado como uma etiqueta. */
export default function NumberBadge({ n, light, className }: { n: number; light?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold",
        light ? "bg-white text-shopee" : "bg-shopee text-white",
        className,
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
