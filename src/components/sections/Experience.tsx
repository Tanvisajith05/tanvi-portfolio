import { Briefcase, Calendar } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { experiences } from '@/data/portfolio'

/**
 * Experience section with a vertical timeline layout.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Work experience"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Career"
          title="Work "
          highlight="Experience"
          subtitle="Real-world experience building production web applications."
        />

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-brand-500 to-accent-500"
              aria-hidden="true"
            />

            <div className="space-y-8 pl-16">
              {experiences.map((exp, i) => (
                <FadeIn key={exp.id} delay={i * 0.1} direction="left">
                  <article className="relative glass-card p-6 hover:border-brand-400/50 hover:shadow-glow transition-all duration-300">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[3.1rem] top-6 w-5 h-5 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 border-4 border-[var(--bg-secondary)] shadow-glow"
                      aria-hidden="true"
                    />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={16} className="text-brand-500" />
                          <span className="tag">{exp.type}</span>
                        </div>
                        <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        <p className="font-semibold text-brand-500 dark:text-brand-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <Calendar size={13} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>

                    {/* Skills used */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="tag">{skill}</span>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education note */}
          <FadeIn delay={0.2} className="mt-10">
            <div className="glass-card p-6 border-l-4 border-brand-500 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-2xl" aria-hidden="true">🎓</span>
                <div>
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                    B.E. Information Science Engineering
                  </h3>
                  <p className="text-sm font-medium text-brand-500 dark:text-brand-400 mb-2">
                    Expected Graduation: 2027
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Fourth-year student focusing on software engineering, cybersecurity, and AI/ML applications.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
