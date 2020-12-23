import { includes } from 'lodash';
import Layout from '../components/Layout';
import PostContent from '../components/PostContent';
import { getPages, getSinglePage } from '../lib/data/ghostApi';

function Page({ page }) {
  const { title, html } = page

  return <Layout>
    <div className="py-8">
      <h1 className="max-w-2xl mx-auto px-8 font-sans-display pb-16 text-center text-4xl text-inkBold">{title}</h1>
      <PostContent html={page.html} />
    </div>
  </Layout>
}

export default Page

export async function getStaticProps({ params }) {
  const page = await getSinglePage(params.pageSlug)
  return {
    props: {
      page
    }
  }
}

export async function getStaticPaths() {
  const pages = await getPages()
  const visiblePages = pages.filter(p => {
    const tagNames = p.tags.map(t => t.name)
    const pageIsHidden = includes(tagNames, '#hidden')
    return !pageIsHidden
  })

  const paths = pages.map(page => ({params: { pageSlug: page.slug }}))

  return {
    paths,
    fallback: false
  }
}