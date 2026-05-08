import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import resume from '../../data/resume'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className={styles.grid}>
        {resume.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
