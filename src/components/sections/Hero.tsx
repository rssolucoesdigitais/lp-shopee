import { ShoppingBag, PackageCheck, Boxes, TrendingUp } from "lucide-react";
import logoShopee from "@/assets/logo-shopee.webp";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div className="sun-glow absolute -left-24 -top-24 h-96 w-96 bg-shopee/25" aria-hidden="true" />
      <div className="sun-glow absolute -right-24 top-1/3 h-[28rem] w-[28rem] bg-shopee-deep/30" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shopee-light/60 to-transparent" aria-hidden="true" />
      <img
        src={logoShopee}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-32 w-56 rotate-6 opacity-[0.18] md:top-40 md:w-72"
        style={{ maskImage: "radial-gradient(circle at 60% 40%, #000 0%, transparent 75%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div data-reveal>
          <p className="glass-panel-dark inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-shopee-light" aria-hidden="true" />
            RS Soluções Digitais × Shopee
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-white md:text-5xl">
            Sua empresa pode ir muito além de simplesmente estar na{" "}
            <span className="bg-gradient-to-r from-shopee-light to-shopee bg-clip-text text-transparent">Shopee</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Estruture sua operação de e-commerce para transformar a Shopee em um canal integrado ao seu negócio.
          </p>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
            A RS Soluções Digitais ajuda sua empresa a organizar produtos, processos, gestão e operação para construir uma presença mais profissional no marketplace.
          </p>

          <div className="mt-9">
            <Button href={whatsappLink()} target="_blank" variant="primary">
              Quero estruturar minha operação
            </Button>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-sm">
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <span className="absolute left-4 top-4 h-4 w-4 rounded-tl-lg border-l-2 border-t-2 border-shopee-light/70" aria-hidden="true" />
            <span className="absolute right-4 top-4 h-4 w-4 rounded-tr-lg border-r-2 border-t-2 border-shopee-light/70" aria-hidden="true" />
            <span className="absolute bottom-4 left-4 h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-shopee-light/70" aria-hidden="true" />
            <span className="absolute bottom-4 right-4 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-shopee-light/70" aria-hidden="true" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-shopee-light to-shopee shadow-lg shadow-shopee/40">
              <ShoppingBag className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <p className="mt-5 font-display text-xl font-bold text-white">Operação estruturada</p>
            <p className="mt-1 text-sm text-white/50">Produtos, processos e gestão trabalhando juntos.</p>

            <div className="mt-6 space-y-3">
              <div className="flex cursor-default items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-shopee-light hover:shadow-[0_0_16px_-2px_var(--color-shopee-light)]">
                <Boxes className="h-5 w-5 shrink-0 text-shopee-light" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/90">Produtos organizados</span>
              </div>
              <div className="flex cursor-default items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-shopee-light hover:shadow-[0_0_16px_-2px_var(--color-shopee-light)]">
                <PackageCheck className="h-5 w-5 shrink-0 text-shopee-light" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/90">Processos conectados</span>
              </div>
              <div className="flex cursor-default items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-shopee-light hover:shadow-[0_0_16px_-2px_var(--color-shopee-light)]">
                <TrendingUp className="h-5 w-5 shrink-0 text-shopee-light" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/90">Gestão mais organizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
