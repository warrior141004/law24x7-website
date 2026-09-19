import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react'
import { SearchVisual } from './Visuals'
import JusticeMotif from './JusticeMotif'
import { brand, pillars } from '../data/content'
import { useAuthModal } from '../context/AuthModalContext'
import { MagneticButton, Reveal, ease } from './ui'

// A calm, static hero: the headline, and a real screenshot of the product
// doing the thing a lawyer actually opens it for. No 3D, nothing that spins —
// it loads instantly and reads clearly on any office or court machine.
export default function Hero() {
  const { openAuth } = useAuthModal()
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_82%_18%,rgba(226,73,46,0.08),transparent_65%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-12">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="mb-3"
          >
            <JusticeMotif size={76} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mb-7 flex flex-wrap items-center gap-2.5"
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
            className="font-serif text-[clamp(2.4rem,5.2vw,4rem)] leading-[1.08] font-bold tracking-[-0.015em] text-ink"
          >
            From legal information to{' '}
            <span className="text-coral">legal intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2"
          >
            {brand.sub} Search, cases, citations and advocate productivity in one connected platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton onClick={() => openAuth('signup')} primary>
              Request access <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#features">See how it works</MagneticButton>
          </motion.div>

          {/* Pillars */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={0.35 + i * 0.06} className="card rounded-2xl p-4">
                <div className="text-sm font-bold text-coral">0{i + 1}</div>
                <div className="mt-1 text-base font-semibold text-navy">{p.key}</div>
                <div className="mt-1 text-sm leading-snug text-ink-2">{p.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* The product, doing the thing */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="aspect-[4/3.1] w-full lg:aspect-[4/3.6]"
        >
          <SearchVisual />
        </motion.div>
      </div>
    </section>
  )
}
