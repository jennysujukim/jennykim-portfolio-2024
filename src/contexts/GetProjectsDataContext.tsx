import { createContext, useState, useEffect } from "react";
import { DisciplineType } from "../types/enums/DisciplineType";
import { Project } from "../types/models/Project";
import { getProjectsData } from "../utils/getProjectsData";
import { ProjectOverview } from "../types/models/ProjectOverview";

type GetProjectsDataContextType = {
  isActive: DisciplineType;
  setIsActive: React.Dispatch<React.SetStateAction<DisciplineType>>;
  isData: Project;
  setIsData: React.Dispatch<React.SetStateAction<Project>>;
  projectsOverviewData: ProjectOverview[];
  handleClickToSetData: (discipline: DisciplineType) => void;
};

type GetProjectsDataContextProviderProps = {
  children: React.ReactNode;
};

const initialData = getProjectsData(DisciplineType.All);

const defaultContextValue: GetProjectsDataContextType = {
  isActive: DisciplineType.All,
  setIsActive: () => {},
  isData: initialData,
  setIsData: () => {},
  projectsOverviewData: [],
  handleClickToSetData: () => {},
}

export const GetProjectsDataContext = createContext(defaultContextValue);

export const GetProjectsDataContextProvider = ({ children }: GetProjectsDataContextProviderProps) => {

  const [ isActive, setIsActive ] = useState<DisciplineType>(DisciplineType.All)
  const [ isData, setIsData ] = useState<Project>(initialData)
  const [ projectsOverviewData, setProjectsOverviewData ] = useState<ProjectOverview[]>([]);

  const handleClickToSetData = (discipline: DisciplineType) => {
    if(discipline === DisciplineType.None){
      return null;
    } else {
      const newData = getProjectsData(discipline);
      setIsActive((prevState) => prevState === discipline ? prevState : discipline);
      setIsData(newData);
      setProjectsOverviewData(newData.projects.map(project => project.overview));
      return;
    }
  } 

  useEffect(() => {
    const data = getProjectsData(isActive);
    setIsData(data);
    setProjectsOverviewData(data.projects.map(project => project.overview));
  }, [isActive])

  return (
    <GetProjectsDataContext.Provider value={{
      isActive,
      setIsActive,
      isData,
      setIsData,
      projectsOverviewData,
      handleClickToSetData
    }}>
      {children}
    </GetProjectsDataContext.Provider>
  );
};