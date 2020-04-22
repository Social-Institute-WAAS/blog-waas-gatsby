import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import parse, { domToReact } from 'html-react-parser';

const ArticleTemplate = ({
  featuredMedia,
  medias,
  content,
  categories,
  tags,
  title,
  date,
  author,
}) => {
  return (
    <>
    
      <section className="cover l-pages">
        <div style={{minHeight: '60vh', height: '100%'}}>
          <BackgroundImage
              Tag="div"
              className="l-pages__cover c-card--cover"
              fluid={featuredMedia?.localFile.childImageSharp?.fluid}
              backgroundColor={`#040e18`}
              style={{backgroundPosition: '70% center'}}
            />
          </div>
        {/* <div className="l-pages__cover c-card--cover" style={{backgroundImage: `url(${featured_media})`, backgroundPosition: '70% center'}}></div> */}
        <div className="container l-pages__content" style={{ marginTop:'-30vh', backgroundColor: '#fff'}}>
          <div className="c-card card c-card--section bullets bullets--bottom-center">
            <h1 className="l-section__title c-card__title text-center" itemprop="name">
              <span>{title}</span>
            </h1>
            <div className="c-card__body row" style={{minHeight: 'auto'}}>
              {/* <p className="h3 col-lg-8 col-sm-12 mx-auto text-center">Breve descrição sobre o conteúdo que será abordado.</p> */}
              <p className="col-12 text-center">
                {date} - Por {' '}
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 py-4 mx-auto">
              {parse(content, {
                replace: function(domNode) {
                  let indexKeyImg = 0
                  if (domNode.name == 'img') {
                    const fluidImg = medias.edges.filter(media => {
                      console.log(domNode.attribs.srcset !== undefined)
                      if (domNode.attribs.srcset !== undefined) {
                        // console.log('allMedias', media.node.source_url)
                        const ArrayImagesFromSrcSet = domNode.attribs.srcset.split(
                          ', '
                        )
                        const ImageOriginal = ArrayImagesFromSrcSet[
                          ArrayImagesFromSrcSet.length - 1
                        ].split(' ')
                        //console.log('domMedias', ImageOriginal[0])
                        return media.node.source_url === ImageOriginal[0]
                      } else {
                        return media.node.source_url === domNode.attribs.src
                      }
                    })
                    console.log(fluidImg.length > 0)

                    if (fluidImg.length > 0) {
                      let srcMedia = fluidImg[0].node.localFile.childImageSharp
                        ? fluidImg[0].node.localFile.childImageSharp.fluid
                        : fluidImg[0].node.localFile.publicURL

                      indexKeyImg++
                      if (fluidImg[0].node.localFile.childImageSharp) {
                        let file =
                          fluidImg[0].node.localFile.childImageSharp.fluid
                        return (
                          // <Img
                          //     key={indexKeyImg}
                          //     fluid={srcMedia}
                          //     className={`${domNode.attribs.class} gatsby-rendered-img`}
                          //     alt={fluidImg[0].node.alt_text}
                          // />
                          <img
                            sizes={file.sizes}
                            src={file.base64}
                            srcSet={file.srcSet}
                            alt={fluidImg[0].node.alt_text}
                          />
                        )
                      } else {
                        return (
                          <img
                            key={indexKeyImg}
                            src={srcMedia}
                            className={`${domNode.attribs.class} gatsby-rendered-img`}
                            alt={fluidImg[0].node.alt_text}
                          />
                        )
                      }
                    } //if
                  }

                  if(['h1','h2','h3','h4','h5','h6'].includes(domNode.name)) {
                  return React.createElement(domNode.name, {className: "c-card__title text-center pb-4"}, domToReact(domNode.children,domNode.options));
                  }
                  if(domNode.name == 'p') {
                    return <p className="mb-4">{domToReact(domNode.children,domNode.options)}</p>
                  }
                },
              })}
            </div>
          </div>
      </section>
    </>
  )
};

ArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default ArticleTemplate;