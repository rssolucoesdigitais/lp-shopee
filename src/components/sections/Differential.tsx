import logoShopee from "@/assets/logo-shopee.webp";

const points = ["Produtos precisam estar organizados.", "Processos precisam estar definidos.", "Gestão precisa acompanhar a operação.", "E sua equipe precisa saber como tudo funciona."];

export default function Differential() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div className="dot-texture absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="sun-glow absolute -right-32 top-0 h-96 w-96 bg-shopee/25" aria-hidden="true" />
      <img
        src={logoShopee}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-80 -rotate-12 opacity-[0.18]"
        style={{ maskImage: "radial-gradient(circle at 30% 70%, #000 0%, transparent 80%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <p data-reveal className="promo-tag mx-auto inline-flex items-center gap-2 rounded-full border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          Diferencial
        </p>

        <h2 data-reveal className="mt-5 text-3xl font-extrabold leading-[1.15] md:text-4xl">
          Não entregamos apenas uma presença na Shopee. Estruturamos o que existe por trás dela.
        </h2>

        <p data-reveal className="mt-6 text-lg leading-relaxed text-white/75">
          Uma operação profissional precisa ir além dos anúncios.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {points.map((point, i) => (
            <div
              key={point}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group glow-frame relative flex min-h-[6.5rem] cursor-default items-center justify-center overflow-hidden px-6 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-shopee/25"
            >
              <span
                className="pointer-events-none absolute inset-0 scale-90 bg-[radial-gradient(circle_at_50%_50%,rgb(238_77_45_/_0.18),transparent_70%)] opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="hud-corner left-2.5 top-2.5 border-l-2 border-t-2 rounded-tl-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="hud-corner right-2.5 top-2.5 border-r-2 border-t-2 rounded-tr-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="hud-corner bottom-2.5 left-2.5 border-b-2 border-l-2 rounded-bl-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="hud-corner bottom-2.5 right-2.5 border-b-2 border-r-2 rounded-br-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <p className="relative font-display text-base font-semibold text-white transition-colors duration-300 group-hover:text-shopee-light">{point}</p>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-10 font-display text-xl font-bold text-shopee-light">
          É essa estrutura que a RS ajuda sua empresa a construir.
        </p>
      </div>
    </section>
  );
}
