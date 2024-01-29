import Dimensions from '../../types/constants/Dimensions'
import { getProjectsData } from "../../utils/getProjectsData"
import { DisciplineType } from "../../types/enums/DisciplineType"
// assets
import logo from '../../assets/images/jennykim-type.svg'
// components
import Image from '../../components/atoms/Image'
import StickyLayout from '../../layouts/StickyLayout'
import ScrollContent from './ScrollContent'
import StickyContent from './Stickycontent'
// styles
import styles from './HomePage.module.scss'

export default function HomePage() {

  const frontendProjects = getProjectsData(DisciplineType.Frontend).projects.slice(0, 2)
  const uiuxProjects = getProjectsData(DisciplineType.UIUX).projects.slice(0, 1)
  const graphicProjects = getProjectsData(DisciplineType.Graphic).projects.slice(0, 1)

  const allProjects = [ ...frontendProjects, ...uiuxProjects, ...graphicProjects ]

  return (
    <div>
      <section className={`Section ${styles.Wrapper}`}>
        <div className={styles.Text_Cont}>
          <Image 
            src={logo}
            alt="Jenny Kim Logo"
            height={Dimensions.logoHeight_lap}
            removeFlex
          />
          <div>
            <h2>Frontend Developer & UI Designer</h2>
            <p>Hi, I'm Jenny Kim. I'm a frontend developer and UI designer based in the Greater New York City Area. I design and develop user-centric products to bring people together.</p>
          </div>
        </div>
        <div className={styles.Graphic_Cont}>

        </div>
      </section>
      <div className={styles.Divider_Cont}>
        <h3>Featured Work</h3>
        <hr className="Line_Spacing"></hr>
      </div>
      <StickyLayout 
        stickyContent={<StickyContent allProjects={allProjects} />}
        scrollContent={<ScrollContent allProjects={allProjects}/>}
      />
    </div>
  )
}
