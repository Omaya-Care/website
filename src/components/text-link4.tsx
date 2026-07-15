export type TextLink4Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink4({ d, cids }: { d: TextLink4Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="flex cursor-pointer max-md:text-sm max-md:leading-[1.25rem] max-md:whitespace-nowrap max-md:text-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
