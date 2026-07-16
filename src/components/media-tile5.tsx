import type { MediaTile5Styles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTile5Data = {
  imgSrc: string;
  description: string;
  description2: string;
  description3: string;
  kind?: string;
};
/** A media tile. */
export default function MediaTile5({ d, cids, styles }: { d: MediaTile5Data; cids: string[]; styles: MediaTile5Styles }) {
  return (
    <div data-id={cids[0]} className={cn("flex relative shrink-0 cursor-pointer", styles.className)}>
      <article data-id={cids[1]} className={cn("w-[41.95rem] border-r border-solid border-r-color-005 flex mr-[38.1px] pr-[2.4625rem] flex-col justify-start items-start gap-[29.3px] max-md:w-[311.3px] max-lg:mr-4 max-md:gap-6 max-lg:border-r-[0] max-lg:border-initial max-lg:border-r-[initial] max-lg:pr-0 md:max-lg:w-128 md:max-lg:gap-8 2xl:w-[45.8125rem] 2xl:mr-[2.6rem] 2xl:pr-[2.6875rem] 2xl:gap-8", styles.className2)}>
        <div data-id={cids[2]} className="w-full aspect-[2/1] block rounded-[7.3px] overflow-hidden bg-surface max-lg:rounded-lg 2xl:rounded-lg">
          <img loading="lazy" decoding="async" data-id={cids[3]} className="w-full h-full inline-block max-w-full rounded-lg overflow-hidden object-cover object-[0%_50%] align-middle" alt=" " src={d.imgSrc} />
        </div>
        <div data-id={cids[4]} className={cn("flex pr-[29.3px] pl-[14.7px] flex-col gap-[7.3px] max-lg:px-4 max-lg:gap-2 max-md:text-sm max-md:leading-[1.3125rem] 2xl:pr-8 2xl:pl-4 2xl:gap-2", styles.className3)}>
          <p data-id={cids[5]} className="block text-[1.0625rem] leading-[1.5rem] tracking-[-0.08px] max-md:text-xs max-md:leading-[1.0625rem] max-lg:tracking-[-0.09px] md:max-lg:leading-[1.4375rem] md:max-lg:[font-size:inherit] 2xl:text-lg 2xl:leading-[1.625rem] 2xl:tracking-[-0.09px]">
            {d.description}
          </p>
          <p data-id={cids[6]} className="block text-[1.0625rem] leading-[1.5rem] tracking-[-0.08px] max-md:leading-[1.25rem] max-lg:tracking-[-0.09px] max-lg:[font-size:inherit] md:max-lg:leading-[1.4375rem] 2xl:text-lg 2xl:leading-[1.625rem] 2xl:tracking-[-0.09px]">
            {d.description2}
          </p>
          <p data-id={cids[7]} className="block max-w-full text-color-001 tracking-[-0.2px] max-md:text-xs max-md:leading-4.5 md:max-lg:text-sm md:max-lg:leading-[1.3125rem]">
            {d.description3}
          </p>
        </div>
      </article>
    </div>
  );
}
