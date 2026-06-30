import { NavLink, useLocation } from 'react-router-dom'
import './Nav.scss'

const links = [
  { to: '/about',      label: 'About' },
  { to: '/works',      label: 'Works' },
  { to: '/exhibition', label: 'Exhibition' },
  { to: '/cv',         label: 'CV' },
  { to: '/contact',    label: 'Contact' },
]

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={`nav${isHome ? ' nav--home' : ''}`}>
      <NavLink to="/" className="nav__logo">
        JL
      </NavLink>
      <ul className="nav__links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
