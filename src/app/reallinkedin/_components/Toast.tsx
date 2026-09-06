export default function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-[34px] left-1/2 z-[70] flex -translate-x-1/2 items-center gap-[10px] rounded-full border border-[#00FF88]/40 bg-[#12121A] px-5 py-[13px] shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
      style={{ animation: "fadeInUp 0.3s ease" }}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-[#00FF88]" aria-hidden />
      <span className="font-mono text-[13px] text-[#E5E5E5]">{message}</span>
    </div>
  );
}
