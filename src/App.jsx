import { useLenis } from './hooks/useLenis'
import { AuthModalProvider } from './context/AuthModalContext'
import AuthModal from './components/AuthModal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Why from './components/Why'
import Platform from './components/Platform'
import Features from './components/Features'
import Users from './components/Users'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  return (
    <AuthModalProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <Marquee />
        <Why />
        <Platform />
        <Features />
        <Users />
        <Pricing />
        <Footer />
      </main>
      <AuthModal />
    </AuthModalProvider>
  )
}
