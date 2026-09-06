export default function UpgradePrompt({ onSeePlans }: { onSeePlans: () => void }) {
  return (
    <div className="mt-[18px] flex flex-wrap items-center justify-between gap-[18px] rounded-xl border border-[#D4A843]/20 bg-[#D4A843]/6 px-6 py-5">
      <div className="min-w-[220px] flex-1">
        <div className="text-[15px] font-semibold text-[#E5E5E5]">
          Copying and sharing are Pro.
        </div>
        <div className="mt-[5px] text-[14px] text-[#E5E5E5]/60">
          $1.99/mo, or $4.99 once. No ads either.
        </div>
      </div>
      <button
        type="button"
        onClick={onSeePlans}
        className="cursor-pointer whitespace-nowrap rounded-lg border-0 bg-[#D4A843] px-5 py-3 font-mono text-[13px] font-semibold text-[#0A0A0F] transition-colors duration-[250ms] hover:bg-[#F5A623]"
      >
        See plans
      </button>
    </div>
  );
}
