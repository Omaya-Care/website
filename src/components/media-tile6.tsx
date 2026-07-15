import type { MediaTile6Styles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTile6Data = {
  label: string;
};
/** A media tile. */
export default function MediaTile6({ d, cids, styles }: { d: MediaTile6Data; cids: string[]; styles: MediaTile6Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item py-1 pl-2 pointer-events-none", styles.className)}>
      <button data-cid={cids[1]} className={cn("flex opacity-50 items-center text-background text-left cursor-pointer pointer-events-none", styles.className2)} data-component="button" type="button">
        <div data-cid={cids[2]} className="w-0 h-[1.2rem] flex opacity-0 items-center shrink-0 overflow-hidden pointer-events-none">
          <div data-cid={cids[3]} className="w-[0.4rem] block shrink-0 pointer-events-none 2xl:w-[0.4375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-[0.8125rem] before:leading-[1.1875rem] before:text-left max-lg:before:text-sm max-lg:before:leading-[1.3125rem] max-lg:before:w-auto max-lg:before:h-auto 2xl:before:text-sm 2xl:before:leading-[1.3125rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-[0.8125rem] after:leading-[1.1875rem] after:text-left max-lg:after:text-sm max-lg:after:leading-[1.3125rem] max-lg:after:w-auto max-lg:after:h-auto 2xl:after:text-sm 2xl:after:leading-[1.3125rem]">
            <svg data-cid={cids[4]} className="w-auto h-2 inline overflow-hidden pointer-events-none focus:outline-color-009 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="8" viewBox="0 0 5 8" width="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.35815 3.07615C4.70663 3.41898 4.70663 3.98084 4.35815 4.32366L1.48834 7.14694C0.935084 7.69122 -0.000304151 7.29928 -0.000304117 6.52318L-0.00030387 0.876635C-0.000303836 0.100537 0.935085 -0.2914 1.48834 0.252879L4.35815 3.07615Z" fill="white" />
            </svg>
          </div>
        </div>
        <span data-cid={cids[5]} className="block min-w-0 flex-1 pointer-events-none">
          {d.label}
        </span>
      </button>
    </li>
  );
}
