import { projects } from '../data/homeData.js'
import { SectionHeading } from './SectionHeading.jsx'

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects"><div className="container"><SectionHeading eyebrow="Our Projects" title="" action={{ label: 'View All Projects', href: '#projects' }} /><div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.className}`} key={project.name}><div className="project-photo" /><h3>{project.name}</h3><p>{project.location}</p></article>)}</div></div></section>
  )
}
