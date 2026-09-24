import { Store, Settings2, LineChart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  { icon: Store, label: "Marketplace" },
  { icon: Settings2, label: "Operação" },
  { icon: LineChart, label: "Gestão" },
];

export default function Opportunity() {
  return (
    <section id="oportunidade" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          tag="Oportunidade"
          title="Sua empresa já está aproveitando todo o potencial do e-commerce?"
          description="Estar em um marketplace é apenas uma parte de uma operação digital. Para administrar produtos, pedidos, estoque e gestão de forma organizada, sua empresa precisa de processos que funcionem juntos. A RS ajuda a construir essa estrutura para que sua operação não dependa de improvisos."
        />

        <div
          data-reveal
          className="glow-frame-light relative flex flex-col items-stretch gap-0 overflow-hidden rounded-[1.75rem] shadow-xl shadow-shopee/10 md:flex-row"
        >
          <span className="absolute left-3 top-3 h-4 w-4 rounded-tl-md border-l-2 border-t-2 border-shopee/70" aria-hidden="true" />
          <span className="absolute right-3 top-3 h-4 w-4 rounded-tr-md border-r-2 border-t-2 border-shopee/70" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 h-4 w-4 rounded-bl-md border-b-2 border-l-2 border-shopee/70" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 h-4 w-4 rounded-br-md border-b-2 border-r-2 border-shopee/70" aria-hidden="true" />

          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={`group relative flex flex-1 cursor-default flex-col items-center gap-3 overflow-hidden px-6 py-9 text-center ${i > 0 ? "md:border-l md:border-dashed md:border-shopee/20" : ""}`}
            >
              <span
                className="pointer-events-none absolute inset-0 scale-90 bg-[radial-gradient(circle_at_50%_38%,rgb(238_77_45_/_0.14),transparent_68%)] opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                aria-hidden="true"
              />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-shopee-light via-shopee to-shopee-deep shadow-lg shadow-shopee/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-shopee/55">
                <pillar.icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </span>
              <span className="relative font-display text-lg font-bold text-charcoal transition-all duration-300 group-hover:-translate-y-1 group-hover:text-shopee-deep">
                {pillar.label}
              </span>
              <span
                className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-shopee-light to-shopee transition-all duration-300 group-hover:w-12"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-display text-xl font-bold text-charcoal">Tudo trabalhando de forma mais organizada.</p>
      </div>
    </section>
  );
}
