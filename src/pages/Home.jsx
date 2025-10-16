import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import EduRevolution from '../components/EduRevolution'
import Events from '../components/Events'
import Achievements from '../components/Achievements'
import Authorities from '../components/Management'
import Team from '../components/Team'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HigherAuthorities from '../components/Management'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    const handleHashNavigation = () => {
      // Check if there's a hash in the URL
      if (location.hash) {
        const sectionId = location.hash.replace('#', '')
        
        // Wait a bit for the page to render completely
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 300)
      }
    }

    handleHashNavigation()

    // Also handle browser back/forward buttons
    window.addEventListener('hashchange', handleHashNavigation)
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [location.hash, location.pathname])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <EduRevolution />
      <Events />
      <Achievements />
      <HigherAuthorities/>
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default Home