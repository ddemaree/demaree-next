import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.scss"

import Layout from "../components/layout"
import PageContent, { PageWrapper } from "../components/page-content"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <PageContent className={styles.pageContent} content={data.homePage.html} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    homePage: ghostPage(slug: {eq: "home-page"}) {
      id
      title
      html
      mobiledoc
    }
  }
`