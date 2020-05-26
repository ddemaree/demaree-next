import React from "react"

import Layout from '../components/new-layout'
import { graphql } from "gatsby"
import _ from 'lodash'
import moment from 'moment'

import styles from './index.module.css'
import c from 'classnames'

const IndexPage = ({ data }) => {
  const { memoji, substackItems, mediumItems } = data

  const allPostItems = _.concat(
    substackItems.edges.map(e => ({ source: 'substack', ...e.node })),
    mediumItems.edges.map(e => ({ source: 'medium', ...e.node }))
  ).map(p => {
    const { isoDate, ...postData } = p
    const ts = Date.parse(isoDate)
    const date = new Date(ts)
    return { date, ...postData }
  })

  const sortedPostItems = _.sortBy(allPostItems, 'date').reverse()

  console.log(sortedPostItems)

  return (
    <Layout headerClassName="bg-container">
      <section className="bg-container box-border relative">
        <div className={c(["dd-wrap", styles.gridContainer])}>

          <figure className="w-24 mb-6">
            <img src={memoji.img.fixed.src} className="max-w-full" />
          </figure>
          
          <div className="text-2xl font-semibold leading-tight max-w-lg">
            <p>David&nbsp;Demaree is a product&nbsp;manager, designer, and writer based in New&nbsp;Jersey, U.S.A.</p>

            {/* <p className="text-4xl leading-none mb-6">Hi, I'm David. I love code, cameras, coffee, and cocktails. <span className="whitespace-no-wrap">(Also alliteration.)</span></p> */}

            {/* <p>I live in the NYC suburbs with <a href="https://instagram.com/jdweinmann">my wife</a>, our 5-year-old daughter, and <a href="https://instagram.com/johnny.cash.frenchie">a cute French bulldog</a>. I've been making web sites and web software for 25 years, most recently leading design and typography teams at big companies. I'm also a published author and speak at conferences worldwide.</p> */}

            <p className="mt-6">
              <a href="/about" className="leading-none text-base p-3 bg-black text-white rounded-lg">More about me</a>
            </p>
          </div>

          <div aria-hidden="true" className="absolute pb-2 text-center left-0 right-0 bottom-0">
            <i className="fas fa-chevron-down"></i>
          </div>

        </div>
      </section>

      <section className="py-8">
        <div className="dd-wrap">
          <h2 className="text-2xl mb-4">Writings</h2>
          {sortedPostItems.map(post => 
            <article key={post.link}>
              <a href={post.link} className="mb-2 pl-12 md:pl-0 relative block no-underline md:flex items-center">
                <span className="w-8 text-ink-medium text-lg inline-block left-0 md:left-auto absolute md:static text-center">
                  <i className={c([(post.source === 'medium' ? 'fab fa-medium' : 'fas fa-newspaper')])}></i>
                </span>
                <h3 className="underline flex-1 md:ml-4">{post.title}</h3>
                <div className="text-sm text-ink-medium no-underline">
                  <time>{moment(post.date).format('MMM D, YYYY')}</time>
                </div>
              </a>
            </article>)}
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
}
`

export default IndexPage