import { about } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-bone py-24 md:py-32">
      <div className="container-px grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Editorial image beside the text */}
        <Reveal className="md:col-span-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/forest-aerial.jpg"
              alt="Aerial view of dense Cerrado forest"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Narrative */}
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow leaf-rule">{about.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-ink/75">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80} as="p">
                {p}
              </Reveal>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {about.stats.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="bg-paper p-6">
                <div className="font-display text-3xl font-light text-forest md:text-4xl">
                  {s.value}
                  {s.unit && <span className="ml-1 text-lg text-earth">{s.unit}</span>}
                </div>
                <div className="mt-2 text-sm text-ink/60">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
