import { Scale, Building2, GraduationCap, Briefcase } from 'lucide-react'
import { users } from '../data/content'
import { Section, Eyebrow, Words, Reveal, TiltCard } from './ui'

// Matches the deck's four category tints exactly: advocates rose, firms amber, students green, corporate blue.
const tints = [
  { bg: 'bg-coral-tint', icon: 'text-coral-2', label: 'text-coral-2' },
  { bg: 'bg-gold-tint', icon: 'text-gold', label: 'text-gold' },
  { bg: 'bg-green-tint', icon: 'text-green', label: 'text-green' },
  { bg: 'bg-azure-tint', icon: 'text-azure', label: 'text-azure' },
]

export default function Users() {
  return (
    <Section id="users" className="py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal><Eyebrow color="navy">Target users</Eyebrow></Reveal>
        <Words text="Built for every legal professional." className="mt-6 font-serif text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-ink sm:text-5xl" />
        <Reveal delay={0.2} className="mt-5 text-lg text-ink-2">Law24x7 empowers every legal professional and institution with faster, smarter and trustworthy legal intelligence.</Reveal>
      </div>
      <div className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((u, i) => {
            const Icon = { Scale, Building2, GraduationCap, Briefcase }[u.icon]
            const t = tints[i % tints.length]
            return (
              <Reveal key={u.title} delay={i * 0.08}>
                <TiltCard intensity={7} className={`card group h-full rounded-3xl p-6 transition-colors hover:border-navy/20`}>
                  <div className="flex items-center justify-between">
                    <span className={`grid h-11 w-11 place-items-center rounded-2xl ${t.bg} ${t.icon} transition-transform duration-500 group-hover:scale-110`}><Icon className="h-5 w-5" /></span>
                    <span className={`text-sm font-bold tracking-[0.16em] ${t.label} uppercase`}>Primary</span>
                  </div>
                  <div className="mt-6 text-xl font-semibold tracking-tight text-ink">{u.title}</div>
                  <div className="text-base text-ink-2">{u.sub}</div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {u.points.map((p) => <li key={p} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-ink-2">{p}</li>)}
                  </ul>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
