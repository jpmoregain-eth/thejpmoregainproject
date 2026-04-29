import Link from "next/link";

export const metadata = { title: "Tools" };

const TOOLS = [
  {
    href: "/powerscale/tools/sizing-calculator",
    title: "Cluster Sizing Calculator",
    desc: "Select your node model, drive size, node count, and protection level. Get usable TiB with a full breakdown of where capacity goes -- VHS, parity, system overhead.",
    status: "live" as const,
    eta: null,
  },
  {
    href: null,
    title: "SmartPools Policy Builder",
    desc: "Define your data tiers and access patterns, and get a set of file pool policies you can review and adapt for your environment.",
    status: "soon" as const,
    eta: "Next",
  },
  {
    href: null,
    title: "SyncIQ RPO / RTO Planner",
    desc: "Calculate realistic RPO and RTO based on dataset size, link bandwidth, replication schedule, and failover procedures.",
    status: "soon" as const,
    eta: "Planned",
  },
  {
    href: null,
    title: "Protection Level Advisor",
    desc: "Given your node count, drive count, and risk tolerance, get a recommended protection level with MTTDL estimates.",
    status: "soon" as const,
    eta: "Planned",
  },
  {
    href: null,
    title: "CLI Cheatsheet",
    desc: "Searchable reference of the most-used OneFS CLI commands across administration, monitoring, and troubleshooting.",
    status: "soon" as const,
    eta: "Planned",
  },
];

export default function ToolsPage() {
  return (
    <div>
      <div className="ps-ph-header">
        <p className="ps-eyebrow">Resources</p>
        <h1 className="ps-ph-title">Tools</h1>
        <p className="ps-ph-desc">
          Interactive utilities to support planning, design, and operations --
          linked from relevant guide sections as they go live.
        </p>
        <div className="ps-ph-why-block">
          <strong>Design note</strong>
          These tools exist because the right answer depends on your specific numbers.
          A sizing guide that says "add more nodes for performance" is not useful --
          a calculator that lets you model your workload is.
        </div>
      </div>

      <div className="ps-cards">
        {TOOLS.map((tool, i) => {
          const inner = (
            <>
              <div className="ps-card-accent-bar" />
              <div className="ps-card-top">
                <span style={{
                  fontFamily: "var(--ps-font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  color: "var(--ps-text-muted)",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`ps-status ps-status-${tool.status}`}>
                  {tool.status === "live" ? "Live" : tool.eta ?? "Soon"}
                </span>
              </div>
              <p className="ps-card-title">{tool.title}</p>
              <p className="ps-card-desc">{tool.desc}</p>
            </>
          );

          return tool.href ? (
            <Link key={i} href={tool.href} className="ps-card">
              {inner}
            </Link>
          ) : (
            <div key={i} className="ps-card" style={{ cursor:"default", opacity:0.6 }}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
