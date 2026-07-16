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
          <path d="M14.5027 2.91675H16.9044L11.6575 8.9176L17.83 17.0834H12.997L9.21164 12.1309L4.88031 17.0834H2.47725L8.08924 10.6648L2.16797 2.91675H7.12366L10.5453 7.44354L14.5027 2.91675ZM13.6599 15.645H14.9906L6.40056 4.27965H4.97251L13.6599 15.645Z" fill="#A1A1AA" />
          </>, label: "Twitter / X" },
    { href: "https://www.instagram.com/superpower", icon: <>
          <path d="M9.99998 3.50969C12.1137 3.50969 12.3642 3.51761 13.199 3.55575C13.7009 3.56181 14.198 3.65408 14.6687 3.82852C15.0126 3.95544 15.3237 4.15783 15.5791 4.42083C15.8421 4.67622 16.0445 4.98732 16.1714 5.33124C16.3458 5.80188 16.4381 6.29898 16.4441 6.80087C16.4823 7.63571 16.4902 7.88617 16.4902 9.99992C16.4902 12.1137 16.4823 12.3641 16.4441 13.199C16.4381 13.7009 16.3458 14.198 16.1714 14.6686C16.0397 15.0101 15.8379 15.3202 15.5791 15.579C15.3203 15.8379 15.0101 16.0396 14.6687 16.1713C14.198 16.3458 13.7009 16.438 13.199 16.4441C12.3642 16.4822 12.1137 16.4901 9.99998 16.4901C7.88623 16.4901 7.63577 16.4822 6.80093 16.4441C6.2988 16.4381 5.80144 16.3458 5.33059 16.1713C4.98692 16.0443 4.67608 15.8419 4.42089 15.579C4.1579 15.3236 3.9555 15.0125 3.82858 14.6686C3.65414 14.198 3.56187 13.7009 3.55581 13.199C3.51767 12.3641 3.50975 12.1137 3.50975 9.99992C3.50975 7.88617 3.51767 7.63571 3.55581 6.80087C3.56187 6.29898 3.65414 5.80188 3.82858 5.33124C3.9555 4.98732 4.1579 4.67622 4.42089 4.42083C4.67628 4.15783 4.98738 3.95544 5.33131 3.82852C5.80194 3.65408 6.29904 3.56181 6.80093 3.55575C7.63577 3.51761 7.88623 3.50969 9.99998 3.50969ZM9.99998 2.08325C7.85024 2.08325 7.58036 2.09261 6.73615 2.13075C6.07944 2.14385 5.4297 2.2682 4.81456 2.49852C4.28606 2.6975 3.80736 3.00943 3.41187 3.41253C3.00912 3.80788 2.69744 4.28633 2.49858 4.8145C2.26851 5.42969 2.1444 6.07942 2.13153 6.73609C2.09195 7.5803 2.08331 7.85018 2.08331 9.99992C2.08331 12.1497 2.09267 12.4195 2.13081 13.2637C2.14391 13.9205 2.26826 14.5702 2.49858 15.1853C2.69756 15.7138 3.00949 16.1925 3.41259 16.588C3.80794 16.9908 4.28639 17.3025 4.81456 17.5013C5.42975 17.7314 6.07948 17.8555 6.73615 17.8684C7.58036 17.9079 7.85024 17.9166 9.99998 17.9166C12.1497 17.9166 12.4196 17.9072 13.2638 17.8691C13.9205 17.856 14.5703 17.7316 15.1854 17.5013C15.7115 17.2979 16.1892 16.9868 16.5881 16.588C16.9869 16.1892 17.298 15.7114 17.5014 15.1853C17.7314 14.5702 17.8556 13.9204 17.8684 13.2637C17.908 12.4195 17.9166 12.1497 17.9166 9.99992C17.9166 7.85018 17.9073 7.5803 17.8691 6.73609C17.856 6.07938 17.7317 5.42964 17.5014 4.8145C17.3024 4.286 16.9905 3.8073 16.5874 3.41181C16.192 3.00906 15.7136 2.69738 15.1854 2.49852C14.5702 2.26845 13.9205 2.14434 13.2638 2.13147C12.4196 2.09189 12.1497 2.08325 9.99998 2.08325ZM9.99998 5.93435C9.19589 5.93435 8.40985 6.17279 7.74127 6.61952C7.07269 7.06625 6.5516 7.70121 6.24388 8.44409C5.93617 9.18698 5.85566 10.0044 6.01253 10.7931C6.1694 11.5817 6.55661 12.3061 7.12519 12.8747C7.69377 13.4433 8.41818 13.8305 9.20683 13.9874C9.99547 14.1442 10.8129 14.0637 11.5558 13.756C12.2987 13.4483 12.9336 12.9272 13.3804 12.2586C13.8271 11.59 14.0655 10.804 14.0655 9.99992C14.0655 8.92166 13.6372 7.88757 12.8748 7.12513C12.1123 6.36269 11.0782 5.93435 9.99998 5.93435ZM9.99998 12.639C9.47801 12.639 8.96776 12.4843 8.53376 12.1943C8.09976 11.9043 7.76149 11.4921 7.56174 11.0099C7.36199 10.5276 7.30973 9.99699 7.41156 9.48505C7.51339 8.97311 7.76475 8.50286 8.13383 8.13377C8.50292 7.76468 8.97317 7.51333 9.48511 7.4115C9.99705 7.30967 10.5277 7.36193 11.0099 7.56168C11.4922 7.76143 11.9043 8.09969 12.1943 8.5337C12.4843 8.9677 12.6391 9.47795 12.6391 9.99992C12.6391 10.6999 12.3611 11.3711 11.8661 11.8661C11.3712 12.361 10.6999 12.639 9.99998 12.639ZM14.226 4.82386C14.0381 4.82386 13.8545 4.87957 13.6982 4.98396C13.542 5.08835 13.4203 5.23672 13.3484 5.41031C13.2765 5.5839 13.2576 5.77491 13.2943 5.95919C13.331 6.14348 13.4214 6.31275 13.5543 6.44561C13.6871 6.57847 13.8564 6.66895 14.0407 6.7056C14.225 6.74226 14.416 6.72345 14.5896 6.65154C14.7632 6.57964 14.9115 6.45788 15.0159 6.30165C15.1203 6.14542 15.176 5.96175 15.176 5.77386C15.176 5.5219 15.076 5.28027 14.8978 5.10211C14.7196 4.92395 14.478 4.82386 14.226 4.82386Z" fill="#A1A1AA" />
          </>, label: "Instagram" },
    { href: "https://www.linkedin.com/company/superpower", icon: <>
          <path d="M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.2249 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z" fill="#A1A1AA" />
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
