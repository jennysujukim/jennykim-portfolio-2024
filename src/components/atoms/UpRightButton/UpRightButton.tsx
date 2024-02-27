import { Link } from "react-router-dom"
import { LuArrowUpRight } from "react-icons/lu";
// styles
import styles from './UpRightButton.module.scss'

type UpRightButtonProps = {
  text: string;
  href: string;
  isExternal: boolean;
}

export default function UpRightButton({ 
  text, 
  href,
  isExternal }: UpRightButtonProps) {
  return (
    <>
      {isExternal ? (
        <Link 
          className={styles.Container}
          to={href} 
          target="_blank"
        >
          <div className={styles.Top}>
            {text}
            <LuArrowUpRight className={styles.Icon} />
          </div>
          <div className={styles.Bottom}>
            {text}
            <LuArrowUpRight className={styles.Icon} />
          </div>
        </Link>
      ) : (
        <Link 
          className={styles.Container}
          to={href}
        >
          {text}
          <LuArrowUpRight className={styles.Icon} />
        </Link>
      )}
    </>

  )
}
