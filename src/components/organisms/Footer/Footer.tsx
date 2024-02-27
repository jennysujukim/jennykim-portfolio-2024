import { useEffect, useState } from 'react';
// assets
import graphic from '../../../assets/images/global/footer-test.jpg'
// components
import H3Heading from '../../atoms/H3Heading'
import CtaButton from '../../atoms/CtaButton'
// styles
import styles from './Footer.module.scss'

export default function Footer() {

  const [ isTime, setIsTime ] = useState('')

  useEffect(() => {
    const updateCurrentTime = () => {
      const d = new Date();
      const dateStr = d.toLocaleString('en-CA', {
        timeZone: 'America/Vancouver',
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      const formattedDate = dateStr.replace(/, (\d{4})/, ' $1');
      setIsTime(formattedDate);
    };
    updateCurrentTime();
  
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);

  }, [setIsTime]);

  return (
    <>
      <H3Heading text="Let's Connect" />
      <div className={`Section ${styles.Wrapper}`}>
        <div className={styles.Img_Cont}>
          <img src={graphic} alt="Test graphic" />
        </div>
        <div className={styles.Content_Cont}>
          <div className={styles.Info_Cont}>
            <p className={`H5_Style ${styles.Title}`}>Thanks for visiting!</p>
            <p className={styles.Info_Text}>Currently <span className={styles.Info_Highlight}>seeking a new opportunity</span> with a company that influences positivity, loves tackling problems with a dash of creativity.</p>
            <p className={styles.Info_Text}>If you have any topics to discuss with me, feel free to <span className={styles.Info_Highlight}>send an email</span> to me.</p>
            <div className={styles.Info_Cta_Cont}>
              <CtaButton text="Read More About Me" href="/about" />
            </div>
          </div>
          <div className={styles.Socials_Cont}>
            <p className={`H5_Style ${styles.Title}`}>Find Me On</p>
            <a href="https://github.com/jennysujukim" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/jenny-seojeong-kim/" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/jklemonjuice/" target="_blank">Instagram</a>
          </div>
        </div>
        <div className={styles.Copy_Cont}>
          <p>Vancouver, Canada | {isTime}</p>
          <p>&copy; 2024 Jenny Seojeong Kim</p>
        </div>
      </div>
    </>

  )
}
