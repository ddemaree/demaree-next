import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from 'luxon'
import Layout from "../components/layout"
import PageHeader from '../components/page-header'
import PostInfo from "../components/post-info"
import getWordCount from "../utils/get-word-count"

const isManualExcerpt = (plaintext, excerpt) => {
  if(!plaintext || !excerpt) return null;
  let isFakeExcerpt = plaintext.startsWith(excerpt) && excerpt.length === 500;
  return !isFakeExcerpt;
}

const groupPostsByMonth = posts =>
  posts.reduce((groupedPosts, post) => {
    // TODO: Remove published_at option once fully switched over from Ghost
    const postDate = DateTime.fromISO(post.published_at || post.date)
    const postMonthKey = postDate.toFormat('yyyy-MM-01')

    let postSet = groupedPosts[postMonthKey] || { posts: [] }
    postSet.posts.push(post)

    return Object.assign({}, groupedPosts, {[postMonthKey]: postSet})
  }, {})

const BlogPostItem = ({ post }) => {
  return <>
    <article className={`mb-5`}>
      <div>
        <Link to={`/${post.slug}`} className="no-underline">
          {post.feature_image && <div className="mb-3 h-40">
            <img src={post.feature_image} className="object-cover h-full w-full rounded" />
          </div>}
          <h4 className="text-xl xs:text-base leading-tight font-serif font-semibold mb-1">{post.title}</h4>
          {isManualExcerpt(post.plaintext, post.excerpt) && (<p class="xs:text-sm leading-snug mb-2">{ post.excerpt }</p>)}
        </Link>
      </div>
      <p className="text-sm text-ink-medium">
        <PostInfo date={post.published_at} words={getWordCount(post.plaintext)} />
      </p>
    </article>
  </>
}

const BlogPostsIndex = ({ data }) => {
  const groupedPosts = groupPostsByMonth(data.ghostPosts.edges.map(e => e.node))

  return (
    <Layout>
      <div className="max-w-wide mx-auto my-8 px-6 box-content">
        <PageHeader title="Blog posts" />

        <div className="dd-posts-grid">
          {Object.keys(groupedPosts).map(monthKey => {
            const monthDate = DateTime.fromISO(monthKey)
            const { posts } = groupedPosts[monthKey]
            
            return <>
              <h3 className={`font-bold text-sm mt-6 first:mt-0 uppercase tracking-wider dd-grid-full-width text-center`}>{monthDate.toFormat('MMMM yyyy')}</h3>
              {posts.map(post => (
                <BlogPostItem key={post.slug} post={post} />
                ))}
            </>
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsIndexQuery {
    ghostPosts: allGhostPost {
      edges {
        node {
          __typename
          title
          plaintext
          published_at
          excerpt
          slug
          feature_image
        }
      }
    }
  }
`

export default BlogPostsIndex
