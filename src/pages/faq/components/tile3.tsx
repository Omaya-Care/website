export type Tile3Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile3({ d, cids }: { d: Tile3Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="h-[20.5px] block list-none max-md:h-[1.225rem] md:max-lg:h-[1.4rem] 2xl:h-[1.4rem]">
      <div data-cid={cids[1]} className="h-[20.5px] flex justify-start items-center gap-[7.3px] max-md:h-[1.225rem] max-lg:gap-2 max-md:col-start-1 max-md:col-end-2 max-md:row-start-4 max-md:row-end-5 md:max-lg:h-[1.4rem] 2xl:h-[1.4rem] 2xl:gap-2" id="node-f2425cb3-1619-24cb-af9a-f9aa0671d32c-cce3a064">
        <a data-cid={cids[2]} className="h-[20.5px] overflow-hidden cursor-pointer line-clamp-1 max-md:h-[1.225rem] max-md:text-sm max-md:leading-[1.25rem] max-md:whitespace-pre-wrap md:max-lg:h-[1.4rem] 2xl:h-[1.4rem] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
          {d.label}
        </a>
      </div>
    </li>
  );
}
