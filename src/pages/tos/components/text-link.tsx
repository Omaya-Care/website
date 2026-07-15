export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids }: { d: TextLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="flex" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
