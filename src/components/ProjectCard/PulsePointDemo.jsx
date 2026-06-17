import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './PulsePointDemo.module.css'

// ── Mini SVG sparkline ──────────────────────────────────────
function Sparkline({ data, width = 130, height = 32 }) {
  if (data.length < 2) return null
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((v - min) / range) * (height - 4) - 2
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={styles.spark}>
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <polyline
        points={`0,${height} ${pts} ${width},${height}`}
        fill="url(#sparkGrad)"
        stroke="none"
      />
      {/* Line */}
      <polyline
        points={pts}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Metric config ────────────────────────────────────────────
const METRICS = [
  { key: 'TEMP',     unit: '°C',   base: 71,   delta: 9,   alertThreshold: 78, thresholdType: 'GT' },
  { key: 'VELOCITY', unit: ' m/s', base: 13.5, delta: 5,   alertThreshold: null },
  { key: 'PRESSURE', unit: ' hPa', base: 1013, delta: 4,   alertThreshold: null },
]

const rand = (base, delta) =>
  Math.round((base + (Math.random() - 0.5) * delta * 2) * 10) / 10

export default function PulsePointDemo() {
  const [values, setValues]   = useState(METRICS.map(m => m.base))
  const [history, setHistory] = useState(() => Array.from({ length: 10 }, () => rand(71, 9)))
  const [alert, setAlert]     = useState(false)
  const [tick, setTick]       = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      const newVals = METRICS.map(m => rand(m.base, m.delta))
      setValues(newVals)
      setHistory(h => [...h.slice(-14), newVals[0]])
      setAlert(newVals[0] > METRICS[0].alertThreshold)
      setTick(t => t + 1)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.demo}>

      {/* ── Header ─────────────────────────────────────── */}
      <div className={styles.demoHead}>
        <div className={styles.liveTag}>
          <span className={styles.liveDot} />
          LIVE TELEMETRY
        </div>
        <span className={styles.sourceId}>SRC_0x4F2A · engine-01</span>
      </div>

      {/* ── Metric tiles ───────────────────────────────── */}
      <div className={styles.metrics}>
        {METRICS.map((m, i) => (
          <div key={m.key} className={`${styles.metric} ${i === 0 && alert ? styles.metricAlert : ''}`}>
            <span className={styles.metricKey}>{m.key}</span>
            <motion.span
              key={`${m.key}-${tick}`}
              className={styles.metricVal}
              initial={{ opacity: 0.6, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {values[i]}
              <span className={styles.metricUnit}>{m.unit}</span>
            </motion.span>
          </div>
        ))}
      </div>

      {/* ── Sparkline ──────────────────────────────────── */}
      <div className={styles.sparkRow}>
        <span className={styles.sparkLabel}>TEMP · 15-tick trace</span>
        <Sparkline data={history} />
      </div>

      {/* ── Alert banner ───────────────────────────────── */}
      <AnimatePresence>
        {alert && (
          <motion.div
            className={styles.alertBanner}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <span className={styles.alertIcon}>⚡</span>
            <span>ALERT · TEMP GT 78°C · severity: <span className={styles.high}>HIGH</span></span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ─────────────────────────────────────── */}
      <div className={styles.demoFoot}>
        <span>ingest endpoint · POST /api/telemetry</span>
        <span className={styles.ok}>200 OK</span>
      </div>

    </div>
  )
}
