import type { TextLink3Styles } from "../_styles";
import { cn } from "../lib/utils";
export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, cids, styles }: { d: TextLink3Data; cids: string[]; styles: TextLink3Styles }) {
  return (
    <a data-cid={cids[0]} className={cn("flex cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
