import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

/**
 * Hero / landing section.
 * Features: animated greeting, gradient name, typewriter role, social links,
 * CTA buttons, floating background orbs.
 */
export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-500/5 to-accent-500/5 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="section-container relative z-10 text-center pt-24 pb-16">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] shadow-card"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            Open to opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-brand-500 dark:text-brand-400 text-sm sm:text-base font-medium mb-3 tracking-widest uppercase"
        >
          Hi there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Tanvi{' '}
          <span className="gradient-text">S Ajith</span>
        </motion.h1>

        {/* Role pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {['Aspiring Software Engineer', 'Full Stack Developer', 'Cybersecurity Enthusiast'].map((role, i) => (
            <span
              key={role}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium border
                ${i === 0
                  ? 'bg-brand-500 text-white border-brand-500 shadow-glow'
                  : 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)]'}
              `}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* About blurb */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          {personalInfo.about}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary"
          >
            View My Work
            <ArrowDown size={16} />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-secondary"
          >
            Get In Touch
            <Mail size={16} />
          </button>
          <a
            href="/resume.pdf"
            download
            aria-label="Download resume"
            className="btn-secondary"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { href: personalInfo.github,   icon: Github,   label: 'GitHub profile' },
            { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn profile' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Send email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                w-11 h-11 rounded-xl flex items-center justify-center
                border border-[var(--border)] bg-[var(--bg-card)]
                text-[var(--text-muted)]
                hover:text-brand-500 hover:border-brand-400 hover:shadow-glow
                transition-all duration-200 hover:scale-110 active:scale-95
              "
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={() => scrollTo('#about')}
          aria-label="Scroll to about section"
          className="animate-float text-[var(--text-muted)] hover:text-brand-500 transition-colors mx-auto block"
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  )
}
