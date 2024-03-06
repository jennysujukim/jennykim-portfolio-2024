import styles from './Tab.module.scss'

type TabProps = {
  text: string;
  isActive: boolean;
  href?: string;
  smallText?: string;
  isLink?: boolean;
  isFilter?: boolean;
  handleClick?: (text: string) => void;
  isTab?: boolean;
}

export default function Tab({ 
  text, 
  isLink,
  href,
  smallText,
  isActive,
  isFilter,
  handleClick,
  isTab }: TabProps) {

  return (
    <>
      {isLink &&
        <li className={isActive ? `${styles.Wrapper} ${styles.Active}` : styles.Wrapper}>
          <a 
            className={styles.Container_Home} 
            href={`#${href}`}
          >
            {smallText && 
              <span className={isActive ? `${styles.SmallText} ${styles.Active}` : styles.SmallText}>
                {smallText}
              </span>
            }
            <div className={styles.Text_Cont_Home}>
              <p className={isActive ? `H5_Style ${styles.Text} ${styles.Active}` : `H5_Style ${styles.Text}`}>
                {text}
              </p>
              {isActive && 
                <p className={isActive ? `${styles.Bullet} ${styles.Active}` : styles.Bullet}>
                  &bull;
                </p> 
              }
            </div>
          </a>
        </li>
      }
      {isFilter && handleClick &&
        <li className={isActive ? `${styles.Wrapper} ${styles.Active}` : styles.Wrapper}>
          <div 
            className={styles.Container} 
            onClick={() => handleClick(text)}
          >
            {smallText && 
              <span className={isActive ? `${styles.SmallText} ${styles.Active}` : styles.SmallText}>
                {smallText}
              </span>
            }
            <div className={styles.Text_Cont}>
              <p className={isActive ? `H5_Style ${styles.Text} ${styles.Active}` : `H5_Style ${styles.Text}`}>
                {text}
              </p>
              {isActive && 
                <p className={isActive ? `${styles.Bullet} ${styles.Active}` : styles.Bullet}>
                  &bull;
                </p>
              }
            </div>
          </div>
        </li>
      }
      {isTab && 
        <li className={`${styles.Wrapper} ${styles.NotLink}`}>
          <div className={styles.Container}>
            {smallText && 
              <span className={`${styles.SmallText} ${styles.NotLink}`}>
                {smallText}
              </span>
            }
            <div className={styles.Text_Cont}>
              <p className={`H5_Style ${styles.Text} ${styles.NotLink}`}>
                {text}
              </p>
              {isActive && 
                <p className={`${styles.Bullet} ${styles.NotLink}`}>
                  &bull;
                </p>
              }
            </div>
          </div>
        </li>
      }
    </>
  )
}
