import { Project } from '../../../types/models/Project'
// components
import Card from '../../../components/organisms/Card'
// styles
import styles from './HomeScrollContent.module.scss'

type ScrollContentProps = {
  allProjects: Project[];
}

export default function HomeScrollContent({ allProjects }: ScrollContentProps) {

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
