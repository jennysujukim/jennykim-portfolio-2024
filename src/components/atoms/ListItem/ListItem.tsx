import styles from './ListItem.module.scss'

type ListItemProps = {
  title: string;
  subtitle?: string;
  keywords?: string[];
  description?: string;
  year?: string;
  isContainer?: boolean;
}

export default function ListItem({
  title,
  subtitle,
  keywords,
  year,
  isContainer }: ListItemProps) {

  return (
    <>
      <div className={isContainer ? styles.Wrapper_Container : styles.Wrapper}>
        <div>
          <p className={styles.Title}>{title}</p>
          <p>{subtitle}</p>
          <div className={keywords && styles.Keywords_Cont}>
            {keywords && keywords.map((keyword, index) => (
              <span 
                key={index}
                className={styles.Keyword}
              >
                {keyword}
                {keywords.length - 1 !== index && <span>,</span>}
              </span>
              
            ))
            }
          </div>
        </div>
        <p className={styles.Year}>{year}</p>
      </div>
    </>
  )
}
