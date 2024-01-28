import { DisciplineType } from '../../../types/enums/DisciplineType'
// components
import SidebarNavLink from '../../atoms/SidebarNavLink'
// styles
import styles from './SidebarNav.module.scss'

export default function SidebarNav() {

  const links = [
    { href: "/", text: "Home", isExternal: false },
    { href: "/about", text: "About", isExternal: false },
    { href: "/projects", text: "Projects", isExternal: false, childLinks: [
      { text: DisciplineType.Frontend, href: "/projects", discipline: DisciplineType.Frontend },
      { text: DisciplineType.UIUX, href: "/projects", discipline: DisciplineType.UIUX },
      { text: DisciplineType.Graphic, href: "/projects", discipline: DisciplineType.Graphic },
    ] },
  ]

  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Container}>
        <ul>
          {links.map((link, index) => (
            <SidebarNavLink
              key={index}
              href={link.href}
              text={link.text}
              childLinks={link.childLinks}
              isExternal={link.isExternal}
            />
          )
          )}
        </ul>
      </nav>
      <div>
        <p>© 2021</p>
      </div>
    </div>
  )
}
