export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-full h-full inline overflow-hidden max-md:w-4 max-md:h-4 md:max-lg:w-4.5 md:max-lg:h-4.5" fill="none" height="100%" viewBox="0 0 16 14" width="100%" xmlns="http://www.w3.org/2000/svg" data-cid={cid}>
      <circle cx="2.53247" cy="2.93777" r="2" fill="currentColor" />
      <circle cx="13.5325" cy="2.93777" r="2" fill="currentColor" />
      <circle cx="13.5325" cy="11.9378" r="2" fill="currentColor" />
      <circle cx="2.53247" cy="11.9378" r="2" fill="currentColor" />
    </svg>
  );
}
