import graphic from '../../../assets/images/global/graphic-test.png'
// styles
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div style={{ height: '80vh' }}>
      <img className={styles.Image} src={graphic} alt="Test graphic" />
    </div>
  )
}
