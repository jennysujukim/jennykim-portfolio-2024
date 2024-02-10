import { useContext } from "react";
import { ViewByContext } from "../contexts/ViewByContext";

export const useViewByContext = () => {
    const context = useContext(ViewByContext)

    if(!context){
        throw new Error('useViewByContext must be inside an ViewByContext Provider.')
    }

    return context
}