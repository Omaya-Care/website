import { useState, useRef, useLayoutEffect } from "react";
import MediaTile3, { type MediaTile3Data } from "../components/media-tile3";
import MediaTile4 from "../components/media-tile4";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import { MediaTile3_cids, MediaTile4_cids } from "../_cids";
import { MediaTile3_styles, MediaTile4_styles } from "../_styles";
import { mediaTile4Data as mediaTile4DataContent } from "../content";
const MediaTile3_data: MediaTile3Data[] = [
    { imgSrc: "/assets/images/team-1.jpeg", srcSet: "/assets/images/team-1.jpeg 669w", kind: "image", imgSrc2: "/assets/images/logo-ridge.avif", description: "Dr. Erica Ntiamoah Mensah, MBChB", description2: "OB/GYN Resident, Ridge Hospital, Accra", description3: "OB/GYN resident at Ridge Hospital and Ghana's youngest female medical doctor at 21. A nationally recognized advocate for women's health and maternal empowerment.", kind2: "link", href: "https://www.linkedin.com/in/dr-erica-ntiamoah-mensah-6a17a8122/" },
    { imgSrc: "/assets/images/team-2.jpeg", srcSet: "/assets/images/team-2.jpeg 669w", kind: "image", imgSrc2: "/assets/images/logo-chromium.avif", description: "Duke Aaron Sasu, Esq.", description2: "Attorney, Chromium Law", description3: "Leads litigation at Chromium Law across Technology, IP, Energy and Corporate Law. Dual KNUST and Ghana School of Law degrees, with a practice spanning cross-border disputes across Africa, Asia and the Middle East.", kind2: "link", href: "#" },
    { imgSrc: "/assets/images/team-3.jpeg", srcSet: "/assets/images/team-3.jpeg 669w", kind: "image", imgSrc2: "/assets/images/logo-korle-bu.avif", description: "Nana Afrah Korankye", description2: "Co-founder, Omaya Care", description3: "Bio coming soon.", kind2: "link", href: "#" }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection({ mediaTile3Data = MediaTile3_data, mediaTile4Data = mediaTile4DataContent } = {}) {
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // The track's cards bleed past their positioning box into the full content
  // area, so the real visible width is the content container, not that box.
  const computeMax = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return 0;
    return Math.max(0, track.scrollWidth - viewport.offsetWidth);
  };

  useLayoutEffect(() => {
    const measure = () => setMaxOffset(computeMax());
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement;
    const second = track.children[1] as HTMLElement;
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth + 29.3;
    const max = computeMax();
    setMaxOffset(max);
    setOffset(prev => Math.max(0, Math.min(max, prev + dir * step)));
  };

  const canScrollBack = offset > 0;
  const canScrollForward = offset < maxOffset;

  return (
    <section className="block relative overflow-clip bg-background" data-id="n278">
      <div className="h-full block pt-12 pb-14 px-[2.2875rem] max-md:pt-8 max-md:pb-12 max-md:px-6 max-md:overflow-hidden md:max-lg:pt-12 md:max-lg:pb-14 md:max-lg:px-10 2xl:pt-14 2xl:pb-16 2xl:px-10" data-id="n279">
        <div ref={viewportRef} className="h-full block max-w-[73.275rem] mx-auto justify-center max-lg:max-w-320 2xl:max-w-320" data-id="n280">
          <div className="h-full flex flex-col" data-id="n281">
            <div className="flex flex-col gap-3" data-id="n282">
              <h2 className="block text-[2.3125rem] leading-11 tracking-[-0.73px] max-md:text-2xl max-md:leading-[1.8125rem] max-md:tracking-[-0.54px] md:max-lg:text-[2.5rem] md:max-lg:leading-12 md:max-lg:tracking-[-0.9px] 2xl:text-5xl 2xl:leading-[3.625rem] 2xl:tracking-[-1.08px]" data-id="n283">
                Guided by experts.<br />Built for mothers.
              </h2>
              <p className="text-muted-foreground text-[1.0625rem] leading-[1.5625rem] tracking-[-0.12px] max-w-[32rem] max-md:text-base max-md:leading-6 md:max-lg:text-lg 2xl:text-lg 2xl:leading-[1.6875rem]">
                Doctors and legal professionals with firsthand knowledge of maternal health in Ghana.
              </p>
            </div>
            <div className="w-[38.3rem] block relative mt-[3.6625rem] max-md:w-86.5 max-md:mt-12 md:max-lg:w-[22.5rem] md:max-lg:mt-16 2xl:w-[50rem] 2xl:mt-16" data-id="n289">
              <div className="flex relative" data-id="n290">
                <div
                  ref={trackRef}
                  className="h-[242.7px] flex gap-[29.3px] [&>div:last-child]:border-r-0 max-md:h-54 max-lg:flex-col max-lg:flex-wrap max-md:justify-start max-md:items-stretch max-md:gap-4 md:max-lg:h-65 md:max-lg:gap-8 2xl:h-[16.5625rem] 2xl:gap-8"
                  style={{ transform: `translateX(${-offset}px)`, transition: "transform 500ms ease-out" }}
                  data-id="n291"
                >
                  {mediaTile3Data.map((d, i) => <MediaTile3 key={i} d={d} cids={MediaTile3_cids[i]} styles={MediaTile3_styles[i]} />)}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-3 mt-8 max-md:hidden" aria-label="Scroll team">
              <button
                type="button"
                onClick={() => scroll(-1)}
                disabled={!canScrollBack}
                aria-label="Previous"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-clr-0 [backdrop-filter:blur(24px)] text-background cursor-pointer hover:opacity-80 disabled:opacity-30 disabled:cursor-default"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                  <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                disabled={!canScrollForward}
                aria-label="Next"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-clr-0 [backdrop-filter:blur(24px)] text-background cursor-pointer hover:opacity-80 disabled:opacity-30 disabled:cursor-default"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                  <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="w-[190.5px] h-200 flex fixed top-0 left-11 z-1150 opacity-0 flex-col justify-center items-start gap-[0.6875rem] text-background text-[0.8125rem] leading-[1.1875rem] transform-[matrix(1,0,0,1,0,14.6555)] pointer-events-none max-lg:hidden" data-id="n334">
        <p className="block opacity-50 tracking-[-0.2px] pointer-events-none" data-id="n335">
          Our Advisors
        </p>
        <ul className="flex flex-col gap-[0.6875rem] text-muted-foreground [list-style-type:none] list-outside pointer-events-none 2xl:gap-3" data-id="n336">
          {mediaTile4Data.map((d, i) => <MediaTile4 key={MediaTile4_cids[i][0]} d={d} cids={MediaTile4_cids[i]} styles={MediaTile4_styles[i]} />)}
        </ul>
      </nav>
      <nav className="hidden fixed bottom-0 inset-x-0 z-1100 opacity-0 p-[14.7px] justify-between items-center gap-[0.6875rem] text-background text-[0.8125rem] leading-[1.1875rem] transform-[none] pointer-events-none" data-id="n361">
        <p className="block opacity-50 py-[7.3px] px-[0.6875rem] flex-1 tracking-[-0.2px] pointer-events-none max-lg:min-w-0 max-lg:py-2 max-md:pr-3 max-md:pl-5 md:max-lg:px-3" data-id="n362">
          Our Advisors
        </p>
        <div className="flex items-center shrink-0 gap-[5.5px] pointer-events-none max-lg:gap-1.5" data-id="n363">
          <button className="w-[29.3px] h-[29.3px] flex min-w-0 rounded-[7.3px] justify-center items-center text-center bg-clr-10 [backdrop-filter:blur(21.9832px)] cursor-pointer pointer-events-none max-lg:w-8 max-lg:h-8 max-lg:rounded-[99px] max-lg:[backdrop-filter:blur(24px)]" data-id="n364" aria-label="Previous" type="button">
            <div className="w-[0.2875rem] h-[7.3px] block min-w-0 shrink-0 pointer-events-none max-lg:w-[0.3125rem] max-lg:h-2 max-lg:flex max-lg:justify-center max-lg:items-center" data-id="n365">
              <Icon cid={"n366"} />
            </div>
          </button>
          <button className="w-[29.3px] h-[29.3px] flex min-w-0 rounded-[7.3px] justify-center items-center text-center bg-clr-10 [backdrop-filter:blur(21.9832px)] cursor-pointer pointer-events-none max-lg:w-8 max-lg:h-8 max-lg:rounded-[99px] max-lg:[backdrop-filter:blur(24px)]" data-id="n367" aria-label="Next" type="button">
            <div className="w-[0.2875rem] h-[7.3px] block min-w-0 shrink-0 pointer-events-none max-lg:w-[0.3125rem] max-lg:h-2 max-lg:flex max-lg:justify-center max-lg:items-center" data-id="n368">
              <Icon2 cid={"n369"} />
            </div>
          </button>
        </div>
      </nav>
    </section>
  );
}
