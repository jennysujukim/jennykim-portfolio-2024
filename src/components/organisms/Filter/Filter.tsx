import { useGetProjectsDataContext } from "../../../hooks/useGetProjectsDataContext"
import { DisciplineType } from "../../../types/enums/DisciplineType"
// components
import FilterButton from "../../atoms/FilterButton"
// styles
import styles from './Filter.module.scss'

export default function Filter() {

  const { isActive, handleSetDiscipline } = useGetProjectsDataContext()

  return (
    <ul className={styles.Wrapper}>
      <FilterButton 
        text={DisciplineType.All}
        isActive={isActive === DisciplineType.All}
        handleClick={() => handleSetDiscipline(DisciplineType.All)}
      />
      <FilterButton 
        text={DisciplineType.Frontend}
        isActive={isActive === DisciplineType.Frontend}
        handleClick={() => handleSetDiscipline(DisciplineType.Frontend)}
      />
      <FilterButton 
        text={DisciplineType.UIUX}
        isActive={isActive === DisciplineType.UIUX}
        handleClick={() => handleSetDiscipline(DisciplineType.UIUX)}
      />
      <FilterButton 
        text={DisciplineType.Graphic}
        isActive={isActive === DisciplineType.Graphic}
        handleClick={() => handleSetDiscipline(DisciplineType.Graphic)}
      />
    </ul>
  )
}
