import axios from 'axios'
import moment from 'moment'

const POSTS_API = "https://us-central1-dd-ftw.cloudfunctions.net/rss-unfurler-20180911"

export default () => axios.get(POSTS_API)
  .then(({ data }) => {
    return data.map(({ title, link, pubDate, ...item }) => ({
      title,
      link,
      pubDate,
      image: (item.twitter.twitterImage && item.twitter.twitterImage[0].src),
      description: item.twitter.twitterDescription
    })).filter(post => moment(post.pubDate).isAfter("2018-01-01"))
  })