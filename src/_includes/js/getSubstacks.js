const axios = require('axios')

module.exports = async function() {
  const substacks = await axios.get("https://demaree.substack.com/api/v1/posts?limit=100&offset=0").then(res => res.data)

  return substacks
}