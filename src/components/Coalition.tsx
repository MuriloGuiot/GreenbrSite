import { coalition } from "../data/content";
import Reveal from "./Reveal";

export default function Coalition() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url('/images/forest-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />

      <div className="container-px relative">
        <Reveal>
          <p className="eyebrow leaf-rule text-sage">{coalition.eyebrow}</p>
          <blockquote className="mt-6 max-w-4xl font-display text-2xl font-light leading-snug md:text-3xl lg:text-4xl">
            &ldquo;{coalition.quote}&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
