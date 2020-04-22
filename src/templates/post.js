import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts'
import parse from 'html-react-parser'

import Article from './article';

// export const BlogPostTemplate = ({
//   medias,
//   content,
//   categories,
//   tags,
//   title,
//   date,
//   author,
// }) => {
//   return (
//     <section className="section">
//       <div className="container content">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
//               {title}
//             </h1>
//             {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
//             <div>
//               {parse(content, {
//                 replace: function(domNode) {
//                   let indexKeyImg = 0
//                   if (domNode.name == 'img') {
//                     const fluidImg = medias.edges.filter(media => {
//                       console.log(domNode.attribs.srcset !== undefined)
//                       if (domNode.attribs.srcset !== undefined) {
//                         // console.log('allMedias', media.node.source_url)
//                         const ArrayImagesFromSrcSet = domNode.attribs.srcset.split(
//                           ', '
//                         )
//                         const ImageOriginal = ArrayImagesFromSrcSet[
//                           ArrayImagesFromSrcSet.length - 1
//                         ].split(' ')
//                         //console.log('domMedias', ImageOriginal[0])
//                         return media.node.source_url === ImageOriginal[0]
//                       } else {
//                         return media.node.source_url === domNode.attribs.src
//                       }
//                     })
//                     console.log(fluidImg.length > 0)

//                     if (fluidImg.length > 0) {
//                       let srcMedia = fluidImg[0].node.localFile.childImageSharp
//                         ? fluidImg[0].node.localFile.childImageSharp.fluid
//                         : fluidImg[0].node.localFile.publicURL

//                       indexKeyImg++
//                       if (fluidImg[0].node.localFile.childImageSharp) {
//                         let file =
//                           fluidImg[0].node.localFile.childImageSharp.fluid
//                         return (
//                           // <Img
//                           //     key={indexKeyImg}
//                           //     fluid={srcMedia}
//                           //     className={`${domNode.attribs.class} gatsby-rendered-img`}
//                           //     alt={fluidImg[0].node.alt_text}
//                           // />
//                           <img
//                             sizes={file.sizes}
//                             src={file.base64}
//                             srcSet={file.srcSet}
//                             alt={fluidImg[0].node.alt_text}
//                           />
//                         )
//                       } else {
//                         return (
//                           <img
//                             key={indexKeyImg}
//                             src={srcMedia}
//                             className={`${domNode.attribs.class} gatsby-rendered-img`}
//                             alt={fluidImg[0].node.alt_text}
//                           />
//                         )
//                       }
//                     } //if
//                   }
//                 },
//               })}
//             </div>
//             <div style={{ marginTop: `4rem` }}>
//               <p>
//                 {date} - posted by{' '}
//                 <Link to={`/author/${author.slug}`}>{author.name}</Link>
//               </p>
//               {categories && categories.length ? (
//                 <div>
//                   <h4>Categories</h4>
//                   <ul className="taglist">
//                     {categories.map(category => (
//                       <li key={`${category.slug}cat`}>
//                         <Link to={`/categories/${category.slug}/`}>
//                           {category.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : null}
//               {tags && tags.length ? (
//                 <div>
//                   <h4>Tags</h4>
//                   <ul className="taglist">
//                     {tags.map(tag => (
//                       <li key={`${tag.slug}tag`}>
//                         <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// BlogPostTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   title: PropTypes.string,
// }

const BlogPost = ({ data }) => {
  const { wordpressPost: post, allWordpressWpMedia: medias } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      {/* <BlogPostTemplate
        medias={medias}
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      /> */}
      <Article 
        featuredMedia={post.featured_media}
        medias={medias}
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const postQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
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

    allWordpressWpMedia {
      edges {
        node {
          alt_text
          localFile {
            publicURL
            childImageSharp {
              fluid {
                base64
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          source_url
        }
      }
    }
  }
`
