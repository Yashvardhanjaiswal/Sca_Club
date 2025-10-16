import React from 'react'
// Import your EduRevolution images
import edurev1 from '../assets/images/edurev1.jpeg'
import edurev2 from '../assets/images/edurev2.jpg'
import edurev3 from '../assets/images/edurev3.jpg'
import edurev4 from '../assets/images/edurev4.jpg'

const EduRevolution = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Personalized Learning",
      description: "Tailored educational experiences for every student"
    },
    {
      icon: "🤖",
      title: "AI in Education",
      description: "Leveraging artificial intelligence for enhanced learning"
    },
    {
      icon: "💡",
      title: "Innovation Culture",
      description: "Fostering a culture of innovation and creativity"
    },
    {
      icon: "🚀",
      title: "Student Empowerment",
      description: "Empowering students to take charge of their learning"
    }
  ]

  const eventImages = [edurev1, edurev2, edurev3, edurev4]

  return (
    <section id="edurevolution" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">EduRevolution: Shaping the Future of Education</h2>
            <p className="section-description">
              At LPU, we are committed to transforming education through innovation, 
              technology, and student-centric approaches. The EduRevolution initiative 
              represents our dedication to preparing students for the future.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="row mb-5">
          {highlights.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 text-center border-0 shadow-sm edu-card">
                <div className="card-body">
                  <div className="highlight-icon mb-3">
                    <span style={{fontSize: '3rem'}}>{item.icon}</span>
                  </div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div id="edurevCarousel" className="carousel slide edu-carousel" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {eventImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#edurevCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner edu-carousel-inner">
                {eventImages.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img
                      src={img}
                      className="d-block w-100 edu-carousel-image"
                      alt={`EduRevolution Event ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#edurevCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#edurevCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contribution Note */}
        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <div className="contribution-note p-4 rounded bg-white shadow-sm">
              <h4 className="mb-3">How SCA Club Contributes to EduRevolution</h4>
              <p className="mb-0">
                The SCA Club actively participates in the EduRevolution by organizing hackathons, 
                workshops, and seminars that focus on emerging technologies, collaborative projects, 
                and industry-academia partnerships. We bridge the gap between theoretical knowledge 
                and practical application, ensuring our members are at the forefront of the digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EduRevolution