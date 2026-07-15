import type { ListRowStyles } from "../_styles";
import { cn } from "../lib/utils";
export type ListRowData = {
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className="flex py-1 justify-end items-center max-md:py-0">
      <button data-cid={cids[1]} className={cn("flex relative pl-[14.7px] justify-end items-center gap-[14.7px] text-[1.0625rem] leading-[1.4375rem] text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:pl-2.5 max-lg:flex-row-reverse max-lg:gap-2.5 max-md:text-lg max-md:leading-[1.5625rem] md:max-lg:text-xl md:max-lg:leading-7 2xl:pl-4 2xl:gap-4 2xl:text-lg 2xl:leading-[1.5625rem] before:content-[''] before:block before:absolute before:top-[11.5px] before:right-[196.3px] before:-bottom-[0.425rem] before:left-0 before:w-px before:h-[18.3px] before:bg-background before:origin-[0.5px_9.15625px] max-lg:before:hidden max-lg:before:top-1/2 max-lg:before:h-5 max-lg:before:bg-color-009 max-lg:before:right-auto max-lg:before:bottom-auto max-lg:before:transform-[none] max-lg:before:origin-[initial] 2xl:before:top-[0.7875rem] 2xl:before:right-54 2xl:before:-bottom-[0.4625rem] 2xl:before:h-5 2xl:before:bg-color-009 2xl:before:origin-[0.5px_10px]", styles.className)} data-component="button" type="button">
        <span data-cid={cids[2]} className={cn("block flex-1 text-right", styles.className2)}>
          {d.label}
        </span>
        <span data-cid={cids[3]} className="block max-md:text-sm max-md:leading-[1.25rem]">
          {d.label2}
        </span>
      </button>
    </li>
  );
}
