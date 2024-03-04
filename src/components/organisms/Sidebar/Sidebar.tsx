import { Link } from 'react-router-dom'
import useResponsive from '../../../hooks/useResponsive'
import { BreakpointType } from '../../../types/enums/BreakpointType'
import { useSidebarContext } from '../../../hooks/useSidebarContext'
import Dimensions from '../../../types/constants/Dimensions'
// assets
import submark from '../../../assets/images/global/j-submark.svg'
import themeBtn from '../../../assets/images/global/theme-btn.svg'
// components
import Image from '../../atoms/Image'
import SidebarNav from '../../molecules/SidebarNav'
// styles
import styles from './Sidebar.module.scss'

export default function Sidebar() {

  const isResponsive = useResponsive()
  const { isOpen, handleToggleState, handleClose } = useSidebarContext()

  return (
    <>
      {isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet ? (
        <div 
          className={styles.Wrapper}
          style={{ height: isOpen ? Dimensions.sidebarHeightOpen : Dimensions.sidebarHeight, transition: 'height 0.4s ease-in-out' }}
        >
          <div className={styles.Container}>
            <div className={styles.Btns_Cont}>
              <div className={styles.Submark_Cont}>
                <Link 
                  to="/"
                  onClick={handleClose}
                >
                  <Image 
                    src={submark}
                    alt="Submark"
                    height={Dimensions.sidebarBtnHeight}
                  />
                </Link>
              </div>
              <div className={styles.MenuBtn_Cont}>
                <button onClick={handleToggleState}>
                  { isOpen ? "Close" : "Menu" }
                </button>
              </div>
              <button className={styles.ThemeBtn_Cont}>
                <Image 
                  src={themeBtn}
                  alt="Theme changing button"
                  height={Dimensions.sidebarBtnHeight}
                />
              </button>
            </div>
            { isOpen && <SidebarNav /> }
          </div>
        </div>
      )
      :
      (
        <div 
          className={styles.Wrapper}
          style={{ width: isOpen ? Dimensions.sidebarWidthOpen : Dimensions.sidebarWidth, transition: 'width 0.4s ease-in-out' }}
        >
          <div className={`Container_Y_Margin ${styles.Container}`}>
            <div className={styles.Btns_Cont}>
              <div className={styles.Submark_Cont}>
                <Link 
                  to="/"
                  onClick={handleClose}
                >
                  <Image 
                    src={submark}
                    alt="Submark"
                    height={Dimensions.sidebarBtnHeight}
                  />
                </Link>
              </div>
              <div className={styles.MenuBtn_Cont}>
                <button onClick={handleToggleState}>
                  { isOpen ? "Close" : "Menu" }
                </button>
              </div>
              <button className={styles.ThemeBtn_Cont}>
                <Image 
                  src={themeBtn}
                  alt="Theme changing button"
                  height={Dimensions.sidebarBtnHeight}
                />
              </button>
            </div>
            { isOpen && <SidebarNav /> }
          </div>
        </div>
      )
      }
    </>
  )
}
