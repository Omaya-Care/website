import type { ListRowStyles } from "../_styles";
import { cn } from "../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item py-1 pl-2", styles.className)}>
      {d.text}
    </li>
  );
}
