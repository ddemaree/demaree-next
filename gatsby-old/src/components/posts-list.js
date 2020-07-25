
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import _ from 'lodash'
import moment from 'moment'

const excerptify = (str, len = 12) => {
  const allWords = str.replace(/(<([^>]+)>)/ig,"").split(" ")
  const nWords   = allWords.slice(0,len)
  const excerpt  = nWords.join(' ')

  if(excerpt !== str) {
    return `${excerpt}…`
  } else {
    return str
  }
}
const processPostsData = data => {
  const { substackItems, posts } = data

  const itemNormalizers = {
    substack: e => ({ 
      source: 'newsletter',
      excerpt: excerptify(e.node.contentSnippet, 24),
      ...e.node }),
    markdown: ({ node: { excerpt, frontmatter, ...node } }) => {
      const { date, slug, title, description, ..._frontmatter } = frontmatter

      return {
        source: 'blog',
        isoDate: date,
        link: `/${slug}`,
        title, 
        excerpt: (description || excerpt),
        ...node,
        ..._frontmatter
      }
    }
  }

  const allPostItems = _.concat(
    substackItems.edges.map(itemNormalizers.substack),
    posts.edges.map(itemNormalizers.markdown)
  ).map(p => {
    const { isoDate, ...postData } = p
    let sortTimestamp;
    let date;
    
    if(isoDate) {
      sortTimestamp = Date.parse(isoDate)
      date = moment(sortTimestamp)
    } else {
      sortTimestamp = 0
    }

    return { ...postData, sortTimestamp, date }
  })

  return _.sortBy(allPostItems, 'sortTimestamp').reverse()
}

const LatestPostsItem = ({ post: { title, link, source, excerpt, date, ...post } }) => {
  const linkIsRemote = link.match(/^http/i)

  const linkElement = linkIsRemote 
    ? <a href={link} rel="external">{title}</a>
    : <Link to={link}>{title}</Link>

  return <article key={link}>
    <div className="mb-6 relative block no-underline sm:flex">
      <div className="flex-1 text-base">
        <h3 className="dd-link-underline font-normal my-0">
          {linkElement}
        </h3>
        <div className="max-w-md text-sm text-ink leading-snug no-underline">
          {excerpt}
        </div>
      </div>
      <p className="font-soehne text-sm text-ink-medium mt-1 md:mt-0 sm:order-first w-24 md:w-32">
        <time>{date.format('MMM D, YYYY')}</time>
      </p>
    </div>
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
    posts: allMarkdownRemark(filter: {
      frontmatter: {date: {gt: "0"}, private: {ne: true}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date
            description
          }
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