import { lazy, Suspense } from 'react'
import { useTheme } from '@/hooks/useTheme'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import BackToTop from '@/components/ui/BackToTop'
import LoadingScreen from '@/components/ui/LoadingScreen'
import Hero from '@/components/sections/Hero'

// Lazy-load below-the-fold sections for better LCP / performance
const About         = lazy(() => import('@/components/sections/About'))
const Projects      = lazy(() => import('@/components/sections/Projects'))
const Skills        = lazy(() => import('@/components/sections/Skills'))
const Experience    = lazy(() => import('@/components/sections/Experience'))
const Certifications = lazy(() => import('@/components/sections/Certifications'))
const Contact       = lazy(() => import('@/components/sections/Contact'))

/** Minimal fallback that preserves layout height while the section loads */
function SectionFallback() {
  return <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" aria-label="Loading…" />
  </div>
}

/**
 * Root application component.
 * Handles theme, layout, and section composition.
 */
export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      {/* Loading splash */}
      <LoadingScreen />

      {/* Scroll progress indicator */}
      <ScrollProgressBar />

      {/* Sticky navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main id="main-content">
        {/* Hero is eagerly loaded — it's the LCP element */}
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />

      {/* Floating back-to-top */}
      <BackToTop />
    </>
  )
}
