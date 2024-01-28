import { Outlet } from "react-router-dom"
import { useSidebarContext } from "../../hooks/useSidebarContext"
// components
import Sidebar from "../../components/organisms/Sidebar"
import Footer from "../../components/organisms/Footer"
// styles
import styles from './GlobalLayout.module.scss'

export default function GlobalLayout() {

  const { setIsOpen } = useSidebarContext()
  const handleCloseSidebar = () => setIsOpen(false)

  return (
    <div className={styles.Wrapper}>
      <header className={styles.Header_Cont}>
        <Sidebar />
      </header>
      <main
        className={`Container_X ${styles.Main_Cont}`}
        onClick={handleCloseSidebar}
      >
        <Outlet />
        <footer className={styles.Footer_Cont}>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
