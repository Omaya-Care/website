// SSR entry used at build time to prerender each route's React tree into static
// HTML (injected into the matching dist/*.html #root). The client then hydrates,
// so the hero + above-fold paint from static markup before any JS boots.
import { renderToString } from "react-dom/server";
import type { ComponentType } from "react";
import Home from "./page";
import Contact from "./pages/contact/page";
import Privacy from "./pages/privacy/page";
import Faq from "./pages/faq/page";
import Tos from "./pages/tos/page";

const PAGES: Record<string, ComponentType> = {
  main: Home,
  contact: Contact,
  privacy: Privacy,
  faq: Faq,
  tos: Tos,
};

export function render(name: string): string {
  const Page = PAGES[name];
  if (!Page) throw new Error(`Unknown page for prerender: ${name}`);
  return renderToString(<Page />);
}
