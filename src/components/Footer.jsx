import { ArrowRight, Mail } from 'lucide-react'
import { nav } from '../data/content'
import { useAuthModal } from '../context/AuthModalContext'
import { Section, Reveal, Words, MagneticButton } from './ui'

export default function Footer() {
  const { openAuth } = useAuthModal()
  return (
    <>
      <Section id="cta" className="py-20 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-6 py-20 text-center sm:px-12 sm:py-28">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_15%,rgba(200,16,46,0.2),transparent_65%)]" />
            <div className="relative">
              <div className="mb-6 text-sm font-bold tracking-[0.25em] text-[#ff8398] uppercase">Legal intelligence, built for India</div>
              <Words text="Less time searching. More time on legal strategy." className="mx-auto max-w-3xl font-serif text-4xl leading-[1.1] font-bold tracking-[-0.015em] text-white sm:text-5xl" />
              <Reveal delay={0.15} className="mx-auto mt-6 max-w-xl text-lg text-white/70">
                Search, cases, citations and advocate productivity in one connected platform. Join the advocate and law-college pilot.
              </Reveal>
              <Reveal delay={0.25} className="mt-10 flex flex-wrap justify-center gap-3">
                <MagneticButton onClick={() => openAuth('signup')} primary>Request access <ArrowRight className="h-4 w-4" /></MagneticButton>
                <MagneticButton href="mailto:hello@law24x7.in" className="!bg-white/10 !text-white !border-white/25 hover:!bg-white/15"><Mail className="h-4 w-4" /> Talk to the founders</MagneticButton>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-line px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="flex items-center rounded-[6px] overflow-hidden font-serif text-lg font-extrabold leading-none">
              <span className="bg-coral px-1.5 py-1.5 text-navy">L</span>
              <span className="px-0.5 py-1.5 text-navy">aw</span>
              <span className="ml-1 rounded-[4px] bg-coral px-1.5 py-1 text-sm text-white">24x7</span>
            </span>
            <span className="text-sm text-ink-3">From legal information to legal intelligence.</span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base text-ink-2">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-coral">{n.label}</a></li>)}
          </ul>
          <div className="text-sm text-ink-3">© {new Date().getFullYear()} Law24x7. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
