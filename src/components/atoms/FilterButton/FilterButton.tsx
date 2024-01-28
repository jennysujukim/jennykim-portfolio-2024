import { Link } from "react-router-dom"
import useResponsive from "../../../hooks/useResponsive"
// styles
import styles from './FilterButton.module.scss'

type FilterButtonProps = {
  text: string;
  categoryParam: string;
  isActive: boolean;
  handleClick: (text: string) => void;
}

export default function FilterButton({
  text,
  categoryParam,
  isActive,
  handleClick }: FilterButtonProps) {

  const isResponsive = useResponsive()

  return (
    <li 
      className={styles.Wrapper}
      onClick={() => handleClick(text)}
    >
      <Link 
        className={styles.Container}
        to={{
          pathname: '/projects',
          search: `discipline=${categoryParam}`
        }}
      >
        <p>{text}</p>
        {isActive && isResponsive !== 'mobile' && isResponsive !== 'tablet' &&
          <div>&bull;</div>
        }
      </Link>
    </li>
  )
}
