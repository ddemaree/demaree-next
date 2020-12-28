import axios from 'axios'

const wpComAPI = axios.create({
  baseURL: "https://public-api.wordpress.com/rest/v1.1/sites/ddemaree.wordpress.com" 
})

const wpAPI = axios.create({
  baseURL: "https://wp.demaree.space/wp-json/wp/v2"
})

function WordPressPosts({ posts }) {
  return <h1>Hello</h1>
}

export default WordPressPosts

export async function getStaticProps({ params }) {
  const posts = await wpAPI.get("/posts", {
    params: {
      per_page: 100,
      '_embed': 1
    }
  }).then(res => res.data)
  console.log(posts)

  return {
    props: { posts }
  }
}