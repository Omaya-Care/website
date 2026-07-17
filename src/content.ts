// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
const textLinkData: TextLinkDataItem[] = [
    { href: "/biomarkers", label: "What we test" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faqs", label: "FAQs" }
];

export type LogosItem = {
  imgSrc: string;
};
export const logos: LogosItem[] = [
    { imgSrc: "/assets/images/team-1.jpeg" },
    { imgSrc: "/assets/images/team-2.jpeg" },
    { imgSrc: "/assets/images/team-3.jpeg" }
];

export type Logos2Item = {
  alt: string;
  imgSrc: string;
  id?: string;
};
export const logos2: Logos2Item[] = [
    { alt: "UG HCI Lab", imgSrc: "/assets/images/logo-ug-hci.png" },
    { alt: "Solis Hospital", imgSrc: "/assets/images/logo-solis.png" },
    { alt: "Telecel", imgSrc: "/assets/images/logo-telecel.png" },
    { alt: "Nova Surgery Center", imgSrc: "/assets/images/logo-nova-sc.png" }
];

export type FeaturesItem = {
  variant: string;
  eyebrow: string;
  title: string;
  stat: string;
};
export const features: FeaturesItem[] = [
    { variant: "one-simple-blood-draw-to-measure-100-bioma", eyebrow: "Hospital Onboards", title: "Enroll mothers in minutes. Zero workflow change.", stat: "1" },
    { variant: "get-a-complete-picture-of-your-health-data", eyebrow: "Proactive Voice Calls", title: "Omaya reaches out first, so no mother is missed.", stat: "2" },
    { variant: "ai-builds-evidence-backed-protocols-inform", eyebrow: "Mother Reaches Out", title: "She can call, SMS, or WhatsApp Omaya anytime a concern arises.", stat: "3" },
    { variant: "take-action-access-everything-you-need-the", eyebrow: "Hospital Portal", title: "Every call is triaged by urgency; critical cases escalate to staff instantly.", stat: "4" }
];

export type MediaTileDataItem = {
  label: string;
};
const mediaTileData: MediaTileDataItem[] = [
    { label: "How is Omaya better than a standard physical?" },
    { label: "What biomarkers do you test?" },
    { label: "What locations do you test at?" }
];

export type MediaTile4DataItem = {
  label: string;
};
export const mediaTile4Data: MediaTile4DataItem[] = [
    { label: "Dr. Erica Ntiamoah Mensah" },
    { label: "Duke Aaron Sasu, Esq." },
    { label: "Dr. Nana Afrah Korankye" }
];

export type Tile3DataItem = {
  description: string;
};
const tile3Data: Tile3DataItem[] = [
    { description: "Professional health monitoring for you and your baby" },
    { description: "Support by voice, WhatsApp or SMS" },
    { description: "A 24/7 safety net, whenever you need it" },
    { description: "AI companion for instant maternal health answers" },
    { description: "Real experts available for every maternal health concern" },
    { description: "One place to shop mother and baby care essentials" }
];

export type Logos3Item = {
  imgSrc: string;
  text: string;
};
const logos3: Logos3Item[] = [
    { imgSrc: "/assets/media/svg/phone-icon.svg", text: "Works on any phone" },
    { imgSrc: "/assets/media/svg/f94a0722d30a.svg", text: "Cancel anytime" },
    { imgSrc: "/assets/media/svg/644a08effc9a.svg", text: "Full postpartum support" }
];

export type Logos4Item = {
  ariaLabel: string;
  href: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
const logos4: Logos4Item[] = [
    { ariaLabel: "Ask Claude", href: "https://claude.ai/new?q=tell+me+about+https%3A%2F%2Fomayacare.com%2F", sizes: "100vw", imgSrc: "/assets/media/images/a297399f982c.avif", srcSet: "/assets/media/images/4e6333fcabeb.png 500w, /assets/media/images/2adea8e249b4.png 800w, /assets/media/images/0eb816dd9ad6.png 1080w, /assets/media/images/a297399f982c.avif 1200w" },
    { ariaLabel: "Ask Gemini", href: "https://www.google.com/search?q=tell+me+about+https%3A%2F%2Fomayacare.com%2F&udm=50", imgSrc: "/assets/media/svg/d40fe4aac666.svg" },
    { ariaLabel: "Ask Grok", href: "https://x.com/i/grok?text=tell+me+about+https%3A%2F%2Fomayacare.com%2F", imgSrc: "/assets/media/svg/ff93db0f1a39.svg" },
    { ariaLabel: "Ask ChatGPT", href: "https://chat.openai.com/?q=tell+me+about+https%3A%2F%2Fomayacare.com%2F", imgSrc: "/assets/media/svg/3e9f8339f4b9.svg" },
    { ariaLabel: "Ask Perplexity", href: "https://www.perplexity.ai/search/new?q=tell+me+about+https%3A%2F%2Fomayacare.com%2F", imgSrc: "/assets/media/svg/9a042afd1ff4.svg" }
];

export type TextLink2DataItem = {
  href: string;
  label: string;
};
const textLink2Data: TextLink2DataItem[] = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/biomarkers", label: "What we test" },
    { href: "https://app.omayacare.com/signin?redirectTo=%2F", label: "Member Login" },
    { href: "/gift", label: "Gift Omaya" },
    { href: "/reviews", label: "Reviews" }
];

export type TextLink3DataItem = {
  href: string;
  label: string;
};
const textLink3Data: TextLink3DataItem[] = [
    { href: "https://healthiesthoodie.com/", label: "Omaya Labs" },
    { href: "mailto:hello@omayacare.com", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" }
];

export type TextLink2Data2Item = {
  href: string;
  label: string;
};
const textLink2Data2: TextLink2Data2Item[] = [
    { href: "/compare-function-health", label: "Function Health" },
    { href: "/compare-mito-health", label: "Mito Health" },
    { href: "/compare-insidetracker", label: "InsideTracker" }
];

export type TextLink4DataItem = {
  href: string;
  label: string;
};
const textLink4Data: TextLink4DataItem[] = [
    { href: "/contact?typeform-source=www.canva.com", label: "For Creators" },
    { href: "/organizations", label: "For Partners" },
    { href: "/organizations", label: "For Business" }
];

export type Tile4DataItem = {
  href: string;
  label: string;
};
const tile4Data: Tile4DataItem[] = [
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

export type TextLink5DataItem = {
  href: string;
  label: string;
};
const textLink5Data: TextLink5DataItem[] = [
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/privacy", label: "Privacy policy" },
    { href: "/legal/medical-consent", label: "Medical consent" },
    { href: "#", label: "Cookie preferences" }
];

export type MediaTile6DataItem = {
  label: string;
};
const mediaTile6Data: MediaTile6DataItem[] = [
    { label: "How is Omaya better than a standard physical?" },
    { label: "What biomarkers do you test?" },
    { label: "What locations do you test at?" },
    { label: "How does Omaya use my data?" },
    { label: "How safe and secure is my data?" },
    { label: "How do we turn labs into a personalized protocol?" },
    { label: "How is Omaya’s action plan better than others?" },
    { label: "Who do I speak to when I have questions?" },
    { label: "Isn’t this just another AI chatbot?" }
];

export type Tile5DataItem = {
  description: string;
};
export const tile5Data: Tile5DataItem[] = [
    { description: "Improving energy with simple lifestyle changes" },
    { description: "Reducing heart attack risk if you’re 30+" },
    { description: "Slowing your pace of aging" }
];

