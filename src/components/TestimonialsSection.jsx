import { useEffect, useMemo, useRef, useState } from 'react'
import './testimonials/testimonials.css'
import testimonialImage from '../../assets/testimonial-engineer.png'

const slideGroups = [
  [
    {
      quote:
        "AAA Supports Pvt. Ltd.'s precision pipe support systems improved our facility maintenance workflow. Reliable equipment and excellent after-sales support across India.",
      initials: 'RK',
      name: 'Rajesh Kumar',
      role: 'Maintenance Head, Power Grid Sector',
    },
    {
      quote:
        'We have used their spring hangers and support systems for over 5 years. Quality is consistent and the engineering team understands critical industrial requirements.',
      initials: 'PS',
      name: 'Priya Sharma',
      role: 'Project Engineer, Electrical Utilities',
    },
    {
      quote:
        'From design consultation to site delivery, the experience was exceptional. Their technical guidance helped us complete our refinery projects faster.',
      initials: 'AM',
      name: 'Amit Mehta',
      role: 'Operations Manager, Industrial Plant',
    },
  ],
  [
    {
      quote:
        'Their constant and variable spring supports are built to last. We value the sturdy fabrication and safety-focused design for complex infrastructure projects.',
      initials: 'VS',
      name: 'Vikram Singh',
      role: 'Substation Engineer, Transmission Division',
    },
    {
      quote:
        'Custom pipe clamps and supports supplied by AAA Supports Pvt. Ltd. meet stringent global standards. Great technical support and timely delivery.',
      initials: 'SP',
      name: 'Sneha Patel',
      role: 'Technical Manager, Manufacturing Unit',
    },
    {
      quote:
        'NABL calibration support gives us confidence in equipment accuracy. A dependable partner for long-term industrial gas handling needs.',
      initials: 'DJ',
      name: 'Deepak Joshi',
      role: 'Director, Electrical Contracting Firm',
    },
  ],
]

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z" />
    </svg>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <span className="testimonial-quote">
        <QuoteIcon />
      </span>
      <div className="testimonial-stars" aria-label="5 out of 5 stars">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </div>
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <footer className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </footer>
    </article>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileStep, setMobileStep] = useState(0)
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)
  const cards = useMemo(() => slideGroups.flat(), [])
  const totalItems = isMobile ? cards.length : slideGroups.length
  const visibleIndex = activeIndex % totalItems

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    const measure = () => {
      const card = sliderRef.current?.querySelector('.testimonial-card')
      const track = sliderRef.current?.querySelector('.testimonial-track')
      if (!card || !track) return
      const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0
      setMobileStep(card.getBoundingClientRect().width + gap)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [isMobile])

  useEffect(() => {
    setActiveIndex((current) => current % totalItems)
  }, [totalItems])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalItems)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [totalItems])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const revealItems = section.querySelectorAll('[data-reveal]')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.18 })

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const trackTransform = isMobile
    ? `translateX(-${visibleIndex * mobileStep}px)`
    : `translateX(-${visibleIndex * 100}%)`

  return (
    <section
      className="testimonials testimonials-section"
      aria-labelledby="testimonials-heading"
      ref={sectionRef}
      style={{ '--testimonial-image': `url(${testimonialImage})` }}
    >
      <div className="testimonials-bg" aria-hidden="true" />
      <div className="container">
        <div className="section-heading testimonials-heading" data-reveal="up">
          <p className="section-label">CLIENT FEEDBACK</p>
          <h2 id="testimonials-heading">
            What Our <strong>Clients Say</strong>
          </h2>
          <p className="testimonials-sub">
            Trusted by utilities, substations and engineering teams for reliable SF6 gas-handling solutions.
          </p>
        </div>

        <div className="testimonial-slider-wrap" data-reveal="up">
          <div
            className="testimonial-slider"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            ref={sliderRef}
          >
            <div className="testimonial-track" style={{ transform: trackTransform }}>
              {isMobile
                ? cards.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                  ))
                : slideGroups.map((group, groupIndex) => (
                    <div className="testimonial-slide" key={`testimonial-slide-${groupIndex}`}>
                      {group.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                      ))}
                    </div>
                  ))}
            </div>
          </div>

          <div className="testimonial-dots" role="tablist" aria-label="Testimonial slides">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                aria-label={`Show testimonial ${index + 1}`}
                aria-selected={visibleIndex === index}
                className={`testimonial-dot ${visibleIndex === index ? 'is-active' : ''}`}
                key={`testimonial-dot-${index}`}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
