import { redd } from "../data/content";
import Reveal from "./Reveal";
import YouTubeFacade from "./YouTubeFacade";

export default function Redd() {
  return (
    <section id="redd" className="bg-paper py-24 md:py-32">
      <div className="container-px">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow leaf-rule">{redd.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-5xl">
            {redd.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{redd.intro}</p>
        </Reveal>

        {/* The project film follows the introduction as the primary proof point. */}
        <Reveal className="mt-14">
          <article className="rounded-2xl border border-line bg-bone p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl px-1 pb-7 sm:px-2 lg:pb-9">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-moss">
                {redd.video.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-2xl font-light leading-tight text-ink md:text-3xl">
                {redd.video.heading}
              </h3>
              <p className="mt-4 leading-relaxed text-ink/70">{redd.video.description}</p>
            </div>
            <YouTubeFacade
              videoId={redd.video.videoId}
              title={redd.video.title}
              label={redd.video.playLabel}
            />
            <p className="px-1 pt-4 text-sm text-ink/55 sm:px-2">
              {redd.video.caption}
            </p>
          </article>
        </Reveal>

        {/* Territory map — lead visual for the subsection */}
        <Reveal className="mt-14">
          <figure className="overflow-hidden rounded-2xl border border-line">
            <img
              src="/images/ndvi-mirador.jpg"
              alt="NDVI satellite analysis of the Mirador farms, 2020"
              className="w-full object-cover"
              loading="lazy"
            />
            <figcaption className="bg-bone px-5 py-3 text-sm text-ink/60">
              NDVI satellite analysis of the project territory — Fazendas Mirador, 2020.
            </figcaption>
          </figure>
        </Reveal>

        {/* Timeline + methodology */}
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ol className="relative space-y-8 border-l border-line pl-7">
              {redd.timeline.map((t, i) => (
                <Reveal key={i} delay={i * 100} as="li" className="relative">
                  <span className="absolute -left-[33px] top-1 h-3.5 w-3.5 rounded-full border-2 border-paper bg-forest" />
                  <div className="text-xs font-semibold uppercase tracking-eyebrow text-moss">
                    {t.date}
                  </div>
                  <h3 className="mt-1 font-display text-xl text-ink">{t.title}</h3>
                  <p className="mt-1 text-ink/70">{t.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="md:col-span-5" delay={120}>
            <div className="rounded-2xl bg-forest p-7 text-white">
              <h3 className="font-display text-xl">{redd.methodology.title}</h3>
              <p className="mt-3 leading-relaxed text-white/85">{redd.methodology.body}</p>
            </div>
          </Reveal>
        </div>

        {/* Goals + flagship species image */}
        <div className="mt-16 grid items-stretch gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <div className="h-full rounded-2xl border border-line bg-bone p-8">
              <h3 className="font-display text-2xl text-ink">{redd.goals.title}</h3>
              <ul className="mt-5 space-y-3">
                {redd.goals.items.map((g, i) => (
                  <li key={i} className="flex gap-3 text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6" delay={100}>
            <figure className="h-full overflow-hidden rounded-2xl">
              <img
                src="/images/tiger-cat.jpg"
                alt="Tiger cat (Leopardus tigrinus), locally known as pintadinho"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="bg-ink px-5 py-3 text-sm italic text-white/80">
                Leopardus tigrinus — the &ldquo;pintadinho&rdquo; the project protects.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Activities */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl text-ink">{redd.activities.title}</h3>
        </Reveal>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {redd.activities.items.map((a, i) => (
            <Reveal key={i} delay={(i % 3) * 70} className="bg-paper p-6">
              <span className="text-xs font-semibold text-earth">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-ink/85">{a}</p>
            </Reveal>
          ))}
        </div>

        {/* Legal note */}
        <Reveal className="mt-12">
          <p className="max-w-4xl border-l-2 border-sage pl-5 text-sm leading-relaxed text-ink/60">
            {redd.legalNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
