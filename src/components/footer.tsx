export default function Footer() {
  return (
    <footer className="block relative z-1 -mt-[13rem] py-[3rem] rounded-[11px] bg-background shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] max-lg:-mt-16 max-lg:pt-12 max-lg:pb-8 max-lg:rounded-2xl 2xl:-mt-[15rem] 2xl:py-14 2xl:rounded-xl">
      <div className="block px-[2.2875rem] max-md:px-6 md:max-lg:px-10 2xl:px-10">
        <div className="flex justify-between items-start gap-16 max-lg:flex-col max-lg:gap-10">
          <div className="flex max-w-[380px] flex-col gap-4 max-lg:max-w-none">
            <a className="block max-w-full cursor-pointer" href="https://www.omayacare.com" target="_blank" rel="noopener noreferrer">
              <span className="w-[10.2rem] h-6 block bg-[#7a2850] max-md:w-[8.5rem] max-md:h-5 [mask:url(/assets/images/omaya-care-wordmark.svg)_left_center/contain_no-repeat] [-webkit-mask:url(/assets/images/omaya-care-wordmark.svg)_left_center/contain_no-repeat]" role="img" aria-label="Omaya Care" />
            </a>
            <p className="block max-w-[20rem] text-muted-foreground text-[0.9375rem] leading-[1.4]">
              Care that follows mothers home.
            </p>
            <div className="flex items-center gap-2" aria-label="Social media">
              {[
                { label: "LinkedIn", href: "http://www.linkedin.com/company/omaya-care/", icon: "linkedin.svg" },
                { label: "Instagram", href: "https://www.instagram.com/omayacare", icon: "instagram-mono.svg" },
                { label: "TikTok", href: "https://www.tiktok.com/@omaya.care", icon: "tiktok-mono.svg" },
                { label: "Facebook", href: "https://www.facebook.com/share/1Gg62VTWn9/?mibextid=wwXIfr", icon: "facebook-mono.svg" }
              ].map((s) => (
                <a key={s.label} className="group w-8 h-8 flex justify-center items-center rounded-lg bg-[#adadb3]/70 cursor-pointer transition-colors hover:bg-[#7a2850]/65" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <span className="w-4 h-4 block bg-background transition-colors" style={{ WebkitMask: `url(/assets/images/social/${s.icon}) center/contain no-repeat`, mask: `url(/assets/images/social/${s.icon}) center/contain no-repeat` }} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-16 text-[0.9375rem] leading-[1.4] max-md:gap-10">
            <div className="flex flex-col gap-[0.8rem]">
              <div className="block text-muted">Company</div>
              <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/#how-it-works">How it works</a>
              <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/#for-hospitals">For Hospitals</a>
              <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/#for-mothers">For Mothers</a>
            </div>
            <div className="flex flex-col gap-[0.8rem]">
              <div className="block text-muted">Resources</div>
              <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/faq">FAQ</a>
              <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/contact">Contact</a>
              <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="https://app.omayacare.com/" target="_blank" rel="noopener noreferrer">Log in</a>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-t-border flex mt-10 pt-6 justify-between items-center gap-8 text-muted text-[0.8125rem] leading-[1.125rem] max-md:flex-col max-md:items-start max-md:gap-3 max-lg:text-sm max-lg:leading-[1.25rem]">
          <div className="block">{"© 2026 Omaya Care. All rights reserved."}</div>
          <div className="flex justify-start items-center gap-x-6 gap-y-2 max-md:flex-wrap">
            <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/privacy">Privacy</a>
            <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/terms">Terms</a>
            <a className="flex cursor-pointer transition-colors hover:text-[#7a2850]" href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
