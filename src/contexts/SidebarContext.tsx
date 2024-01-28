import { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleState: () => void;
};

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: SidebarContextType = {
  isOpen: false,
  setIsOpen: () => {},
  handleToggleState: () => {},
};

export const SidebarContext = createContext(defaultContextValue);

export const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {

  const [ isOpen, setIsOpen ] = useState(false)

  const handleToggleState = () => {
    setIsOpen(prevState => {
      const nextState = !prevState;
      return nextState;
    })
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleToggleState }}>
      {children}
    </SidebarContext.Provider>
  );
};