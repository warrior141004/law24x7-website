import { motion } from 'framer-motion'

// A hand-built motion graphic — not a stock asset — so it matches the brand
// exactly and carries no licensing risk. A gently balancing scale is the
// clearest, calmest way to signal "court and law" without being literal
// (no gavel-banging, no courtroom photography).
export default function JusticeMotif({ size = 96, className = '' }) {
  return (
    <svg
      viewBox="0 0 120 128"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Scales of justice, balancing"
    >
      {/* Pedestal */}
      <path d="M46 120 L74 120 L67 110 L53 110 Z" fill="#1c2f52" />
      <rect x="58" y="34" width="4" height="78" rx="2" fill="#1c2f52" />

      {/* Pivot */}
      <circle cx="60" cy="30" r="4.5" fill="#c8102e" />

      {/* Beam + pans, rotating together as one balanced unit */}
      <motion.g
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '60px 30px' }}
      >
        <line x1="24" y1="30" x2="96" y2="30" stroke="#1c2f52" strokeWidth="2.5" strokeLinecap="round" />

        {/* Left pan */}
        <line x1="24" y1="30" x2="18" y2="54" stroke="#1c2f52" strokeWidth="1.3" />
        <line x1="24" y1="30" x2="30" y2="54" stroke="#1c2f52" strokeWidth="1.3" />
        <path d="M12 54 Q24 68 36 54" stroke="#c8102e" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Right pan */}
        <line x1="96" y1="30" x2="90" y2="54" stroke="#1c2f52" strokeWidth="1.3" />
        <line x1="96" y1="30" x2="102" y2="54" stroke="#1c2f52" strokeWidth="1.3" />
        <path d="M84 54 Q96 68 108 54" stroke="#c8102e" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}
