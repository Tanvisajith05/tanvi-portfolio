import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personalInfo, navLinks } from '@/data/portfolio'

/**
 * Site footer with nav links, social icons, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--bg-card)] py-12"
      aria-label="Site footer"
    >
      <div className="section-container">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <span className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                Tanvi S Ajith
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Aspiring Software Engineer building secure, scalable, and user-friendly applications.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-sm hover:text-brand-500 transition-colors duration-150"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
              Connect
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github,   href: personalInfo.github,   label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-lg flex items-center justify-center
                    border border-[var(--border)] text-[var(--text-muted)]
                    hover:text-brand-500 hover:border-brand-400
                    transition-all duration-200 hover:scale-110
                  "
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          <p>© {year} Tanvi S Ajith. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={11} fill="currentColor" className="text-rose-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
