import { useEffect } from "react";

const FAQ_STYLES = `
  article[data-faq] {
    height: auto !important;
    overflow: visible !important;
  }
  article[data-faq] [data-faq-icon]::before,
  article[data-faq] [data-faq-icon]::after {
    display: none !important;
  }
  [data-faq-icon] {
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: var(--clr-8);
  }
  [data-faq-horiz] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  [data-faq-vert] {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    transform: scaleY(1);
    opacity: 1;
    pointer-events: none;
    transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.24s ease;
  }
  article[data-faq][data-open] [data-faq-vert] {
    transform: scaleY(0);
    opacity: 0;
  }
  [data-faq-region] {
    display: grid !important;
    height: auto !important;
    max-height: none !important;
    grid-template-rows: 0fr;
    overflow: hidden !important;
    transition: grid-template-rows 0.42s cubic-bezier(0.4, 0, 0.2, 1);
  }
  article[data-faq][data-open] [data-faq-region] {
    grid-template-rows: 1fr;
  }
  [data-faq-content] {
    overflow: hidden;
    min-height: 0;
    opacity: 0 !important;
    transition: opacity 0.3s ease 0.1s;
  }
  article[data-faq][data-open] [data-faq-content] {
    opacity: 1 !important;
  }
  /* Suppress clearfix pseudo-elements inside answer text to remove phantom spacing */
  [data-faq-content] > div > div::before,
  [data-faq-content] > div > div::after {
    display: none !important;
    content: none !important;
  }
`;

const HORIZ_SVG = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="5" width="11" height="1" rx="0.5" fill="currentColor"/></svg>`;
const VERT_SVG = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="0" width="1" height="11" rx="0.5" fill="currentColor"/></svg>`;

function cleanInjectedSpans() {
  document.querySelectorAll(
    "[data-faq-horiz], [data-faq-vert], [data-faq-plus], [data-faq-minus]"
  ).forEach((el) => el.remove());
}

export default function FaqAccordion() {
  useEffect(() => {
    // Remove any spans injected by a previous effect run (hot reload or re-mount)
    cleanInjectedSpans();

    const style = document.createElement("style");
    style.textContent = FAQ_STYLES;
    document.head.appendChild(style);

    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>('button[aria-expanded]')
    );

    const cleanups: (() => void)[] = [];

    for (const btn of buttons) {
      const article = btn.closest("article");
      if (!article) continue;
      article.setAttribute("data-faq", "");

      const iconSpan = btn.querySelector<HTMLElement>("span:last-child");
      if (iconSpan) {
        iconSpan.setAttribute("data-faq-icon", "");
        const horiz = document.createElement("span");
        horiz.setAttribute("data-faq-horiz", "");
        horiz.innerHTML = HORIZ_SVG;
        const vert = document.createElement("span");
        vert.setAttribute("data-faq-vert", "");
        vert.innerHTML = VERT_SVG;
        iconSpan.append(horiz, vert);
      }

      const region = btn.nextElementSibling as HTMLElement | null;
      if (region) {
        region.setAttribute("data-faq-region", "");
        const content = region.firstElementChild as HTMLElement | null;
        if (content) content.setAttribute("data-faq-content", "");
      }

      const handler = () => {
        if (article.hasAttribute("data-open")) {
          article.removeAttribute("data-open");
          btn.setAttribute("aria-expanded", "false");
        } else {
          article.setAttribute("data-open", "");
          btn.setAttribute("aria-expanded", "true");
        }
      };

      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    }

    return () => {
      cleanups.forEach((c) => c());
      cleanInjectedSpans();
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return null;
}
