export default function Icon6({ cid }: { cid?: string }) {
  return (
    <svg className="w-4.5 h-4.5 hidden overflow-hidden pointer-events-none" aria-hidden="true" focusable="false" fill="currentColor" data-cid={cid}>
      <use xlinkHref="#plyr-exit-fullscreen" />
    </svg>
  );
}
