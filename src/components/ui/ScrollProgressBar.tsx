import { useScrollProgress } from '@/hooks/useScrollProgress'

/**
 * Thin gradient progress bar fixed at the top of the viewport,
 * showing how far the user has scrolled down the page.
 */
export default function ScrollProgressBar() {
  const { progress } = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px]"
      style={{ background: 'transparent' }}
    >
      <div
        className="h-full bg-gradient-to-r from-brand-500 via-accent-500 to-brand-400 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
