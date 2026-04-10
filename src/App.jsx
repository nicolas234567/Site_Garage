import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    reveals.forEach(el => observer.observe(el))

    document.querySelectorAll('.services-grid, .testimonials-grid, .process-steps').forEach(grid => {
      grid.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.1) + 's'
      })
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
