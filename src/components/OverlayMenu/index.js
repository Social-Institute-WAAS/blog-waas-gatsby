import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FaTimes } from 'react-icons/fa'


const OverlayMenu = ({ menuOpen, callback }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(
    graphql`
      query OverlayMenu {
        menu: allWordpressMenusMenusItems(
          filter: { wordpress_id: { eq: 5 } }
        ) {
          totalCount
          edges {
            node {
              items {
                title
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        {/* <img className="whiteLogo" src={WhiteLogo} alt="tango-white-logo" /> */}
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={item.url} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <FaTimes />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
