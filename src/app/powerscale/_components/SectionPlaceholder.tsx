interface Topic {
  title: string
  subtopics?: string[]
}

interface SectionPlaceholderProps {
  title: string
  description: string
  whyNote: string   // one line on why this section matters
  topics: Topic[]
}

export function SectionPlaceholder({
  title,
  description,
  whyNote,
  topics,
}: SectionPlaceholderProps) {
  return (
    <div>
      {/* Header */}
      <div className="ps-ph-header">
        <p className="ps-eyebrow">Guide</p>
        <h1 className="ps-ph-title">
          {title}
          <span className="ps-status ps-status-soon">Coming Soon</span>
        </h1>
        <p className="ps-ph-desc">{description}</p>

        {/* Why this matters */}
        <div className="ps-ph-why-block">
          <strong>Why this matters</strong>
          {whyNote}
        </div>
      </div>

      {/* Planned content outline */}
      <p className="ps-outline-label">Planned content outline</p>
      <div className="ps-outline">
        {topics.map((topic, i) => (
          <div key={i} className="ps-outline-item">
            <span className="ps-outline-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="ps-outline-title">{topic.title}</span>
            <span className="ps-outline-bar" />
          </div>
        ))}
      </div>
    </div>
  )
}
