import type { MediaTileStyles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTileData = {
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles }) {
  return (
    <button data-id={cids[0]} className={cn("h-[51.3px] flex opacity-0 py-[0.6875rem] pr-[0.6875rem] pl-[18.3px] rounded-[7.3px] justify-between items-center gap-[14.7px] overflow-hidden text-left bg-clr-6 shadow-[var(--color-006)_0px_2px_2px_0px] [backdrop-filter:blur(24px)] cursor-pointer pointer-events-none max-lg:hidden 2xl:hidden", styles.className)} type="button">
      <span data-id={cids[1]} className="block pointer-events-none max-lg:hidden 2xl:hidden">
        {d.label}
      </span>
      <div data-id={cids[2]} className="w-[29.3px] h-[29.3px] flex py-1.5 rounded-sm justify-center items-center shrink-0 text-lg leading-[1.125rem] bg-surface-2 pointer-events-none max-lg:hidden 2xl:hidden">
        <div data-id={cids[3]} className="flex justify-center items-center pointer-events-none max-lg:hidden 2xl:hidden before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-lg before:leading-[1.125rem] before:text-left max-lg:before:hidden 2xl:before:hidden after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-lg after:leading-[1.125rem] after:text-left max-lg:after:hidden 2xl:after:hidden">
          <svg data-id={cids[4]} className={cn("w-5 h-5 block overflow-hidden pointer-events-none max-lg:hidden 2xl:hidden", styles.className2)} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4 4C10.4 3.56 10.04 3.2 9.6 3.2C9.16 3.2 8.8 3.56 8.8 4V8.8H4C3.56 8.8 3.2 9.16 3.2 9.6C3.2 10.04 3.56 10.4 4 10.4H8.8V15.2C8.8 15.64 9.16 16 9.6 16C10.04 16 10.4 15.64 10.4 15.2V10.4H15.2C15.64 10.4 16 10.04 16 9.6C16 9.16 15.64 8.8 15.2 8.8H10.4V4Z" fill="white" />
          </svg>
        </div>
      </div>
    </button>
  );
}
