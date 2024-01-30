import { Link } from "react-router-dom";
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
          <Link to={`#${project.overview.id}`}>
            <h5>{project.overview.title}</h5>
          </Link>
        </li>
      ))}
    </ul>
  )
}
