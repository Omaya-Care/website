export type Logo3Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  kind?: string;
  overlay?: { icon: string; title: string; subtitle: string };
};
/** A logo. */
export default function Logo3({ d, cids }: { d: Logo3Data; cids: string[] }) {
  return (
    <div data-id={cids[0]} className="basis-full shrink-0 block relative min-w-137.5 max-w-137.5 overflow-hidden bg-surface max-md:min-w-full max-md:max-w-full md:max-lg:min-w-156 md:max-lg:max-w-156 2xl:min-w-150 2xl:max-w-150">
      <img loading="lazy" decoding="async" data-id={cids[1]} className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none" alt={d.alt} sizes="(max-width: 1872px) 100vw, 1872px" src={d.imgSrc} srcSet={d.srcSet} />
      {d.overlay && (
        <div className="flex absolute left-1/2 bottom-16 -translate-x-1/2 w-max max-w-[calc(100%-2rem)] rounded-2xl items-center gap-3.5 px-4 py-3.5 bg-color-008 [backdrop-filter:blur(16px)] max-lg:bottom-12 max-lg:gap-3 max-lg:px-3.5 max-lg:py-3">
          <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-white flex items-center justify-center max-lg:w-11 max-lg:h-11">
            <img loading="lazy" decoding="async" className="w-8 h-8 object-contain max-lg:w-7 max-lg:h-7" alt="" src={d.overlay.icon} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-background text-[1.0625rem] leading-[1.375rem] font-medium max-lg:text-base max-lg:leading-[1.25rem]">{d.overlay.title}</span>
            <span className="text-background/75 text-[0.875rem] leading-[1.1875rem] max-lg:text-[0.8125rem] max-lg:leading-[1.0625rem]">{d.overlay.subtitle}</span>
          </div>
        </div>
      )}
    </div>
  );
}
