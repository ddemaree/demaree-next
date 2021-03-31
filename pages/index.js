// import RSSParser from 'rss-parser'
// import { DateTime } from 'luxon'
// import { getPosts } from '../lib/data/ghostApi'


import { formatDate } from '../lib/utils/date'
import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'
import SocialLinks from '../components/SocialLinks'
import apolloClient from '../lib/data/apollo-client'
import gql from 'graphql-tag'

function HomePage({ posts, latestSubstack }) {

  const Section = ({ children }) => <div className="my-16">{children}</div>
  const Headline = ({ children }) => <h2 className="uppercase font-sans-display font-semibold tracking-wider text-center text-lg text-accent mb-4">{ children }</h2>

  return <Layout hideFooterSocials={true} activeNav="home">
    <div className="font-serif max-w-2xl mx-auto p-8 pt-2">
      <header className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <figure className="w-full max-w-xl mb-4">
          <img src="//res.cloudinary.com/demaree/image/upload/w_800,q_auto/demaree-dot-me/images/david-acnh-xmas.jpg" alt="The author wearing Christmas sweater in Animal Crossing New Horizons" width={836} height={538} className="w-full rounded-2xl" />
        </figure>
        <h1 className="font-sans-display font-semibold text-4xl xs:text-5xl my-2 text-inkBold">David Demaree</h1>
        <h2 className="font-sans text-xl xs:text-2xl text-inkMedium max-w-lg mb-8">NYC-based product person, writer, photographer, and coder</h2>

        <SocialLinks />
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
        wpPosts: posts {
          nodes {
            title
            id
            slug
          }
        }
      }
    `
  })

  const wpPosts = data.wpPosts.nodes
  console.log(wpPosts)

  return {
    props: {
      posts: [],
      recentSubstacks: [],
      latestSubstack: null
    }
  }
}