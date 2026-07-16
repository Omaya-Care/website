import type { LogoStyles } from "../_styles";
import { cn } from "../lib/utils";
export type LogoData = {
  srcSet: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <div data-id={cids[0]} className={cn("w-8 h-8 border-2 border-solid border-background block rounded-full shrink-0 overflow-hidden", styles.className)}>
      <picture data-id={cids[1]} className="inline">
        <source data-id={cids[2]} className="inline" srcSet={d.srcSet} type="image/webp" />
        <img loading="lazy" decoding="async" data-id={cids[3]} className="w-7 h-7 block max-w-full overflow-clip object-cover align-middle" alt="Omaya Care professional" src={d.imgSrc} />
      </picture>
    </div>
  );
}
