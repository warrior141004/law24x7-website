import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Mail, Lock, User, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useAuthModal } from '../context/AuthModalContext'
import { ease } from './ui'

function Field({ icon: Icon, label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-2">{label}</span>
      <span className="flex items-center gap-2.5 rounded-xl border border-ink/12 bg-white/70 px-3.5 py-2.5 transition focus-within:border-navy/40 focus-within:bg-white">
        <Icon className="h-4 w-4 shrink-0 text-ink-3" />
        <input {...props} aria-label={label} className="w-full bg-transparent text-base text-ink placeholder:text-ink-3 focus:outline-none" />
      </span>
    </label>
  )
}

export default function AuthModal() {
  const { open, mode, setMode, closeAuth } = useAuthModal()
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!open) { setSent(false); return }
    const onKey = (e) => { if (e.key === 'Escape') closeAuth() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, closeAuth])

  useEffect(() => { setSent(false) }, [mode])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/45 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) closeAuth() }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={mode === 'signin' ? 'Sign in' : 'Create your account'}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl"
          >
            {/* Decorative color behind the glass so the blur has something to refract */}
            <div className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-coral/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-16 h-52 w-52 rounded-full bg-navy/25 blur-3xl" />

            <div className="glass relative rounded-3xl p-7 sm:p-8">
              <button
                onClick={closeAuth}
                aria-label="Close"
                className="absolute top-5 right-5 grid h-8 w-8 place-items-center rounded-full text-ink-3 transition hover:bg-ink/5 hover:text-ink"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <span className="flex items-center rounded-[5px] overflow-hidden font-serif text-base font-extrabold leading-none">
                <span className="bg-coral px-1 py-1 text-navy">L</span>
                <span className="px-0.5 py-1 text-navy">aw</span>
                <span className="ml-0.5 rounded-[3px] bg-coral px-1 py-0.5 text-sm text-white">24x7</span>
              </span>

              {/* Tabs */}
              <div className="mt-6 grid grid-cols-2 rounded-full bg-ink/6 p-1">
                {[
                  { key: 'signin', label: 'Sign in' },
                  { key: 'signup', label: 'Sign up' },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setMode(t.key)}
                    className={`relative rounded-full py-2 text-base font-semibold transition-colors ${mode === t.key ? 'text-white' : 'text-ink-2 hover:text-ink'}`}
                  >
                    {mode === t.key && (
                      <motion.span layoutId="auth-tab" className="absolute inset-0 rounded-full bg-navy" transition={{ duration: 0.25, ease }} />
                    )}
                    <span className="relative">{t.label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-8 py-4 text-center"
                  >
                    <CheckCircle2 className="mx-auto h-10 w-10 text-green" />
                    {mode === 'signup' ? (
                      <>
                        <div className="mt-4 text-lg font-semibold text-ink">Request received</div>
                        <p className="mt-2 text-base text-ink-2">
                          Law24x7 is currently in early access for advocates and law firms. We'll email <span className="font-medium text-ink">{email || 'you'}</span> within one business day to set up your account.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mt-4 text-lg font-semibold text-ink">We couldn't find that account</div>
                        <p className="mt-2 text-base text-ink-2">
                          Law24x7 is in early access, so accounts are set up individually. Switch to Sign up to request access for <span className="font-medium text-ink">{email || 'your email'}</span>.
                        </p>
                        <button onClick={() => setMode('signup')} className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-coral hover:text-coral-2">
                          Go to Sign up <ArrowRight className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.form
                    key={mode}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={submit}
                    className="mt-6 space-y-4"
                  >
                    {mode === 'signup' && (
                      <Field icon={User} label="Full name" type="text" placeholder="Adv. Priya Sharma" autoFocus required />
                    )}
                    <Field
                      icon={Mail}
                      label="Work email"
                      type="email"
                      placeholder="you@lawfirm.com"
                      autoFocus={mode === 'signin'}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {mode === 'signup' && (
                      <Field icon={Building2} label="Firm / organisation (optional)" type="text" placeholder="Chambers or firm name" />
                    )}
                    <Field icon={Lock} label="Password" type="password" placeholder="••••••••" required minLength={8} />

                    {mode === 'signin' && (
                      <div className="text-right">
                        <a href="mailto:hello@law24x7.in" className="text-sm font-medium text-ink-3 hover:text-navy">Forgot password?</a>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-coral py-3 text-base font-semibold text-white transition-colors hover:bg-coral-2"
                    >
                      {mode === 'signin' ? 'Sign in' : 'Create account'} <ArrowRight className="h-4 w-4" />
                    </button>

                    <p className="text-center text-sm text-ink-3">
                      {mode === 'signin' ? (
                        <>New to Law24x7? <button type="button" onClick={() => setMode('signup')} className="font-semibold text-coral hover:text-coral-2">Sign up</button></>
                      ) : (
                        <>Already have an account? <button type="button" onClick={() => setMode('signin')} className="font-semibold text-coral hover:text-coral-2">Sign in</button></>
                      )}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
