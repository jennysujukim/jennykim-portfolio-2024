import { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleState: () => void;
  handleClose: () => void;
};

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: SidebarContextType = {
  isOpen: false,
  setIsOpen: () => {},
  handleToggleState: () => {},
  handleClose: () => {}
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

  const handleClose = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      handleToggleState,
      handleClose
    }}>
      {children}
    </SidebarContext.Provider>
  );
};