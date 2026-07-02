import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { navLinks } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

const sectionIds = navLinks.map(l => l.href.replace('#', ''))

/**
 * Sticky navbar with smooth scroll links, active indicator,
 * theme toggle, and a slide-down mobile drawer.
 */
export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const scrollTo = useCallback((href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <header
      className={`
        fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl
        rounded-2xl transition-all duration-300
        ${scrolled
          ? 'backdrop-blur-md shadow-card border border-[var(--border)] bg-[var(--bg-card)]/85'
          : 'bg-transparent'}
      `}
    >
      <nav
        className="flex items-center justify-between px-5 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); scrollTo('#home') }}
          className="flex items-center gap-2 group"
          aria-label="Tanvi S Ajith — Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold font-display text-base shadow-glow group-hover:scale-110 transition-transform">
            T
          </div>
          <span className="font-display font-bold text-base hidden sm:block" style={{ color: 'var(--text-primary)' }}>
            Tanvi<span className="gradient-text"> Ajith</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className={`nav-link px-3 ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="
              w-9 h-9 rounded-xl flex items-center justify-center
              border border-[var(--border)] bg-[var(--bg-card)]
              text-[var(--text-secondary)] hover:text-brand-500
              hover:border-brand-400 transition-all duration-200
            "
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="
              md:hidden w-9 h-9 rounded-xl flex items-center justify-center
              border border-[var(--border)] bg-[var(--bg-card)]
              text-[var(--text-secondary)] hover:text-brand-500
              hover:border-brand-400 transition-all duration-200
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-[var(--border)] mx-2 mb-2"
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                      className={`
                        block px-4 py-2.5 text-sm font-medium rounded-xl mx-1 my-0.5
                        transition-colors duration-150
                        ${isActive
                          ? 'text-brand-500 bg-brand-50 dark:bg-brand-900/30'
                          : 'text-[var(--text-secondary)] hover:text-brand-500 hover:bg-[var(--bg-secondary)]'}
                      `}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
