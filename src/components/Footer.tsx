import { site, nav, footer, hero, contact } from "../data/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Closing CTA band */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/forest-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-px relative py-20 text-center md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-light leading-tight md:text-5xl">
              Let&rsquo;s build climate value with roots in the Cerrado.
            </h2>
            <a
              href={hero.primaryCta.href}
              className="mt-8 inline-block rounded-full bg-sage px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </a>
          </Reveal>
        </div>
      </div>

      {/* Footer columns */}
      <div className="container-px grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/images/logo-greenbr-white.png" alt="GreenBR" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{footer.blurb}</p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-sage">Explore</h3>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-white/70 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-sage">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{contact.details.address}</li>
            <li>
              <a href={`mailto:${contact.details.email}`} className="hover:text-white">
                {contact.details.email}
              </a>
            </li>
            {contact.details.phones.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <span>{footer.legal}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
