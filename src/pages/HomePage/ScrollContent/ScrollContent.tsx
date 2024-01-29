import { Project } from '../../../types/models/Project'
// components
import Card from '../../../components/organisms/Card'

type ScrollContentProps = {
  allProjects: Project[];
}

export default function ScrollContent({ allProjects }: ScrollContentProps) {

  return (
    <>
      {allProjects.map((project, index) => (
        <Card 
          key={index}
          details={project.overview}
        />
      ))}
    </>
  )
}
