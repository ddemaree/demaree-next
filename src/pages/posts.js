import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from 'luxon'

import Layout from "../components/layout"
import PageHeader from '../components/page-header'

import c from 'classnames'
import PostInfo from "../components/post-info"
// import styles from './posts.module.scss'
const styles = {}

const groupPostsByMonth = posts =>
  posts.reduce((groupedPosts, post) => {
    // TODO: Remove published_at option once fully switched over from Ghost
    const postDate = DateTime.fromISO(post.published_at || post.date)
    const postMonthKey = postDate.toFormat('yyyy-MM-01')

    let postSet = groupedPosts[postMonthKey] || { posts: [] }
    postSet.posts.push(post)

    return Object.assign({}, groupedPosts, {[postMonthKey]: postSet})
  }, {})

function postDisplayDate(date) {
  return DateTime.fromISO(date).toFormat('MMMM dd, yyyy')
}

const BlogPostItem = ({ post }) => (
  <>
  <article className={`mb-5`}>
    <Link to={`/posts/${post.slug}`}>
      <figure className={styles.articleImage}><img src={post.feature_image} /></figure>
      <div className={`${styles.articleContent} ph2 pv2`}>
        <h4 className="text-xl font-serif font-semibold">{post.title_raw}</h4>
        {post.excerpt_raw && (<p className={``}>{ post.excerpt_raw }</p>)}
      </div>
    </Link>
    <p className="text-sm text-gray-600 mt-1">
      <PostInfo date={post.date} words={post.word_count} />
      {/* <time>{ postDisplayDate(post.date) }</time>
      <span className="mx-2">•</span>
      <span>{(Math.ceil(post.word_count / 200))} min read</span> */}
    </p>
  </article>
  <hr className="mb-5" />
  </>
)

const BlogPostsIndex = ({ data }) => {
  // const groupedGhostPosts = groupPostsByMonth(data.ghostPosts.edges.map(e => e.node))
  const groupedWpPosts = groupPostsByMonth(data.wpPosts.edges.map(e => e.node))

  return (
    <Layout>
      <div className="container mx-auto px-6 my-8">
        <div className="max-w-xl mx-auto box-content">
          <PageHeader title="Blog posts" />

          <h2>All posts by date</h2>
          {Object.keys(groupedWpPosts).map(monthKey => {
            const monthDate = DateTime.fromISO(monthKey)
            const { posts } = groupedWpPosts[monthKey]
            
            return (
              <section key={monthKey} className={c(`center mw7 dd-ph-inset`, styles.postsSection)}>
                <h3 className={`font-bold text-sm mt-10 mb-6 uppercase tracking-wider`}>{monthDate.toFormat('MMMM yyyy')}</h3>
                {posts.map(post => (
                  <BlogPostItem key={post.slug} post={post} />
                  ))}
              </section>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsIndexQuery {
    wpPosts: allWordpressPost {
      edges {
        node {
          status
          title_raw
          excerpt_raw
          date
          format
          featured_media {
            id
            source_url
          }
          word_count
          slug
        }
      }
    }
    ghostPosts: allGhostPost {
      edges {
        node {
          slug
          title
          published_at
          feature_image
          excerpt
        }
      }
    }
  }
`

export default BlogPostsIndex
