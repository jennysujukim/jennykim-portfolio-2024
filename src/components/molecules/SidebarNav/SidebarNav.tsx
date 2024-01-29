import { DisciplineType } from '../../../types/enums/DisciplineType'
// components
import SidebarNavLink from '../../atoms/SidebarNavLink'
// styles
import styles from './SidebarNav.module.scss'

export default function SidebarNav() {

  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/work", text: "Projects", childLinks: [
      { text: DisciplineType.All, href: "/work", discipline: DisciplineType.All },
      { text: DisciplineType.Frontend, href: "/work", discipline: DisciplineType.Frontend },
      { text: DisciplineType.UIUX, href: "/work", discipline: DisciplineType.UIUX },
      { text: DisciplineType.Graphic, href: "/work", discipline: DisciplineType.Graphic },
    ]},
    { href: "https://www.google.com/", text: "Resume", isExternal: true }
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
