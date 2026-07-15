export type Logo5Data = {
  id: string;
  href: string;
  label: string;
};
/** A logo. */
export default function Logo5({ d, cids }: { d: Logo5Data; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="flex justify-start items-center gap-[7.3px] md:max-lg:gap-2 2xl:gap-2" id={d.id}>
      <img data-cid={cids[1]} className="w-[0.5625rem] h-3 block max-w-full overflow-clip align-middle" data-component="image" alt="" src="/assets/cloned/svg/2c43d834505b.svg" />
      <a data-cid={cids[2]} className="flex cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href} target="_blank">
        {d.label}
      </a>
    </div>
  );
}
