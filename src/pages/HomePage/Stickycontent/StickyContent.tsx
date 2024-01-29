import { Link } from "react-router-dom";
import { Project } from "../../../types/models/Project"

type StickyContentProps = {
  allProjects: Project[];
}

export default function StickyContent({ allProjects }: StickyContentProps) {
  return (
    <ul>
      {allProjects.map((project, index) => (
        <li key={index}>
          <Link to={`#${project.overview.id}`}>
            <h4>{project.overview.title}</h4>
            <p>{project.overview.discipline}</p>
            <p>{project.overview.keywords}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
