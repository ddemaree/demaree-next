import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const { title, content } = data.post

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-6 py-8">
        <h1 className="text-3xl mt-0" dangerouslySetInnerHTML={{__html: title}} />
        <p className="mb-8 text-ink-medium">{Math.ceil(data.post.word_count / 200)} min read</p>
        
        <PageContent content={content} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    post: wordpressPost(slug: {eq: $slug}) {
      title
      slug
      content
      word_count
    }
  }
`

export default BlogPostTemplate