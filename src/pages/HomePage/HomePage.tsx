import { getProjectsData } from "../../utils/getProjectsData"
import useResponsive from "../../hooks/useResponsive"
import { BreakpointType } from "../../types/enums/BreakpointType"
import { Project } from "../../types/models/Project"
// assets
import logo from '../../assets/images/jennykim-type.svg'
import graphic from '../../assets/images/global/graphic-test.jpg'
// components
import StickyLayout from '../../layouts/StickyLayout'
import ScrollContent from './ScrollContent'
import StickyContent from './Stickycontent'
// styles
import styles from './HomePage.module.scss'

export default function HomePage() {

  const isResponsive = useResponsive()

  const allProjects = getProjectsData().projects
  const firstProject = allProjects.find((project) => project.overview.link === "/work/sadie-lee-cms-service")
  const secondProject = allProjects.find((project) => project.overview.link === "/work/phonebox-partner-portal-app")
  const thirdProject = allProjects.find((project) => project.overview.link === "/work/daily-protein")
  const fourthProject = allProjects.find((project) => project.overview.link === "/work/x-nihilo")

  const featuredWork = [ firstProject, secondProject, thirdProject, fourthProject ] as Project[]

  return (
    <>
      <section className={`Section ${styles.Wrapper}`}>
        <div className={styles.Text_Cont}>
          <img 
            src={logo} 
            alt="Jenny Kim Logo" 
          />
          <div className={styles.Text}>
            <h2>Frontend Developer & UI Designer</h2>
            <p>Hi, I'm Jenny Kim. I'm a frontend developer and UI designer based in the Greater New York City Area. I design and develop user-centric products to bring people together.</p>
          </div>
        </div>
        <div className={styles.Graphic_Cont}>
          <img 
            className={styles.Graphic} 
            src={graphic}
            alt="Test Graphic"
          />
        </div>
      </section>
      <div className={styles.Divider_Cont}>
        { isResponsive === BreakpointType.Mobile && <hr className="Line"></hr> }
        <h3>Featured Work</h3>
        { isResponsive !== BreakpointType.Mobile && <hr className="Line_Spacing"></hr> }
      </div>
      <StickyLayout 
        stickyContent={<StickyContent allProjects={featuredWork} />}
        scrollContent={<ScrollContent allProjects={featuredWork}/>}
      />
      <div className={styles.Divider_Cont}>
        { isResponsive === BreakpointType.Mobile && <hr className="Line"></hr> }
        <h3>Let's Connect</h3>
        { isResponsive !== BreakpointType.Mobile && <hr className="Line_Spacing"></hr> }
      </div>
    </>
  )
}
