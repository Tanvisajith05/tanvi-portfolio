import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import FadeIn from '@/components/ui/FadeIn'
import { skillCategories } from '@/data/portfolio'

function SkillCard({ category, index }: { category: typeof skillCategories[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6 hover:border-brand-400/50 hover:shadow-glow transition-all duration-300 group"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-900/50 dark:to-accent-900/50 border border-[var(--border)] group-hover:scale-110 transition-transform duration-200"
          aria-hidden="true"
        >
          {category.icon}
        </span>
        <h3 className="font-display font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
          {category.label}
        </h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
            className="
              px-3 py-1.5 rounded-lg text-xs font-medium
              bg-[var(--bg-secondary)] border border-[var(--border)]
              hover:border-brand-400 hover:text-brand-500
              transition-all duration-150 cursor-default
            "
            style={{ color: 'var(--text-secondary)' }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

/**
 * Skills section showing grouped categories in a responsive card grid.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-label="Skills and technologies"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Tech stack"
          title="Skills & "
          highlight="Technologies"
          subtitle="Languages, frameworks, tools, and security concepts I work with."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.label} category={category} index={i} />
          ))}
        </div>

        {/* All skills marquee */}
        <FadeIn delay={0.3} className="mt-12 overflow-hidden">
          <p className="text-center text-xs font-mono mb-4" style={{ color: 'var(--text-muted)' }}>
            ALL TECHNOLOGIES
          </p>
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {[0, 1].map(pass => (
              <motion.div
                key={pass}
                className="flex gap-3 shrink-0 pr-3"
                animate={{ x: ['0%', '-100%'] }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                aria-hidden={pass === 1}
              >
                {skillCategories.flatMap(c => c.skills).map((s, i) => (
                  <span
                    key={`${s}-${i}`}
                    className="
                      whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium
                      border border-[var(--border)] bg-[var(--bg-card)]
                    "
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
