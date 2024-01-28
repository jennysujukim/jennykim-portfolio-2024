import { Link } from "react-router-dom"
// styles
import styles from './CtaButton.module.scss'

type CtaButtonProps = {
  text: string;
  href: string;
}

export default function CtaButton({ 
  text, 
  href }: CtaButtonProps) {
    
  return (
    <Link 
      to={href}
      className={styles.Container}
    >
      <p className={styles.Text}>{text}</p>
    </Link>
  )
}
