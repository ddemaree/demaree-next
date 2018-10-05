import axios from 'axios'
import _forEach from 'lodash/forEach'
import _pick from 'lodash/pick'

const wpClient = axios.create({
  baseURL: 'https://bitsandletters.club/wp-json'
})

export function transformPost(postData, includeContent = false) {
  let pickFields = ['guid', 'title', 'acf', 'excerpt', 'date_gmt', 'modified_gmt', 'slug', 'status', 'format', 'categories', 'tags']

  if(includeContent) pickFields.push('content')

  _forEach(postData, (value, key, coll) => {
    if(key === 'guid') {
      coll.guid = value.rendered
    }
    if(key === 'content') {
      postData.content.rendered = stripTwitterWidgetTags(postData.content.rendered)
    }
  })
  console.log(postData)
  return _pick(postData, pickFields)
}

function stripTwitterWidgetTags(content) {
  return content.replace(/<script .+platform\.twitter\.com\/widgets.js"[^>]*><\/script>/, '<!-- removed twitter js here -->')
}

export const getPosts = (args = {}) => {
  let { page, includeContent } = args
  page = page || 0

  return wpClient.get('/dd/v1/posts?context=edit')
    .then(({ data }) => data.map(d => transformPost(d, !!includeContent)))
    .catch(error => {
      console.log(error)
      return []
    })
}

export const getPostWithSlug = (slug) => {
  return wpClient.get('/dd/v1/post?context=edit&slug=' + slug)
    .then(({ data }) => transformPost(data, true))
    .catch(error => {
      console.log(error)
      return {}
    })
}