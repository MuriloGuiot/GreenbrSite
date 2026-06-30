import { useEffect, useState } from "react";
import { nav, hero } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Switch the header from transparent (over the hero) to solid once the user
  // scrolls past ~40px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="GreenBR home">
          <img
            src={solid ? "/images/logo-greenbr.png" : "/images/logo-greenbr-white.png"}
            alt="GreenBR"
            className="h-12 w-auto md:h-14"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-moss ${
                solid ? "text-ink/80" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-moss"
          >
            {hero.primaryCta.label}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-ink" : "text-white"}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-paper px-6 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href={hero.primaryCta.href}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {hero.primaryCta.label}
          </a>
        </nav>
      )}
    </header>
  );
}
