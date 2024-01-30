import { Project } from "../../../types/models/Project"
// styles
import styles from './StickyContent.module.scss'

type StickyContentProps = {
  allProjects: Project[];
}

export default function StickyContent({ allProjects }: StickyContentProps) {
  return (
    <ul>
      {allProjects.map((project, index) => (
        <li 
          key={index}
          className={styles.Container}
        >
          <a href={`#${project.overview.id}`}>
            <span>Work #{index}</span>
            <h5>{project.overview.title}</h5>
            <div className={styles.Chip_Cont}>
              {project.overview.discipline.map((value, index) => (
                <span 
                  key={index}
                  className={styles.Chip}
                >
                  {value}
                </span>
              ))}
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
