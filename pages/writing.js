import React from 'react'
import getMediumPosts from '../src/getMediumPosts'
import { getPosts } from '../src/WordPress';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    let posts = await getPosts()
    // console.log(posts)

    // let posts = await getMediumPosts()
    return { posts }
  }

  render() {
    const { posts } = this.props
    return (
    <>
      <h2 className="section-hed">Writing</h2>
      {posts.map( post => (
      <article className="medium-post" key={post.guid.rendered}>
        <h3>{post.title.rendered}</h3>
      </article>
      ))}

      <hr />

      <section className="dd-section medium-posts">
      <p>This section intentionally left blank</p>
      </section>
    </>)
  }

}