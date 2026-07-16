import type { Logo2Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
  id?: string;
};
/** A logo. */
export default function Logo2({ d, cids, styles }: { d: Logo2Data; cids: string[]; styles: Logo2Styles }) {
  return (
    <img loading="lazy" decoding="async" data-id={cids[0]} className={cn("block w-auto h-[4.25rem] object-contain max-md:h-[3.625rem] md:max-lg:h-[4.5625rem] 2xl:h-[4.5625rem]", styles.className)} alt={d.alt} src={d.imgSrc} id={d.id} />
  );
}
