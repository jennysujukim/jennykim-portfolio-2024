import { Project } from "../../../types/models/Project"
import { useIndicatorContext } from "../../../hooks/useIndicatorContext";
// styles
import styles from './StickyContent.module.scss'

type StickyContentProps = {
  allProjects: Project[];
}

export default function StickyContent({ allProjects }: StickyContentProps) {

  const { isActive } = useIndicatorContext();

  return (
    <ul>
      {allProjects.map((project, index) => (
        <li 
          key={index}
          className={isActive === project.overview.id ? `${styles.Container} ${styles.Active}`: styles.Container }
        >
          <a href={`#${project.overview.id}`}>
            <span className={isActive === project.overview.id ? `${styles.Work} ${styles.Active}`: styles.Work }>Work #{index + 1} {project.overview.discipline}</span>
            <div className={styles.Title_Cont} >
              <h5 className={isActive === project.overview.id ? `${styles.Title} ${styles.Active}`: styles.Title }>{project.overview.title}</h5>
              {isActive === project.overview.id && <p className={styles.Bullet}>&bull;</p>}
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
