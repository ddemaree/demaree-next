const axios = require('axios')
const _pick = require('lodash/pick')

module.exports = () =>
  new Promise(resolve => {
    axios.get('https://bitsandletters.club/wp-json/wp/v2/posts')
      .then(response => {
        const { data } = response
        const posts = data.map(origPost => {
          const html = origPost.content.rendered
          const title = origPost.title.rendered
          const fields = _pick(origPost, ['excerpt_raw', 'format', 'word_count', 'slug', 'type', 'status', 'date_gmt', 'modified_gmt'])
          return { ...fields, html, title }
        })
        resolve(posts)
      })
  })