import { ViewByContextProvider } from "../../contexts/ViewByContext"
// components
import Filter from "../../components/organisms/Filter"
import ViewBy from "../../components/organisms/ViewBy"
import ProjectsContent from "./ProjectsContent"
// styles
import styles from './ProjectsPage.module.scss'

export default function WorkPage() {

  return (
    <ViewByContextProvider>
      <section className={styles.Filter_Cont}>
        <Filter />
        <ViewBy />
      </section>
      <section className={`Section ${styles.Cards_Cont}`}>
        <ProjectsContent />
      </section>
    </ViewByContextProvider>
  )
}
