import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// import PageContent from "../components/page-content"
// import PageHeader from "../components/page-header"
// import getWordCount from "../utils/get-word-count"

const BlogPostTemplate = ({ data }) => {
  const { title, content } = data.post

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-6 py-8">
        <h1 className="text-3xl mt-0">{title}</h1>

        <p className="mb-8 text-ink-medium">{Math.ceil(data.post.word_count / 200)} min read</p>
        
        <div className="blog-content" dangerouslySetInnerHTML={{__html: content}} />
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