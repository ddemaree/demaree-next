import Head from 'next/head'
import Layout from "../components/Layout";
import PostContent from "../components/PostContent";
import { getSinglePage } from "../lib/data/ghostApi";

function AboutPage({ pageData }) {
  return <Layout activeNav="about-me">
    <Head>
      <title>About Me • David Demaree's site</title>
    </Head>
    <div className="sm:h-96 md:max-w-4xl mx-auto">
      <picture className="w-full h-full object-cover object-center">
        <source media="(max-width: 480px)" srcSet="//res.cloudinary.com/demaree/image/upload/c_crop,g_face,h_480,w_480,q_auto/v1523208768/david-2018_arkh7a.jpg, //res.cloudinary.com/demaree/image/upload/c_crop,g_face,h_960,w_960,q_auto/v1523208768/david-2018_arkh7a.jpg 2x" />
        <source media="(min-width: 480px)" srcSet="//res.cloudinary.com/demaree/image/upload/c_crop,g_face,h_1080,w_1920,q_auto/v1523208768/david-2018_arkh7a.jpg" />
        <img className="m-0 block h-full w-full object-cover md:rounded-xl" alt="Photo of David Demaree, holding a camera while looking into mirrors" src="//res.cloudinary.com/demaree/image/upload/c_crop,g_face,h_1237,w_2200/v1523208768/david-2018_arkh7a.jpg" />
      </picture>
    </div>
    <div className="pt-8 md:pt-16 pb-16">
      <PostContent html={pageData.html} />
    </div>
  </Layout>
}

export default AboutPage

export async function getStaticProps() {
  const pageData = await getSinglePage('__about-me')

  return {
    props: {
      pageData
    }
  }
}