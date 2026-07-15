import type { TextLink2Styles } from "../_styles";
import { cn } from "../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, cids, styles }: { d: TextLink2Data; cids: string[]; styles: TextLink2Styles }) {
  return (
    <a data-cid={cids[0]} className={cn("flex shrink-0 whitespace-nowrap text-nowrap cursor-pointer", styles.className)} href={d.href}>
      {d.label}
    </a>
  );
}
