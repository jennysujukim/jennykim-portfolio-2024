// assets
import profile from '../../../assets/images/about/profile.jpg'
// styles
import styles from './AboutStickyContent.module.scss'

export default function AboutStickyContent() {
  return (
    <section>
      <img 
        className={styles.Profile}
        src={profile}
        alt="Jenny Kim Profile"
      />
    </section>
  )
}
