import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  )
}

// Small accent-bar label, echoing the deck's own section headers.
export function Eyebrow({ children, color = 'coral' }) {
  const bar = color === 'coral' ? 'bg-coral' : color === 'navy' ? 'bg-navy' : 'bg-green'
  const text = color === 'coral' ? 'text-coral' : color === 'navy' ? 'text-navy' : 'text-green'
  return (
    <span className={`inline-flex items-center gap-2.5 text-sm font-bold tracking-[0.14em] uppercase ${text}`}>
      <span className={`h-3.5 w-1 rounded-full ${bar}`} />
      {children}
    </span>
  )
}

// A plain, dependable heading reveal: fades and rises into place once,
// nothing flashier. Kept as one component so every section stays consistent.
export function Words({ text, className = '', delay = 0, as: Tag = 'h2' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <Tag ref={ref} className={className}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease, delay }}
      >
        {text}
      </motion.span>
    </Tag>
  )
}

export function Reveal({ children, className = '', delay = 0, y = 18, once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

// Number that counts up once when it scrolls into view.
export function Counter({ value, prefix = '', suffix = '', decimals, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 70, damping: 22, mass: 1 })
  const d = decimals ?? (Number.isInteger(value) ? 0 : 2)
  const text = useTransform(spring, (v) => `${prefix}${v.toFixed(d)}${suffix}`)
  const [display, setDisplay] = useState(`${prefix}${(0).toFixed(d)}${suffix}`)
  useEffect(() => text.on('change', setDisplay), [text])
  useEffect(() => { if (inView) mv.set(value) }, [inView, value, mv])
  return <span ref={ref} className={className}>{display}</span>
}

// Plain card with a small, predictable hover lift — no cursor-tracking tilt.
// (Kept as "TiltCard" so every section that uses it needs no changes.)
export function TiltCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  )
}

// A plain button: solid color, a clear hover state, nothing that follows the cursor.
// Pass `onClick` (e.g. to open the sign-in modal) to render a <button>, or `href`
// for a normal link/anchor — never both.
export function MagneticButton({ children, className = '', href, primary = false, onClick }) {
  const base = primary
    ? 'bg-coral text-white hover:bg-coral-2 shadow-[0_2px_10px_-2px_rgba(226,73,46,0.4)]'
    : 'bg-white text-navy border border-ink/15 hover:border-navy/40 hover:bg-navy/5'
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-colors duration-200 ${base} ${className}`
  if (onClick) {
    return <button type="button" onClick={onClick} className={cls}>{children}</button>
  }
  return <a href={href || '#'} className={cls}>{children}</a>
}
