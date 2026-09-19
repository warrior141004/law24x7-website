import { Check, ArrowRight } from 'lucide-react'
import { pricing } from '../data/content'
import { useAuthModal } from '../context/AuthModalContext'
import { Section, Eyebrow, Words, Reveal, TiltCard } from './ui'

export default function Pricing() {
  const { openAuth } = useAuthModal()
  return (
    <Section id="pricing" className="py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal><Eyebrow>Pricing</Eyebrow></Reveal>
        <Words text="Simple plans for students, advocates, firms and institutions." className="mt-6 font-serif text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-ink sm:text-5xl" />
        <Reveal delay={0.2} className="mt-5 text-lg text-ink-2">Indicative pricing — talk to us for a plan that fits your practice.</Reveal>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
        {pricing.map((p, i) => (
          <Reveal key={p.tier} delay={i * 0.07}>
            {p.featured ? (
              // The one glassmorphism accent on the page: a frosted card over a
              // soft color glow, to mark the recommended plan without shouting.
              <div className="relative">
                <div className="pointer-events-none absolute -top-10 -left-8 h-32 w-32 rounded-full bg-coral/35 blur-3xl" />
                <div className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-gold/30 blur-3xl" />
                <TiltCard className="glass relative h-full rounded-3xl p-6">
                  <span className="absolute -top-3 left-6 rounded-full bg-coral px-3 py-1 text-sm font-bold tracking-widest text-white uppercase">Most popular</span>
                  <div className="text-sm font-bold tracking-[0.16em] text-ink-3 uppercase">{p.tier}</div>
                  <div className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">{p.price}</div>
                  <div className="text-sm text-ink-3">{p.per || 'Enterprise and usage revenue'}</div>
                  <ul className="mt-6 space-y-2.5">
                    {p.points.map((x) => (
                      <li key={x} className="flex items-center gap-2 text-base text-ink-2"><Check className="h-3.5 w-3.5 text-coral" />{x}</li>
                    ))}
                  </ul>
                  <button onClick={() => openAuth('signup')} className="mt-8 flex w-full items-center justify-center gap-1.5 rounded-full bg-coral py-2.5 text-base font-semibold text-white transition hover:bg-coral-2">
                    Get started <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </TiltCard>
              </div>
            ) : (
              <TiltCard className="card relative h-full rounded-3xl p-6">
                <div className="text-sm font-bold tracking-[0.16em] text-ink-3 uppercase">{p.tier}</div>
                <div className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">{p.price}</div>
                <div className="text-sm text-ink-3">{p.per || 'Enterprise and usage revenue'}</div>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((x) => (
                    <li key={x} className="flex items-center gap-2 text-base text-ink-2"><Check className="h-3.5 w-3.5 text-coral" />{x}</li>
                  ))}
                </ul>
                <button onClick={() => openAuth('signup')} className="mt-8 flex w-full items-center justify-center gap-1.5 rounded-full border border-ink/12 py-2.5 text-base font-semibold text-navy transition hover:bg-navy/5">
                  Get started <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </TiltCard>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
