import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Logo from './Logo'
import HamburgerMenu from './Hamburger'

const Navbar = ({ haveBg }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const data = useStaticQuery(graphql`
    query {
      allWordpressMenusMenusItems {
        edges {
          node {
            slug
            name
            items {
              title
              url
            }
          }
        }
      }
    }
  `)

  const menu = data.allWordpressMenusMenusItems.edges.find(item => item.node.slug === 'menu-principal');
  console.log(menu);

  return (
    <nav
      className={`c-nav navbar navbar-expand-lg fixed-top mb-4 ${haveBg}`}
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand c-nav__brand" to="/">
          <Logo />
        </Link>
        <HamburgerMenu handleOverlayMenu={handleOverlayMenu} />
        <div className="navbar-collapse c-nav__menu c-menu" id="navbarCollapse">
          <div className="c-menu__header">
            <Link className="navbar-brand c-nav__brand" to="/">
              <Logo />
            </Link>

            {/* <button className="c-menu__close">
                  <span className="icon icon-close" role="icon"></span>
                </button> */}
          </div>
          <ul className="navbar-nav mr-auto c-nav__list">
            {menu.node.items.map(menuItem => (
              <li className="nav-item c-nav__item">
                <Link
                  className="nav-link c-nav__item-link"
                  to={menuItem.url}
                  key={menuItem.url}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
