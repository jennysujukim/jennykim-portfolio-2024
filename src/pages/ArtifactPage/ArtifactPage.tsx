import { useLocation } from "react-router-dom"
import { getProjectsData } from "../../utils/getProjectsData"
import { DisciplineType } from "../../types/enums/DisciplineType"

export default function ArtifactPage() {

  const location = useLocation()

  const allData = getProjectsData(DisciplineType.All).projects
  const data = allData.find(project => project.overview.link === location.pathname)


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
            {data.overview.tech}
            {data.overview.timeline}
            {data.overview.title}
          </div>
          <div>
            {data.link}
            {data.livesite}
            {data.sections.map((section, index) => (
              <div key={index}>
                {section.content}
                {section.id}
                {section.image}
                {section.title}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
