import React, { Fragment } from 'react'
import getMediumPosts from '../src/getMediumPosts'

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
      
      <section className="dd-section dd-section--fullbleed">
        <h3 className="dd-section__header">Git for Humans</h3>

        <ResponsiveImg className="dd-section__hero" src="//cdn.shopify.com/s/files/1/0051/7692/products/aba-000017-pp-3_660x@2x.progressive.jpg?v=1482334015" />
        
        <div className="dd-section__content">
          <p>My book explaining Git concepts and workflow to web designers, content authors, or anyone else who touches Git and finds it hard to understand.</p>
          <blockquote>
            <p>You can’t succeed in the modern tech industry without understanding Git workflows. Thankfully, now there’s a guide that makes Git genuinely accessible—and this is it. It’s wonderful to see the power of Git expressed in clear, straightforward terms. I strongly recommend this book to anyone who works in technology.</p>
              <cite>Paul Ford</cite>
          </blockquote>

          <a>Get it at A Book Apart</a>
        </div>
      </section>

      <hr className="dd-divider" />
      
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