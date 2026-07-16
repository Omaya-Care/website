import type { Logo4Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Logo4Data = {
  imgSrc: string;
  text: string;
};
/** A logo. */
export default function Logo4({ d, cids, styles }: { d: Logo4Data; cids: string[]; styles: Logo4Styles }) {
  return (
    <div data-id={cids[0]} className={cn("h-[1.125rem] flex justify-start items-center gap-[7.3px] text-muted-foreground text-[0.8125rem] leading-[1.125rem] max-lg:gap-2 max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:h-[1.225rem] md:max-lg:text-sm md:max-lg:leading-[1.25rem] 2xl:h-[1.225rem] 2xl:gap-2 2xl:text-sm 2xl:leading-[1.25rem]", styles.className)}>
      <img loading="lazy" decoding="async" data-id={cids[1]} className={cn("w-auto block max-w-full overflow-clip align-middle", styles.className2)} alt="" src={d.imgSrc} />
      <div data-id={cids[2]} className="block">
        {d.text}
      </div>
    </div>
  );
}
