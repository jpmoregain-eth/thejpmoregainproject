interface AdSlotProps {
  type: "leaderboard" | "rectangle";
  className?: string;
}

export default function AdSlot({ type, className = "" }: AdSlotProps) {
  return (
    <div
      className={`ad-slot ${
        type === "leaderboard" ? "ad-leaderboard" : "ad-rectangle"
      } ${className}`}
    >
      <span>Advertisement</span>
    </div>
  );
}
