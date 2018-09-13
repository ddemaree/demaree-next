import React from 'react'
import getMediumPosts from '../src/getMediumPosts'
import heroImg from '../assets/romain-vignes-53940-unsplash.jpg'
import "../styles.scss"

const HeroImage = ({ src, overlayColor, textColor, ...props }) => {
  let cssBgs = [`url(${src})`]
  let styles = {
    backgroundPosition: "45% 55%"
  }
  
  if(overlayColor) {
    cssBgs.unshift(`linear-gradient(to bottom, #0006, #0006)`)
  }

  if(textColor) styles.color = textColor;
  styles.backgroundImage = cssBgs.join(', ')

  return (
    <div className="hero-image" style={styles} {...props} />
  )
}

import Link from 'next/link'
import DDIcon from '../src/DDIcon'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    let posts = await getMediumPosts()
    return { posts }
  }

  render() {
    const { posts } = this.props

    return (
      <div id="dd-main">
        <header id="site-header" className="site-header">
          <Link href="/">
            <a className="header-logo">
              <DDIcon />
              <h1>David Demaree</h1>
            </a>
          </Link>
        </header>

        <main id="site-main">

          <HeroImage textColor="white" overlayColor="black" src={heroImg}>
          </HeroImage>

          <div className="hero-section-content">
            <h1>Hi everyone</h1>
            <p>This is my new homepage, I guess?</p>
          </div>

          <hr />

          <h2 className="section-hed">Writing</h2>
          {posts.map( post => (
          <article className="medium-post" key={post.link}>
              <h3 className="title"><a href={post.link}>{post.title}</a></h3>
              <p className="description">{post.description}</p>
              <p className="pubdate">{post.pubDate}</p>
          </article>
          ))}

          <hr />

          <section className="dd-section medium-posts">
          <p>This section intentionally left blank</p>
          </section>
        </main>

        <footer id="site-footer">
          <p>Have courage, and be kind</p>
        </footer>

      </div>
    )
  }
} 

