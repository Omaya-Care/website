import type { ListRow3Styles } from "../_styles";
import { cn } from "../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, cids, styles }: { d: ListRow3Data; cids: string[]; styles: ListRow3Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("h-[3.0625rem] list-item mb-2 py-1 pl-2 2xl:h-[3.3rem]", styles.className)}>
      <em data-cid={cids[1]} className="inline italic">
        {d.text}
      </em>
    </li>
  );
}
