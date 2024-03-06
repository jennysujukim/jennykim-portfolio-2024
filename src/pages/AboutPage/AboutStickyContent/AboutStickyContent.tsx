// assets
import profile from '../../../assets/images/about/profile.jpg'
// components
import UpRightButton from '../../../components/atoms/UpRightButton'
import SubTitle from '../../../components/atoms/SubTitle'
// styles
import styles from './AboutStickyContent.module.scss'

export default function AboutStickyContent() {
  return (
    <>
      <section>
        <img 
          className={styles.Profile}
          src={profile}
          alt="Jenny Kim Profile"
        />
      </section>
      <section>
        <SubTitle text="Socials" />
        <div className={styles.Socials_Cont}>
          <UpRightButton 
            text="GitHub"
            href="https://github.com/jennysujukim"
            isExternal={true}
          />
          <UpRightButton 
            text="LinkedIn"
            href="https://www.linkedin.com/in/jenny-seojeong-kim/"
            isExternal={true}
          />
          <UpRightButton 
            text="Instagram"
            href="https://www.instagram.com/jklemonjuice/"
            isExternal={true}
          />
          <UpRightButton 
            text="Resume"
            href="httsp://www.google.com"
            isExternal={true}
          />
        </div>
        <div>

        </div>
      </section>
    </>
  )
}
