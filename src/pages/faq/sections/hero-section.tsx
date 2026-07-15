import Tile4 from "../components/tile4";
import { Tile4_cids } from "../_cids";
import { Tile4_styles } from "../_styles";
import { tile4Data as tile4DataContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ tile4Data = tile4DataContent } = {}) {
  return (
    <div className="block relative rounded-[22px] bg-background transform-[matrix(1,0,0,1,0,73.2773)] pointer-events-none max-md:rounded-tl-3xl max-md:rounded-tr-3xl max-md:rounded-br-2xl max-md:rounded-bl-2xl max-lg:transform-[matrix(1,0,0,1,0,80)] md:max-lg:rounded-3xl 2xl:rounded-3xl 2xl:transform-[matrix(1,0,0,1,0,80)]" data-cid="n628">
      <button className="w-[2.2875rem] h-[2.2875rem] flex absolute top-0 right-0 z-2 rounded-[50%] justify-center items-center text-center bg-clr-11 [translate:calc(100%_+_10.9916px)] cursor-pointer pointer-events-none max-lg:w-10 max-lg:h-10 max-lg:-top-12 max-md:right-[19.0625rem] max-lg:[translate:calc(100%_-_40px)] md:max-lg:right-[40.7rem] 2xl:w-10 2xl:h-10 2xl:[translate:calc(100%_+_12px)] hover:bg-clr-26" data-cid="n629" data-component="button" aria-label="Close modal" id="sp2Close">
        <img className="w-[0.9375rem] h-[0.9375rem] block max-w-full overflow-clip align-middle transform-[matrix(0.85,0,0,0.85,0,0)] origin-[7.32031px_7.32031px] pointer-events-none max-lg:w-4 max-lg:h-4 max-lg:origin-[8px_8px] 2xl:w-4 2xl:h-4 2xl:origin-[8px_8px]" data-cid="n630" data-component="image" alt="" src="/assets/cloned/svg/ba965b8a65e9.svg" />
      </button>
      <div className="w-full h-[34.35rem] min-h-[31.4875rem] grid relative max-w-217.5 grid-rows-[549.6px] overflow-hidden pointer-events-none grid-cols-2 max-md:h-[38.95rem] max-md:flex max-md:max-h-[40.6rem] max-md:rounded-tl-2xl max-md:rounded-tr-2xl max-md:flex-col-reverse max-md:grid-cols-[1fr] max-md:grid-rows-[auto] max-md:overflow-y-auto max-lg:min-h-0 md:max-lg:h-[40.7625rem] md:max-lg:grid-rows-[652.2px] 2xl:h-150 2xl:min-h-137.5 2xl:grid-rows-[600px]" data-cid="n631">
        <picture className="w-[27.1875rem] h-137.5 min-h-[34.35rem] block relative rounded-tr-[22px] rounded-br-[22px] order-[2] overflow-clip pointer-events-none max-md:w-[21.5625rem] max-md:h-35 max-md:min-h-35 max-md:max-h-40 max-md:overflow-hidden max-md:rounded-tr-[initial] max-md:rounded-br-[initial] md:max-lg:w-86.5 md:max-lg:h-163 md:max-lg:min-h-150 md:max-lg:rounded-tr-3xl md:max-lg:rounded-br-3xl 2xl:h-150 2xl:min-h-150 2xl:rounded-tr-3xl 2xl:rounded-br-3xl" data-cid="n632">
          <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none max-md:object-[50%_30%]" data-cid="n633" data-component="image" alt="Superpower app on phone" src="/assets/cloned/images/62794bc9aa2a.avif" />
        </picture>
        <div className="h-[34.35rem] flex py-[2.2875rem] pr-[1.375rem] pl-[29.3px] flex-col justify-center items-stretch order-[1] overflow-auto pointer-events-none max-md:h-[30.2rem] max-md:pt-5 max-md:pb-6 max-md:px-5 max-lg:justify-start max-md:[overflow-x:initial] max-md:[overflow-y:initial] md:max-lg:h-[40.7625rem] md:max-lg:py-10 md:max-lg:pr-6 md:max-lg:pl-8 2xl:h-150 2xl:py-10 2xl:pr-6 2xl:pl-8" data-cid="n634" id="sp2StateForm">
          <div className="flex mb-[0.6875rem] justify-start items-center text-muted-foreground pointer-events-none max-lg:mb-3 2xl:mb-3" data-cid="n635">
            <img className="w-auto h-8.5 block max-w-full overflow-clip align-middle pointer-events-none" data-cid="n636" data-component="image" alt="" src="/assets/cloned/images/286aeac81a92.avif" />
            <div className="block pointer-events-none" data-cid="n637">
              Designed by world-class physicians
            </div>
          </div>
          <h3 className="block text-[1.375rem] leading-[1.75rem] tracking-[-0.15px] pointer-events-none max-md:text-lg max-md:leading-[1.4375rem] max-lg:tracking-[-0.16px] md:max-lg:text-2xl md:max-lg:leading-7.5 2xl:text-2xl 2xl:leading-7.5 2xl:tracking-[-0.16px]" data-cid="n638" data-component="heading">
            Get simple, free protocols for energy, heart health and more
          </h3>
          <p className="h-[1.2rem] block opacity-55 mt-[0.6875rem] mb-[1.6rem] text-[0.8125rem] leading-[1.1875rem] tracking-[-0.2px] pointer-events-none max-lg:h-[1.3125rem] max-md:mt-2 max-md:mb-4 max-lg:text-sm max-lg:leading-[1.3125rem] md:max-lg:mt-3 md:max-lg:mb-7 2xl:h-[1.3125rem] 2xl:mt-3 2xl:mb-7 2xl:text-sm 2xl:leading-[1.3125rem]" data-cid="n639">
            <span className="inline pointer-events-none" data-cid="n640">
              Join 150,000+ others
            </span>
          </p>
          <div className="flex mt-[14.7px] flex-col gap-0.5 pointer-events-none max-lg:mt-4 max-lg:gap-[0.15rem] 2xl:mt-4 2xl:gap-[0.15rem]" data-cid="n641">
            <div className="h-[47.3px] block relative pointer-events-none max-lg:h-[3.225rem] 2xl:h-[3.225rem]" data-cid="n642">
              <input className="w-full h-10.5 border border-solid border-foreground inline-block py-[0.825rem] px-[14.7px] rounded-[10px] overflow-clip leading-3.5 bg-background cursor-text pointer-events-none max-lg:h-11.5 max-md:border-border max-lg:py-[0.9rem] max-lg:px-4 max-lg:leading-[0.9375rem] 2xl:h-11.5 2xl:border-border 2xl:py-[0.9rem] 2xl:px-4 2xl:leading-[0.9375rem]" data-cid="n643" data-component="input" id="sp2EmailInput" name="email" placeholder="Email" type="email" />
              <div className="h-[5.1px] block opacity-0 max-h-0 pt-[5.1px] overflow-hidden text-clr-12 text-xs leading-[1rem] pointer-events-none" data-cid="n644" id="sp2EmailError">
                Please enter a valid email address
              </div>
            </div>
            <button className="block p-[14.7px] rounded-[10px] text-background text-center bg-color-006 cursor-pointer pointer-events-none max-lg:p-4 2xl:p-4 hover:opacity-[0.852481] focus:opacity-[0.999619]" data-cid="n645" data-component="button" id="sp2SubmitBtn" type="button">
              Continue for free
            </button>
          </div>
          <div className="flex max-w-133 mt-[73.3px] flex-col gap-2 text-muted-foreground pointer-events-none max-lg:max-w-full max-md:mt-8 md:max-lg:mt-20 2xl:mt-20" data-cid="n646">
            <p className="block leading-[1.375rem] tracking-[-0.2px] pointer-events-none max-lg:leading-6 2xl:leading-6" data-cid="n647">
              Free protocols for
            </p>
            <div className="flex flex-col gap-1 pointer-events-none" data-cid="n648">
              {tile4Data.map((d, i) => <Tile4 key={i} d={d} cids={Tile4_cids[i]} styles={Tile4_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
