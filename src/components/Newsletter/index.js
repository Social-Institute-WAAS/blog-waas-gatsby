import React from 'react';

// import { Container } from './styles';

export default function Newsletter() {
  return (
    <section className="l-section mb-4" id="newsletter">
        <div className="container">
          <div className="c-card c-card--section c-card-newsletter mx-auto bullets bullets--orange">
            <h2 className="l-section__title c-card__title mb-4 text-center">
              <span className="icon-broadcast"></span>
              <span>Fique ligado na gente </span>
            </h2>

            <div className="col-lg-10 col-sm-12 mx-auto mb-4 pb-4">
              <h3 className="py-2 text-primary">
                <span className="icon-world-wide-web"></span>
                <span> Redes Sociais  </span>
              </h3>
              <ul className="c-social-buttons list-unstyled justify-content-center">
                <li><a className="c-btn c-btn--df c-btn--instagram mx-1 d-flex align-items-center" href="https://www.instagram.com/waas.ninja/" target="_blank"> <span className="icon-instagram"></span><span className="pl-2"> @waas.ninja</span></a></li>
                <li><a className="c-btn c-btn--df c-btn--facebook mx-1 d-flex align-items-center" href="https://www.facebook.com/waas.ninja" target="_blank"> <span className="icon-facebook"></span><span className="pl-2">@waas.ninja</span></a></li>
                <li><a className="c-btn c-btn--df c-btn--linkedin mx-1 d-flex align-items-center" href="https://www.linkedin.com/company/instituto-social-waas" target="_blank"> <span className="icon-linkedin"></span><span className="pl-2">@instituto-social-waas</span></a></li>
              </ul>
            </div>

            <div className="col-lg-10 col-sm-12 mx-auto">
              <h3 className="p-2 text-primary">
                <span className="icon-envelope"></span>
                <span> Receba nossa news</span>
              </h3>
              <div className="form-group form-group-lg text-right">
                <input className="form-control form-control-lg mb-4" type="text" placeholder="E-mail" aria-label="E-mail" />
                <div className="d-flex">
                  <button className="c-btn c-btn--df c-btn--green w-100 d-flex justify-content-center" type="submit">
                    <span>Inscreve</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
  );
}
