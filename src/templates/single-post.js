import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout'

function SinglePost({ data: { file }, ...props }) {
  const { mdxDoc, remarkDoc } = file
  const doc = mdxDoc || remarkDoc || {}
  const { frontmatter: { title, subtitle, excerpt, description, date } } = doc
  const subtitleText = subtitle || excerpt || description
  console.log(doc, props)

  return <Layout>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <header className="dd-blog-header grid dd-grid-cols py-12 px-8">
      <h1 data={{content: title}} className="dd-blog-title dd-col-full mb-3 deorphan text-inkBold">{title}</h1>
      {subtitleText && <h2 className="text-center dd-col-full text-inkMedium text-lg sm:text-xl leading-snug sm:leading-snug mb-4">{subtitleText}</h2>}
    </header>
    <main className="grid dd-grid-cols">
      <div className="dd-prose contents text-lg font-serif text-ink">
        {mdxDoc && <MDXRenderer>{mdxDoc.body}</MDXRenderer>}
      </div>
    </main>
  </Layout>
}

export default SinglePost

export const query = graphql`
query($filePath: String) {
  file(relativePath: {eq: $filePath}) {
    name
    relativePath
    mdxDoc: childMdx {
      body
      frontmatter {
        ...BlogPostFields
      }
    }
    remarkDoc: childMarkdownRemark {
      html
      frontmatter {
        ...BlogPostFields
      }
    }
  }
}
`