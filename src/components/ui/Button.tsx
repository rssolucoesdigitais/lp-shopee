import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Com `href` vira link; sem, é um <button>. */
  href?: string;
  target?: string;
  variant?: "primary" | "light" | "outline" | "dark";
  children: ReactNode;
}

const styles = {
  primary:
    "bg-shopee text-white shadow-lg shadow-shopee/35 hover:bg-shopee-dark hover:shadow-xl hover:shadow-shopee/40 hover:-translate-y-0.5",
  /** Botão claro sobre fundo laranja (ex.: header, hero). */
  light: "bg-white text-shopee shadow-lg shadow-black/10 hover:bg-cream hover:-translate-y-0.5",
  outline: "border-2 border-shopee text-shopee hover:bg-shopee hover:text-white",
  dark: "bg-charcoal text-white shadow-lg shadow-charcoal/30 hover:bg-charcoal-soft hover:-translate-y-0.5",
};

export default function Button({ href, target, variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-center text-sm font-bold transition-all duration-300",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
