import Layout from '../components/Layout'
import Blog from '../components/Blog'
import jsonSummary from '../content/summary.json'
import { formatDate } from '../utils/date'
import { makeUrl, filterPosts } from '../utils/content'

const blog = () => {
  return (
    <Layout>
      <Blog posts={parsePosts({ jsonSummary })} />
    </Layout>
  )
}

function parsePosts (props) {
  let posts = []
  const postList = filterPosts(props.jsonSummary)
  postList.map((post, i) => {
    const href = makeUrl(post)
    const date = formatDate(post.date)
    const postObj = {
      title: post.title,
      key: i,
      date,
      href
    }
    posts.push(postObj)
  })
  return posts
}

export default blog
