import type { Metadata } from "next";

export const metadata: Metadata = { title: "Design" };

const S = {
  h2: {
    fontFamily: "var(--ps-font-display)",
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "var(--ps-text-bright)",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    marginBottom: "0.875rem",
    marginTop: "2.25rem",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid var(--ps-border)",
  } as React.CSSProperties,
  h3: {
    fontFamily: "var(--ps-font-display)",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "var(--ps-text-bright)",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    marginBottom: "0.625rem",
    marginTop: "1.5rem",
  } as React.CSSProperties,
  p: {
    fontSize: "0.9rem",
    lineHeight: 1.75,
    color: "var(--ps-text)",
    marginBottom: "0.875rem",
  } as React.CSSProperties,
  note: {
    background: "var(--ps-surface)",
    border: "1px solid var(--ps-border)",
    borderLeft: "3px solid var(--ps-accent)",
    borderRadius: "0 5px 5px 0",
    padding: "0.875rem 1.125rem",
    fontSize: "0.825rem",
    color: "var(--ps-text)",
    lineHeight: 1.65,
    marginBottom: "1rem",
  } as React.CSSProperties,
  warn: {
    background: "rgba(251,176,64,0.06)",
    border: "1px solid rgba(251,176,64,0.2)",
    borderLeft: "3px solid var(--ps-amber)",
    borderRadius: "0 5px 5px 0",
    padding: "0.875rem 1.125rem",
    fontSize: "0.825rem",
    color: "var(--ps-text)",
    lineHeight: 1.65,
    marginBottom: "1rem",
  } as React.CSSProperties,
  label: {
    fontFamily: "var(--ps-font-mono)",
    fontSize: "0.6rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    marginRight: "0.5rem",
  } as React.CSSProperties,
  code: {
    fontFamily: "var(--ps-font-mono)",
    fontSize: "0.8rem",
    background: "var(--ps-surface-2)",
    border: "1px solid var(--ps-border)",
    color: "var(--ps-accent)",
    padding: "1px 6px",
    borderRadius: "3px",
  } as React.CSSProperties,
  codeBlock: {
    background: "var(--ps-surface)",
    border: "1px solid var(--ps-border)",
    borderRadius: "6px",
    padding: "1rem 1.25rem",
    fontFamily: "var(--ps-font-mono)",
    fontSize: "0.8rem",
    color: "var(--ps-text-bright)",
    lineHeight: 1.7,
    overflowX: "auto" as const,
    marginBottom: "1rem",
    whiteSpace: "pre" as const,
  } as React.CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "0.825rem",
    marginBottom: "1.25rem",
  } as React.CSSProperties,
  th: {
    fontFamily: "var(--ps-font-mono)",
    fontSize: "0.6rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "var(--ps-text-muted)",
    padding: "0.5rem 0.875rem",
    textAlign: "left" as const,
    borderBottom: "1px solid var(--ps-border)",
    background: "var(--ps-surface)",
  } as React.CSSProperties,
  td: {
    padding: "0.55rem 0.875rem",
    color: "var(--ps-text)",
    borderBottom: "1px solid var(--ps-border-subtle)",
    verticalAlign: "top" as const,
  } as React.CSSProperties,
};

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div style={S.note}>
      <span style={{ ...S.label, color: "var(--ps-accent)" }}>Note</span>
      {children}
    </div>
  );
}

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <div style={S.warn}>
      <span style={{ ...S.label, color: "var(--ps-amber)" }}>Warning</span>
      {children}
    </div>
  );
}

function Why({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(56,189,248,0.04)",
      border: "1px solid rgba(56,189,248,0.12)",
      borderRadius: "6px",
      padding: "0.875rem 1.125rem",
      fontSize: "0.825rem",
      color: "var(--ps-text)",
      lineHeight: 1.65,
      marginBottom: "1.25rem",
    }}>
      <span style={{ ...S.label, color: "var(--ps-accent)" }}>Why this matters</span>
      {children}
    </div>
  );
}

function When({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(52,211,153,0.04)",
      border: "1px solid rgba(52,211,153,0.12)",
      borderRadius: "6px",
      padding: "0.875rem 1.125rem",
      fontSize: "0.825rem",
      color: "var(--ps-text)",
      lineHeight: 1.65,
      marginBottom: "1.25rem",
    }}>
      <span style={{ ...S.label, color: "var(--ps-green)" }}>When to use</span>
      {children}
    </div>
  );
}

function Avoid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(251,176,64,0.04)",
      border: "1px solid rgba(251,176,64,0.12)",
      borderRadius: "6px",
      padding: "0.875rem 1.125rem",
      fontSize: "0.825rem",
      color: "var(--ps-text)",
      lineHeight: 1.65,
      marginBottom: "1.25rem",
    }}>
      <span style={{ ...S.label, color: "var(--ps-amber)" }}>When to avoid</span>
      {children}
    </div>
  );
}

export default function DesignPage() {
  return (
    <div>
      {/* Header */}
      <div className="ps-ph-header">
        <p className="ps-eyebrow">Guide</p>
        <h1 className="ps-ph-title">Design</h1>
        <p className="ps-ph-desc">
          The decisions you make before touching hardware. Cluster sizing, node selection,
          protection planning, SmartPools architecture, and network design -- getting
          these right before deployment is far cheaper than fixing them after.
        </p>
        <div className="ps-ph-why-block">
          <strong>Why design matters more than most people think</strong>
          PowerScale is highly flexible -- but flexibility has limits. Some design decisions,
          like choosing the wrong node type for a workload or setting up SmartPools tiers
          incorrectly, are expensive to reverse once data is on the cluster. Others, like
          a wrong protection level, silently consume more capacity than planned.
          The goal of this section is to give you the reasoning behind each major design
          decision so you can make the right call for your specific environment -- not just
          copy a reference architecture that was designed for someone else.
        </div>
      </div>

      {/* 1. Before you size anything */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>Before you size anything: workload profiling</h2>
        <p style={S.p}>
          Sizing a PowerScale cluster without understanding the workload is the single most
          common design mistake. Capacity is easy to calculate. What is hard -- and what
          actually determines whether the cluster performs well -- is understanding how
          data is accessed, not just how much of it there is.
        </p>
        <p style={S.p}>Answer these questions before any sizing conversation:</p>

        <h3 style={S.h3}>File characteristics</h3>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>What is the typical file size?</strong> -- Files under 128KB are mirrored by OneFS rather than erasure-coded, which means they consume more raw capacity per byte of usable data. A workload dominated by small files needs more raw capacity than the headline efficiency numbers suggest.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>How many files total, and per directory?</strong> -- OneFS supports up to one million files per directory, but the recommended limit for predictable performance is 100,000. Workloads that pile millions of small files into flat directory structures (EDA, render farms, genomics) create metadata pressure that changes the node type recommendation.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>What is the active vs. cold data ratio?</strong> -- Typically around 30% of a dataset is actively accessed; 70% is cold. This ratio drives tier design.</li>
        </ul>

        <h3 style={S.h3}>Access patterns</h3>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Streaming or random?</strong> -- Sequential large-file reads (video, backup, genomics) have very different hardware requirements than random small-block workloads (databases, EDA). Streaming benefits from high spindle count and aggressive prefetch; random access needs low-latency storage and benefits from SSD.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Read-heavy or write-heavy?</strong> -- Write-heavy workloads (video ingest, HPC scratch) stress the backend differently than predominantly read workloads (media serving, backup restore).</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Concurrent clients or single large jobs?</strong> -- Many concurrent small clients stress metadata; fewer large sequential jobs stress throughput. This determines whether you need more nodes for IOPS or bigger drives for raw capacity.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Protocol?</strong> -- NFS, SMB, S3, or HDFS each have different performance characteristics on OneFS. Multi-protocol workloads add design complexity around access zones and authentication.</li>
        </ul>

        <h3 style={S.h3}>Growth and lifecycle</h3>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>How fast does data grow?</strong> -- Plan for at least 3 years of growth. Running a cluster above 80-85% utilization causes performance degradation -- factor this into usable capacity targets.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>How long is data retained?</strong> -- Long retention with infrequent access argues for archive nodes. Short retention with frequent re-use argues for performance nodes.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Is there a DR requirement?</strong> -- SyncIQ replication to a second cluster roughly doubles the storage footprint. Factor this in before signing off on a sizing.</li>
        </ul>
      </div>

      {/* 2. Node type selection */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>Node type selection</h2>
        <Why>
          Choosing the wrong node type is one of the most expensive design mistakes on a PowerScale
          project. You cannot easily convert an archive cluster into a performance cluster -- the
          hardware is fundamentally different. Getting this right at design time costs nothing.
          Getting it wrong after hardware is ordered costs weeks and budget.
        </Why>

        <p style={S.p}>
          Current-gen PowerScale nodes fall into three tiers. In a heterogeneous cluster,
          multiple node types coexist in the same cluster and SmartPools manages data placement
          between them automatically.
        </p>

        <h3 style={S.h3}>F-Series (All-Flash)</h3>
        <When>
          High-IOPS workloads, metadata-intensive applications, low-latency requirements,
          AI/ML training datasets, EDA, large file counts, workloads where SSD is the right
          media for data (not just metadata acceleration).
        </When>
        <Avoid>
          Bulk cold storage, video archive, backup repositories. All-flash for cold data is
          expensive and the performance advantage is wasted. Use F-series for the hot tier
          and add H or A nodes for capacity.
        </Avoid>

        <h3 style={S.h3}>H-Series (Hybrid)</h3>
        <When>
          Mixed workloads requiring a balance of throughput and capacity. Video production
          workflows, general-purpose NAS, environments with a mix of hot and warm data
          that benefits from SSD-accelerated metadata alongside HDD capacity.
        </When>
        <Avoid>
          Extreme low-latency requirements (use F-series) or bulk cold archive where
          maximum GB/$ is the only concern (use A-series).
        </Avoid>

        <h3 style={S.h3}>A-Series (Archive)</h3>
        <When>
          Cold and nearline data, long-term retention, compliance archives, backup targets,
          any workload where cost-per-TB is the primary driver and access frequency is low.
          Deep archive configurations (A3100, A3000) maximize raw capacity per rack unit.
        </When>
        <Avoid>
          Any workload with regular random access or low-latency requirements. Archive
          nodes have high spindle count but low per-spindle performance -- sequential
          streaming is fine, random access is not.
        </Avoid>

        <h3 style={S.h3}>Mixing node types in the same cluster</h3>
        <p style={S.p}>
          Heterogeneous clusters are common and well-supported. The typical pattern is a
          performance tier (F-series) and a capacity tier (H or A-series), with SmartPools
          automatically moving data between them based on file pool policies. There are
          a few constraints to understand:
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li>Nodes group into node pools by hardware equivalence -- family, chassis size, generation, RAM, and drive capacity/count must match within a pool. You cannot mix F910 and F710 in the same node pool.</li>
          <li>Minimum node pool sizes: 3 nodes for self-contained (F-series), 4 nodes (1 chassis) for modular (H/A-series).</li>
          <li>Avoid creating tiers that mix node pools with and without SSDs -- the SSD strategy configuration becomes ambiguous.</li>
          <li>Due to architectural differences, there are no node compatibilities between modular chassis (e.g. F810) and self-contained nodes (e.g. F910). These must be separate node pools.</li>
        </ul>

        <Note>
          When adding a new node to a cluster, it is automatically allocated to a matching node pool
          based on hardware equivalence. If no matching pool exists, the node remains unprovisioned
          until enough similar nodes are added to meet the minimum pool size.
        </Note>
      </div>

      {/* 3. Protection level planning */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>Protection level planning</h2>
        <Why>
          Protection level directly affects both resilience and storage efficiency. Too low and
          you risk data loss; too high and you waste capacity. The right protection level is not
          just about tolerating failures -- it is about matching the probability of different failure
          modes to the hardware configuration. High-density chassis nodes (H7100, A3100)
          are far more likely to experience multiple simultaneous drive failures than a single
          node failure. This changes the right answer compared to a cluster of small self-contained nodes.
        </Why>

        <p style={S.p}>
          OneFS uses Forward Error Correction (FEC) -- a Reed-Solomon erasure coding scheme --
          for data protection. Unlike RAID, protection is applied at the file level and stripes
          are distributed across nodes, not drives within a single enclosure.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              {["Protection Level", "Tolerates", "Min Nodes", "Recommended For"].map(h => (
                <th key={h} style={S.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["+1n", "1 drive OR 1 node", "3", "Not recommended -- minimum viable only"],
              ["+2d:1n", "2 drives OR 1 node", "3", "Standard recommendation for Gen6 hardware"],
              ["+2n", "2 drives OR 2 nodes", "4", "Higher node resilience requirement"],
              ["+3d:1n", "3 drives OR 1 node", "3", "High-density chassis with many drives per node"],
              ["+3d:1n1d", "3 drives OR 1 node + 1 drive", "3", "Recommended for high-density Gen6 chassis"],
              ["+3n", "3 drives OR 3 nodes", "6", "Very high node resilience requirement"],
              ["+4d:1n", "4 drives OR 1 node", "3", "Extreme drive density configurations"],
              ["+4d:2n", "4 drives OR 2 nodes", "4", "Large clusters with high density"],
              ["+4n", "4 drives OR 4 nodes", "8", "Maximum resilience, significant capacity overhead"],
              ["2x to 8x", "Mirror copies", "2-8", "Metadata (default), small files, specific workloads"],
            ].map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{
                    ...S.td,
                    fontFamily: i === 0 ? "var(--ps-font-mono)" : undefined,
                    color: i === 0 ? "var(--ps-accent)" : i === 3 ? "var(--ps-text)" : "var(--ps-text)",
                    fontSize: "0.825rem",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Choosing the right level for your hardware</h3>
        <p style={S.p}>
          The recommended protection level is marked as "Suggested" in the OneFS WebUI
          under Data Management {">"} Storage Pools {">"} SmartPools for each node pool.
          Always start here. The suggestion is calculated based on actual cluster configuration
          and balances MTTDL against capacity overhead.
        </p>
        <p style={S.p}>
          The key distinction for current-gen hardware is between hybrid protection levels
          (like +2d:1n and +3d:1n1d) and node-failure-tolerant levels (like +2n). Hybrid
          schemes tolerate either multiple drive failures or a node failure -- whichever
          happens first. For high-density chassis nodes with 60-80 drives per chassis,
          the probability of multiple simultaneous drive failures is higher than the probability
          of an entire node failure. This makes +2d:1n and +3d:1n1d the right default for
          most Gen6 configurations.
        </p>

        <Warn>
          Increasing a cluster protection level after data is already on the cluster is possible
          but triggers a restriping operation that consumes backend bandwidth and takes time
          proportional to the amount of data on the cluster. Plan the right protection level
          at design time -- changing it on a full production cluster is disruptive.
        </Warn>

        <h3 style={S.h3}>Virtual Hot Spare (VHS)</h3>
        <p style={S.p}>
          VHS reserves a percentage of each pool capacity for data reconstruction and
          reprotection in the event of a drive or node failure. Without VHS, a cluster that
          is near full cannot rebuild failed data because there is nowhere to write the
          reconstructed stripes.
        </p>
        <p style={S.p}>
          The recommended minimum VHS allocation is 10%. This means that if VHS is
          set to 10%, spillover to the next pool begins at 90% capacity -- factor this into
          usable capacity calculations. A cluster that is "90% full" from a raw perspective
          is actually full from an operational perspective.
        </p>
      </div>

      {/* 4. SmartPools design */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>SmartPools design</h2>
        <Why>
          SmartPools is what makes a heterogeneous cluster manageable. Without it, you would
          need to manually decide where every file lives and move it manually as it ages.
          With it, you define rules once and the cluster moves data automatically. But SmartPools
          is only as good as the policies you give it -- poorly designed policies cause data to
          end up in the wrong tier, consume unexpected capacity, or trigger constant unnecessary
          movement.
        </Why>

        <h3 style={S.h3}>Tiers and node pools</h3>
        <p style={S.p}>
          The SmartPools hierarchy goes: disk pools {">"} node pools {">"} tiers.
          Disk pools are managed automatically by OneFS and cannot be configured.
          Node pools group equivalent hardware. Tiers group node pools into logical
          storage classes (hot, warm, cold).
        </p>
        <p style={S.p}>
          Most production clusters use two to four tiers. A simple two-tier design
          (performance + archive) handles the majority of use cases. Adding more tiers
          adds management complexity without proportional benefit.
        </p>

        <Warn>
          Do not exceed five tiers. Although OneFS supports more, going beyond five tiers
          can affect system performance. Similarly, limit file pool policies to thirty or fewer
          -- policies beyond this number can impact the SmartPools job performance.
        </Warn>

        <h3 style={S.h3}>File pool policies</h3>
        <p style={S.p}>
          File pool policies are the rules that tell SmartPools where to place data.
          They evaluate in order -- the first policy to match a file is the one applied
          (first-match wins). Policy order matters significantly.
        </p>
        <p style={S.p}>Key design rules:</p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Direct the default file pool policy to the performance tier.</strong> New data lands on the fastest available storage by default, then ages down to cheaper tiers over time. This is the correct pattern.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Use access time (atime) for tiering criteria, not modify time (mtime).</strong> Modify time tracks when a file was last changed; access time tracks when it was last read. For tiering purposes, you want to move files that have not been accessed -- atime with a minimum of 1 day precision is the right signal.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Enable access time tracking as early as possible.</strong> If access time tracking is not enabled when data is written, you have no atime data to tier against. Enable it at cluster formation, not after.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>For deep archive strategies, add a TYPE=FILE clause to aging policies.</strong> This ensures only file data is moved to the archive tier -- metadata and directories stay on the performance tier, keeping lookups fast even as file content ages down.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Policy constraints:</strong> Each policy can have up to 3 OR disjunctions, with up to 5 AND conditions per OR term. Design policies that stay within these limits.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Target tiers, not specific node pools.</strong> If node pools are combined into tiers, write file pool rules against the tier -- not against individual pools within it. This allows the cluster to balance across all pools in the tier automatically.</li>
        </ul>

        <Note>
          The SmartPools job runs once per day by default. If your workload requires more
          frequent tiering (e.g. ingest workflows that need data moved quickly), configure
          the job to run multiple times per day. For large clusters where SmartPools takes
          more than a day to run, consider the FilePolicy + IndexUpdate job approach instead --
          it uses a file system index for more efficient changelist-based policy application.
        </Note>

        <h3 style={S.h3}>Data spillover</h3>
        <p style={S.p}>
          When a node pool fills up, writes spill over to the next available pool by default.
          This ensures continuity but can result in data landing in the wrong tier silently.
          If workload isolation between business units or data classification between tiers
          is a requirement, disable spillover on the relevant pools -- but only after confirming
          there is sufficient capacity headroom, since a full pool with spillover disabled
          will reject writes.
        </p>
        <p style={S.p}>
          Keep utilization below 90% per pool. With VHS at 10%, spillover effectively
          begins at 90% anyway -- the remaining 10% is reserved for reconstruction.
        </p>
      </div>

      {/* 5. SSD strategy */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>SSD strategy</h2>
        <Why>
          On hybrid nodes (H-series), SSDs serve a different purpose than on all-flash nodes.
          You have a choice: use the SSDs for metadata acceleration (SmartPools strategy), or
          use them as a read cache (L3/SmartFlash). These are mutually exclusive per node pool --
          you cannot mix both on the same pool. Choosing the wrong one for your workload
          means leaving performance on the table, and switching later requires data movement
          and potential downtime.
        </Why>

        <h3 style={S.h3}>Metadata acceleration (SmartPools SSD strategy)</h3>
        <p style={S.p}>
          Uses SSDs to store metadata -- inodes, directory trees, B-trees. File data stays on HDDs.
          Two variants:
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Metadata read acceleration</strong> -- one mirror of metadata on SSD. Improves read-heavy metadata operations (lookups, getattr, access). Lower SSD consumption.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Metadata read and write acceleration</strong> -- all mirrors of metadata on SSD. Additionally improves write-heavy metadata operations (create, delete, mkdir). Requires 6-10% of pool capacity on SSD. Recommended when snapshots are enabled, as it significantly accelerates snapshot deletion.</li>
        </ul>

        <When>
          Workloads with high metadata operation rates: large file counts, frequent creates/deletes,
          deep directory trees, snapshot-heavy environments. EDA, render pipelines, genomics pipelines.
        </When>

        <h3 style={S.h3}>L3 cache (SmartFlash)</h3>
        <p style={S.p}>
          Uses the entire SSD as an eviction cache for the L2 RAM cache. As L2 cache blocks
          age out of RAM, they are written to the SSD L3 cache before being evicted entirely.
          This effectively extends the read cache far beyond what RAM alone can provide.
        </p>
        <When>
          Workloads with repeated random reads against a large working set that does not fit in RAM.
          When read cache hit rate matters more than metadata write performance. When SSD wear is a
          concern -- L3 cache writes in a linear and predictable pattern, resulting in lower wear
          than random file system writes.
        </When>
        <Avoid>
          All-flash node pools (not eligible for L3). Node pools with 16 or more SSDs (not supported).
          Workloads that are primarily write-heavy or sequential (L3 cache benefits are minimal).
          Do not convert to L3 cache from metadata acceleration unless SSDs are either seriously
          underutilized or oversubscribed.
        </Avoid>

        <Note>
          All SSDs within a node pool must be the same size if using L3 cache. All SSDs in
          the pool must be committed to either L3 or SmartPools data strategies -- you cannot
          mix both within the same node pool.
        </Note>

        <h3 style={S.h3}>Data on SSDs (All-flash strategy)</h3>
        <p style={S.p}>
          On F-series all-flash nodes, all data and metadata resides on SSD automatically --
          there are no HDDs. SmartPools SSD strategy does not apply in the same way.
          For mixed clusters, configure the default file pool policy to write to the F-series
          tier for hot data, and the H or A-series tier for cold data.
        </p>
      </div>

      {/* 6. Network design */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>Network design</h2>
        <p style={S.p}>
          Network design for PowerScale has two distinct layers: the frontend client network
          and the backend intra-cluster fabric. These must never share infrastructure --
          backend traffic on the frontend network creates performance and stability problems
          that are very hard to diagnose.
        </p>

        <h3 style={S.h3}>Frontend network</h3>
        <p style={S.p}>
          The frontend network carries all client traffic -- NFS, SMB, S3, HDFS.
          Design considerations:
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Aggregate bandwidth</strong> -- size the uplinks from access switches proportionally to the number of nodes. A 12-node cluster with 25GbE per node needs uplinks capable of handling the aggregate frontend throughput. Avoid bottlenecks at the access-to-distribution layer.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>MTU consistency</strong> -- configure the same MTU end-to-end from client to cluster. Jumbo frames (9000 MTU) improve throughput for large sequential workloads. Standard MTU (1500) is appropriate for general workloads. A mismatch causes fragmentation that degrades performance at high load and is nearly invisible at low load.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>VLANs</strong> -- use separate VLANs for different access zones if workload isolation is required. Keep only necessary VLANs trunked to each access port -- pruning unnecessary VLANs reduces broadcast traffic.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Flow control</strong> -- OneFS listens for pause frames by default but does not send them. Configure flow control consistently across the network path. Inconsistent flow control configuration can cause retransmits and throughput degradation.</li>
        </ul>

        <h3 style={S.h3}>Link aggregation</h3>
        <p style={S.p}>
          Link aggregation on PowerScale combines multiple physical interfaces into a single
          logical interface for redundancy and aggregate bandwidth across multiple clients.
          A critical misconception to address upfront:
        </p>
        <Warn>
          Link aggregation does NOT increase per-session bandwidth. A single TCP session
          is confined to a single physical link -- the session hash determines which link it
          uses and it stays there. The aggregate bandwidth benefit is only realized across
          multiple simultaneous sessions from different clients. If a workload is dominated
          by single large sequential transfers from one client, link aggregation provides
          redundancy but no throughput gain for that transfer.
        </Warn>
        <p style={S.p}>
          OneFS supports round-robin, failover, load-balance, and LACP aggregation modes.
          Use LACP where the switch supports it -- it provides the most reliable link monitoring.
          For SMBv3 workloads, note that SMBv3 Multichannel provides automatic multi-path
          throughput without requiring link aggregation configuration on the cluster side.
        </p>

        <h3 style={S.h3}>SmartConnect design</h3>
        <p style={S.p}>
          SmartConnect is how clients connect to the cluster -- it presents a single DNS name
          and distributes connections across nodes using configurable allocation policies.
          Getting SmartConnect right at design time saves a lot of pain during implementation.
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>DNS delegation</strong> -- SmartConnect requires a DNS delegation zone. The cluster's SmartConnect service IP responds to DNS queries for the zone with node IPs. Plan this with the DNS team before implementation.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>One SmartConnect zone per access zone</strong> -- each access zone should have its own SmartConnect zone so client connections are logically separated. SyncIQ replication should use a dedicated static zone separate from client traffic zones.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Static vs. dynamic zones</strong> -- dynamic zones use connection-count or throughput-based balancing. Static zones assign a fixed IP per node. SyncIQ should always use a static zone so replication traffic goes to specific nodes without DNS round-robin interference.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Source-based routing (SBR)</strong> -- required when nodes have interfaces on multiple subnets. Without SBR, return traffic may egress from the wrong interface, causing intermittent connectivity issues that are difficult to diagnose. Configure SBR before enabling multi-subnet IP pools.</li>
        </ul>

        <h3 style={S.h3}>Backend fabric</h3>
        <p style={S.p}>
          The backend fabric carries intra-cluster traffic: data stripe writes, metadata,
          journal replication. It must be on an isolated network -- never shared with
          client traffic.
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li>Current F-series nodes (F910, F710, F210) use a 100GbE Ethernet backend</li>
          <li>H-series and A-series support either InfiniBand (QDR 40Gb) or Ethernet backend -- confirm which is ordered and design the backend switches accordingly</li>
          <li>For clusters exceeding 22 nodes, a Leaf-Spine topology is required rather than standard top-of-rack -- account for this in rack and cabling design</li>
        </ul>
      </div>

      {/* 7. Capacity planning */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>Capacity planning</h2>
        <Why>
          The gap between raw TB and usable TiB surprises almost every first-time buyer.
          Protection overhead, VHS reservation, system overhead, and the binary/decimal
          conversion all compound. A cluster that looks like it has plenty of room on paper
          can be operationally full at 75-80% of raw.
        </Why>

        <p style={S.p}>
          Use the{" "}
          <a href="/powerscale/tools/sizing-calculator"
            style={{ color: "var(--ps-accent)", textDecoration: "underline" }}>
            Cluster Sizing Calculator
          </a>
          {" "}in the Tools section to model capacity accurately. Key deductions from raw capacity:
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Decimal to binary conversion</strong> -- drive manufacturers rate capacity in decimal TB (10^12 bytes); OneFS reports in binary TiB (2^40 bytes). 1 TB raw = approximately 0.909 TiB.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Protection overhead</strong> -- varies by protection level. +2d:1n on a typical cluster carries roughly 15-20% overhead. Mirroring carries 50-75% overhead.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Virtual Hot Spare</strong> -- minimum 10% reservation per pool.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>System overhead</strong> -- approximately 2% for journals, metadata structures, and snapshots.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>Operational headroom</strong> -- plan to operate below 80% utilization. Above 85% there is a OneFS alert threshold; above 90% performance degrades as the file system has less room to optimally place new data.</li>
        </ul>

        <p style={S.p}>
          A typical OneFS cluster delivers 75-90% space efficiency for a mixed-file-size dataset.
          As a practical planning rule: size for 80% efficiency and 80% utilization target.
          That means the usable capacity available to users is roughly 64% of raw.
        </p>

        <h3 style={S.h3}>When to add nodes vs. drives</h3>
        <p style={S.p}>
          PowerScale can grow by adding nodes or by adding drives to existing nodes (where
          supported). The right choice depends on what is constrained:
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              {["Constraint", "Solution", "Why"].map(h => (
                <th key={h} style={S.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Running out of capacity only", "Add drives to existing nodes (if supported)", "Cheaper than adding nodes. Does not increase node count or throughput."],
              ["Running out of throughput or IOPS", "Add nodes", "Each node adds CPU, memory, NICs, and spindles. More nodes = more parallel I/O."],
              ["Running out of both", "Add nodes with high-capacity drives", "Best of both. Also increases backend parallelism."],
              ["Metadata performance", "Add nodes or upgrade SSD strategy", "More nodes distribute the metadata load. SSD acceleration reduces metadata latency per operation."],
            ].map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{
                    ...S.td,
                    color: i === 0 ? "var(--ps-text-bright)" : "var(--ps-text)",
                    fontSize: "0.825rem",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 8. Common pitfalls */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={S.h2}>Common design pitfalls</h2>
        <table style={S.table}>
          <thead>
            <tr>
              {["Pitfall", "What goes wrong", "How to avoid it"].map(h => (
                <th key={h} style={S.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Sizing for raw capacity, not usable",
                "Cluster appears full well before the expected capacity is reached",
                "Use the sizing calculator. Plan for 80% efficiency and 80% utilization target.",
              ],
              [
                "Not enabling atime tracking at cluster formation",
                "File pool policies based on access time have no data to act on -- tiering does not work as designed",
                "Enable access time tracking before data is written. Enable 24-hour precision to avoid performance impact.",
              ],
              [
                "Too many file pool policies",
                "SmartPools job takes too long, affects cluster performance",
                "Keep policies at 30 or fewer. Combine similar rules. Consider FilePolicy+IndexUpdate for large clusters.",
              ],
              [
                "Mixing SSD and non-SSD node pools in the same tier",
                "SSD strategy configuration becomes ambiguous and may not behave as expected",
                "Create separate tiers for pools with and without SSDs.",
              ],
              [
                "Link aggregation expected to increase single-session throughput",
                "Customer reports no throughput improvement after implementing LACP",
                "Set correct expectations: link aggregation benefits aggregate multi-client throughput, not individual sessions.",
              ],
              [
                "SmartConnect zone not planned before implementation",
                "DNS delegation not ready at implementation time, delays go-live",
                "Finalise SmartConnect zone names and service IPs during design. Get DNS team involved early.",
              ],
              [
                "Protection level chosen without considering hardware density",
                "Wrong protection level for chassis density, either underprotected or wasting capacity on overhead",
                "Use the WebUI suggested protection level for each node pool. For high-density chassis, prefer +2d:1n or +3d:1n1d.",
              ],
              [
                "No VHS allocation planned",
                "Cluster cannot rebuild failed data when near-full -- a failure during high utilization causes data loss risk",
                "Always allocate minimum 10% VHS per pool. Factor this into usable capacity targets.",
              ],
            ].map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{
                    ...S.td,
                    fontFamily: i === 0 ? "var(--ps-font-mono)" : undefined,
                    color: i === 0 ? "var(--ps-amber)" : "var(--ps-text)",
                    fontSize: "0.825rem",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
