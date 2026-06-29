import { impact } from "../data/content";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section id="impact" className="bg-bone py-24 md:py-32">
      <div className="container-px grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Image: the community / IFMA partnership */}
        <Reveal className="md:col-span-6 md:order-2">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/ifma-partnership.jpg"
                alt="GreenBR and IFMA representatives in the field, Maranhão"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/community-mirador.jpg"
                alt="Mirador State Park area where traditional communities live"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <div className="md:col-span-6 md:order-1">
          <Reveal>
            <p className="eyebrow leaf-rule">{impact.eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              {impact.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">{impact.body}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-7 rounded-2xl border border-line bg-paper p-7">
              <h3 className="font-display text-lg text-forest">{impact.partnershipTitle}</h3>
              <p className="mt-2 leading-relaxed text-ink/75">{impact.partnershipBody}</p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {impact.cards.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="font-display text-2xl font-light text-forest md:text-3xl">
                  {c.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-ink/60">{c.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
