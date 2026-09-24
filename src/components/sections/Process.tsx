import SectionHeading from "@/components/ui/SectionHeading";
import NumberBadge from "@/components/ui/NumberBadge";
import logoShopee from "@/assets/logo-shopee.webp";
import { processSteps } from "@/data/site";
import { revealDelay } from "@/lib/utils";

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <img
        src={logoShopee}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 w-80 rotate-6 opacity-[0.16]"
        style={{ maskImage: "radial-gradient(circle at 70% 50%, #000 0%, transparent 80%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading tag="Processo" title="Da ideia à operação estruturada" center />

        <div className="space-y-4">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              data-reveal
              style={revealDelay(i, 90)}
              className="glow-frame-light border-soft group relative flex items-center gap-5 overflow-hidden rounded-2xl p-5 shadow-md shadow-shopee/5 transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:shadow-xl hover:shadow-shopee/20 md:p-6"
            >
              <span className="hud-corner left-2 top-2 border-l-2 border-t-2 rounded-tl-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="hud-corner right-2 top-2 border-r-2 border-t-2 rounded-tr-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="hud-corner bottom-2 left-2 border-b-2 border-l-2 rounded-bl-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="hud-corner bottom-2 right-2 border-b-2 border-r-2 rounded-br-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <NumberBadge n={i + 1} className="bg-gradient-to-br from-shopee-light via-shopee to-shopee-deep shadow-md shadow-shopee/30 transition-transform duration-300 group-hover:scale-110" />
              <div className="border-l border-dashed border-shopee/20 pl-5">
                <h3 className="font-display text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
