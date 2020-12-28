
import axios from 'axios'
import { defaults } from 'lodash';

export const wordpress = axios.create({
  baseURL: "https://wp.demaree.space/wp-json/wp/v2"
})

export function getWpPosts(params = {}) {
  const defaultParams = {
    per_page: 100,
    '_embed': 1
  }

  return wordpress.get("/posts", {
    params: defaults({}, defaultParams, params)
  }).then(res => res.data) 
}

export function getWpPostsForIndex() {
  return getWpPosts({
    '_fields': 'title,custom_excerpt,slug,date_gmt,word_count,reading_time,_links'
  }).then(posts => posts.map(simplifyPost))
}

export function getSingleWpPost(slug, params={}) {
  return getWpPosts({ slug, ...params })
    .then(posts => (posts[0] || {}))
    .then(post => Object.assign({}, post, {
      html: post.content.rendered,
      title: post.title.rendered,
      published_at: post.date_gmt
    }))
}

const simplifyPost = post => {
  let featuredImage = null, imageInfo = null;
  
  if(post._embedded['wp:featuredmedia']) {
    const { media_details } = post._embedded['wp:featuredmedia'][0]
    const { medium, full } = media_details.sizes
    featuredImage = medium.source_url
    imageInfo = { width: full.width, height: full.height, source_url: full.source_url }
  }

  return {
    title: post.title.rendered,
    date: post.date_gmt,
    slug: post.slug,
    excerpt: post.custom_excerpt,
    reading_time: Math.ceil(post.word_count / 225.0),
    featuredImage,
    imageInfo
  }
}