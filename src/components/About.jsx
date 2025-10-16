import React from 'react'
import aboutImage from '../assets/images/about-club.png'

const About = () => {
  const features = [
    {
      icon: "🚀",
      title: "Workshops",
      description: "Hands-on technical workshops and training sessions"
    },
    {
      icon: "💻",
      title: "Hackathons",
      description: "Regular coding competitions and hackathons"
    },
    {
      icon: "🔧",
      title: "Projects",
      description: "Real-world project development opportunities"
    },
    {
      icon: "🌐",
      title: "Networking",
      description: "Connect with industry professionals and alumni"
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <div className="about-image-container">
              <img 
                src={aboutImage} 
                alt="LPU SCA Club Activities" 
                className="img-fluid about-image"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="section-title">About LPU SCA Club</h2>
            <p className="section-description">
              The School of Computer Applications Club at Lovely Professional University 
              is a vibrant community of tech enthusiasts, innovators, and future leaders 
              in the field of computer applications.
            </p>

            {/* Mission & Vision */}
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <div className="card h-100 mission-card">
                  <div className="card-body">
                    <h5 className="card-title">🎯 Mission</h5>
                    <p className="card-text">
                      To foster innovation and technical excellence through collaborative 
                      learning and practical implementation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100 vision-card">
                  <div className="card-body">
                    <h5 className="card-title">👁️ Vision</h5>
                    <p className="card-text">
                      Creating future-ready computer professionals who lead in technological 
                      innovation and digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Join Features */}
            <div className="mt-4">
              <h5 className="mb-3">Why Join SCA Club?</h5>
              <div className="row">
                {features.map((feature, index) => (
                  <div key={index} className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <span className="feature-icon me-2">{feature.icon}</span>
                      <div>
                        <h6 className="mb-0">{feature.title}</h6>
                        <small className="text-muted">{feature.description}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About