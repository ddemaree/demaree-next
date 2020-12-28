import { getSingleWpPost, getWpPosts } from "../../lib/data/wordpressApi"
import Layout from "../../components/Layout"
import PostContent from "../../components/PostContent"
import PostMeta from "../../components/PostMeta"
import Link from "next/link"

function FeaturedImageUnit({ image, className }) {
  const { sizes } = image.media_details

  return <figure className={className}>
    <img src={sizes.large.src} />
  </figure>
}

function WpPostPage({ post, categories, tags, featuredImage }) {
  const { title, html, custom_excerpt, reading_time, published_at } = post

  categories = categories || []
  const primaryCategory = categories[0]

  return <Layout>
    <article className="py-12">
      <header className="dd-w-inset mx-auto max-w-2xl mb-16">
        {primaryCategory && <div className="eyebrow font-sans-display mb-3">
          <Link href={`/wp/categories/${primaryCategory.slug}`}><a className="uppercase text-accent tracking-widest font-medium">{primaryCategory.name}</a></Link>
        </div>}
        <h1 className="text-4xl font-semibold leading-snug text-inkBold" dangerouslySetInnerHTML={{__html: title}} />
        {custom_excerpt && <h2 className="text-inkMedium text-2xl leading-snug">{custom_excerpt}</h2>}
        <PostMeta 
          className="text-inkMedium my-4"
          date={published_at}
          readingTime={reading_time} />
      </header>

      {featuredImage && <FeaturedImageUnit image={featuredImage} />}

      <PostContent html={html} />
      {tags && <div className="max-w-2xl mx-auto my-16">
        {tags.map(({name, slug}) => <Link href={`/wp/tags/${slug}`}><a className="inline-block py-1 px-4 rounded-md bg-accent text-inkStrong mr-4 mb-4 nowrap leading-loose">{name}</a></Link>)}
      </div>}
    </article>
  </Layout>
}

export default WpPostPage

export async function getStaticProps({ params }) {
  const { slug } = params
  const post = await getSingleWpPost(slug)

  const [catTerms, tagTerms] = post._embedded['wp:term']
  const termMapper = ({ name, slug, ...term }) => ({ name, slug })
  const categories = catTerms.map(termMapper)
  const tags = tagTerms.map(termMapper)

  const featuredImage = (post._embedded['wp:featuredmedia'] || [])[0]

  return {
    props: {
      post,
      categories,
      tags,
      featuredImage
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