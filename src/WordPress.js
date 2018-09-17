import axios from 'axios'
import _forEach from 'lodash/forEach'

const wpClient = axios.create({
  baseURL: 'https://bitsandletters.club/wp-json/wp/v2'
})

export function transformPost(postData) {
  let { guid, ...rawPost } = postData

  return Object.extend({}, rawPost, {
    guid: guid.rendered
  })
}

export const getPosts = () => {
  return wpClient.get('/posts')
    .then(({ data }) => data)
    .catch(error => {
      console.log(error)
      return []
    })
}