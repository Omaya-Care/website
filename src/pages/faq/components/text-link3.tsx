import type React from "react";
import type { TextLink3Styles } from "../_styles";
import { cn } from "../lib/utils";
export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, cids, styles, onClick }: { d: TextLink3Data; cids: string[]; styles: TextLink3Styles; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a data-id={cids[0]} className={cn("flex max-w-full justify-start items-center gap-[0.6875rem] cursor-pointer 2xl:gap-3", styles.className)} href={d.href} onClick={onClick}>
      <div data-id={cids[1]} className={cn("h-px block shrink-0 bg-foreground", styles.className2)} />
      <div data-id={cids[2]} className="block whitespace-nowrap">
        {d.label}
      </div>
    </a>
  );
}
