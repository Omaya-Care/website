import { useEffect, useRef, useState } from "react";
import ExpandableItem, { type ExpandableItemData } from "../components/expandable-item";

type SlideData = {
  number: string;
  audience: string;
  heading: string;
  items: ExpandableItemData[];
};

const slides: SlideData[] = [
  {
    number: "01",
    audience: "For Hospitals",
    heading: "Built for your care team",
    items: [
      {
        label: "How does Omaya contact patients after discharge?",
        description:
          "Omaya automatically initiates post-discharge calls within 24–48 hours using a trained AI model, following your hospital's protocol and documentation requirements.",
      },
      {
        label: "What alerts does the hospital receive?",
        description:
          "Your clinical team receives instant notifications when a patient flags concerning symptoms, vital changes, or medication questions that require immediate attention.",
      },
      {
        label: "How does Omaya integrate with our existing workflow?",
        description:
          "Omaya connects directly to your EHR system and works alongside your care team, generating structured call summaries and escalation reports automatically.",
      },
    ],
  },
  {
    number: "02",
    audience: "For Mothers",
    heading: "Here for you after discharge",
    items: [
      {
        label: "How does Omaya support me after I leave the hospital?",
        description:
          "Omaya checks in on you regularly after discharge, asking about your recovery, your baby's feeding, and any symptoms — all from the comfort of your home.",
      },
      {
        label: "What happens if I have a concern?",
        description:
          "If you share something that needs attention, Omaya immediately alerts your care team so a nurse or doctor can follow up directly.",
      },
      {
        label: "Is my health information kept private?",
        description:
          "All your conversations with Omaya are encrypted and stored securely, following the same HIPAA standards your hospital uses.",
      },
    ],
  },
];

export default function StickyDualSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = outerRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const half = el.offsetHeight / 2;
      setActiveSlide(top < -half ? 1 : 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goToSlide(index: number) {
    const el = outerRef.current;
    if (!el) return;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const targetScroll = sectionTop + (el.offsetHeight * index) / slides.length;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }

  return (
    // Negative margin pulls section up to overlap with end of how-it-works exit zone (785.3px = how-it-works sticky height).
    // z-10 ensures this renders on top during the overlap.
    <div ref={outerRef} className="relative z-10" style={{ height: "200vh", marginTop: "-785.3px" }}>
      {/* Card format matching the how-it-works sticky: margin + rounded corners */}
      <div className="w-[calc(100%-14.6px)] sticky top-[7.3px] mx-[7.3px] h-[calc(100vh-7.3px)] rounded-[7.3px] overflow-hidden">

        {/* Per-slide backgrounds — horizontal curtain wipe */}
        {slides.map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 z-0 overflow-hidden"
            style={{
              transform: activeSlide === i
                ? "translateX(0%)"
                : i === 0
                ? "translateX(-100%)"
                : "translateX(100%)",
              transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <img
              className="w-full h-full object-cover"
              style={{ transform: "scaleX(-1)" }}
              alt="Omaya care"
              src="/assets/images/hero-omaya.png"
            />
            <div
              className="absolute bottom-0 inset-x-0 h-2/3 pointer-events-none"
              style={{ backgroundImage: "linear-gradient(var(--clr-3) 0%, var(--clr-2) 100%)", opacity: 0.5 }}
            />
            <div
              className="absolute top-0 right-0 w-3/4 h-1/2 pointer-events-none"
              style={{ background: "linear-gradient(to bottom left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 35%, transparent 65%)" }}
            />
          </div>
        ))}

        {/* Slide content — fades in with slight upward rise, delayed after bg wipe starts */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 z-10 flex flex-col justify-center"
            style={{
              paddingLeft: "clamp(1.5rem, 4vw, 3.75rem)",
              paddingRight: "clamp(1.5rem, 4vw, 3.75rem)",
              opacity: activeSlide === i ? 1 : 0,
              transform: activeSlide === i ? "translateY(0)" : "translateY(1rem)",
              transition: "opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s",
              pointerEvents: activeSlide === i ? "auto" : "none",
            }}
          >
            <div className="max-w-lg">
              <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
                {slide.audience}
              </p>
              <h2 className="text-background text-[2.3125rem] leading-11 tracking-[-0.73px] mb-8">
                {slide.heading}
              </h2>
              <div className="flex flex-col gap-[7.3px]">
                {slide.items.map((item, j) => (
                  <ExpandableItem key={j} d={item} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Right-side nav */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className="flex flex-col items-end gap-1 cursor-pointer text-right transition-colors duration-300"
              style={{ color: activeSlide === i ? "white" : "rgba(255,255,255,0.35)" }}
            >
              <span className="text-xs tracking-widest uppercase">{slide.audience}</span>
              <span className="text-2xl font-light leading-none">{slide.number}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
