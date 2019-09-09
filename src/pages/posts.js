import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from 'luxon'

import Layout from "../components/layout"

import styles from './posts.module.scss'

const groupPostsByMonth = posts =>
  posts.reduce((groupedPosts, post) => {
    const postDate = DateTime.fromISO(post.published_at)
    const postMonthKey = postDate.toFormat('yyyy-MM-01')

    let postSet = groupedPosts[postMonthKey] || { posts: [] }
    postSet.posts.push(post)

    return Object.assign({}, groupedPosts, {[postMonthKey]: postSet})
  }, {})

const BlogPostItem = ({ post }) => (
  <article className={styles.blogPostItem}>
    <h4><Link to={`/posts/${post.slug}`}>{post.title}</Link></h4>
    {post.excerpt && (<p className={styles.excerpt}>{ post.excerpt }</p>)}
  </article>
)

const BlogPostsIndex = ({ data }) => {
  const groupedPosts = groupPostsByMonth(data.posts.edges.map(e => e.node))

  return (
    <Layout mainClassName={styles.postsIndex}>
      <h2 className={styles.pageTitle}>Blog posts</h2>
      {Object.keys(groupedPosts).map(monthKey => {
        const monthDate = DateTime.fromISO(monthKey)
        const { posts } = groupedPosts[monthKey]
        
        return (
          <section key={monthKey}>
            <h3 className={styles.monthHeader}>{monthDate.toFormat('MMMM yyyy')}</h3>
            <div>
            {posts.map(post => (
              <BlogPostItem key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query PostsIndexQuery {
    posts: allGhostPost {
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
