import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects, type Project } from '@/data/portfolio'

const CATEGORIES = ['All', 'AI/ML', 'Full Stack', 'Frontend']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6 group hover:shadow-glow hover:border-brand-400/50 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium border"
            style={{
              background: 'var(--brand-light)',
              color: 'var(--brand)',
              borderColor: 'var(--border)',
            }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800">
              <Star size={10} fill="currentColor" />
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href="#"
            aria-label={`View ${project.title} on GitHub`}
            className="text-[var(--text-muted)] hover:text-brand-500 transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href="#"
            aria-label={`Open ${project.title} live demo`}
            className="text-[var(--text-muted)] hover:text-brand-500 transition-colors"
          >
            <ExternalLink size={17} />
          </a>
        </div>
      </div>

      {/* Title & Description */}
      <h3
        className="font-display font-bold text-lg mb-3 group-hover:text-brand-500 transition-colors duration-200 leading-snug"
        style={{ color: 'var(--text-primary)' }}
      >
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.article>
  )
}

/**
 * Projects section with category filter tabs and animated card grid.
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() =>
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Projects"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="What I've built"
          title="Featured "
          highlight="Projects"
          subtitle="A selection of projects spanning AI/ML, full stack development, and frontend engineering."
        />

        {/* Filter tabs */}
        <FadeIn className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`
                px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-glow'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-brand-400 hover:text-brand-500'}
              `}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
