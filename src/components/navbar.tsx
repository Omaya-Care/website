import { useEffect, useRef, useState } from "react";
import { useScrolled } from "../hooks/useScrolled";
import { cn } from "../lib/utils";

const DOT_GRID = "url(\"data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='white'/%3E%3Ccircle cx='10' cy='2' r='2' fill='white'/%3E%3Ccircle cx='18' cy='2' r='2' fill='white'/%3E%3Ccircle cx='2' cy='11' r='2' fill='white'/%3E%3Ccircle cx='10' cy='11' r='2' fill='white'/%3E%3Ccircle cx='2' cy='20' r='2' fill='white'/%3E%3Ccircle cx='10' cy='20' r='2' fill='white'/%3E%3Ccircle cx='18' cy='20' r='2' fill='white'/%3E%3Ccircle cx='18' cy='11' r='2' fill='white'/%3E%3C/svg%3E\")";
const DOT_GRID_DARK = "url(\"data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='black'/%3E%3Ccircle cx='10' cy='2' r='2' fill='black'/%3E%3Ccircle cx='18' cy='2' r='2' fill='black'/%3E%3Ccircle cx='2' cy='11' r='2' fill='black'/%3E%3Ccircle cx='10' cy='11' r='2' fill='black'/%3E%3Ccircle cx='2' cy='20' r='2' fill='black'/%3E%3Ccircle cx='10' cy='20' r='2' fill='black'/%3E%3Ccircle cx='18' cy='20' r='2' fill='black'/%3E%3Ccircle cx='18' cy='11' r='2' fill='black'/%3E%3C/svg%3E\")";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#for-hospitals", label: "For Hospitals" },
  { href: "/#for-mothers", label: "For Mothers" },
];

const DRAWER_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#for-hospitals", label: "For Hospitals" },
  { href: "/#for-mothers", label: "For Mothers" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ light = false, showBanner = true }: { light?: boolean | "lg"; showBanner?: boolean }) {
  const scrolled = useScrolled(50);
  // `light` is true/false (uniform) OR "lg" — apply the light look only at lg+
  // (desktop) while keeping the dark translucent pill below lg (mobile/tablet).
  const lightBelowLg = light === true;
  const lightAtLg = Boolean(light);
  const logoInvert = light === true ? "invert" : light === "lg" ? "lg:invert" : "";
  const demoBtn = light === true ? "bg-foreground text-background" : light === "lg" ? "bg-background lg:bg-foreground lg:text-background" : "bg-background";
  // Hamburger dots: white on the dark pill (below lg), dark on white (lg+).
  // Applied via CSS vars + arbitrary classes so the lg override can win (an inline
  // background-image would always beat a class).
  const dotsBelowLg = light === true ? DOT_GRID_DARK : DOT_GRID;
  const dotsAtLg = light ? DOT_GRID_DARK : DOT_GRID;
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Swipe-to-dismiss for the side drawer (touch screens): drag the panel to the
  // right to close it, following the finger, with a snap-back / snap-shut on release.
  const panelRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const dragAxis = useRef<"h" | "v" | null>(null);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const onDrawerTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    dragStart.current = { x: t.clientX, y: t.clientY };
    dragAxis.current = null;
  };
  const onDrawerTouchMove = (e: React.TouchEvent) => {
    if (!dragStart.current) return;
    const t = e.touches[0];
    const dx = t.clientX - dragStart.current.x;
    const dy = t.clientY - dragStart.current.y;
    if (dragAxis.current === null) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return; // wait for a clear intent
      dragAxis.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
      if (dragAxis.current === "h") setDragging(true);
    }
    if (dragAxis.current !== "h") return; // vertical → let it be (scroll)
    setDragX(Math.max(0, dx)); // only rightward (closing) drag
  };
  const onDrawerTouchEnd = () => {
    if (dragAxis.current === "h") {
      const w = panelRef.current?.offsetWidth ?? 320;
      if (dragX > w * 0.3) setDrawerOpen(false); // past a third → dismiss
      setDragging(false);
      setDragX(0); // snap back (open) or animate the rest of the way shut
    }
    dragStart.current = null;
    dragAxis.current = null;
  };

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <div className="flex fixed top-0 inset-x-0 z-9999 flex-col transition-all duration-500 ease-in-out">
      {showBanner && (
        <a
          className={cn("block relative z-999 max-w-full bg-background cursor-pointer overflow-hidden transition-all duration-500 ease-in-out", scrolled ? "h-0 opacity-0 pointer-events-none" : "h-[2.8625rem] max-lg:h-12.5 2xl:h-12.5")}
          href="https://meltwater.org/mest-ai-startup-program/"
          target="_blank"
          rel="noopener noreferrer"
          id="banner-top"
        >
          <div className="h-12.5 flex justify-center items-center gap-6 max-md:gap-[initial]">
            <div className="h-[1.375rem] flex gap-2 max-lg:h-6 2xl:h-6">
              <p className="block leading-[1.375rem] tracking-[-0.2px] text-center whitespace-nowrap max-md:order-[1] max-lg:leading-6 2xl:leading-6">
                Omaya Care is backed by MEST
              </p>
            </div>
            <div className="flex">
              <p className="block text-muted-foreground leading-[1.375rem] tracking-[-0.2px] max-md:hidden md:max-lg:leading-6 2xl:leading-6">
                Learn more
              </p>
              <img decoding="async" className="w-6 h-6 block max-w-full overflow-clip align-middle" alt="" src="/assets/media/svg/a3d12be7c2fd.svg" />
            </div>
          </div>
        </a>
      )}
      <div className={cn("flex relative z-9999 py-[1.375rem] px-[4.125rem] justify-center items-center gap-[7.3px] max-lg:gap-2 max-lg:mx-4 max-lg:mt-2 max-lg:rounded-full max-lg:[backdrop-filter:blur(24px)] max-md:py-2 max-md:px-3 md:max-lg:py-2.5 md:max-lg:px-4 2xl:py-6 2xl:px-18 2xl:gap-2", lightBelowLg ? "max-lg:bg-background" : "max-lg:bg-clr-0")}>
        <a
          className={cn("w-[153.9px] h-[1.3125rem] flex absolute top-[40.7px] left-1/2 z-1 min-w-0 max-w-full justify-center items-center shrink-0 transform-[translate(-50%,-10.4688px)] cursor-pointer transition-opacity duration-500 ease-in-out max-md:w-28 max-md:h-4 max-lg:transform-[none] max-lg:static max-lg:top-auto max-lg:left-auto max-lg:z-[initial] md:max-lg:w-36 md:max-lg:h-5 2xl:w-42 2xl:h-[22.9px] 2xl:top-[44.5px] 2xl:left-1/2 2xl:transform-[translate(-50%,-11.4297px)]", scrolled && "lg:opacity-0 lg:pointer-events-none")}
          href="/"
        >
          <img decoding="async" className={cn("w-auto h-[1.3125rem] block relative top-[0.1875rem] -bottom-[0.1875rem] max-w-full overflow-clip align-middle max-md:h-3.5 max-md:top-[0.15rem] max-md:-bottom-[0.15rem] max-lg:top-[0.2rem] max-lg:-bottom-[0.2rem] md:max-lg:h-[1.125rem] 2xl:h-[1.4375rem] 2xl:top-[0.2rem] 2xl:-bottom-[0.2rem]", logoInvert)} alt="Omaya Care" src="/assets/images/omaya-care-wordmark.svg" />
        </a>
        <div className={cn("w-full h-[37.5px] flex max-w-full rounded-full justify-between items-center [backdrop-filter:blur(0px)] transition-opacity duration-500 ease-in-out max-md:h-8 md:max-lg:h-9 max-lg:justify-end max-lg:rounded-[initial] max-lg:[backdrop-filter:initial] 2xl:h-[2.5625rem]", scrolled && "lg:opacity-0 lg:pointer-events-none")}>
          <div className="flex flex-1 items-center gap-[1.375rem] max-lg:hidden 2xl:gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} className={cn("flex text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap text-nowrap cursor-pointer 2xl:text-sm 2xl:leading-[1.3125rem]", lightAtLg ? "text-foreground" : "text-background")} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex-1 h-[37.5px] flex justify-end items-center gap-[14.7px] max-md:h-8 max-md:gap-2.5 md:max-lg:h-9 md:max-lg:gap-3 2xl:h-[2.5625rem] 2xl:gap-4">
            <a className={cn("flex text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden 2xl:text-sm 2xl:leading-[1.3125rem]", lightAtLg ? "text-foreground" : "text-background")} href="https://app.omayacare.com/" target="_blank" rel="noopener noreferrer">
              Log in
            </a>
            <a className={cn("h-[37.5px] flex py-[0.575rem] px-[18.3px] rounded-full justify-center items-center text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap text-nowrap cursor-pointer max-md:h-8 max-md:py-0 max-md:px-3.5 max-md:text-xs max-md:leading-none md:max-lg:h-9 md:max-lg:py-0 md:max-lg:px-4 md:max-lg:text-sm md:max-lg:leading-none 2xl:h-[2.5625rem] 2xl:py-2.5 2xl:px-5 2xl:text-sm 2xl:leading-[1.3125rem]", demoBtn)} href="/contact?type=demo">
              Book a demo
            </a>
          </div>
        </div>
        <button
          type="button"
          className={cn("w-[29.3px] h-[29.3px] flex justify-center items-center shrink-0 [background-image:var(--dots)] lg:[background-image:var(--dots-lg)] [background-size:18.3193px_20.1513px] [background-position:50%_50%] bg-no-repeat cursor-pointer transition-opacity duration-500 ease-in-out max-md:w-6 max-md:h-6 max-md:[background-size:16px_18px] md:max-lg:w-8 md:max-lg:h-8 md:max-lg:[background-size:20px_22px] 2xl:w-8 2xl:h-8 2xl:[background-size:20px_22px] hover:opacity-80", scrolled && "lg:opacity-0 lg:pointer-events-none")}
          style={{ ["--dots" as string]: dotsBelowLg, ["--dots-lg" as string]: dotsAtLg }}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        />
        <div className={cn("absolute inset-x-0 top-0 bottom-0 flex justify-center items-center gap-3 transition-opacity duration-500 ease-in-out max-lg:hidden", scrolled ? "opacity-100" : "opacity-0 pointer-events-none")}>
          <div className="flex items-center h-12 gap-15 pl-4 pr-2 rounded-full bg-clr-0 [backdrop-filter:blur(24px)] text-background text-xs leading-[1.125rem]">
            <a href="/" className="h-full flex items-center gap-2 shrink-0 hover:opacity-80">
              <img decoding="async" src="/assets/images/omaya-logo-mark-white.svg" alt="" aria-hidden="true" className="w-auto h-6 block shrink-0" />
              <img decoding="async" src="/assets/images/omaya-care-wordmark.svg" alt="Omaya Care" className="w-auto h-4 block max-w-full relative top-[3px]" />
            </a>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="flex items-center whitespace-nowrap hover:opacity-80">{link.label}</a>
            ))}
            <a href="https://app.omayacare.com/" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap hover:opacity-80">Log in</a>
            <a href="/contact?type=demo" className="h-8 flex items-center justify-center px-2 rounded-full text-xs bg-background text-foreground whitespace-nowrap hover:bg-border">
              Book a demo
            </a>
          </div>
          <button type="button" aria-label="Open menu" onClick={() => setDrawerOpen(true)} className="w-12 h-12 flex justify-center items-center rounded-full shrink-0 bg-clr-0 [backdrop-filter:blur(24px)] [background-size:20px_22px] [background-position:50%_50%] bg-no-repeat hover:opacity-80" style={{ backgroundImage: DOT_GRID }} />
        </div>
      </div>

      {/* Side drawer */}
      <div className={cn("fixed inset-0 z-[10000] transition-all duration-300", drawerOpen ? "pointer-events-auto" : "pointer-events-none")}>
        {/* Backdrop */}
        <div
          role="button"
          tabIndex={drawerOpen ? 0 : -1}
          aria-label="Close menu"
          className={cn("absolute inset-0 bg-black transition-opacity duration-300", drawerOpen ? "opacity-50" : "opacity-0")}
          style={dragging ? { opacity: 0.5 * Math.max(0, 1 - dragX / (panelRef.current?.offsetWidth ?? 320)), transition: "none" } : undefined}
          onClick={() => setDrawerOpen(false)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " " || e.key === "Escape") { e.preventDefault(); setDrawerOpen(false); } }}
        />
        {/* Drawer panel */}
        <div
          ref={panelRef}
          onTouchStart={onDrawerTouchStart}
          onTouchMove={onDrawerTouchMove}
          onTouchEnd={onDrawerTouchEnd}
          style={dragging ? { transform: `translateX(${dragX}px)`, transition: "none" } : undefined}
          className={cn("absolute right-0 top-0 bottom-0 w-[min(380px,90vw)] bg-background rounded-l-3xl flex flex-col transition-transform duration-300 ease-in-out overflow-hidden touch-pan-y", drawerOpen ? "translate-x-0" : "translate-x-full")}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
            <span className="text-[2rem] font-medium leading-snug text-foreground">Menu</span>
            <div className="flex items-center gap-3">
              <a
                className="flex text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap cursor-pointer text-foreground hover:opacity-70"
                href="https://app.omayacare.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDrawerOpen(false)}
              >
                Log in
              </a>
              <a
                className="h-[37.5px] flex py-[0.575rem] px-[18.3px] rounded-full justify-center items-center text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap cursor-pointer bg-foreground text-background"
                href="/contact?type=demo"
                onClick={() => setDrawerOpen(false)}
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 mt-2 shrink-0">
            <span className="text-[0.75rem] leading-none text-muted-foreground mb-3">Explore</span>
            <div className="group/nav flex flex-col">
              {DRAWER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="group/link py-0.5 relative flex items-center text-[1.625rem] leading-snug text-foreground transition-all duration-200 group-hover/nav:opacity-25 hover:!opacity-100 hover:text-[1.75rem]"
                >
                  <span className="select-none absolute left-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 pointer-events-none">–</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-5">{link.label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Hero image at bottom */}
          <div className="flex-1 flex items-end p-6">
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[584/520]">
              <img decoding="async"
                src="/assets/media/images/drawer-mother.avif"
                alt="Mother on phone with baby"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(0,0,0,0.18)_0%,transparent_58%)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
