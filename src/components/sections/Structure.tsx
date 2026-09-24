import { Rocket, Package, ShoppingCart, Settings, GraduationCap, LifeBuoy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { structureItems } from "@/data/site";
import { revealDelay } from "@/lib/utils";

const icons = [Rocket, Package, ShoppingCart, Settings, GraduationCap, LifeBuoy];

export default function Structure() {
  return (
    <section id="estrutura" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          tag="O que a RS estrutura"
          title="Uma operação de e-commerce não acontece em um único lugar"
          description="A Shopee é uma parte da operação. Por trás dela existem diversos processos que precisam estar organizados."
          center
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {structureItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                data-reveal
                style={revealDelay(i, 80)}
                className="rounded-3xl border border-charcoal/8 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-shopee/30 hover:shadow-lg hover:shadow-shopee/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-shopee-light via-shopee to-shopee-deep shadow-md shadow-shopee/30">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-charcoal">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/65">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div data-reveal className="mt-12 text-center">
          <Button href="#processo">Quero conhecer a solução</Button>
        </div>
      </div>
    </section>
  );
}
