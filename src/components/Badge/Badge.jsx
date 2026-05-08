import styles from './Badge.module.css'

// Usage: <Badge label="Spring Boot" />
export default function Badge({ label }) {
  return <span className={styles.badge}>{label}</span>
}
