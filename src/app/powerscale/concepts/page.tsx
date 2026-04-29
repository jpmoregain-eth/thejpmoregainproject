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
  {
    title: "Networking",
    simple:
      "PowerScale has two separate networks: a frontend network that clients connect to, and a backend network that nodes use to talk to each other internally. SmartConnect is the feature that makes the cluster look like a single address to clients -- it uses DNS to spread connections across all nodes automatically, so no one node becomes a bottleneck.",
    expert:
      "The frontend network is client-facing and carries NFS/SMB/S3 traffic. The backend carries intra-cluster traffic (data stripe writes, metadata, journal) and runs on InfiniBand or dedicated 25GbE. SmartConnect operates as a DNS delegation zone: the cluster's SmartConnect service IP responds to DNS queries with node IPs according to the configured allocation policy (round-robin, CPU utilization, connection count, or throughput). Each SmartConnect zone maps to an IP pool and access zone. Link aggregation (LACP, round-robin, failover) is supported per-node but does not increase per-session bandwidth -- a single TCP session is confined to one physical link. MTU should be consistent end-to-end; jumbo frames (9000 MTU) are recommended for high-throughput workloads. Source-based routing (SBR) must be configured when nodes have interfaces on multiple subnets to ensure return traffic egresses the correct interface.",
  },
  {
    title: "Replication and Business Continuity",
    simple:
      "SyncIQ is PowerScale's built-in replication engine. It copies your data to a second cluster -- at another site -- on a schedule you define. If your primary cluster goes down, you can fail over to the copy. When the primary comes back, you fail back. The key numbers are RPO (how much data you could lose, measured in time) and RTO (how long it takes to get back online).",
    expert:
      "SyncIQ is asynchronous, policy-driven replication built on snapshot differentials. At job start, a source snapshot is taken; the coordinator compares it against the previous run's snapshot to identify changed LINs. Workers on source and target nodes establish TCP connections and transfer only the delta. After completion, the previous snapshot is deleted and the new one becomes 'latest'. Supported topologies: one-to-one, one-to-many, many-to-one, cascaded, and local target. A SyncIQ policy should never be broken without understanding the resync implications -- breaking the association will almost always require a full initial re-sync to re-establish the relationship, which means transferring the entire dataset again. Failover makes the target read-write; failback requires a reverse sync. Superna Eyeglass DR Edition provides orchestration, DNS automation, and runbook execution on top of native SyncIQ for automated failover. SyncIQ bandwidth throttling and performance rules allow coexistence with production workloads.",
  },
  {
    title: "Security",
    simple:
      "PowerScale has a WORM (Write Once, Read Many) feature called SmartLock that prevents files from being changed or deleted until their retention period expires. There are two versions: Enterprise mode, where an admin can still override things in emergencies, and Compliance mode, which locks things down so tightly that not even the root user can touch them -- required for certain financial regulations.",
    expert:
      "SmartLock operates at the directory level within the OneFS filesystem. Enterprise mode preserves root access and allows privileged delete (configurable). Compliance mode disables root (UID 0) entirely; the compadmin sudo account replaces it. Compliance mode is governed by a tamper-proof compliance clock (isi worm cdate) distinct from the system clock, preventing early release of WORM files by clock manipulation. Compliance mode is required for SEC rule 17a-4(f). Key operational constraint: Compliance mode is a one-way conversion -- it cannot be reverted. Enterprise-to-Compliance directory upgrade is allowed; the reverse is not. SyncIQ replication of Compliance SmartLock directories requires the target to also be a Compliance SmartLock directory. Files committed on source are not automatically committed on target after replication -- this must be managed explicitly. RBAC should be configured before converting to Compliance mode to avoid losing administrative access.",
  },
  {
    title: "Protocols",
    simple:
      "PowerScale speaks the same storage languages your applications already use: NFS for Linux/Unix, SMB for Windows, S3 for object storage and cloud-native apps, and HDFS for big data workloads. Multiple protocols can access the same data at the same time, which is rare in the storage world and is one of PowerScale's most useful capabilities.",
    expert:
      "OneFS supports NFS (v3/v4/v4.1), SMB (v2/v3), S3, and HDFS on the same underlying filesystem with concurrent multi-protocol access. SMBv1 is supported but disabled by default and should only be enabled for legacy clients with no alternative. S3 is exposed via a dedicated service on ports 9020 (HTTP) and 9021 (HTTPS). S3 buckets map to OneFS directories via the x-isi-path extended header. OneFS S3 is a subset of AWS S3 -- supported APIs include core CRUD operations, multipart upload, ACLs, and object lock. Unsupported AWS-specific APIs (lifecycle, versioning, replication, website) are silently ignored. SMBv3 Multichannel provides automatic multi-path throughput and does not require link aggregation configuration. NFSv4 with Kerberos requires SmartConnect zone alignment with KDC configuration. Protocol access is scoped per access zone -- a zone can expose only specific protocols on specific IP pools, which is the primary isolation mechanism for multi-tenancy.",
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
    </div>
  );
}
