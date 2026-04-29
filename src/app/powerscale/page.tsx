import Link from "next/link";

const SECTIONS = [
  {
    href: "/powerscale/concepts",
    title: "Concepts",
    desc: "How PowerScale actually works -- architecture, data protection, networking, replication. Two modes: plain English or white-paper depth.",
    status: "live" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 2h7a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <path d="M5 5h5M5 7.5h5M5 10h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/powerscale/install",
    title: "Install",
    desc: "Hardware installation, node setup, and cluster formation. When to rack-mount vs nested, and why getting this right avoids pain later.",
    status: "live" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="1.5" y="2" width="12" height="4" rx="1" />
        <rect x="1.5" y="9" width="12" height="4" rx="1" />
        <circle cx="11.5" cy="4" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="11.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/powerscale/design",
    title: "Design",
    desc: "Cluster sizing, network architecture, protection planning, and SmartPools design. How to build a cluster you will not regret in 18 months.",
    status: "soon" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M7.5 1.5L13 4.5L7.5 7.5L2 4.5L7.5 1.5z" />
        <path d="M2 7.5l5.5 3 5.5-3" strokeLinecap="round" />
        <path d="M2 10.5l5.5 3 5.5-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/powerscale/implement",
    title: "Implement",
    desc: "Configuration, protocol setup, access zones, and authentication. When to use which protocol and why the order of operations matters.",
    status: "soon" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="7.5" cy="7.5" r="2" />
        <path d="M7.5 1.5v1M7.5 12.5v1M1.5 7.5h1M12.5 7.5h1M3.4 3.4l.7.7M10.9 10.9l.7.7M10.9 3.4l-.7.7M4.1 10.9l-.7.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/powerscale/migrate",
    title: "Migrate",
    desc: "Data migration planning, SyncIQ migrations, and cutover strategy. How to move petabytes without anyone noticing -- and what to do when they do.",
    status: "soon" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M2 7.5h11M9.5 4l3.5 3.5L9.5 11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/powerscale/secure",
    title: "Secure",
    desc: "Hardening, SmartLock WORM, access control, and audit setup. When compliance mode is non-negotiable and what it actually locks you into.",
    status: "soon" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M7.5 1.5L2 4v4c0 3.314 2.5 5.5 5.5 5.5S13 11.314 13 8V4L7.5 1.5z" />
        <path d="M5 7.5l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/powerscale/monitor",
    title: "Monitor",
    desc: "InsightIQ, performance metrics, alerting, and proactive monitoring. What to watch before it becomes a 3AM call.",
    status: "soon" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M1 7.5h2.5l2-4.5 3 9 2-4.5H14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/powerscale/tools",
    title: "Tools",
    desc: "Interactive utilities: cluster sizing calculator, SmartPools policy builder, SyncIQ RPO/RTO planner, and more.",
    status: "soon" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M9.5 2a3.5 3.5 0 0 0-3.46 4.05L2.5 9.5a1.5 1.5 0 0 0 2.12 2.12l3.45-3.54A3.5 3.5 0 1 0 9.5 2z" />
        <circle cx="9.5" cy="5.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function PowerScaleLanding() {
  return (
    <div>
      <section className="ps-hero">
        <p className="ps-eyebrow">Dell PowerScale · Independent Resource</p>
        <h1 className="ps-hero-title">
          The field guide that asks <em>why</em>, not just how.
        </h1>
        <p className="ps-hero-subtitle">
          Most storage guides tell you what to click. This one explains what is actually
          happening, when you should care, and why it matters -- written by someone who has
          done this at 3AM and lived to document it.
        </p>
        <div className="ps-hero-meta">
          <span>Dell PowerScale · OneFS 9.x</span>
          <span className="ps-hero-meta-sep" />
          <span>Free · No paywall · Ad-supported</span>
          <span className="ps-hero-meta-sep" />
          <span>Built by Derek Leong</span>
        </div>
      </section>

      <div className="ps-approach" style={{ marginBottom: "2.75rem" }}>
        <div className="ps-approach-item">
          <p className="ps-approach-label">How</p>
          <p className="ps-approach-title">Step-by-step guides</p>
          <p className="ps-approach-body">
            CLI commands, configuration steps, and real-world sequences -- not just
            screenshots of a UI that changes every release.
          </p>
        </div>
        <div className="ps-approach-item">
          <p className="ps-approach-label">Why</p>
          <p className="ps-approach-title">Reason behind the config</p>
          <p className="ps-approach-body">
            Every setting exists for a reason. We explain the trade-offs so you can make
            an informed call, not just copy-paste a default.
          </p>
        </div>
        <div className="ps-approach-item">
          <p className="ps-approach-label">When</p>
          <p className="ps-approach-title">Context and timing</p>
          <p className="ps-approach-body">
            Doing the right thing at the wrong stage costs days. We flag when each
            decision matters and what happens if you defer it.
          </p>
        </div>
      </div>

      <p className="ps-section-heading">Sections</p>
      <div className="ps-cards">
        {SECTIONS.map((s) => (
          <Link key={s.href} href={s.href} className="ps-card">
            <div className="ps-card-accent-bar" />
            <div className="ps-card-top">
              <span className="ps-card-icon">{s.icon}</span>
              <span className={`ps-status ps-status-${s.status}`}>
                {s.status === "live" ? "Live" : "Soon"}
              </span>
            </div>
            <p className="ps-card-title">{s.title}</p>
            <p className="ps-card-desc">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
