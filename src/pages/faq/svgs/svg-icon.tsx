export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-full block min-w-0 overflow-hidden max-lg:h-5" fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg" data-cid={cid}>
      <path d="M15 5L5 15M5 5L15 15" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
