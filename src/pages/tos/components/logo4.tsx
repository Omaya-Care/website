import type { Logo4Styles } from "../_styles";
import { cn } from "../lib/utils";
export type Logo4Data = {
  id?: string;
  href: string;
  target?: string;
  label: string;
};
/** A logo. */
export default function Logo4({ d, cids, styles }: { d: Logo4Data; cids: string[]; styles: Logo4Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex justify-start items-center gap-[7.3px] md:max-lg:gap-2 2xl:gap-2", styles.className)} id={d.id}>
      <img data-cid={cids[1]} className="w-[0.5625rem] h-3 block max-w-full overflow-clip align-middle" data-component="image" alt="" src="/assets/cloned/svg/2c43d834505b.svg" />
      <a data-cid={cids[2]} className={cn("flex cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className2)} data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </div>
  );
}
