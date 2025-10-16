import React, { useState } from 'react'
// Import authority images
import chancellor from '../assets/images/chancellor.jpg'
import proChancellor from '../assets/images/pro-chancellor.jpg'
import viceChancellor from '../assets/images/vice-chancellor.jpg'
import scaHos from '../assets/images/hos.jpg'

const HigherAuthorities = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const authorities = [
    {
      id: 1,
      name: "Dr. Ashok Kumar Mittal",
      role: "Chancellor, LPU",
      image: chancellor,
      bio: "Founder Chancellor of Lovely Professional University, a visionary leader in Indian education. Under his leadership, LPU has become one of India's largest and most renowned universities.",
      achievements: [
        "Founder of Lovely Professional University",
        "Member of Punjab Legislative Assembly",
        "Padma Shri Awardee 2021",
        "Pioneer in Indian higher education"
      ],
      email: "chancellor@lpu.co.in"
    },
    {
      id: 2,
      name: "Mrs. Rashmi Mittal",
      role: "Pro-Chancellor, LPU",
      image: proChancellor,
      bio: "Driven by a passion for quality education and student welfare. Instrumental in LPU's international collaborations and academic excellence initiatives.",
      achievements: [
        "Oversees international collaborations",
        "Student welfare and development programs",
        "Quality assurance initiatives",
        "Women empowerment in education"
      ],
      email: "prochancellor@lpu.co.in"
    },
    {
      id: 3,
      name: "Dr. Jaspal Singh Sandhu",
      role: "Vice-Chancellor, LPU",
      image: viceChancellor,
      bio: "Distinguished academician with extensive experience in higher education administration. Focused on research innovation and academic excellence.",
      achievements: [
        "PhD in Computer Applications",
        "30+ years in academic leadership",
        "Research and innovation advocate",
        "Academic quality enhancement"
      ],
      email: "vc@lpu.co.in"
    },
    {
      id: 4,
      name: "Dr. Anand KumarShukla ",
      role: "HOS, School of Computer Applications",
      image: scaHos,
      bio: "Leading the School of Computer Applications with a vision for technological innovation and industry-academia collaboration. Committed to producing industry-ready professionals.",
      achievements: [
        "PhD in Computer Science",
        "20+ years academic experience",
        "Industry-academia bridge building",
      ],
      email: "hos.sca@lpu.co.in"
    }
  ]

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id)
  }

  return (
    <section id="higher-authorities" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">LPU Leadership</h2>
            <p className="section-description">
              Meet the visionary leaders steering Lovely Professional University and 
              the School of Computer Applications towards global excellence in education.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {authorities.map((authority, index) => (
            <div key={authority.id} className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className={`higher-authority-card ${flippedCard === authority.id ? 'flipped' : ''}`}
                onClick={() => handleCardClick(authority.id)}
              >
                <div className="higher-authority-card-inner">
                  {/* Front of Card */}
                  <div className="higher-authority-card-front">
                    <div className="higher-authority-image-container">
                      <img 
                        src={authority.image} 
                        className="higher-authority-image" 
                        alt={authority.name}
                        loading="lazy"
                      />
                      <div className="higher-authority-badge">
                        <i className="bi bi-award-fill"></i>
                      </div>
                    </div>
                    <div className="higher-authority-info text-center p-3">
                      <h5 className="card-title mb-1">{authority.name}</h5>
                      <p className="card-text text-primary mb-2 fw-bold">{authority.role}</p>
                      <div className="higher-authority-contact">
                        <small className="text-muted">
                          <i className="bi bi-envelope me-1"></i>
                          {authority.email}
                        </small>
                      </div>
                      <small className="text-muted mt-2 d-block">
                        <i className="bi bi-arrow-repeat me-1"></i>
                        Click for details
                      </small>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="higher-authority-card-back">
                    <div className="higher-authority-bio p-3">
                      <h6 className="mb-3 text-center">Leadership Profile</h6>
                      <p className="small mb-3">{authority.bio}</p>
                      
                      <div className="higher-authority-achievements mb-3">
                        <h6 className="small fw-bold mb-2">Key Contributions:</h6>
                        <ul className="small ps-3 mb-0">
                          {authority.achievements.map((achievement, idx) => (
                            <li key={idx} className="mb-1">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="higher-authority-contact-back mt-auto">
                        <a href={`mailto:${authority.email}`} className="btn btn-sm btn-primary w-100">
                          <i className="bi bi-envelope me-1"></i>
                          Connect
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="higher-authorities-note p-4 rounded bg-light shadow-sm">
              <h4 className="mb-3">Visionary Leadership</h4>
              <p className="mb-0">
                Under the guidance of our esteemed leadership, LPU continues to set benchmarks in higher education. 
                Their collective vision and dedication have positioned LPU as a premier institution, fostering innovation, 
                research, and holistic development for students across all disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HigherAuthorities