import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from 'luxon'

import Layout from "../components/layout"
import PageHeader from '../components/page-header'

import c from 'classnames'
// import styles from './posts.module.scss'
const styles = {}

const groupPostsByMonth = posts =>
  posts.reduce((groupedPosts, post) => {
    const postDate = DateTime.fromISO(post.published_at || post.date)
    const postMonthKey = postDate.toFormat('yyyy-MM-01')

    let postSet = groupedPosts[postMonthKey] || { posts: [] }
    postSet.posts.push(post)

    return Object.assign({}, groupedPosts, {[postMonthKey]: postSet})
  }, {})

const BlogPostItem = ({ post }) => (
  <article className={`ma0 mv4 ${styles.article}`}>
    <Link to={`/posts/${post.slug}`} className={styles.articleInner}>
      <figure className={styles.articleImage}><img src={post.feature_image} /></figure>
      <div className={`${styles.articleContent} ph2 pv2`}>
        <h4 className="ma0 mb1 dd-f-heading-2">{post.title}</h4>
        {post.excerpt && (<p className={`dd-fs-300 dd-light-text ma0 mt1 i`}>{ post.excerpt }</p>)}
        {post.excerpt_raw && (<p className={`dd-fs-300 dd-light-text ma0 mt1 i`}>{ post.excerpt_raw }</p>)}
      </div>
    </Link>
  </article>
)

const BlogPostsIndex = ({ data }) => {
  const groupedGhostPosts = groupPostsByMonth(data.ghostPosts.edges.map(e => e.node))
  const groupedWpPosts = groupPostsByMonth(data.wpPosts.edges.map(e => e.node))

  return (
    <Layout>
      <div className="container mx-auto px-6 my-8">
        <div className="max-w-xl mx-auto box-content">
          <PageHeader title="Blog posts" />

          {Object.keys(groupedWpPosts).map(monthKey => {
            const monthDate = DateTime.fromISO(monthKey)
            const { posts } = groupedWpPosts[monthKey]
            
            return (
              <section key={monthKey} className={c(`center mw7 dd-ph-inset`, styles.postsSection)}>
                <h3 className={`dd-f-micro dd-accent mt5 mb3`}>{monthDate.toFormat('MMMM yyyy')}</h3>
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
          title
          excerpt_raw
          date
          format
          featured_media {
            id
            source_url
          }
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
