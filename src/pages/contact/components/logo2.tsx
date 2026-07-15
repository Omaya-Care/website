export type Logo2Data = {
  kind?: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, cids }: { d: Logo2Data; cids: string[] }) {
  return (
    <fieldset data-cid={cids[0]} className="w-109 block min-w-0 shrink-0 basis-full md:max-lg:w-73" aria-roledescription="slide">
      <img data-cid={cids[1]} className="w-full h-64 block max-w-full overflow-clip object-cover align-middle md:max-lg:h-[10.6875rem]" data-component={d.kind} alt="" src={d.imgSrc} />
    </fieldset>
  );
}
