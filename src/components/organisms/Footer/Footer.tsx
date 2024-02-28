import { useEffect, useState } from 'react';
// assets
import graphic from '../../../assets/images/global/footer-test.jpg'
// components
import H3Heading from '../../atoms/H3Heading'
import CtaButton from '../../atoms/CtaButton'
import InlineLinking from '../../atoms/InlineLinking';
import Highlight from '../../atoms/Highlight';
import UpRightButton from '../../atoms/UpRightButton';
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
            <p className={styles.Info_Text}>
              Currently <Highlight text="seeking a new opportunity" /> with a company that influences positivity, loves tackling problems with a dash of creativity.
            </p>
            <p className={styles.Info_Text}>
              If you have any topics to discuss with me, feel free to <InlineLinking isTooltip isClipboard text="send an email" TooltipText="Click to Copy Email" /> to me.
            </p>
            <div className={styles.Info_Cta_Cont}>
              <CtaButton text="Read More About Me" href="/about" />
            </div>
          </div>
          <div>
            <p className={`H5_Style ${styles.Title}`}>Find Me On</p>
            <div className={styles.Social_Cta_Cont}>
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
            </div>
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
