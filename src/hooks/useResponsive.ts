import { useState, useEffect } from 'react'
import Dimensions from '../types/constants/Dimensions'
import { BreakpointType } from '../types/enums/BreakpointType'

export default function useResponsive() {

  const [ isResponsive, setIsResponsive ] = useState<BreakpointType>(BreakpointType.Mobile)

  useEffect(() => {
    const handleResponsive = () => {
      if (window.innerWidth >= Dimensions.desktopLg) {
        setIsResponsive(BreakpointType.DesktopLg)
      } else if (window.innerWidth >= Dimensions.desktop) {
        setIsResponsive(BreakpointType.Desktop)
      } else if (window.innerWidth >= Dimensions.laptop) {
        setIsResponsive(BreakpointType.Laptop)
      } else if (window.innerWidth >= Dimensions.tablet) {
        setIsResponsive(BreakpointType.Tablet)
      } else {
        setIsResponsive(BreakpointType.Mobile)
      }
    }
    handleResponsive()

    window.addEventListener('resize', handleResponsive)
    return () => window.removeEventListener('resize', handleResponsive)
  }, [])

  return isResponsive
}
