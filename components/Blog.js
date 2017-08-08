import uuid from 'uuid/v4'
import { Link } from '../routes'

const Blog = ({ posts }) => {
  const renderPosts = () => {
    return posts.map(post => {
      return (
        <div key={uuid()}>
          <h2>
            <Link route="post" params={{ slug: post.slug }}>
              <a>{post.title}</a>
            </Link>
          </h2>
        </div>
      )
    })
  }
  return (
    <div>
      {renderPosts()}
    </div>
  )
}

export default Blog
