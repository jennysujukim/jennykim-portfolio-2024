// assets
import testImg from '../../../assets/images/global/footer-test.jpg'
// components
import Tab from '../../../components/atoms/Tab'
// styles
import styles from './AboutScrollContent.module.scss'

export default function AboutScrollContent() {
  return (
    <>
      <section>
        <p>So, I’m Jenny — Art Director with an architectural background. I love everything that has to do with product & visual design, mobile & web projects as well as branding, typography, and animations. With my solid industry experience, I know how to help clients solve real business cases and grow their businesses by using design thinking.</p>
        <span>Learn, Create, Repeat.</span>
        <p>So, I’m Jenny — Art Director with an architectural background. I love everything that has to do with product & visual design, mobile & web projects as well as branding.</p>
        <img 
          className={styles.TestImg}
          src={testImg}
          alt="Test Image"
        />
      </section>
    </>
  )
}
