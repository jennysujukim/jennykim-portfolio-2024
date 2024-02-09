import styles from './Tab.module.scss'

type TabProps = {
  text: string;
  isLink: boolean;
  href?: string;
  smallText?: string;
  isActive: boolean;
  handleClick?: (text: string) => void;
}

export default function Tab({ 
  text, 
  isLink,
  href,
  smallText,
  isActive,
  handleClick }: TabProps) {

  return (
    <li className={isActive ? `${styles.Wrapper} ${styles.Active}` : styles.Wrapper}>
      {isLink &&
        <a 
          className={styles.Container_Home} 
          href={`#${href}`}
        >
          {smallText && 
            <span className={isActive ? `${styles.SmallText} ${styles.Active}` : styles.SmallText}>
              {smallText}
            </span>
          }
          <div className={styles.Text_Cont}>
            <p className={isActive ? `H5_Style ${styles.Text_Home} ${styles.Active}` : `H5_Style ${styles.Text_Home}`}>
              {text}
            </p>
            {isActive && 
              <p className={isActive ? `${styles.Bullet} ${styles.Active}` : styles.Bullet}>
                &bull;
              </p> 
            }
          </div>
        </a>
      }
      {!isLink && handleClick &&
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
      }
    </li>
  )
}
