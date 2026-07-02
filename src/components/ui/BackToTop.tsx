import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

/**
 * Floating back-to-top button that appears after scrolling 400px.
 */
export default function BackToTop() {
  const { showBackTop } = useScrollProgress()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {showBackTop && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1,  y: 0 }}
          exit={{   opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-xl
            bg-gradient-to-br from-brand-500 to-accent-500
            text-white shadow-glow
            flex items-center justify-center
            hover:scale-110 hover:shadow-glow-lg
            active:scale-95
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
          "
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
