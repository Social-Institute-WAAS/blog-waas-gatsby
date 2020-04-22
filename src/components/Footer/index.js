import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import logo from '../../images/logo-mono.svg'



const Footer = () => {
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

  const menuFooter = data.allWordpressMenusMenusItems.edges.find(item => item.node.slug === 'footer-menu');
  const menuSocial = data.allWordpressMenusMenusItems.edges.find(item => item.node.slug === 'social-menu');
  console.log(menuFooter);

  return (
    <section className="footer l-footer mt-4">
      <div className="container">
        <div className="row text-center my-4 l-footer__wrapper">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 l-footer__block text-center">
            <Link to="/" title="logo WAAS" >
              <img width="200px" style={{opacity: .5}} src={logo} alt="Logo WAAS" />
            </Link>
            <div className="l-footer__badges d-flex justify-content-center">
              <a
                className="btn btn--ods"
                href="https://nacoesunidas.org/pos2015/agenda2030/"
                ttarget="_blank" rel="noopener norefferer"
                title="Objetivos de Desenvolvimento Sustentável"
              >
                <span className="icon-ods-pt-mono icon--lg"></span>
                <span className="sr-only">
                  Objetivos de Desenvolvimento Sustentável
                </span>
              </a>
              <a
                className="btn btn--ods-4"
                href="https://nacoesunidas.org/pos2015/ods4/"
                target="_blank" rel="noopener norefferer"
                title="Ods 4 - Educação de Qualidade"
              >
                <span className="icon-ods-4 icon--lg"></span>
                <span className="sr-only">Ods 4 - Educação de Qualidade</span>
              </a>
              <a
                className="btn btn--ods-8"
                href="https://nacoesunidas.org/pos2015/ods8/"
                target="_blank" rel="noopener norefferer"
                title="Ods 8 - Trabalho Descente e Crescimento Econômico"
              >
                <span className="icon-ods-8 icon--lg"></span>
                <span className="sr-only">
                  Ods 8 - Trabalho Descente e Crescimento Econômico
                </span>
              </a>
            </div>
            <div className="l-footer__badges d-flex justify-content-center">
              <a
                className="btn"
                href="https://jupter.co/"
                target="_blank" rel="noopener norefferer"
                title="Na orbita de Jupter"
              >
                <span className="icon-vulcan-salute"></span>
                <span className="sr-only">Na orbita de Jupter</span>
              </a>
              <a
                className="btn"
                href="http://peacelabs.co/p/waas"
                target="_blank" rel="noopener norefferer"
                title="Monitorado através do Peace Labs"
              >
                <span className="icon-peace"></span>
                <span className="sr-only">Monitorado através do Peace Labs</span>
              </a>
              <a
                className="btn"
                href="https://institutolegado.org/"
                target="_blank" rel="noopener norefferer"
                title="Mentoria do Instituto Legado"
              >
                <span className="icon-legado-simbolo"></span>
                <span className="sr-only">Mentoria do Instituto Legado</span>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 pt-4 l-footer__block">
            <h5 className="l-footer__title">
              <span className="icon-map-o"></span>
              <span className="pl-2">Encontre a gente</span>
            </h5>
            <address className="d-flex flex-column">
              <ul className="list-unstyled quick-links">
                <li>
    
                  <a
                    className="btn d-flex align-items-center"
                    href="https://goo.gl/maps/yfBG2ZnLvA7ekKu69"
                    target="_blank" rel="noopener norefferer"
                  >
                    <span className="icon-maps-and-flags"></span>
                    <span className="pl-2 d-flex text-left">
                      Rua Engenheiro Rebouças, 1255 - Curitiba
                    </span>
                  </a>
                </li>
                <li>
    
                  <a
                    className="btn d-flex align-items-center"
                    href="tel:+5541988774004"
                    ttarget="_blank" rel="noopener norefferer"
                  >
      
                    <span className="icon-phone"></span>
                    <span className="pl-2">(41) 98877-4004</span>
                  </a>
                </li>
                <li>
                  <a
                    className="btn d-flex align-items-center"
                    href="https://wa.me/5541988774004?text=Oi%20gente%20%20me%20conta%20mais%20sobre%20o%20WAAS"
                    ttarget="_blank" rel="noopener norefferer"
                  >
                    <span className="icon-whatsapp"></span>
                    <span className="pl-2">Whatsapp</span>
                  </a>
                </li>
                <li>
                  <a
                    className="btn d-flex align-items-center"
                    href="https://m.me/waas.ninja"
                    target="_blank" rel="noopener norefferer"
                  >
                    <span className="icon-messenger"></span>
                    <span className="pl-2">Messenger</span>
                  </a>
                </li>
                <li>
                  <a
                    className="btn d-flex align-items-center"
                    href="mailto:hello@waas.ninja"
                    target="_blank" rel="noopener norefferer"
                  >
                    <span className="icon-envelope"></span>
                    <span className="pl-2">hello@waas.ninja</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 pt-4 l-footer__block">
            <h5 className="l-footer__title">

              <span className="icon-star"></span>
              <span className="pl-2">Menu</span>
            </h5>
            <ul className="list-unstyled quick-links">
              {menuFooter.node.items.map((menuItem => (
                <li key={menuItem.url}>
                <Link className="btn" to={menuItem.url}>
                  {menuItem.title}
                </Link>
              </li>
              )))}
             
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 pt-4 l-footer__block">
            <h5 className="l-footer__title p-2">

              <span className="icon-broadcast"></span>
              <span> Social</span>
            </h5>
            <ul className="list-unstyled quick-links">
            {menuSocial.node.items.map((menuItem => (
                <li key={menuItem.title}>
                <a className="btn d-flex align-items-center" target="_blank" rel="noopener norefferer" href={menuItem.url}>
                  <span className={`icon-${(menuItem.title).toLowerCase()}`}></span>
                  <span className="pl-2">{menuItem.title}</span>
                </a>
              </li>
              )))}
            </ul>
          </div>
        </div>
        <div className="row text-center">
          <p className="w-100 col-12 text-center">
            Copyright 2019 Instituto Social WAAS
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
