import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    humanPageNumber,
  } = pageContext

  const items = []
  for (let i = 0; i < numberOfPages; i++) {
    items.push(i + 1)
  }

  return (
    <nav className="container d-flex" role="navigation">
      <ul className="pagination pagination-lg mx-auto">
        {previousPagePath && (
          <li className="page-item">
            <Link
              to={previousPagePath}
              rel="prev"
              className="page-link"
              ariaLabel="Anterior"
            >
              <span ariaHidden="true">&laquo;</span>
              <span className="sr-only">Anterior</span>
            </Link>
          </li>
        )}
        {items.map((val, index) => (
          <li
            key={index}
            className={`page-item ${val == humanPageNumber ? `active` : ``}`}
          >
            <Link
              to={val == 1 ? `/` : `/page/${val}`}
              className="page-link"
              activeClassName="active"
            >
              {val}
            </Link>
          </li>
        ))}
        {nextPagePath && (
          <li className="page-item">
            <Link
              to={nextPagePath}
              rel="next"
              className="page-link"
              ariaLabel="Próximo"
            >
              <span ariaHidden="true">&raquo;</span>
              <span className="sr-only">Próximo</span>
            </Link>
          </li>
        )}
      </ul>
      {/* {humanPageNumber} */}
    </nav>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
