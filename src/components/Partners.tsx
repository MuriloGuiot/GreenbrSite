import { partners } from "../data/content";
import Reveal from "./Reveal";

export default function Partners() {
  return (
    <section id="partners" className="bg-paper py-20 md:py-24">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <p className="eyebrow leaf-rule">{partners.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            {partners.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">{partners.body}</p>
        </Reveal>

        {/* Logo strip — generous breathing room, restrained grayscale-on-hover-color */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-3 items-center gap-8 rounded-2xl border border-line bg-bone px-6 py-10 sm:gap-12 sm:px-12">
            {partners.logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-9 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm text-ink/55">{partners.coalitionNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
