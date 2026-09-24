import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import { navItems, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-black transition-shadow duration-300",
        scrolled ? "shadow-lg shadow-black/30" : "",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" aria-label="RS Soluções Digitais - Início" className="shrink-0">
          <Logo className="h-12" />
        </a>

        <button className="p-2 text-shopee md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu" aria-expanded={open}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="group relative px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              {item.label}
              <span
                className="absolute inset-x-4 bottom-0.5 h-px origin-center scale-x-0 bg-shopee-light transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={whatsappLink()} target="_blank" variant="primary" className="px-5 py-2.5 text-xs">
            Quero estruturar minha operação
          </Button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-4 mb-3 rounded-3xl border border-white/10 bg-black px-4 py-4 text-white shadow-xl shadow-black/30 md:hidden"
          aria-label="Navegação principal"
          onClick={() => setOpen(false)}
        >
          {navItems.map((item) => (
            <a key={item.to} href={item.to} className="block rounded-full px-4 py-2.5 text-sm font-semibold text-white/80">
              {item.label}
            </a>
          ))}
          <Button href={whatsappLink()} target="_blank" variant="primary" className="mt-3 w-full px-5 py-3 text-xs">
            Quero estruturar minha operação
          </Button>
        </nav>
      )}
    </header>
  );
}
