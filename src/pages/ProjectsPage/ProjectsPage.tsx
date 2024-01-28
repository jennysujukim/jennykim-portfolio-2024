import { useGetProjectsDataContext } from "../../hooks/useGetProjectsDataContext"
// components
import Filter from "../../components/organisms/Filter"
import Card from "../../components/organisms/Card"

export default function ProjectsPage() {

  const { isData } = useGetProjectsDataContext()
  const projects = isData.projects.map(project => project.overview)

  return (
    <div>
      <section>
        <Filter />
      </section>
      <section>
        {projects.map((project, index) => (
          <Card 
            key={index}
            details={project}
          />
        ))}
      </section>
    </div>
  )
}
