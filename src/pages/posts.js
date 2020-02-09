import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from 'luxon'

import Layout from "../components/layout"
import PageHeader from '../components/page-header'
import PostInfo from "../components/post-info"

import c from 'classnames'
const styles = {}

const getWordCount = str => str.split(" ").length
const isManualExcerpt = (plaintext, excerpt) => {
  if(!plaintext || !excerpt) return null;
  let isFakeExcerpt = plaintext.startsWith(excerpt) && excerpt.length == 500;
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
  console.log(post)

  return <>
    <article className={`mb-5`}>
      <div>
        <Link to={`/${post.slug}`} className="no-underline">
          <h4 className="text-xl font-serif font-semibold">{post.title}</h4>
          {isManualExcerpt(post.plaintext, post.excerpt) && (<p>{ post.excerpt }</p>)}
        </Link>
      </div>
      <p className="text-sm text-ink-medium mt-1">
        <PostInfo date={post.published_at} words={getWordCount(post.plaintext)} />
      </p>
    </article>
    <hr className="mb-5 border-ink-extralow" />
  </>
}

const BlogPostsIndex = ({ data }) => {
  const groupedPosts = groupPostsByMonth(data.ghostPosts.edges.map(e => e.node))

  return (
    <Layout>
      <div className="container mx-auto px-6 my-8">
        <div className="max-w-content mx-auto box-content">
          <PageHeader title="Blog posts" />

          <h2>All posts by date</h2>
          {Object.keys(groupedPosts).map(monthKey => {
            const monthDate = DateTime.fromISO(monthKey)
            const { posts } = groupedPosts[monthKey]
            
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
    ghostPosts: allGhostPost {
      edges {
        node {
          __typename
          title
          plaintext
          published_at
          excerpt
          slug
        }
      }
    }
  }
`

export default BlogPostsIndex
