"use client";

import { useEffect } from "react";

type Props = {
  onClose: () => void;
  labelledBy: string;
  maxWidth: number;
  padding: string;
  children: React.ReactNode;
};

export default function ModalShell({
  onClose,
  labelledBy,
  maxWidth,
  padding,
  children,
}: Props) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(5,5,8,0.82)] p-6 backdrop-blur-[6px]"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="relative w-full rounded-[14px] border border-[#D4A843]/30 bg-[#12121A]"
        style={{ maxWidth, padding, animation: "fadeInUp 0.35s ease" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[18px] top-4 cursor-pointer border-0 bg-transparent font-mono text-[18px] text-[#E5E5E5]/40 transition-colors duration-[250ms] hover:text-[#D4A843]"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
