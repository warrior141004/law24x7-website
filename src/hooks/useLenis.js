import { useEffect } from 'react'
import Lenis from 'lenis'

// Apple-style inertial smooth scrolling.
export function useLenis() {
  useEffect(() => {
    // A lower lerp (closer to 1) tracks the wheel more directly — the previous
    // 0.09 gave a floaty, delayed feel that read as the page lagging.
    const lenis = new Lenis({ lerp: 0.16, duration: 0.9, smoothWheel: true })
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const el = document.querySelector(a.getAttribute('href'))
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    }
    document.addEventListener('click', onClick)

    // Deep links: scroll to the hash target once the page has laid out.
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => lenis.scrollTo(el, { offset: -80, immediate: true }), 300)
    }
    return () => { cancelAnimationFrame(raf); document.removeEventListener('click', onClick); lenis.destroy() }
  }, [])
}
