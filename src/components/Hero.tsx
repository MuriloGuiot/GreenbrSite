import { hero } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-white">
      {/* Ambient forest texture behind everything, very subtle. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/forest-aerial.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/85 to-forest" />

      <div className="container-px relative grid items-center gap-10 pb-16 pt-32 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-40">
        {/* Text column */}
        <div className="md:col-span-7 lg:col-span-6">
          <p className="eyebrow leaf-rule text-sage">{hero.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {hero.body}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-sage px-7 py-3 text-center text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/30 px-7 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Image column — the sharpest asset, a tall misty forest. */}
        <div className="md:col-span-5 lg:col-span-6">
          <div className="relative ml-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl ring-1 ring-white/15 md:max-w-none">
            <img
              src="/images/forest-mist.jpg"
              alt="Misty forest in the Brazilian Cerrado-Amazon transition"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
