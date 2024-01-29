import { useGetProjectsDataContext } from "../../../hooks/useGetProjectsDataContext"
import { DisciplineType } from "../../../types/enums/DisciplineType"
// components
import FilterButton from "../../atoms/FilterButton"

export default function Filter() {

  const { isActive, handleClickToSetData } = useGetProjectsDataContext()

  return (
    <ul>
      <FilterButton 
        text={DisciplineType.All}
        isActive={isActive === DisciplineType.All}
        handleClick={() => handleClickToSetData(DisciplineType.All)}
      />
      <FilterButton 
        text={DisciplineType.Frontend}
        isActive={isActive === DisciplineType.Frontend}
        handleClick={() => handleClickToSetData(DisciplineType.Frontend)}
      />
      <FilterButton 
        text={DisciplineType.UIUX}
        isActive={isActive === DisciplineType.UIUX}
        handleClick={() => handleClickToSetData(DisciplineType.UIUX)}
      />
      <FilterButton 
        text={DisciplineType.Graphic}
        isActive={isActive === DisciplineType.Graphic}
        handleClick={() => handleClickToSetData(DisciplineType.Graphic)}
      />
    </ul>
  )
}
