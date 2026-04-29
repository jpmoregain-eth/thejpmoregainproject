"use client";

import { useState, useMemo } from "react";

// ── Constants ─────────────────────────────────────────────────
const TB_TO_TIB = Math.pow(1000, 4) / Math.pow(1024, 4); // 0.9095

const NODE_CATALOG = [
  // PowerScale current gen
  { id:"f910",  name:"F910",  gen:"PowerScale",      type:"All-Flash", drivesPerNode:24, minNodes:3, chassisNodes:1, driveOptions:[3.84,7.68,15.36,30.72,61.44], note:"2U · 24xNVMe · AI-optimised" },
  { id:"f900",  name:"F900",  gen:"PowerScale",      type:"All-Flash", drivesPerNode:24, minNodes:3, chassisNodes:1, driveOptions:[3.84,7.68,15.36,30.72],       note:"2U · 24xNVMe" },
  { id:"f710",  name:"F710",  gen:"PowerScale",      type:"All-Flash", drivesPerNode:10, minNodes:3, chassisNodes:1, driveOptions:[3.84,7.68,15.36,30.72],       note:"1U · 10xNVMe" },
  { id:"f600",  name:"F600",  gen:"PowerScale",      type:"All-Flash", drivesPerNode:8,  minNodes:3, chassisNodes:1, driveOptions:[1.92,3.84,7.68,15.36,30.72],  note:"1U · 8xNVMe" },
  { id:"f210",  name:"F210",  gen:"PowerScale",      type:"All-Flash", drivesPerNode:4,  minNodes:3, chassisNodes:1, driveOptions:[2,3.84,7.68,15.36],            note:"1U · 4xNVMe" },
  { id:"f200",  name:"F200",  gen:"PowerScale",      type:"All-Flash", drivesPerNode:4,  minNodes:3, chassisNodes:1, driveOptions:[0.96,1.92,3.84],               note:"1U · 4xNVMe · edge/ROBO" },
  { id:"h710",  name:"H710",  gen:"PowerScale",      type:"Hybrid",    drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[2,4,6,8,10,12,14,16,18,20],   note:"4U chassis · 60 HDDs/chassis" },
  { id:"h7100", name:"H7100", gen:"PowerScale",      type:"Hybrid",    drivesPerNode:20, minNodes:4, chassisNodes:4, driveOptions:[12,14,16,18,20,24],            note:"4U deep chassis · 80 HDDs · HAMR-ready" },
  { id:"h700",  name:"H700",  gen:"PowerScale",      type:"Hybrid",    drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[2,4,6,8,10,12,14,16],         note:"4U chassis · 60 HDDs/chassis" },
  { id:"h7000", name:"H7000", gen:"PowerScale",      type:"Hybrid",    drivesPerNode:20, minNodes:4, chassisNodes:4, driveOptions:[12,14,16,18,20],              note:"4U deep chassis · 80 HDDs/chassis" },
  { id:"a310",  name:"A310",  gen:"PowerScale",      type:"Archive",   drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[8,10,12,14,16,18,20],         note:"4U chassis · active archive" },
  { id:"a3100", name:"A3100", gen:"PowerScale",      type:"Archive",   drivesPerNode:20, minNodes:4, chassisNodes:4, driveOptions:[14,16,18,20,24],              note:"4U deep chassis · HAMR-ready" },
  { id:"a300",  name:"A300",  gen:"PowerScale",      type:"Archive",   drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[6,8,10,12,14,16],             note:"4U chassis · active archive" },
  { id:"a3000", name:"A3000", gen:"PowerScale",      type:"Archive",   drivesPerNode:20, minNodes:4, chassisNodes:4, driveOptions:[12,14,16,18,20],              note:"4U deep chassis" },
  // Isilon legacy
  { id:"f810",  name:"F810",  gen:"Isilon (Legacy)", type:"All-Flash", drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[3.84,7.68,15.36],             note:"4U chassis · 60 SSDs/chassis · inline dedupe" },
  { id:"f800",  name:"F800",  gen:"Isilon (Legacy)", type:"All-Flash", drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[1.6,3.2,3.84,7.68,15.36],    note:"4U chassis · 60 SSDs/chassis" },
  { id:"h600",  name:"H600",  gen:"Isilon (Legacy)", type:"Hybrid",    drivesPerNode:30, minNodes:4, chassisNodes:4, driveOptions:[0.6,1.2],                     note:"4U chassis · 120 SAS drives/chassis" },
  { id:"h5600", name:"H5600", gen:"Isilon (Legacy)", type:"Hybrid",    drivesPerNode:20, minNodes:4, chassisNodes:4, driveOptions:[8,10,12,16],                  note:"4U deep chassis · 80 HDDs/chassis" },
  { id:"h500",  name:"H500",  gen:"Isilon (Legacy)", type:"Hybrid",    drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[2,4,8],                       note:"4U chassis · 60 SATA/chassis" },
  { id:"h400",  name:"H400",  gen:"Isilon (Legacy)", type:"Hybrid",    drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[2,4,8],                       note:"4U chassis · 60 SATA/chassis" },
  { id:"a2000", name:"A2000", gen:"Isilon (Legacy)", type:"Archive",   drivesPerNode:20, minNodes:4, chassisNodes:4, driveOptions:[4,8,12,16],                   note:"4U deep chassis" },
  { id:"a200",  name:"A200",  gen:"Isilon (Legacy)", type:"Archive",   drivesPerNode:15, minNodes:4, chassisNodes:4, driveOptions:[2,4,6,8],                     note:"4U chassis" },
  { id:"custom",name:"Custom",gen:"Custom",          type:"Custom",    drivesPerNode:null,minNodes:3,chassisNodes:1, driveOptions:[],                            note:"Manual entry" },
];

const PROTECTION_LEVELS = [
  { id:"+1n",      label:"+1n",       desc:"1 drive OR 1 node",         minNodes:3, group:"FEC" },
  { id:"+2d:1n",   label:"+2d:1n",   desc:"2 drives OR 1 node",        minNodes:3, group:"FEC" },
  { id:"+2n",      label:"+2n",       desc:"2 drives OR 2 nodes",       minNodes:4, group:"FEC" },
  { id:"+3d:1n",   label:"+3d:1n",   desc:"3 drives OR 1 node",        minNodes:3, group:"FEC" },
  { id:"+3d:1n1d", label:"+3d:1n1d", desc:"3 drives OR 1 node+1 drv",  minNodes:3, group:"FEC" },
  { id:"+3n",      label:"+3n",       desc:"3 drives OR 3 nodes",       minNodes:6, group:"FEC" },
  { id:"+4d:1n",   label:"+4d:1n",   desc:"4 drives OR 1 node",        minNodes:3, group:"FEC" },
  { id:"+4d:2n",   label:"+4d:2n",   desc:"4 drives OR 2 nodes",       minNodes:4, group:"FEC" },
  { id:"+4n",      label:"+4n",       desc:"4 drives OR 4 nodes",       minNodes:8, group:"FEC" },
  { id:"2x",  label:"2x Mirror", desc:"2 full copies", minNodes:2, group:"Mirror" },
  { id:"3x",  label:"3x Mirror", desc:"3 full copies", minNodes:3, group:"Mirror" },
  { id:"4x",  label:"4x Mirror", desc:"4 full copies", minNodes:4, group:"Mirror" },
  { id:"5x",  label:"5x Mirror", desc:"5 full copies", minNodes:5, group:"Mirror" },
  { id:"6x",  label:"6x Mirror", desc:"6 full copies", minNodes:6, group:"Mirror" },
  { id:"7x",  label:"7x Mirror", desc:"7 full copies", minNodes:7, group:"Mirror" },
  { id:"8x",  label:"8x Mirror", desc:"8 full copies", minNodes:8, group:"Mirror" },
];

// ── Calculation logic (unchanged from original) ───────────────
function getFECLayout(n: number, prot: string): [number, number] | null {
  switch (prot) {
    case "+1n":       return [Math.min(n - 1, 20), 1];
    case "+2d:1n": {  const d = ({3:4,4:6,5:8,6:10,7:12,8:14} as Record<number,number>)[n] ?? 16; return [d, 2]; }
    case "+2n":       return [Math.min(n - 2, 20), 2];
    case "+3d:1n": {  const d = ({3:6,4:9,5:12} as Record<number,number>)[n] ?? 15; return [d, 3]; }
    case "+3d:1n1d": {const d = ({3:3,4:5,5:7,6:9,7:11,8:13} as Record<number,number>)[n] ?? 15; return [d, 3]; }
    case "+3n":       return [Math.min(n - 3, 20), 3];
    case "+4d:1n": {  const d = ({3:8,4:12,5:16,6:16,7:14,8:14,9:14} as Record<number,number>)[n] ?? 16; return [d, 4]; }
    case "+4d:2n": {  const d = n === 4 ? 4 : Math.min(2 * (n - 2), 16); return [d, 4]; }
    case "+4n":       return [Math.min(n - 4, 20), 4];
    default:          return null;
  }
}

function calcOverhead(nodeCount: number, protection: string) {
  const mirrorMatch = protection.match(/^(\d+)x$/);
  if (mirrorMatch) {
    const m = parseInt(mirrorMatch[1]);
    return { overhead: 1 - 1 / m, layout: `${m}x mirror`, data: 1, parity: m - 1 };
  }
  const layout = getFECLayout(nodeCount, protection);
  if (!layout) return null;
  const [data, parity] = layout;
  return { overhead: parity / (data + parity), layout: `${data}+${parity}`, data, parity };
}

function getRecommendedProtection(nodeCount: number) {
  if (nodeCount < 4)  return "+1n";
  if (nodeCount < 20) return "+2d:1n";
  if (nodeCount < 40) return "+3d:1n";
  return "+4d:2n";
}

function fmtSize(tb: number, precision = 2) {
  if (tb >= 1000) return `${(tb / 1000).toFixed(precision)} PB`;
  return `${tb.toFixed(precision)} TB`;
}

function fmtTiB(tib: number, precision = 2) {
  if (tib >= 1000) return `${(tib / 1000).toFixed(precision)} PiB`;
  return `${tib.toFixed(precision)} TiB`;
}

// ── Styles using PS design system variables ───────────────────
const C = {
  accent:  "var(--ps-accent)",
  green:   "var(--ps-green)",
  amber:   "var(--ps-amber)",
  purple:  "#a78bfa",
  yellow:  "#fbbf24",
  red:     "#f87171",
  muted:   "var(--ps-text-muted)",
  text:    "var(--ps-text-bright)",
  subtext: "var(--ps-text)",
};

const card: React.CSSProperties  = { background:"var(--ps-surface)", border:"1px solid var(--ps-border)", borderRadius:8, padding:20, marginBottom:16 };
const label: React.CSSProperties = { fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" as const, color:C.muted, marginBottom:6, display:"block" };
const mono: React.CSSProperties  = { fontFamily:"var(--ps-font-mono)" };
const inp: React.CSSProperties   = { background:"var(--ps-bg)", border:"1px solid var(--ps-border)", borderRadius:6, color:C.text, padding:"8px 12px", width:"100%", fontSize:14, outline:"none", fontFamily:"var(--ps-font-body)" };
const sel: React.CSSProperties   = { ...inp, cursor:"pointer" };

// ── Component ─────────────────────────────────────────────────
export default function SizingCalculatorPage() {
  const [modelId,    setModelId]    = useState("f710");
  const [driveSize,  setDriveSize]  = useState(7.68);
  const [nodeCount,  setNodeCount]  = useState(6);
  const [protection, setProtection] = useState("+2d:1n");
  const [vhsPct,     setVhsPct]     = useState(5);
  const [sysPct,     setSysPct]     = useState(2);
  const [customDPN,  setCustomDPN]  = useState(15);
  const [customDS,   setCustomDS]   = useState(8);
  const [showAdv,    setShowAdv]    = useState(false);

  const model        = NODE_CATALOG.find(n => n.id === modelId)!;
  const isCustom     = modelId === "custom";
  const drivesPerNode   = isCustom ? customDPN : model.drivesPerNode!;
  const activeDriveSize = isCustom ? customDS  : driveSize;
  const minNodes     = model.minNodes;
  const isChassisNode = model.chassisNodes === 4;
  const effectiveNodes = isChassisNode
    ? Math.max(minNodes, Math.round(nodeCount / 4) * 4)
    : Math.max(minNodes, nodeCount);

  const protLevel       = PROTECTION_LEVELS.find(p => p.id === protection);
  const isProtSupported = protLevel ? effectiveNodes >= protLevel.minNodes : false;
  const recProt         = getRecommendedProtection(effectiveNodes);

  const results = useMemo(() => {
    const rawTB  = effectiveNodes * drivesPerNode * activeDriveSize;
    const rawTiB = rawTB * TB_TO_TIB;
    const vhsTiB = rawTiB * (vhsPct / 100);
    const afterVHS = rawTiB - vhsTiB;
    const ov = isProtSupported ? calcOverhead(effectiveNodes, protection) : null;
    if (!ov) return null;
    const protTiB   = afterVHS * ov.overhead;
    const afterProt = afterVHS - protTiB;
    const sysTiB    = afterProt * (sysPct / 100);
    const usableTiB = afterProt - sysTiB;
    const efficiencyPct = (usableTiB / rawTiB) * 100;
    const chCount = isChassisNode ? effectiveNodes / 4 : null;
    return { rawTB, rawTiB, vhsTiB, protTiB, sysTiB, usableTiB, efficiencyPct, ov, chCount };
  }, [effectiveNodes, drivesPerNode, activeDriveSize, protection, vhsPct, sysPct, isProtSupported, isChassisNode]);

  const genGroups = [...new Set(NODE_CATALOG.map(n => n.gen))];

  function handleModelChange(id: string) {
    const m = NODE_CATALOG.find(n => n.id === id)!;
    setModelId(id);
    if (m.driveOptions.length > 0) setDriveSize(m.driveOptions[Math.floor(m.driveOptions.length / 2)]);
    if (nodeCount < m.minNodes) setNodeCount(m.minNodes);
  }

  const barSegments = results ? [
    { label:"Usable",     pct:(results.usableTiB / results.rawTiB) * 100, color:C.green  },
    { label:"System",     pct:(results.sysTiB    / results.rawTiB) * 100, color:C.yellow },
    { label:"Protection", pct:(results.protTiB   / results.rawTiB) * 100, color:C.amber  },
    { label:"VHS",        pct:(results.vhsTiB    / results.rawTiB) * 100, color:C.purple },
  ] : [];

  const btnBase: React.CSSProperties = { ...mono, padding:"5px 10px", borderRadius:5, fontSize:12, fontWeight:600 };

  return (
    <div>
      {/* Page header */}
      <div className="ps-ph-header">
        <p className="ps-eyebrow">Tools</p>
        <h1 className="ps-ph-title">Cluster Sizing Calculator</h1>
        <p className="ps-ph-desc">
          Calculates usable TiB from raw drives, protection overhead, Virtual Hot Spare,
          and system overhead -- across all current PowerScale and legacy Isilon node types.
        </p>
        <div className="ps-ph-why-block">
          <strong>Why this exists</strong>
          Raw TB and usable TiB are not the same number. Protection overhead, VHS headroom,
          and system journals can consume 30-50% of raw capacity. This calculator shows
          exactly where that capacity goes.
        </div>
      </div>

      {/* Two-column calculator */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>

        {/* LEFT -- Configuration */}
        <div>
          {/* Node Model */}
          <div style={card}>
            <span style={label}>Node Model</span>
            <select style={sel} value={modelId} onChange={e => handleModelChange(e.target.value)}>
              {genGroups.map(gen => (
                <optgroup key={gen} label={gen}>
                  {NODE_CATALOG.filter(n => n.gen === gen).map(n => (
                    <option key={n.id} value={n.id}>{n.name} -- {n.type}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            {!isCustom && (
              <div style={{ marginTop:8, fontSize:12, color:C.subtext }}>
                {model.note} · <span style={mono}>{model.drivesPerNode} drives/node</span>
              </div>
            )}
          </div>

          {/* Drive size */}
          {isCustom ? (
            <div style={card}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div>
                  <span style={label}>Drives per Node</span>
                  <input type="number" style={inp} value={customDPN} min={1} max={200}
                    onChange={e => setCustomDPN(Math.max(1, parseInt(e.target.value) || 1))} />
                </div>
                <div>
                  <span style={label}>Drive Size (TB)</span>
                  <input type="number" style={inp} value={customDS} min={0.1} step={0.1}
                    onChange={e => setCustomDS(Math.max(0.1, parseFloat(e.target.value) || 1))} />
                </div>
              </div>
            </div>
          ) : (
            <div style={card}>
              <span style={label}>Drive Size</span>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {model.driveOptions.map(opt => (
                  <button key={opt} onClick={() => setDriveSize(opt)} style={{
                    ...btnBase, cursor:"pointer",
                    background: driveSize === opt ? "var(--ps-accent-dim)" : "var(--ps-bg)",
                    border: `1px solid ${driveSize === opt ? C.accent : "var(--ps-border)"}`,
                    color:  driveSize === opt ? C.accent : C.subtext,
                  }}>
                    {opt >= 1 ? `${opt} TB` : `${opt * 1000} GB`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Node count */}
          <div style={card}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <span style={label}>Node Count</span>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                {isChassisNode && results?.chCount && (
                  <span style={{ fontSize:12, color:C.muted, ...mono }}>{results.chCount} chassis</span>
                )}
                <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                  <button onClick={() => setNodeCount(n => Math.max(minNodes, n - (isChassisNode ? 4 : 1)))}
                    style={{ background:"var(--ps-surface-2)", border:"1px solid var(--ps-border)", color:C.text, width:28, height:28, borderRadius:4, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    -
                  </button>
                  <input type="number" style={{ ...mono, ...inp, width:60, textAlign:"center", padding:"4px" }}
                    value={nodeCount} min={minNodes} max={252}
                    onChange={e => setNodeCount(Math.max(minNodes, Math.min(252, parseInt(e.target.value) || minNodes)))} />
                  <button onClick={() => setNodeCount(n => Math.min(252, n + (isChassisNode ? 4 : 1)))}
                    style={{ background:"var(--ps-surface-2)", border:"1px solid var(--ps-border)", color:C.text, width:28, height:28, borderRadius:4, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <input type="range" min={minNodes} max={252} step={isChassisNode ? 4 : 1}
              value={nodeCount} onChange={e => setNodeCount(parseInt(e.target.value))}
              style={{ width:"100%", accentColor:C.accent }} />
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:C.muted, marginTop:4 }}>
              <span>Min: {minNodes}</span><span>Max: 252</span>
            </div>
          </div>

          {/* Protection level */}
          <div style={card}>
            <span style={{ ...label, marginBottom:12 }}>Protection Level</span>
            <div style={{ marginBottom:10 }}>
              <div style={{ fontSize:11, color:C.muted, marginBottom:6, fontWeight:600, letterSpacing:"0.06em" }}>FEC (ERASURE CODE)</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {PROTECTION_LEVELS.filter(p => p.group === "FEC").map(p => {
                  const ok   = effectiveNodes >= p.minNodes;
                  const isRec = p.id === recProt;
                  const isSel = protection === p.id;
                  return (
                    <button key={p.id} onClick={() => ok && setProtection(p.id)} disabled={!ok}
                      title={ok ? p.desc : `Requires >= ${p.minNodes} nodes`}
                      style={{
                        ...btnBase, cursor: ok ? "pointer" : "not-allowed", position:"relative",
                        background: isSel ? "var(--ps-accent-dim)" : "var(--ps-bg)",
                        border: `1px solid ${isSel ? C.accent : ok ? "var(--ps-border)" : "var(--ps-border-subtle)"}`,
                        color:  isSel ? C.accent : ok ? C.subtext : C.muted,
                      }}>
                      {p.label}
                      {isRec && ok && (
                        <span style={{ position:"absolute", top:-6, right:-4, background:"#065f46", color:"#6ee7b7", fontSize:9, padding:"1px 4px", borderRadius:3, letterSpacing:"0.05em" }}>REC</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ fontSize:11, color:C.muted, marginBottom:6, fontWeight:600, letterSpacing:"0.06em" }}>MIRRORING</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {PROTECTION_LEVELS.filter(p => p.group === "Mirror").map(p => {
                  const ok   = effectiveNodes >= p.minNodes;
                  const isSel = protection === p.id;
                  return (
                    <button key={p.id} onClick={() => ok && setProtection(p.id)} disabled={!ok}
                      title={ok ? p.desc : `Requires >= ${p.minNodes} nodes`}
                      style={{
                        ...btnBase, cursor: ok ? "pointer" : "not-allowed",
                        background: isSel ? "#2d1a4d" : "var(--ps-bg)",
                        border: `1px solid ${isSel ? C.purple : ok ? "var(--ps-border)" : "var(--ps-border-subtle)"}`,
                        color:  isSel ? C.purple : ok ? C.subtext : C.muted,
                      }}>
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>
            {protLevel && (
              <div style={{ marginTop:12, padding:"8px 12px", background:"var(--ps-bg)", borderRadius:6, fontSize:12, color:C.muted, borderLeft:`3px solid ${protection.includes("x") ? C.purple : C.accent}` }}>
                <span style={{ color:C.text }}>{protLevel.label}</span> -- Tolerate failure of: {protLevel.desc}
              </div>
            )}
          </div>

          {/* Advanced */}
          <div style={{ ...card, padding:"14px 20px" }}>
            <button onClick={() => setShowAdv(v => !v)}
              style={{ background:"none", border:"none", color:C.muted, cursor:"pointer", fontSize:12, padding:0, display:"flex", alignItems:"center", gap:6, width:"100%", textAlign:"left" }}>
              <span style={{ ...mono, fontSize:16 }}>{showAdv ? "v" : ">"}</span>
              <span style={{ letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600, fontSize:11 }}>Advanced Options</span>
            </button>
            {showAdv && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:14 }}>
                <div>
                  <span style={label}>Virtual Hot Spare %</span>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <input type="range" min={0} max={15} step={1} value={vhsPct}
                      onChange={e => setVhsPct(parseInt(e.target.value))}
                      style={{ flex:1, accentColor:C.purple }} />
                    <span style={{ ...mono, fontSize:13, color:C.purple, minWidth:32 }}>{vhsPct}%</span>
                  </div>
                </div>
                <div>
                  <span style={label}>System Overhead %</span>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <input type="range" min={0} max={10} step={1} value={sysPct}
                      onChange={e => setSysPct(parseInt(e.target.value))}
                      style={{ flex:1, accentColor:C.yellow }} />
                    <span style={{ ...mono, fontSize:13, color:C.yellow, minWidth:32 }}>{sysPct}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT -- Results */}
        <div>
          {/* Usable capacity hero */}
          <div style={{ ...card, background:"rgba(56,189,248,0.04)", border:"1px solid rgba(56,189,248,0.15)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8 }}>
              <div>
                <div style={{ fontSize:11, color:C.muted, letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600 }}>Usable Capacity</div>
                {results ? (
                  <div style={{ ...mono, fontSize:36, fontWeight:700, color:C.green, lineHeight:1.1, marginTop:4 }}>
                    {fmtTiB(results.usableTiB, 1)}
                  </div>
                ) : (
                  <div style={{ ...mono, fontSize:28, color:C.red, marginTop:4 }}>--</div>
                )}
                {results && (
                  <div style={{ fontSize:12, color:C.muted, marginTop:4 }}>
                    from <span style={{ ...mono, color:C.text }}>{fmtSize(results.rawTB, 1)}</span> raw
                    {" · "}<span style={{ ...mono, color:C.green }}>{results.efficiencyPct.toFixed(1)}% efficiency</span>
                  </div>
                )}
              </div>
              {results && (
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:11, color:C.muted, letterSpacing:"0.08em", textTransform:"uppercase", fontWeight:600 }}>Stripe Layout</div>
                  <div style={{ ...mono, fontSize:22, color:C.accent, marginTop:4 }}>{results.ov.layout}</div>
                  <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>
                    overhead: <span style={{ ...mono, color:C.amber }}>{(results.ov.overhead * 100).toFixed(1)}%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Capacity bar */}
            {results && (
              <div style={{ marginTop:16 }}>
                <div style={{ display:"flex", height:20, borderRadius:6, overflow:"hidden", gap:1 }}>
                  {barSegments.map((seg, i) => (
                    <div key={i} title={`${seg.label}: ${seg.pct.toFixed(1)}%`}
                      style={{ width:`${seg.pct}%`, background:seg.color, transition:"width 0.3s" }} />
                  ))}
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px 14px", marginTop:8 }}>
                  {barSegments.map((seg, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11 }}>
                      <div style={{ width:8, height:8, borderRadius:2, background:seg.color }} />
                      <span style={{ color:C.muted }}>{seg.label}</span>
                      <span style={{ ...mono, color:C.text }}>{seg.pct.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Breakdown table */}
          {results ? (
            <div style={card}>
              <span style={label}>Capacity Breakdown</span>
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <tbody>
                  {[
                    { label:"Raw (decimal TB)",    val:fmtSize(results.rawTB, 2),          sub:"isi storagepool list / isi df -h",          color:C.text,   border:false },
                    { label:"Raw (binary TiB)",    val:fmtTiB(results.rawTiB, 2),          sub:"isi quota list / df output",                color:C.text,   border:false },
                    { label:"VHS Reserved",        val:`- ${fmtTiB(results.vhsTiB, 2)}`,    sub:`${vhsPct}% headroom for repairs`,           color:C.purple, border:false },
                    { label:"Protection Overhead", val:`- ${fmtTiB(results.protTiB, 2)}`,   sub:`${(results.ov.overhead*100).toFixed(1)}% for parity/mirrors`, color:C.amber, border:false },
                    { label:"System Overhead",     val:`- ${fmtTiB(results.sysTiB, 2)}`,    sub:`${sysPct}% journals and metadata`,          color:C.yellow, border:true  },
                    { label:"USABLE",              val:fmtTiB(results.usableTiB, 2),        sub:`${results.efficiencyPct.toFixed(1)}% of raw TiB`, color:C.green, bold:true, border:false },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: row.border ? "1px solid var(--ps-border)" : undefined }}>
                      <td style={{ padding:"7px 0", paddingTop: row.border ? "14px" : "7px" }}>
                        <div style={{ fontSize:13, color:row.color, fontWeight: row.bold ? 700 : 400 }}>{row.label}</div>
                        <div style={{ fontSize:11, color:C.muted }}>{row.sub}</div>
                      </td>
                      <td style={{ textAlign:"right", padding:"7px 0", paddingTop: row.border ? "14px" : "7px" }}>
                        <span style={{ ...mono, fontSize: row.bold ? 18 : 14, color:row.color, fontWeight: row.bold ? 700 : 500 }}>{row.val}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ ...card, textAlign:"center", padding:30 }}>
              <div style={{ fontSize:13, color:C.red }}>
                {!isProtSupported
                  ? `Protection ${protLevel?.label} requires >= ${protLevel?.minNodes} nodes (current: ${effectiveNodes})`
                  : "Select a valid configuration to see results"}
              </div>
            </div>
          )}

          {/* Cluster summary */}
          {results && (
            <div style={card}>
              <span style={label}>Cluster Summary</span>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {([
                  ["Nodes",        `${effectiveNodes}`,  isChassisNode ? `${results.chCount} chassis` : null],
                  ["Drives/Node",  `${drivesPerNode}`,   null],
                  ["Drive Size",   activeDriveSize >= 1 ? `${activeDriveSize} TB` : `${activeDriveSize*1000} GB`, null],
                  ["Total Drives", `${effectiveNodes * drivesPerNode}`, null],
                  ["Raw per Node", fmtSize(drivesPerNode * activeDriveSize, 1), null],
                  ["Protection",   protection,            `${(results.ov.overhead*100).toFixed(1)}% overhead`],
                ] as [string, string, string|null][]).map(([lbl, val, sub], i) => (
                  <div key={i} style={{ background:"var(--ps-bg)", borderRadius:6, padding:"10px 12px" }}>
                    <div style={{ fontSize:11, color:C.muted, letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600, marginBottom:2 }}>{lbl}</div>
                    <div style={{ ...mono, fontSize:15, color:C.text, fontWeight:600 }}>{val}</div>
                    {sub && <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{sub}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scaling hint */}
          {results && (
            <div style={{ ...card, padding:"12px 16px", background:"rgba(52,211,153,0.04)", border:"1px solid rgba(52,211,153,0.12)" }}>
              <div style={{ fontSize:11, color:C.green, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:6 }}>Add Nodes to Scale</div>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                {[4, 8, 12, 16].map(extra => {
                  const n2 = effectiveNodes + extra;
                  if (n2 > 252) return null;
                  const ov2 = calcOverhead(n2, protection);
                  if (!ov2) return null;
                  const raw2    = n2 * drivesPerNode * activeDriveSize * TB_TO_TIB;
                  const usable2 = raw2 * (1 - vhsPct/100) * (1 - ov2.overhead) * (1 - sysPct/100);
                  const gain    = usable2 - results.usableTiB;
                  return (
                    <div key={extra} style={{ flex:1, minWidth:80, background:"var(--ps-bg)", borderRadius:6, padding:"8px 10px", textAlign:"center", border:"1px solid rgba(52,211,153,0.12)" }}>
                      <div style={{ ...mono, fontSize:11, color:C.green }}>+{isChassisNode ? extra/4 : extra} {isChassisNode ? "chassis" : "nodes"}</div>
                      <div style={{ ...mono, fontSize:13, color:C.green, fontWeight:700, marginTop:2 }}>{fmtTiB(usable2, 1)}</div>
                      <div style={{ ...mono, fontSize:11, color:C.muted }}>+{fmtTiB(gain, 1)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ fontSize:11, color:C.muted, marginTop:16, textAlign:"center" }}>
        Protection overhead based on OneFS FlexProtect stripe tables · TB = decimal (10^12) · TiB = binary (2^40)
      </div>
    </div>
  );
}
