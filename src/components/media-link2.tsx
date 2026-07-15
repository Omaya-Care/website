import type { ReactNode } from "react";
export type MediaLink2Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A linked media tile. */
export default function MediaLink2({ d, cids }: { d: MediaLink2Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="flex max-w-full justify-start items-center gap-[7.3px] cursor-pointer max-lg:h-6 max-lg:gap-2 max-md:text-sm max-md:leading-[1.25rem]" href={d.href}>
      <div data-cid={cids[1]} className="w-[1.375rem] h-[1.375rem] block min-w-0 max-lg:w-6 max-lg:h-6 before:content-['_'] before:table before:text-foreground before:text-[0.9375rem] before:leading-[1.3125rem] max-lg:before:w-0 max-lg:before:h-0 max-md:before:text-sm max-md:before:leading-[1.25rem] max-md:before:text-left md:max-lg:before:text-base md:max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] after:content-['_'] after:table after:text-foreground after:text-[0.9375rem] after:leading-[1.3125rem] max-lg:after:w-0 max-lg:after:h-0 max-md:after:text-sm max-md:after:leading-[1.25rem] max-md:after:text-left md:max-lg:after:text-base md:max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem]">
        <svg data-cid={cids[2]} className="w-auto h-full inline overflow-hidden max-lg:h-6" fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
      <div data-cid={cids[3]} className="block min-w-0">
        {d.label}
      </div>
    </a>
  );
}
