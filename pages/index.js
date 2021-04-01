// import RSSParser from 'rss-parser'
// import { DateTime } from 'luxon'
// import { getPosts } from '../lib/data/ghostApi'


import { formatDate } from '../lib/utils/date'
import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'
import SocialLinks from '../components/SocialLinks'

// import { Image as CloudinaryImage, Placeholder, Transformation } from 'cloudinary-react'
import apolloClient from '../lib/data/apollo-client'
import gql from 'graphql-tag'
import Link from 'next/link'
import c from 'classnames'

function HomePage({ wpPosts, shortBio, latestSubstack }) {

  const Section = ({ children, className }) => <section className={c("my-16", className)}>{children}</section>
  const Headline = ({ children }) => <h2 className="uppercase font-sans font-semibold tracking-wider text-center text-lg text-accent mb-4">{ children }</h2>

  return <Layout hideFooterSocials={true} activeNav="home">
    <Section className="grid dd-grid-cols">
      <div 
        dangerouslySetInnerHTML={{__html: shortBio.content}}
        className="prose mb-16 contents" />
    </Section>

    <div className="font-serif max-w-2xl mx-auto p-8 pt-2">

      <header className="flex flex-col items-center mb-12 sm:mb-16">

      </header>


      {latestSubstack && <Section>
        <Headline>Plague Diaries</Headline>
        <div className="dd-prose -mx-8">
          <p>I've been writing a ~weekly Substack newsletter during Covid–19. The latest issue was <a href={latestSubstack.link}>{latestSubstack.title}</a>, posted on {formatDate(latestSubstack.isoDate)}.</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center text-center justify-center mt-6">
          <a className="inline-block dd-button bg-accent text-inkBold" href="https://demaree.substack.com">Subscribe</a>
          <a className="mt-4 sm:mt-0 sm:ml-4 inline-block dd-button bg-accent text-inkBold" href="https://demaree.substack.com/archive?sort=new">Browse issues</a>
        </div>
      </Section>}

      <Section>
        <Headline>Blog Posts</Headline>
        {wpPosts.map(post => 
          <article key={post.databaseId}>
            <Link href={`/p/${post.slug}`}>
              <a className="block">
                <h2 className="font-sans font-semibold text-xl text-ink-bold">{post.title}</h2>
              </a>
            </Link>
          </article>
        )}
        {/* posts.map(p =>
          <BlogPostCard
            key={p.uuid}
            link={`/p/${p.slug}`}
            title={p.title}
            excerpt={p.excerpt}
            pubDate={p.published_at}
            readingTime={p.reading_time}
            featuredImage={p.feature_image}
          className="mb-8 last:mb-0" />) */}
      </Section>
    </div>
  </Layout>
}

export default HomePage

export async function getStaticProps(context) {
  const { data } = await apolloClient.query({
    query: gql`
      query AllWpPosts {
        shortBio: fragment(id: "short-bio", idType: SLUG) {
          content
        }
        wpPosts: posts(first: 7) {
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
  })

  const { wpPosts, shortBio } = data
  const shortBioContent = shortBio.content.replace(/https?:\/\/demaree\.space/, "")

  return {
    props: {
      posts: [],
      wpPosts: wpPosts.nodes,
      shortBio: { content: shortBioContent },
      recentSubstacks: [],
      latestSubstack: null
    }
  }
}