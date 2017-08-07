import Post from '../components/Post'

const post = (props) => {
  let jsonPost = {}
  if (props.url.query) {
    if (props.url.query.fullUrl) {
      jsonPost = require(`../content${props.url.query.fullUrl}.json`)
    } else if (props.url.query.filePath) {
      jsonPost = require(`../${props.url.query.filePath}`)
    }
  }
  return (
    <div>
      <Post title={parseTitle(jsonPost)} body={parseBody(jsonPost)} />
    </div>
  )
}

function parseTitle (post) {
  return post.title
}

function parseBody (post) {
  return post.bodyHtml
}

export default post
