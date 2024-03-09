import styles from './Title.module.scss'

type TitleProps = {
  text: string;
  textCenter?: boolean;
}

export default function Title({ 
  text, 
  textCenter }: TitleProps) {

  return (
    <h2 className={textCenter ? styles.Title : ''}>{text}</h2>
  )
}
