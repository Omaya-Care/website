import type { FeatureCardStyles } from "../_styles";
export type FeatureCardData = {
  kind?: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={styles.className}>
      <h2 data-cid={cids[1]} className={styles.className2} data-component={d.kind}>
        {d.title}
      </h2>
      <p data-cid={cids[2]} className={styles.className3}>
        {d.description}
      </p>
    </div>
  );
}
