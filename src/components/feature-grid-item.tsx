export type FeatureGridItemData = {
  variant: string;
  eyebrow: string;
  title: string;
  stat: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d, cids }: { d: FeatureGridItemData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="flex flex-col justify-start items-stretch">
      <div data-cid={cids[1]} className="block relative">
        <FeatureGridItemSlot1 d={d} />
        <FeatureGridItemSlot2 d={d} />
      </div>
      <div data-cid={cids[2]} className="h-[7.25rem] flex py-[1.375rem] pr-[1.375rem] flex-col justify-center items-start gap-[7.3px] max-md:h-[7.875rem] max-lg:py-6 max-md:items-center max-lg:gap-2 max-md:text-center max-md:pr-0 md:max-lg:h-[8.225rem] md:max-lg:pr-6 2xl:h-[8.4rem] 2xl:py-6 2xl:pr-6 2xl:gap-2">
        <div data-cid={cids[3]} className="block text-xl leading-[1.5rem] tracking-[-0.3px] max-md:text-lg max-md:leading-[1.5625rem] max-md:tracking-[-0.2px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.9375rem] md:max-lg:tracking-[-0.4px] 2xl:text-2xl 2xl:leading-[2.125rem] 2xl:tracking-[-0.4px]">
          {d.eyebrow}
        </div>
        <div data-cid={cids[4]} className="block text-muted-foreground">
          {d.title}
        </div>
      </div>
    </div>
  );
}

function FeatureGridItemSlot1({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "one-simple-blood-draw-to-measure-100-bioma":
      return (
        <>
          <div className="absolute top-0 left-0 w-20 h-20 rounded-[11px] max-lg:rounded-xl 2xl:rounded-xl" style={{ background: "radial-gradient(circle at top left, rgba(0,0,0,0.38) 0%, transparent 70%)" }} />
          <div className="w-[27.5px] h-[27.5px] flex absolute top-[7.3px] left-[7.3px] rounded-md justify-center items-center text-background text-[0.8125rem] leading-[1.125rem] bg-color-008 [backdrop-filter:blur(16px)] max-lg:w-7.5 max-lg:h-7.5 max-lg:top-2 max-lg:left-2 max-lg:text-sm max-lg:leading-[1.25rem] 2xl:w-7.5 2xl:h-7.5 2xl:top-2 2xl:left-2 2xl:text-sm 2xl:leading-[1.25rem]" data-cid="n89">
            {d.stat}
            <br className="block" data-cid="n90" />
          </div>
          <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max rounded-lg items-center gap-[7.3px] px-[10px] py-[7.3px] bg-color-008 [backdrop-filter:blur(16px)] max-lg:gap-2 max-lg:px-2.5 max-lg:py-2 2xl:gap-2 2xl:px-2.5 2xl:py-2">
            <div className="w-[18px] h-[18px] flex-shrink-0 rounded-full bg-white flex items-center justify-center max-lg:w-4.5 max-lg:h-4.5 2xl:w-4.5 2xl:h-4.5">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L3.5 6.5L9 1" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-background text-[0.8125rem] leading-[1.125rem] font-medium max-lg:text-sm max-lg:leading-[1.25rem] 2xl:text-sm 2xl:leading-[1.25rem]">Mother Onboarded</span>
          </div>
        </>
      );
    case "get-a-complete-picture-of-your-health-data":
      return (
        <picture className="contents">
          <source srcSet="/assets/images/omaya-proactive-calls.avif" type="image/avif" />
          <source srcSet="/assets/images/omaya-proactive-calls.webp" type="image/webp" />
          <img loading="lazy" decoding="async" className="w-full h-72 inline-block max-w-full rounded-[11px] overflow-clip object-cover aspect-square align-middle max-md:h-[13.1875rem] max-lg:rounded-xl max-md:object-[50%_33%] max-md:aspect-[3/2] md:max-lg:h-[20.9375rem] 2xl:h-78.5 2xl:rounded-xl" data-cid="n97" data-component="image" alt="Omaya Care incoming call notification on iPhone" sizes="(max-width: 664px) 100vw, 664px" src="/assets/images/omaya-proactive-calls.png" />
        </picture>
      );
    case "ai-builds-evidence-backed-protocols-inform":
      return (
        <picture className="contents">
          <source srcSet="/assets/images/omaya-mother-reaches-out.avif" type="image/avif" />
          <source srcSet="/assets/images/omaya-mother-reaches-out.webp" type="image/webp" />
          <img loading="lazy" decoding="async" className="w-full h-72 inline-block max-w-full rounded-[11px] overflow-clip object-cover aspect-square align-middle max-md:h-[13.1875rem] max-lg:rounded-xl max-md:object-[50%_33%] max-md:aspect-[3/2] md:max-lg:h-[20.9375rem] 2xl:h-78.5 2xl:rounded-xl" data-cid="n105" data-component="image" alt="Omaya Care contact screen on iPhone" sizes="(max-width: 664px) 100vw, 664px" src="/assets/images/omaya-mother-reaches-out.png" />
        </picture>
      );
    case "take-action-access-everything-you-need-the":
      return (
        <picture className="contents">
          <source srcSet="/assets/images/omaya-hospital-portal.avif" type="image/avif" />
          <source srcSet="/assets/images/omaya-hospital-portal.webp" type="image/webp" />
          <img loading="lazy" decoding="async" className="w-full h-72 inline-block max-w-full rounded-[11px] overflow-clip object-cover aspect-square align-middle max-md:h-[13.1875rem] max-lg:rounded-xl max-md:object-[50%_33%] max-md:aspect-[3/2] md:max-lg:h-[20.9375rem] 2xl:h-78.5 2xl:rounded-xl" data-cid="n112" data-component="image" alt="Hospital portal dashboard on tablet showing Omaya Care" sizes="(max-width: 996px) 100vw, 996px" src="/assets/images/omaya-hospital-portal.png" />
        </picture>
      );
    default:
      return null;
  }
}

function FeatureGridItemSlot2({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "one-simple-blood-draw-to-measure-100-bioma":
      return (
        <picture className="contents">
          <source srcSet="/assets/images/omaya-hospital-onboards.avif" type="image/avif" />
          <source srcSet="/assets/images/omaya-hospital-onboards.webp" type="image/webp" />
          <img loading="lazy" decoding="async" className="w-full h-72 inline-block max-w-full rounded-[11px] overflow-clip object-cover aspect-square align-middle max-md:h-[13.1875rem] max-lg:rounded-xl max-md:object-[50%_33%] max-md:aspect-[3/2] md:max-lg:h-[20.9375rem] 2xl:h-78.5 2xl:rounded-xl" data-cid="n91" data-component="image" alt="A nurse showing a tablet to a new mother holding her newborn in a hospital room" sizes="(max-width: 664px) 100vw, 664px" src="/assets/images/omaya-hospital-onboards.png" />
        </picture>
      );
    case "get-a-complete-picture-of-your-health-data":
      return (
        <div className="w-[27.5px] h-[27.5px] flex absolute top-[7.3px] left-[7.3px] rounded-md justify-center items-center text-background text-[0.8125rem] leading-[1.125rem] bg-color-008 [backdrop-filter:blur(16px)] max-lg:w-7.5 max-lg:h-7.5 max-lg:top-2 max-lg:left-2 max-lg:text-sm max-lg:leading-[1.25rem] 2xl:w-7.5 2xl:h-7.5 2xl:top-2 2xl:left-2 2xl:text-sm 2xl:leading-[1.25rem]" data-cid="n98">
          {d.stat}
          <br className="block" data-cid="n99" />
        </div>
      );
    case "ai-builds-evidence-backed-protocols-inform":
      return (
        <div className="w-[27.5px] h-[27.5px] flex absolute top-[7.3px] left-[7.3px] rounded-md justify-center items-center text-background text-[0.8125rem] leading-[1.125rem] bg-color-008 [backdrop-filter:blur(16px)] max-lg:w-7.5 max-lg:h-7.5 max-lg:top-2 max-lg:left-2 max-lg:text-sm max-lg:leading-[1.25rem] 2xl:w-7.5 2xl:h-7.5 2xl:top-2 2xl:left-2 2xl:text-sm 2xl:leading-[1.25rem]" data-cid="n106">
          {d.stat}
        </div>
      );
    case "take-action-access-everything-you-need-the":
      return (
        <div className="w-[27.5px] h-[27.5px] flex absolute top-[7.3px] left-[7.3px] rounded-md justify-center items-center text-background text-[0.8125rem] leading-[1.125rem] bg-color-008 [backdrop-filter:blur(16px)] max-lg:w-7.5 max-lg:h-7.5 max-lg:top-2 max-lg:left-2 max-lg:text-sm max-lg:leading-[1.25rem] 2xl:w-7.5 2xl:h-7.5 2xl:top-2 2xl:left-2 2xl:text-sm 2xl:leading-[1.25rem]" data-cid="n113">
          {d.stat}
          <br className="block" data-cid="n114" />
        </div>
      );
    default:
      return null;
  }
}
