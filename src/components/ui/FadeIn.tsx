import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

/**
 * Wraps children in a Framer Motion div that fades + slides in
 * when it enters the viewport.
 */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const dirMap = {
    up:    { y: 30,  x: 0 },
    down:  { y: -30, x: 0 },
    left:  { y: 0,   x: 30 },
    right: { y: 0,   x: -30 },
    none:  { y: 0,   x: 0 },
  }

  const initial = { opacity: 0, ...dirMap[direction] }
  const animate = isInView ? { opacity: 1, y: 0, x: 0 } : initial

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
