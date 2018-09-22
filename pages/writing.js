import React, { Fragment } from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'
import { getPosts } from '../src/WordPress'

import { faGoodreads } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import getMediumPosts from '../src/getMediumPosts'
const ResponsiveImg = ({ src, className }) => {
  let classNames = ['dd-responsive-img', className]
  
  return (
    <figure 
      className={classNames.join(' ')}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}>
      <img src={src} style={{display: 'none'}} />
    </figure>
  )
}

const BookSection = () =>
  <section className="dd-section book-section">
    <h3 className="dd-section__header dd-header-2">Git for Humans</h3>

    <ResponsiveImg className="dd-section__hero" src="//cdn.shopify.com/s/files/1/0051/7692/products/aba-000017-pp-3_660x@2x.progressive.jpg?v=1482334015" />
    
    <div className="dd-section__content">
      <p>My book explaining Git concepts and workflow to web designers, content authors, or anyone else who touches Git and finds it hard to understand.</p>
      <blockquote>
        <p>You can’t succeed in the modern tech industry without understanding Git workflows. Thankfully, now there’s a guide that makes Git genuinely accessible—and this is it. It’s wonderful to see the power of Git expressed in clear, straightforward terms. I strongly recommend this book to anyone who works in technology.</p>
          <cite>Paul Ford</cite>
      </blockquote>

      <ul>
        <li><a href="https://alistapart.com/article/the-art-of-the-commit" className="dd-button">
          <FontAwesomeIcon icon={faBookReader} />
          <span>Read an excerpt</span>
        </a></li>
        <li><a href="https://www.goodreads.com/book/show/28801648-git-for-humans" className="dd-button">
          <FontAwesomeIcon icon={faGoodreads} />
          <span>Reviews on Goodreads</span>
        </a></li>
        <li><a href="https://abookapart.com/products/git-for-humans" className="dd-button">
          <FontAwesomeIcon icon={faShoppingBag} />
          <span>Get it at A Book Apart</span>
        </a></li>
      </ul>
    </div>
  </section>

export default class extends React.Component {
  static async getInitialProps({ req }) {
    let posts = await getPosts()
    return { posts }
  }

  render() {
    const { posts } = this.props
    return (
    <Fragment>
      <Helmet title="Writing" />
      <h2 className="section-hed dd-header-1">Writing</h2>
      
      <h3 className="dd-header-2">Blog Posts</h3>

      {posts.map( post => (
      <article className="medium-post" key={post.guid.rendered}>
        <h3>
          <Link href={`/writing/post?slug=${post.slug}`}>
            <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
          </Link>
        </h3>
      </article>
      ))}

      <hr className="dd-divider" />
    </Fragment>)
  }

}