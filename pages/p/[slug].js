// import Head from 'next/head'
import { Helmet } from 'react-helmet'
import c from 'classnames'

import { getPosts, getSinglePost } from "../../lib/data/ghostApi"
import { formatDate } from "../../lib/utils/date"
import Layout from "../../components/Layout"
import PostContent from "../../components/PostContent"
// import { ArticleMetaTags } from '../../components/MetaTags'

function PostMeta({ date, readingTime, className }) {
  return <div className={c(className, 'flex')}>
    <time dateTime={date}>{formatDate(date)}</time>
    <span className="mx-2">•</span>
    <span className="reading-time">{readingTime} min read</span>
  </div>
}

function PostDetailPage({ post }) {
  return <Layout pageTitle={post.title} pageDescription={post.excerpt}>
    <Helmet>
      <title>{post.title}</title>
      <meta property="og:type" value="article" />
      <meta property="article:published_time" value={post.published_at} />
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:label2" value={`${post.reading_time} min read`} />
    </Helmet>
    <article className="py-12">
      <header className="dd-w-inset mx-auto max-w-2xl mb-16">
        <h1 className="text-4xl font-semibold leading-snug text-inkBold">{post.title}</h1>
        {post.excerpt && <h2 className="text-inkMedium text-2xl leading-snug">{post.excerpt}</h2>}
        <PostMeta 
          className="text-inkMedium my-4"
          date={post.published_at}
          readingTime={post.reading_time} />
      </header>
      <PostContent html={post.html} />
    </article>
  </Layout>
}

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug)

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))
  return { 
    paths,
    fallback: false
  }
}

export default PostDetailPage