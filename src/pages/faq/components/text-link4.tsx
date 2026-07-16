import type { TextLink4Styles } from "../_styles";
import { cn } from "../lib/utils";
export type TextLink4Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink4({ d, cids, styles }: { d: TextLink4Data; cids: string[]; styles: TextLink4Styles }) {
  return (
    <a data-id={cids[0]} className={cn("flex cursor-pointer max-md:text-sm max-md:leading-[1.25rem] max-md:whitespace-nowrap max-md:text-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className)} href={d.href}>
      {d.label}
    </a>
  );
}
