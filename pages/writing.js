import React, { Fragment } from 'react'
import getMediumPosts from '../src/getMediumPosts'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    let posts = await getMediumPosts()
    return { posts }
  }

  render() {
    const { posts } = this.props
    return (
    <Fragment>
      <h2 className="section-hed">Writing</h2>
      
      <figure className="book-section__hero">
        <img src="//cdn.shopify.com/s/files/1/0051/7692/products/aba-000017-pp-3_660x@2x.progressive.jpg?v=1482334015" />
      </figure>

      <h3>Git for Humans</h3>
      <blockquote>
        <p>You can’t succeed in the modern tech industry without understanding Git workflows. Thankfully, now there’s a guide that makes Git genuinely accessible—and this is it. It’s wonderful to see the power of Git expressed in clear, straightforward terms. I strongly recommend this book to anyone who works in technology.</p>
          <cite>Paul Ford</cite>
      </blockquote>
      
      <h3>Articles on Medium</h3>
      {posts.map( post => (
      <article className="medium-post" key={post.link}>
          <h3 className="title"><a href={post.link}>{post.title}</a></h3>
          <p className="description">{post.description}</p>
          <p className="pubdate">{post.pubDate}</p>
      </article>
      ))}

      <hr className="dd-divider" />
    </Fragment>)
  }

}