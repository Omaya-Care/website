import { useState } from "react";

export type ExpandableItemData = {
  label: string;
  description: string;
};

export default function ExpandableItem({ d }: { d: ExpandableItemData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[7.3px]">
      <div className="bg-clr-6 [backdrop-filter:blur(24px)] shadow-[var(--color-006)_0px_2px_2px_0px]">
        <button
          className="w-full h-[51.3px] flex py-[0.6875rem] pr-[0.6875rem] pl-[18.3px] justify-between items-center gap-[14.7px] text-left cursor-pointer"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block text-background text-[0.9375rem] leading-[1.4375rem]">
            {d.label}
          </span>
          <div
            className="w-[29.3px] h-[29.3px] flex py-1.5 rounded-sm justify-center items-center shrink-0 bg-surface-2 text-background transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4002 4.0002C10.4002 3.55837 10.042 3.2002 9.6002 3.2002C9.15837 3.2002 8.8002 3.55837 8.8002 4.0002V8.8002H4.0002C3.55837 8.8002 3.2002 9.15837 3.2002 9.6002C3.2002 10.042 3.55837 10.4002 4.0002 10.4002H8.8002V15.2002C8.8002 15.642 9.15837 16.0002 9.6002 16.0002C10.042 16.0002 10.4002 15.642 10.4002 15.2002V10.4002H15.2002C15.642 10.4002 16.0002 10.042 16.0002 9.6002C16.0002 9.15837 15.642 8.8002 15.2002 8.8002H10.4002V4.0002Z" fill="currentColor" />
            </svg>
          </div>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? "12rem" : "0px", opacity: isOpen ? 1 : 0 }}
        >
          <p className="px-[18.3px] pb-[0.6875rem] text-white/60 text-sm leading-6">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
