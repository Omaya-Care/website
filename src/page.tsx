import { useState, useEffect, useLayoutEffect, useRef } from "react";
import DittoMotion from "./ditto/DittoMotion";
import { cn } from "./lib/utils";
import LogoCloudSection from "./sections/logo-cloud-section";
import FeatureGridSection from "./sections/feature-grid-section";
import GalleryShowcaseSection from "./sections/gallery-showcase-section";
import GalleryShowcaseSection2 from "./sections/gallery-showcase-section2";
import LogoCloudSection2 from "./sections/logo-cloud-section2";
import LogoCloudSection3 from "./sections/logo-cloud-section3";
import HeroSection from "./sections/hero-section";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Illustration from "./svgs/svg-illustration";
import FeatureCard, { type FeatureCardData } from "./components/feature-card";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import MediaLink, { type MediaLinkData } from "./components/media-link";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import ListRow, { type ListRowData } from "./components/list-row";
import Tile, { type TileData } from "./components/tile";
import Tile2, { type Tile2Data } from "./components/tile2";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import Logo3, { type Logo3Data } from "./components/logo3";
import Tile3, { type Tile3Data } from "./components/tile3";
import Logo4, { type Logo4Data } from "./components/logo4";
import Logo5, { type Logo5Data } from "./components/logo5";
import TextLink2, { type TextLink2Data } from "./components/text-link2";
import TextLink3, { type TextLink3Data } from "./components/text-link3";
import TextLink4, { type TextLink4Data } from "./components/text-link4";
import Tile4, { type Tile4Data } from "./components/tile4";
import MediaLink2, { type MediaLink2Data } from "./components/media-link2";
import Icon7 from "./svgs/svg-icon7";
import TextLink5, { type TextLink5Data } from "./components/text-link5";
import MediaTile6, { type MediaTile6Data } from "./components/media-tile6";
import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import { FeatureCard_cids, MediaTile_cids, MediaLink_cids, MediaTile2_cids, ListRow_cids, Tile_cids, Tile2_cids, Logo3_cids, Tile3_cids, Logo4_cids, Logo5_cids, TextLink2_cids, TextLink3_cids, TextLink2_cids2, TextLink4_cids, Tile4_cids, MediaLink2_cids, TextLink5_cids, MediaTile6_cids } from "./_cids";
import { FeatureCard_styles, MediaTile_styles, MediaLink_styles, MediaTile2_styles, ListRow_styles, Tile_styles, Tile2_styles, Logo4_styles, TextLink2_styles, TextLink3_styles, TextLink2_styles2, MediaTile6_styles } from "./_styles";

const FeatureCard_data: FeatureCardData[] = [
    { kind: "heading", title: "Every membership starts with 100+ biomarkers", description: "A full body test with a quick 10-min lab draw to get started. Test at 2,000+ Quest locations or at-home." },
    { kind: "heading", title: "All your health data, in one place", description: "Upload past labs and sync your wearables (Oura, Whoop, Apple Health and more). Connect the dots across all your data and spot trends early." },
    { kind: "heading", title: "Get a personalized health protocol", description: "A clinician-grade action plan after every test with insight on exactly what to do next (lifestyle, diet, supplements)." },
    { kind: "heading", title: "Message your private care team 24/7", description: "A private care-team in your pocket at all times for any health questions or concerns" },
    { title: "Message your private care team 24/7", description: "A private care-team in your pocket at all times for any health questions or concerns" }
];
const MediaTile_data: MediaTileData[] = [
    { label: "How is Superpower better than a standard physical?" },
    { label: "What biomarkers do you test?" },
    { label: "What locations do you test at? " }
];
const MediaLink_data: MediaLinkData[] = [
    { kind: "button", label: "How does Superpower use my data?", kind2: "icon" },
    { kind: "button", label: "How safe and secure is my data?", kind2: "icon" },
    { label: "What locations do you test at? " }
];
const MediaTile2_data: MediaTile2Data[] = [
    { label: "How do we turn labs into a personalized protocol?", kind: "icon", label2: "How is Superpower’s action plan better than others?", kind2: "icon" },
    { label: "Who do I speak to when I have questions?", kind: "icon", label2: "Isn’t this just another AI chatbot?", kind2: "icon" },
    { label: "Who do I speak to when I have questions?", label2: "Isn’t this just another AI chatbot?" }
];
const ListRow_data: ListRowData[] = [
    { label: "A new health check", label2: "01" },
    { label: "All your health data", label2: "02" },
    { label: "Your action plan", label2: "03" },
    { label: "24/7 care team", label2: "04" }
];
const Tile_data: TileData[] = [
    { text: "Personalized protocol", text2: "Diet, lifestyle and supplements" },
    { text: "Wearable connection", text2: "Link Apple Health, Whoop, OURA, etc." },
    { text: "Advanced AI chat", text2: "With context on your health" },
    { text: "24/7 access to care team", text2: "Ask questions anytime" },
    { text: "Access add-on tests", text2: "Gut, toxins, Grail Galleri cancer screen" }
];
const Tile2_data: Tile2Data[] = [
    { text: "Access peptides" },
    { text: "Access best supplements" },
    { text: "Access prescriptions" }
];
const Logo3_data: Logo3Data[] = [
    { alt: "New mother holding her baby while speaking on the phone", imgSrc: "/assets/cloned/images/aya-mother-baby-phone.avif", srcSet: "/assets/cloned/images/aya-mother-baby-phone.avif 1872w" },
    { alt: "Mother baby care essentials", imgSrc: "/assets/cloned/images/aya-baby-essentials.avif", srcSet: "/assets/cloned/images/aya-baby-essentials.avif 1872w", overlay: { icon: "/assets/cloned/images/omaya-logo-mark.png", title: "Omaya Care Pack", subtitle: "Order #0987654 · Delivered" } },
    { alt: "New parents using emergency contact support on their phone", imgSrc: "/assets/cloned/images/aya-emergency-contact.avif", srcSet: "/assets/cloned/images/aya-emergency-contact.avif 1872w" },
    { alt: "Membership slide 2", imgSrc: "/assets/cloned/images/78621ada786b.avif", srcSet: "/assets/cloned/images/e60205091f24.avif 500w, /assets/cloned/images/b68af40c0a8b.avif 800w, /assets/cloned/images/dd201e11c8ad.avif 1080w, /assets/cloned/images/44f85a74dfe9.avif 1600w, /assets/cloned/images/78621ada786b.avif 1872w", kind: "image" },
    { alt: "Membership slide 3", imgSrc: "/assets/cloned/images/2b3f3a879ef1.avif", srcSet: "/assets/cloned/images/4b128f994b40.avif 500w, /assets/cloned/images/7f83d844aba2.avif 800w, /assets/cloned/images/fa8d148e4aa8.avif 1080w, /assets/cloned/images/763e12a441c8.avif 1600w, /assets/cloned/images/2b3f3a879ef1.avif 1872w", kind: "image" },
    { alt: "Membership slide 1", imgSrc: "/assets/cloned/images/2625a03874cc.avif", srcSet: "/assets/cloned/images/37467bd7b060.avif 500w, /assets/cloned/images/6bb3447c978c.avif 800w, /assets/cloned/images/6ef60097c290.avif 1080w, /assets/cloned/images/f41d7a863f64.avif 1600w, /assets/cloned/images/2625a03874cc.avif 1872w", kind: "image" },
    { alt: "Membership slide 1", imgSrc: "/assets/cloned/images/b28b4949b3fb.avif", srcSet: "/assets/cloned/images/9535d630a93b.avif 500w, /assets/cloned/images/da43de3427ba.avif 800w, /assets/cloned/images/f552f8b2b10c.avif 1080w, /assets/cloned/images/42bd9f32f1be.avif 1600w, /assets/cloned/images/b28b4949b3fb.avif 1872w", kind: "image" }
];
const Tile3_data: Tile3Data[] = [
    { description: "Professional health monitoring for you and your baby" },
    { description: "Support by voice, WhatsApp or SMS" },
    { description: "A 24/7 safety net, whenever you need it" },
    { description: "AI companion for instant maternal health answers" },
    { description: "Real experts available for every maternal health concern" },
    { description: "One place to shop mother and baby care essentials" }
];
const Logo4_data: Logo4Data[] = [
    { imgSrc: "/assets/cloned/svg/phone-icon.svg", text: "Works on any phone" },
    { imgSrc: "/assets/cloned/svg/f94a0722d30a.svg", text: "Cancel anytime" },
    { imgSrc: "/assets/cloned/svg/644a08effc9a.svg", text: "Full postpartum support" }
];
const Logo5_data: Logo5Data[] = [
    { ariaLabel: "Ask Claude", href: "https://claude.ai/new?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2F", sizes: "100vw", imgSrc: "/assets/cloned/images/a297399f982c.avif", srcSet: "/assets/cloned/images/4e6333fcabeb.png 500w, /assets/cloned/images/2adea8e249b4.png 800w, /assets/cloned/images/0eb816dd9ad6.png 1080w, /assets/cloned/images/a297399f982c.avif 1200w" },
    { ariaLabel: "Ask Gemini", href: "https://www.google.com/search?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2F&udm=50", imgSrc: "/assets/cloned/svg/d40fe4aac666.svg" },
    { ariaLabel: "Ask Grok", href: "https://x.com/i/grok?text=tell+me+about+https%3A%2F%2Fsuperpower.com%2F", imgSrc: "/assets/cloned/svg/ff93db0f1a39.svg" },
    { ariaLabel: "Ask ChatGPT", href: "https://chat.openai.com/?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2F", imgSrc: "/assets/cloned/svg/3e9f8339f4b9.svg" },
    { ariaLabel: "Ask Perplexity", href: "https://www.perplexity.ai/search/new?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2F", imgSrc: "/assets/cloned/svg/9a042afd1ff4.svg" }
];
const TextLink2_data: TextLink2Data[] = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/biomarkers", label: "What we test" },
    { href: "https://app.superpower.com/signin?redirectTo=%2F", label: "Member Login", target: "_blank" },
    { href: "/gift", label: "Gift Superpower" },
    { href: "/reviews", label: "Reviews" }
];
const TextLink3_data: TextLink3Data[] = [
    { href: "https://healthiesthoodie.com/", label: "Superpower Labs" },
    { href: "mailto:hello@superpower.com", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" }
];
const TextLink2_data2: TextLink2Data[] = [
    { href: "/superpower-vs-function-health", label: "Function Health" },
    { href: "/superpower-vs-mito-health", label: "Mito Health" },
    { href: "/superpower-vs-insidetracker", label: "InsideTracker" }
];
const TextLink4_data: TextLink4Data[] = [
    { href: "https://superpower-health.typeform.com/to/VQKeJvKr?typeform-source=www.canva.com", label: "For Creators" },
    { href: "/organizations", label: "For Partners" },
    { href: "/organizations", label: "For Business" }
];
const Tile4_data: Tile4Data[] = [
    { href: "/library/guide-to-biomarker-testing", label: "The Complete Guide to Biomarker Testing" },
    { href: "/library/immune-system-biomarkers", label: "Immune System Biomarker" },
    { href: "/library/energy-biomarkers", label: "Energy Biomarkers" },
    { href: "/library/liver-health-biomarkers", label: "Liver Health Biomarkers" },
    { href: "/library/body-composition-biomarkers", label: "Body Composition Biomarkers" },
    { href: "/library/dna-biomarkers", label: "DNA Biomarkers" },
    { href: "/library/thyroid-health-biomarkers", label: "Thyroid Biomarkers" },
    { href: "/library/metabolic-health-biomarker-testing", label: "Metabolic Biomarker Testing" },
    { href: "/library/5-biomarkers-everyone-should-test", label: "5 Biomarkers Everyone Should Test" }
];
const MediaLink2_data: MediaLink2Data[] = [
    { href: "https://x.com/superpower", icon: <>
          <path d="M14.5 2.92H16.9L11.66 8.92L17.83 17.08H13L9.21 12.13L4.88 17.08H2.48L8.09 10.66L2.17 2.92H7.12L10.55 7.44L14.5 2.92ZM13.66 15.65H14.99L6.4 4.28H4.97L13.66 15.65Z" fill="#A1A1AA" />
          </>, label: "Twitter / X" },
    { href: "https://www.instagram.com/superpower", icon: <>
          <path d="M10 3.51C12.11 3.51 12.36 3.52 13.2 3.56C13.7 3.56 14.2 3.65 14.67 3.83C15.01 3.96 15.32 4.16 15.58 4.42C15.84 4.68 16.04 4.99 16.17 5.33C16.35 5.8 16.44 6.3 16.44 6.8C16.48 7.64 16.49 7.89 16.49 10C16.49 12.11 16.48 12.36 16.44 13.2C16.44 13.7 16.35 14.2 16.17 14.67C16.04 15.01 15.84 15.32 15.58 15.58C15.32 15.84 15.01 16.04 14.67 16.17C14.2 16.35 13.7 16.44 13.2 16.44C12.36 16.48 12.11 16.49 10 16.49C7.89 16.49 7.64 16.48 6.8 16.44C6.3 16.44 5.8 16.35 5.33 16.17C4.99 16.04 4.68 15.84 4.42 15.58C4.16 15.32 3.96 15.01 3.83 14.67C3.65 14.2 3.56 13.7 3.56 13.2C3.52 12.36 3.51 12.11 3.51 10C3.51 7.89 3.52 7.64 3.56 6.8C3.56 6.3 3.65 5.8 3.83 5.33C3.96 4.99 4.16 4.68 4.42 4.42C4.68 4.16 4.99 3.96 5.33 3.83C5.8 3.65 6.3 3.56 6.8 3.56C7.64 3.52 7.89 3.51 10 3.51ZM10 2.08C7.85 2.08 7.58 2.09 6.74 2.13C6.08 2.14 5.43 2.27 4.81 2.5C4.29 2.7 3.81 3.01 3.41 3.41C3.01 3.81 2.7 4.29 2.5 4.81C2.27 5.43 2.14 6.08 2.13 6.74C2.09 7.58 2.08 7.85 2.08 10C2.08 12.15 2.09 12.42 2.13 13.26C2.14 13.92 2.27 14.57 2.5 15.19C2.7 15.71 3.01 16.19 3.41 16.59C3.81 16.99 4.29 17.3 4.81 17.5C5.43 17.73 6.08 17.86 6.74 17.87C7.58 17.91 7.85 17.92 10 17.92C12.15 17.92 12.42 17.91 13.26 17.87C13.92 17.86 14.57 17.73 15.19 17.5C15.71 17.3 16.19 16.99 16.59 16.59C16.99 16.19 17.3 15.71 17.5 15.19C17.73 14.57 17.86 13.92 17.87 13.26C17.91 12.42 17.92 12.15 17.92 10C17.92 7.85 17.91 7.58 17.87 6.74C17.86 6.08 17.73 5.43 17.5 4.81C17.3 4.29 16.99 3.81 16.59 3.41C16.19 3.01 15.71 2.7 15.19 2.5C14.57 2.27 13.92 2.14 13.26 2.13C12.42 2.09 12.15 2.08 10 2.08ZM10 5.93C9.2 5.93 8.41 6.17 7.74 6.62C7.07 7.07 6.55 7.7 6.24 8.44C5.94 9.19 5.86 10 6.01 10.79C6.17 11.58 6.56 12.31 7.13 12.87C7.69 13.44 8.42 13.83 9.21 13.99C10 14.14 10.81 14.06 11.56 13.76C12.3 13.45 12.93 12.93 13.38 12.26C13.83 11.59 14.07 10.8 14.07 10C14.07 8.92 13.64 7.89 12.87 7.13C12.11 6.36 11.08 5.93 10 5.93ZM10 12.64C9.48 12.64 8.97 12.48 8.53 12.19C8.1 11.9 7.76 11.49 7.56 11.01C7.36 10.53 7.31 10 7.41 9.49C7.51 8.97 7.76 8.5 8.13 8.13C8.5 7.76 8.97 7.51 9.49 7.41C10 7.31 10.53 7.36 11.01 7.56C11.49 7.76 11.9 8.1 12.19 8.53C12.48 8.97 12.64 9.48 12.64 10C12.64 10.7 12.36 11.37 11.87 11.87C11.37 12.36 10.7 12.64 10 12.64ZM14.23 4.82C14.04 4.82 13.85 4.88 13.7 4.98C13.54 5.09 13.42 5.24 13.35 5.41C13.28 5.58 13.26 5.77 13.29 5.96C13.33 6.14 13.42 6.31 13.55 6.45C13.69 6.58 13.86 6.67 14.04 6.71C14.23 6.74 14.42 6.72 14.59 6.65C14.76 6.58 14.91 6.46 15.02 6.3C15.12 6.15 15.18 5.96 15.18 5.77C15.18 5.52 15.08 5.28 14.9 5.1C14.72 4.92 14.48 4.82 14.23 4.82Z" fill="#A1A1AA" />
          </>, label: "Instagram" },
    { href: "https://www.linkedin.com/company/superpower", icon: <>
          <path d="M16.38 2.5H3.63C3.33 2.5 3.04 2.62 2.83 2.83C2.62 3.04 2.5 3.33 2.5 3.63V16.38C2.5 16.67 2.62 16.96 2.83 17.17C3.04 17.38 3.33 17.5 3.63 17.5H16.38C16.67 17.5 16.96 17.38 17.17 17.17C17.38 16.96 17.5 16.67 17.5 16.38V3.63C17.5 3.33 17.38 3.04 17.17 2.83C16.96 2.62 16.67 2.5 16.38 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.88 7.19C5.62 7.18 5.37 7.1 5.16 6.95C4.95 6.8 4.78 6.59 4.69 6.35C4.6 6.11 4.58 5.85 4.63 5.6C4.68 5.34 4.81 5.11 5 4.93C5.18 4.75 5.42 4.63 5.67 4.59C5.92 4.54 6.19 4.57 6.42 4.67C6.66 4.77 6.86 4.93 7.01 5.15C7.15 5.36 7.22 5.62 7.23 5.88C7.22 6.23 7.07 6.56 6.82 6.81C6.57 7.06 6.23 7.19 5.88 7.19ZM15.25 15.25H13V11.7C13 10.63 12.55 10.25 11.97 10.25C11.79 10.26 11.63 10.3 11.47 10.38C11.32 10.46 11.18 10.56 11.07 10.69C10.95 10.82 10.87 10.97 10.81 11.14C10.76 11.3 10.74 11.47 10.75 11.64C10.75 11.68 10.75 11.71 10.75 11.75V15.25H8.5V8.5H10.68V9.48C10.89 9.14 11.2 8.87 11.55 8.69C11.91 8.5 12.3 8.41 12.7 8.43C13.86 8.43 15.22 9.07 15.22 11.17L15.25 15.25Z" fill="#A1A1AA" />
          </>, label: "LinkedIn" }
];
const TextLink5_data: TextLink5Data[] = [
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/privacy", label: "Privacy policy" },
    { href: "/legal/medical-consent", label: "Medical consent" },
    { href: "#", label: "Cookie preferences" }
];
const MediaTile6_data: MediaTile6Data[] = [
    { label: "How is Superpower better than a standard physical?" },
    { label: "What biomarkers do you test?" },
    { label: "What locations do you test at?" },
    { label: "How does Superpower use my data?" },
    { label: "How safe and secure is my data?" },
    { label: "How do we turn labs into a personalized protocol?" },
    { label: "How is Superpower’s action plan better than others?" },
    { label: "Who do I speak to when I have questions?" },
    { label: "Isn’t this just another AI chatbot?" }
];

const MEMBERSHIP_SLIDE_DURATION = 6000;
const MEMBERSHIP_SLIDE_TRANSITION = 500;

function MembershipCarousel({ data, cids }: { data: Logo3Data[]; cids: string[][] }) {
  const count = data.length;
  const tiles = [...data, ...data, ...data];

  const [index, setIndex] = useState(count);
  const [paused, setPaused] = useState(false);
  const [offsets, setOffsets] = useState<number[]>([]);
  const [snapping, setSnapping] = useState(false);
  const [ready, setReady] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const active = index % count;

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setOffsets(Array.from(track.children).map((el) => (el as HTMLElement).offsetLeft));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count]);

  useEffect(() => {
    if (offsets.length && !ready) {
      const id = requestAnimationFrame(() => setReady(true));
      return () => cancelAnimationFrame(id);
    }
  }, [offsets, ready]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform" || e.target !== trackRef.current) return;
    if (index >= 2 * count) {
      setSnapping(true);
      setIndex((i) => i - count);
    }
  };

  useEffect(() => {
    if (!snapping) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setSnapping(false)));
    return () => cancelAnimationFrame(id);
  }, [snapping]);

  const offset = offsets[index] ?? 0;

  return (
    <>
      <div className="h-163.5 block relative min-w-0 max-w-full rounded-[11px] overflow-hidden max-lg:h-120 max-lg:rounded-xl 2xl:h-178.5 2xl:rounded-xl" data-cid="n525">
        <div
          className="absolute top-4 right-4 z-10 flex items-center rounded-full px-3.5 py-1.5 text-background text-xs leading-[1.125rem] whitespace-nowrap [backdrop-filter:blur(24px)] max-lg:top-3 max-lg:right-3"
          style={{ backgroundColor: "rgba(122, 40, 80, 0.55)" }}
          data-cid="n525-badge"
        >
          Coming soon
        </div>
        <div
          ref={trackRef}
          className="h-163.5 flex gap-[14.7px] will-change-transform max-lg:h-120 max-lg:gap-4 2xl:h-178.5 2xl:gap-4"
          style={{
            transform: `translateX(${-offset}px)`,
            transition: snapping || !ready ? "none" : `transform ${MEMBERSHIP_SLIDE_TRANSITION}ms ease-out`,
          }}
          onTransitionEnd={handleTransitionEnd}
          data-cid="n526"
        >
          {/* key={i}: tripled infinite-loop track — position index IS the stable identity; a data-derived id (imgSrc) collides across the 3 duplicated copies and would remount/flash tiles on snap. */}
          {tiles.map((d, i) => (
            <Logo3 key={i} d={d} cids={cids[i % count]} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[1.375rem] max-lg:gap-6 2xl:gap-6" data-cid="n541">
        <div className="flex min-w-0 items-center flex-1 gap-2" data-cid="n542">
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
          {data.map((d, i) => (
            <button
              key={d.imgSrc}
              type="button"
              onClick={() => setIndex(count + i)}
              aria-label={`Show slide ${i + 1} of ${count}`}
              aria-current={i === active}
              className="h-1 block relative min-w-0 rounded-[99px] basis-0 overflow-hidden bg-color-002 cursor-pointer"
              style={{ flexGrow: i === active ? 3 : 1, transition: `flex-grow ${MEMBERSHIP_SLIDE_TRANSITION}ms ease-out` }}
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
                        animation: `sq-progress-fill ${MEMBERSHIP_SLIDE_DURATION}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }
                    : { width: "0%" }
                }
                onAnimationEnd={i === active ? () => setIndex((idx) => idx + 1) : undefined}
              />
            </button>
          ))}
        </div>
        <p className="block shrink-0 overflow-hidden text-color-001 text-[0.8125rem] leading-[1.1875rem] tracking-[-0.2px] whitespace-nowrap text-nowrap max-lg:text-sm max-lg:leading-[1.3125rem] 2xl:text-sm 2xl:leading-[1.3125rem]" data-cid="n555">
          <span className="inline-block" data-cid="n556">
            {active + 1}
          </span>
          {` / ${count}`}
        </p>
      </div>
    </>
  );
}

export default function Page() {
  const [cookieAccepted, setCookieAccepted] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="block relative" data-cid="n1">
        <Navbar />
        <div className="block max-lg:relative" data-cid="n22">
          <div className="h-[clamp(748.7px,min(calc(258.7px_+_47.8vw),calc(100dvh_-_6.5rem)),1024px)] max-h-[calc(100dvh-2.8625rem)] flex relative max-w-full mt-[2.8625rem] pb-[7.3px] px-[7.3px] flex-col justify-between items-center overflow-hidden max-md:h-203 max-md:max-h-dvh max-lg:justify-end max-md:gap-12 max-lg:mt-0 max-lg:pb-0 max-lg:px-0 md:max-lg:h-[51.2rem] md:max-lg:max-h-dvh md:max-lg:gap-20 2xl:h-256 2xl:max-h-[calc(100dvh-3.125rem)] 2xl:mt-12.5 2xl:pb-2 2xl:px-2" data-cid="n23">
            <div className="h-full flex relative pb-[3.6625rem] pl-[3.6625rem] rounded-[11px] flex-col justify-center items-start self-stretch overflow-hidden bg-clr-2 max-lg:min-h-180 max-md:pb-6 max-lg:justify-end max-md:pl-0 max-lg:rounded-[initial] md:max-lg:pb-12 md:max-lg:pl-12 2xl:pb-16 2xl:pl-16 2xl:rounded-xl" data-cid="n24" id="sp-main-hero">
              <div className="h-full block absolute top-0 inset-x-0 min-w-0" data-cid="n25">
                <div className="h-full flex absolute top-0 inset-x-0 z-2 pb-[3.6625rem] pl-[3.6625rem] flex-col justify-center items-start overflow-hidden max-md:pb-20 max-md:px-6 max-lg:justify-end md:max-lg:pb-12 md:max-lg:pl-12 2xl:pb-16 2xl:pl-16" data-cid="n26">
                  <div className="w-[calc(100%+3.925rem)] h-full block absolute top-0 -left-[3.925rem] min-w-0 overflow-hidden [filter:brightness(1)] max-md:w-[401.5px] max-md:-left-[1.1375rem] md:max-lg:w-[52.1125rem] md:max-lg:left-[-37.9px] 2xl:w-[130.2125rem] 2xl:left-[-94.7px]" data-cid="n27">
                    <img decoding="async" fetchPriority="high" className="w-full h-[clamp(748.7px,min(calc(258.7px_+_47.8vw),calc(100dvh_-_6.5rem)),1024px)] max-h-[calc(100dvh-2.8625rem)] block max-w-full overflow-clip object-cover align-middle max-md:h-203 max-md:max-h-dvh md:max-lg:h-[51.1875rem] md:max-lg:max-h-dvh 2xl:h-254 2xl:max-h-[calc(100dvh-3.125rem)]" style={{ transform: "scaleX(-1)" }} data-cid="n28" data-component="image" alt="Hero background" src="/assets/images/hero-omaya.png" />
                    <div className="h-[370.7px] block absolute bottom-0 inset-x-0 opacity-30 [mix-blend-mode:overlay] pointer-events-none max-md:h-101.5 md:max-lg:h-[25.6rem] 2xl:h-127" style={{ backgroundImage: "linear-gradient(var(--clr-3) 0%, var(--clr-2) 100%)" }} data-cid="n29" />
                    <div className="h-[34.75rem] block absolute bottom-0 inset-x-0 opacity-50 [mix-blend-mode:darken] pointer-events-none max-md:h-[38.0625rem] md:max-lg:h-[38.4rem] 2xl:h-190.5" style={{ backgroundImage: "linear-gradient(var(--clr-3) 0%, var(--clr-2) 100%)" }} data-cid="n30" />
                    <div className="block absolute top-0 right-0 w-3/4 h-[45%] pointer-events-none" style={{ background: "linear-gradient(to bottom left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 35%, transparent 65%)" }} />
                  </div>
                  <div className="h-[19.1375rem] flex z-10 flex-col justify-center items-start max-md:h-[20.325rem] max-lg:justify-end max-lg:items-stretch max-lg:self-stretch md:max-lg:h-[20.9rem] 2xl:h-[20.9rem]" data-cid="n31">
                    <div className="h-full flex relative z-10 max-w-[542.3px] flex-col justify-center items-start gap-[7.3px] text-background max-md:self-stretch max-lg:gap-2 max-lg:max-w-none 2xl:max-w-148 2xl:gap-2" data-cid="n32">

                      <div className="flex mb-[29.3px] flex-col gap-[7.3px] max-lg:mb-8 max-lg:gap-2 2xl:mb-8 2xl:gap-2" data-cid="n35">
                        <div className="w-full block" data-cid="n36">
                          <Illustration cid={"n37"} />
                          {" "}
                        </div>
                        <div className="block max-w-[29.3125rem] mt-[7.3px] flex-col gap-[7.3px] max-md:max-w-74 max-lg:mt-2 max-lg:gap-2 md:max-lg:max-w-80 2xl:max-w-128 2xl:mt-2 2xl:gap-2" data-cid="n38">
                          <p className="h-11 block leading-[1.375rem] tracking-[-0.2px] max-md:h-18 max-lg:leading-6 md:max-lg:h-12 2xl:h-12 2xl:leading-6" data-cid="n39">
                            Omaya calls patients after discharge, listens for concerns,
                            <br className="inline" data-cid="n40" />
                            and alerts your care team the moment something needs attention.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[14.7px] max-md:w-[19.8125rem] max-md:grid max-md:gap-2 max-md:grid-cols-[154.5px_154.5px] max-md:grid-rows-[41.2px] max-md:[grid-auto-columns:1fr] md:max-lg:gap-4 2xl:gap-4" data-cid="n41">
                        <div className="contents min-w-0" data-cid="n42">
                          <div className="contents" data-cid="n43">
                            <a className="h-[46.1px] flex relative max-w-full py-[0.8rem] px-[18.3px] rounded-[999px] justify-center items-center gap-[7.3px] overflow-hidden text-foreground bg-background cursor-pointer max-md:h-[2.575rem] max-md:py-[0.675rem] max-md:px-4 max-lg:gap-2 max-md:text-sm max-md:leading-[1.25rem] md:max-lg:h-[3.15rem] md:max-lg:py-3.5 md:max-lg:px-5 2xl:h-[3.15rem] 2xl:py-3.5 2xl:px-5 2xl:gap-2 hover:bg-border" data-cid="n44" data-component="link" href="/contact?type=demo">
                              <div className="h-[20.5px] flex relative z-1 items-center gap-1.5 max-md:h-[1.225rem] max-lg:gap-[0.4rem] md:max-lg:h-[1.4rem] 2xl:h-[1.4rem] 2xl:gap-[0.4rem]" data-cid="n45">
                                Book a demo
                              </div>
                            </a>
                          </div>
                        </div>
                        <a className="h-[46.1px] flex relative max-w-full py-[0.8rem] px-[18.3px] rounded-[999px] justify-center items-center gap-[7.3px] overflow-hidden bg-surface-2 [backdrop-filter:blur(32px)] cursor-pointer max-md:h-[2.575rem] max-md:py-[0.675rem] max-md:px-4 max-lg:gap-2 max-md:text-sm max-md:leading-[1.25rem] md:max-lg:h-[3.15rem] md:max-lg:py-3.5 md:max-lg:px-5 2xl:h-[3.15rem] 2xl:py-3.5 2xl:px-5 2xl:gap-2 hover:bg-clr-22" data-cid="n46" data-component="link" href="/#how-it-works">
                          <div className="h-[20.5px] flex relative z-1 items-center gap-1.5 max-md:h-[1.225rem] max-lg:gap-[0.4rem] md:max-lg:h-[1.4rem] 2xl:h-[1.4rem] 2xl:gap-[0.4rem]" data-cid="n47">
                            See how it works
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[2.975rem] flex absolute right-[658.9px] bottom-11 left-[3.6625rem] z-10 min-w-0 justify-start items-center gap-[1.375rem] text-background text-center max-lg:hidden 2xl:h-13 2xl:right-313 2xl:bottom-12 2xl:left-16 2xl:gap-6" data-cid="n48">
                <div className="h-[2.5625rem] flex flex-col text-left 2xl:h-[2.8rem]" data-cid="n49">
                  <div className="h-[20.5px] block 2xl:h-[1.4rem]" data-cid="n50">
                    Always On
                    <br className="inline" data-cid="n51" />
                  </div>
                  <div className="block opacity-55 whitespace-nowrap" data-cid="n52">
                    Scheduled. Automatic.
                  </div>
                </div>
                <div className="w-px h-full block opacity-20 bg-background" data-cid="n53" />
                <div className="h-[2.5625rem] flex flex-col text-left 2xl:h-[2.8rem]" data-cid="n54">
                  <div className="block" data-cid="n55">
                    Instant Alerts
                    <br className="inline" data-cid="n56" />
                  </div>
                  <div className="block opacity-55 whitespace-nowrap" data-cid="n57">
                    Critical flags, instantly.
                  </div>
                </div>
                <div className="w-px h-full block opacity-20 bg-background" data-cid="n58" />
                <div className="h-[2.5625rem] flex flex-col text-left 2xl:h-[2.8rem]" data-cid="n59">
                  <div className="block" data-cid="n60">
                    Every Call
                  </div>
                  <div className="block opacity-55 whitespace-nowrap" data-cid="n61">
                    Full summary, every call.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LogoCloudSection />
          <FeatureGridSection />
          <div className="block" data-cid="n370">
            <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-[0.9375rem] before:leading-[1.3125rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-[0.9375rem] after:leading-[1.3125rem] max-lg:after:text-base max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem]" data-cid="n371" />
            <GalleryShowcaseSection2 />
          </div>
          <section className="block" data-cid="n520" id="for-mothers">
            <div className="block pt-10 pb-10 px-[2.2875rem] max-md:pt-12 max-lg:pb-12 max-md:px-6 md:max-lg:pt-10 md:max-lg:px-10 2xl:pt-10 2xl:pb-10 2xl:px-10" data-cid="n521">
              <div className="block max-w-[73.275rem] mx-auto justify-center max-lg:max-w-320 2xl:max-w-320" data-cid="n522">
                <div className="grid items-center gap-[73.3px] grid-rows-[695.2px] [grid-auto-columns:1fr] grid-cols-2 max-lg:flex-col max-md:gap-8 max-md:grid-rows-[525px_509.359px] max-lg:grid-cols-1 md:max-lg:gap-12 md:max-lg:grid-rows-[525px_544.984px] 2xl:gap-20 2xl:grid-rows-[759px]" data-cid="n523">
                  <div className="flex min-w-0 max-w-[35.725rem] flex-col shrink-0 gap-[1.375rem] max-lg:max-w-156 max-lg:gap-6 2xl:max-w-156 2xl:gap-6" data-cid="n524">
                    <MembershipCarousel data={Logo3_data.slice(0, 4)} cids={Logo3_cids} />
                  </div>
                  <div className="flex flex-col shrink-0 gap-[18.3px] max-md:gap-4 md:max-lg:gap-5 2xl:gap-5" data-cid="n558">
                    <div className="block -mt-4 max-md:-mt-2 md:max-lg:-mt-3 2xl:-mt-3" data-cid="n559">
                      <h2 className="block text-[2.3125rem] leading-11 tracking-[-0.73px] max-md:text-2xl max-md:leading-[1.8125rem] max-md:tracking-[-0.54px] md:max-lg:text-[2.5rem] md:max-lg:leading-12 md:max-lg:tracking-[-0.9px] 2xl:text-5xl 2xl:leading-[3.625rem] 2xl:tracking-[-1.08px]" data-cid="n560" data-component="heading">
                        Aya Bundle for new mothers
                      </h2>
                      <p className="block mt-2 text-muted-foreground text-[1.0625rem] leading-[1.5625rem] tracking-[-0.12px] max-md:text-base max-md:leading-6 md:max-lg:text-lg md:max-lg:leading-[1.6875rem] 2xl:text-lg 2xl:leading-[1.6875rem]" data-cid="n560b">
                        Your Omaya membership starts here
                      </p>
                    </div>
                    <div className="flex pl-[7.3px] flex-col gap-[7.3px] max-lg:gap-2 max-md:pl-0 md:max-lg:pl-2 2xl:pl-2 2xl:gap-2" data-cid="n561">
                      {Tile3_data.map((d, i) => <Tile3 key={d.description} d={d} cids={Tile3_cids[i]} />)}
                    </div>
                    <div className="flex items-center gap-[0.6875rem] max-md:mt-3 max-lg:gap-3 2xl:gap-3" data-cid="n583">
                      <div className="block text-[4rem] leading-[4.25rem] max-md:text-[2.5rem] max-md:leading-12 md:max-lg:text-[4.375rem] md:max-lg:leading-18.5 2xl:text-[4.375rem] 2xl:leading-18.5" data-cid="n584">
                        $5
                      </div>
                      <div className="h-[2.8625rem] flex flex-col gap-0.5 max-md:h-12 max-md:gap-[initial] md:max-lg:h-12.5 2xl:h-12.5" data-cid="n585">
                        <p className="block leading-[1.375rem] tracking-[-0.2px] max-lg:leading-6 2xl:leading-6" data-cid="n586">
                          /month*
                        </p>
                        <p className="block text-color-001 leading-[1.375rem] tracking-[-0.2px] whitespace-nowrap max-lg:leading-6 2xl:leading-6" data-cid="n587">
                          Billed monthly
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-stretch gap-[14.7px] max-md:-mt-2 max-lg:gap-4 2xl:gap-4" data-cid="n588">
                      <div className="flex flex-col" data-cid="n589">
                        <a className="border border-solid border-clr-3 flex relative max-w-full py-[0.8rem] px-[18.3px] rounded-[999px] justify-center items-center gap-[7.3px] overflow-hidden text-background bg-color-009 cursor-pointer max-md:py-[0.675rem] max-md:px-4 max-lg:gap-2 max-md:text-sm max-md:leading-[1.25rem] md:max-lg:py-3.5 md:max-lg:px-5 2xl:py-3.5 2xl:px-5 2xl:gap-2 hover:bg-clr-24 focus:bg-clr-28" data-cid="n590" data-component="link" href="/contact?type=waitlist">
                          <div className="flex relative z-1 items-center gap-1.5 max-lg:gap-[0.4rem] 2xl:gap-[0.4rem]" data-cid="n591">
                            Join the waitlist
                          </div>
                        </a>
                      </div>
                      <div className="block" data-cid="n592">
                        <div className="flex max-w-[32.0625rem] flex-wrap justify-center items-center gap-[1.375rem] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] [grid-auto-columns:1fr] max-lg:max-w-140 max-md:gap-4 max-md:text-xs max-md:leading-[1.0625rem] md:max-lg:gap-6 2xl:max-w-140 2xl:gap-6" data-cid="n593">
                          {Logo4_data.map((d, i) => <Logo4 key={d.text} d={d} cids={Logo4_cids[i]} styles={Logo4_styles[i]} />)}
                        </div>
                      </div>
                    </div>
                    <p className="block text-clr-13 text-[0.6875rem] leading-[1.0625rem] tracking-[0.05px] text-center max-lg:text-xs max-lg:leading-4.5 max-lg:tracking-[0.06px] 2xl:text-xs 2xl:leading-4.5 2xl:tracking-[0.06px]" data-cid="n603">
                      * Pricing is subject to change and is currently under review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <GalleryShowcaseSection />
        </div>
        <div className="block relative pb-[7.3px] px-[7.3px] max-lg:pb-0 max-lg:px-0 2xl:pb-2 2xl:px-2" data-cid="n604">
          <div className="block absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[11px] max-lg:rounded-[initial] 2xl:rounded-xl" data-cid="n604bg" aria-hidden="true">
            <div className="block absolute top-0 inset-x-0 h-[45.8rem] overflow-hidden max-lg:h-140 2xl:h-200" data-cid="n604bg-crisp">
              <img decoding="async" className="w-full h-full block max-w-full overflow-clip object-cover object-top align-middle" data-cid="n604bg-img" alt="Care that follows mothers home" src="/assets/images/footer-family.avif" />
              <div className="h-[34.75rem] block absolute bottom-0 inset-x-0 opacity-50 [mix-blend-mode:darken] pointer-events-none max-md:h-[38.0625rem] md:max-lg:h-[38.4rem] 2xl:h-190.5" style={{ backgroundImage: "linear-gradient(var(--clr-3) 0%, var(--clr-2) 100%)" }} data-cid="n604bg-darken" />
              <div className="block absolute top-0 right-0 w-3/4 h-[45%] pointer-events-none" style={{ background: "linear-gradient(to bottom left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 35%, transparent 65%)" }} data-cid="n604bg-corner" />
              <div className="block absolute inset-y-0 left-0 w-3/4 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 70%)" }} data-cid="n604bg-left" />
            </div>
            <div className="block absolute top-[45.8rem] inset-x-0 bottom-0 overflow-hidden pointer-events-none max-lg:top-140 2xl:top-200" data-cid="n604bg-reflect" aria-hidden="true">
              <div className="block absolute inset-0 overflow-hidden" data-cid="n604bg-reflect-blur">
                <img decoding="async" className="w-full h-[45.8rem] block absolute top-0 inset-x-0 max-w-full overflow-clip object-cover object-top align-middle [filter:blur(6px)] max-lg:h-140 2xl:h-200" style={{ transform: "scaleY(-1)" }} alt="" src="/assets/images/footer-family.avif" />
              </div>
              <div className="block absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_0%,transparent_33%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,transparent_33%)]" data-cid="n604bg-reflect-sharp">
                <img decoding="async" className="w-full h-[45.8rem] block absolute top-0 inset-x-0 max-w-full overflow-clip object-cover object-top align-middle max-lg:h-140 2xl:h-200" style={{ transform: "scaleY(-1)" }} alt="" src="/assets/images/footer-family.avif" />
              </div>
              <div className="block absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.42) 100%)" }} data-cid="n604bg-reflect-tint" />
            </div>
          </div>
          <section className="h-[45.8rem] min-h-[45.8rem] flex relative z-1 flex-col justify-center items-start max-lg:h-140 max-lg:min-h-140 max-md:-mb-12 max-md:overflow-hidden 2xl:h-200 2xl:min-h-200" data-cid="n605">
            <div className="block self-stretch" data-cid="n606">
              <div className="block py-[6.4125rem] px-[2.2875rem] max-md:h-[14.075rem] max-md:py-12 max-md:px-6 max-md:overflow-hidden md:max-lg:py-24 md:max-lg:px-10 2xl:py-28 2xl:px-10" data-cid="n607">
                <div className="h-full block relative z-2 max-w-[73.275rem] justify-center mx-auto max-lg:z-5 max-lg:max-w-320 2xl:max-w-320" data-cid="n608">
                  <div className="h-full flex max-w-[50%] flex-col gap-[1.375rem] text-background max-lg:gap-6 max-lg:max-w-none 2xl:gap-6" data-cid="n609">
                    <h2 className="block text-[2.75rem] leading-[3.1875rem] tracking-[-0.99px] max-md:text-[2rem] max-md:leading-8 max-md:tracking-[-0.64px] md:max-lg:text-5xl md:max-lg:leading-12 md:max-lg:tracking-[-0.96px] 2xl:text-6xl 2xl:leading-15 2xl:tracking-[-1.2px]" data-cid="n610" data-component="heading">
                      {"Care that follows "}
                      <span className="block" data-cid="n611">
                        mothers home
                      </span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-[14.7px] max-md:gap-2 md:max-lg:gap-4 2xl:gap-4" data-cid="n612">
                      <a className="flex relative max-w-full py-[0.8rem] px-[18.3px] rounded-[999px] justify-center items-center gap-[7.3px] overflow-hidden text-foreground bg-background cursor-pointer max-md:py-[0.675rem] max-md:px-4 max-lg:gap-2 max-md:text-sm max-md:leading-[1.25rem] md:max-lg:py-3.5 md:max-lg:px-5 2xl:py-3.5 2xl:px-5 2xl:gap-2 hover:bg-border" data-cid="n613" data-component="link" href="/contact?type=general">
                        <div className="flex relative z-1 items-center gap-1.5 whitespace-nowrap max-lg:gap-[0.4rem] 2xl:gap-[0.4rem]" data-cid="n614">
                          Contact us
                        </div>
                      </a>
                      <a className="h-[46.1px] flex relative max-w-full py-[0.8rem] px-[18.3px] rounded-[999px] justify-center items-center gap-[7.3px] overflow-hidden bg-surface-2 [backdrop-filter:blur(32px)] cursor-pointer max-md:h-[2.575rem] max-md:py-[0.675rem] max-md:px-4 max-lg:gap-2 max-md:text-sm max-md:leading-[1.25rem] md:max-lg:h-[3.15rem] md:max-lg:py-3.5 md:max-lg:px-5 2xl:h-[3.15rem] 2xl:py-3.5 2xl:px-5 2xl:gap-2 hover:bg-clr-22" data-cid="n615" data-component="link" href="/faq">
                        <div className="h-[20.5px] flex relative z-1 items-center gap-1.5 whitespace-nowrap max-md:h-[1.225rem] max-lg:gap-[0.4rem] md:max-lg:h-[1.4rem] 2xl:h-[1.4rem] 2xl:gap-[0.4rem]" data-cid="n616">
                          FAQ
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        <div className="block" data-cid="n797">
          <nav className="w-[190.5px] h-[31.1125rem] flex fixed top-[16.3875rem] left-11 z-1150 opacity-0 flex-col gap-[0.6875rem] text-background text-[0.8125rem] leading-[1.1875rem] transform-[matrix(1,0,0,1,0,14.6555)] pointer-events-none max-lg:hidden" data-cid="n798">
            <p className="block opacity-50 tracking-[-0.2px] pointer-events-none" data-cid="n799">
              FAQs
            </p>
            <ul className="flex flex-col gap-[0.6875rem] text-muted-foreground [list-style-type:none] list-outside pointer-events-none 2xl:gap-3" data-cid="n800">
              {MediaTile6_data.map((d, i) => <MediaTile6 key={MediaTile6_cids[i][0]} d={d} cids={MediaTile6_cids[i]} styles={MediaTile6_styles[i]} />)}
            </ul>
          </nav>
          <nav className="hidden fixed bottom-0 inset-x-0 z-1100 opacity-0 p-[14.7px] justify-between items-center gap-[0.6875rem] text-background text-[0.8125rem] leading-[1.1875rem] transform-[none] pointer-events-none" data-cid="n855">
            <p className="block opacity-50 py-[7.3px] px-[0.6875rem] flex-1 tracking-[-0.2px] pointer-events-none max-lg:min-w-0 max-lg:py-2 max-md:pr-3 max-md:pl-5 md:max-lg:px-3" data-cid="n856">
              Frequently asked questions
            </p>
            <div className="flex items-center shrink-0 gap-[5.5px] pointer-events-none max-lg:gap-1.5" data-cid="n857">
              <button className="w-[29.3px] h-[29.3px] flex min-w-0 rounded-[7.3px] justify-center items-center text-center bg-clr-10 [backdrop-filter:blur(21.9832px)] cursor-pointer pointer-events-none max-lg:w-8 max-lg:h-8 max-lg:rounded-[99px] max-lg:[backdrop-filter:blur(24px)]" data-cid="n858" aria-label="Previous question" type="button">
                <div className="w-[0.2875rem] h-[7.3px] block min-w-0 shrink-0 pointer-events-none max-lg:w-[0.3125rem] max-lg:h-2 max-lg:flex max-lg:justify-center max-lg:items-center" data-cid="n859">
                  <Icon cid={"n860"} />
                </div>
              </button>
              <button className="w-[29.3px] h-[29.3px] flex min-w-0 rounded-[7.3px] justify-center items-center text-center bg-clr-10 [backdrop-filter:blur(21.9832px)] cursor-pointer pointer-events-none max-lg:w-8 max-lg:h-8 max-lg:rounded-[99px] max-lg:[backdrop-filter:blur(24px)]" data-cid="n861" aria-label="Next question" type="button">
                <div className="w-[0.2875rem] h-[7.3px] block min-w-0 shrink-0 pointer-events-none max-lg:w-[0.3125rem] max-lg:h-2 max-lg:flex max-lg:justify-center max-lg:items-center" data-cid="n862">
                  <Icon2 cid={"n863"} />
                </div>
              </button>
            </div>
          </nav>
        </div>
        <div className="block" data-cid="n864">
          <div className="block" data-cid="n865">
            <div className="w-317.5 h-200 flex fixed top-0 left-0 z-9999 invisible opacity-0 justify-center items-center bg-clr-15 pointer-events-none max-md:w-[22.8125rem] max-md:h-203 md:max-lg:w-189.5 md:max-lg:h-256 2xl:w-477.5 2xl:h-270" data-cid="n866" id="sp2Overlay">
              <HeroSection />
            </div>
          </div>
          <div className="block" data-cid="n897">
            <div className="block" data-cid="n898" />
          </div>
          <div className="block" data-cid="n899">
            <div className="block" data-cid="n900" />
          </div>
        </div>
      </div>
      {!cookieAccepted && <div className="block" data-cid="n901">
        <div className="h-[156.5px] border border-solid border-color-006 flex fixed right-[46.175rem] bottom-[1.375rem] left-[18.3px] z-998 max-w-[32.0625rem] py-6 px-8 rounded-[7.3px] bg-background max-md:h-[16.05rem] max-lg:bottom-0 max-lg:inset-x-0 max-lg:mb-2 max-lg:mx-2 max-lg:p-4 max-lg:rounded-lg max-lg:max-w-none md:max-lg:h-44 2xl:h-[10.275rem] 2xl:right-332.5 2xl:bottom-6 2xl:left-5 2xl:max-w-140 2xl:rounded-lg" data-cid="n902">
          <div className="flex max-w-250 flex-col justify-start items-start gap-[14.7px] max-lg:gap-4 2xl:gap-4" data-cid="n903">
            <div className="h-[53.9px] block mr-[29.3px] text-[0.8125rem] leading-[1.125rem] max-md:h-[6.125rem] max-lg:text-sm max-lg:leading-[1.25rem] max-md:mr-0 md:max-lg:h-[2.45rem] md:max-lg:mr-8 2xl:h-[3.675rem] 2xl:mr-8 2xl:text-sm 2xl:leading-[1.25rem]" data-cid="n904">
              {"By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our "}
              <a className="h-[1.125rem] inline-flex underline cursor-pointer max-lg:h-[1.225rem] 2xl:h-[1.225rem]" data-cid="n905" data-component="link" href="#">
                Privacy Policy
              </a>
              {" for more information."}
            </div>
            <div className="flex justify-start items-stretch shrink-0 gap-[7.3px] grid-cols-[auto_auto] grid-rows-[auto] [grid-auto-columns:1fr] text-[0.8125rem] leading-[1.125rem] max-md:mt-3 max-lg:flex-col-reverse max-lg:gap-2 max-lg:text-sm max-lg:leading-[1.25rem] max-md:text-center 2xl:gap-2 2xl:text-sm 2xl:leading-[1.25rem]" data-cid="n906">
              <a className="w-35 block min-w-35 py-2.5 px-5 rounded-[73.3px] text-background text-center bg-color-009 cursor-pointer max-md:w-[19.6875rem] max-md:mr-2 max-md:mb-2.5 max-lg:rounded-[80px] max-md:[text-align:inherit] md:max-lg:w-177 2xl:rounded-[80px]" data-cid="n907" data-component="link" role="button" tabIndex={0} onClick={() => setCookieAccepted(true)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCookieAccepted(true); } }}>
                Accept
              </a>
              <a className="h-[2.375rem] border border-solid border-color-007 flex py-2 px-[16.9px] rounded-[73.3px] justify-center items-center cursor-pointer max-lg:h-[2.45rem] max-md:mr-2 max-lg:py-[0.55rem] max-lg:px-[1.15rem] max-lg:rounded-[80px] 2xl:h-[2.475rem] 2xl:py-[0.55rem] 2xl:px-[1.15rem] 2xl:rounded-[80px]" data-cid="n908" data-component="button" href="#">
                More information
              </a>
            </div>
          </div>
        </div>
      </div>}
      {" "}
      <div className="block" data-cid="n909" id="lorikeet-widget-shadow-host" />
      <div className="w-[16.625rem] h-[3.6625rem] min-h-[3.6625rem] border border-solid border-clr-3 block fixed top-[44.8375rem] left-[56.5rem] z-149 opacity-0 py-4 px-[1.375rem] rounded-[14.7px] text-background text-[1.0625rem] leading-[1.4375rem] whitespace-nowrap text-nowrap bg-clr-18 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:padding-box,_border-box] [background-origin:border-box,_border-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] shadow-[var(--clr-11)_0px_4px_24px_0px] [backdrop-filter:blur(5px)] transform-[matrix(0.95,0,0,0.95,10,0)] origin-[132.969px_29.3047px] [-webkit-background-clip:padding-box,_border-box] cursor-pointer pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--clr-19), var(--clr-19)), linear-gradient(135deg, var(--clr-20), var(--clr-21))" }} data-cid="n910">
        Hey there! Got any questions?
      </div>
      {" "}
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"cid":"n87","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 21.9832)","transition":"opacity 0.75s linear, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)"},{"cid":"n95","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 21.9832)","transition":"opacity 0.75s linear 0.15s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.15s"},{"cid":"n103","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 21.9832)","transition":"opacity 0.75s linear 0.3s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.3s"},{"cid":"n110","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 21.9832)","transition":"opacity 0.75s linear 0.45s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.45s"},{"cid":"n122","opacity":"1","transform":"none","transition":"","visibility":"hidden","animationName":"howitworks-bg-prev-reverse","animationDuration":"0.8s","animationDelay":"0s","animationTiming":"cubic-bezier(0.4, 0, 0.2, 1)"},{"cid":"n246","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n249","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n252","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n254","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n257","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n260","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n263","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n266","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n269","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n271","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n273","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 10.9916)","transition":"opacity 0.6s, transform 0.6s"},{"cid":"n136","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n142","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n148","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n152","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n168","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n184","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n206","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"}],"marquees":[]}} />
    </>
  );
}
