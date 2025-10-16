import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Import event images
import annual from '../assets/images/smart_india_hackathon.png'
import hackathon1 from '../assets/images/hackathon1.jpeg'
import hackathon2 from '../assets/images/hackathon2.jpeg'
import hackathon3 from '../assets/images/hackathon3.jpeg'
import webDevDetail from '../assets/images/eventaswebworks.png'
import aiSeminarDetail from '../assets/images/eventaswebworks.png'
import debugContestDetail from '../assets/images/project-carnival.jpeg'

const EventDetail = () => {
  const { id } = useParams()

  // All events data - this should match your Events.jsx data
  const events = [
    {
      id: 1,
      title: "Annual Hackathon 2025",
      date: "2024-03-15",
      location: "LPU Campus, Innovation Studio",
      image: annual,
      description: `
        Join us for the most exciting 24-hour coding competition of the year! 
        The Annual Hackathon 2024 brings together the brightest minds from LPU 
        to solve real-world problems through technology and innovation.
        
        This year's theme is "Technology for Social Good", focusing on creating 
        solutions that address pressing social and environmental challenges.
        
        Participants will have the opportunity to work in teams, learn from 
        industry mentors, and showcase their projects to a panel of expert judges.
      `,
      images: [hackathon1],
      highlights: [
        "24 hours of non-stop coding and innovation",
        "Industry expert mentors and judges",
        "Cash prizes and internship opportunities",
        "Networking with tech professionals",
        "Free swag and goodies for all participants"
      ],
      winners: [
        "First Prize: Team CodeBreakers - ₹50,000",
        "Second Prize: Team Innovators - ₹30,000",
        "Third Prize: Team TechWizards - ₹20,000",
        "Best Design: Team CreativeMinds",
        "Most Innovative: Team FutureTech"
      ]
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "2024-02-10",
      location: "Lpu Campus, Block-25 304",
      image: webDevDetail,
      description: `
        The AS Webworks Workshop held at Lovely Professional University (LPU) provided students with valuable insights into real-world web development and digital marketing practices. Experts from AS Webworks shared their industry experience, discussed current trends, and guided students on how to build strong careers in the tech field. The interactive session included live demonstrations, career guidance, and hands-on learning, making it an enriching experience for all participants.
      `,
      images: [webDevDetail, hackathon1, hackathon2],
      highlights: [
        "Hands-on coding sessions",
        "Live project building",
        "Industry best practices",
        "Career guidance session",
        "Certificate of participation"
      ],
      winners: [
        "Best Project: Team WebWizards",
        "Most Creative: Team DesignMasters",
        "Best Code: Team CleanCoders"
      ]
    },
    {
      id: 3,
      title: "AI & ML Seminar",
      date: "2024-04-05",
      location: "LPU Campus, Block-",
      image: aiSeminarDetail,
      description: `
        Explore the fascinating world of Artificial Intelligence and Machine Learning 
        in this comprehensive seminar. Learn about the latest trends, applications, 
        and career opportunities in AI/ML.
        
        Featuring guest speakers from top tech companies and research institutions, 
        this event will provide valuable insights into the future of technology and 
        how you can be part of it.
      `,
      images: [aiSeminarDetail], // You can add specific images
      highlights: [
        "Expert guest speakers",
        "Live AI demonstrations",
        "Career opportunities discussion",
        "Q&A session with industry professionals",
        "Networking with AI enthusiasts"
      ],
      winners: []
    },
    {
      id: 4,
      title: "Project Carnival",
      date: "2025-10-01",
      location: "LPU Campus, Innovation Studio",
      image: debugContestDetail,
      description: `
        Test your debugging skills in this exciting coding contest! Participants 
        will be given buggy code in multiple programming languages and must find 
        and fix as many bugs as possible within the time limit.
        
        This contest is designed to sharpen your problem-solving skills and improve 
        your ability to work under pressure - essential skills for any developer.
      `,
      images: [debugContestDetail], // You can add specific images
      highlights: [
        "Multiple programming languages",
        "Time-bound challenges",
        "Team and individual categories",
        "Real-world bug scenarios",
        "Expert evaluation"
      ],
      winners: [
        "First Place: DebugMaster - ₹15,000",
        "Second Place: CodeFixer - ₹10,000",
        "Third Place: BugHunter - ₹5,000",
        "Best Team: DebugSquad"
      ]
    }
  ]

  // Find the event by ID
  const event = events.find(event => event.id === parseInt(id))

  // If event not found, show error
  if (!event) {
    return (
      <>
        <Navbar />
        <div className="container text-center py-5">
          <h1>Event Not Found</h1>
          <p>The event you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      <div className="event-detail-page">
        {/* Hero Banner */}
        <section className="event-hero">
          <div className="container-fluid p-0">
            <div className="event-banner-container">
              <img 
                src={event.image} 
                alt={event.title}
                className="event-banner-image"
              />
              <div className="event-banner-overlay"></div>
              <div className="event-banner-content">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-white">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/" className="text-white-50">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/#events" className="text-white-50">Events</Link>
                          </li>
                          <li className="breadcrumb-item active text-white" aria-current="page">
                            {event.title}
                          </li>
                        </ol>
                      </nav>
                      <h1 className="display-4 fw-bold mb-3">{event.title}</h1>
                      <div className="event-meta">
                        <span className="me-4">
                          <i className="bi bi-calendar-event me-2"></i>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span>
                          <i className="bi bi-geo-alt me-2"></i>
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="section-padding">
          <div className="container">
            <div className="row">
              {/* Main Content */}
              <div className="col-lg-8">
                <div className="event-description mb-5">
                  <h3 className="mb-4">About the Event</h3>
                  {event.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3">{paragraph}</p>
                  ))}
                </div>

                {/* Image Carousel */}
                {event.images && event.images.length > 0 && (
                  <div className="event-gallery mb-5">
                    <h3 className="mb-4">Event Gallery</h3>
                    <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        {event.images.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            data-bs-target="#eventCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-label={`Slide ${index + 1}`}
                          ></button>
                        ))}
                      </div>
                      <div className="carousel-inner">
                        {event.images.map((img, index) => (
                          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img 
                              src={img} 
                              className="d-block w-100 carousel-image"
                              alt={`${event.title} ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="event-highlights">
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-body">
                        <h5 className="card-title">Event Highlights</h5>
                        <ul className="list-unstyled">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="mb-2">
                              <i className="bi bi-check-circle-fill text-success me-2"></i>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {event.winners && event.winners.length > 0 && (
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">Winners</h5>
                        <ul className="list-unstyled">
                          {event.winners.map((winner, index) => (
                            <li key={index} className="mb-2">
                              <i className="bi bi-trophy-fill text-warning me-2"></i>
                              {winner}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="row">
              <div className="col-12 text-center">
                <Link to="/#events" className="btn btn-primary btn-lg">
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default EventDetail