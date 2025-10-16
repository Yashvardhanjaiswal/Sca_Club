import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import annual from '../assets/images/smart_india_hackathon.png'
import webDevImg from '../assets/images/eventaswebworks.png'
import aiSeminarImg from '../assets/images/gallery2.jpeg'
import debugContestImg from '../assets/images/project-carnival.jpeg'
const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const events = [
    {
      id: 1,
      title: "Annual Hackathon 2025",
      date: "2025-09-15",
      type: "past",
      image: annual,
      description: "24-hour coding competition to solve real-world problems.",
      location: "Innovation Studio"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "2025-09-10",
      type: "past",
      image: webDevImg,
      description: "Hands-on workshop on modern web development technologies.",
      location: "Block-25 304"
    },
    {
      id: 3,
      title: "AI & ML Seminar",
      date: "2025",
      type: "upcoming",
      image: aiSeminarImg,
      description: "Learn about the latest trends in Artificial Intelligence and Machine Learning.",
      location: "Block"
    },
    {
      id: 4,
      title: "Project Carnival",
      date: "2025-11-01",
      type: "upcoming",
      image: debugContestImg,
      description: "Test your debugging skills in this exciting contest.",
      location: "Innovation Studio"
    }
  ]

  const filteredEvents = events.filter(event => 
    activeFilter === 'all' || event.type === activeFilter
  )

  return (
    <section id="events" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Events</h2>
            <p className="section-description">
              Discover our upcoming and past events. Join us to learn, compete, and grow.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center" id="eventTabs">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Events
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeFilter === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('upcoming')}
                >
                  Upcoming
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeFilter === 'past' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('past')}
                >
                  Past
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Events Grid */}
        <div className="row">
          {filteredEvents.map((event, index) => (
            <div key={event.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card event-card h-100 border-0 shadow-sm">
                <div className="event-image-container">
                  <img 
                    src={event.image} 
                    className="card-img-top event-image" 
                    alt={event.title}
                    loading="lazy"
                  />
                  <div className="event-type-badge">
                    <span className={`badge ${event.type === 'upcoming' ? 'bg-primary' : 'bg-secondary'}`}>
                      {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text text-muted">{event.description}</p>
                  <div className="event-meta">
                    <small className="text-muted">
                      <i className="bi bi-calendar-event me-1"></i>
                      {new Date(event.date).toLocaleDateString()}
                    </small>
                    <small className="text-muted ms-3">
                      <i className="bi bi-geo-alt me-1"></i>
                      {event.location}
                    </small>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <Link to={`/event/${event.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted">No events found for the selected filter.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events