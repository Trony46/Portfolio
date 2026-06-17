import styles from './SQLDemo.module.css'

// ── Syntax highlighted SQL ─────────────────────────────────
// Each token type gets its own span with a color class
// Just CSS — no external library needed

function SQL({ children }) {
  return <pre className={styles.code}><code>{children}</code></pre>
}

function Kw({ children })  { return <span className={styles.kw}>{children}</span> }   // keyword
function Fn({ children })  { return <span className={styles.fn}>{children}</span> }   // function
function Cm({ children })  { return <span className={styles.cm}>{children}</span> }   // comment
function Id({ children })  { return <span className={styles.id}>{children}</span> }   // identifier
function Nm({ children })  { return <span className={styles.nm}>{children}</span> }   // number/string

// ── Mini result table ──────────────────────────────────────
const ROWS = [
  { company: 'Amazon',   laid_off: '18,000', year: '2023', rank: 1 },
  { company: 'Meta',     laid_off: '11,000', year: '2023', rank: 2 },
  { company: 'Salesfrc', laid_off:  '8,000', year: '2023', rank: 3 },
  { company: '...',      laid_off:    '...',  year:  '...',  rank: '…' },
]

export default function SQLDemo() {
  return (
    <div className={styles.demo}>

      {/* ── Header ── */}
      <div className={styles.head}>
        <span className={styles.chip}>MySQL Workbench</span>
        <span className={styles.rows}>2,847 rows processed</span>
      </div>

      {/* ── Code block ── */}
      <SQL>
        <Cm>{'-- Deduplication pipeline'}</Cm>{'\n'}
        <Kw>WITH</Kw> <Id>ranked</Id> <Kw>AS</Kw> {'('}{'\n'}
        {'  '}<Kw>SELECT</Kw> <Nm>*</Nm>,{'\n'}
        {'    '}<Fn>ROW_NUMBER</Fn>{'() OVER ('}{'\n'}
        {'      '}<Kw>PARTITION BY</Kw> <Id>company</Id>, <Id>location</Id>, <Id>date</Id>{'\n'}
        {'      '}<Kw>ORDER BY</Kw> <Id>total_laid_off</Id> <Kw>DESC</Kw>{'\n'}
        {'    )'} <Kw>AS</Kw> <Id>row_num</Id>{'\n'}
        {'  '}<Kw>FROM</Kw> <Id>layoffs_staging</Id>{'\n'}
        {')'}{'\n'}
        <Kw>DELETE</Kw> <Kw>FROM</Kw> <Id>ranked</Id>{'\n'}
        <Kw>WHERE</Kw> <Id>row_num</Id> {'> '}<Nm>1</Nm><Cm>;</Cm>
      </SQL>

      {/* ── Result table ── */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>company</th>
              <th>total_laid_off</th>
              <th>year</th>
              <th>dense_rank</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={i} className={i === 3 ? styles.fadedRow : ''}>
                <td>{r.company}</td>
                <td className={styles.numCell}>{r.laid_off}</td>
                <td>{r.year}</td>
                <td className={styles.rankCell}>#{r.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
