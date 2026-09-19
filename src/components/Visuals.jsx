import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, FileText, Sparkles, Scale, Check } from 'lucide-react'
import { ease } from './ui'

const Frame = ({ children, title }) => (
  <div className="card-strong h-full w-full overflow-hidden rounded-3xl">
    <div className="flex items-center gap-2 border-b border-line px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-coral/40" /><span className="h-2.5 w-2.5 rounded-full bg-gold/40" /><span className="h-2.5 w-2.5 rounded-full bg-green/40" />
      <span className="ml-3 text-sm font-medium text-ink-3">{title}</span>
    </div>
    <div className="relative h-[calc(100%-41px)] bg-cream/60 p-5">{children}</div>
  </div>
)

const stagger = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }

function useTyping(text, speed = 40) {
  const [out, setOut] = useState('')
  useEffect(() => {
    setOut('')
    let i = 0
    const id = setInterval(() => { i++; setOut(text.slice(0, i)); if (i >= text.length) clearInterval(id) }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return out
}

export function SearchVisual() {
  const q = useTyping('adverse possession continuous hostile possession 12 years', 35)
  const results = [
    { t: 'Karnataka Board of Wakf v. Govt. of India', c: 'SC · 2004', s: 98 },
    { t: 'Ravinder Kaur Grewal v. Manjit Kaur', c: 'SC · 2019', s: 94 },
    { t: 'P.T. Munichikkanna Reddy v. Revamma', c: 'SC · 2007', s: 91 },
  ]
  return (
    <Frame title="AI Legal Search">
      <div className="flex items-center gap-3 rounded-2xl border border-coral/30 bg-white px-4 py-3 shadow-[0_10px_30px_-14px_rgba(226,73,46,0.35)]">
        <Search className="h-4 w-4 text-coral" />
        <span className="text-sm text-ink">{q}<span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-coral align-middle" /></span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {['Supreme Court', 'Limitation Act §65', '2000–2026', 'Property'].map((f) => (
          <span key={f} className="rounded-full border border-line bg-white px-2.5 py-1 text-sm text-ink-2">{f}</span>
        ))}
      </div>
      <motion.ul variants={stagger} initial="hidden" animate="show" className="mt-5 space-y-2.5">
        {results.map((r) => (
          <motion.li key={r.t} variants={item} className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3">
            <div>
              <div className="text-sm font-medium text-ink">{r.t}</div>
              <div className="text-sm text-ink-3">{r.c} · linked: Art. 65 Limitation Act</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-cream-2">
                <motion.div initial={{ width: 0 }} animate={{ width: `${r.s}%` }} transition={{ duration: 1.2, ease, delay: 0.6 }} className="h-full bg-gradient-to-r from-navy to-coral" />
              </div>
              <span className="font-mono text-sm font-semibold text-coral-2">{r.s}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Frame>
  )
}

export function RepositoryVisual() {
  const docs = [
    { t: 'High Court Judgments', n: '50,00,000+', bg: 'bg-coral-tint', text: 'text-coral-2' },
    { t: 'Bare Acts & Sections', n: 'Section-level', bg: 'bg-azure-tint', text: 'text-azure' },
    { t: 'Source PDFs & Notes', n: 'Saved matters', bg: 'bg-violet-tint', text: 'text-violet' },
  ]
  return (
    <Frame title="Legal Document Repository">
      <div className="relative h-full">
        {docs.map((d, i) => (
          <motion.div
            key={d.t}
            initial={{ opacity: 0, y: 40, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.15 }}
            style={{ top: `${i * 26}%`, zIndex: 3 - i, transformPerspective: 800 }}
            className="card-strong absolute inset-x-0 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-xl ${d.bg} ${d.text}`}><FileText className="h-4 w-4" /></span>
                <div>
                  <div className="text-sm font-semibold text-ink">{d.t}</div>
                  <div className="text-sm text-ink-3">Unified · searchable · linked</div>
                </div>
              </div>
              <span className="font-mono text-sm font-semibold text-coral-2">{d.n}</span>
            </div>
            <div className="mt-4 space-y-1.5">
              {[92, 70, 84].map((w, j) => (
                <motion.div key={j} initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ duration: 1, ease, delay: 0.6 + i * 0.15 + j * 0.05 }} className="h-1.5 rounded-full bg-cream-2" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Frame>
  )
}

export function SummaryVisual() {
  const sections = [
    { k: 'Facts', v: 'Plaintiff claims ownership by adverse possession of agricultural land held openly since 1998.' },
    { k: 'Issues', v: 'Whether possession was hostile, continuous and exceeded the 12-year statutory period.' },
    { k: 'Ratio', v: 'Adverse possession requires animus possidendi; permissive possession never ripens into title.' },
    { k: 'Key ¶', v: '¶14, ¶22, ¶31 — burden of proof and limitation computation.' },
  ]
  return (
    <Frame title="Instant Case Summary">
      <div className="grid h-full grid-cols-[1fr_1.4fr] gap-4">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-3">
          <div className="mb-2 text-sm tracking-widest text-ink-3 uppercase">Judgment · 48 pages</div>
          {Array.from({ length: 22 }).map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 0.15, 0.5] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.08 }} className="mb-1.5 h-1 rounded bg-ink-3/30" style={{ width: `${55 + ((i * 37) % 45)}%` }} />
          ))}
          <motion.div initial={{ top: '0%' }} animate={{ top: '100%' }} transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }} className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-coral/20 to-transparent" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-2.5">
          <motion.div variants={item} className="flex items-center gap-2 text-sm font-bold tracking-widest text-coral uppercase"><Sparkles className="h-3.5 w-3.5" /> AI summary · 90% faster</motion.div>
          {sections.map((s) => (
            <motion.div key={s.k} variants={item} className="rounded-xl border border-line bg-white p-3">
              <div className="text-sm font-bold tracking-widest text-navy uppercase">{s.k}</div>
              <div className="mt-1 text-sm leading-snug text-ink-2">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Frame>
  )
}

export function GraphVisual() {
  const nodes = [
    { id: 0, x: 50, y: 50, r: 16, c: '#c8102e', l: 'Ravinder Kaur Grewal' },
    { id: 1, x: 22, y: 28, r: 9, c: '#1c2f52' }, { id: 2, x: 78, y: 24, r: 10, c: '#1c2f52' },
    { id: 3, x: 18, y: 70, r: 8, c: '#6248a8' }, { id: 4, x: 82, y: 72, r: 11, c: '#1c2f52' },
    { id: 5, x: 50, y: 14, r: 7, c: '#6248a8' }, { id: 6, x: 44, y: 86, r: 8, c: '#920e26' },
    { id: 7, x: 8, y: 48, r: 6, c: '#1c2f52' }, { id: 8, x: 92, y: 48, r: 7, c: '#6248a8' },
  ]
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,7],[1,5],[2,8],[4,8],[3,7],[2,5],[4,6]]
  return (
    <Frame title="Citation Graph">
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={b === 6 || a === 6 ? '#920e26' : 'rgba(28,47,82,0.22)'}
            strokeWidth="0.4"
            strokeDasharray={b === 6 || a === 6 ? '1.5 1' : '0'}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 + i * 0.08 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.g key={n.id} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 + i * 0.07 }} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
            {n.id === 0 && <motion.circle cx={n.x} cy={n.y} r={n.r / 4} fill="none" stroke={n.c} strokeWidth="0.4" animate={{ r: [n.r / 4, n.r / 2.2], opacity: [0.9, 0] }} transition={{ duration: 2, repeat: Infinity }} />}
            <circle cx={n.x} cy={n.y} r={n.r / 4} fill={n.c} />
          </motion.g>
        ))}
        <text x="50" y="60" textAnchor="middle" fill="#262320" fontSize="2.6" fontWeight="600">Ravinder Kaur Grewal (2019)</text>
        <text x="44" y="93" textAnchor="middle" fill="#920e26" fontSize="2.2">Overruled — weak authority</text>
      </svg>
    </Frame>
  )
}

export function AssistantVisual() {
  return (
    <Frame title="AI Assistant">
      <motion.div variants={stagger} initial="hidden" animate="show" className="flex h-full flex-col justify-end gap-3">
        <motion.div variants={item} className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-navy px-4 py-3 text-sm text-white">
          Can you analyze the strength of our adverse-possession claim?
        </motion.div>
        <motion.div variants={item} className="max-w-[92%] rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold tracking-widest text-coral uppercase"><Sparkles className="h-3 w-3" /> Cited answer</div>
          The claim is <b>moderately strong</b>. Possession since 1998 exceeds 12 years under <span className="rounded bg-azure-tint px-1 text-azure">Art. 65, Limitation Act</span>, but hostility must be proved — see <span className="rounded bg-coral-tint px-1 text-coral-2">Ravinder Kaur Grewal ¶22</span>.
          <div className="mt-3 flex flex-wrap gap-2">
            {['Similar cases (3)', 'Linked acts (2)', 'Open draft'].map((c) => (
              <span key={c} className="flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-sm text-ink-2"><Check className="h-3 w-3 text-green" />{c}</span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item} className="flex items-center gap-2 text-sm text-ink-3">
          <Scale className="h-3.5 w-3.5" /> Every answer links back to source documents. Final advice remains lawyer-reviewed.
        </motion.div>
      </motion.div>
    </Frame>
  )
}

export const visuals = { search: SearchVisual, repository: RepositoryVisual, summary: SummaryVisual, graph: GraphVisual, assistant: AssistantVisual }
