import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, X, Check } from 'lucide-react'
import { comparison, impact } from '../data/content'
import { Section, Eyebrow, Words, Reveal, Counter, TiltCard, ease } from './ui'

function CompareRow({ from, to, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease, delay: i * 0.08 }}
      className="group grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-line py-4 last:border-0 sm:gap-6"
    >
      <div className="flex items-center gap-3 text-sm text-ink-3 line-through decoration-ink-3/40 sm:text-base">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral-tint text-coral-2"><X className="h-3.5 w-3.5" /></span>
        {from}
      </div>
      <motion.span
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300 }}
        className="grid h-8 w-8 place-items-center rounded-full border border-coral/25 bg-coral-tint text-coral-2"
      >
        <ArrowRight className="h-4 w-4" />
      </motion.span>
      <div className="flex items-center gap-3 text-sm font-medium text-ink sm:text-base">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-tint text-green"><Check className="h-3.5 w-3.5" /></span>
        {to}
      </div>
    </motion.div>
  )
}

export default function Why() {
  return (
    <Section id="why" className="py-28 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal><Eyebrow>Why the market needs us</Eyebrow></Reveal>
          <Words
            text="Advocates lose hours to outdated, manual and fragmented research."
            className="mt-6 font-serif text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-ink sm:text-5xl"
          />
          <Reveal delay={0.2} className="mt-6 text-ink-2 leading-relaxed">
            Law24x7 turns complex legal data into actionable legal intelligence — helping advocates and law firms work more efficiently.
            <span className="mt-4 block text-sm font-bold tracking-[0.1em] text-coral uppercase">
              Less time searching · More time on strategy
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="card rounded-3xl p-5 sm:p-8">
            <div className="mb-3 grid grid-cols-[1fr_auto_1fr] text-sm font-bold tracking-[0.16em] uppercase">
              <span className="text-ink-3">The traditional way</span>
              <span />
              <span className="text-coral">The Law24x7 way</span>
            </div>
            {comparison.map((c, i) => <CompareRow key={c.from} {...c} i={i} />)}
          </div>
        </Reveal>
      </div>

      {/* Impact stats */}
      <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((it, i) => (
          <Reveal key={it.n} delay={i * 0.1}>
            <TiltCard className="card h-full rounded-3xl p-6 transition-colors hover:border-coral/25">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-bold text-coral">0{it.n}</span>
                <span className="text-sm font-bold tracking-[0.16em] text-ink-3 uppercase">Why it matters</span>
              </div>
              <div className="mt-8 font-serif text-4xl font-bold tracking-tight text-coral-gradient sm:text-5xl">
                {it.value ? (it.n === 1 ? <>80–<Counter value={it.value} suffix={it.suffix} /></> : <Counter value={it.value} suffix={it.suffix} />) : it.stat}
              </div>
              <div className="mt-1 text-sm font-bold tracking-[0.14em] text-navy uppercase">{it.label}</div>
              <div className="mt-6 text-base font-semibold text-ink">{it.title}</div>
              <div className="mt-1 text-sm text-ink-2">{it.desc}</div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
