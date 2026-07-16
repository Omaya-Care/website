import type { LogoStyles } from "../_styles";
import { cn } from "../lib/utils";
export type LogoData = {
  imgSrc: string;
};
/** Circular avatar used in the stacked avatar group. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <div className={cn("w-10 h-10 rounded-full overflow-hidden ring-2 ring-background shrink-0 -mr-[14.7px] max-lg:w-11 max-lg:h-11 max-lg:-mr-4 max-md:order-[-9999] 2xl:w-11 2xl:h-11 2xl:-mr-4", styles.className)}>
      <img loading="lazy" decoding="async" data-cid={cids[0]} className="w-full h-full object-cover object-top block" data-component="image" alt="" src={d.imgSrc} />
    </div>
  );
}
