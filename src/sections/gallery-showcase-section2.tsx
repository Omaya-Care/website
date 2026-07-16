import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MediaTile5, { type MediaTile5Data } from "../components/media-tile5";
import { MediaTile5_cids } from "../_cids";

/** How long each slide stays active before auto-advancing (ms). */
const SLIDE_DURATION = 6000;
/** Track slide transition duration (ms). */
const SLIDE_TRANSITION = 500;

const MediaTile5_data: MediaTile5Data[] = [
    { imgSrc: "/assets/media/images/role-midwives-nurses.avif", description: "For Midwives and Nurses", description2: "Omaya handles every routine post-discharge check-in automatically. Your staff only step in when a patient genuinely needs clinical attention.", description3: "Returns over 20 hours of midwife time per month" },
    { imgSrc: "/assets/media/images/role-administration.avif", kind: "image", description: "For Administration", description2: "Patients who feel supported after discharge come back. Omaya secures that relationship and protects the lifetime value of every mother you serve.", description3: "Reduces post-discharge dropout and repeat visit loss" },
    { imgSrc: "/assets/media/images/role-clinical-directors.avif", kind: "image", description: "For Clinical Directors", description2: "Every Omaya call is triaged by urgency before it reaches your staff. Critical cases escalate instantly. Stable ones are documented and closed.", description3: "Full audit trail on every post-discharge interaction" },
    { imgSrc: "/assets/media/images/role-institution.avif", description: "For the Institution", description2: "Omaya aligns your hospital with national maternal health policy with zero new hardware, zero new workflows, and zero staff retraining required.", description3: "Compliant, scalable, and live within days of onboarding" }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection2({ mediaTile5Data = MediaTile5_data } = {}) {
  const count = mediaTile5Data.length;
  // Three copies so a real card always flanks the active one on BOTH sides for
  // the left/right peeks. `index` lives in the middle copy (count..2*count); the
  // seamless snap keeps it there. Left copy feeds the left peek, right copy the
  // right peek.
  const tiles = [...mediaTile5Data, ...mediaTile5Data, ...mediaTile5Data];

  const [index, setIndex] = useState(count);
  const [paused, setPaused] = useState(false);
  const [offsets, setOffsets] = useState<number[]>([]);
  const [contentInset, setContentInset] = useState(0);
  const [snapping, setSnapping] = useState(false);
  const [ready, setReady] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The card the bars/counter reflect. Every copy of a card maps to the same
  // active index, so wrapping never restarts the active card's progress fill.
  const active = index % count;

  // Measure each tile's left edge (relative to the full-bleed viewport) plus the
  // inset of the content column, so the active card can align to the heading's
  // left edge while the viewport itself spans the whole screen.
  useLayoutEffect(() => {
    const measure = () => {
      const vp = viewportRef.current;
      const content = contentRef.current;
      if (!vp || !content) return;
      const vpLeft = vp.getBoundingClientRect().left;
      setContentInset(content.getBoundingClientRect().left - vpLeft);
      setOffsets(tileRefs.current.map((el) => el?.offsetLeft ?? 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count]);

  // Enable the slide transition only after the first measured position has
  // painted, so the initial jump into the middle copy isn't animated.
  useEffect(() => {
    if (offsets.length && !ready) {
      const id = requestAnimationFrame(() => setReady(true));
      return () => cancelAnimationFrame(id);
    }
  }, [offsets, ready]);

  // After the forward slide onto the right copy finishes, snap back by one copy
  // with no transition — visually identical, so the loop reads as an endless
  // forward scroll with no reverse jump.
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform" || e.target !== trackRef.current) return;
    if (index >= 2 * count) {
      setSnapping(true);
      setIndex((i) => i - count);
    }
  };

  // Re-enable the transition on the next frame(s) once the snap has painted.
  useEffect(() => {
    if (!snapping) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setSnapping(false)));
    return () => cancelAnimationFrame(id);
  }, [snapping]);

  const offset = (offsets[index] ?? 0) - contentInset;

  return (
    <section
      className="h-[clamp(51rem,49.857143rem_+_2.380952vw,65rem)] flex pt-[4rem] pb-8 flex-col gap-[clamp(3rem,2.242857rem_+_1.577381vw,4rem)] overflow-hidden leading-[1.375rem] bg-surface max-md:h-auto max-md:pt-10 max-md:pb-12 max-md:gap-10 max-lg:leading-6 md:max-lg:h-auto md:max-lg:pt-12 md:max-lg:pb-10 2xl:pt-12 2xl:pb-10 2xl:leading-6"
      data-id="n372"
      id="for-hospitals"
    >
      <div className="h-full block px-[2.2875rem] max-md:px-6 md:max-lg:px-10 2xl:px-10" data-id="n373">
        <div ref={contentRef} className="h-full block max-w-[73.275rem] mx-auto justify-center max-lg:max-w-320 2xl:max-w-320" data-id="n374">
          <div className="flex max-w-[35.725rem] flex-col gap-[14.7px] max-lg:max-w-156 max-lg:gap-4 2xl:max-w-156 2xl:gap-4" data-id="n375">
            <h2 className="block text-[2.3125rem] leading-11 tracking-[-0.73px] max-md:text-2xl max-md:leading-[1.8125rem] max-md:tracking-[-0.54px] md:max-lg:text-[2.5rem] md:max-lg:leading-12 md:max-lg:tracking-[-0.9px] 2xl:text-5xl 2xl:leading-[3.625rem] 2xl:tracking-[-1.08px]" data-id="n381">
              Built for every role across your hospital
            </h2>
            <p className="block text-muted-foreground text-[1.0625rem] leading-[1.5625rem] tracking-[-0.12px] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.6875rem] 2xl:text-lg 2xl:leading-[1.6875rem]" data-id="n382">
              We automate the routine so your team focuses only on the mothers who truly need them.
            </p>
          </div>
          {/* Full-bleed: break out of the content column so the carousel spans the
              whole screen and both neighbouring cards can peek in. */}
          <div className="block mt-11 max-lg:mt-12 2xl:mt-12" data-id="n383">
            <div ref={viewportRef} className="relative overflow-hidden w-screen left-1/2 -ml-[50vw]" data-id="n384">
              <div
                ref={trackRef}
                className="w-max flex relative z-1 will-change-transform"
                style={{
                  transform: `translateX(${-offset}px)`,
                  transition: snapping || !ready ? "none" : `transform ${SLIDE_TRANSITION}ms ease-out`,
                }}
                onTransitionEnd={handleTransitionEnd}
                data-id="n385"
              >
                {/* key={i}: tripled infinite-loop track — position index IS the stable identity; any data-derived id collides across the 3 duplicated copies and breaks snap reconciliation. */}
                {tiles.map((d, i) => (
                  <div
                    key={i}
                    ref={(el) => { tileRefs.current[i] = el; }}
                    role="button"
                    tabIndex={-1}
                    aria-label={paused ? "Resume carousel" : "Pause carousel"}
                    onClick={() => setPaused((p) => !p)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setPaused((p) => !p); } }}
                    className="shrink-0 cursor-pointer transition-opacity duration-500"
                    style={{ opacity: i % count === active ? 1 : 0.5 }}
                  >
                    <MediaTile5 d={d} cids={MediaTile5_cids[i % count]} styles={{}} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex max-w-[42.1375rem] mt-[clamp(1.5rem,5.14881vw_-_0.971429rem,4rem)] items-center gap-[1.375rem] max-md:mt-6 max-md:pr-5 max-lg:gap-6 max-md:max-w-none md:max-lg:max-w-184 md:max-lg:pr-10 2xl:max-w-184 2xl:gap-6" data-id="n418">
            <div className="flex min-w-0 items-center flex-1 gap-2" data-id="n419">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play" : "Pause"}
                aria-pressed={paused}
                className="shrink-0 flex items-center justify-center text-color-001 hover:text-foreground transition-colors cursor-pointer"
              >
                {paused ? (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <path d="M2.2 1.3 8 5 2.2 8.7z" />
                  </svg>
                ) : (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <rect x="2" y="1.4" width="2" height="7.2" rx="0.6" />
                    <rect x="6" y="1.4" width="2" height="7.2" rx="0.6" />
                  </svg>
                )}
              </button>
              {mediaTile5Data.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(count + i)}
                  aria-label={`Show story ${i + 1} of ${count}`}
                  aria-current={i === active}
                  className="h-1 block relative min-w-0 rounded-[99px] basis-0 overflow-hidden bg-color-002 cursor-pointer"
                  style={{ flexGrow: i === active ? 3 : 1, transition: `flex-grow ${SLIDE_TRANSITION}ms ease-out` }}
                >
                  <div
                    key={`${i}-${active}`}
                    className="h-full block absolute top-0 left-0 rounded-[99px] bg-foreground pointer-events-none"
                    style={
                      i < active
                        ? { width: "100%" }
                        : i === active
                        ? {
                            width: "0%",
                            animation: `sq-progress-fill ${SLIDE_DURATION}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running",
                          }
                        : { width: "0%" }
                    }
                    onAnimationEnd={i === active ? () => setIndex((idx) => idx + 1) : undefined}
                  />
                </button>
              ))}
            </div>
            <p className="block shrink-0 overflow-hidden text-color-001 text-[0.8125rem] leading-[1.1875rem] tracking-[-0.2px] whitespace-nowrap text-nowrap max-lg:text-sm max-lg:leading-[1.3125rem] 2xl:text-sm 2xl:leading-[1.3125rem]" data-id="n430">
              <span className="inline-block" data-id="n431">
                {active + 1}
              </span>
              {` / ${count}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
