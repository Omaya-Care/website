// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/biomarkers-1", label: "What We Test" },
    { href: "/reviews-1", label: "Reviews" },
    { href: "/gift", label: "Gift Health" }
];

export type LogosItem = {
  id?: string;
  href: string;
  label: string;
};
export const logos: LogosItem[] = [
    { id: "w-node-_06fd21b5-4a2c-8473-5b84-830cee613ba3-ee613b9b", href: "/how-it-works", label: "How it Works" },
    { id: "w-node-_06fd21b5-4a2c-8473-5b84-830cee613ba7-ee613b9b", href: "/biomarkers", label: "What’s Included" },
    { href: "https://app.superpower.com/?_gl=1*18iifd7*_gcl_au*MTcwMTYzNjI3MC4xNzU4ODk0Njg0*_ga*MTEyNzYzOTg3NS4xNzU4ODk0Njgz*_ga_BT53JGR46J*czE3NTkyNjQ4ODEkbzEzJGcxJHQxNzU5MjY1MDY3JGo2MCRsMCRoMA..", label: "Membership Login" },
    { id: "w-node-_06fd21b5-4a2c-8473-5b84-830cee613baf-ee613b9b", href: "/gift", label: "Gift Superpower" }
];

export type Logos2Item = {
  href: string;
  target?: string;
  label: string;
  id?: string;
};
export const logos2: Logos2Item[] = [
    { href: "https://healthiesthoodie.com/", target: "_blank", label: "Superpower Labs" },
    { id: "w-node-_06fd21b5-4a2c-8473-5b84-830cee613bb4-ee613b9b", href: "mailto:hello@superpower.com", label: "Contact Us" },
    { href: "/faqs", label: "FAQs" }
];

export type Logos3Item = {
  id?: string;
  href: string;
  label: string;
};
export const logos3: Logos3Item[] = [
    { id: "w-node-_06fd21b5-4a2c-8473-5b84-830cee613bcd-ee613b9b", href: "/superpower-vs-function-health", label: "Function Health" },
    { href: "/superpower-vs-mito-health", label: "Mito Health" },
    { href: "/superpower-vs-insidetracker", label: "InsideTracker" },
    { href: "/superpower-vs-others", label: "Others" }
];

export type Logos4Item = {
  href: string;
  label: string;
};
export const logos4: Logos4Item[] = [
    { href: "/biomarkers-1", label: "Biomarker tests" },
    { href: "/blood-test", label: "Blood Tests" },
    { href: "/biomarker-guides", label: "Biomarker Guides" },
    { href: "/blog", label: "Blog" },
    { href: "/disease-blood-test", label: "Disease Blood Tests" },
    { href: "/environmental-toxins", label: "Environmental Toxins" },
    { href: "/diseases", label: "Disease Testing" },
    { href: "/library", label: "Library" },
    { href: "/gut-biomarkers", label: "Gut Microbiome" },
    { href: "/cancer-biomarkers", label: "Cancer Biomarkers" },
    { href: "/best-biomarkers", label: "Best Biomarkers" },
    { href: "/heavy-metals", label: "Heavy Metals" }
];

export type Logos5Item = {
  id?: string;
  href: string;
  target?: string;
  label: string;
};
export const logos5: Logos5Item[] = [
    { id: "w-node-d7a8504d-1dc1-a402-7c1f-00891e7967fe-ee613b9b", href: "https://superpower-health.typeform.com/to/VQKeJvKr?typeform-source=www.canva.com", target: "_blank", label: "For Creators" },
    { href: "/partner", target: "_blank", label: "For Partners" },
    { href: "/organizations", label: "For Organizations" }
];

export type Logos6Item = {
  id: string;
  href: string;
  label: string;
};
export const logos6: Logos6Item[] = [
    { id: "w-node-_8900ae04-b4ea-c9ff-22d0-4acedd7a3f1a-ee613b9b", href: "https://x.com/superpower", label: "X/Twitter" },
    { id: "w-node-_8900ae04-b4ea-c9ff-22d0-4acedd7a3f1e-ee613b9b", href: "https://www.instagram.com/superpower", label: "Instagram" },
    { id: "w-node-_8900ae04-b4ea-c9ff-22d0-4acedd7a3f22-ee613b9b", href: "https://www.linkedin.com/company/superpower", label: "LinkedIn" }
];

export type Logos7Item = {
  ariaLabel: string;
  href: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
export const logos7: Logos7Item[] = [
    { ariaLabel: "Ask Claude", href: "https://claude.ai/new?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Flegal%2Fprivacy", sizes: "(max-width: 1200px) 100vw, 1200px", imgSrc: "/assets/cloned/images/a297399f982c.avif", srcSet: "/assets/cloned/images/4e6333fcabeb.png 500w, /assets/cloned/images/a297399f982c.avif 1200w" },
    { ariaLabel: "Ask Gemini", href: "https://www.google.com/search?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Flegal%2Fprivacy&udm=50", imgSrc: "/assets/cloned/svg/d40fe4aac666.svg" },
    { ariaLabel: "Ask Grok", href: "https://x.com/i/grok?text=tell+me+about+https%3A%2F%2Fsuperpower.com%2Flegal%2Fprivacy", imgSrc: "/assets/cloned/svg/ff93db0f1a39.svg" },
    { ariaLabel: "Ask ChatGPT", href: "https://chat.openai.com/?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Flegal%2Fprivacy", imgSrc: "/assets/cloned/svg/3e9f8339f4b9.svg" },
    { ariaLabel: "Ask Perplexity", href: "https://www.perplexity.ai/search/new?q=tell+me+about+https%3A%2F%2Fsuperpower.com%2Flegal%2Fprivacy", imgSrc: "/assets/cloned/svg/9a042afd1ff4.svg" }
];

