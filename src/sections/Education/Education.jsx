import { motion } from 'framer-motion'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import resume from '../../data/resume'
import styles from './Education.module.css'

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className={styles.list}>
        {resume.education.map((edu, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.09 }}
          >
            <div className={styles.left}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
            </div>
            <div className={styles.right}>
              <span className={styles.score}>{edu.score}</span>
              <span className={styles.year}>{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
