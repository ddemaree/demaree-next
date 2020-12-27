import axios from 'axios'

const wpComAPI = axios.create({
  baseURL: "https://public-api.wordpress.com/rest/v1.1/sites/ddemaree.wordpress.com" 
})

function WordPressPosts({ posts }) {
  return <h1>Hello</h1>
}

export default WordPressPosts

export async function getStaticProps({ params }) {
  const posts = await wpComAPI.get("/posts").then(res => res.data)
  console.log(posts)

  return {
    props: { posts }
  }
}