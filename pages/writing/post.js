import React, { Fragment } from 'react'
import { getPostWithSlug } from '../../src/WordPress'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    if(query.slug) {
      let post = await getPostWithSlug(query.slug)
      console.log(post)
      return { post }
    } else {
      return {}
    }
  }

  render() {
    const { post } = this.props
    return (
      <Fragment>
        {post && <article>
          <header>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <section className="entry-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </header>
        </article>}
      </Fragment>
    )
  }
}