export default function Illustration({ cid }: { cid?: string }) {
  return (
    <h1
      className="block text-[2.5rem] leading-[1.2] tracking-tight font-semibold max-md:text-[1.75rem] md:max-lg:text-[clamp(1.875rem,1.084rem_+_2.21vw,2.5rem)] 2xl:text-[2.8rem]"
      data-id={cid}
    >
      Automated postpartum follow-up for every mother you discharge.
    </h1>
  );
}
