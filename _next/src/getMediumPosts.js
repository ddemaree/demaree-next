import axios from 'axios'
import moment from 'moment'

import RssParser from 'rss-parser'
const parser = new RssParser()

const MEDIUM_RSS_FEED = "https://words.demaree.me/feed"
const POSTS_API = "https://us-central1-dd-ftw.cloudfunctions.net/rss-unfurler-20180911"

export const getUnfurledMediumPosts = () => axios.get(POSTS_API)
  .then(({ data }) => {
    return data.map(({ title, link, pubDate, ...item }) => ({
      title,
      link,
      pubDate,
      image: (item.twitter.twitterImage && item.twitter.twitterImage[0].src),
      description: item.twitter.twitterDescription
    })).filter(post => moment(post.pubDate).isAfter("2018-01-01"))
  })

function filterPosts(posts) {
  return posts.filter(post => moment(post.pubDate).isAfter("2018-01-01")) 
}

export const getMediumPosts = () => {
  return axios.get(MEDIUM_RSS_FEED)
    .then(({ data }) => parser.parseString(data))
    .then(feed => filterPosts(feed.items))
}

export default getUnfurledMediumPosts