import type { MediaTile3Styles } from "../_styles";
import { cn } from "../lib/utils";
export type MediaTile3Data = {
  imgSrc: string;
  srcSet: string;
  kind?: string;
  imgSrc2?: string;
  description: string;
  description2: string;
  description3: string;
  kind2?: string;
  href?: string;
};
/** A media tile. */
export default function MediaTile3({ d, cids, styles }: { d: MediaTile3Data; cids: string[]; styles: MediaTile3Styles }) {
  return (
    <div data-id={cids[0]} className="h-[242.7px] border-r border-solid border-r-color-005 flex items-center shrink-0 max-md:h-25 max-md:border-b max-md:border-b-border max-md:max-w-72 max-md:py-4 max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial] md:max-lg:h-56 2xl:h-[16.5625rem]">
      <div data-id={cids[1]} className={cn("w-[15.0641rem] h-full block relative rounded-[11px] shrink-0 overflow-hidden bg-surface shadow-[var(--clr-9)_0px_1.35563px_1.35563px_0px] max-md:w-[23.5%] max-lg:rounded-xl max-lg:shadow-[var(--clr-9)_0px_1.48px_1.48px_0px] 2xl:w-[17.34rem] 2xl:rounded-xl 2xl:shadow-[var(--clr-9)_0px_1.48px_1.48px_0px]", styles.className)}>
        <img loading="lazy" decoding="async" data-id={cids[2]} className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover object-top align-middle pointer-events-none" alt="" sizes="(max-width: 669px) 100vw, 669px" src={d.imgSrc} srcSet={d.srcSet} />
      </div>
      <div data-id={cids[3]} className={cn("flex py-[7.3px] px-[18px] flex-col justify-between shrink-0 max-md:px-4 max-md:justify-center max-md:items-start max-md:self-stretch max-md:py-0 max-md:shrink-[initial] md:max-lg:py-2 md:max-lg:px-4 2xl:py-2 2xl:px-5", styles.className2)}>
        {d.imgSrc2 && (
          <div data-id={cids[4]} className={cn("h-[2.13rem] block max-md:hidden md:max-lg:h-[2.325rem] 2xl:h-[2.325rem]", styles.className3)}>
            <img loading="lazy" decoding="async" data-id={cids[5]} className={cn("inline-block max-w-full overflow-clip align-middle", styles.className4)} alt="" src={d.imgSrc2} />
          </div>
        )}
        <div data-id={cids[6]} className={cn("flex flex-col gap-[1.375rem] max-w-[32.5rem] max-md:max-w-none max-md:justify-center max-md:items-start max-md:gap-4 md:max-lg:gap-6 2xl:max-w-[37.5rem] 2xl:gap-6", styles.className5)}>
          <div data-id={cids[7]} className={cn("flex flex-col gap-0.5", styles.className6)}>
            <p data-id={cids[8]} className="block text-[1.0625rem] leading-[1.5625rem] tracking-[-0.15px] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-lg md:max-lg:leading-[1.6875rem] 2xl:text-lg 2xl:leading-[1.6875rem]">
              {d.description}
            </p>
            <p data-id={cids[9]} className="block text-muted-foreground text-[0.6875rem] leading-[1.0625rem] max-lg:text-xs max-lg:leading-4.5 max-lg:tracking-[-0.1px] 2xl:text-sm 2xl:leading-[1.3125rem] 2xl:tracking-[-0.1px]">
              {d.description2}
            </p>
          </div>
          <div data-id={cids[10]} className={cn("flex flex-col gap-[7.3px] md:max-lg:gap-2 2xl:gap-2", styles.className7)}>
            <p data-id={cids[11]} className="block text-[0.6875rem] leading-[1.0625rem] max-lg:hidden 2xl:text-sm 2xl:leading-[1.3125rem] 2xl:tracking-[-0.2px]">
              {d.description3}
            </p>
            {d.href && (
              <a data-id={cids[12]} className="flex text-[0.6875rem] leading-[1.0625rem] underline cursor-pointer max-md:hidden md:max-lg:text-xs 2xl:text-sm 2xl:leading-[1.25rem]" href={d.href} target="_blank" rel="noopener noreferrer">
                View profile
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
