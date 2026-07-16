import Logo from "../components/logo";
import Logo2 from "../components/logo2";
import { Logo_cids, Logo2_cids } from "../_cids";
import { Logo_styles, Logo2_styles } from "../_styles";
import { logos as logosContent, logos2 as logos2Content } from "../content";
/** Logo Cloud section. */
export default function LogoCloudSection({ logos = logosContent, logos2 = logos2Content } = {}) {
  return (
    <section className="h-auto block pt-[3.6625rem] pb-10 max-lg:pt-16 max-lg:pb-10 2xl:pt-16 2xl:pb-10" style={{ backgroundImage: "linear-gradient(var(--background), var(--surface) 85%, var(--clr-4))" }} data-cid="n62">
      <div className="h-full block px-[2.2875rem] max-md:px-6 md:max-lg:px-10 2xl:px-10" data-cid="n63">
        <div className="h-full block relative z-2 max-w-[73.275rem] mx-auto justify-center max-lg:z-5 max-lg:max-w-320 2xl:max-w-320" data-cid="n64">
          <div className="h-full flex flex-col grid-cols-[1fr_1fr] grid-rows-[auto] [grid-auto-columns:1fr] max-lg:grid-cols-[1fr]" data-cid="n65">
            <div className="h-full block max-md:flex max-md:flex-col max-md:justify-start max-md:items-center" data-cid="n66">
              <div className="h-[40.3px] flex mb-[29.3px] justify-center items-center gap-[7.3px] max-md:h-[5.4375rem] max-md:max-w-52 max-lg:mb-8 max-md:flex-col max-lg:gap-2 max-md:text-center md:max-lg:h-11 2xl:h-11 2xl:mb-8 2xl:gap-2" data-cid="n67">
                <div className="flex mr-[14.7px] justify-between items-center max-lg:mr-4 2xl:mr-4" data-cid="n68">
                  {logos.map((d, i) => <Logo key={Logo_cids[i][0]} d={d} cids={Logo_cids[i]} styles={Logo_styles[i]} />)}
                </div>
                <h4 className="block leading-[1.375rem] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[-0.21px] 2xl:leading-5 2xl:tracking-[-0.24px]" data-cid="n72" data-component="heading">
                  Built in collaboration with top professionals
                </h4>
              </div>
              <div className="flex justify-center items-center gap-12 max-md:grid max-md:gap-6 max-md:grid-cols-[1fr_1fr] max-md:place-items-center md:max-lg:gap-14 2xl:gap-16" data-cid="n73">
                {logos2.map((d, i) => <Logo2 key={Logo2_cids[i][0]} d={d} cids={Logo2_cids[i]} styles={Logo2_styles[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
