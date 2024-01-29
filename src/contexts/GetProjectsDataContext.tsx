import { createContext, useState, useEffect } from "react";
import { DisciplineType } from "../types/enums/DisciplineType";
import { Project } from "../types/models/Project";
import { getProjectsData } from "../utils/getProjectsData";


type GetProjectsDataContextType = {
  isActive: DisciplineType;
  setIsActive: React.Dispatch<React.SetStateAction<DisciplineType>>;
  isData: Project[] | null;
  setIsData: React.Dispatch<React.SetStateAction<Project[] | null>>;
  handleSetDiscipline: (discipline: DisciplineType) => void;
};

type GetProjectsDataContextProviderProps = {
  children: React.ReactNode;
};

const initialData = getProjectsData().projects;

const defaultContextValue: GetProjectsDataContextType = {
  isActive: DisciplineType.All,
  setIsActive: () => {},
  isData: initialData,
  setIsData: () => {},
  handleSetDiscipline: () => {},
}

export const GetProjectsDataContext = createContext(defaultContextValue);

export const GetProjectsDataContextProvider = ({ children }: GetProjectsDataContextProviderProps) => {

  const allProjects = getProjectsData().projects;
  const frontendProjects = allProjects.filter((project) => project.overview.discipline.includes(DisciplineType.Frontend))
  const uiuxProjects = allProjects.filter((project) => project.overview.discipline.includes(DisciplineType.UIUX))
  const graphicProjects = allProjects.filter((project) => project.overview.discipline.includes(DisciplineType.Graphic))

  const [ isActive, setIsActive ] = useState<DisciplineType>(DisciplineType.All)
  const [ isData, setIsData ] = useState<Project[] | null>(initialData)

  const handleSetDiscipline = (discipline: DisciplineType) => {
    setIsActive((prevState) => prevState === discipline ? prevState : discipline);

    if(discipline === DisciplineType.All){
      const newData = allProjects;
      setIsData(newData);
    } else if (discipline === DisciplineType.Frontend){
      const newData = frontendProjects;
      setIsData(newData);
    } else if (discipline === DisciplineType.UIUX){
      const newData = uiuxProjects;
      setIsData(newData);
    } else if (discipline === DisciplineType.Graphic){
      const newData = graphicProjects;
      setIsData(newData);
    } else {
      return null;
    }
  } 

  useEffect(() => {
    const data = allProjects;
    setIsData(data);
  }, [isActive])

  return (
    <GetProjectsDataContext.Provider value={{
      isActive,
      setIsActive,
      isData,
      setIsData,
      handleSetDiscipline,
    }}>
      {children}
    </GetProjectsDataContext.Provider>
  );
};