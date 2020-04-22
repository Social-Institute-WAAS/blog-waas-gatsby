import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostsHero from '../PostsHero'
import PostListItem from '../PostListItem'

export default class IndexPage extends React.Component {
  render() {
    const { posts, pageContext } = this.props

    return (
      <>
        {/* {JSON.stringify(pageContext)} */}
        {pageContext?.pageNumber == 0 ? <PostsHero posts={posts} /> : null}

        <section className="l-section c-feed">
          <div className="container">
            {posts.map(({ node: post }, index) => (
              <>
                {index > 3 && pageContext?.pageNumber === 0 ? (
                  <PostListItem post={post} />
                ) : null}
                {pageContext?.pageNumber !== 0 ? (
                  <PostListItem post={post} />
                ) : null}
              </>
            ))}
          </div>
        </section>
      </>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMM DD, YYYY")
    categories {
      slug
      path
    }
    slug
    acf {
      color_card
    }
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
