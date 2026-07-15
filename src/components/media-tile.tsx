import type { MediaTileStyles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTileData = {
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles }) {
  return (
    <button data-cid={cids[0]} className={cn("h-[51.3px] flex opacity-0 py-[0.6875rem] pr-[0.6875rem] pl-[18.3px] rounded-[7.3px] justify-between items-center gap-[14.7px] overflow-hidden text-left bg-clr-6 shadow-[var(--color-006)_0px_2px_2px_0px] [backdrop-filter:blur(24px)] cursor-pointer pointer-events-none max-lg:hidden 2xl:hidden", styles.className)} type="button">
      <span data-cid={cids[1]} className="block pointer-events-none max-lg:hidden 2xl:hidden">
        {d.label}
      </span>
      <div data-cid={cids[2]} className="w-[29.3px] h-[29.3px] flex py-1.5 rounded-sm justify-center items-center shrink-0 text-lg leading-[1.125rem] bg-surface-2 pointer-events-none max-lg:hidden 2xl:hidden">
        <div data-cid={cids[3]} className="flex justify-center items-center pointer-events-none max-lg:hidden 2xl:hidden before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-lg before:leading-[1.125rem] before:text-left max-lg:before:hidden 2xl:before:hidden after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-lg after:leading-[1.125rem] after:text-left max-lg:after:hidden 2xl:after:hidden">
          <svg data-cid={cids[4]} className={cn("w-5 h-5 block overflow-hidden pointer-events-none max-lg:hidden 2xl:hidden", styles.className2)} data-component="icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4002 4.0002C10.4002 3.55837 10.042 3.2002 9.6002 3.2002C9.15837 3.2002 8.8002 3.55837 8.8002 4.0002V8.8002H4.0002C3.55837 8.8002 3.2002 9.15837 3.2002 9.6002C3.2002 10.042 3.55837 10.4002 4.0002 10.4002H8.8002V15.2002C8.8002 15.642 9.15837 16.0002 9.6002 16.0002C10.042 16.0002 10.4002 15.642 10.4002 15.2002V10.4002H15.2002C15.642 10.4002 16.0002 10.042 16.0002 9.6002C16.0002 9.15837 15.642 8.8002 15.2002 8.8002H10.4002V4.0002Z" fill="white" />
          </svg>
        </div>
      </div>
    </button>
  );
}
