export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, cids }: { d: Tile3Data; cids: string[] }) {
  return (
    <div data-id={cids[0]} className="h-[24.7px] flex justify-start items-start gap-[0.6875rem] text-muted-foreground max-md:h-auto max-lg:gap-3 md:max-lg:h-auto 2xl:h-[1.6875rem] 2xl:gap-3">
      <div data-id={cids[1]} className="w-[3.7px] h-[3.7px] block relative top-[0.6875rem] -bottom-[0.6875rem] rounded-[50%] shrink-0 bg-color-004 max-lg:w-1 max-lg:h-1 max-md:top-[0.65rem] max-md:-bottom-[0.65rem] md:max-lg:top-3 md:max-lg:-bottom-3 2xl:w-1 2xl:h-1 2xl:top-3 2xl:-bottom-3" />
      <p data-id={cids[2]} className="block text-[1.0625rem] leading-[1.5625rem] tracking-[-0.15px] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-lg md:max-lg:leading-[1.6875rem] 2xl:text-lg 2xl:leading-[1.6875rem]">
        {d.description}
      </p>
    </div>
  );
}
