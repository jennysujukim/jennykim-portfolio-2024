import { useContext } from "react";
import { IndicatorContext } from "../contexts/IndicatorContext";

export const useIndicatorContext = () => {
    const context = useContext(IndicatorContext)

    if(!context){
        throw new Error('useIndicatorContext must be inside an IndicatorContext Provider.')
    }

    return context
}