import React, { useState, useEffect } from 'react'
import ClubHead from '../assets/images/clubhead.png'
import cordinator1 from '../assets/images/cordinator1.jpeg'
import cordinator2 from '../assets/images/cordinator2.jpeg'
import cordinator3 from '../assets/images/cordinator3.jpeg'
import cordinator4 from '../assets/images/cordinator4.jpeg'
import cordinator5 from '../assets/images/cordinator5.jpeg'
import cordinator6 from '../assets/images/cordinator6.jpeg'
import cordinator7 from '../assets/images/cordinator7.jpeg'

const Team = () => {
  const [flippedCard, setFlippedCard] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(4)

  const teamMembers = [
    {
      id: 1,
      name: "Gagaandeep Sethi",
      role: "Head of Club",
      image: ClubHead,
      bio: "Passionate about technology and leadership. Specialized in full-stack web development.Leads the club with vision and drives innovation.",
      achievements: [
        "Leads all club activities and initiatives",
        "Expert in MERN stack development",
        "Organizes technical workshops",
        "Manages club operations"
      ],
      linkedin: "https://www.linkedin.com/in/gagandeepsethi/"
    },
    {
      id: 2,
      name: "Muskan Kumari",
      role: "Club Member and Coordinator",
      image: cordinator1,
      bio: "Focused on frontend development. Specializes in React.js and modern CSS frameworks. Passionate about creating responsive user interfaces.",
      achievements: [
      "React.js and Next.js developer",
      "UI/UX design specialist",
      "Frontend performance optimization",
      "Component library development"
      ],
      linkedin: "https://www.linkedin.com/in/muskan-kumari2223/"
    },
    {
      id: 3,
      name: "Himanshu Jha",
      role: "Club Member and Coordinator",
      image: cordinator2,
      bio: "Expert in backend technologies. Experienced with Node.js, Express, and database management. Focuses on API development and server architecture.",
      achievements: [
      "Node.js and Express.js expert",
      "REST API development",
      "Database design and optimization",
      "Server deployment and management"
      ],
      linkedin: "https://www.linkedin.com/in/himanshu-jha-nylonxd/"
    },
    {
      id: 4,
      name: "Himanshu Gupta",
      role: "Club Member and Coordinator",
      image: cordinator3,
      bio: "Web Development student with strong project management skills. Coordinates team projects and ensures timely delivery of club initiatives.",
      achievements: [
      "Agile project management",
      "Team collaboration coordination",
      "Project timeline management",
      "Client communication handling"
      ],
      linkedin: "https://www.linkedin.com/in/himanshu-gupta3/"
    },
    {
      id: 5,
      name: "Saad Shibli",
      role: "Club Member and Coordinator",
      image: cordinator4,
      bio: "Proficient in both frontend and backend technologies. Creates end-to-end web solutions and mentors junior developers in the club.",
      achievements: [
      "Full-stack web development",
      "Database architecture",
      "Code review and mentorship",
      "Deployment and DevOps"
      ],
      linkedin: "https://www.linkedin.com/in/saad-shibli/"
    },
    {
      id: 6,
      name: "Mihir Kumar",
      role: "Club Member and Coordinator",
      image: cordinator5,
      bio: "Specialized in game development and interactive media. Brings unique perspective to web development through game design principles.",
      achievements: [
      "Unity and Unreal Engine experience",
      "Game mechanics design",
      "Interactive web animations",
      "3D web graphics"
      ],
      linkedin: "https://www.linkedin.com/in/mihir-kumar-210502m/"
    },
    {
      id: 7,
      name: "Anurag Kumar",
      role: "Club Member and Coordinator",
      image: cordinator6,
      bio: "Focused on modern frontend technologies. Specializes in creating dynamic user experiences with React and state management.",
      achievements: [
      "Advanced React patterns",
      "State management (Redux, Context)",
      "Performance optimization",
      "Cross-browser compatibility"
      ],
      linkedin: "https://www.linkedin.com/in/anurag24kumar/"
    },
    {
      id: 8,
      name: "Bhishan Sharma",
      role: "Club Member and Coordinator",
      image: cordinator7,
      bio: "Expertise in modern web technologies. Focuses on implementing best practices and new web standards in club projects.",
      achievements: [
      "Progressive Web Apps (PWA)",
      "Web accessibility standards",
      "SEO optimization",
      "Modern JavaScript (ES6+)"
      ],
      linkedin: "https://www.linkedin.com/in/bhishansharma/"
    }
  ]

  // Calculate items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerSlide(4); // Large screens: 4 cards
      } else if (window.innerWidth >= 992) {
        setItemsPerSlide(3); // Medium-large screens: 3 cards
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // Medium screens: 2 cards
      } else {
        setItemsPerSlide(1); // Small screens: 1 card
      }
    }

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id)
  }

  // Group team members into slides
  const slides = []
  for (let i = 0; i < teamMembers.length; i += itemsPerSlide) {
    slides.push(teamMembers.slice(i, i + itemsPerSlide))
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  // Calculate column class based on items per slide
  const getColumnClass = () => {
    if (itemsPerSlide === 4) return 'col-xl-3 col-lg-4 col-md-6';
    if (itemsPerSlide === 3) return 'col-xl-4 col-lg-4 col-md-6';
    if (itemsPerSlide === 2) return 'col-lg-6 col-md-6';
    return 'col-12';
  }

  return (
    <section id="team" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Core Team</h2>
            <p className="section-description">
              Meet the passionate student leaders and faculty mentors who drive innovation 
              and excellence in the SCA Club.
            </p>
          </div>
        </div>

        {/* Team Carousel */}
        <div className="team-carousel-wrapper">
          <div className="carousel slide team-carousel" data-bs-interval="false">
            {/* Carousel Indicators */}
            {slides.length > 1 && (
              <div className="carousel-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={index === activeIndex ? 'active' : ''}
                    aria-current={index === activeIndex ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            )}

            {/* Carousel Inner */}
            <div className="carousel-inner">
              {slides.map((slide, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className={`carousel-item ${slideIndex === activeIndex ? 'active' : ''}`}
                >
                  <div className="row justify-content-center g-4">
                    {slide.map((member, memberIndex) => (
                      <div 
                        key={member.id} 
                        className={getColumnClass()}
                        data-aos="fade-up" 
                        data-aos-delay={memberIndex * 100}
                      >
                        <div 
                          className={`team-card ${flippedCard === member.id ? 'flipped' : ''}`}
                          onClick={() => handleCardClick(member.id)}
                        >
                          <div className="team-card-inner">
                            {/* Front of Card */}
                            <div className="team-card-front">
                              <div className="team-image-container">
                                <img 
                                  src={member.image} 
                                  className="team-image" 
                                  alt={member.name}
                                  loading="lazy"
                                />
                                <div className="team-badge">
                                  <i className="bi bi-award-fill"></i>
                                </div>
                              </div>
                              <div className="team-info text-center p-3">
                                <h5 className="card-title mb-2">{member.name}</h5>
                                <p className="card-text text-primary mb-3 fw-bold">{member.role}</p>
                                <div className="team-contact">
                                  <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary btn-sm"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <i className="bi bi-linkedin me-2"></i>
                                    Connect
                                  </a>
                                </div>
                                <small className="text-muted mt-3 d-block">
                                  <i className="bi bi-arrow-repeat me-1"></i>
                                  Click for details
                                </small>
                              </div>
                            </div>

                            {/* Back of Card */}
                            <div className="team-card-back">
                              <div className="team-bio p-3">
                                <h6 className="mb-3 text-center text-primary">Team Profile</h6>
                                <p className="small mb-3">{member.bio}</p>
                                
                                <div className="team-achievements mb-3">
                                  <h6 className="small fw-bold mb-2">Key Responsibilities:</h6>
                                  <ul className="small ps-3 mb-0">
                                    {member.achievements.map((achievement, idx) => (
                                      <li key={idx} className="mb-1">{achievement}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="team-contact-back mt-auto">
                                  <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm w-100"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <i className="bi bi-linkedin me-2"></i>
                                    Connect on LinkedIn
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Carousel Controls - Black buttons */}
            {slides.length > 1 && (
              <>
                <button 
                  className="carousel-control-prev team-carousel-control" 
                  type="button"
                  onClick={handlePrev}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button 
                  className="carousel-control-next team-carousel-control" 
                  type="button"
                  onClick={handleNext}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="team-note p-4 rounded bg-white shadow-sm">
              <h4 className="mb-3 text-center">Student Leadership</h4>
              <p className="mb-0 text-center">
                Our student-led team brings together diverse talents and expertise to create 
                a vibrant learning community. They work tirelessly to organize events, workshops, 
                and competitions that enhance the technical skills and professional development 
                of every SCA Club member.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team