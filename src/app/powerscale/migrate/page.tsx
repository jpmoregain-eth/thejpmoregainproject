import { SectionPlaceholder } from '../_components/SectionPlaceholder'

export const metadata = { title: 'Migrate' }

export default function MigratePage() {
  return (
    <SectionPlaceholder
      title="Migrate"
      description="Data migration planning, SyncIQ-based migrations, and cutover strategy -- moving workloads without losing sleep or losing data."
      whyNote="Migrations fail at the cutover, not during the copy. The data transfer is the easy part -- the hard part is understanding what 'done' looks like, what will break for users, and what the rollback plan is. This guide treats cutover planning as the primary concern and works backwards from there."
      topics={[
        { title: 'Migration scoping -- what to inventory before committing to a plan' },
        { title: 'Migration tool selection -- SyncIQ vs. ndmpcopy vs. third-party tools' },
        { title: 'SyncIQ migration setup -- policies, initial seed, ongoing sync' },
        { title: 'Permissions migration -- how to map and validate ACLs across environments' },
        { title: 'Cutover planning -- downtime windows, client redirect strategies' },
        { title: 'DNS and DFS cutover -- making the switch transparent to end users' },
        { title: 'Post-migration validation -- what to check before decommissioning source' },
        { title: 'Rollback procedures -- when to pull back and how to do it cleanly' },
      ]}
    />
  )
}
