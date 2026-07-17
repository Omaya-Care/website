import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export type FaqSection = { id: string; label: string };

/**
 * Compact, sticky category bar for the FAQ page on small screens (< lg).
 *
 * Replaces the design-export's 256px-tall pinned header. It:
 *  - sits just under the fixed navbar (top-14 mobile / top-16 tablet),
 *  - highlights the section currently in view (`active`) with a sliding underline,
 *  - keeps that tab scrolled into view so you always see where you are,
 *  - fades its edges to signal the row scrolls horizontally,
 *  - smooth-scrolls to a section on tap via `onSelect`.
 */
export default function FaqSectionNav({
  sections,
  active,
  onSelect,
}: {
  sections: FaqSection[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [fades, setFades] = useState({ left: false, right: true });

  const updateFades = () => {
    const s = scrollerRef.current;
    if (!s) return;
    setFades({
      left: s.scrollLeft > 4,
      right: s.scrollLeft + s.clientWidth < s.scrollWidth - 4,
    });
  };

  // Slide the underline under the active tab and keep that tab centered in view.
  useEffect(() => {
    const s = scrollerRef.current;
    const tab = tabRefs.current[active];
    if (!s || !tab) return;
    setIndicator({ left: tab.offsetLeft, width: tab.offsetWidth });
    const target = tab.offsetLeft - s.clientWidth / 2 + tab.offsetWidth / 2;
    s.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    const t = setTimeout(updateFades, 350); // let the smooth scroll settle
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    updateFades();
    window.addEventListener("resize", updateFades);
    return () => window.removeEventListener("resize", updateFades);
  }, []);

  return (
    <nav
      id="faq-mobile-nav"
      aria-label="FAQ categories"
      className="lg:hidden sticky top-14 z-40 bg-background border-b border-solid border-b-surface md:top-16"
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={updateFades}
          className="relative flex items-stretch gap-6 overflow-x-auto overflow-y-hidden px-5 md:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[s.id] = el;
                }}
                type="button"
                onClick={() => onSelect(s.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "shrink-0 whitespace-nowrap py-3.5 text-sm leading-5 transition-colors duration-200 md:text-base",
                  isActive ? "text-foreground font-medium" : "text-muted-foreground",
                )}
              >
                {s.label}
              </button>
            );
          })}
          {/* Sliding active-section underline (scrolls with the tabs). */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-color-002 transition-[left,width] duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>
        {/* Edge fades hint that the category row scrolls horizontally. */}
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent transition-opacity duration-200",
            fades.left ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent transition-opacity duration-200",
            fades.right ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
    </nav>
  );
}
