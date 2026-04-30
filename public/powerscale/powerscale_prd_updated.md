# PowerScale Knowledge Hub — Product Requirements Document (PRD)
**Project:** thejpmoregainproject.com/powerscale  
**Owner:** Derek Leong (The JPMoreGain Project)  
**Status:** In Development  
**Last Updated:** April 2026

---

## 1. Overview

A free educational web resource covering Dell PowerScale (Isilon) — built by a practitioner with real-world experience across the full storage lifecycle: hardware installation, configuration, implementation, migrations, and disaster recovery.

The goal is to be the most practical, accessible, and comprehensive independent PowerScale resource online — something that fills the gap between dry vendor documentation and expensive formal training.

**Monetisation:** Google AdSense banner ads (free to users, ad-supported).  
**Hosting:** Vercel (auto-deploy on push to main)  
**Repo:** https://github.com/jpmoregain-eth/thejpmoregainproject  
**Stack:** Next.js 16 + TypeScript, src/app/ router structure

---

## 2. Target Audience

- Storage engineers/admins managing PowerScale day-to-day
- IT engineers new to PowerScale onboarding at a new role
- Pre-sales engineers at Dell partners
- IT consultants planning PowerScale deployments
- IT managers/architects who want a conceptual understanding without deep technical detail

---

## 3. URL Structure

```
thejpmoregainproject.com/powerscale                         <- Landing/overview page
thejpmoregainproject.com/powerscale/concepts                <- Conceptual foundation (Simple/Expert toggle)
thejpmoregainproject.com/powerscale/install                 <- Installation guide
thejpmoregainproject.com/powerscale/design                  <- Design & architecture guide
thejpmoregainproject.com/powerscale/implement               <- Implementation guide
thejpmoregainproject.com/powerscale/migrate                 <- Migration guide
thejpmoregainproject.com/powerscale/secure                  <- Security guide
thejpmoregainproject.com/powerscale/monitor                 <- Monitoring guide
thejpmoregainproject.com/powerscale/tools                   <- Tools hub
thejpmoregainproject.com/powerscale/tools/sizing-calculator <- Cluster sizing calculator (LIVE)
```

*(Troubleshoot and Automate sections removed from scope)*

---

## 4. Content Structure

### 4.1 Concepts Section (Simple/Expert Toggle)

The only section with a Simple/Expert mode toggle. Toggle persists to localStorage.

**Simple Mode:** Plain English, analogies, no formulas  
**Expert Mode:** White-paper level detail, CLI examples, deep technical accuracy

**Topics (all 7 COMPLETE):**
- Architecture
- Data Protection
- Storage Pools & Tiering
- Networking
- Replication & Business Continuity
- Security (SmartLock)
- Protocols

### 4.2 Hands-On Sections (Single Mode — Practitioner Audience)

Each section: Overview -> Why -> Step-by-step -> Common pitfalls -> CLI reference

**Content philosophy: Why + When + How. Not just steps. No hardcoded version numbers.**

- **Install** -- COMPLETE (current gen F/H/A-series only)
- **Design** -- Placeholder
- **Implement** -- Placeholder
- **Migrate** -- Placeholder
- **Secure** -- Placeholder
- **Monitor** -- Placeholder

### 4.3 Tools

- **Cluster Sizing Calculator** -- LIVE at /powerscale/tools/sizing-calculator
- SmartPools Policy Builder -- Planned
- SyncIQ RPO/RTO Planner -- Planned
- Protection Level Advisor -- Planned
- CLI Cheatsheet -- Planned

---

## 5. UI/UX

- **Fonts:** IBM Plex Mono (headings/display/code), IBM Plex Sans (body), loaded via next/font/google
- **Aesthetic:** Dark navy (#07090E bg), sky blue accent (#38BDF8), industrial field manual
- **Layout:** Fixed top bar (54px) + left sidebar (264px) + main content area
- **Toggle:** Simple/Expert only appears on /powerscale/concepts, persists to localStorage
- **Root layout fix:** ConditionalShell component at src/components/ConditionalShell.tsx suppresses portfolio Navbar/Footer on all /powerscale/* routes
- **CSS:** Fully scoped under .ps-root -- does not bleed into portfolio site

---

## 6. Development Notes

### Repo structure
```
src/app/powerscale/
├── layout.tsx                         <- IBM Plex fonts + shell (ToggleProvider, TopBar, Sidebar)
├── page.tsx                           <- Landing page
├── _components/
│   ├── ps-styles.css                  <- Full design system (CSS variables, all component styles)
│   ├── ToggleContext.tsx               <- Simple/Expert state with localStorage persistence
│   ├── PowerScaleTopBar.tsx
│   ├── PowerScaleSidebar.tsx
│   └── SectionPlaceholder.tsx         <- Used for not-yet-written sections
├── concepts/page.tsx                  <- 7 topics, both modes, COMPLETE
├── install/page.tsx                   <- Full content, reviewed and validated
├── design/page.tsx                    <- Placeholder
├── implement/page.tsx                 <- Placeholder
├── migrate/page.tsx                   <- Placeholder
├── secure/page.tsx                    <- Placeholder
├── monitor/page.tsx                   <- Placeholder
└── tools/
    ├── page.tsx                       <- Tools hub
    └── sizing-calculator/page.tsx     <- Full calculator, LIVE
src/components/ConditionalShell.tsx    <- Hides portfolio nav on /powerscale/*
```

### Standard update + deploy cycle
```bash
cd ~/Downloads && unzip -o powerscale-final.zip
rm -rf ~/thejpmoregainproject/src/app/powerscale
cp -r powerscale-final/src/app/powerscale ~/thejpmoregainproject/src/app/
cd ~/thejpmoregainproject
git add .
git commit -m "your message"
git push origin main
```

### White paper update cycle
```bash
# Add new MD files to whitepapers dir then:
cd ~/thejpmoregainproject
git add public/powerscale/whitepapers/
git commit -m "docs: add <name> whitepaper"
git push origin main
```

---

## 7. Build Order & Status

| # | Section | Status | Notes |
|---|---------|--------|-------|
| 1 | Landing page | DONE | |
| 2 | UI shell | DONE | Sidebar, topbar, toggle, ConditionalShell |
| 3 | Concepts (all 7 topics) | DONE | Both Simple/Expert modes, white-paper grounded |
| 4 | Tools hub + Sizing Calculator | DONE | Calculator fully functional, all node types |
| 5 | Install section | DONE | Reviewed by Derek, CLI validated against 9.13 guide |
| 6 | Design section | NEXT | Need H16857, H8321 |
| 7 | Implement section | Pending | NFS/SMB MDs available, need H16857 |
| 8 | Migrate section | Pending | SyncIQ MD available |
| 9 | Secure section | Pending | SmartLock MD available |
| 10 | Monitor section | Pending | Need InsightIQ/monitoring guide |
| 11 | Remaining tools | Pending | Progressive |

---

## 8. White Papers

All hosted at: `thejpmoregainproject.com/powerscale/whitepapers/`  
All converted to MD via pdf.ai for full readability. Paste URL directly in chat to fetch.

### Status Legend
- **HAVE** -- uploaded, converted to MD, fetchable
- **PENDING** -- identified, not yet sourced

---

### Networking
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| Network Design Considerations | H16463 | h16463-dell-powerscale-network-design-considerations.md | HAVE | SmartConnect DNS zones, IP pools, link aggregation caveats (no per-session bandwidth increase), MTU consistency, source-based routing (SBR), access zones, VLANs, QoS, firewall |

### Replication
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| SyncIQ Architecture, Configuration & Considerations | H8224 | h8224-replication-isilon-synciq-wp.md | HAVE | Topologies (1:1, 1:many, many:1, cascaded, local target, custom), snapshot differential architecture, coordinator/worker/scheduler/target monitor processes, initial vs incremental vs differential replication, failover/failback procedures, Superna Eyeglass DR, CloudPools, bandwidth throttling/performance rules. Breaking a policy association almost always requires full initial re-sync. SyncIQ snapshots must never be deleted manually. |

### Security
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| SmartLock Best Practices | H18649 | h18649-powerscale-smartLock-best-practices.md | HAVE | Enterprise vs Compliance mode comparison table, compliance clock (isi worm cdate set/view), SEC 17a-4(f) requirement, compadmin sudo account replaces root in Compliance mode, privileged delete (on/off/disabled by mode), one-way conversion (Enterprise->Compliance allowed, reverse not), pending delete flag, WORM exclusion domains, SyncIQ+SmartLock compatibility matrix (Compliance source must replicate to Compliance target), RBAC must be configured before Compliance conversion |

### Protocols
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| OneFS S3 API Guide | H18293 | h18293-dell-powerscale-onefs-s3-api-guide.md | HAVE | S3 on ports 9020 (HTTP) / 9021 (HTTPS), x-isi-path header maps bucket to OneFS directory, full AWS S3 API compatibility table (many silently ignored), object lock supported, lifecycle/versioning/replication/website NOT supported |
| OneFS S3 Overview | H18292 | h18292-onefs-s3-overview.md | HAVE | S3 overview and use cases on OneFS |
| NFS Design Considerations & Best Practices | H17240 | h17240-wp-onefs-nfs-design-considerations-bp.md | HAVE | NFSv3/v4/v4.1, Kerberos alignment with SmartConnect zones, export config, performance tuning |
| SMB Design Considerations | H17463 | h17463-powerscale-design-and-considerations-for-smb.md | HAVE | SMBv2/v3 (v1 disabled by default -- only enable for legacy clients), Multichannel for multi-path throughput, DFS, access-based enumeration, share-level vs file-level permissions |

### Install -- Hardware
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| F910 Site Prep Plan Guide | -- | F910-site-prep-plan-guide.md | HAVE | Power (redundant circuits per PSU), cooling (front-to-back airflow), rack depth requirements, floor load, 4hr acclimation, 6-month unpowered storage limit |
| F910 Node Installation Guide | -- | PowerScale_-_Isilon_F910-PowerScale_Node_Installation_Guide.md | HAVE | F910 racking (2U), cabling (100GbE backend, LOM management), NIC port layout |
| F210 & F710 Node Installation Guide | -- | PowerScale_Isilon_F210_and_F710_PowerScale_Node_Installation.md | HAVE | F210 (1U/4xNVMe) and F710 (1U/10xNVMe) installation |
| A3100 & A310 Node Installation Guide | -- | PowerScale_Isilon_A3100_and_A310_PowerScale_Node_Installation.md | HAVE | A-series 4U deep chassis installation, compute module and drive sled sequence |
| H7100 & H710 Node Installation Guide | -- | PowerScale_Isilon_H7100_and_H710_PowerScale_Node_Installation.md | HAVE | H-series 4U standard/deep chassis, 2-node expansion increments, midplane fuse risk with wrong chassis |

### Install -- Firmware & Upgrade
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| Node Firmware (NFP) Guide | -- | PowerScale_-_Isilon_Firmware-Node_Firmware.md | HAVE | NFP update commands: isi upgrade firmware assess --fw-pkg, isi_upgrade_logs --get-fw-report, isi upgrade cluster firmware start --fw-pkg --parallel, isi upgrade cluster nodes firmware progress list. BIOS/iDRAC/NIC/CPLD are a qualified matched set on Flash nodes -- never install generic PowerEdge firmware. NDU (non-disruptive). |
| Drive Support Package (DSP) Guide | -- | PowerScale_-_Isilon_Firmware-Drive_Support_Package.md | HAVE | Install ONLY via isi_dsp_install /ifs/data/Isilon_Support/Drive_Support_<ver>.tar -- never use isi upgrade patches for DSP. Updates drive firmware, support matrix, and SSD wear data. No manual cleanup needed after install. |
| OneFS Upgrade Planning Guide (9.x to 9.9) | -- | PowerScale_Isilon_OneFS_Upgrade_OneFS_9_x_upto_9_9_Upgrade_Planning.md | HAVE | Parallel upgrade method (9.11+), pre-upgrade compatibility check, commit point of no return, NFP/DSP order of operations |
| On-Cluster Analysis (IOCA) Tool | KB000021811 | PowerScale_How-to-run-the-On-Cluster-Analysis-tool.md | HAVE | THE standard health check tool. perl IOCA to run, perl IOCA -u <version> for upgrade plan, perl IOCA -v for version. Stage to /ifs/data/Isilon_Support/. Verify cluster first with isi_for_array cat /etc/isilon_serial_number. Output: PASS/WARN/FAIL with KB references. Run before upgrades, major maintenance, and at install handover. |

### Backend Switching
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| Leaf-Spine DNOS Implementation Guide | -- | pscale-pub-leaf-spine-dnos-ig.md | HAVE | Required for clusters >22 nodes, DNOS switch configuration |
| Leaf Switch Guide | -- | pscale-pub-leaf-switch-guide.md | HAVE | Standard leaf switch configuration |

### CLI Reference
| Title | Part # | Filename | Status | Key Content |
|-------|--------|----------|--------|-------------|
| OneFS 9.13 CLI Administration Guide | -- | onefs913cliadmin.md | HAVE | Full CLI reference (1,586KB MD). Key validated commands: isi status, isi event events list, isi_dsp_install, isi diagnostics gather (alias: isi_gather_info -- log collection ONLY, not health check), isi upgrade cluster firmware start, isi upgrade cluster nodes firmware progress list, isi worm cdate, isi ntp servers create/list, isi devices drive firmware update |

### Pending
| Title | Part # | Status | Needed For |
|-------|--------|--------|------------|
| OneFS Technical Overview | H10719 | PENDING | Concepts: Architecture (deeper) |
| OneFS OS Overview | H8202 | PENDING | Concepts: Architecture |
| High Availability & Data Protection | H10588 | PENDING | Concepts: Data Protection (deeper) |
| OneFS Best Practices | H16857 | PENDING | Design, Implement |
| Storage Tiering with SmartPools | H8321 | PENDING | Design, Implement |
| InsightIQ / Monitoring Guide | TBD | PENDING | Monitor |
| SnapshotIQ | TBD | PENDING | Implement, Migrate |
| OneFS Job Engine | TBD | PENDING | Monitor |
| CloudPools | TBD | PENDING | Design, Migrate |
| NDMP Backup Guide | TBD | PENDING | Implement |
| Authentication Providers (AD, LDAP) | TBD | PENDING | Implement |
| OneFS Release Contents | H18031 | PENDING | Reference |

---

## 9. Key Decisions & Lessons Learned

**Content:**
- No hardcoded version numbers -- content becomes stale. Reference "current qualified version" and link to Dell Support / Info Hub.
- Why + When + How is the core differentiator from standard Dell docs.
- Backend cable is the ONLY prerequisite to cluster formation -- frontend, management, DNS, NTP can all be configured post-formation.
- Firmware update (NFP then DSP) happens BEFORE health check (IOCA), which is the final gate before handover.
- SED pre-format is no longer required -- drives format during the node join process in current OneFS.
- SMBv1 is disabled by default -- never list as standard option. Only for legacy clients with no alternative.
- Breaking a SyncIQ policy association almost always requires a full initial re-sync.

**CLI validation:**
- isi_gather_info / isi diagnostics gather = log collection tool, NOT health check.
- perl IOCA = the real health check tool (IOCA, staged to /ifs/data/Isilon_Support/).
- isi_phone_home --healthcheck = does not exist.
- isi devices node add --node-ip = does not exist. Node join is automatic via backend discovery, approved in WebUI.
- isi_dsp_update = does not exist. Correct command is isi_dsp_install.
- isi upgrade firmware start = incorrect. Correct: isi upgrade cluster firmware start --fw-pkg.
- isi events list --severity = incorrect. Correct: isi event events list.

**Technical:**
- All TSX strings must use double quotes -- single-quoted strings containing apostrophes break the Turbopack parser.
- ConditionalShell.tsx required to suppress portfolio Navbar/Footer on /powerscale/* routes.
- PDF fetching hits size/page limits in Claude -- convert to MD via pdf.ai and host at /powerscale/whitepapers/.
- MHTML files can be read via grep/bash in the Claude container for CLI validation.
- str_replace on TSX files can accidentally match wrong lines -- always view the file before and after editing.

---

## 10. Author Background

Derek Leong -- Dell employee with hands-on experience across the full PowerScale lifecycle:
- Hardware installation
- Implementation & configuration
- Migrations
- Disaster recovery (Superna Eyeglass DR)
- SED drive validation
- Day-to-day operations and troubleshooting

Derek reviews all content for accuracy before each push to production.

---

*PRD last updated April 2026. Upload this document when starting a new chat to resume.*  
*White paper MD files live at thejpmoregainproject.com/powerscale/whitepapers/ -- paste URLs directly to fetch in new chat.*
