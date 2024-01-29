import { createContext, useState, useEffect } from "react";
import { DisciplineType } from "../types/enums/DisciplineType";
import { Projects } from "../types/models/Projects";
import { Project } from "../types/models/Project";
import { getProjectsData } from "../utils/getProjectsData";
import { ProjectOverview } from "../types/models/ProjectOverview";

type GetProjectsDataContextType = {
  isActive: DisciplineType;
  setIsActive: React.Dispatch<React.SetStateAction<DisciplineType>>;
  isData: Projects;
  setIsData: React.Dispatch<React.SetStateAction<Projects>>;
  projectsOverviewData: ProjectOverview[];
  handleClickToSetData: (discipline: DisciplineType) => void;
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
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
  selectedProject: null,
  setSelectedProject: () => {},
}

export const GetProjectsDataContext = createContext(defaultContextValue);

export const GetProjectsDataContextProvider = ({ children }: GetProjectsDataContextProviderProps) => {

  const [ isActive, setIsActive ] = useState<DisciplineType>(DisciplineType.All)
  const [ isData, setIsData ] = useState<Projects>(initialData)
  const [ projectsOverviewData, setProjectsOverviewData ] = useState<ProjectOverview[]>([]);

  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null);

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
      handleClickToSetData,
      selectedProject,
      setSelectedProject
    }}>
      {children}
    </GetProjectsDataContext.Provider>
  );
};