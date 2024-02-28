// styles
import styles from './Highlight.module.scss'

type HighlightProps = {
  text: string;
}

export default function Highlight({ text }: HighlightProps) {
  return (
    <span className={styles.Container}>{text}</span>
  )
}
