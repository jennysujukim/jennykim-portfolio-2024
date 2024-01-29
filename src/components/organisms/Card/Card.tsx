import { Link } from "react-router-dom";
import { ProjectOverview } from "../../../types/models/ProjectOverview"
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

  return (
    <div id={details.id}>
      <div className={styles.TitleContainer}>
        <h5 className="h3Style">{details.title}&nbsp;/&nbsp;</h5>
        <span className="pStyle">{details.keywords}</span>
      </div>
      <Link 
        to={details.link}
        className={styles.ImageContainer}
      >
        <img 
          className={styles.Image}
          src={testImage}
          alt="Preview of project"
        />
      </Link>
      <div className={styles.DetailsContainer}>
        <div>
          <p className={styles.Description}>&#9776; {details.description}</p>
          <div className={styles.DetailWrapper}>
            <div className={styles.DetailContainer}>
              <p className={styles.DetailTitle}>Timeline</p>
              <p className={styles.Detail}>{details.timeline}</p>
            </div>
            <div className={styles.DetailContainer}>
              <p className={styles.DetailTitle}>Role</p>
              <p className={styles.Detail}>{details.role}</p>
            </div>
            <div className={styles.DetailContainer}>
              <p className={styles.DetailTitle}>Tech</p>
              <p className={styles.Detail}>{details.tech}</p>
            </div>
          </div>
        </div>
        <CtaButton 
          text="View Project" 
          href={details.link}
        />
      </div>
    </div>
  )
}
