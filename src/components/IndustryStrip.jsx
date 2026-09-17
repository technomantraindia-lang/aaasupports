import { useRef, useState } from 'react'
import heroImage from '../../assets/pipe-support-hero.png'
import marineImage from '../../assets/industry-marine.png'
import oilGasImage from '../../assets/industry-oil-gas.png'
import powerImage from '../../assets/industry-power.png'
import industrialImage from '../../assets/industry-industrial.png'
import infrastructureImage from '../../assets/industry-infrastructure.png'

const industryCards = [
  {
    title: 'Marine & Shipbuilding',
    description: 'Reliable pipe support solutions for maritime and offshore applications.',
    image: marineImage,
    icon: 'ship',
  },
  {
    title: 'Oil & Gas',
    description: 'Engineered for demanding environments in upstream, midstream, and downstream operations.',
    image: oilGasImage,
    icon: 'rig',
  },
  {
    title: 'Power & Energy',
    description: 'Supporting critical power generation and energy infrastructure worldwide.',
    image: powerImage,
    icon: 'power',
  },
  {
    title: 'Industrial & Manufacturing',
    description: 'Custom pipe supports for heavy industrial and manufacturing facilities.',
    image: industrialImage,
    icon: 'factory',
  },
  {
    title: 'Infrastructure',
    description: 'Enabling safer and stronger infrastructure for a sustainable future.',
    image: infrastructureImage,
    icon: 'bridge',
  },
]

const industryStats = [
  ['users', '40+', 'Countries Served'],
  ['gear', '500+', 'Projects Completed'],
  ['shield', 'Trusted', 'Across Critical Industries'],
  ['globe', 'Global', 'Support Network'],
]

function IndustryIcon({ type }) {
  const paths = {
    ship: <><path d="M7 31h34l-5 8H13Z" /><path d="M14 31V14h18v17M18 14V9h10v5M23 9V5h1v4M19 20h8M19 25h8" /><path d="M4 42c4-3 7 3 11 0s7 3 11 0 7 3 12 0" /></>,
    rig: <><path d="M24 5 14 40h20L24 5Z" /><path d="M18 20h12M16 27h16M13 35h22M8 40h32M21 11h6" /><path d="M24 5V1M24 1h10" /></>,
    power: <><path d="M10 41V24h11v17M27 41V16h11v25M7 41h34M13 29h5M30 22h5M24 7v8M21 11h6" /><path d="m24 7-3 4h6l-3 4" /></>,
    factory: <><path d="M5 41V24l12 7V20l12 8V17l8 5v19Z" /><path d="M11 34h5M22 34h5M32 34h5M11 40h5M22 40h5" /><path d="M8 18V9h7v13M10 12h3" /></>,
    bridge: <><path d="M4 18c7 0 11 5 20 5s13-5 20-5M4 18v22M44 18v22M15 21v19M33 21v19M4 40h40M9 29h6M33 29h6" /><path d="M8 16c5-10 11-10 16 0 5-10 11-10 16 0" /></>,
    users: <><circle cx="18" cy="17" r="6" /><circle cx="32" cy="18" r="5" /><path d="M6 40c1-9 6-14 13-14s12 5 13 14M31 28c6 0 10 4 11 12" /></>,
    gear: <><circle cx="24" cy="24" r="7" /><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4.2 4.2M33.3 33.3l4.2 4.2M37.5 10.5l-4.2 4.2M14.7 33.3l-4.2 4.2" /></>,
    shield: <><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" /><path d="m17 24 5 5 10-11" /></>,
    globe: <><circle cx="24" cy="24" r="18" /><path d="M6 24h36M24 6c5 5 7 11 7 18s-2 13-7 18c-5-5-7-11-7-18s2-13 7-18Z" /></>,
  }

  return <svg className="industry-showcase-icon-svg" viewBox="0 0 48 48" aria-hidden="true">{paths[type]}</svg>
}

export function IndustryStrip() {
  const trackRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const moveCards = (direction) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * (track.clientWidth * .82), behavior: 'smooth' })
  }

  const handlePointerDown = (event) => {
    if (window.innerWidth > 1100) return
    const track = trackRef.current
    if (!track) return
    dragRef.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft }
    setIsDragging(true)
    track.setPointerCapture?.(event.pointerId)
  }

  const handlePointerMove = (event) => {
    const track = trackRef.current
    if (!track || !dragRef.current.active) return
    track.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX)
  }

  const stopDragging = () => {
    dragRef.current.active = false
    setIsDragging(false)
  }

  return (
    <section className="industry-showcase" id="industries">
      <div className="industry-world-map" aria-hidden="true" />
      <div className="industry-showcase-shell">
        <div className="industry-showcase-heading">
          <p className="industry-showcase-kicker"><span />Industries We Serve</p>
          <h2>Industries We <strong>Serve</strong></h2>
          <p>Our pipe support solutions are trusted across critical industries, helping the world&apos;s infrastructure run safer, stronger, and more efficiently.</p>
        </div>

        <aside className="industry-side-note industry-side-note--top"><span />Built<br />for the<br />industries<br />that move<br />the world</aside>
        <aside className="industry-script-note">Engineering<br />for a Better<br />Tomorrow<i /></aside>

        <div className={`industry-carousel ${isDragging ? 'is-dragging' : ''}`}>
          <button className="industry-carousel-arrow industry-carousel-arrow--prev" type="button" onClick={() => moveCards(-1)} aria-label="Previous industries">&#8592;</button>
          <div
            className="industry-card-track"
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onPointerLeave={stopDragging}
          >
            {industryCards.map((industry, index) => (
              <article className="industry-showcase-card" key={industry.title} style={{ '--industry-image': `url(${industry.image})`, '--card-order': index }}>
                <div className="industry-showcase-card-content">
                  <span className="industry-showcase-icon"><IndustryIcon type={industry.icon} /></span>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <a href="#quote">Learn More <span aria-hidden="true">&#8594;</span></a>
                </div>
              </article>
            ))}
          </div>
          <button className="industry-carousel-arrow industry-carousel-arrow--next" type="button" onClick={() => moveCards(1)} aria-label="Next industries">&#8594;</button>
        </div>

        <div className="industry-bottom-strip" style={{ '--industry-strip-image': `url(${heroImage})` }}>
          <div className="industry-stat-list">
            {industryStats.map(([icon, value, label]) => (
              <div className="industry-stat" key={label}>
                <span className="industry-stat-icon"><IndustryIcon type={icon} /></span>
                <span><strong>{value}</strong><small>{label}</small></span>
              </div>
            ))}
          </div>
          <a className="button button--orange industry-showcase-cta" href="#quote">Discuss Your Industry Needs <span aria-hidden="true">&#8594;</span></a>
          <div className="industry-side-note industry-side-note--bottom">Same<br />support<br />a stronger<br />tomorrow<i /></div>
        </div>
      </div>
    </section>
  )
}
