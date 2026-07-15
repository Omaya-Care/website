import type { TextLink5Styles } from "../_styles";
import { cn } from "../lib/utils";
export type TextLink5Data = {
  href: string;
  label: string;
  target?: string;
  ariacurrent?: string;
};
/** A text link. */
export default function TextLink5({ d, cids, styles }: { d: TextLink5Data; cids: string[]; styles: TextLink5Styles }) {
  return (
    <a data-cid={cids[0]} className={cn("flex cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className)} data-component="link" href={d.href} target={d.target} aria-current={d.ariacurrent}>
      {d.label}
    </a>
  );
}
