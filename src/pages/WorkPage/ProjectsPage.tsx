import { useGetProjectsDataContext } from "../../hooks/useGetProjectsDataContext"
import { ViewByContextProvider } from "../../contexts/ViewByContext"
// components
import Filter from "../../components/organisms/Filter"
import Card from "../../components/organisms/Card"
import ViewBy from "../../components/organisms/ViewBy"
// styles
import styles from './ProjectsPage.module.scss'

export default function WorkPage() {

  const { isData } = useGetProjectsDataContext()

  return (
    <ViewByContextProvider>
      <section className={styles.Filter_Cont}>
        <Filter />
        <ViewBy />
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
    </ViewByContextProvider>
  )
}
