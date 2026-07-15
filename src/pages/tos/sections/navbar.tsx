import Illustration from "../svgs/svg-illustration";
import TextLink from "../components/text-link";
import Icon from "../svgs/svg-icon";
import { TextLink_cids } from "../_cids";
import { textLinkData as textLinkDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ textLinkData = textLinkDataContent } = {}) {
  return (
    <nav className="h-[5.8625rem] block fixed inset-x-0 z-199 pr-[18.3px] pl-[14.7px] max-md:h-[3.925rem] max-lg:px-0 md:max-lg:h-[4.075rem] 2xl:h-[6.4rem] 2xl:pr-5 2xl:pl-4" data-cid="n1" data-component="nav">
      <div className="block mt-[29.3px] max-lg:mt-0 2xl:mt-8" data-cid="n2">
        <div className="h-full flex relative z-999 max-w-[1245.7px] mx-auto pr-[7.3px] pl-[29.3px] rounded-full justify-between items-stretch bg-clr-0 shadow-[var(--clr-1)_0px_1px_4px_0px,var(--clr-2)_0px_7px_24px_0px] max-lg:max-w-340 max-lg:py-3.5 max-md:px-5 max-lg:rounded-[initial] max-lg:shadow-[initial] md:max-lg:px-6 2xl:max-w-340 2xl:pr-2 2xl:pl-8" data-cid="n3">
          <a className="flex relative max-w-full pt-[7.3px] flex-col justify-center items-center cursor-pointer max-lg:pt-2 max-lg:justify-start max-lg:static max-lg:inset-auto 2xl:pt-2" data-cid="n4" data-component="link" href="/">
            <div className="w-full block text-background before:content-['_'] before:table before:w-0 before:h-0 before:text-background before:text-[0.9375rem] before:leading-[1.3125rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-background after:text-[0.9375rem] after:leading-[1.3125rem] max-lg:after:text-base max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem]" data-cid="n5">
              <Illustration cid={"n6"} />
            </div>
          </a>
          <div className="h-[64.5px] block text-background max-lg:hidden 2xl:h-[4.4rem]" data-cid="n7">
            <div className="h-full block" data-cid="n8">
              <div className="h-full inline-block z-900 text-left max-lg:hidden" data-cid="n9">
                <div className="h-full flex relative py-[1.375rem] px-[14.7px] justify-start items-center gap-[1.6rem] align-top whitespace-nowrap text-nowrap cursor-pointer 2xl:py-6 2xl:px-4 2xl:gap-7" data-cid="n10" data-component="button" aria-controls="w-dropdown-list-0" aria-expanded="false" aria-haspopup="menu" id="w-dropdown-toggle-0" role="button">
                  {textLinkData.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} />)}
                  <div className="w-px h-[20.5px] block bg-clr-3 2xl:h-[1.4rem]" data-cid="n15" />
                  <a className="flex" data-cid="n16" data-component="link" href="/faqs">
                    FAQs
                  </a>
                  <a className="flex" data-cid="n17" data-component="link" href="/organizations">
                    For Teams
                  </a>
                </div>
              </div>
              <div className="block" data-cid="n18" />
            </div>
          </div>
          <div className="flex max-lg:justify-start max-lg:items-center max-lg:gap-4" data-cid="n19">
            <a className="hidden min-w-0 text-background leading-[1.375rem] tracking-[-0.18px] cursor-pointer max-lg:block max-lg:leading-6 max-lg:tracking-[-0.2px]" data-cid="n20" href="https://app.superpower.com/signin">
              Login
            </a>
            <div className="h-[64.5px] flex justify-start items-center gap-[29.3px] max-lg:hidden 2xl:h-[4.4rem] 2xl:gap-8" data-cid="n21">
              <a className="block text-background leading-[1.375rem] tracking-[-0.18px] cursor-pointer 2xl:leading-6 2xl:tracking-[-0.2px] hover:bg-clr-15 hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:shadow-[var(--clr-22)_0px_0px_0px_0.192605px,var(--accent)_0px_0px_0px_0.385211px]" data-cid="n22" data-component="link" href="https://app.superpower.com/signin">
                Login
              </a>
              <div className="h-[51.3px] flex gap-[7.3px] 2xl:h-14 2xl:gap-2" data-cid="n23">
                <a className="block py-[14.7px] px-[18.3px] rounded-full text-background leading-[1.375rem] tracking-[-0.18px] bg-primary cursor-pointer whitespace-nowrap 2xl:py-4 2xl:px-5 2xl:leading-6 2xl:tracking-[-0.2px] hover:bg-clr-17 hover:shadow-[var(--clr-18)_0px_0px_1.54084px_0px,var(--clr-19)_0px_0px_2.31126px_0px] focus:shadow-[var(--clr-23)_0px_0px_1.71302px_0.192362px,var(--accent)_0px_0px_2.56953px_0.384725px]" data-cid="n24" data-component="link" href="https://app.superpower.com/register">
                  Try Superpower
                </a>
              </div>
            </div>
            <div className="hidden min-w-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-stretch" data-cid="n25">
              <a className="inline-block max-w-full cursor-pointer max-md:w-11 max-lg:flex max-md:pt-[0.4rem] max-md:pb-2 max-lg:px-[0.4rem] max-lg:rounded-4xl max-lg:justify-center max-lg:items-center max-lg:bg-background md:max-lg:w-13 md:max-lg:py-[0.6rem]" data-cid="n26" href="#">
                <div className="w-[18.3px] block max-md:w-4 max-md:h-4 md:max-lg:w-4.5 md:max-lg:h-4.5 before:content-['_'] before:table before:text-foreground before:text-[0.9375rem] before:leading-[1.3125rem] max-lg:before:w-0 max-lg:before:h-0 max-lg:before:text-base max-lg:before:leading-[1.375rem] 2xl:before:text-base 2xl:before:leading-[1.375rem] after:content-['_'] after:table after:text-foreground after:text-[0.9375rem] after:leading-[1.3125rem] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:text-base max-lg:after:leading-[1.375rem] 2xl:after:text-base 2xl:after:leading-[1.375rem]" data-cid="n27">
                  <Icon cid={"n28"} />
                </div>
              </a>
            </div>
          </div>
          <div className="w-[1245.7px] h-full block absolute top-0 left-0 -z-1 min-w-0 rounded-[146.6px] [backdrop-filter:blur(60px)] pointer-events-none max-md:w-[23.4375rem] max-lg:rounded-[initial] md:max-lg:w-192 2xl:w-340 2xl:rounded-[160px]" data-cid="n29" />
        </div>
      </div>
    </nav>
  );
}
