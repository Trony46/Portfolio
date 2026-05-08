import { motion } from 'framer-motion'
import styles from './SectionWrapper.module.css'

// Every section uses this.
// id    → used by navbar IntersectionObserver (must match NAV_LINKS in Navbar)
// title → the small monospace label above the section
export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>

        {/* Section header: monospace label + horizontal rule */}
        {title && (
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.line} />
          </motion.div>
        )}

        {children}
      </div>
    </section>
  )
}
