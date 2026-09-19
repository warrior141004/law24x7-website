import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'
import { useAuthModal } from '../context/AuthModalContext'
import { ease } from './ui'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-0.5">
      <span className="flex items-center rounded-[6px] overflow-hidden font-serif text-xl font-extrabold leading-none">
        <span className="bg-coral px-1.5 py-1.5 text-navy">L</span>
        <span className="px-0.5 py-1.5 text-navy">aw</span>
        <span className="ml-1 rounded-[4px] bg-coral px-1.5 py-1 text-sm tracking-tight text-white">24x7</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openAuth } = useAuthModal()
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  const goto = (mode) => { setOpen(false); openAuth(mode) }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass-hero shadow-[0_20px_50px_-24px_rgba(28,47,82,0.35)]' : 'border border-transparent'
        }`}
      >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-full px-4 py-2 text-base font-medium text-ink-2 transition hover:bg-navy/5 hover:text-navy">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={() => openAuth('signin')} className="hidden rounded-full px-4 py-2.5 text-base font-semibold text-navy transition hover:bg-navy/5 md:inline-flex">
            Sign in
          </button>
          <button onClick={() => openAuth('signup')} className="hidden rounded-full bg-navy px-5 py-2.5 text-base font-semibold text-white transition hover:bg-navy-2 md:inline-flex">
            Sign up
          </button>
          <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full text-navy lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="card-strong absolute top-20 left-4 right-4 rounded-3xl p-4 lg:hidden"
          >
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-base text-ink-2 hover:bg-navy/5 hover:text-navy">
                {n.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button onClick={() => goto('signin')} className="rounded-xl border border-ink/12 px-4 py-3 text-center text-base font-semibold text-navy">
                Sign in
              </button>
              <button onClick={() => goto('signup')} className="rounded-xl bg-coral px-4 py-3 text-center text-base font-semibold text-white">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
