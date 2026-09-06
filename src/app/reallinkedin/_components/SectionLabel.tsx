export default function SectionLabel({
  label,
  tone = "gold",
}: {
  label: string;
  tone?: "gold" | "green";
}) {
  const color = tone === "gold" ? "#D4A843" : "#00FF88";
  const rule =
    tone === "gold"
      ? "linear-gradient(90deg, rgba(212,168,67,0.35), transparent)"
      : "linear-gradient(90deg, rgba(0,255,136,0.35), transparent)";

  return (
    <div className="mb-[14px] flex items-center gap-3">
      <span
        className="font-mono text-[12px] font-semibold tracking-[0.22em] uppercase"
        style={{ color }}
      >
        {label}
      </span>
      <span className="h-px flex-1" style={{ background: rule }} />
    </div>
  );
}
