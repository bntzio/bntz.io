import Link from 'next/link'

const Blog = ({ posts }) => {
  const renderPosts = () => {
    return posts.map(post => {
      return (
        <div key={post.key}>
          <Link href={`post?fullUrl=${post.href}`} as={post.href}>
            <h2>{post.title}</h2>
          </Link>
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
