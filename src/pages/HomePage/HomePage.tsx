import { getProjectsData } from "../../utils/getProjectsData"
import { Project } from "../../types/models/Project"
// assets
import logo from '../../assets/images/jennykim-type.svg'
import graphic from '../../assets/images/global/vinyl-test.jpg'
// components
import H3Heading from "../../components/atoms/H3Heading"
import StickyLayout from '../../layouts/StickyLayout'
import HomeScrollContent from './HomeScrollContent'
import HomeStickyContent from './HomeStickyContent'
// styles
import styles from './HomePage.module.scss'

export default function HomePage() {

  const allProjects = getProjectsData().projects
  const firstProject = allProjects.find((project) => project.overview.link === "/work/sadie-lee-cms-service")
  const secondProject = allProjects.find((project) => project.overview.link === "/work/phonebox-partner-portal-app")
  const thirdProject = allProjects.find((project) => project.overview.link === "/work/work-5")
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
            <p>Hey there! I'm <span className={styles.Text_Highlight}>Jenny &#8212;</span> <br/> a passinate  who loves to craft a digital experience based on the solid knowledges of coding. I can help to design and develop the website that bring people together. </p>
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
      <H3Heading text="Featured Work" />
      <StickyLayout 
        stickyContent={<HomeStickyContent allProjects={featuredWork} />}
        stickyContentSpacing={false}
        scrollContent={<HomeScrollContent allProjects={featuredWork} />}
        scrollContentSpacing={true}
      />
    </>
  )
}
