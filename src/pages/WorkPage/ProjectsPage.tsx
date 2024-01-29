import { useGetProjectsDataContext } from "../../hooks/useGetProjectsDataContext"
// components
import Filter from "../../components/organisms/Filter"
import Card from "../../components/organisms/Card"

export default function WorkPage() {

  const { isData } = useGetProjectsDataContext()

  return (
    <div>
      <section>
        <Filter />
      </section>
      <section>
        {isData && isData.map((project, index) => (
          <Card 
            key={index}
            details={project.overview}
          />
        ))}
      </section>
    </div>
  )
}
