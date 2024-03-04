import { useGetProjectsDataContext } from "../../../hooks/useGetProjectsDataContext"
import { DisciplineType } from "../../../types/enums/DisciplineType"
// components
import Tab from "../../atoms/Tab"
// styles
import styles from './Filter.module.scss'

export default function Filter() {

  const { isActive, handleSetDiscipline } = useGetProjectsDataContext()

  return (
    <ul className={styles.Wrapper}>
      <Tab 
        text={DisciplineType.All}
        isFilter
        handleClick={() => handleSetDiscipline(DisciplineType.All)}
        isActive={isActive === DisciplineType.All}
      />
      <Tab 
        text={DisciplineType.Frontend}
        isFilter
        handleClick={() => handleSetDiscipline(DisciplineType.Frontend)}
        isActive={isActive === DisciplineType.Frontend}
      />
      <Tab 
        text={DisciplineType.UIUX}
        isFilter
        handleClick={() => handleSetDiscipline(DisciplineType.UIUX)}
        isActive={isActive === DisciplineType.UIUX}
      />
      <Tab 
        text={DisciplineType.Graphic}
        isFilter
        handleClick={() => handleSetDiscipline(DisciplineType.Graphic)}
        isActive={isActive === DisciplineType.Graphic}
      />
    </ul>
  )
}
