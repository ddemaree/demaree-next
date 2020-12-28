import Layout from "../../components/Layout"
import PostContent from "../../components/PostContent"
import { getSingleWpPost, getWpPosts } from "../../lib/data/wordpressApi"

function WpPostPage({ post }) {
  const { html } = post

  return <Layout>
    <PostContent html={html} />
  </Layout>
}

export default WpPostPage

export async function getStaticProps({ params }) {
  const { slug } = params
  const post = await getSingleWpPost(slug)

  const [catTerms, tagTerms] = post._embedded['wp:term']
  console.log(catTerms, tagTerms)
  const categories = catTerms.map(({ name, slug, ...term }) => ({ name, slug }))

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = await getWpPosts()
  const paths = posts.map(({ slug }) => ({ params: {slug} }))
  return {
    paths,
    fallback: false
  }
}