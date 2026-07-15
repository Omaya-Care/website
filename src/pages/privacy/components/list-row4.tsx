import type { ListRow4Styles } from "../_styles";
import { cn } from "../lib/utils";
export type ListRow4Data = {
  text: string;
  text2: string;
  href: string;
  href2: string;
  text3: string;
};
/** A list row. */
export default function ListRow4({ d, cids, styles }: { d: ListRow4Data; cids: string[]; styles: ListRow4Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item py-1 pl-2", styles.className)}>
      <strong data-cid={cids[1]} className="inline text-foreground">
        {d.text}
      </strong>
      {d.text2}
      <a data-cid={cids[2]} className="h-[20.5px] inline-flex text-primary cursor-pointer max-lg:h-[1.4rem] 2xl:h-[1.4rem] hover:underline" data-component="link" href={d.href}>
        Privacy Policy
      </a>
      {"; (2) "}
      <a data-cid={cids[3]} className="h-[20.5px] inline-flex text-primary cursor-pointer max-lg:h-[1.4rem] 2xl:h-[1.4rem] hover:underline" data-component="link" href={d.href2}>
        Opt Out Settings
      </a>
      {d.text3}
    </li>
  );
}
