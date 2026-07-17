import { useState, useEffect, useRef } from "react";
import Logo, { type LogoData } from "./components/logo";
import Icon2 from "./svgs/svg-icon2";
import { Logo_cids } from "./_cids";
import { Logo_styles } from "./_styles";

type Concern = "demo" | "waitlist" | "general";

const BADGE_TEXT: Record<Concern, string> = {
  demo: "Book a Demo",
  waitlist: "Join the Waitlist",
  general: "General Contact",
};

const HEADING: Record<Concern, string> = {
  demo: "Book a demo",
  waitlist: "Join the waitlist",
  general: "Let's talk",
};

const DESCRIPTION: Record<Concern, string> = {
  demo: "See how Omaya Care works in your hospital. We'll walk you through everything.",
  waitlist: "Omaya Care is launching soon. Join the waitlist and be first to know.",
  general: "Have a question, concern, or just want to learn more? Reach out — we're here.",
};

const CONCERN_OPTIONS: { value: Concern; label: string }[] = [
  { value: "demo", label: "Book a Demo" },
  { value: "waitlist", label: "Join the Waitlist" },
  { value: "general", label: "General Contact" },
];

const Logo_data: LogoData[] = [
  { srcSet: "/assets/images/team-1.jpeg", imgSrc: "/assets/images/team-1.jpeg" },
  { srcSet: "/assets/images/team-2.jpeg", imgSrc: "/assets/images/team-2.jpeg" },
  { srcSet: "/assets/images/team-3.jpeg", imgSrc: "/assets/images/team-3.jpeg" },
];

const CAROUSEL_IMAGES = [
  "/assets/images/contact-oma-app.avif",
  "/assets/images/contact-family-newborn.avif",
  "/assets/images/contact-nurse-tablet.avif",
  "/assets/images/contact-doctor-consult.avif",
];

const INPUT_CLASS =
  "w-full h-13.5 inline-block py-4 px-6 rounded-xl overflow-clip text-base leading-5.5 tracking-[-0.16px] bg-background shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-4)_0px_0px_1px_0px,var(--clr-5)_0px_1px_2px_0px] cursor-text max-md:h-[3.4375rem] max-md:text-lg max-md:leading-[1.4375rem] 2xl:[font-size:inherit] hover:outline-clr-7 hover:outline-[3px]";

const BTN_PRIMARY_CLASS =
  "h-13.5 flex py-4 px-5 rounded-xl justify-center items-center shrink-0 gap-2 col-start-[span_2] col-end-[span_2] text-background text-base leading-5.5 tracking-[-0.16px] text-center whitespace-nowrap text-nowrap bg-foreground cursor-pointer w-full max-md:h-[3.4375rem] max-md:text-lg max-md:leading-[1.4375rem] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] 2xl:[font-size:inherit] hover:bg-clr-8";

export default function Page() {
  const [step, setStep] = useState<1 | 2>(1);
  const [concern, setConcern] = useState<Concern | null>(null);
  const [slide, setSlide] = useState(0);
  // tracks how many times each slide has been activated — used as key to restart CSS animations
  const [slideActivations, setSlideActivations] = useState<number[]>(() => CAROUSEL_IMAGES.map((_, i) => (i === 0 ? 1 : 0)));
  const slideRef = useRef(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  // honeypot: hidden field bots fill and humans don't
  const [website, setWebsite] = useState("");
  // when the form mounted — used server-side to reject too-fast (bot) submits
  const formStart = useRef<number>(Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type") as Concern | null;
    if (t === "demo" || t === "waitlist" || t === "general") {
      setConcern(t);
    }
  }, []);

  function goToSlide(n: number) {
    slideRef.current = n;
    setSlide(n);
    setSlideActivations(prev => prev.map((v, i) => (i === n ? v + 1 : v)));
  }

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      const next = (slideRef.current + 1) % CAROUSEL_IMAGES.length;
      goToSlide(next);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const isWaitlist = concern === "waitlist";
  const heading = concern ? HEADING[concern] : "Let's talk";
  const description = concern
    ? DESCRIPTION[concern]
    : "Have a question, concern, or just want to learn more? Reach out — we're here.";

  function handleSelectConcern(value: Concern) {
    setConcern(value);
    setStep(1);
    setError(null);
  }

  async function submitContact() {
    if (submitting || !concern) return;
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          concern,
          name,
          email,
          company: concern === "demo" ? company : undefined,
          role: concern === "demo" ? role : undefined,
          message: concern === "general" ? message : undefined,
          website, // honeypot
          ts: formStart.current,
        }),
      });
      if (res.status === 429) {
        setError("Too many attempts. Please try again in a few minutes.");
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleStep1Submit(e: React.FormEvent) {
    e.preventDefault();
    if (isWaitlist) {
      // waitlist has no step 2 — submit straight away
      submitContact();
    } else {
      setStep(2);
    }
  }

  function handleStep2Submit(e: React.FormEvent) {
    e.preventDefault();
    submitContact();
  }

  const step2Label = concern === "demo" ? "Your details" : "Your message";
  const step2Locked = step < 2;

  return (
    <>
      <main className="min-h-screen block pb-20 px-16 bg-clr-0 max-md:px-4 md:max-lg:px-8" data-id="n1">
        <div className="block mx-auto max-w-[64rem] max-md:max-w-[30rem]" data-id="n2">
          {/* Navbar */}
          <div className="flex pt-10 pb-6 justify-between items-center" data-id="n3">
            <a className="block cursor-pointer" data-id="n4" href="/">
              <img decoding="async" src="/assets/images/omaya-care-wordmark-black.svg" alt="Omaya Care" className="h-5 w-auto block max-w-full" />
            </a>
          </div>

          <div className="w-full grid gap-16 max-md:block max-md:gap-[initial] md:max-lg:gap-8 grid-cols-1 md:grid-cols-2" data-id="n6">
            {/* Left column */}
            <div className="block" data-id="n7">
              <div className="border-b border-solid border-b-border flex mb-6 pb-6 flex-col" data-id="n8">
                {/* Badge — only shown when a concern is selected */}
                {concern && (
                  <span className="inline-flex self-start mb-4 py-0.5 px-2.5 rounded-full text-xs font-medium text-accent bg-clr-1 whitespace-nowrap" data-id="n9">
                    {BADGE_TEXT[concern]}
                  </span>
                )}

                <h1 className="block mb-2 text-[1.75rem] leading-8 tracking-[-0.63px] max-md:text-2xl max-md:leading-7 max-md:tracking-[-0.54px]" data-id="n10">
                  {heading}
                </h1>

                <div className="block mb-6 text-color-001 leading-5 max-md:text-base max-md:tracking-[-0.16px] max-md:leading-[inherit] 2xl:text-[0.875rem]" data-id="n11">
                  {description}
                </div>

                {/* Concern chips — hidden on waitlist path */}
                {!isWaitlist && (
                  <div className="flex flex-wrap gap-2 mb-6" data-id="n11b">
                    {CONCERN_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelectConcern(opt.value)}
                        className={`py-1.5 px-3.5 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                          concern === opt.value
                            ? "border-accent bg-clr-1 text-accent"
                            : "border-border text-color-001 hover:border-accent hover:text-accent"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* "Built in collaboration with top professionals" */}
                <div className="h-8 flex items-center gap-2" data-id="n12">
                  <div className="flex" data-id="n13">
                    {Logo_data.map((d, i) => <Logo key={Logo_cids[i][0]} d={d} cids={Logo_cids[i]} styles={Logo_styles[i]} />)}
                  </div>
                  <span className="block text-color-001 max-md:text-xs max-md:leading-4.5 2xl:text-sm 2xl:leading-[1.3125rem]" data-id="n26">
                    Built in collaboration with top professionals
                  </span>
                </div>
              </div>

              {/* Form steps */}
              {submitted ? (
                <div className="border border-solid border-border flex flex-col gap-3 p-6 rounded-2xl bg-background" role="status">
                  <h2 className="text-xl leading-6 tracking-[-0.45px]">
                    {isWaitlist ? "You're on the list! 🎉" : "Message received 🎉"}
                  </h2>
                  <p className="text-color-001 leading-5 2xl:text-[0.875rem]">
                    {isWaitlist
                      ? "Thanks for joining the waitlist — we'll be in touch the moment Omaya Care launches."
                      : "Thanks for reaching out. Our team will get back to you shortly at the email you provided."}
                  </p>
                </div>
              ) : (
              <div className="flex flex-col gap-6" data-id="n42">
                {/* Step 1 */}
                <div className="flex flex-col gap-6" data-id="n43">
                  {!isWaitlist && (
                    <div className="h-6 flex items-center gap-2 max-md:h-[1.5625rem]" data-id="n44">
                      <div className="w-6 h-6 flex rounded-md justify-center items-center bg-accent" data-id="n45">
                        <span className="block mt-0.5 text-background leading-3.5 max-md:text-base max-md:leading-4 max-md:tracking-[-0.16px] 2xl:text-[0.875rem]" data-id="n46">
                          1
                        </span>
                      </div>
                      <div className="block mt-0.5 text-base leading-5.5 tracking-[-0.16px] max-md:text-lg max-md:leading-[1.4375rem] 2xl:[font-size:inherit]" data-id="n47">
                        Your information
                      </div>
                    </div>
                  )}

                  <form className="grid gap-4 grid-cols-2 max-md:grid-cols-1" data-id="n48" onSubmit={handleStep1Submit}>
                    <div className="block col-start-[span_2] col-end-[span_2] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]" data-id="n49a">
                      <label className="flex mb-2 items-center gap-2 leading-5 cursor-default max-md:text-base max-md:tracking-[-0.16px] max-md:leading-[inherit] 2xl:text-[0.875rem]" htmlFor="name">
                        Name
                      </label>
                      <input
                        className={INPUT_CLASS}
                        id="name"
                        placeholder="Your name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="block col-start-[span_2] col-end-[span_2] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]" data-id="n49">
                      <label className="flex mb-2 items-center gap-2 leading-5 cursor-default max-md:text-base max-md:tracking-[-0.16px] max-md:leading-[inherit] 2xl:text-[0.875rem]" htmlFor="email">
                        Email
                      </label>
                      <input
                        className={INPUT_CLASS}
                        data-id="n51"
                        id="email"
                        placeholder="Your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* Honeypot — hidden from users, catches bots that fill every field */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="absolute -left-[9999px] h-px w-px opacity-0"
                    />
                    <button
                      className={`${BTN_PRIMARY_CLASS}${submitting ? " opacity-60 pointer-events-none" : ""}`}
                      data-id="n52"
                      type="submit"
                      disabled={submitting}
                    >
                      {isWaitlist ? (submitting ? "Joining…" : "Join the waitlist") : "Continue"}
                    </button>
                  </form>
                </div>

                {/* Step 2 — hidden entirely for waitlist */}
                {!isWaitlist && (
                  <div className={`flex flex-col gap-6 ${step2Locked ? "opacity-50 pointer-events-none" : ""}`} data-id="n53">
                    <div className="flex items-center gap-2" data-id="n54">
                      <div className="w-6 h-6 flex rounded-md justify-center items-center bg-accent" data-id="n55">
                        <span className="block mt-0.5 text-background leading-3.5 max-md:text-base max-md:leading-4 max-md:tracking-[-0.16px] 2xl:text-[0.875rem]" data-id="n56">
                          2
                        </span>
                      </div>
                      <div className="block mt-0.5 text-base leading-5.5 tracking-[-0.16px] max-md:text-lg max-md:leading-[1.4375rem] 2xl:[font-size:inherit]" data-id="n57">
                        {step2Label}
                      </div>
                    </div>

                    {step2Locked ? (
                      <div className="h-13.5 border border-solid border-border flex p-4 rounded-xl items-center gap-2 leading-5 max-md:h-[3.4375rem] max-md:text-base max-md:tracking-[-0.16px] max-md:leading-[inherit] 2xl:text-[0.875rem]" data-id="n58">
                        <Icon2 cid={"n59"} />
                        Complete step 1 to continue.
                      </div>
                    ) : concern === "demo" ? (
                      <form className="grid gap-4 grid-cols-2 max-md:grid-cols-1" onSubmit={handleStep2Submit}>
                        <div className="block">
                          <label className="flex mb-2 items-center gap-2 leading-5 cursor-default 2xl:text-[0.875rem]" htmlFor="company">
                            Company / Organisation
                          </label>
                          <input
                            className={INPUT_CLASS}
                            id="company"
                            placeholder="Your organisation"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                        <div className="block">
                          <label className="flex mb-2 items-center gap-2 leading-5 cursor-default 2xl:text-[0.875rem]" htmlFor="role">
                            Role / Title
                          </label>
                          <input
                            className={INPUT_CLASS}
                            id="role"
                            placeholder="Your role"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                          />
                        </div>
                        <button
                          className={`h-13.5 flex py-4 px-5 rounded-xl justify-center items-center shrink-0 gap-2 col-start-[span_2] col-end-[span_2] text-background text-base leading-5.5 tracking-[-0.16px] text-center whitespace-nowrap bg-foreground cursor-pointer w-full max-md:h-[3.4375rem] hover:bg-clr-8${submitting ? " opacity-60 pointer-events-none" : ""}`}
                          type="submit"
                          disabled={submitting}
                        >
                          {submitting ? "Booking…" : "Book your demo"}
                        </button>
                      </form>
                    ) : (
                      <form className="flex flex-col gap-4" onSubmit={handleStep2Submit}>
                        <div className="block">
                          <label className="flex mb-2 items-center gap-2 leading-5 cursor-default 2xl:text-[0.875rem]" htmlFor="message">
                            Your message
                          </label>
                          <textarea
                            className="w-full min-h-[7.5rem] inline-block py-4 px-6 rounded-xl overflow-clip text-base leading-5.5 tracking-[-0.16px] bg-background shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-4)_0px_0px_1px_0px,var(--clr-5)_0px_1px_2px_0px] cursor-text resize-none hover:outline-clr-7 hover:outline-[3px]"
                            id="message"
                            placeholder="Tell us what's on your mind…"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <button
                          className={`h-13.5 flex py-4 px-5 rounded-xl justify-center items-center shrink-0 gap-2 text-background text-base leading-5.5 tracking-[-0.16px] text-center whitespace-nowrap bg-foreground cursor-pointer w-full max-md:h-[3.4375rem] hover:bg-clr-8${submitting ? " opacity-60 pointer-events-none" : ""}`}
                          type="submit"
                          disabled={submitting}
                        >
                          {submitting ? "Sending…" : "Send message"}
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {error && (
                  <p className="text-sm leading-5 text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </div>
              )}
            </div>

            {/* Right column — desktop only */}
            <div className="block max-md:hidden" data-id="n60">
              <div className="border border-solid border-border flex sticky top-8 p-5 rounded-3xl flex-col gap-4 bg-background" data-id="n61">
                <div className="block text-color-001 text-base leading-5.5 tracking-[-0.16px] 2xl:[font-size:inherit]" data-id="n62">
                  You're in good hands
                </div>

                {/* Carousel */}
                <div className="border border-solid border-border block rounded-3xl overflow-hidden bg-clr-0 w-full" data-id="n63">
                  <section className="block relative overflow-hidden" data-id="n64">
                    {/* Fade slides */}
                    <div className="relative h-64 md:max-lg:h-[10.6875rem]" data-id="n66">
                      {CAROUSEL_IMAGES.map((src, i) => {
                        return (
                          <img decoding="async"
                            key={src}
                            className="absolute inset-0 w-full h-full object-cover block"
                            style={{ opacity: i === slide ? 1 : 0, transition: "opacity 0.6s ease" }}
                            src={src}
                            alt=""
                          />
                        );
                      })}
                    </div>
                    {/* Dot navigation */}
                    <div className="h-10 flex absolute bottom-4 inset-x-4 z-10 justify-end" data-id="n74">
                      <div className="flex py-2 px-4 rounded-full items-center bg-clr-6 [backdrop-filter:blur(8px)]" data-id="n75">
                        {CAROUSEL_IMAGES.map((src, i) => (
                          <button
                            key={src}
                            className="h-6 block p-2 shrink-0 text-center cursor-pointer"
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goToSlide(i)}
                          >
                            <span
                              className="block rounded-full bg-background h-2"
                              style={{
                                width: i === slide ? "2rem" : "0.5rem",
                                opacity: i === slide ? 1 : 0.5,
                                transition: "width 0.2s ease, opacity 0.2s ease",
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>

                {/* Panel description */}
                <div className="block" data-id="n84">
                  <div className="block pb-4" data-id="n85">
                    <h3 className="block mb-2 text-xl leading-[1.4375rem] tracking-[-0.45px]" data-id="n86">
                      Omaya Care
                    </h3>
                    <p className="block text-color-001 leading-5 2xl:text-[0.875rem]" data-id="n87">
                      Omaya Care supports mothers through every step of their post-discharge journey — and we're here for your questions too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
