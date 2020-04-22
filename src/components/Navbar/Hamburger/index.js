import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ handleOverlayMenu }) => (
  <button
    onClick={handleOverlayMenu}
    tabIndex="0"
    className="navbar-toggler c-nav__btn-toggle"
    id="js-btn-toggle"
    type="button"
    aria-controls="navbarCollapse"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="icon icon-bars" role="icon"></span>
  </button>
)

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
}

export default Hamburger
