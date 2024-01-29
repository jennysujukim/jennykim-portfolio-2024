import { useLocation } from "react-router-dom"
import { getProjectsData } from "../../utils/getProjectsData"

export default function ArtifactPage() {

  const location = useLocation()
  const allProjects = getProjectsData().projects
  const data = allProjects.find(project => project.overview.link === location.pathname)

  return (
    <>
      {data && (
        <>
          <div>
            {data.overview.description}
            {data.overview.discipline}
            {data.overview.id}
            {data.overview.keywords}
            {data.overview.link}
            {data.overview.role}
            {data.overview.tools}
            {data.overview.timeline}
            {data.overview.title}
          </div>
        </>
      )}
    </>
  )
}
