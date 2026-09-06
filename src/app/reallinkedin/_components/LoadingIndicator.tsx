export default function LoadingIndicator() {
  return (
    <div
      className="flex items-center justify-center gap-[14px] px-6 py-14"
      style={{ animation: "fadeInUp 0.4s ease" }}
      role="status"
      aria-live="polite"
    >
      <span className="flex gap-[6px]" aria-hidden>
        <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-[#00FF88]" />
        <span
          className="pulse-dot h-[7px] w-[7px] rounded-full bg-[#00FF88]"
          style={{ animationDelay: "0.15s" }}
        />
        <span
          className="pulse-dot h-[7px] w-[7px] rounded-full bg-[#00FF88]"
          style={{ animationDelay: "0.3s" }}
        />
      </span>
      <span className="font-mono text-[13px] tracking-[0.06em] text-[#E5E5E5]/60">
        Reading between the lines...
      </span>
    </div>
  );
}
