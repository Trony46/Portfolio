// App.jsx — the root. Import a section here to add it to the page.
import './styles/variables.css'   // theme tokens (colors, fonts, spacing)
import './styles/global.css'      // reset + base styles

import Navbar     from './components/Navbar/Navbar'
import Hero       from './sections/Hero/Hero'
import Projects   from './sections/Projects/Projects'
import Skills     from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'
import Education  from './sections/Education/Education'
import Contact    from './sections/Contact/Contact'

// To add a new section:
// 1. Create src/sections/NewSection/NewSection.jsx
// 2. Import it here
// 3. Add its id to NAV_LINKS in Navbar.jsx
// 4. Add its data to resume.js

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
