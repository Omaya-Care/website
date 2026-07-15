export type Logo6Data = {
  ariaLabel: string;
  href: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo6({ d, cids }: { d: Logo6Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="flex-1 h-[3.6625rem] flex max-w-full p-[14.7px] rounded-[11px] justify-center items-center bg-surface cursor-pointer max-md:h-12 max-md:p-3 max-lg:rounded-xl md:max-lg:h-16 md:max-lg:p-4 2xl:h-16 2xl:p-4 2xl:rounded-xl hover:opacity-60" data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank">
      <div data-cid={cids[1]} className="w-full h-full block relative">
        <img data-cid={cids[2]} className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none" data-component="image" alt="" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
      </div>
    </a>
  );
}
