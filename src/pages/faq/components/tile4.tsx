import type { Tile4Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Tile4Data = {
  description: string;
};
/** A content tile. */
export default function Tile4({ d, cids, styles }: { d: Tile4Data; cids: string[]; styles: Tile4Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex items-center gap-3 pointer-events-none", styles.className)}>
      <div data-cid={cids[1]} className={cn("w-[0.3125rem] h-[0.3125rem] flex justify-center items-center text-color-007 text-[0.3125rem] leading-[0.4375rem] pointer-events-none", styles.className2)}>
        •
      </div>
      <p data-cid={cids[2]} className="block leading-[1.375rem] tracking-[-0.2px] pointer-events-none max-lg:leading-6 2xl:leading-6">
        {d.description}
      </p>
    </div>
  );
}
