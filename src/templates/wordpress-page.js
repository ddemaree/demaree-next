import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data: { page } }) => {
  const { title, content } = page

  return (
    <Layout>
      <div className="max-w-lg mx-auto px-6 py-8">
        <h1 className="text-3xl mt-0" dangerouslySetInnerHTML={{__html: title}} />
        {/* <div dangerouslySetInnerHTML={{__html: content}} /> */}
        <PageContent content={content} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    page: wordpressPage(slug: {eq: $slug}) {
      title
      slug
      content
    }
  }
`

export default BlogPostTemplate