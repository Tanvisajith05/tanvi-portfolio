import FadeIn from './FadeIn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
}

/**
 * Consistent section header with optional eyebrow text,
 * gradient highlight word, and subtitle.
 */
export default function SectionHeader({ eyebrow, title, highlight, subtitle }: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <FadeIn className="text-center mb-14">
      {eyebrow && (
        <span className="tag mb-4 inline-block">{eyebrow}</span>
      )}
      <h2 className="section-title mb-4">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
      )}
    </FadeIn>
  )
}
