import type { TextLink2Styles } from "../_styles";
import { cn } from "../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
  target?: string;
};
/** A text link. */
export default function TextLink2({ d, cids, styles }: { d: TextLink2Data; cids: string[]; styles: TextLink2Styles }) {
  return (
    <a data-id={cids[0]} className={cn("flex cursor-pointer max-md:text-sm max-md:leading-[1.25rem] max-md:whitespace-nowrap max-md:text-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className)} href={d.href} target={d.target} rel={d.target === "_blank" ? "noopener noreferrer" : undefined}>
      {d.label}
    </a>
  );
}
