import { Link } from 'react-router-dom'
import { useSidebarContext } from '../../../hooks/useSidebarContext'
// styles

type SidebarNavLinkProps = {
  href: string;
  text: string;
  isExternal: boolean;
  childLinks?: {
    text: string;
    href: string;
    discipline?: string;
  }[];
}

export default function SidebarNavLink({
  href,
  text,
  isExternal,
  childLinks }: SidebarNavLinkProps) {

  const { setIsOpen } = useSidebarContext()

  const handleClick = () => setIsOpen(false)

  return (
    <li>
      {isExternal ? (
        <a 
          href={href} 
          onClick={handleClick} 
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <Link 
          to={href}
          onClick={handleClick}
        >
          {text}
        </Link>
      )}
      {childLinks && (
        <ul>
          {childLinks.map((childLink, index) => (
            <li key={index}>
              {isExternal ? (
                <a 
                  href={childLink.href}
                  onClick={handleClick}
                  target='_blank'
                >
                  {childLink.text}
                </a>
              ) : (
                <Link
                  to={{
                    pathname: childLink.href,
                    search: `discipline=${childLink.discipline}`,
                  }}
                  onClick={handleClick}
                >
                  {childLink.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
