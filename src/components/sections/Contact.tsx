import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalInfo } from '@/data/portfolio'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'tanvisajith',
    href: personalInfo.linkedin,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Tanvisajith05',
    href: personalInfo.github,
    color: 'from-purple-500 to-pink-500',
  },
]

/**
 * Contact section with a "mailto" form and direct social link cards.
 */
export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending — in production, replace with a real API call (e.g. Resend, EmailJS)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
    // Open mailto as fallback
    const subject = encodeURIComponent(`Portfolio contact from ${formState.name}`)
    const body = encodeURIComponent(formState.message)
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`)
  }

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Contact me"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Let's connect"
          title="Get In "
          highlight="Touch"
          subtitle="Have an opportunity, a question, or just want to say hi? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — Contact cards + location */}
          <FadeIn direction="left">
            <div className="space-y-4">
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                I'm currently open to internship and full-time opportunities in software engineering and web development. Feel free to reach out through any of the channels below.
              </p>

              {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 p-4 hover:border-brand-400/50 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${color} text-white shadow-glow group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="font-medium text-sm group-hover:text-brand-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="glass-card flex items-center gap-4 p-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Location</p>
                  <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>India · Open to Remote</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Message form */}
          <FadeIn direction="right" delay={0.1}>
            <div className="glass-card p-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <CheckCircle size={48} className="text-green-500" />
                  <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    Message sent!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }) }}
                    className="btn-secondary text-sm px-5 py-2"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h3 className="font-display font-bold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                    Send a message
                  </h3>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Name <span aria-hidden="true" className="text-brand-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formState.name}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        placeholder="Your name"
                        className="
                          w-full px-4 py-2.5 rounded-xl text-sm
                          bg-[var(--bg-secondary)] border border-[var(--border)]
                          text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                          focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
                          transition-all duration-200
                        "
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Email <span aria-hidden="true" className="text-brand-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="
                          w-full px-4 py-2.5 rounded-xl text-sm
                          bg-[var(--bg-secondary)] border border-[var(--border)]
                          text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                          focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
                          transition-all duration-200
                        "
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Message <span aria-hidden="true" className="text-brand-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                        placeholder="What would you like to say?"
                        className="
                          w-full px-4 py-2.5 rounded-xl text-sm resize-none
                          bg-[var(--bg-secondary)] border border-[var(--border)]
                          text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
                          focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
                          transition-all duration-200
                        "
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
