import useResponsive from "../../../hooks/useResponsive"
// styles
import styles from './FilterButton.module.scss'

type FilterButtonProps = {
  text: string;
  isActive: boolean;
  handleClick: (text: string) => void;
}

export default function FilterButton({
  text,
  isActive,
  handleClick }: FilterButtonProps) {

  const isResponsive = useResponsive()

  return (
    <li 
      className={styles.Wrapper}
      onClick={() => handleClick(text)}
    >
      <div className={styles.Container}>
        <p>{text}</p>
        {isActive && isResponsive !== 'mobile' && isResponsive !== 'tablet' &&
          <div>&bull;</div>
        }
      </div>
    </li>
  )
}
