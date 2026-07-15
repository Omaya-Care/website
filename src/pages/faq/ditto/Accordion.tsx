"use client";
import { useEffect } from "react";

type CapStyle = Record<string, string>;
type RTAcc = { trigger: string; region: string; expanded: boolean; triggerOn: CapStyle; triggerOff: CapStyle; regionShown: CapStyle; regionHidden: CapStyle };
export type AccordionSpec = { kind: "accordion"; items: RTAcc[] };

const kebab = (p: string) => p.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
const byCid = (cid: string): HTMLElement | null => document.querySelector('[data-cid="' + cid + '"]');
function applyStyle(el: HTMLElement | null, s: CapStyle) {
  if (!el) return;
  for (const k in s) el.style.setProperty(kebab(k), s[k]);
}

/** Wires captured accordion rows with small explicit state.
 *  Hydration initializes the captured base state, then clicks toggle only the target row. */
export default function Accordion({ specs }: { specs: AccordionSpec[] }) {
  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    for (const spec of specs) {
      const state = spec.items.map((it) => it.expanded);
      const renderItem = (i: number) => {
        const it = spec.items[i];
        if (!it) return;
        const on = state[i];
        const trig = byCid(it.trigger), region = byCid(it.region);
        applyStyle(trig, on ? it.triggerOn : it.triggerOff);
        trig?.setAttribute("aria-expanded", on ? "true" : "false");
        applyStyle(region, on ? it.regionShown : it.regionHidden);
        if (region) {
          if (on) region.removeAttribute("hidden");
          else region.setAttribute("hidden", "");
        }
      };
      spec.items.forEach((it, i) => {
        const trig = byCid(it.trigger);
        if (!trig) return;
        trig.addEventListener("click", (e) => {
          e.preventDefault();
          state[i] = !state[i];
          renderItem(i);
        }, { signal });
        renderItem(i);
      });
    }
    return () => ac.abort();
  }, [specs]);
  return null;
}
