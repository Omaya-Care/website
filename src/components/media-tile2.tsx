import type { MediaTile2Styles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTile2Data = {
  label: string;
  kind?: string;
  label2: string;
  kind2?: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids, styles }: { d: MediaTile2Data; cids: string[]; styles: MediaTile2Styles }) {
  return (
    <div data-id={cids[0]} className={styles.className}>
      <button data-id={cids[1]} className={styles.className2} type="button">
        <span data-id={cids[2]} className={styles.className3}>
          {d.label}
        </span>
        <div data-id={cids[3]} className={cn("max-lg:w-8 max-lg:h-8 max-lg:py-[0.4rem] max-lg:text-xl max-lg:leading-5 2xl:w-8 2xl:h-8 2xl:py-[0.4rem] 2xl:text-xl 2xl:leading-5", styles.className4)}>
          <div data-id={cids[4]} className={cn("before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-left", styles.className5)}>
            <svg data-id={cids[5]} className={styles.className6} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4 4C10.4 3.56 10.04 3.2 9.6 3.2C9.16 3.2 8.8 3.56 8.8 4V8.8H4C3.56 8.8 3.2 9.16 3.2 9.6C3.2 10.04 3.56 10.4 4 10.4H8.8V15.2C8.8 15.64 9.16 16 9.6 16C10.04 16 10.4 15.64 10.4 15.2V10.4H15.2C15.64 10.4 16 10.04 16 9.6C16 9.16 15.64 8.8 15.2 8.8H10.4V4Z" fill="white" />
            </svg>
          </div>
        </div>
      </button>
      <button data-id={cids[6]} className={styles.className7} type="button">
        <span data-id={cids[7]} className={styles.className8}>
          {d.label2}
        </span>
        <div data-id={cids[8]} className={cn("max-lg:w-8 max-lg:h-8 max-lg:py-[0.4rem] max-lg:text-xl max-lg:leading-5 2xl:w-8 2xl:h-8 2xl:py-[0.4rem] 2xl:text-xl 2xl:leading-5", styles.className9)}>
          <div data-id={cids[9]} className={cn("before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-left", styles.className10)}>
            <svg data-id={cids[10]} className={styles.className11} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4 4C10.4 3.56 10.04 3.2 9.6 3.2C9.16 3.2 8.8 3.56 8.8 4V8.8H4C3.56 8.8 3.2 9.16 3.2 9.6C3.2 10.04 3.56 10.4 4 10.4H8.8V15.2C8.8 15.64 9.16 16 9.6 16C10.04 16 10.4 15.64 10.4 15.2V10.4H15.2C15.64 10.4 16 10.04 16 9.6C16 9.16 15.64 8.8 15.2 8.8H10.4V4Z" fill="white" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}
