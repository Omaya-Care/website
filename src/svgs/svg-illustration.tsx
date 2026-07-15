export default function Illustration({ cid }: { cid?: string }) {
  return (
    <span
      className="block text-[2.5rem] leading-[1.2] tracking-tight font-semibold max-md:text-[1.75rem] md:max-lg:text-[2.8rem] 2xl:text-[2.8rem]"
      data-cid={cid}
    >
      Automated postpartum follow-up for every mother you discharge.
    </span>
  );
}
