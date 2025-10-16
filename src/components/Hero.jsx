import React from 'react'
import heroBg from '../assets/images/hero-backup.png'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      {/* Background with imported image */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h1 className="hero-title">SCA PROJECT CLUB</h1>
              <p className="hero-tagline">Innovate, Code, Connect</p>
              
              <div className="hero-buttons mt-4">
                <button 
                  className="btn btn-primary btn-lg me-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Join Now
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  onClick={() => scrollToSection('events')}
                >
                  See Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero