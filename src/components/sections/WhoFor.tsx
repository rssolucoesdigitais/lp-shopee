import { Flag, AlertCircle, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { audienceItems } from "@/data/site";
import { revealDelay } from "@/lib/utils";

const icons = [Flag, AlertCircle, Sparkles, TrendingUp];

export default function WhoFor() {
  return (
    <section id="para-quem" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          tag="Para quem é"
          title="Para empresas que querem levar o e-commerce a sério"
          description="A estruturação pode fazer sentido para empresas que:"
          center
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {audienceItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                data-reveal
                style={revealDelay(i, 90)}
                className="flex items-start gap-4 rounded-3xl border border-charcoal/8 bg-cream p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-shopee/10">
                  <Icon className="h-5 w-5 text-shopee" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
