import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Full-screen loading splash shown briefly on first render.
 * Fades out after 1.4 seconds.
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg-primary)' }}
          aria-hidden="true"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-display font-extrabold text-4xl shadow-glow-lg mb-6"
          >
            T
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-display font-bold text-xl gradient-text"
          >
            Tanvi S Ajith
          </motion.p>

          {/* Spinner bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 w-32 h-0.5 bg-[var(--border)] rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
              className="h-full w-1/2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
