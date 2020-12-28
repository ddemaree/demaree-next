import { getWpPostsForIndex } from '../../lib/data/wordpressApi'
import BlogPostCard from '../../components/BlogPostCard'
import Layout from '../../components/Layout'

function WordPressPosts({ posts }) {
  return <Layout>
    <div className="max-w-2xl p-8 mx-auto">
    {posts.map(({ title, date, slug, reading_time, excerpt, featuredImage }) => 
      <BlogPostCard
      key={slug}
      title={title}
      pubDate={date}
      link={`/wp/${slug}`}
      readingTime={reading_time}
      excerpt={excerpt}
      featuredImage={featuredImage}
      className="mb-8" />)}
    </div>
  </Layout>
}

export default WordPressPosts

export async function getStaticProps({ params }) {
  const posts = await getWpPostsForIndex()
  return {
    props: { posts }
  }
}
