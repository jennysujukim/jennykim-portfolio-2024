import { useGetProjectsDataContext } from "../../../hooks/useGetProjectsDataContext"
import { useViewByContext } from "../../../hooks/useViewByContext"
import { ViewByType } from "../../../types/enums/ViewByType"
// components
import Card from "../../../components/organisms/Card"
// styles
import styles from './ProjectsContent.module.scss'

export default function ProjectsContent() {

  const { isData } = useGetProjectsDataContext()
  const { isSelected } = useViewByContext()

  return (
    <>
      {isData && isData.map((project, index) => (
        <div
          key={index}
          className={isSelected === ViewByType.CARDS ? styles.Card_Cont : styles.Card_Cont_Lists}
        >
          <Card details={project.overview} />
        </div>
      ))}
    </>
  )
}
