import { SectionPlaceholder } from '../_components/SectionPlaceholder'

export const metadata = { title: 'Monitor' }

export default function MonitorPage() {
  return (
    <SectionPlaceholder
      title="Monitor"
      description="InsightIQ, performance metrics, alerting configuration, and proactive monitoring -- what to watch so incidents are discoveries, not surprises."
      whyNote="Most PowerScale incidents are visible in the data before they become outages. The challenge is knowing what to look at, what the normal baseline is, and which alerts actually need action at 2AM versus which can wait until morning. This guide is about building that context."
      topics={[
        { title: 'OneFS health monitoring -- dashboard, events, and what each alert level means' },
        { title: 'Key performance metrics -- IOPS, throughput, latency, and CPU per node' },
        { title: 'InsightIQ setup -- data collection, reports, and trend analysis' },
        { title: 'Capacity monitoring -- when to act on usage trends before you hit the wall' },
        { title: 'Job engine monitoring -- SyncIQ, SmartPools, SnapshotIQ job health' },
        { title: 'Drive health and rebuild monitoring -- SMART data, rebuild rate math' },
        { title: 'SNMP and syslog integration -- connecting OneFS to your existing tools' },
        { title: 'Alert tuning -- separating signal from noise in production environments' },
      ]}
    />
  )
}
