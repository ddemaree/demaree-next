
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import _ from 'lodash'
import moment from 'moment'
import c from 'classnames'

const processPostsData = data => {
  const { substackItems, wpPosts } = data
  
  const allPostItems = _.concat(
    substackItems.edges.map(e => ({ source: 'substack', excerpt: e.node.contentSnippet, ...e.node })),
    wpPosts.edges.map(e => ({ source: 'blog', isoDate: e.node.date, link: `/${e.node.slug}`, ...e.node, excerpt: e.node.excerpt_raw, title: e.node.title_raw })),
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

  return _.sortBy(allPostItems, 'sortTimestamp').reverse()
}

const sourceClasses = {
  medium: 'fab fa-medium',
  substack: 'far fa-envelope-open-text',
  blog: 'fas fa-newspaper',
  tumblr: 'fab fa-tumblr'
}

const excerptify = (str, len = 12) => str.replace(/(<([^>]+)>)/ig,"").split(" ").slice(0,len).join(' ')

const LatestPostsItem = ({ post }) => {

  return <article key={post.link}>
    <a href={post.link} className="mb-6 relative block no-underline sm:flex">
      <div className="flex-1 text-base">
        <h3 className="dd-link-underline font-normal my-0">{post.title}</h3>
        <div className="max-w-md text-sm text-ink leading-snug no-underline">
          {post.excerpt && `${excerptify(post.excerpt, 20)}`}
        </div>
      </div>
      <p className="font-soehne text-sm text-ink-medium mt-1 md:mt-0 sm:order-first w-24 md:w-32">
        <time>{post.date.format('MMM D, YYYY')}</time>
      </p>
    </a>
  </article>
}

const PostsList = () => {
  const data = useStaticQuery(graphql`
  query PostsListQuery {
    substackItems: allFeedSubstackFeed {
      edges {
        node {
          title
          isoDate
          link
          contentSnippet
        }
      }
    }
    wpPosts: allWordpressPost {
      edges {
        node {
          title_raw
          excerpt_raw
          date
          id
          slug
          word_count
        }
      }
    }  
  }
  `)

  const sortedItems = processPostsData(data)

  return <>
    {sortedItems.map(post => <LatestPostsItem key={post.link} post={post} />)}
  </>
}

export default PostsList