import { useGetProjectsDataContext } from "../../hooks/useGetProjectsDataContext"
// components
import Filter from "../../components/organisms/Filter"
import Card from "../../components/organisms/Card"
// styles
import styles from './ProjectsPage.module.scss'

export default function WorkPage() {

  const { isData } = useGetProjectsDataContext()

  return (
    <div>
      <section className={styles.Filter_Cont}>
        <Filter />
      </section>
      <section className={`Section ${styles.Cards_Cont}`}>
        {isData && isData.map((project, index) => (
          <div
            key={index}
            className={styles.Card_Cont}
          >
            <Card details={project.overview} />
          </div>
        ))}
      </section>
    </div>
  )
}
