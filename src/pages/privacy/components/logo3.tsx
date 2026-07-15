import type { Logo3Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Logo3Data = {
  href: string;
  label: string;
};
/** A logo. */
export default function Logo3({ d, cids, styles }: { d: Logo3Data; cids: string[]; styles: Logo3Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex justify-start items-center gap-[7.3px] md:max-lg:gap-2 2xl:gap-2", styles.className)}>
      <img data-cid={cids[1]} className={cn("h-3 block max-w-full overflow-clip align-middle", styles.className2)} data-component="image" alt="" src="/assets/cloned/svg/2c43d834505b.svg" />
      <a data-cid={cids[2]} className={cn("flex cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className3)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </div>
  );
}
