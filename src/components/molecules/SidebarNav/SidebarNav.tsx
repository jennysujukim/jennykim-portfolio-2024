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
      { text: DisciplineType.All, href: "/projects", discipline: "all" },
      { text: DisciplineType.Frontend, href: "/projects", discipline: "frontend-development" },
      { text: DisciplineType.UIUX, href: "/projects", discipline: "uiux-design" },
      { text: DisciplineType.Graphic, href: "/projects", discipline: "graphic-design" },
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
