"use client";

import { useRouter } from "next/navigation";

export default function BackButton({
  fallbackHref = "/",
  label = "Back",
}: {
  fallbackHref?: string;
  label?: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="group inline-flex items-center gap-2 rounded-full
                 border border-white/10 bg-white/[0.04]
                 px-4 py-2 text-sm text-neutral-300
                 backdrop-blur-md transition
                 hover:border-[#d36efa]/60 hover:bg-[#d36efa]/10"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full
                       bg-black/40 transition
                       group-hover:bg-[#d36efa]/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4 transition group-hover:text-[#d36efa]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </span>

      <span className="transition group-hover:text-[#d36efa]">
        {label}
      </span>
    </button>
  );
}