import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// import { Container } from './styles';

const CardPostHero = ({ post }) => {
  let imageBg = ''
  if (post.featured_media !== null) {
    imageBg = post.featured_media.localFile.childImageSharp.fluid.src
  }
  return (
    <div
      className="c-vitrine__content"
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <Link className="c-vitrine__link" to={post.slug}>
        <div className="c-content">
          {post.categories && post.categories.length ? (
            <div className="c-content__tags">
              {post.categories.map(category => (
                <span
                  key={`${category.slug}category`}
                  className="c-badge"
                  // to={category.path}
                >
                  {category.slug}
                </span>
              ))}
            </div>
          ) : null}

          <div className="c-content__space"></div>
          <div className="c-content__heading">
            <h3 className="c-content__title">{post.title}</h3>
            <span className="c-content__author">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

CardPostHero.propTypes = {
  post: PropTypes.object,
}

export default CardPostHero
