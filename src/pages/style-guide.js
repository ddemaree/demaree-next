import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"

import pageStyles from "../components/page-content.module.scss"

const StyleGuidePage = ({ data }) => {
  return (
    <Layout mainClassName={pageStyles.main}>
      <div className={pageStyles.wrapper}>
        <h1>Style Guide</h1>
        <PageContent content={data.page.html} />
      </div>
    </Layout>
  )
}

export default StyleGuidePage

export const query = graphql`
  query {
    page: ghostPage(slug: {eq: "__style-guide"}) {
      id
      title
      html
      mobiledoc
    }
  }
`