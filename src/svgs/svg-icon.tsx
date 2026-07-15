export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-2 inline overflow-hidden pointer-events-none max-lg:block" fill="none" height="8" viewBox="0 0 5 8" width="5" xmlns="http://www.w3.org/2000/svg" data-cid={cid}>
      <path d="M0.261479 3.07591C-0.0870006 3.41874 -0.0870007 3.98059 0.261479 4.32342L3.13129 7.14669C3.68454 7.69097 4.61993 7.29904 4.61993 6.52294L4.61993 0.876391C4.61993 0.100293 3.68454 -0.291644 3.13129 0.252635L0.261479 3.07591Z" fill="white" />
    </svg>
  );
}
