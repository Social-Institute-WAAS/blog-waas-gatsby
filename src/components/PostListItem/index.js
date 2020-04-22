import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

const PostListItem = ({ post }) => {
  let imagePost = ''
  if (post.featured_media !== null) {
    imagePost = post.featured_media.localFile.childImageSharp.fluid
  }
  return (
    <>
      <div
        className={`c-card c-card--section bullets bullets--right bullets--${post.acf.color_card}`}
        key={post.id}
      >
        <div className="row">
          {imagePost !== '' ? (
            <div className="col-lg-4 col-sm-12">
              <figure className="l-section__img c-card__img">
                <Img
                  fluid={imagePost}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="Alt image"
                />
              </figure>
            </div>
          ) : (
            ''
          )}
          <div
            className={imagePost !== '' ? `col-lg-8 col-sm-12` : `col-lg-12`}
          >
            <div className="c-card__heading mb-4">
              {post.categories ? (
                <div className="c-card__tags">
                  {post.categories.map(tag => (
                    <Link to={tag.path} className="c-badge">
                      {tag.slug}
                    </Link>
                  ))}
                </div>
              ) : (
                ''
              )}
              <Link
                to={post.slug}
                className="p-0 l-section__title c-card__title"
              >
                <h3 className="l-section__title c-card__title text-left py-0 mt-2">
                  {post.title}
                </h3>
              </Link>

              <span>
                <Link to={`/author/${post.author.slug}`} className="text-muted">
                  {post.author.name}
                </Link>
              </span>
              <span className="text-muted d-flex"> {post.date} </span>
            </div>{' '}
            <div
              className="c-card__body"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.replace(/<p class="link-more.*/, ''),
              }}
            />
            <div className="c-card__link">
              <Link
                className="c-btn c-btn--df c-btn--blue c-btn--raio d-flex"
                to={post.slug}
              >
                Leia mais
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default PostListItem
