import { motion } from 'framer-motion'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import resume from '../../data/resume'
import styles from './Contact.module.css'

// To add/remove a link: edit this array or pull from resume.js
const LINKS = [
  { label: 'Email',    value: resume.email,          href: `mailto:${resume.email}`,  external: false },
  { label: 'GitHub',   value: 'github.com/Trony46',  href: resume.github,             external: true  },
  { label: 'LinkedIn', value: 'in/ashmitshaw',       href: resume.linkedin,           external: true  },
  { label: 'LeetCode', value: 'ashmit_46',           href: resume.leetcode,           external: true  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className={styles.wrapper}>

        <motion.p
          className={styles.cta}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Open to backend internships and SDE roles. Reach out — I reply fast.
        </motion.p>

        <div className={styles.links}>
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={styles.link}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <span className={styles.label}>{link.label}</span>
              <span className={styles.value}>{link.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Built with React + Vite · Deployed on Vercel
        </motion.p>

      </div>
    </SectionWrapper>
  )
}
