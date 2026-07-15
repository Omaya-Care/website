import type { TileStyles } from "../_styles";
import { cn } from "../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex pt-2 pb-[7.3px] px-[0.6875rem] rounded-sm items-center gap-[51.3px] text-left max-lg:pt-[0.5625rem] max-lg:pb-2 max-lg:px-3 max-md:flex-col max-md:items-start max-md:gap-1 md:max-lg:gap-14 2xl:pt-[0.5625rem] 2xl:pb-2 2xl:px-3 2xl:gap-14", styles.className)}>
      <div data-cid={cids[1]} className="w-[34%] block shrink-0 text-[1.0625rem] max-md:w-full max-lg:[font-size:inherit] 2xl:text-[1.125rem]">
        {d.text}
      </div>
      <div data-cid={cids[2]} className="w-full block min-w-0 grow shrink-0 basis-0 text-muted-foreground text-[1.0625rem] leading-[1.1875rem] tracking-[normal] max-lg:text-sm max-lg:leading-[1.3125rem] max-md:grow-[initial] max-md:basis-[initial] 2xl:text-lg 2xl:leading-[1.3125rem]">
        {d.text2}
      </div>
    </div>
  );
}
