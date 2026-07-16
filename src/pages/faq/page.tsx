import { useState, useEffect } from "react";
import FaqAccordion from "./ditto/FaqAccordion";
import DittoMotion from "./ditto/DittoMotion";
import LogoCloudSection from "./sections/logo-cloud-section";
import LogoCloudSection2 from "./sections/logo-cloud-section2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TextLink2, { type TextLink2Data } from "./components/text-link2";
import TextLink3, { type TextLink3Data } from "./components/text-link3";
import ListRow, { type ListRowData } from "./components/list-row";
import Tile2, { type Tile2Data } from "./components/tile2";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import Logo, { type LogoData } from "./components/logo";
import TextLink4, { type TextLink4Data } from "./components/text-link4";
import TextLink5, { type TextLink5Data } from "./components/text-link5";
import TextLink6, { type TextLink6Data } from "./components/text-link6";
import Tile3, { type Tile3Data } from "./components/tile3";
import TextLink7, { type TextLink7Data } from "./components/text-link7";
import { TextLink2_cids, TextLink3_cids, ListRow_cids, Tile2_cids, ListRow2_cids, Logo_cids, TextLink4_cids, TextLink5_cids, TextLink4_cids2, TextLink6_cids, Tile3_cids, TextLink7_cids } from "./_cids";
import { TextLink2_styles, TextLink3_styles, ListRow_styles, Tile2_styles, TextLink4_styles, TextLink5_styles, TextLink4_styles2 } from "./_styles";

const TextLink2_data: TextLink2Data[] = [
    { href: "#about", label: "About Omaya Care" },
    { href: "#getting-started", label: "Getting Started" },
    { href: "#check-ins", label: "The Check-ins" },
    { href: "#emergencies", label: "Concerns & Emergencies" },
    { href: "#data-privacy", label: "Data & Privacy" },
    { href: "#hospitals", label: "For Hospitals" }
];
const TextLink3_data: TextLink3Data[] = [
    { href: "#about", label: "About Omaya Care" },
    { href: "#getting-started", label: "Getting Started" },
    { href: "#check-ins", label: "The Check-ins" },
    { href: "#emergencies", label: "Concerns & Emergencies" },
    { href: "#data-privacy", label: "Data & Privacy" },
    { href: "#hospitals", label: "For Hospitals" }
];
const ListRow_data: ListRowData[] = [
    { text: "Annual comprehensive blood testing across 100+ biomarkers" },
    { text: "A custom action plan built on your biology and goals" },
    { text: "17 health scores and your biological age" },
    { text: "Al Chat to dig deeper into your data" }
];
const Tile2_data: Tile2Data[] = [
    { description: "Kidney, Liver, Thyroid, Sex Hormones, and Metabolic Health:", description2: " Superpower monitors HbA1c, fasting glucose, and uric acid levels to assess kidney and metabolic health, with clinician-guided protocols to support optimization. Personalized protocols may help support healthy hormone balance — including testosterone, progesterone, DHEA, vitamin D, and inflammatory markers like CRP. Thyroid function is monitored through T3, T4, and TSH testing, with clinician interpretation and guidance. Mineral management includes monitoring levels of iron, magnesium, and lipoprotein(a), as well as supporting healthy blood pressure. Protocols are also available to support fertility assessment through hormone and biomarker testing, with clinician guidance." },
    { description: "Gut Health and Nutrition: ", description2: "Superpower offers protocols to support gut health and digestive wellness. Protocols focus on supporting gastrointestinal function, hydration, and nutrient absorption. Your care team can help you understand results related to gut health and connect you with appropriate next steps." },
    { description: "Toxins and Environmental Health:", description2: " We test for mold, heavy metals, PFAS, and plastics, with personalized protocols based on your results. Superpower provides guidance to help reduce exposure to environmental toxins and support a toxin-reduced lifestyle, including recommendations for maintaining a clean home environment." },
    { description: "Physical and Cognitive Performance: ", description2: "Protocols are designed to support physical health — including weight management, skin health, anti-aging processes, and hair health. Superpower identifies biomarkers related to physical performance, recovery, and sleep, with clinician guidance on optimization strategies for flexibility, posture, strength, aerobic fitness, and cardiovascular health. Additional protocols support mitochondrial function and cognitive wellness. Your care team can screen for biomarkers that may contribute to mood changes, with appropriate clinical referral when needed" }
];
const ListRow2_data: ListRow2Data[] = [
    { text: "Alabama" },
    { text: "Arizona" },
    { text: "California" },
    { text: "Colorado" },
    { text: "Connecticut" },
    { text: "Delaware" },
    { text: "District of Columbia" },
    { text: "Florida" },
    { text: "Georgia" },
    { text: "Idaho" },
    { text: "Illinois" },
    { text: "Indiana" },
    { text: "Iowa" },
    { text: "Kansas" },
    { text: "Kentucky" },
    { text: "Maine" },
    { text: "Maryland" },
    { text: "Massachusetts" },
    { text: "Michigan" },
    { text: "Minnesota" },
    { text: "Missouri" },
    { text: "Montana" },
    { text: "Nebraska" },
    { text: "Nevada" },
    { text: "New Hampshire" },
    { text: "New Jersey" },
    { text: "New Mexico" },
    { text: "New York" },
    { text: "North Carolina" },
    { text: "Ohio" },
    { text: "Oklahoma" },
    { text: "Oregon" },
    { text: "Pennsylvania" },
    { text: "South Carolina" },
    { text: "Tennessee" },
    { text: "Texas" },
    { text: "Utah" },
    { text: "Vermont" },
    { text: "Virginia" },
    { text: "Washington" },
    { text: "West Virginia" },
    { text: "Wisconsin" }
];
const Logo_data: LogoData[] = [
    { ariaLabel: "Ask Claude", href: "https://claude.ai/new?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Ffaqs", sizes: "100vw", imgSrc: "/assets/media/images/a297399f982c.avif", srcSet: "/assets/media/images/4e6333fcabeb.png 500w, /assets/media/images/2adea8e249b4.png 800w, /assets/media/images/0eb816dd9ad6.png 1080w, /assets/media/images/a297399f982c.avif 1200w" },
    { ariaLabel: "Ask Gemini", href: "https://www.google.com/search?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Ffaqs&udm=50", imgSrc: "/assets/media/svg/d40fe4aac666.svg" },
    { ariaLabel: "Ask Grok", href: "https://x.com/i/grok?text=tell+me+about+https%3A%2F%2Fsuperpower.com%2Ffaqs", imgSrc: "/assets/media/svg/ff93db0f1a39.svg" },
    { ariaLabel: "Ask ChatGPT", href: "https://chat.openai.com/?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Ffaqs", imgSrc: "/assets/media/svg/3e9f8339f4b9.svg" },
    { ariaLabel: "Ask Perplexity", href: "https://www.perplexity.ai/search/new?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Ffaqs", imgSrc: "/assets/media/svg/9a042afd1ff4.svg" }
];
const TextLink4_data: TextLink4Data[] = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/biomarkers", label: "What we test" },
    { href: "https://app.superpower.com/signin?redirectTo=%2F", label: "Member Login" },
    { href: "/gift", label: "Gift Superpower" },
    { href: "/reviews", label: "Reviews" }
];
const TextLink5_data: TextLink5Data[] = [
    { href: "/manifesto", label: "Our Why" },
    { href: "https://healthiesthoodie.com/", target: "_blank", label: "Superpower Labs" },
    { href: "mailto:hello@superpower.com", label: "Contact Us" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", ariacurrent: "page", label: "FAQs" }
];
const TextLink4_data2: TextLink4Data[] = [
    { href: "/superpower-vs-function-health", label: "Function Health" },
    { href: "/superpower-vs-mito-health", label: "Mito Health" },
    { href: "/superpower-vs-insidetracker", label: "InsideTracker" }
];
const TextLink6_data: TextLink6Data[] = [
    { href: "https://superpower-health.typeform.com/to/VQKeJvKr?typeform-source=www.canva.com", label: "For Creators" },
    { href: "/organizations", label: "For Partners" },
    { href: "/organizations", label: "For Business" }
];
const Tile3_data: Tile3Data[] = [
    { href: "/blog/tanning-iceberg-explained", label: "The Tanning Iceberg" },
    { href: "/blog/metabolic-health-biomarker-testing", label: "Metabolic Biomarker Testing" },
    { href: "/blog/thyroid-health-biomarkers", label: "Thyroid Biomarkers" },
    { href: "/blog/dna-biomarkers", label: "DNA Biomarkers" },
    { href: "/blog/body-composition-biomarkers", label: "Body Composition Biomarkers" },
    { href: "/blog/liver-health-biomarkers", label: "Liver Health Biomarkers" },
    { href: "/blog/energy-biomarkers", label: "Energy Biomarkers" },
    { href: "/blog/immune-system-biomarkers", label: "Immune System Biomarker" },
    { href: "/blog/guide-to-biomarker-testing", label: "The Complete Guide to Biomarker Testing" }
];
const TextLink7_data: TextLink7Data[] = [
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/privacy", label: "Privacy policy" },
    { href: "/legal/medical-consent", label: "Medical consent" },
    { href: "#", label: "Cookie preferences" }
];

const SECTION_IDS = ["about", "getting-started", "check-ins", "emergencies", "data-privacy", "hospitals"];

function useSectionSpy() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

function scrollToCenter(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + el.offsetHeight / 2;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

export default function Page() {
  const activeSection = useSectionSpy();
  return (
    <>
      <div className="block relative" data-cid="n1">
        <Navbar light showBanner={false} />
        <div className="block max-lg:relative" data-cid="n15">
          <section className="border-b border-solid border-b-surface hidden sticky top-0 z-99 bg-background max-md:h-64 max-lg:block max-lg:pt-8 md:max-lg:h-[21.0625rem]" data-cid="n80">
            <div className="block sticky top-0 z-4 pt-[5.5rem] max-md:h-[13.95rem] max-md:pt-12 md:max-lg:h-[19rem] md:max-lg:pt-24" data-cid="n81">
              <div className="h-full block max-w-[73.275rem] justify-center max-lg:max-w-320" data-cid="n82">
                <div className="h-full block" data-cid="n83">
                  <div className="flex max-w-[32.0625rem] flex-col justify-center items-start gap-[1.375rem] max-md:h-[5.725rem] max-lg:mb-12 max-md:pt-12 max-md:px-5 max-md:justify-between max-lg:items-center max-lg:gap-6 max-md:max-w-none max-md:[flex-direction:initial] md:max-lg:h-[7.775rem] md:max-lg:max-w-140 md:max-lg:mx-[96.5px]" data-cid="n84">
                    <h1 className="block min-w-0 text-[2.75rem] leading-[3.1875rem] tracking-[-0.99px] max-md:text-[2rem] max-md:leading-8 max-md:tracking-[-0.64px] md:max-lg:text-5xl md:max-lg:leading-12 md:max-lg:tracking-[-0.96px]" data-cid="n85">
                      FAQs
                    </h1>
                  </div>
                  <div className="block max-lg:h-[2.225rem] max-lg:overflow-hidden" data-cid="n91">
                    <div className="block before:content-['_'] before:table before:text-foreground before:text-[0.9375rem] before:leading-[1.3125rem] max-lg:before:w-0 max-lg:before:h-0 max-lg:before:text-base max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] after:content-['_'] after:table after:text-foreground after:text-[0.9375rem] after:leading-[1.3125rem] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:text-base max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem]" data-cid="n92" />
                    <div className="flex relative overflow-x-auto overflow-y-hidden max-lg:h-[2.225rem] max-lg:py-2 max-md:px-5 max-md:justify-start max-lg:items-center max-lg:gap-4 max-lg:text-muted-foreground max-lg:text-sm max-lg:leading-[1.25rem] md:max-lg:justify-center" data-cid="n93">
                      {TextLink2_data.map((d, i) => <TextLink2 key={TextLink2_cids[i][0]} d={d} cids={TextLink2_cids[i]} styles={TextLink2_styles[i]} />)}
                      <div className="w-0 h-px block absolute bottom-0 left-0 min-w-0 bg-color-002 transform-[none] pointer-events-none max-lg:w-[4.9375rem] max-md:transform-[matrix(1,0,0,1,20,0)] md:max-lg:transform-[matrix(1,0,0,1,92,0)]" data-cid="n100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="block relative pt-[9.1625rem] pb-[18rem] max-lg:pb-32 max-lg:pt-0 2xl:pt-40 2xl:pb-[20rem]" data-cid="n101">
            <div className="block px-[2.2875rem] max-md:px-6 md:max-lg:px-10 2xl:px-10" data-cid="n102">
              <div className="block relative z-1 max-w-[73.275rem] mx-auto justify-center max-lg:max-w-320 2xl:max-w-320" data-cid="n103">
                <div className="flex justify-between items-start gap-4 grid-cols-[1fr_1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr]" data-cid="n104">
                  <div className="h-[431.3px] flex sticky top-[9.1625rem] max-w-[271.1px] pt-11 flex-col justify-start items-start gap-11 max-lg:hidden 2xl:h-[474.7px] 2xl:top-40 2xl:max-w-74 2xl:pt-12 2xl:gap-12" data-cid="n105">
                    <div className="h-[7.5875rem] flex max-w-[32.0625rem] flex-col justify-center items-start gap-[1.375rem] 2xl:h-[8.525rem] 2xl:max-w-140 2xl:gap-6" data-cid="n106">
                      <h1 className="block text-[2.75rem] leading-[3.1875rem] tracking-[-0.99px] 2xl:text-6xl 2xl:leading-15 2xl:tracking-[-1.2px]" data-cid="n107" data-component="heading">
                        FAQs
                      </h1>
                    </div>
                    <div className="flex flex-col gap-[0.6875rem] 2xl:gap-3" data-cid="n113">
                      {TextLink3_data.map((d, i) => {
                        const isActive = SECTION_IDS[i] === activeSection;
                        return (
                          <TextLink3
                            key={TextLink3_cids[i][0]}
                            d={d}
                            cids={TextLink3_cids[i]}
                            styles={{
                              className: isActive ? "text-foreground transition-colors duration-300" : "text-muted-foreground transition-colors duration-300",
                              className2: isActive
                                ? "w-[18.3px] basis-[18.3px] 2xl:w-5 2xl:basis-[20px] transition-all duration-300 ease-in-out"
                                : "w-0 basis-0 transition-all duration-300 ease-in-out"
                            }}
                            onClick={(e) => { e.preventDefault(); scrollToCenter(SECTION_IDS[i]); }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="block" data-cid="n132">
                    <div className="flex relative pt-11 pb-[3.6625rem] flex-col justify-start items-start gap-[1.375rem] grid-cols-[1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] max-lg:pt-12 max-md:pb-8 max-lg:gap-6 md:max-lg:pb-16 2xl:pt-12 2xl:pb-16 2xl:gap-6" id="about">
                      <section className="w-full block max-w-[293.1px] max-lg:max-w-80 2xl:max-w-80">
                        <div className="flex items-center gap-3">
                          <h3 className="block text-[1.625rem] leading-[2.125rem] font-bold tracking-[-0.4px] max-md:text-xl max-md:leading-[1.75rem] max-md:tracking-[-0.2px] md:max-lg:text-2xl md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.4px] 2xl:text-3xl 2xl:leading-9 2xl:tracking-[-0.5px]" data-component="heading">
                            About Omaya Care
                          </h3>
                          <span className="inline-flex items-center justify-center min-w-[1.375rem] h-[1.375rem] px-1 rounded-full text-[0.6875rem] font-semibold leading-none text-[#7a2850] bg-[rgba(122,40,80,0.12)] shrink-0">4</span>
                        </div>
                      </section>
                      <div className="border-t border-solid border-t-surface flex max-w-[45.8rem] flex-col max-lg:max-w-200 2xl:max-w-200">
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What is Omaya Care?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Omaya Care is a postpartum care service that checks in on mothers after they leave the hospital. We reach out via voice call or WhatsApp at key moments in the weeks after birth, asking about your physical health, emotional wellbeing, and how the baby is doing. If anything concerns us, we alert your care team immediately.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Who is behind Omaya Care?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Omaya Care is a Ghanaian health technology company. Our check-in content is built with and reviewed by licensed midwives. We do not operate independently of clinical oversight — everything we communicate to you has been approved by a qualified health professional.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Is Omaya Care a hospital?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  No. We are not a hospital, clinic, or medical practice. We are a technology-enabled care support service that works alongside the hospital or clinic that delivered your baby.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Is Omaya Care free for me?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Omaya Care is provided to you through your hospital. Any questions about costs should be directed to your hospital or clinic.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="flex relative pt-11 pb-[3.6625rem] flex-col justify-start items-start gap-[1.375rem] grid-cols-[1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] max-lg:pt-12 max-md:pb-8 max-lg:gap-6 md:max-lg:pb-16 2xl:pt-12 2xl:pb-16 2xl:gap-6" id="getting-started">
                      <section className="w-full block max-w-[293.1px] max-lg:max-w-80 2xl:max-w-80">
                        <div className="flex items-center gap-3">
                          <h3 className="block text-[1.625rem] leading-[2.125rem] font-bold tracking-[-0.4px] max-md:text-xl max-md:leading-[1.75rem] max-md:tracking-[-0.2px] md:max-lg:text-2xl md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.4px] 2xl:text-3xl 2xl:leading-9 2xl:tracking-[-0.5px]" data-component="heading">
                            Getting Started
                          </h3>
                          <span className="inline-flex items-center justify-center min-w-[1.375rem] h-[1.375rem] px-1 rounded-full text-[0.6875rem] font-semibold leading-none text-[#7a2850] bg-[rgba(122,40,80,0.12)] shrink-0">4</span>
                        </div>
                      </section>
                      <div className="border-t border-solid border-t-surface flex max-w-[45.8rem] flex-col max-lg:max-w-200 2xl:max-w-200">
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              How do I get enrolled in Omaya Care?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Your hospital or clinic enrolls you. If you gave birth at a hospital that uses Omaya Care, a staff member will explain the service and confirm your enrollment before or shortly after discharge.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What information does my hospital share with Omaya Care?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Your hospital shares your name, phone number, delivery date, and preferred language. This is the minimum information we need to contact you at the right times in the right language.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Can I opt out?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Yes. You can opt out at any time by telling your hospital or by sending a message to admin@omayacare.com. We will stop contacting you immediately. Your hospital remains responsible for your postnatal care after you opt out.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What if I change my phone number?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Let your hospital know as soon as possible so they can update your contact details with us. If we cannot reach you, we cannot check in on you.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="flex relative pt-11 pb-[3.6625rem] flex-col justify-start items-start gap-[1.375rem] grid-cols-[1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] max-lg:pt-12 max-md:pb-8 max-lg:gap-6 md:max-lg:pb-16 2xl:pt-12 2xl:pb-16 2xl:gap-6" id="check-ins">
                      <section className="w-full block max-w-[293.1px] max-lg:max-w-80 2xl:max-w-80">
                        <div className="flex items-center gap-3">
                          <h3 className="block text-[1.625rem] leading-[2.125rem] font-bold tracking-[-0.4px] max-md:text-xl max-md:leading-[1.75rem] max-md:tracking-[-0.2px] md:max-lg:text-2xl md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.4px] 2xl:text-3xl 2xl:leading-9 2xl:tracking-[-0.5px]" data-component="heading">
                            The Check-ins
                          </h3>
                          <span className="inline-flex items-center justify-center min-w-[1.375rem] h-[1.375rem] px-1 rounded-full text-[0.6875rem] font-semibold leading-none text-[#7a2850] bg-[rgba(122,40,80,0.12)] shrink-0">6</span>
                        </div>
                      </section>
                      <div className="border-t border-solid border-t-surface flex max-w-[45.8rem] flex-col max-lg:max-w-200 2xl:max-w-200">
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              When will Omaya Care contact me?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  We follow the World Health Organization's recommended postnatal contact schedule: within 24 hours of birth, on day 3, between days 7 and 14, and at six weeks after birth. Your hospital may adjust this depending on your specific needs.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              How will Omaya Care contact me?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  By voice call or WhatsApp message, whichever you indicated as your preference when enrolled. If we cannot reach you by your preferred channel, we may try the other.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What language will the check-in be in?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  We will use the language you indicated when you were enrolled. If you would like to change your language preference, contact your hospital.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What if my baby is asleep and I cannot talk?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  You can respond via WhatsApp instead. We understand that as a new mother your time and energy are not always available on schedule. If you miss a check-in, we will try again. If you need to reschedule, send us a message at admin@omayacare.com.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What kind of questions will I be asked?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Questions cover your physical health — for example bleeding, pain, fever, and headaches — your emotional wellbeing, and how you and the baby are managing. The questions are straightforward and do not take long to answer. Everything asked has been reviewed and approved by a licensed midwife.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What happens with my answers?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Your responses are reviewed by or shared with your care team at your hospital. If something in your responses suggests a concern, the appropriate person will be alerted — whether that is your midwife, an on-call nurse, or another specialist depending on the nature of the concern.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="flex relative pt-11 pb-[3.6625rem] flex-col justify-start items-start gap-[1.375rem] grid-cols-[1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] max-lg:pt-12 max-md:pb-8 max-lg:gap-6 md:max-lg:pb-16 2xl:pt-12 2xl:pb-16 2xl:gap-6" id="emergencies">
                      <section className="w-full block max-w-[293.1px] max-lg:max-w-80 2xl:max-w-80">
                        <div className="flex items-center gap-3">
                          <h3 className="block text-[1.625rem] leading-[2.125rem] font-bold tracking-[-0.4px] whitespace-nowrap max-md:text-xl max-md:leading-[1.75rem] max-md:tracking-[-0.2px] md:max-lg:text-2xl md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.4px] 2xl:text-3xl 2xl:leading-9 2xl:tracking-[-0.5px]" data-component="heading">
                            Concerns and Emergencies
                          </h3>
                          <span className="inline-flex items-center justify-center min-w-[1.375rem] h-[1.375rem] px-1 rounded-full text-[0.6875rem] font-semibold leading-none text-[#7a2850] bg-[rgba(122,40,80,0.12)] shrink-0">4</span>
                        </div>
                      </section>
                      <div className="border-t border-solid border-t-surface flex max-w-[45.8rem] flex-col max-lg:max-w-200 2xl:max-w-200">
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What happens if I report a serious symptom?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  If your response triggers an urgent flag, Omaya Care will alert the on-call clinical team at your hospital immediately and provide you with clear guidance on what to do next, including directing you to an emergency facility if needed. You will not be left without direction.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              What if nobody from the hospital calls me back?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  In a true emergency, do not wait for a callback. Go directly to the nearest hospital emergency unit or call emergency services. Omaya Care will simultaneously be working through the escalation chain to alert your care team, but your safety comes first and you should not wait.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Is Omaya Care available at night and on weekends?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Yes. Omaya Care operates 24 hours a day, 7 days a week. Your hospital's clinical escalation chain has been set up to ensure someone is reachable at all times.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Can I contact Omaya Care between scheduled check-ins if I have a concern?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Yes. Send a message to admin@omayacare.com at any time. If it is a medical emergency, please also seek emergency care immediately without waiting for a response.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="flex relative pt-11 pb-[3.6625rem] flex-col justify-start items-start gap-[1.375rem] grid-cols-[1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] max-lg:pt-12 max-md:pb-8 max-lg:gap-6 md:max-lg:pb-16 2xl:pt-12 2xl:pb-16 2xl:gap-6" id="data-privacy">
                      <section className="w-full block max-w-[293.1px] max-lg:max-w-80 2xl:max-w-80">
                        <div className="flex items-center gap-3">
                          <h3 className="block text-[1.625rem] leading-[2.125rem] font-bold tracking-[-0.4px] max-md:text-xl max-md:leading-[1.75rem] max-md:tracking-[-0.2px] md:max-lg:text-2xl md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.4px] 2xl:text-3xl 2xl:leading-9 2xl:tracking-[-0.5px]" data-component="heading">
                            Data and Privacy
                          </h3>
                          <span className="inline-flex items-center justify-center min-w-[1.375rem] h-[1.375rem] px-1 rounded-full text-[0.6875rem] font-semibold leading-none text-[#7a2850] bg-[rgba(122,40,80,0.12)] shrink-0">4</span>
                        </div>
                      </section>
                      <div className="border-t border-solid border-t-surface flex max-w-[45.8rem] flex-col max-lg:max-w-200 2xl:max-w-200">
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Is my information kept private?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Yes. Your personal and health data is stored securely and shared only with your clinical care team at your hospital and with specialists involved in your care. We do not sell your data or use it for advertising. See our full Privacy Policy for details.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Who can see my check-in responses?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Your midwife and the clinical team at your hospital. No one else unless your care requires a specialist referral, in which case only the relevant information is shared.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Can I request my data?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Yes. Contact us at admin@omayacare.com and we will provide a copy of the data we hold about you within 30 days.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Can I ask you to delete my data?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Yes. Contact us at admin@omayacare.com. Note that in some cases we may be required by law to retain certain health records for a defined period.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="flex relative pt-11 pb-[3.6625rem] flex-col justify-start items-start gap-[1.375rem] grid-cols-[1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] max-lg:pt-12 max-md:pb-8 max-lg:gap-6 md:max-lg:pb-16 2xl:pt-12 2xl:pb-16 2xl:gap-6" id="hospitals">
                      <section className="w-full block max-w-[293.1px] max-lg:max-w-80 2xl:max-w-80">
                        <div className="flex items-center gap-3">
                          <h3 className="block text-[1.625rem] leading-[2.125rem] font-bold tracking-[-0.4px] max-md:text-xl max-md:leading-[1.75rem] max-md:tracking-[-0.2px] md:max-lg:text-2xl md:max-lg:leading-[2rem] md:max-lg:tracking-[-0.4px] 2xl:text-3xl 2xl:leading-9 2xl:tracking-[-0.5px]" data-component="heading">
                            For Hospitals and Partners
                          </h3>
                          <span className="inline-flex items-center justify-center min-w-[1.375rem] h-[1.375rem] px-1 rounded-full text-[0.6875rem] font-semibold leading-none text-[#7a2850] bg-[rgba(122,40,80,0.12)] shrink-0">4</span>
                        </div>
                      </section>
                      <div className="border-t border-solid border-t-surface flex max-w-[45.8rem] flex-col max-lg:max-w-200 2xl:max-w-200">
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              How does my hospital use Omaya Care?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Hospitals use Omaya Care to deliver postnatal check-ins to mothers after discharge, without placing the burden on already stretched midwife teams. The clinical dashboard gives your care team a clear view of which mothers have been checked in on, which are flagged for follow-up, and what was communicated in each interaction.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              Who reviews the check-in content?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  The check-in questions and all information communicated to mothers are reviewed and signed off by a licensed senior midwife before being used. Your clinical team retains oversight and can request changes to the content at any time.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              How does escalation work?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  When a mother's response crosses a clinical threshold, Omaya Care alerts the escalation chain established with your hospital: typically the senior midwife, then the on-call midwife's phone, then the head of nurses. Each tier has an agreed response time window. For true emergencies, the mother is directed to seek care immediately in parallel with the alert.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="h-[3.7875rem] border border-solid border-t-clr-3 border-r-clr-3 border-b-border border-l-clr-3 block overflow-hidden bg-background max-lg:h-16.5 2xl:h-16.5">
                          <button className="w-full h-full flex py-[14.7px] justify-between items-center gap-[1.375rem] text-center cursor-pointer max-lg:py-4 max-lg:gap-6 2xl:py-4 2xl:gap-6" data-component="button" aria-controls="accordion-panel-1" aria-expanded="false" type="button">
                            <span className="block text-[1.0625rem] leading-[1.4375rem] text-left max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-[1.5625rem]">
                              How do we get started?
                            </span>
                            <span className="w-[29.3px] h-[29.3px] block relative rounded-[7.3px] shrink-0 bg-clr-7 max-lg:w-8 max-lg:h-8 max-lg:rounded-lg 2xl:w-8 2xl:h-8 2xl:rounded-lg before:content-[''] before:block before:absolute before:top-[0.9125rem] before:right-0 before:bottom-[0.8rem] before:left-[0.9125rem] before:w-[0.9125rem] before:h-0.5 before:bg-clr-8 before:transform-[matrix(1,0,0,1,-7.32031,-0.914062)] before:origin-[7.32031px_0.914062px] max-lg:before:top-4 max-lg:before:right-0 max-lg:before:bottom-[0.95rem] max-lg:before:left-4 max-lg:before:w-4 max-lg:before:h-[0.05rem] max-lg:before:transform-[matrix(1,0,0,1,-8,-0.398438)] max-lg:before:origin-[8px_0.398438px] 2xl:before:top-4 2xl:before:right-0 2xl:before:bottom-3.5 2xl:before:left-4 2xl:before:w-4 2xl:before:h-0.5 before:transform-[matrix(1,0,0,1,-8,-1)] 2xl:before:origin-[8px_1px] after:content-[''] after:block after:absolute after:top-[0.9125rem] after:right-[0.8rem] after:bottom-0 after:left-[0.9125rem] after:w-0.5 after:h-[0.9125rem] after:bg-clr-8 after:transform-[matrix(1,0,0,1,-0.914062,-7.32031)] after:origin-[0.914062px_7.32031px] max-lg:after:top-4 max-lg:after:right-[0.95rem] max-lg:after:bottom-0 max-lg:after:left-4 max-lg:after:w-[0.05rem] max-lg:after:h-4 max-lg:after:transform-[matrix(1,0,0,1,-0.398438,-8)] max-lg:after:origin-[0.398438px_8px] 2xl:after:top-4 2xl:after:right-3.5 2xl:after:bottom-0 2xl:after:left-4 2xl:after:w-0.5 2xl:after:h-4 2xl:after:transform-[matrix(1,0,0,1,-1,-8)] 2xl:after:origin-[1px_8px]" />
                          </button>
                          <div className="h-0 block max-h-0 overflow-hidden" id="accordion-panel-1">
                            <div className="block opacity-0 pr-[14.7px] pb-[14.7px]">
                              <div className="block text-muted leading-[1.4375rem] max-lg:leading-[1.625rem] 2xl:leading-[1.625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-muted before:text-[0.9375rem] before:leading-[1.4375rem] max-lg:before:text-base max-lg:before:leading-[1.625rem] 2xl:before:text-base 2xl:before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-muted after:text-[0.9375rem] after:leading-[1.4375rem] max-lg:after:text-base max-lg:after:leading-[1.625rem] 2xl:after:text-base 2xl:after:leading-[1.625rem]">
                                <p className="block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6">
                                  Contact us at admin@omayacare.com to discuss a pilot partnership.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
      {" "}
      <div className="block" data-cid="n662" id="lorikeet-widget-shadow-host" />
      <div className="w-[16.625rem] h-[3.6625rem] min-h-[3.6625rem] border border-solid border-clr-3 block fixed top-[44.8375rem] left-[56.1875rem] z-149 opacity-0 py-4 px-[1.375rem] rounded-[14.7px] text-background text-[1.0625rem] leading-[1.4375rem] whitespace-nowrap text-nowrap bg-clr-4 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:padding-box,_border-box] [background-origin:border-box,_border-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] shadow-[var(--clr-13)_0px_4px_24px_0px] [backdrop-filter:blur(5px)] transform-[matrix(0.95,0,0,0.95,10,0)] origin-[132.969px_29.3047px] [-webkit-background-clip:padding-box,_border-box] cursor-pointer pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--clr-14), var(--clr-14)), linear-gradient(135deg, var(--clr-15), var(--clr-16))" }} data-cid="n663">
        Hey there! Got any questions?
      </div>
      {" "}
      <FaqAccordion />
      <DittoMotion spec={{"waapi":[],"rotators":[{"cid":"n620","texts":["211D 06H 57M 31S","211D 06H 57M 30S"],"intervalMs":1000}],"reveals":[],"marquees":[]}} />
    </>
  );
}
