import { motion } from 'framer-motion'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import Badge from '../../components/Badge/Badge'
import resume from '../../data/resume'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className={styles.grid}>
        {/* Object.entries turns { Languages: [...] } into [["Languages", [...]]] */}
        {Object.entries(resume.skills).map(([category, items], i) => (
          <motion.div
            key={category}
            className={styles.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            <p className={styles.category}>{category}</p>
            <div className={styles.badges}>
              {items.map(item => <Badge key={item} label={item} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
