import { SectionPlaceholder } from '../_components/SectionPlaceholder'

export const metadata = { title: 'Install' }

export default function InstallPage() {
  return (
    <SectionPlaceholder
      title="Install"
      description="Hardware installation, node setup, and cluster formation -- from racking the first node to a healthy, joined cluster ready for configuration."
      whyNote="The install phase sets constraints you'll live with for years. Cabling errors, wrong IP schemes, and missed firmware steps are all dramatically cheaper to fix before the cluster has data on it. This guide covers not just the steps, but when each decision closes off future options."
      topics={[
        { title: 'Pre-installation checklist -- site readiness, power, cooling, networking' },
        { title: 'Hardware overview -- node types, drive configurations, chassis options' },
        { title: 'Physical installation -- racking, cabling, backend fabric wiring' },
        { title: 'First node bootstrap -- IPMI/iDRAC access, initial OneFS install' },
        { title: 'Cluster formation -- joining nodes, quorum, internal network config' },
        { title: 'Firmware and patch baseline -- what to apply before going live' },
        { title: 'Post-install validation -- health checks, CLI verification commands' },
        { title: 'Common installation pitfalls -- and how to recover from them' },
      ]}
    />
  )
}
