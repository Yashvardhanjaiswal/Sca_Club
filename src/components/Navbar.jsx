import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import lpuLogo from '../assets/images/lpu-logo0.png'
import naacBadge from '../assets/images/naac-badge.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (sectionId) => {
    // If we're already on home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        
        // Update URL hash without page reload
        window.history.pushState(null, '', `#${sectionId}`)
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${sectionId}`)
    }
  }

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler')
    const navbarCollapse = document.querySelector('.navbar-collapse')
    
    if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click() // This will close the mobile menu
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        {/* LPU Logo */}
        <Link 
          className="navbar-brand" 
          to="/"
          onClick={closeMobileMenu}
        >
          <img 
            src={lpuLogo} 
            alt="LPU Logo" 
            className="navbar-logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('home')
                  closeMobileMenu()
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('about')
                  closeMobileMenu()
                }}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('edurevolution')
                  closeMobileMenu()
                }}
              >
                EduRevolution
              </button>
            </li>
            
            {/* Events Dropdown */}
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      handleNavigation('events')
                      closeMobileMenu()
                    }}
                  >
                    Upcoming
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      handleNavigation('events')
                      closeMobileMenu()
                    }}
                  >
                    Past
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      handleNavigation('events')
                      closeMobileMenu()
                    }}
                  >
                    All
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('achievements')
                  closeMobileMenu()
                }}
              >
                Achievements
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>{
                handleNavigation('higher-authorities')
                closeMobileMenu()
              }}>Authorities</button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('team')
                  closeMobileMenu()
                }}
              >
                Team
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('gallery')
                  closeMobileMenu()
                }}
              >
                Gallery
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => {
                  handleNavigation('contact')
                  closeMobileMenu()
                }}
              >
                Join Us
              </button>
            </li>
          </ul>

          {/* NAAC A++ Badge */}
          <div className="navbar-naac">
            <img 
              src={naacBadge} 
              alt="NAAC A++" 
              className="naac-badge"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar