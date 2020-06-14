
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import _ from 'lodash'
import moment from 'moment'

const processPostsData = data => {
  const { substackItems, posts } = data

  const itemNormalizers = {
    substack: e => ({ source: 'substack', excerpt: e.node.contentSnippet, ...e.node }),
    wordpress: e => ({ source: 'blog', isoDate: e.node.date, link: `/wp/${e.node.slug}`, ...e.node, excerpt: e.node.excerpt_raw, title: e.node.title_raw }),
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

const sourceClasses = {
  medium: 'fab fa-medium',
  substack: 'far fa-envelope-open-text',
  blog: 'fas fa-newspaper',
  tumblr: 'fab fa-tumblr'
}

const excerptify = (str, len = 12) => str.replace(/(<([^>]+)>)/ig,"").split(" ").slice(0,len).join(' ')

const LatestPostsItem = ({ post }) => {

  return <article key={post.link}>
    <div className="mb-6 relative block no-underline sm:flex">
      <div className="flex-1 text-base">
        <h3 className="dd-link-underline font-normal my-0"><Link to={post.link}>{post.title}</Link></h3>
        <div className="max-w-md text-sm text-ink leading-snug no-underline">
          {post.excerpt && `${excerptify(post.excerpt, 20)}`}
        </div>
      </div>
      <p className="font-soehne text-sm text-ink-medium mt-1 md:mt-0 sm:order-first w-24 md:w-32">
        <time>{post.date.format('MMM D, YYYY')}</time>
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