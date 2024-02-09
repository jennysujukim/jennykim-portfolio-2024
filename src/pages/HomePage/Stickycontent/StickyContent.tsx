import { Project } from "../../../types/models/Project"
import { useIndicatorContext } from "../../../hooks/useIndicatorContext";
// components
import Tab from "../../../components/atoms/Tab";

type StickyContentProps = {
  allProjects: Project[];
}

export default function StickyContent({ allProjects }: StickyContentProps) {

  const { isActive } = useIndicatorContext();

  return (
    <ul>
      {allProjects.map((project, index) => (
        <Tab 
          key={index}
          text={project.overview.title}
          isLink
          href={project.overview.id}
          smallText={`Work #${index + 1} ${project.overview.discipline}`}
          isActive={isActive === project.overview.id}
        />
      ))}
    </ul>
  )
}
