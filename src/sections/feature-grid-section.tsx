import FeatureGridItem from "../components/feature-grid-item";
import { FeatureGridItem_cids } from "../_cids";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block relative z-2 bg-background" data-cid="n78" id="how-it-works">
      <div className="block pt-10 pb-6 px-[2.2875rem] max-md:h-[100.525rem] max-md:pt-6 max-md:pb-6 max-md:px-6 max-md:overflow-hidden md:max-lg:pt-12 md:max-lg:pb-6 md:max-lg:px-10 2xl:pt-12 2xl:pb-6 2xl:px-10" data-cid="n79">
        <div className="h-full block max-w-[73.275rem] mx-auto justify-center max-lg:max-w-320 2xl:max-w-320" data-cid="n80">
          <div className="h-full flex flex-col justify-center items-center gap-11 max-lg:gap-12 2xl:gap-12" data-cid="n81">
            <div className="flex max-w-[45.8rem] mx-auto flex-col justify-start items-center gap-[7.3px] text-center max-lg:max-w-200 max-lg:gap-2 max-md:mx-0 2xl:max-w-200 2xl:gap-2" data-cid="n82">
              <h2 className="block text-[2.3125rem] leading-11 tracking-[-0.82px] max-md:text-[2rem] max-md:leading-[2.375rem] max-md:tracking-[-0.72px] md:max-lg:text-4xl md:max-lg:leading-[2.6875rem] md:max-lg:tracking-[-0.81px] 2xl:text-[2.5rem] 2xl:leading-12 2xl:tracking-[-0.9px]" data-cid="n83" data-component="heading">
                How it works
              </h2>
              <div className="h-[20.5px] block text-muted-foreground max-md:h-[2.8rem] md:max-lg:h-[1.4rem] 2xl:h-[1.4rem]" data-cid="n84">
                {"From discharge to recovery, "}
                <span className="inline max-md:block" data-cid="n85">
                  Omaya keeps every mother supported.
                </span>
              </div>
            </div>
            <div className="w-full grid gap-[7.3px] grid-rows-[403.7px] [grid-auto-columns:1fr] max-lg:gap-2 max-md:grid-rows-[337.297px_337.297px_337.297px_337.297px] md:max-lg:grid-rows-[466.578px_466.578px] 2xl:gap-2 2xl:grid-rows-[448.4px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4" data-cid="n86">
              {features.map((d, i) => <FeatureGridItem key={d.variant} d={d} cids={FeatureGridItem_cids[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
