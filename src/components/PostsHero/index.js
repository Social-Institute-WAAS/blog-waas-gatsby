import React from 'react'
import CardPostHero from './CardPostHero'

const PostsHero = ({ posts }) => {
  const card = posts.map(({ node: post }, index) => (index < 3 ? post : null))
  return (
    <section className="row c-vitrine py-4">
      <div className="container c-vitrine__grid">
        {/* {JSON.stringify(card[0])}} */}
        <div className="c-vitrine__main">
          <CardPostHero key="card0" post={card[0]} />
        </div>
        <div className="c-vitrine__sidebar c-sidebar">
          <div className="c-sidebar__container">
            <div className="c-sidebar__item">
              <CardPostHero key="card1" post={card[1]} />
            </div>
            <div className="c-sidebar__item">
              <CardPostHero key="card2" post={card[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostsHero
