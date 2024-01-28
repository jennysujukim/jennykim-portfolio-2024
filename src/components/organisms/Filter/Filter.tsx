import { useEffect } from "react"
import { useGetProjectsDataContext } from "../../../hooks/useGetProjectsDataContext"
import { DisciplineType } from "../../../types/enums/DisciplineType"
import { getProjectsData } from "../../../utils/getProjectsData"
// components
import FilterButton from "../../atoms/FilterButton"

export default function Filter() {

  const { isActive, setIsActive, setIsData } = useGetProjectsDataContext()

  useEffect(() => {
    setIsData(getProjectsData(DisciplineType.All))
  }, [])

  const handleClick = (discipline: DisciplineType) => {
    const newData = getProjectsData(discipline);
    setIsActive((prevState) => prevState === discipline ? prevState : discipline);
    setIsData(newData);
  }

  return (
    <ul>
      <FilterButton 
        text={DisciplineType.All}
        categoryParam="all"
        isActive={isActive === DisciplineType.All}
        handleClick={() => handleClick(DisciplineType.All)}
      />
      <FilterButton 
        text={DisciplineType.Frontend}
        categoryParam="frontend-development"
        isActive={isActive === DisciplineType.Frontend}
        handleClick={() => handleClick(DisciplineType.Frontend)}
      />
      <FilterButton 
        text={DisciplineType.UIUX}
        categoryParam="uiux-design"
        isActive={isActive === DisciplineType.UIUX}
        handleClick={() => handleClick(DisciplineType.UIUX)}
      />
      <FilterButton 
        text={DisciplineType.Graphic}
        categoryParam="graphic-design"
        isActive={isActive === DisciplineType.Graphic}
        handleClick={() => handleClick(DisciplineType.Graphic)}
      />
    </ul>
  )
}
