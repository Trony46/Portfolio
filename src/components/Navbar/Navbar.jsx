import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import resume from '../../data/resume'

// These IDs must match the section id= props in each section component
const NAV_LINKS = ['projects', 'skills', 'experience', 'education', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')

  // IntersectionObserver watches each section and marks it active when in view
  useEffect(() => {
    const sections = NAV_LINKS.map(id => document.getElementById(id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }  // triggers when section is in middle of viewport
    )

    sections.forEach(sec => sec && observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.nav}>
      {/* Logo — first name in monospace */}
      <a href="#hero" className={styles.logo}>
        {resume.name.split(' ')[0].toLowerCase()}<span className={styles.cursor}>_</span>
      </a>

      {/* Nav links */}
      <ul className={styles.links}>
        {NAV_LINKS.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? `${styles.link} ${styles.active}` : styles.link}
            >
              {id}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`mailto:${resume.email}`}
            className={styles.hireBtn}
          >
            Hire me
          </a>
        </li>
      </ul>
    </nav>
  )
}
