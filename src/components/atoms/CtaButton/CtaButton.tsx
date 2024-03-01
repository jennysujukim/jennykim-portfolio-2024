import { Link } from "react-router-dom"
// assets
import { IoLockClosedSharp } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
// styles
import styles from './CtaButton.module.scss'

type CtaButtonProps = {
  text: string;
  href: string;
  isLocked?: boolean;
  isRepo?: boolean;
  isLive?: boolean;
}

export default function CtaButton({ 
  text, 
  href,
  isLocked,
  isRepo,
  isLive }: CtaButtonProps) {
    
  return (
    <Link 
      to={href}
      className={isLocked ? `${styles.Container} ${styles.disabled}` : styles.Container }
    >
      <div className={styles.Top}>
        { isRepo && <IoCodeSlashOutline className={styles.Icon} /> }
        { isLive && <IoGlobeOutline className={styles.Icon} /> }
        { isLocked && <IoLockClosedSharp className={styles.Icon} /> }
        <p className={styles.Text}>{text}</p>
        { !isRepo && !isLive && !isLocked && 
          <IoArrowForwardOutline className={styles.Icon} />
        }
      </div>
      <div className={styles.Bottom}>
        { isRepo && <IoCodeSlashOutline className={styles.Icon} /> }
        { isLive && <IoGlobeOutline className={styles.Icon} /> }
        { isLocked && <IoLockClosedSharp className={styles.Icon} /> }
        <p className={styles.Text}>{text}</p>
        { !isRepo && !isLive && !isLocked &&
          <IoArrowForwardOutline className={styles.Icon} />
        }
      </div>
    </Link>
  )
}
