import { Search, FileText, Network, BookOpen, PenLine, FolderOpen, Users as UsersIcon, Sparkles } from 'lucide-react'
import { platform } from '../data/content'
import { Section, Eyebrow, Words, Reveal, TiltCard } from './ui'

const tints = ['coral', 'gold', 'green', 'azure', 'violet']
const tintClasses = {
  coral: { bg: 'bg-coral-tint', text: 'text-coral-2' },
  gold: { bg: 'bg-gold-tint', text: 'text-gold' },
  green: { bg: 'bg-green-tint', text: 'text-green' },
  azure: { bg: 'bg-azure-tint', text: 'text-azure' },
  violet: { bg: 'bg-violet-tint', text: 'text-violet' },
}

export default function Platform() {
  return (
    <Section id="platform" className="bg-cream-2 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal><Eyebrow color="navy">Meet Law24x7</Eyebrow></Reveal>
        <Words
          text="One clean workspace. Search, documents, citations and legal AI — connected."
          className="mt-6 font-serif text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-ink sm:text-5xl"
        />
        <Reveal delay={0.2} className="mt-5 text-ink-2">
          The platform stack connects search, documents, citations and legal AI in one clean workspace, powered by the Legal Intelligence Core.
        </Reveal>
      </div>

      <div className="mt-16 grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platform.map((f, i) => {
          const Icon = { Search, FileText, Network, BookOpen, PenLine, FolderOpen, Users: UsersIcon, Sparkles }[f.icon]
          const wide = f.span === 2
          const t = tintClasses[tints[i % tints.length]]
          return (
            <Reveal key={f.title} delay={(i % 4) * 0.07} className={wide ? 'sm:col-span-2' : ''}>
              <TiltCard intensity={6} className="card group relative h-full overflow-hidden rounded-3xl p-6 transition-colors hover:border-navy/20">
                <div className="flex h-full flex-col justify-between">
                  <div className={`grid h-11 w-11 place-items-center rounded-2xl ${t.bg} ${t.text} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-ink">{f.title}</div>
                    <div className="mt-1 text-base text-ink-2">{f.desc}</div>
                  </div>
                </div>
                {wide && (
                  <div className="pointer-events-none absolute right-6 bottom-6 hidden font-mono text-sm tracking-[0.3em] text-ink-3/60 uppercase sm:block">
                    Legal Intelligence Core
                  </div>
                )}
              </TiltCard>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-8 text-center text-sm font-bold tracking-[0.2em] text-ink-3 uppercase">
        One platform for search • summaries • citations • PDFs • AI assistance
      </Reveal>
    </Section>
  )
}
