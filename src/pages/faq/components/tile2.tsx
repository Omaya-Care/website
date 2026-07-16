import type { Tile2Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <p data-id={cids[0]} className={cn("block py-[3.7px] leading-[1.375rem] tracking-[-0.2px] max-lg:py-1 max-lg:leading-6 2xl:py-1 2xl:leading-6", styles.className)}>
      <span data-id={cids[1]} className="inline text-color-002">
        {d.description}
      </span>
      {d.description2}
    </p>
  );
}
