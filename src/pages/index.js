import React from 'react'
import { Link, graphql } from 'gatsby'
import c from 'classnames'
import { formatDate } from '../lib/utils/date'
import Layout from '../components/Layout'
import PostContent from '../components/PostContent'

function HomePage({ data: { wpPosts, shortBio, latestSubstack } }) {
  console.log({ wpPosts, shortBio, latestSubstack })
  const Section = ({ children, className }) => <section className={c("mb-12 first:mt-0", className)}>{children}</section>

  return <Layout 
    hideFooterSocials={true}
    activeNav="home"
    wrapperClassName="dd-homepage">
    
    <Section className="grid dd-grid-cols dd-homepage-hero items-center">
      <PostContent html={shortBio.content} />
    </Section>

    <Section className="grid dd-grid-cols">
      <div class="grid-col-wide mobile:px-8 grid dd-homepage-cols gap-8">
        <div className="col-start-1 col-span-1">
          <h2 className="uppercase font-mono font-medium tracking-wider text-lg text-ink-bold mb-1">Blog Posts</h2>
          <p class="text-ink-medium">Writing about web development, business, etc.</p>
        </div>
        <div className="sm:col-start-2 sm:row-span-full">
        {wpPosts.nodes.map(post => 
          <article className="sm:col-start-2 mb-8" key={post.databaseId}>
            <Link href={`/p/${post.slug}`}>
              <a className="block">
                <h2 className="font-sans font-semibold text-xl text-ink-bold">{post.title}</h2>
                {post.excerpt && <p>{post.excerpt}</p>}
              </a>
            </Link>
          </article>
        )}
        </div>
      </div>
    </Section>
  </Layout>
}

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    shortBio: wpFragment(slug: {eq: "short-bio"}) {
      content
    }
    wpPosts: allWpPost(limit: 5) {
      nodes {
        title
        databaseId
        slug
        date: dateGmt
        excerpt: unencodedExcerpt
      }
    }
  }
`