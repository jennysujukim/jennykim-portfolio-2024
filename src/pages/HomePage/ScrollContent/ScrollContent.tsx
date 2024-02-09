import { Project } from '../../../types/models/Project'
// components
import Card from '../../../components/organisms/Card'
// styles
import styles from './ScrollContent.module.scss'

type ScrollContentProps = {
  allProjects: Project[];
}

export default function ScrollContent({ allProjects }: ScrollContentProps) {

  return (
    <div className={styles.Wrapper}>
      {allProjects.map((project, index) => (
        <Card 
          key={index}
          details={project.overview}
        />
      ))}
    </div>
  )
}
