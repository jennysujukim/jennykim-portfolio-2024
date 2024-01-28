import { useContext } from "react";
import { GetProjectsDataContext } from "../contexts/GetProjectsDataContext";

export const useGetProjectsDataContext = () => {
    const context = useContext(GetProjectsDataContext)

    if(!context){
        throw new Error('useGetProjectsDataContext must be inside an GetProjectsDataContext Provider.')
    }

    return context
}