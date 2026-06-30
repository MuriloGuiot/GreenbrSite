import { climateContext } from "../data/content";
import Reveal from "./Reveal";
import YouTubeFacade from "./YouTubeFacade";

export default function ClimateContext() {
  return (
    <section id="climate-context" className="bg-forest py-24 text-white md:py-32">
      <div className="container-px">
        <Reveal className="max-w-3xl">
          <p className="eyebrow leaf-rule text-sage before:bg-sage">
            {climateContext.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight md:text-5xl">
            {climateContext.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            {climateContext.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {climateContext.videos.map((video, index) => (
            <Reveal key={video.videoId} delay={index * 100} className="h-full">
              <article className="flex h-full flex-col">
                <div className="flex-1 px-1">
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-sage">
                    {video.source}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-snug text-white md:text-2xl">
                    {video.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                    {video.description}
                  </p>
                </div>
                <YouTubeFacade
                  videoId={video.videoId}
                  title={video.title}
                  label={video.playLabel}
                  className="mt-6"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
