import { motion } from 'framer-motion'
import resume from '../../data/resume'
import styles from './Hero.module.css'

// Staggered animation: each child delays by 0.1s
const item = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
})

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>

        <motion.p className={styles.greeting} {...item(0)}>
          Hi, I'm
        </motion.p>

        <motion.h1 className={styles.name} {...item(0.1)}>
          {resume.name}
        </motion.h1>

        <motion.p className={styles.tagline} {...item(0.2)}>
          {resume.tagline}
          <span className={styles.divider}> · </span>
          <span className={styles.subtitle}>{resume.subtitle}</span>
        </motion.p>

        <motion.p className={styles.about} {...item(0.3)}>
          {resume.about}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className={styles.actions} {...item(0.4)}>
          <a href={resume.github} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            GitHub
          </a>
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
            LinkedIn
          </a>
          <a href="#projects" className={styles.btnGhost}>
            See Projects ↓
          </a>
        </motion.div>

        {/* Open to work status indicator */}
        <motion.div className={styles.status} {...item(0.5)}>
          <span className={styles.dot} aria-hidden="true" />
          Open to backend internships &amp; campus placements · 2025–26
        </motion.div>

      </div>
    </section>
  )
}
