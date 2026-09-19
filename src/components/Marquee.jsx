import { Landmark, Scale, Building2, Briefcase, GraduationCap } from 'lucide-react'
import { venues } from '../data/content'
import { Reveal } from './ui'

const icons = { Landmark, Scale, Building2, Briefcase, GraduationCap }

// A calm, honest trust strip: the kinds of venues and practices the platform
// is built for, not fabricated client logos.
export default function Marquee() {
  return (
    <div className="border-y border-line bg-cream-2 py-8">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center text-sm font-bold tracking-[0.2em] text-ink-3 uppercase">Built for use across</div>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {venues.map((v) => {
            const Icon = icons[v.icon]
            return (
              <li key={v.label} className="flex items-center gap-2 text-base font-medium text-ink-2">
                <Icon className="h-4.5 w-4.5 text-coral" />
                {v.label}
              </li>
            )
          })}
        </ul>
      </Reveal>
    </div>
  )
}
