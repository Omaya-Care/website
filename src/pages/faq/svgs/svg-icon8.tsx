export default function Icon8({ cid }: { cid?: string }) {
  return (
    <svg className="w-4.5 h-4.5 block relative -right-0.5 left-0.5 overflow-hidden pointer-events-none focus:outline-color-006 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" focusable="false" fill="currentColor" data-cid={cid}>
      <use xlinkHref="#plyr-play" />
    </svg>
  );
}
