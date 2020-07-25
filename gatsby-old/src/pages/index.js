import React from "react"
import Layout from '../components/layout'
import PostsList from "../components/posts-list"
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout showHeroFooter={false}>
    <section className="bg-container pb-4 pt-6">
      <div className="dd-wrap">
        <Hero homepage />
      </div>
    </section>

    <section className="py-8">
      <div className="dd-wrap">
        <h2 className="text-sm uppercase tracking-widest mb-4">Latest posts</h2>
        <PostsList />
      </div>
    </section>
  </Layout>
)

export default IndexPage