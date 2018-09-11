import React from 'react'
import "../styles.scss"

import axios from 'axios'
import RSSParser from 'rss-parser'
const parser = new RSSParser()

const MEDIUM_RSS_URL = 'https://words.demaree.me/feed'

function getMediumPosts() {
    
}

export default class extends React.Component {
    static async getInitialProps({ req }) {
        let postsResponse = await axios.get("https://marsh-appliance.glitch.me/posts.json")
        let posts = postsResponse.data.map(({ title, link, pubDate, ...item}) => {
            return {
                title,
                link,
                pubDate,
                image: (item.twitter.twitterImage && item.twitter.twitterImage[0].src),
                description: item.twitter.twitterDescription
            }   
        })
        console.log(posts)
        return { posts }
    }
    
    render() {
        const { posts } = this.props

        return (
            <div className="container">
                <h1>Hi everyone</h1>
                <p>This is my new homepage, I guess?</p>
                {posts.map( post => (
                <article key={post.link}>
                    <h2><a href={post.link}>{post.title}</a></h2>
                    <p>{post.description}</p>
                    <p>{post.pubDate}</p>
                </article>
                ))}
            </div>
        )
    }
} 

