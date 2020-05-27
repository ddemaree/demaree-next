import React from "react"

import Layout from '../components/layout'
import { graphql } from "gatsby"
import _ from 'lodash'
import moment from 'moment'

import styles from './index.module.css'
import c from 'classnames'


const AboutLink = ({ className }) =>
  <p className={c(`mt-4`, className)}>
    <a href="/about" className="inline-block leading-none p-3 bg-black text-white rounded-lg text-sm">More about me</a>
  </p>

const Hero = ({ imageSrc }) =>
  <div className={`col-gap-6 row-gap-4 xs:grid grid-cols-12 items-center max-w-lg md:max-w-xl mx-auto`}>
    <figure className="w-16 xs:w-full mb-4 col-span-3">
      {imageSrc && <img alt="Cartoon portrait of David Demaree" src={imageSrc} className="max-w-full" />}
    </figure>
    <p className="text-2xl md:text-3xl leading-tight font-normal col-span-9"><span className="font-semibold">David&nbsp;Demaree</span> is a product&nbsp;manager, designer, and writer based in New&nbsp;Jersey</p>

    <AboutLink className="col-start-4 col-span-9 xs:mt-0" />
  </div>

const sourceClasses = {
  medium: 'fab fa-medium',
  substack: 'far fa-envelope-open-text',
  blog: 'fas fa-newspaper'
}

const LatestPostsItem = ({ post }) => {
  return <article key={post.link}>
    <a href={post.link} className="mb-2 pl-12 md:pl-0 relative block no-underline md:flex items-center">
      <span className="w-8 text-ink-medium text-lg inline-block left-0 md:left-auto absolute md:static text-center">
        <i className={c(sourceClasses[post.source])}></i>
      </span>
      <h3 className="underline flex-1 md:ml-4">{post.title}</h3>
      <div className="text-sm text-ink-medium no-underline">
        <time>{moment(post.date).format('MMM D, YYYY')}</time>
      </div>
    </a>
  </article>
}

const IndexPage = ({ data }) => {
  const { memoji, substackItems, mediumItems, ghostPosts } = data

  const allPostItems = _.concat(
    substackItems.edges.map(e => ({ source: 'substack', ...e.node })),
    mediumItems.edges.map(e => ({ source: 'medium', ...e.node })),
    ghostPosts.edges.map(e => ({ source: 'blog', isoDate: e.node.published_at, link: `/${e.node.slug}`, ...e.node }))
  ).map(p => {
    const { isoDate, ...postData } = p
    const ts = Date.parse(isoDate)
    const date = new Date(ts)
    return { date, ...postData }
  })

  const sortedPostItems = _.sortBy(allPostItems, 'date').reverse()

  return (
    <Layout headerClassName="bg-container">
      <section className="bg-container">
        <div className="dd-wrap min-h-95v md:min-h-75v box-border relative flex items-center pt-8 pb-4">
          <Hero imageSrc={memoji.img.fixed.src} />

          <div aria-hidden="true" className="pb-4 flex items-center justify-center absolute bottom-0 left-0 right-0">
            <i className="fas fa-chevron-down text-ink-low"></i>
          </div>

        </div>
      </section>

      <section className="py-8">
        <div className="dd-wrap">
          <h2 className="text-2xl mb-4">Latest</h2>
          {sortedPostItems.map(post => <LatestPostsItem post={post} />)}
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
  mediumItems: allFeedMediumFeed {
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
  ghostPosts: allGhostPost {
    edges {
      node {
        title
        excerpt
        published_at
        slug
      }
    }
  }
}
`

export default IndexPage