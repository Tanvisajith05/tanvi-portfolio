import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalInfo } from '@/data/portfolio'
import { MapPin, GraduationCap, Code2, Shield } from 'lucide-react'

const stats = [
  { label: 'Projects Built',      value: '5+',  icon: Code2 },
  { label: 'Technologies',        value: '20+', icon: Shield },
  { label: 'Certifications',      value: '5',   icon: GraduationCap },
  { label: 'Graduation Year',     value: '2027', icon: MapPin },
]

const interests = [
  { icon: '🌐', label: 'Full Stack Development' },
  { icon: '🔐', label: 'Cybersecurity' },
  { icon: '🤖', label: 'Artificial Intelligence' },
  { icon: '📊', label: 'Machine Learning' },
]

/**
 * About section — bio, stats cards, and interest tags.
 */
export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-label="About me"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Get to know me"
          title="About "
          highlight="Me"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar / Visual */}
          <FadeIn direction="left" className="flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-xl" aria-hidden="true" />
              <div className="relative glass-card p-8 text-center max-w-sm mx-auto">
                {/* Avatar placeholder with initials */}
                <div className="
                  w-28 h-28 rounded-2xl mx-auto mb-5
                  bg-gradient-to-br from-brand-500 to-accent-500
                  flex items-center justify-center
                  text-white font-display font-extrabold text-4xl
                  shadow-glow-lg animate-float
                ">
                  T
                </div>
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                  {personalInfo.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {personalInfo.role}
                </p>

                {/* Location */}
                <div className="flex items-center justify-center gap-1.5 text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-[var(--border)] pt-4">
                  <p className="text-xs font-mono mb-3" style={{ color: 'var(--text-muted)' }}>
                    Interests
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {interests.map(({ icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {icon} {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Text content */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.about}
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                When I'm not coding, I'm exploring the intersection of technology and security — studying ethical hacking fundamentals, network security, and secure development practices. I believe great software is both powerful <em>and</em> secure.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {stats.map(({ label, value, icon: Icon }, i) => (
                  <FadeIn key={label} delay={0.1 + i * 0.08} direction="up">
                    <div className="glass-card p-4 hover:border-brand-400 group transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={15} className="text-brand-500" />
                        <span className="text-2xl font-display font-extrabold gradient-text">
                          {value}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
