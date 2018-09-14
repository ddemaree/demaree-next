import React from 'react'
import getMediumPosts from '../src/getMediumPosts'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    let posts = await getMediumPosts()
    return { posts }
  }

  render() {
    const { posts } = this.props
    return (
    <>
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
    </>)
  }

}