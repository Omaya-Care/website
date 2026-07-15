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
    <div data-cid={cids[0]} className={styles.className}>
      <button data-cid={cids[1]} className={styles.className2} type="button">
        <span data-cid={cids[2]} className={styles.className3}>
          {d.label}
        </span>
        <div data-cid={cids[3]} className={cn("max-lg:w-8 max-lg:h-8 max-lg:py-[0.4rem] max-lg:text-xl max-lg:leading-5 2xl:w-8 2xl:h-8 2xl:py-[0.4rem] 2xl:text-xl 2xl:leading-5", styles.className4)}>
          <div data-cid={cids[4]} className={cn("before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-left", styles.className5)}>
            <svg data-cid={cids[5]} className={styles.className6} data-component={d.kind} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4002 4.0002C10.4002 3.55837 10.042 3.2002 9.6002 3.2002C9.15837 3.2002 8.8002 3.55837 8.8002 4.0002V8.8002H4.0002C3.55837 8.8002 3.2002 9.15837 3.2002 9.6002C3.2002 10.042 3.55837 10.4002 4.0002 10.4002H8.8002V15.2002C8.8002 15.642 9.15837 16.0002 9.6002 16.0002C10.042 16.0002 10.4002 15.642 10.4002 15.2002V10.4002H15.2002C15.642 10.4002 16.0002 10.042 16.0002 9.6002C16.0002 9.15837 15.642 8.8002 15.2002 8.8002H10.4002V4.0002Z" fill="white" />
            </svg>
          </div>
        </div>
      </button>
      <button data-cid={cids[6]} className={styles.className7} type="button">
        <span data-cid={cids[7]} className={styles.className8}>
          {d.label2}
        </span>
        <div data-cid={cids[8]} className={cn("max-lg:w-8 max-lg:h-8 max-lg:py-[0.4rem] max-lg:text-xl max-lg:leading-5 2xl:w-8 2xl:h-8 2xl:py-[0.4rem] 2xl:text-xl 2xl:leading-5", styles.className9)}>
          <div data-cid={cids[9]} className={cn("before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-left", styles.className10)}>
            <svg data-cid={cids[10]} className={styles.className11} data-component={d.kind2} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4002 4.0002C10.4002 3.55837 10.042 3.2002 9.6002 3.2002C9.15837 3.2002 8.8002 3.55837 8.8002 4.0002V8.8002H4.0002C3.55837 8.8002 3.2002 9.15837 3.2002 9.6002C3.2002 10.042 3.55837 10.4002 4.0002 10.4002H8.8002V15.2002C8.8002 15.642 9.15837 16.0002 9.6002 16.0002C10.042 16.0002 10.4002 15.642 10.4002 15.2002V10.4002H15.2002C15.642 10.4002 16.0002 10.042 16.0002 9.6002C16.0002 9.15837 15.642 8.8002 15.2002 8.8002H10.4002V4.0002Z" fill="white" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}
