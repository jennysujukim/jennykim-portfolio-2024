import { Outlet } from "react-router-dom"
import { useSidebarContext } from "../../hooks/useSidebarContext"
// components
import Sidebar from "../../components/organisms/Sidebar"
import Footer from "../../components/organisms/Footer"
// styles
import styles from './GlobalLayout.module.scss'

export default function GlobalLayout() {

  const { handleClose } = useSidebarContext()

  return (
    <div className={styles.Wrapper}>
      <header className={styles.Header_Cont}>
        <Sidebar />
      </header>
      <main
        className={`Container_X ${styles.Main_Cont}`}
        onClick={handleClose}
      >
        <div className={styles.Width_Cont}>
          <Outlet />
          <footer className={styles.Footer_Cont}>
            <Footer />
          </footer>
        </div>
      </main>
    </div>
  )
}
