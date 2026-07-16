export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-2 inline overflow-hidden pointer-events-none max-lg:block" fill="none" height="8" viewBox="0 0 5 8" width="5" xmlns="http://www.w3.org/2000/svg" data-id={cid}>
      <path d="M0.26 3.08C-0.09 3.42 -0.09 3.98 0.26 4.32L3.13 7.15C3.68 7.69 4.62 7.3 4.62 6.52L4.62 0.88C4.62 0.1 3.68 -0.29 3.13 0.25L0.26 3.08Z" fill="white" />
    </svg>
  );
}
