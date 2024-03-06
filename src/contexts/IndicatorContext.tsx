import { createContext, useState, useEffect } from "react";

type IndicatorContextType = {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

type IndicatorContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: IndicatorContextType = {
  isActive: "",
  setIsActive: () => {}
}

export const IndicatorContext = createContext(defaultContextValue);

export const IndicatorContextProvider = ({ children }: IndicatorContextProviderProps) => {

  const [ isActive, setIsActive ] = useState<string>("");

  useEffect(() => {
    setIsActive(isActive)
  }, [isActive])

  return (
    <IndicatorContext.Provider value={{
      isActive,
      setIsActive
    }}>
      {children}
    </IndicatorContext.Provider>
  )
}