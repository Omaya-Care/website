import type { MediaTile4Styles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTile4Data = {
  label: string;
};
/** A media tile. */
export default function MediaTile4({ d, cids, styles }: { d: MediaTile4Data; cids: string[]; styles: MediaTile4Styles }) {
  return (
    <li data-cid={cids[0]} className="h-[1.7rem] list-item py-1 pl-2 pointer-events-none 2xl:h-[1.8125rem]">
      <button data-cid={cids[1]} className={cn("h-[1.2rem] flex opacity-50 items-center text-background text-left cursor-pointer pointer-events-none 2xl:h-[1.3125rem]", styles.className)} data-component="button" type="button">
        <div data-cid={cids[2]} className="w-0 h-[1.2rem] flex opacity-0 items-center shrink-0 overflow-hidden pointer-events-none">
          <div data-cid={cids[3]} className="w-[0.4rem] block shrink-0 pointer-events-none 2xl:w-[0.4375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-[0.8125rem] before:leading-[1.1875rem] before:text-left max-lg:before:text-sm max-lg:before:leading-[1.3125rem] max-lg:before:w-auto max-lg:before:h-auto 2xl:before:text-sm 2xl:before:leading-[1.3125rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-[0.8125rem] after:leading-[1.1875rem] after:text-left max-lg:after:text-sm max-lg:after:leading-[1.3125rem] max-lg:after:w-auto max-lg:after:h-auto 2xl:after:text-sm 2xl:after:leading-[1.3125rem]">
            <svg data-cid={cids[4]} className="w-auto h-2 inline overflow-hidden pointer-events-none focus:outline-color-009 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="8" viewBox="0 0 5 8" width="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.36 3.08C4.71 3.42 4.71 3.98 4.36 4.32L1.49 7.15C0.94 7.69 0 7.3 0 6.52L0 0.88C0 0.1 0.94 -0.29 1.49 0.25L4.36 3.08Z" fill="white" />
            </svg>
          </div>
        </div>
        <span data-cid={cids[5]} className={cn("block min-w-0 flex-1 pointer-events-none", styles.className2)}>
          {d.label}
        </span>
      </button>
    </li>
  );
}
