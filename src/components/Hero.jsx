import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react'
import { SearchVisual } from './Visuals'
import { brand, pillars } from '../data/content'
import { useAuthModal } from '../context/AuthModalContext'
import { MagneticButton, Reveal, ease } from './ui'

// Centered, single-column hero — the layout most current SaaS/AI product
// sites use (Vercel, Linear, Raycast): headline and CTA dead-center, product
// screenshot large below, so it reads balanced on any screen width, not
// anchored to one side.
export default function Hero() {
  const { openAuth } = useAuthModal()
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(226,73,46,0.09),transparent_65%)]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-7 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span className="card inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-2 text-sm text-ink-2">
            <ShieldCheck className="h-4 w-4 text-coral" />
            Legal intelligence, built for India
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-tint py-1.5 pr-4 pl-3 text-sm font-semibold text-coral-2">
            <MapPin className="h-3.5 w-3.5" />
            Currently live in Rajasthan
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="max-w-3xl font-serif text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.06] font-bold tracking-[-0.015em] text-ink"
        >
          From legal information to{' '}
          <span className="text-coral">legal intelligence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2"
        >
          {brand.sub} Search, cases, citations and advocate productivity in one connected platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton onClick={() => openAuth('signup')} primary>
            Request access <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#features">See how it works</MagneticButton>
        </motion.div>

        {/* Pillars */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={0.35 + i * 0.06} className="card rounded-2xl p-4 text-left">
              <div className="text-sm font-bold text-coral">0{i + 1}</div>
              <div className="mt-1 text-base font-semibold text-navy">{p.key}</div>
              <div className="mt-1 text-sm leading-snug text-ink-2">{p.desc}</div>
            </Reveal>
          ))}
        </div>

        {/* The product, doing the thing — large, centered, slightly tilted in on load */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          style={{ transformPerspective: 1400 }}
          className="relative mt-16 aspect-[4/2.7] w-full max-w-4xl sm:mt-20"
        >
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(226,73,46,0.12),transparent_70%)]" />
          <SearchVisual />
        </motion.div>
      </div>
    </section>
  )
}
