const axios = require('axios')

module.exports = () =>
  new Promise(resolve => {
    axios.get('https://bitsandletters.club/wp-json/wp/v2/posts')
      .then(response => {
        resolve(response.data)
      })
  })