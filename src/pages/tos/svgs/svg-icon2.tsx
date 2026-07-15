export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-full h-full inline overflow-hidden max-md:w-4 max-md:h-4" aria-hidden="true" height="100%" role="img" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="currentColor" data-cid={cid}>
      <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
    </svg>
  );
}
