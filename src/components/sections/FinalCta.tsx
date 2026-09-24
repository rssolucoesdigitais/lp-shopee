import { Rocket } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";

export default function FinalCta() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-black py-20 text-center text-white md:py-28">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div className="sun-glow absolute -left-24 top-0 h-96 w-96 bg-shopee-deep/35" aria-hidden="true" />
      <div className="sun-glow absolute -right-24 bottom-0 h-[28rem] w-[28rem] bg-shopee/30" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shopee-light/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <p
          data-reveal
          className="glass-panel-dark mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80"
        >
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-shopee-light" aria-hidden="true" />
          Próximo passo
        </p>

        <h2 data-reveal className="mt-5 text-3xl font-extrabold leading-[1.15] md:text-4xl">
          Sua empresa está pronta para{" "}
          <span className="bg-gradient-to-r from-shopee-light to-shopee bg-clip-text text-transparent">estruturar</span> o próximo passo?
        </h2>

        <p data-reveal className="mt-6 text-lg leading-relaxed text-white/70">
          A Shopee pode ser um canal importante dentro da sua operação de e-commerce. A RS Soluções Digitais ajuda sua empresa a construir a estrutura necessária para atuar nesse canal de forma mais organizada e profissional.
        </p>

        <div data-reveal className="glow-frame relative mx-auto mt-8 flex max-w-lg items-center gap-3 overflow-hidden px-5 py-4 text-left">
          <span className="hud-corner left-2.5 top-2.5 border-l-2 border-t-2 rounded-tl-md" aria-hidden="true" />
          <span className="hud-corner right-2.5 top-2.5 border-r-2 border-t-2 rounded-tr-md" aria-hidden="true" />
          <span className="hud-corner bottom-2.5 left-2.5 border-b-2 border-l-2 rounded-bl-md" aria-hidden="true" />
          <span className="hud-corner bottom-2.5 right-2.5 border-b-2 border-r-2 rounded-br-md" aria-hidden="true" />
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-shopee-light via-shopee to-shopee-deep shadow-md shadow-shopee/40">
            <Rocket className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <p className="font-display text-base font-bold leading-snug text-white">
            Não deixe sua operação depender do improviso.
            <br />
            Estruture seu e-commerce com a RS.
          </p>
        </div>

        <div data-reveal className="mt-9">
          <Button href={whatsappLink()} target="_blank" variant="primary">
            Quero falar com a RS
          </Button>
        </div>
      </div>
    </section>
  );
}
