import { SectionPlaceholder } from '../_components/SectionPlaceholder'

export const metadata = { title: 'Implement' }

export default function ImplementPage() {
  return (
    <SectionPlaceholder
      title="Implement"
      description="Configuration, protocol setup, access zones, and authentication -- turning a healthy cluster into a working storage platform."
      whyNote="Implementation order matters more than most guides admit. Configuring authentication before access zones, or enabling protocols before SmartConnect is stable, creates dependency problems that are tedious to untangle. This guide covers the sequencing rationale, not just the steps."
      topics={[
        { title: 'Initial cluster configuration -- DNS, NTP, SMTP, licensing' },
        { title: 'Access zones -- when to use them, how many, and zone isolation rules' },
        { title: 'Authentication providers -- AD, LDAP, local -- order of evaluation' },
        { title: 'NFS configuration -- exports, client permissions, NFSv4 considerations' },
        { title: 'SMB configuration -- shares, access-based enumeration, DFS' },
        { title: 'S3 configuration -- bucket setup, IAM-equivalent policies on OneFS' },
        { title: 'SmartConnect setup -- DNS delegation, IP pool configuration, policies' },
        { title: 'Quota configuration -- directory quotas, advisory vs. hard limits' },
        { title: 'Snapshot policies -- SnapshotIQ schedule design and retention' },
      ]}
    />
  )
}
