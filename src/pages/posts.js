import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from 'luxon'

import Layout from "../components/layout"
import PageHeader from '../components/page-header'

import c from 'classnames'
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
  <article className={`ma0 mv4`}>
    <Link to={`/posts/${post.slug}`}>
      <figure><img src={post.feature_image} /></figure>
      <div className="">
        <h4 className="ma0 mb2 dd-f-heading-2">{post.title}</h4>
        {post.excerpt && (<p className={`dd-fs-300 dd-light-text ma0 mt1 i`}>{ post.excerpt }</p>)}
      </div>
    </Link>
  </article>
)

const BlogPostsIndex = ({ data }) => {
  const groupedPosts = groupPostsByMonth(data.posts.edges.map(e => e.node))

  return (
    <Layout noMainInset>
      <PageHeader title="Blog posts" />

      {Object.keys(groupedPosts).map(monthKey => {
        const monthDate = DateTime.fromISO(monthKey)
        const { posts } = groupedPosts[monthKey]
        
        return (
          <section key={monthKey} className={c(`center mw7 dd-ph-inset`, styles.postsSection)}>
            <h3 className={`dd-fs-micro dd-accent mt5 mb3`}>{monthDate.toFormat('MMMM yyyy')}</h3>
            {posts.map(post => (
              <BlogPostItem key={post.slug} post={post} />
              ))}
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
