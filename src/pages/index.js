import React from "react"

import Layout from '../components/layout'
import { graphql } from "gatsby"
import _ from 'lodash'
import moment from 'moment'

import c from 'classnames'

const sourceClasses = {
  medium: 'fab fa-medium',
  substack: 'far fa-envelope-open-text',
  blog: 'fas fa-newspaper',
  tumblr: 'fab fa-tumblr'
}

const LatestPostsItem = ({ post }) => {
  let shortExcerpt;
  if(post.body) {
    shortExcerpt = post.body.replace(/(<([^>]+)>)/ig,"").split(" ").slice(0,12).join(' ')
  }

  return <article key={post.link}>
    <a href={post.link} className="mb-2 pl-12 md:pl-0 relative block no-underline md:flex items-center">
      <span className="w-8 text-ink-medium text-lg inline-block left-0 md:left-auto absolute md:static text-center">
        <i className={c(sourceClasses[post.source])}></i>
      </span>
      <h3 className="dd-link-underline font-normal text-base flex-1 md:ml-4 my-0">{post.title || `${shortExcerpt}…`}</h3>
      <div className="text-sm text-ink-medium no-underline">
        <time>{post.date.format('MMM D, YYYY')}</time>
      </div>
    </a>
  </article>
}

const IndexPage = ({ data }) => {
  const { memoji, substackItems, wpPosts } = data

  const allPostItems = _.concat(
    substackItems.edges.map(e => ({ source: 'substack', ...e.node })),
    wpPosts.edges.map(e => ({ source: 'blog', title: e.node.title_raw, isoDate: e.node.date, link: `/${e.node.slug}`, ...e.node })),
  ).map(p => {
    const { isoDate, timestamp, ...postData } = p
    let sortTimestamp;
    let date;
    
    if(timestamp) {
      sortTimestamp = timestamp * 1000
      date = moment.unix(timestamp)
    } else if(isoDate) {
      sortTimestamp = Date.parse(isoDate)
      date = moment(sortTimestamp)
    } else {
      sortTimestamp = 0
    }

    return { ...postData, sortTimestamp, date }
  })

  const sortedPostItems = _.sortBy(allPostItems, 'sortTimestamp').reverse()

  return (
    <Layout>
      <section>
        <div className="dd-wrap box-border relative flex items-center pt-8 pb-4">
          <div className={`col-gap-6 row-gap-4 xs:grid grid-cols-12 items-center max-w-lg md:max-w-xl mx-auto`}>
            <figure className="w-16 xs:w-full mb-4 col-span-3">
            {memoji && <img alt="Cartoon portrait of David Demaree" src={memoji.img.fixed.src} className="max-w-full" />}
            </figure>
            <p className="text-2xl md:text-3xl leading-tight font-normal col-span-9"><span className="font-bold">David&nbsp;Demaree</span> is a product&nbsp;manager, designer, and writer based in New&nbsp;Jersey.</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="dd-wrap">
          <h2 className="text-2xl mb-4">Latest posts</h2>
          {sortedPostItems.map(post => <LatestPostsItem key={post.link} post={post} />)}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query HomepageQuery {
  memoji: file(relativePath: {regex: "/memoji.png/"}) {
    img: childImageSharp {
      fixed(width: 200, pngQuality: 10, webpQuality: 10, base64Width: 10) {
        srcWebp
        src
        base64
        aspectRatio
        srcSet
        srcSetWebp
      }
    }
  }
  substackItems: allFeedSubstackFeed {
    edges {
      node {
        title
        isoDate
        link
        content {
          encoded
        }
      }
    }
  }
  wpPosts: allWordpressPost {
    edges {
      node {
        title_raw
        excerpt_raw
        featured_media {
          localFile {
            childImageSharp {
              fixed(width: 200, jpegQuality: 60) {
                src
                width
                height
                originalName
                aspectRatio
              }
            }
          }
        }
        date
        id
        slug
        word_count
      }
    }
  }
}
`

export default IndexPage