import { useViewByContext } from "../../../hooks/useViewByContext"
import { ViewByType } from "../../../types/enums/ViewByType"
import Colours from "../../../types/constants/Colours"
// components
import Icon from "../../../components/atoms/Icon"
// styles
import styles from './ViewBy.module.scss'

export default function ViewBy() {

  const { clickToSetView, isSelected } = useViewByContext()

  return (
    <div className={styles.Wrapper}>
      <button 
        className={isSelected === ViewByType.LISTS ? `${styles.Active} ${styles.Btn}` : styles.Btn} 
        onClick={() => clickToSetView(ViewByType.LISTS)}
      >
        <span className={styles.Btn_Text}>Lists</span>
        <Icon 
          iconType="listIcon"
          contentFill={isSelected === ViewByType.LISTS ? Colours.primaryBlueDark : Colours.primaryGrey}
          width="10px"
          height="10px"
        />
      </button>
      <button 
        className={isSelected === ViewByType.GRIDS ? `${styles.Active} ${styles.Btn}` : styles.Btn} 
        onClick={() => clickToSetView(ViewByType.GRIDS)}
      >
        <span className={styles.Btn_Text}>Grids</span>
        <Icon 
          iconType="gridIcon"
          contentFill={isSelected === ViewByType.GRIDS ? Colours.primaryBlueDark : Colours.primaryGrey}
          width="10px"
          height="10px"
        />
      </button>
    </div>
  )
}
