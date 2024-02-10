import { createContext, useEffect, useState } from "react";
import { ViewByType } from "../types/enums/ViewByType";

type ViewByContextType = {
  isSelected: ViewByType;
  setIsSelected: React.Dispatch<React.SetStateAction<ViewByType>>;
  clickToSetView: (viewBy: ViewByType) => void;
};

type ViewByContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: ViewByContextType = {
  isSelected: ViewByType.CARDS,
  setIsSelected: () => {},
  clickToSetView: () => {}
};

export const ViewByContext = createContext(defaultContextValue);

export const ViewByContextProvider = ({ children }: ViewByContextProviderProps) => {

  const [ isSelected, setIsSelected ] = useState(ViewByType.CARDS)

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('viewBy') || JSON.stringify(ViewByType.CARDS))
    setIsSelected(value)
  }, [isSelected])

  const clickToSetView = (viewBy: ViewByType) => {
    localStorage.setItem('viewBy', JSON.stringify(viewBy))
    setIsSelected(viewBy)
  }

  return (
    <ViewByContext.Provider value={{ 
      isSelected, 
      setIsSelected, 
      clickToSetView
    }}>
      {children}
    </ViewByContext.Provider>
  );
};