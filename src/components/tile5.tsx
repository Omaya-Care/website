import type { Tile5Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Tile5Data = {
  description: string;
};
/** A content tile. */
export default function Tile5({ d, cids, styles }: { d: Tile5Data; cids: string[]; styles: Tile5Styles }) {
  return (
    <div data-id={cids[0]} className={cn("flex items-center gap-3 pointer-events-none", styles.className)}>
      <div data-id={cids[1]} className={cn("w-[0.3125rem] h-[0.3125rem] flex justify-center items-center text-color-001 text-[0.3125rem] leading-[0.4375rem] pointer-events-none", styles.className2)}>
        •
      </div>
      <p data-id={cids[2]} className="block leading-[1.375rem] tracking-[-0.2px] pointer-events-none max-lg:leading-6 2xl:leading-6">
        {d.description}
      </p>
    </div>
  );
}
