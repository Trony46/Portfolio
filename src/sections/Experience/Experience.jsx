import { motion } from 'framer-motion'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import resume from '../../data/resume'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className={styles.timeline}>
        {resume.experience.map((exp, i) => (
          <motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Timeline dot — aligns with the left border line */}
            <div className={styles.dot} aria-hidden="true" />

            <div className={styles.card}>
              <div className={styles.top}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.org}>
                    {exp.org} · {exp.type} · {exp.location}
                  </p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <ul className={styles.points}>
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
