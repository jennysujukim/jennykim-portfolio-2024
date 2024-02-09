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
        isLink={false}
        handleClick={() => handleSetDiscipline(DisciplineType.All)}
        isActive={isActive === DisciplineType.All}
      />
      <Tab 
        text={DisciplineType.Frontend}
        isLink={false}
        handleClick={() => handleSetDiscipline(DisciplineType.Frontend)}
        isActive={isActive === DisciplineType.Frontend}
      />
      <Tab 
        text={DisciplineType.UIUX}
        isLink={false}
        handleClick={() => handleSetDiscipline(DisciplineType.UIUX)}
        isActive={isActive === DisciplineType.UIUX}
      />
      <Tab 
        text={DisciplineType.Graphic}
        isLink={false}
        handleClick={() => handleSetDiscipline(DisciplineType.Graphic)}
        isActive={isActive === DisciplineType.Graphic}
      />
    </ul>
  )
}
