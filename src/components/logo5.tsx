export type Logo5Data = {
  ariaLabel: string;
  href: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo5({ d, cids }: { d: Logo5Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="w-11 h-11 border border-solid border-clr-3 flex max-w-full p-[0.6875rem] rounded-[11px] justify-center items-center bg-surface shadow-[var(--color-006)_-1px_-1px_2px_0px] [filter:grayscale(1)] cursor-pointer md:max-lg:w-12 md:max-lg:h-12 md:max-lg:p-3 md:max-lg:rounded-xl 2xl:w-12 2xl:h-12 2xl:p-3 2xl:rounded-xl hover:opacity-60" data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank">
      <div data-cid={cids[1]} className="w-full h-full block relative opacity-50">
        <img loading="lazy" decoding="async" data-cid={cids[2]} className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none" data-component="image" alt="" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
      </div>
    </a>
  );
}
