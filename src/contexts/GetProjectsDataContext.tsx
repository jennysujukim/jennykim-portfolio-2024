import { createContext, useState } from "react";
import { DisciplineType } from "../types/enums/DisciplineType";
import { Project } from "../types/models/Project";

type GetProjectsDataContextType = {
  isActive: DisciplineType;
  setIsActive: React.Dispatch<React.SetStateAction<DisciplineType>>;
  isData: Project;
  setIsData: React.Dispatch<React.SetStateAction<Project>>;
};

type GetProjectsDataContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: GetProjectsDataContextType = {
  isActive: DisciplineType.None,
  setIsActive: () => {},
  isData: { projects: [] },
  setIsData: () => {},
}

export const GetProjectsDataContext = createContext(defaultContextValue);

export const GetProjectsDataContextProvider = ({ children }: GetProjectsDataContextProviderProps) => {

  const [ isActive, setIsActive ] = useState<DisciplineType>(DisciplineType.All)
  const [ isData, setIsData ] = useState<Project>({ projects: [] })

  return (
    <GetProjectsDataContext.Provider value={{
      isActive,
      setIsActive,
      isData,
      setIsData,
    }}>
      {children}
    </GetProjectsDataContext.Provider>
  );
};