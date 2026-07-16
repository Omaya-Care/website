import type { Tile2Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Tile2Data = {
  text: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <div data-id={cids[0]} className={cn("h-[2.4625rem] flex pt-2 pb-[7.3px] px-[0.6875rem] rounded-sm items-center gap-[51.3px] text-left max-lg:h-[2.6875rem] max-lg:pt-[0.5625rem] max-lg:pb-2 max-lg:px-3 max-md:flex-col max-md:items-start max-md:gap-1 md:max-lg:gap-14 2xl:h-[2.6875rem] 2xl:pt-[0.5625rem] 2xl:pb-2 2xl:px-3 2xl:gap-14", styles.className)}>
      <div data-id={cids[1]} className="w-[34%] block shrink-0 text-[1.0625rem] max-md:w-full max-lg:[font-size:inherit] 2xl:text-[1.125rem]">
        {d.text}
      </div>
    </div>
  );
}
