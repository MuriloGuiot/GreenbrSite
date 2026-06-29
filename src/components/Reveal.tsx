import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode, Ref } from "react";

/**
 * <Reveal> wraps any content and fades it up the first time it scrolls into
 * view. It uses the browser's IntersectionObserver (no library needed) and
 * disconnects after firing once, so it's cheap. `delay` (ms) lets you stagger
 * siblings. `as` lets you render a semantic tag (e.g. "li" inside a list).
 * Motion is automatically disabled for users who prefer reduced motion, because
 * the CSS in index.css zeroes out transition durations.
 */
type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as,
}: RevealProps) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`${className} transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
