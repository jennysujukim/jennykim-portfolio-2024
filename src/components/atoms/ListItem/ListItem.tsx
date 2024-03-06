import styles from './ListItem.module.scss'

type ListItemProps = {
  title: string;
  subtitle: string;
  description?: string;
  year?: string;
}

export default function ListItem({
  title,
  subtitle,
  description,
  year }: ListItemProps) {
  return (
    <>
    <div className={styles.Wrapper}>
      <div>
        <p className={styles.Title}>{title}</p>
        <p>{subtitle}</p>
      </div>
      <p className={styles.Year}>{year}</p>
    </div>
    <p>{description}</p>
    </>
  )
}
