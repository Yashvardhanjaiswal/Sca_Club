import React, { useState, useEffect, useRef } from 'react'

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    {
      icon: "🎉",
      count: 50,
      suffix: "+",
      label: "Events Hosted"
    },
    {
      icon: "🏆",
      count: 10,
      suffix: "+",
      label: "Awards Won"
    },
    {
      icon: "💡",
      count: 40,
      suffix: "+",
      label: "Projects Completed"
    },
    {
      icon: "🤝",
      count: 15,
      suffix: "+",
      label: "Collaborations"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (isVisible) {
        let start = 0
        const increment = end / (duration / 10)
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.ceil(start))
          }
        }, 10)
        
        return () => clearInterval(timer)
      }
    }, [end, isVisible, duration])

    return (
      <span>
        {count}{suffix}
      </span>
    )
  }

  return (
    <section id="achievements" ref={sectionRef} className="section-padding bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-white">Our Achievements</h2>
            <p className="section-description text-light">
              Celebrating our milestones and successes in fostering innovation and excellence.
            </p>
          </div>
        </div>

        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="achievement-item">
                <div className="achievement-icon mb-3">
                  <span style={{fontSize: '3rem'}}>{stat.icon}</span>
                </div>
                <h3 className="achievement-count text-warning mb-2">
                  {isVisible ? (
                    <Counter end={stat.count} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>
                <p className="achievement-label text-light">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements