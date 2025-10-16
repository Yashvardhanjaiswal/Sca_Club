import React, { useState } from 'react'
import gallery1 from '../assets/images/gallery1.jpeg'
import gallery2 from '../assets/images/gallery2.jpeg'
import gallery3 from '../assets/images/gallery3.jpeg'
import gallery4 from '../assets/images/gallery4.jpeg'
import gallery5 from '../assets/images/gallery5.jpeg'
import gallery6 from '../assets/images/gallery6.jpeg'
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: gallery1,
      alt: "Hackathon 2023",
      category: "events"
    },
    {
      id: 2,
      src: gallery2,
      alt: "Workshop Session",
      category: "workshops"
    },
    {
      id: 3,
      src: gallery3,
      alt: "Team Meeting",
      category: "meetings"
    },
    {
      id: 4,
      src: gallery4,
      alt: "Award Ceremony",
      category: "events"
    },
    {
      id: 5,
      src: gallery5,
      alt: "Coding Competition",
      category: "events"
    },
    {
      id: 6,
      src: gallery6,
      alt: "Guest Lecture",
      category: "lectures"
    }
  ]

   const Gallery = () => {
    const image = [
    { id: 1, src: gallery1, alt: "Hackathon 2023" },
    { id: 2, src: gallery2, alt: "Workshop Session" },
    { id: 3, src: gallery3, alt: "Team Meeting" },
    { id: 4, src: gallery4, alt: "Award Ceremony" },
    { id: 5, src: gallery5, alt: "Coding Competition" },
    { id: 6, src: gallery6, alt: "Guest Lecture" }
  ]
   }
  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Gallery</h2>
            <p className="section-description">
              A glimpse into our events, workshops, and memorable moments.
            </p>
          </div>
        </div>

        <div className="row">
          {images.map((image, index) => (
            <div key={image.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="img-fluid gallery-image"
                  loading="lazy"
                  onClick={() => openLightbox(image)}
                />
                <div className="gallery-overlay" onClick={() => openLightbox(image)}>
                  <div className="gallery-caption">
                    <p className="mb-0">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                          <button 
                className="lightbox-close" 
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <p>{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery