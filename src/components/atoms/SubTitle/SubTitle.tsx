// styles
import styles from './SubTitle.module.scss'

type SubTitleProps = {
  text: string;
}

export default function SubTitle({ text }: SubTitleProps) {
  return (
    <h5 className={styles.SubTitle}>{text}</h5>
  )
}
