export default function Icon7({ cid }: { cid?: string }) {
  return (
    <svg className="w-4.5 h-4.5 block overflow-hidden pointer-events-none hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-color-006 focus:[outline-style:auto] focus:outline-[5px] focus:[text-decoration-color:var(--background)]" data-component="icon" aria-hidden="true" focusable="false" fill="currentColor" data-cid={cid}>
      <use xlinkHref="#plyr-enter-fullscreen" />
    </svg>
  );
}
