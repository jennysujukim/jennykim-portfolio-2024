import { Link } from 'react-router-dom'
import { DisciplineType } from '../../../types/enums/DisciplineType';
import { useSidebarContext } from '../../../hooks/useSidebarContext'
import { useGetProjectsDataContext } from '../../../hooks/useGetProjectsDataContext'
// styles

type SidebarNavLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
  childLinks?: {
    text: string;
    href: string;
    discipline: DisciplineType;
  }[];
  // handleChildLinkClick: (discipline: DisciplineType) => void;
}

export default function SidebarNavLink({
  href,
  text,
  isExternal,
  childLinks }: SidebarNavLinkProps) {

  const { setIsOpen } = useSidebarContext()
  const { handleClickToSetData } = useGetProjectsDataContext()

  const handleExternalLinkClick = () => {
    setIsOpen(false)
  }

  const handleChildLinkClick = (discipline: DisciplineType) => {
    setIsOpen(false)
    handleClickToSetData(discipline)
  }

  return (
    <li>
      {isExternal ? (
        <a 
          href={href} 
          onClick={handleExternalLinkClick} 
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <Link 
          to={href}
          onClick={text === 'Projects' ? () => handleChildLinkClick(DisciplineType.All) : () => handleChildLinkClick(DisciplineType.None)}
        >
          {text}
        </Link>
      )}
      {childLinks && (
        <ul>
          {childLinks.map((childLink, index) => (
            <li key={index}>
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
