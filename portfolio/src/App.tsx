import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Exhibition from './pages/Exhibition'
import CV from './pages/CV'
import Contact from './pages/Contact'

const AnimatedRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => (
  <HashRouter>
    <Nav />
    <AnimatedRoutes />
  </HashRouter>
)

export default App
