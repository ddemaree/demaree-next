const axios = require('axios')

module.exports = async () => {
  const posts = await axios.get('https://bitsandletters.club/wp-json/wp/v2/posts')
    .then(r => r.data)
    .then(d => d.map(post => ({ 
      ...post,
      eleventyComputed: { date: post.date_gmt }
    })))

  return {
    posts
  }
}