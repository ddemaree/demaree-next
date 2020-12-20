import { useEffect, useRef } from "react"
import c from 'classnames'

import { getPosts, getSinglePost } from "../../lib/data/ghostApi"
import { formatDate } from "../../lib/utils/date"
import Layout from "../../components/Layout"

function PostContent({ html }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Fix image aspect ratios in gallery cards
    const container = containerRef.current
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        var container = image.closest('.kg-gallery-image');
        var width = image.attributes.width.value;
        var height = image.attributes.height.value;
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    });
  })

  return <div ref={containerRef} className="dd-prose" dangerouslySetInnerHTML={{__html: html}} />
}

function PostMeta({ date, readingTime, className }) {
  return <div className={c(className, 'flex')}>
    <time dateTime={date}>{formatDate(date)}</time>
    <span className="mx-2">•</span>
    <span className="reading-time">{readingTime} min read</span>
  </div>
}

function PostDetailPage({ post }) {
  return <Layout>
    <article className="max-w-3xl mx-auto p-8">
      <header>
        <h1 className="text-4xl font-semibold leading-snug">{post.title}</h1>
        {post.excerpt && <h2 className="text-inkMedium text-2xl leading-snug">{post.excerpt}</h2>}
        <PostMeta 
          className="text-inkMedium my-4"
          date={post.published_at}
          readingTime={post.reading_time} />
        <PostContent html={post.html} />
      </header>
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