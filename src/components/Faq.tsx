import { useState } from "react";
import { faq } from "../data/content";
import Reveal from "./Reveal";

export default function Faq() {
  // Track which item is open. First one starts open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bone py-24 md:py-32">
      <div className="container-px grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <p className="eyebrow leaf-rule">{faq.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            {faq.title}
          </h2>
        </Reveal>

        <div className="md:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-ink md:text-xl">{item.q}</span>
                    <span
                      className={`flex-none text-2xl text-moss transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {/* Smooth height transition via grid-rows trick */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl leading-relaxed text-ink/70">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
