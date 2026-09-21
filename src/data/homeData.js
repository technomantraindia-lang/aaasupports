import heroImage from '../../assets/pipe-support-hero.png'
import aboutImage from '../../assets/about-engineer.png'
import aboutIndustrialImage from '../../assets/about-industrial-worker.png'

export const images = { heroImage, aboutImage, aboutIndustrialImage }

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Site Supervision', href: '/services/site-supervision' },
      { label: 'Designing of Pipe Supports', href: '/services/designing-of-pipe-supports' },
      { label: 'Pipe Stress Analysis Service', href: '/services/pipe-stress-analysis' },
    ],
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Clients', href: '#clients' },
  { label: 'Certificates & Awards', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const industries = [
  { title: 'Marine & Shipbuilding', subtitle: 'Engineered for the Deep', icon: '⚓' },
  { title: 'Oil & Gas', subtitle: 'Powering a Sustainable Future', icon: '◉' },
  { title: 'Industrial & Manufacturing', subtitle: 'Supporting Critical Operations', icon: '▦' },
  { title: 'Power & Energy', subtitle: 'Built for a Stronger Tomorrow', icon: 'ϟ' },
  { title: 'Infrastructure', subtitle: 'Solutions for a Connected World', icon: '▱' },
]

export const products = [
  { name: 'Variable Spring Supports', description: 'Engineered for vibration control and load management.', icon: '♢' },
  { name: 'Constant Spring Hangers', description: 'Reliable support for vertical piping systems.', icon: '⌁' },
  { name: 'Constant Spring Supports', description: 'Custom solutions for critical applications.', icon: '◉' },
  { name: 'Pipe Clamps & U-Bolts', description: 'Durable and high-performance clamping solutions.', icon: '∪' },
  { name: 'Slides & Guides', description: 'Designed for smooth movement and expansion.', icon: '⇄' },
]

export const projects = [
  { name: 'Offshore Oil & Gas Project', location: 'Middle East', className: 'project-offshore' },
  { name: 'Marine Vessel Project', location: 'South Asia', className: 'project-marine' },
  { name: 'Power Plant Project', location: 'Asia', className: 'project-power' },
  { name: 'Industrial Facility', location: 'Global', className: 'project-industrial' },
  { name: 'Infrastructure Project', location: 'Worldwide', className: 'project-infrastructure' },
]

export const partners = ['EMERSON', 'SIEMENS', 'ABB', 'Schneider\nElectric', 'Danfoss', 'Honeywell', 'YOKOGAWA', 'KSB']

export const heroMetrics = [
  ['♙', '12+', 'Years of Experience'],
  ['⌁', 'DN15-12000', 'Pipe Size Range'],
  ['♢', 'HSS SP-58', 'Global Standards'],
  ['◎', 'GLOBAL', 'Export Coverage'],
]
