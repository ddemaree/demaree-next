import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPostsIndex = ({ data }) => {
  console.log("Where is my data???")
  console.log(data)

  return (
    <Layout>
      <h2>Blog posts</h2>
      {data.posts.edges.forEach(edge => (
        <div>Post: {edge.node.title}</div>
      ))}
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
