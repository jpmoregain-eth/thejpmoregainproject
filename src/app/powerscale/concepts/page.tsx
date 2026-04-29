"use client";

import { useToggle } from "../_components/ToggleContext";

const TOPICS = [
  {
    title: "Architecture",
    simple:
      "PowerScale is a cluster of nodes -- think of each node as a storage brick. They all talk to each other over a fast private network and present as a single filesystem to your users. Add more nodes, get more capacity and performance automatically.",
    expert:
      "OneFS implements a distributed filesystem across N nodes using a journaled, byte-range locking architecture. Data is striped at the block level across nodes in a protection group (N+M/2x2), with front-end client access via SmartConnect DNS round-robin across node IP pools. Internal node communication runs over a separate InfiniBand or 25GbE backend fabric.",
  },
  {
    title: "Data Protection",
    simple:
      "PowerScale protects your data by spreading redundant copies across multiple nodes. Even if a drive fails -- or a whole node -- you do not lose anything. You can dial up or down how much protection you need depending on how much storage you are willing to trade for safety.",
    expert:
      "OneFS uses Forward Error Correction (FEC) rather than traditional RAID. The default N+2:1 protection writes data with 2 forward-error correction symbols per stripe, tolerating 2 simultaneous drive failures or 1 node failure. Higher protection levels (N+3:1, N+3:1/2x2) increase resilience at the cost of effective capacity. MTTDL calculations are derivable from protection level, node count, and drive rebuild rates.",
  },
  {
    title: "Storage Pools and Tiering",
    simple:
      "Not all data is equally important at all times. PowerScale lets you automatically move cold files to cheaper storage while keeping hot data on fast SSDs -- without you having to do it manually. You define the rules; OneFS does the moving.",
    expert:
      "SmartPools manages file placement via file pool policies evaluated against node pool tiers. Policies match on file attributes (age, access time, size, path, type) and direct data to designated node pools. Tiering operates via a background job that re-evaluates and moves data according to policy. SSD strategy can be set per pool: metadata read/write acceleration vs. L3 cache vs. data placement.",
  },
];

export default function ConceptsPage() {
  const { mode } = useToggle();

  return (
    <div>
      <div className="ps-ph-header">
        <p className="ps-eyebrow">Foundation</p>
        <h1 className="ps-ph-title">Concepts</h1>
        <p className="ps-ph-desc">
          How PowerScale actually works -- from the ground up. Toggle between Simple and
          Expert mode in the top bar. Your preference is saved automatically.
        </p>
        <div className="ps-ph-why-block">
          <strong>Why start here</strong>
          You can follow a guide without understanding the underlying model, but you
          will not know why it breaks -- or what to change when your situation does not
          match the example. These concepts are the mental model everything else builds on.
        </div>
      </div>

      {TOPICS.map((topic) => (
        <div key={topic.title} className="ps-toggle-demo" style={{ marginBottom: "1rem" }}>
          <div className="ps-toggle-demo-head">
            <span className="ps-toggle-demo-title">{topic.title}</span>
            <span
              style={{
                fontFamily: "var(--ps-font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ps-text-muted)",
              }}
            >
              {mode === "simple" ? "Simple mode" : "Expert mode"}
            </span>
          </div>
          <div className="ps-toggle-demo-body">
            <p className="ps-toggle-content">
              {mode === "simple" ? topic.simple : topic.expert}
            </p>
          </div>
        </div>
      ))}

      <p className="ps-outline-label" style={{ marginTop: "2rem" }}>
        More topics coming
      </p>
      <div className="ps-outline">
        {[
          "Networking -- SmartConnect, access zones, frontend/backend fabric",
          "Replication and Business Continuity -- SyncIQ, RPO/RTO, failover",
          "Security -- SmartLock, auth providers, auditing",
          "Protocols -- NFS, SMB, S3, HDFS, multi-protocol access",
        ].map((t, i) => (
          <div key={i} className="ps-outline-item">
            <span className="ps-outline-num">{String(i + 4).padStart(2, "0")}</span>
            <span className="ps-outline-title">{t}</span>
            <span className="ps-outline-bar" />
          </div>
        ))}
      </div>
    </div>
  );
}
