import type { ReactNode } from "react";
export type Logo6Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A logo. */
export default function Logo6({ d, cids }: { d: Logo6Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="flex max-w-full justify-start items-center gap-[7.3px] cursor-pointer 2xl:gap-2" data-component="link" href={d.href}>
      <div data-cid={cids[1]} className="w-[1.375rem] h-[1.375rem] block 2xl:w-6 2xl:h-6 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-[0.9375rem] before:leading-[1.3125rem] max-md:before:text-sm max-md:before:leading-[1.25rem] max-md:before:text-left max-lg:before:w-auto max-lg:before:h-auto md:max-lg:before:text-base md:max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-[0.9375rem] after:leading-[1.3125rem] max-md:after:text-sm max-md:after:leading-[1.25rem] max-md:after:text-left max-lg:after:w-auto max-lg:after:h-auto md:max-lg:after:text-base md:max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem]">
        <svg data-cid={cids[2]} className="w-auto h-5.5 inline overflow-hidden 2xl:h-6 focus:outline-color-009 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
      <div data-cid={cids[3]} className="block">
        {d.label}
      </div>
    </a>
  );
}
