import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { usps } from '../data/content'
import { visuals } from './Visuals'
import { Section, Eyebrow, Words, Reveal, ease } from './ui'

function Step({ u, i, onActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })
  useEffect(() => { if (inView) onActive(i) }, [inView, i, onActive])
  return (
    <div ref={ref} className="flex min-h-[70vh] flex-col justify-center py-16 lg:min-h-[85vh]">
      <motion.div animate={{ opacity: inView ? 1 : 0.4 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-coral">{u.n}</span>
          <span className="h-px w-10 bg-coral/40" />
          <span className="text-sm font-bold tracking-[0.18em] text-navy uppercase">{u.eyebrow}</span>
        </div>
        <h3 className="mt-5 font-serif text-3xl leading-[1.1] font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-5xl">{u.title}</h3>
        <p className="mt-5 max-w-lg text-ink-2 leading-relaxed">{u.desc}</p>
        <ul className="mt-7 space-y-3">
          {u.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-ink">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral-tint text-coral-2"><Check className="h-3 w-3" /></span>
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-sm font-bold tracking-[0.18em] text-coral uppercase">{u.footer}</div>
        {/* Mobile-only visual */}
        <div className="mt-8 aspect-[4/3] w-full lg:hidden">
          {(() => { const V = visuals[u.visual]; return <V /> })()}
        </div>
      </motion.div>
    </div>
  )
}

export default function Features() {
  const [active, setActive] = useState(0)
  const Visual = visuals[usps[active].visual]

  return (
    <Section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal><Eyebrow>Salient features</Eyebrow></Reveal>
        <Words text="AI speed. Indian legal depth. Verified citations." className="mt-6 font-serif text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-ink sm:text-5xl" />
        <Reveal delay={0.2} className="mt-5 text-ink-2">A connected intelligence layer for Indian legal work — every answer stays tied to authority.</Reveal>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          {usps.map((u, i) => <Step key={u.n} u={u} i={i} onActive={setActive} />)}
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-28 h-[calc(100vh-9rem)] max-h-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30, scale: 0.96, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.96, rotateX: -8 }}
                transition={{ duration: 0.6, ease }}
                style={{ transformPerspective: 1200 }}
                className="h-full"
              >
                <Visual />
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 flex justify-center gap-2">
              {usps.map((_, i) => (
                <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-coral' : 'w-2 bg-line'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
