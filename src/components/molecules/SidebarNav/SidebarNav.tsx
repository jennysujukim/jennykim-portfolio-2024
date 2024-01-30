import { DisciplineType } from '../../../types/enums/DisciplineType'
// components
import SidebarNavLink from '../../atoms/SidebarNavLink'
// styles
import styles from './SidebarNav.module.scss'

export default function SidebarNav() {

  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/work", text: "Work", childLinks: [
      { text: DisciplineType.All, href: "/work", discipline: DisciplineType.All },
      { text: DisciplineType.Frontend, href: "/work", discipline: DisciplineType.Frontend },
      { text: DisciplineType.UIUX, href: "/work", discipline: DisciplineType.UIUX },
      { text: DisciplineType.Graphic, href: "/work", discipline: DisciplineType.Graphic },
    ]},
    { href: "https://www.google.com/", text: "Resume", isExternal: true }
  ]

  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Nav_Cont}>
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
      <div className={styles.Contact_Cont}>
        <p className="H3_Style">Find me on</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jenny-seojeong-kim/" target="_blank">LinkedIn</a>
            <a href="https://github.com/jennysujukim" target="_blank">Github</a>
            <a href="https://www.instagram.com/jklemonjuice/" target="_blank">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
