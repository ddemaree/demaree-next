import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data: { post } }) => {
  const { html, timeToRead, frontmatter } = post
  const { title, date } = frontmatter

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-6 py-8">
        <h1 className="text-3xl mt-0" dangerouslySetInnerHTML={{__html: title}} />
        <p className="mb-8 text-ink-medium">{timeToRead} min read</p>
        
        <PageContent content={html} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
    }
  }
`

export default BlogPostTemplate