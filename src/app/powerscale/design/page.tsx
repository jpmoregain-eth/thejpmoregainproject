import { SectionPlaceholder } from '../_components/SectionPlaceholder'

export const metadata = { title: 'Design' }

export default function DesignPage() {
  return (
    <SectionPlaceholder
      title="Design"
      description="Cluster sizing, network architecture, protection planning, and SmartPools design -- the decisions you make before touching hardware."
      whyNote="Design mistakes are expensive. A cluster undersized for metadata workloads, a flat network that can't support SmartConnect, or a protection level that makes rebuild times unacceptably long -- all of these are fixable, but not easily. This guide covers what to model upfront and why each trade-off matters for your specific workload."
      topics={[
        { title: 'Workload profiling -- what questions to ask before sizing anything' },
        { title: 'Cluster sizing -- capacity, performance, and node pool calculations' },
        { title: 'Node type selection -- SSD, SAS, SATA, archive -- when to use each' },
        { title: 'Network design -- frontend topology, SmartConnect zones, VLAN strategy' },
        { title: 'Backend fabric design -- InfiniBand vs. 25GbE, cabling rules' },
        { title: 'Protection level planning -- how to model MTTDL for your environment' },
        { title: 'SmartPools design -- defining tiers, file pool policies, SSD strategy' },
        { title: 'Capacity growth planning -- when to add nodes vs. drives' },
      ]}
    />
  )
}
