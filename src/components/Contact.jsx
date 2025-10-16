import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Join Us</h2>
            <p className="section-description">
              Ready to be part of our community? Get in touch with us!
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">Send us a Message</h4>
                
                {isSubmitted && (
                  <div className="alert alert-success" role="alert">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-info">
              <h4 className="mb-4">Get in Touch</h4>
              
              <div className="mb-4">
                <h5>Club Contact</h5>
                <p className="mb-1">
                  <i className="bi bi-geo-alt me-2"></i>
                  School of Computer Applications, Lovely Professional University, Phagwara, Punjab
                </p>
                <p className="mb-1">
                  <i className="bi bi-envelope me-2"></i>
                  scaclub@lpu.co.in
                </p>
                <p className="mb-1">
                  <i className="bi bi-phone me-2"></i>
                  +91 99xx0-99xxx
                </p>
              </div>

              <div className="mb-4">
                <h5>Follow Us</h5>
                <div className="social-links">
                  <a href="#" className="social-link me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link me-3">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-link me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-discord"></i>
                  </a>
                </div>
              </div>

              <div>
                <h5>Meeting Schedule</h5>
                <p className="mb-1">Weekly Meetings: Every Friday, 4:00 PM</p>
                <p className="mb-1">Location: Block 38</p>
                <p className="mb-0">All students are welcome!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact