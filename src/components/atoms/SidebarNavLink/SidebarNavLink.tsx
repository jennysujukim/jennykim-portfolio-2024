import { Link } from 'react-router-dom'
import { DisciplineType } from '../../../types/enums/DisciplineType';
import { useSidebarContext } from '../../../hooks/useSidebarContext'
import { useGetProjectsDataContext } from '../../../hooks/useGetProjectsDataContext'
// styles
import styles from './SidebarNavLink.module.scss'

type SidebarNavLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
  childLinks?: {
    text: string;
    href: string;
    discipline: DisciplineType;
  }[];
}

export default function SidebarNavLink({
  href,
  text,
  isExternal,
  childLinks }: SidebarNavLinkProps) {

  const { handleClose } = useSidebarContext()
  const { handleSetDiscipline } = useGetProjectsDataContext()

  const handleChildLinkClick = (discipline: DisciplineType) => {
    handleClose()
    handleSetDiscipline(discipline)
  }

  return (
    <li className={styles.Wrapper}>
      {isExternal ? (
        <a 
          className="H3_Style"
          href={href} 
          onClick={handleClose} 
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <Link 
          className="H3_Style"
          to={href}
          onClick={text === 'Work' ? () => handleChildLinkClick(DisciplineType.All) : () => handleChildLinkClick(DisciplineType.None)}
        >
          {text}
        </Link>
      )}
      {childLinks && (
        <ul className={styles.ChildLinks_Cont}>
          {childLinks.map((childLink, index) => (
            <li 
              key={index}
              className={`H5_Style ${styles.ChildLink_Cont}`}
            >
              <Link
                to={childLink.href}
                onClick={() => handleChildLinkClick(childLink.discipline)}
              >
                {childLink.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
