import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
      window.twttr.widgets.load()
    }
  }

  render() {
    const { post } = this.props
    return (
      <Fragment>
        {post && <article>
          <p>
            <Link href="/writing">
            <a>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>All Posts</span>
            </a>
            </Link>
          </p>
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