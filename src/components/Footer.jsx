import React from 'react'
import naacBadge from '../assets/images/naac-badge.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <div className="d-flex flex-wrap">
              <button 
                className="btn btn-link p-0 text-white-50 me-3 mb-2 text-decoration-none"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
              <button 
                className="btn btn-link p-0 text-white-50 me-3 mb-2 text-decoration-none"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button 
                className="btn btn-link p-0 text-white-50 me-3 mb-2 text-decoration-none"
                onClick={() => scrollToSection('events')}
              >
                Events
              </button>
               <button 
                className="btn btn-link p-0 text-white-50 me-3 mb-2 text-decoration-none"
                onClick={() => scrollToSection('higher-authorities')}
              >
                Authority
              </button>
              <button 
                className="btn btn-link p-0 text-white-50 me-3 mb-2 text-decoration-none"
                onClick={() => scrollToSection('team')}
              >
                Team
              </button>
              <button 
                className="btn btn-link p-0 text-white-50 me-3 mb-2 text-decoration-none"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Connect With Us</h5>
            <div className="social-links">
              <a href="#" className="text-white-50 me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white-50 me-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white-50 me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white-50">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>

          {/* NAAC Badge and Copyright */}
          <div className="col-lg-4 col-md-12 text-lg-end">
            <div className="mb-3">
              <img 
                src={naacBadge} 
                alt="NAAC A++" 
                className="footer-naac-badge"
              />
            </div>
            <p className="text-white-50 mb-0">
              &copy; {currentYear} LPU SCA CLUB. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer