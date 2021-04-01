import { Helmet } from 'react-helmet'
import c from 'classnames'

// import { getPosts, getSinglePost } from "../../lib/data/ghostApi"
import { formatDate } from "../../lib/utils/date"
import Layout from "../../components/Layout"
import PostContent from "../../components/PostContent"
import apolloClient from '../../lib/data/apollo-client'
import gql from 'graphql-tag'

function PostMeta({ date, readingTime, className }) {
  return <div className={c(className, 'flex')}>
    <time dateTime={date}>{formatDate(date)}</time>
    {readingTime && <>
      <span className="mx-2">•</span>
      <span className="reading-time">{readingTime} min read</span>
    </>}
  </div>
}

function PostDetailPage({ post }) {
  if(!post) return <div>No post</div>

  const postDescription = post.excerpt || "A blog post by David Demaree"

  return <Layout pageTitle={post.title} pageDescription={post.excerpt}>
    {/* <Helmet>
      <title>{post.title}</title>
      <meta property="og:title" content={post.og_title || post.title} />
      <meta name="twitter:title" content={post.twitter_title || post.title} />
      
      <meta name="description" content={post.meta_description || postDescription} />
      <meta property="og:description" content={post.og_description || postDescription} />
      <meta name="twitter:description" content={post.twitter_description || postDescription} />

      {post.feature_image && <meta name="twitter:image" value={post.feature_image} />}
      {post.feature_image && <meta name="twitter:card" value="summary_large_image" />}

      <meta property="og:type" value="article" />
      <meta property="article:published_time" value={post.published_at} />
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:label2" value={`${post.reading_time} min read`} />
    </Helmet> */}
    <article className="py-12 grid dd-grid-cols">
      <header className="dd-w-inset mx-auto max-w-2xl mb-16 grid-col-content">
        <h1 className="text-4xl font-semibold leading-snug text-ink-bold">{post.title}</h1>
        {post.excerpt && <h2 className="text-ink-medium text-2xl leading-snug">{post.excerpt}</h2>}
        <PostMeta 
          className="text-inkMedium my-4"
          date={post.date} />
      </header>
      <PostContent html={post.content} />
    </article>
  </Layout>
}

export async function getStaticProps({ params }) {
  const query = gql`
  query SinglePostQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date: dateGmt
      excerpt: unencodedExcerpt
    }
  }
  `

  const { data: { post } } = await apolloClient.query({
    query,
    variables: { slug: params.slug }
  })

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      query PathsQuery {
        posts {
          nodes {
            slug
            databaseId
          }
        }
      }
    `
  })

  const paths = data.posts.nodes.map(({ slug, databaseId }) => ({ params: { slug, databaseId } }))
  return { 
    paths,
    fallback: false
  }
}

export default PostDetailPage