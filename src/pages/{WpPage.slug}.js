import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import PostContent from '../components/PostContent'

export default function ContentPage({ data: { page }}) {
  return <Layout>
    <h1>{page.title}</h1>
    <PostContent html={page.content} />
  </Layout>
}

export const pageQuery = graphql`
  query ContentPageQuery($slug: String) {
    page: wpPage(slug: {eq: $slug}) {
      title
      content
    }
  }
`