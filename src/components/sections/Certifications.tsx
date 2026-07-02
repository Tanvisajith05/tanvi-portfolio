import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { certifications } from '@/data/portfolio'

function CertCard({ cert, index }: { cert: typeof certifications[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6 group hover:border-brand-400/50 hover:shadow-glow transition-all duration-300 flex items-start gap-4"
    >
      {/* Icon bubble with gradient */}
      <div
        className={`
          w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0
          bg-gradient-to-br ${cert.color} shadow-glow
          group-hover:scale-110 transition-transform duration-200
        `}
        aria-hidden="true"
      >
        {cert.icon}
      </div>

      <div className="min-w-0">
        <h3
          className="font-display font-semibold text-sm leading-snug mb-1 group-hover:text-brand-500 transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}
        >
          {cert.title}
        </h3>
        <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
          <Award size={11} />
          {cert.issuer}
        </p>
      </div>
    </motion.div>
  )
}

/**
 * Certifications section with animated cards.
 */
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding"
      aria-label="Certifications"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Credentials"
          title="Licenses & "
          highlight="Certifications"
          subtitle="Professional certifications earned through continuous learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
