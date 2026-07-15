export type TextLinkData = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A text link. */
export default function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="flex text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap text-nowrap cursor-pointer 2xl:text-sm 2xl:leading-[1.3125rem]" data-component="link" href={d.href} aria-current={d.ariacurrent}>
      {d.label}
    </a>
  );
}
