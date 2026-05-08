# Ashmit Shaw — Portfolio

Built with React + Vite. Hosted on Vercel.

---

## Setup

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → dist/
```

---

## The only file you need for content changes

**`src/data/resume.js`** — all your info lives here.

| What you want to do | What to edit |
|---|---|
| Update a skill | `skills` object in `resume.js` |
| Add a project | Push a new object to `projects[]` |
| Add experience | Push a new object to `experience[]` |
| Change contact links | Top of `resume.js` |
| Add a new section | See below |

---

## Adding a new section (e.g. Certifications)

1. Add data to `resume.js`:
   ```js
   certifications: [
     { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2025" }
   ]
   ```

2. Create `src/sections/Certifications/Certifications.jsx`:
   ```jsx
   import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
   import resume from '../../data/resume'

   export default function Certifications() {
     return (
       <SectionWrapper id="certifications" title="Certifications">
         {resume.certifications.map((cert, i) => (
           <div key={i}>{cert.name} — {cert.issuer} · {cert.year}</div>
         ))}
       </SectionWrapper>
     )
   }
   ```

3. Import and add it in `src/App.jsx`

4. Add `'certifications'` to `NAV_LINKS` in `src/components/Navbar/Navbar.jsx`

Done. Four steps, no other files change.

---

## Theme changes

Edit `src/styles/variables.css`. One file, everything updates.

| Variable | Controls |
|---|---|
| `--accent` | Violet color used everywhere |
| `--bg` | Page background |
| `--surface` | Card backgrounds |
| `--font` | Body font |
| `--font-mono` | Monospace font (badges, nav) |

---
