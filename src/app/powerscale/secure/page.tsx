import { SectionPlaceholder } from '../_components/SectionPlaceholder'

export const metadata = { title: 'Secure' }

export default function SecurePage() {
  return (
    <SectionPlaceholder
      title="Secure"
      description="Cluster hardening, SmartLock WORM, access control, and audit configuration -- and when compliance requirements change everything."
      whyNote="SmartLock compliance mode is one of the few OneFS features you can't undo. Understanding why it exists -- and what it permanently locks you into -- is critical before enabling it. This guide covers security posture holistically, but gives compliance mode the weight it deserves."
      topics={[
        { title: 'Cluster hardening baseline -- services, ports, and attack surface reduction' },
        { title: 'Role-based access control -- built-in roles vs. custom RBAC on OneFS' },
        { title: 'SmartLock Enterprise mode -- WORM with administrator override capability' },
        { title: 'SmartLock Compliance mode -- when it applies and what it prevents forever' },
        { title: 'Retention policies -- default retention, minimum, maximum, and how courts read them' },
        { title: 'Audit configuration -- syslog integration, audit zones, what to capture' },
        { title: 'Encryption at rest -- SED drives, key management, and validation' },
        { title: 'Firewall and network isolation -- OneFS firewall rules and access zone boundaries' },
      ]}
    />
  )
}
