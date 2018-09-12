import React from 'react'

import "../styles.scss"
import heroImg from '../assets/romain-vignes-53940-unsplash.jpg'

import getMediumPosts from '../src/getMediumPosts'

const HeroImage = ({ src }) => (
  <div className="hero-image" style={{ backgroundImage: `url(${src})`, backgroundPosition: "45% 55%" }} />
)

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
      <>
        <header class="site-header">
          <Link href="/">
            <a className="header-logo">
              <DDIcon />
              <h1>David Demaree</h1>
            </a>
          </Link>
        </header>

        <main id="site-content">
          <h1>Hi everyone</h1>
          <p>This is my new homepage, I guess?</p>

          <HeroImage src={heroImg} />

          <h2>Writing on Medium</h2>
          {posts.map( post => (
          <article className="medium-post" key={post.link}>
              <h3><a href={post.link}>{post.title}</a></h3>
              <p>{post.description}</p>
              <p>{post.pubDate}</p>
          </article>
          ))}
        </main>
      </>
    )
  }
} 

