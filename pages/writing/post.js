import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'
import { getPostWithSlug } from '../../src/WordPress'

const FormattedDate = ({ date, format }) => {
  format = format || "MMMM D, YYYY"
  const dateMoment = moment(date)

  return (
    <time dateTime={dateMoment.toISOString()}>
      {dateMoment.format(format)}
    </time>
  )
}

export default class extends React.Component {
  static async getInitialProps({ query }) {
    if(query.slug) {
      let post = await getPostWithSlug(query.slug)
      return { post }
    } else {
      return {}
    }
  }

  componentDidMount() {
    if(window.twttr) {
      twttr.widgets.load()
    }
  }

  render() {
    const { post } = this.props
    return (
      <Fragment>
        {post && <article>
          <header>
            <h2 className="entry-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p><FormattedDate date={post.date_gmt} /></p>
          </header>
          <section
            className="entry-content" 
            dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>}
      </Fragment>
    )
  }
}