import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const AuthModalContext = createContext(null)

export function AuthModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'

  const openAuth = useCallback((nextMode = 'signin') => {
    setMode(nextMode)
    setOpen(true)
  }, [])
  const closeAuth = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ open, mode, setMode, openAuth, closeAuth }), [open, mode, openAuth, closeAuth])

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>
}

export function useAuthModal() {
  const ctx = useContext(AuthModalContext)
  if (!ctx) throw new Error('useAuthModal must be used inside <AuthModalProvider>')
  return ctx
}
