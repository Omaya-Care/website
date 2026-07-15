import type { TileStyles } from "../_styles";
import { cn } from "../lib/utils";
export type TileData = {
  id: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("block rounded-[11px] overflow-hidden max-md:mr-2 max-md:rounded-lg max-lg:shrink-0 md:max-lg:rounded-xl", styles.className)} role="listitem">
      <label data-cid={cids[1]} className={cn("border border-solid border-border flex relative mb-[0.3125rem] py-[14.7px] px-[18.3px] rounded-[11px] justify-start items-center overflow-hidden font-bold cursor-default max-md:py-3 max-md:px-[0.8rem] max-md:rounded-lg max-md:gap-2 max-md:text-xs max-md:leading-[1.0625rem] md:max-lg:py-4 md:max-lg:px-5 md:max-lg:rounded-xl before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-[0.9375rem] before:font-bold before:leading-[1.3125rem] max-md:before:text-xs max-md:before:leading-[1.0625rem] md:max-lg:before:text-base md:max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] 2xl:before:w-auto 2xl:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-[0.9375rem] after:font-bold after:leading-[1.3125rem] max-md:after:text-xs max-md:after:leading-[1.0625rem] md:max-lg:after:text-base md:max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem] 2xl:after:w-auto 2xl:after:h-auto", styles.className2)}>
        <div data-cid={cids[2]} className={cn("w-[393.7px] h-full border border-solid block absolute top-0 min-w-0 rounded-[11px] leading-3.5 cursor-pointer max-md:w-69.5 max-md:rounded-lg max-md:leading-[0.6875rem] md:max-lg:w-[25.975rem] md:max-lg:rounded-xl md:max-lg:leading-[0.9375rem]", styles.className3)} />
        <span data-cid={cids[3]} className={cn("block text-[1.0625rem] font-normal leading-[1.4375rem] cursor-pointer max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-lg md:max-lg:leading-[1.5625rem]", styles.className4)} htmlFor="radio-2" id={d.id}>
          {d.text}
        </span>
      </label>
    </div>
  );
}
