import React from "react"

import Layout from '../components/new-layout'
import memoji from '../images/memoji.png'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Hello world</h1>
      <img src={memoji} />
    </Layout>
  )
}

export default IndexPage