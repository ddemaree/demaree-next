import React from 'react'
import "../styles.scss"

import heroImg from '../assets/romain-vignes-53940-unsplash.jpg'

import axios from 'axios'
import RSSParser from 'rss-parser'
const parser = new RSSParser()
import moment from 'moment'

const MEDIUM_RSS_URL = 'https://words.demaree.me/feed'

export default class extends React.Component {
    static async getInitialProps({ req }) {
        let postsResponse = await axios.get("https://us-central1-dd-ftw.cloudfunctions.net/rss-unfurler-20180911")
        let allPosts = postsResponse.data.map(({ title, link, pubDate, ...item}) => {
            return {
                title,
                link,
                pubDate,
                image: (item.twitter.twitterImage && item.twitter.twitterImage[0].src),
                description: item.twitter.twitterDescription
            }   
        })
        
        let posts = allPosts.filter(post => moment(post.pubDate).isAfter("2018-01-01"))
        return { posts }
    }
    
    render() {
        const { posts } = this.props

        return (
            <div className="container">
                <h1>Hi everyone</h1>
                <p>This is my new homepage, I guess?</p>
                <img src={heroImg} />

                <h2>Writing on Medium</h2>
                {posts.map( post => (
                <article className="medium-post" key={post.link}>
                    <h3><a href={post.link}>{post.title}</a></h3>
                    <p>{post.description}</p>
                    <p>{post.pubDate}</p>
                </article>
                ))}
            </div>
        )
    }
} 

