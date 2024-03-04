import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const useSidebarContext = () => {
    const context = useContext(SidebarContext)

    if(!context){
        throw new Error('useSidebarContext must be inside an SidebarContext Provider.')
    }

    return context
}