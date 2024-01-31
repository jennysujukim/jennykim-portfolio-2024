import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ProjectOverview } from "../../../types/models/ProjectOverview"
import { useIndicatorContext } from "../../../hooks/useIndicatorContext";
// assets
import testImage from "../../../assets/images/projects/thumbnail-test.png"
// components
import CtaButton from "../../atoms/CtaButton";
// styles
import styles from './Card.module.scss'

type CardProps = {
  details: ProjectOverview;
}

export default function Card({ details }: CardProps) {

  const targetRef = useRef<HTMLElement>(null);

  const { isActive, setIsActive } = useIndicatorContext();

  useEffect(() => {
    const currentTargetRef = targetRef.current;
    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px"
    }

    if(currentTargetRef) {
      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting === true){
          setIsActive(entry.target.id)
        }
      },options)

      observer.observe(currentTargetRef);

      return () => observer.disconnect();
    }
  }, [isActive, setIsActive])

  return (
    <article 
      id={details.id}
      className={styles.Wrapper}
      ref={targetRef}
    >
      <div className={styles.Title_Cont}>
        {details.discipline.map((value, index) => (
          <span 
            key={index}
            className={styles.Discipline}
          >
            {value}
          </span>
        ))}
        <h2 className="H3_Style">{details.title}&nbsp;/&nbsp;</h2>
        <p className={styles.Type}>{details.type}</p>
      </div>
      <Link 
        to={details.link}
        className={styles.Image_Cont}
      >
        <img 
          className={styles.Image}
          src={testImage}
          alt="Preview of project"
        />
      </Link>

      <div className={styles.Details_Cont}>
        <div className={styles.Detail_Wrapper}>
          <div className={styles.Detail_Cont}>
            <p className={styles.Detail_Title}>Role</p>
            <p className={styles.Detail}>{details.role}</p>
          </div>
          <div className={styles.Detail_Cont}>
            <p className={styles.Detail_Title}>Tools</p>
            <p className={styles.Detail}>{details.tools}</p>
          </div>
        </div>
        <CtaButton 
          text="View Project" 
          href={details.link}
        />
      </div>
    </article>
  )
}
