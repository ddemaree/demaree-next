const axios = require('axios')

module.exports = async () => {
  const posts = await axios.get('https://bitsandletters.club/wp-json/wp/v2/posts')
    .then(r => r.data)
    .then(d => d.map(post => ({ 
      ...post,
      eleventyComputed: { date: post.date_gmt }
    })))

  const fragments = await axios.get('https://bitsandletters.club/wp-json/wp/v2/fragments')
    .then(r => r.data)
    .then(data => {
      return data.reduce((allFragments, currentFragment) => {
        const { slug, date_gmt, modified_gmt } = currentFragment

        const image = currentFragment.acf['fragment_image'] || null

        allFragments[currentFragment.slug] = {
          created: date_gmt,
          modified: modified_gmt,
          title: currentFragment.title['rendered'] || '',
          content: currentFragment.content['rendered'] || '',
          slug,
          image
        }

        return allFragments
      }, {})
    })
  
  console.log(fragments)

  return {
    posts,
    fragments
  }
}