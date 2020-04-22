import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import PostList from '../components/PostList'
import Pagination from '../components/pagination'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <PostList posts={posts} pageContext={pageContext} />
        <Pagination pageContext={pageContext} pathPrefix="/" />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          author {
            name
            slug
            avatar_urls {
              wordpress_48
            }
          }
          title
          excerpt
          slug
          date(formatString: "MMM DD, YYYY")
          categories {
            slug
            path
          }
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
      }
    }
  }
`
