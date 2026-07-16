import type { MediaLinkStyles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaLinkData = {
  kind?: string;
  label: string;
  kind2?: string;
};
/** A linked media tile. */
export default function MediaLink({ d, cids, styles }: { d: MediaLinkData; cids: string[]; styles: MediaLinkStyles }) {
  return (
    <button data-cid={cids[0]} className={cn("max-md:p-3 max-lg:rounded-lg max-lg:gap-4 md:max-lg:py-3 md:max-lg:pr-3 md:max-lg:pl-5 2xl:h-14 2xl:py-3 2xl:pr-3 2xl:pl-5 2xl:rounded-lg 2xl:gap-4 hover:[filter:brightness(0.9)]", styles.className)} data-component={d.kind} type="button">
      <span data-cid={cids[1]} className={styles.className2}>
        {d.label}
      </span>
      <div data-cid={cids[2]} className={cn("max-lg:w-8 max-lg:h-8 max-lg:py-[0.4rem] max-lg:text-xl max-lg:leading-5 2xl:w-8 2xl:h-8 2xl:py-[0.4rem] 2xl:text-xl 2xl:leading-5", styles.className3)}>
        <div data-cid={cids[3]} className={cn("before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-left", styles.className4)}>
          <svg data-cid={cids[4]} className={cn("focus:outline-color-009 focus:[outline-style:auto] focus:outline-[5px]", styles.className5)} data-component={d.kind2} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4 4C10.4 3.56 10.04 3.2 9.6 3.2C9.16 3.2 8.8 3.56 8.8 4V8.8H4C3.56 8.8 3.2 9.16 3.2 9.6C3.2 10.04 3.56 10.4 4 10.4H8.8V15.2C8.8 15.64 9.16 16 9.6 16C10.04 16 10.4 15.64 10.4 15.2V10.4H15.2C15.64 10.4 16 10.04 16 9.6C16 9.16 15.64 8.8 15.2 8.8H10.4V4Z" fill="white" />
          </svg>
        </div>
      </div>
    </button>
  );
}
