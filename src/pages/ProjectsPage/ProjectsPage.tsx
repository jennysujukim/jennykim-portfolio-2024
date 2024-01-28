import { useGetProjectsDataContext } from "../../hooks/useGetProjectsDataContext"
// components
import Filter from "../../components/organisms/Filter"
import Card from "../../components/organisms/Card"

export default function ProjectsPage() {

  const { projectsOverviewData } = useGetProjectsDataContext()

  console.log(projectsOverviewData)

  return (
    <div>
      <section>
        <Filter />
      </section>
      <section>
        {projectsOverviewData.map((project, index) => (
          <Card 
            key={index}
            details={project}
          />
        ))}
      </section>
    </div>
  )
}
