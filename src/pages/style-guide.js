import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageHeader from "../components/page-header"

import pageStyles from "../components/page-content.module.scss"

const StyleGuidePage = ({ data }) => {
  const { page } = data

  return (
    <Layout 
      pageTitle="Style Guide"
      hasFancyHeader={!!page.feature_image} 
      mainClassName={pageStyles.main}>
      <PageHeader title={data.page.title} featureImage={data.page.feature_image} />
      <div className={pageStyles.wrapper}>
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
      feature_image
      html
      mobiledoc
    }
  }
`