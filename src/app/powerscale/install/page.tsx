import type { Metadata } from "next";

export const metadata: Metadata = { title: "Install" };

const S = {
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
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
  extLink: {
    color: "var(--ps-accent)",
    textDecoration: "underline",
    fontSize: "0.825rem",
    fontFamily: "var(--ps-font-mono)",
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

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
      <div style={{
        fontFamily: "var(--ps-font-mono)",
        fontSize: "0.7rem",
        fontWeight: 700,
        color: "var(--ps-accent)",
        background: "var(--ps-accent-dim)",
        border: "1px solid rgba(56,189,248,0.2)",
        borderRadius: "4px",
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "2px",
      }}>
        {n}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--ps-text-bright)",
          marginBottom: "0.375rem",
        }}>
          {title}
        </div>
        <div style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--ps-text)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function WhyBlock({ children }: { children: React.ReactNode }) {
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

export default function InstallPage() {
  return (
    <div>
      {/* Page header */}
      <div className="ps-ph-header">
        <p className="ps-eyebrow">Guide</p>
        <h1 className="ps-ph-title">Install</h1>
        <p className="ps-ph-desc">
          From hardware in boxes to a healthy, joined cluster ready for configuration.
          Covers current-generation PowerScale nodes: F-series, H-series, and A-series.
        </p>
        <div className="ps-ph-why-block">
          <strong>Who does this and why you should still read it</strong>
          Physical installation is performed by Dell engineers or certified Dell partner engineers --
          not end customers. This guide exists so customers, architects, and project managers
          understand the full deployment flow, know what questions to ask during planning,
          and can verify the cluster is in the right state when it is handed over for configuration.
          A lot of post-install problems trace back to something that was skipped or done out of
          order during the install phase.
        </div>
      </div>

      {/* 1. Flow overview */}
      <div style={S.section}>
        <h2 style={S.h2}>The install flow</h2>
        <p style={S.p}>
          The install phase runs from site preparation through to a cluster that has passed its
          health check and is running current firmware. The Implement section picks up from there --
          protocol configuration, access zones, and authentication all happen after the cluster is
          healthy and handed over.
        </p>
        <p style={S.p}>In order:</p>
        <ol style={{ paddingLeft: "1.5rem", color: "var(--ps-text)", lineHeight: 2, fontSize: "0.9rem" }}>
          <li>Site preparation -- verify facility readiness before hardware ships</li>
          <li>Rack and rail installation -- physical mounting of chassis and nodes</li>
          <li>Cabling -- frontend, backend, and management connections</li>
          <li>Initial cluster formation -- serial console, configuration wizard</li>
          <li>Health check -- verify cluster is clean before handover</li>
          <li>Firmware update -- Node Firmware Package and Drive Support Package</li>
        </ol>
        <Note>
          Always verify the exact procedure for your specific node model against the current
          PowerScale Node Installation Guide on the{" "}
          <a href="https://infohub.delltechnologies.com" target="_blank" rel="noopener noreferrer" style={S.extLink}>
            PowerScale Info Hub
          </a>
          . Hardware generations evolve and specific steps may differ.
        </Note>
      </div>

      {/* 2. Node types */}
      <div style={S.section}>
        <h2 style={S.h2}>Current-gen node types</h2>
        <p style={S.p}>
          Understanding the node families matters during planning because chassis format, minimum
          cluster size, and expansion increments differ -- and some mistakes here are expensive to undo.
        </p>

        <WhyBlock>
          Hybrid and Archive nodes (H and A series) use a shared chassis where multiple compute
          modules share drive sleds in a 4U enclosure. This means you cannot just add a single node
          like you can with F-series -- you must add in the increments the chassis supports. Getting
          this wrong during sizing leads to either over-ordering hardware or a cluster that cannot
          grow the way the customer expects.
        </WhyBlock>

        <h3 style={S.h3}>F-Series (All-Flash)</h3>
        <p style={S.p}>
          F-series nodes are self-contained 1U or 2U units. Each node is independent -- you add
          one node at a time, which makes capacity planning simpler and growth more granular.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              {["Node", "Form factor", "Min cluster", "Drive slots", "Use case"].map(h => (
                <th key={h} style={S.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["F210", "1U", "3 nodes", "4x NVMe", "Entry-level / edge flash"],
              ["F710", "1U", "3 nodes", "10x NVMe", "Mid-range flash"],
              ["F910", "2U", "3 nodes", "24x NVMe", "High-density flash, AI workloads"],
              ["F600", "1U", "3 nodes", "8x NVMe", "Inline dedupe and compression"],
              ["F900", "2U", "3 nodes", "24x NVMe", "High-performance flash"],
              ["F200", "1U", "3 nodes", "4x NVMe", "Remote office / branch office"],
            ].map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{
                    ...S.td,
                    fontFamily: i === 0 ? "var(--ps-font-mono)" : undefined,
                    color: i === 0 ? "var(--ps-text-bright)" : "var(--ps-text)",
                    fontSize: i === 0 ? "0.875rem" : "0.825rem",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>H-Series (Hybrid) and A-Series (Archive)</h3>
        <p style={S.p}>
          H and A series use a shared 4U chassis where drive sleds are distributed across
          compute modules. The chassis ships fully assembled from the factory.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              {["Node", "Chassis", "Min cluster", "Expansion", "Use case"].map(h => (
                <th key={h} style={S.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["H710 / H700", "4U standard", "4 nodes", "2-node increments", "Hybrid performance"],
              ["H7100 / H7000", "4U deep", "4 nodes", "2-node increments", "High-capacity hybrid, HAMR-ready"],
              ["A310 / A300", "4U standard", "4 nodes", "2-node increments", "Active archive"],
              ["A3100 / A3000", "4U deep", "4 nodes", "2-node increments", "Deep archive, HAMR-ready"],
            ].map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{
                    ...S.td,
                    fontFamily: i === 0 ? "var(--ps-font-mono)" : undefined,
                    color: i === 0 ? "var(--ps-text-bright)" : "var(--ps-text)",
                    fontSize: i === 0 ? "0.875rem" : "0.825rem",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <Warn>
          Do not install H700/H7000 or A300/A3000 nodes into existing Gen6 chassis. These nodes
          must only go into the factory-supplied chassis. The higher power draw can open the midplane
          fuse on a Gen6 chassis, requiring a full chassis replacement -- not just a fuse swap.
        </Warn>
      </div>

      {/* 3. Site prep */}
      <div style={S.section}>
        <h2 style={S.h2}>Site preparation</h2>

        <WhyBlock>
          Site prep happens before hardware ships -- not on install day. Discovering a power circuit
          is undersized or a rack is too shallow when the install team is standing in the data center
          means the deployment slips, the team waits, and someone pays for it. Every item in this
          checklist has a real incident behind it.
        </WhyBlock>

        <h3 style={S.h3}>Power</h3>
        <p style={S.p}>
          PowerScale nodes have redundant power supplies, but that redundancy only means something if
          each PSU is connected to a separate circuit on a separate PDU. If both PSUs run off the same
          circuit, a tripped breaker takes the node down regardless. Confirm dedicated circuit capacity
          for the full rack load, and confirm that facility UPS covers it.
        </p>

        <h3 style={S.h3}>Cooling</h3>
        <p style={S.p}>
          All current PowerScale nodes use front-to-back airflow. Hot aisle / cold aisle containment
          is strongly recommended -- without it, recirculated hot air from the rear of the rack can
          cause thermal throttling on the nodes and premature drive wear. High-density flash nodes
          (F900, F910) have significant thermal output. Verify that CRAC / CRAH capacity meets the
          planned configuration before committing to a rack layout.
        </p>

        <h3 style={S.h3}>Rack compatibility</h3>
        <p style={S.p}>
          Dell Titan HD racks are recommended, particularly for deep chassis nodes (H7100, A3100,
          H7000, A3000). If using third-party racks, verify the internal depth against the rail kit
          requirements for the specific node model before ordering. Rails for deep chassis solutions
          have different depth requirements than standard 4U or 2U rails, and discovering a mismatch
          on install day means the team cannot proceed.
        </p>
        <p style={S.p}>
          Also check floor load-bearing capacity for high-density configurations. A fully-populated
          rack of flash nodes is heavy.
        </p>

        <h3 style={S.h3}>Network readiness</h3>
        <p style={S.p}>
          The install team cannot form the cluster without a working network. The following must be
          ready and confirmed before the team arrives -- not on the day:
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li>Frontend switch ports patched and configured (correct VLAN, MTU consistent end-to-end, flow control settings confirmed)</li>
          <li>Backend switch ports ready if using Ethernet backend</li>
          <li>Management network reachable from the install laptop</li>
          <li>IP address scheme finalised -- frontend IPs per node, management IPs, SmartConnect service IP</li>
          <li>DNS delegation zone prepared for SmartConnect (or explicitly deferred to post-install)</li>
          <li>NTP server reachable from the cluster management network</li>
        </ul>

        <WhyBlock>
          MTU is worth calling out specifically. If the switch ports are configured for standard
          1500 MTU but the cluster is planned for jumbo frames (9000 MTU), or vice versa, you will
          get fragmentation under load that looks like a performance problem, not a configuration
          problem. It is invisible at low throughput and only shows up when the cluster is actually
          being used. Confirm the MTU on every hop between client and cluster before cabling.
        </WhyBlock>

        <Warn>
          Do not exceed six consecutive months of unpowered storage from the delivery date for
          HDDs, SSDs, and batteries. Storage conditions directly affect drive wear and life.
          If hardware has been stored longer than six months, contact Dell Technical Support
          before powering on.
        </Warn>

        <Note>
          Allow a minimum four-hour acclimation period at the installation site ambient temperature
          before powering on, particularly for disk modules that were shipped in cold conditions.
          Condensation inside a drive enclosure is a real failure mode.
        </Note>
      </div>

      {/* 4. Physical install */}
      <div style={S.section}>
        <h2 style={S.h2}>Physical installation</h2>

        <h3 style={S.h3}>ESD -- why it matters and what to actually do</h3>
        <p style={S.p}>
          Electrostatic discharge (ESD) damage to storage node components is permanent and often
          not immediately obvious -- a node may power on and appear healthy but fail intermittently
          under load weeks later. The risk is highest in dry environments and when moving across
          flooring materials that build static charge.
        </p>
        <p style={S.p}>Required practice:</p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li>Wear an ESD wristband clipped to bare unpainted metal on the cabinet at all times when handling components</li>
          <li>Clear the work area of foam packaging, cellophane, and other static-generating materials before opening any component</li>
          <li>Keep FRUs in antistatic bags until the moment of installation</li>
          <li>Never place disk modules on hard surfaces -- use antistatic foam</li>
          <li>When removing a disk module from a powered system, pull it halfway out and wait 30 seconds for the drive to spin down fully before completing the removal</li>
          <li>When installing multiple disks in a powered system, wait at least 6 seconds between each drive to avoid overwhelming the backplane</li>
        </ul>

        <h3 style={S.h3}>Rack and rail installation</h3>
        <p style={S.p}>
          Rail kit components differ by node form factor. Confirm you have the right kit before starting --
          F-series 1U, 2U, and H/A series chassis all use different rail systems and the wrong kit
          cannot be adapted on-site.
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>4U chassis nodes (H/A series)</strong> -- the chassis rails are installed first, then the chassis slides in. Compute modules and drive sleds are installed into the chassis after it is racked, not before, because the combined weight would make the assembly unmanageable.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>2U nodes (F910, F900)</strong> -- 2U slide rails, the node slides in and is secured to the cabinet posts.</li>
          <li><strong style={{ color: "var(--ps-text-bright)" }}>1U nodes (F210, F710, F600, F200)</strong> -- 1U rails, same process as 2U but lighter.</li>
        </ul>

        <Note>
          For clusters that will exceed 22 nodes, the Leaf-Spine topology guide applies instead of
          the standard node installation guide. Leaf-Spine has specific switch cabling requirements
          that differ from a standard top-of-rack configuration. Identify this during planning, not
          on install day.
        </Note>

        <h3 style={S.h3}>Cabling order and why it matters</h3>
        <p style={S.p}>
          Connect cables in this order: backend first, frontend second, management last, power last.
          The reason is that powering a node before management is cabled can cause the node to attempt
          network operations before you are ready to intercept them. The backend should be connected
          before any node is powered because OneFS expects the backend fabric to be present at boot.
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              {["Connection", "Purpose", "Key consideration"].map(h => (
                <th key={h} style={S.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Backend (NIC or IB)",
                "Intra-cluster traffic: data stripes, metadata, journal",
                "F910/F710/F210 use 100GbE Ethernet backend. H/A series support InfiniBand or Ethernet -- confirm which is ordered. Backend must be on an isolated network segment, never shared with client traffic.",
              ],
              [
                "Frontend NIC",
                "Client data traffic: NFS, SMB, S3",
                "Connect to access or distribution switches. Apply correct VLANs if using multiple access zones. MTU must match the switch configuration end-to-end.",
              ],
              [
                "Management (iDRAC / LOM / BMC)",
                "Out-of-band access, IPMI, firmware updates",
                "F910/F710/F210 use a LOM card. F900/F600 use rNDC. H/A series share the management port with the BMC. Configure IPMI access before leaving the data center -- you will need it later.",
              ],
            ].map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} style={{
                    ...S.td,
                    fontFamily: i === 0 ? "var(--ps-font-mono)" : undefined,
                    color: i === 0 ? "var(--ps-accent)" : "var(--ps-text)",
                    fontSize: "0.825rem",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p style={S.p}>
          Connect power last. Both PSUs on each node should be connected to separate PDU circuits
          before powering on. Do not power on a node with only one PSU connected and plan to connect
          the second later -- if a node reboots or fails in the meantime, you lose the redundancy
          you thought you had during a critical phase.
        </p>
      </div>

      {/* 5. Cluster formation */}
      <div style={S.section}>
        <h2 style={S.h2}>Initial cluster formation</h2>
        <p style={S.p}>
          Cluster formation runs through a serial console connection to the first node. The
          configuration wizard collects the minimum network and identity configuration needed to
          bring the cluster online. Everything else -- protocols, access zones, SmartConnect pools,
          authentication -- is configured afterwards through the WebUI or CLI once the cluster is healthy.
        </p>

        <WhyBlock>
          The serial console is used because the cluster does not have a network identity yet.
          There is no IP address to connect to until the wizard completes. This is also why the
          IP scheme, DNS configuration, and NTP server need to be confirmed before the wizard runs --
          entering wrong values here means either re-running the wizard or manually correcting
          configuration after the fact, which is more complex.
        </WhyBlock>

        <Step n={1} title="Connect via serial console">
          Connect a laptop to the first node using a serial cable (the node-specific installation
          guide specifies the connector type -- it varies by node model).
          Terminal settings: <span style={S.code}>9600 baud, 8N1, no flow control</span>.
          Log in as <span style={S.code}>root</span> when prompted.
        </Step>

        <Step n={2} title="Run the configuration wizard">
          The wizard starts automatically on first boot of a new cluster. It collects:
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
            <li>Cluster name -- choose carefully, changing it later affects SmartConnect DNS</li>
            <li>Encoding -- UTF-8 is recommended for most environments</li>
            <li>Node IP address, subnet mask, and gateway for the frontend/management network</li>
            <li>DNS servers and search domain</li>
            <li>NTP server -- critical for SyncIQ, Kerberos, and SmartLock compliance clock accuracy</li>
            <li>SMTP relay -- optional at this stage, can be configured post-install</li>
            <li>SmartConnect service IP -- the delegation IP for DNS-based load balancing; can be deferred</li>
            <li>Root password</li>
          </ul>
        </Step>

        <Step n={3} title="Join remaining nodes">
          Once the first node is up and the cluster is formed, additional nodes are powered on one
          at a time. Each new node boots, detects the existing cluster on the backend network, and
          presents itself for joining. The join is approved through the WebUI under
          {" "}<span style={S.code}>Cluster Management {">"} Add Nodes</span>, or the node may
          join automatically depending on the cluster configuration. Monitor overall cluster state
          with:
          <div style={{ ...S.codeBlock, marginTop: "0.5rem" }}>
{`# Check cluster status and node state
isi status`}
          </div>
          Wait for each node to fully join and show healthy before powering on the next.
          Joining modifies the protection group layout across the cluster -- adding nodes too
          quickly can trigger unnecessary rebalancing that consumes backend bandwidth during
          a phase when you want the cluster to be stable.
        </Step>

        <Step n={4} title="Compliance mode decision (if applicable)">
          If this cluster will run SmartLock Compliance mode, this must be declared now -- before
          any data is written and before the cluster is handed over. See the warning below.
          If Compliance mode does not apply, skip this step entirely.
        </Step>

        <Warn>
          SmartLock Compliance mode permanently disables root access and governs the cluster
          with a tamper-proof compliance clock. It cannot be reversed. Only enable it if the
          organisation is legally required to do so (e.g. SEC rule 17a-4(f)). Get written
          confirmation from the customer before proceeding. Do this with Dell Support assistance.
        </Warn>

      </div>

      {/* 6. Health check */}
      <div style={S.section}>
        <h2 style={S.h2}>Health check before handover</h2>

        <WhyBlock>
          The health check is not a formality. It is the gate between "the hardware is installed"
          and "the cluster is ready for production configuration." Handing over a cluster with open
          hardware errors or configuration warnings means those problems become the customer's
          problem to discover -- usually at the worst possible time. Run HealthCheck, resolve
          everything it flags, and document the clean result before signing off.
        </WhyBlock>

        <p style={S.p}>
          OneFS includes a built-in HealthCheck tool that validates hardware state, cluster
          configuration, and software settings. Run it from the CLI or WebUI:
        </p>

        <div style={S.codeBlock}>
{`# Run HealthCheck from the CLI
isi_gather_info

# Check overall cluster status
isi status

# List critical events
isi events list --severity critical

# Verify NTP synchronisation
isi ntp servers list`}
        </div>

        <p style={S.p}>Verify manually before handover:</p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li>All nodes show as healthy -- no nodes in a degraded or unavailable state</li>
          <li>No critical or major events outstanding in the event log</li>
          <li>Backend network fully functional -- all nodes communicating on the internal fabric</li>
          <li>Cluster time is correct and actively syncing via NTP</li>
          <li>Frontend network reachable from a client on the correct VLAN</li>
          <li>Management access (iDRAC / BMC) configured and reachable on all nodes</li>
        </ul>

        <Note>
          Register the cluster with Dell after handover by updating the Install Base record.
          This enables remote support and proactive monitoring services. Without registration,
          Dell cannot initiate support workflows automatically when the cluster reports an issue.
        </Note>
      </div>

      {/* 7. Firmware */}
      <div style={S.section}>
        <h2 style={S.h2}>Firmware update</h2>
        <p style={S.p}>
          New hardware almost always ships with firmware that is not the latest qualified version.
          Updating firmware before handover -- before any production workload touches the cluster --
          is standard practice and for good reason.
        </p>

        <h3 style={S.h3}>Why firmware is not optional</h3>
        <WhyBlock>
          Firmware bugs in storage hardware are real and common. Drive firmware bugs cause silent
          data corruption. NIC firmware bugs cause throughput drops under specific traffic patterns.
          BIOS bugs cause nodes to behave differently from their peers in ways that are extremely
          hard to diagnose. Running current qualified firmware eliminates an entire class of
          problems before they can occur. Discovering a known firmware bug after a customer has
          been running production workloads for six months -- and finding that the fix requires
          a maintenance window -- is an uncomfortable conversation that firmware updates at install
          time prevent.
        </WhyBlock>

        <p style={S.p}>
          Always check the current qualified versions on the{" "}
          <a href="https://www.dell.com/support" target="_blank" rel="noopener noreferrer" style={S.extLink}>
            Dell Support site
          </a>{" "}
          or{" "}
          <a href="https://infohub.delltechnologies.com" target="_blank" rel="noopener noreferrer" style={S.extLink}>
            PowerScale Info Hub
          </a>{" "}
          before starting. There are two packages to apply: the Node Firmware Package (NFP) and
          the Drive Support Package (DSP).
        </p>

        <h3 style={S.h3}>Node Firmware Package (NFP)</h3>
        <p style={S.p}>
          The NFP updates everything that is not OneFS itself: BIOS, iDRAC / BMC, NIC firmware,
          backplane controllers, power supply firmware, and CPLD. On Flash nodes (F-series),
          these components are qualified as a matched set -- they must all be at the versions
          included in the same NFP, and must be updated through the NFP process, not individually.
        </p>

        <Warn>
          Never install generic PowerEdge firmware on PowerScale Flash nodes. F-series nodes are
          built on PowerEdge server hardware, which means the component part numbers are the same --
          but the firmware versions qualified for PowerScale are not the same as those qualified
          for PowerEdge. Specific version dependencies exist between components that the NFP
          manages automatically. Installing firmware outside the NFP breaks those dependencies
          and is unsupported.
        </Warn>

        <p style={S.p}>
          NFP updates are non-disruptive -- they do not require a maintenance window and do not
          interrupt client access. The update applies rolling across nodes. Before starting,
          verify there is sufficient free space available in <span style={S.code}>/ifs/</span> and
          in <span style={S.code}>/tmp</span> on each Flash node -- the current required amounts
          are in the NFP release notes.
        </p>

        <div style={S.codeBlock}>
{`# Download the current NFP from Dell Support to /ifs/data/firmware/
# Then apply:
isi upgrade firmware start --package /ifs/data/firmware/<NFP-package-name>.tar

# Monitor progress:
isi upgrade firmware status`}
        </div>

        <h3 style={S.h3}>Drive Support Package (DSP)</h3>
        <p style={S.p}>
          The DSP is separate from the NFP and updates drive firmware specifically. It also updates
          the list of supported drives, SSD wear monitoring data, and SAS/SATA drive settings.
          Apply the DSP after the NFP is complete.
        </p>

        <WhyBlock>
          The DSP matters beyond just drive firmware. A cluster running an old DSP has an outdated
          drive support matrix -- if the customer orders replacement drives or expansion drives that
          were qualified after the DSP version installed on their cluster, those drives will be
          rejected as unsupported. Updating the DSP at install time means the cluster starts with
          the broadest possible drive compatibility.
        </WhyBlock>

        <div style={S.codeBlock}>
{`# Check which drives need firmware updates before applying:
isi_dsp_update --check

# Apply the DSP:
isi_dsp_update --install /path/to/DSP-package/

# Verify after update:
isi_dsp_update --verify`}
        </div>

        <h3 style={S.h3}>OneFS version (if an upgrade is needed)</h3>
        <p style={S.p}>
          Hardware sometimes ships with an older OneFS version if the latest release was not yet
          qualified for that node model at the time of manufacture. If the cluster needs to be
          brought to a newer OneFS version, do this in consultation with Dell support and follow
          the current OneFS Upgrade Planning and Process Guide. Key points:
        </p>
        <ul style={{ ...S.p, paddingLeft: "1.5rem" }}>
          <li>Read the release notes for every OneFS version between current and target -- each version may have its own caveats</li>
          <li>Run the pre-upgrade compatibility check tool before starting</li>
          <li>Resolve all outstanding events and complete any running jobs before upgrading</li>
          <li>OneFS upgrades from newer versions use a parallel upgrade method -- nodes are upgraded simultaneously rather than rolling one-by-one, which is faster but means the entire cluster must be healthy before starting</li>
          <li>After upgrading, the upgrade must be committed before any additional changes are made -- this is the point of no return for rollback</li>
        </ul>

        <Note>
          NFP versions have minimum OneFS version requirements, and vice versa. If both an
          OneFS upgrade and an NFP update are needed, check the current compatibility matrix
          to confirm the correct order of operations. The NFP release notes always document
          the minimum supported OneFS version for that firmware package.
        </Note>
      </div>

      {/* 8. Common pitfalls */}
      <div style={S.section}>
        <h2 style={S.h2}>Common pitfalls</h2>
        <p style={S.p}>
          These are the mistakes that actually happen in the field -- not theoretical edge cases.
        </p>
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
                "IP scheme not finalised before install",
                "Changing IPs post-install is possible but has a cost. Backend IP changes require node reboots. Frontend IP changes are non-disruptive before production, but once the cluster is live, any IP change requires a planned maintenance window -- customer notification, change management, downtime. A 30-minute planning conversation before install avoids all of that.",
                "Lock down the full IP plan, SmartConnect zone IP, and management IPs before the team arrives. Get sign-off from the network team in advance.",
              ],
              [
                "MTU mismatch not caught at install",
                "Performance looks fine at low load, degrades badly at high throughput -- extremely hard to diagnose later",
                "Confirm MTU on every switch hop before cabling. Document the agreed MTU and verify it.",
              ],
              [
                "Compliance mode enabled by mistake",
                "Root access permanently disabled, cannot be reversed -- ever",
                "Get written confirmation from the customer. Do it with Dell Support. Never enable Compliance mode speculatively.",
              ],
              [
                "Firmware not updated before handover",
                "Known firmware bugs surface in production, require unplanned maintenance windows",
                "NFP and DSP updates are mandatory before handover. Add them to the install acceptance checklist.",
              ],
              [
                "Generic PowerEdge firmware installed on Flash nodes",
                "Component firmware interdependencies broken, unsupported configuration",
                "Only install firmware through the NFP process. The support site may show newer individual component versions -- ignore them.",
              ],
              [
                "Hardware stored unpowered over 6 months",
                "Drive degradation, potential failure at first spin-up",
                "Check delivery date against installation date. Contact Dell Support if over 6 months before powering on.",
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
