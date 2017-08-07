import Layout from './Layout'

const Post = (props) => {
  return (
    <Layout>
      <h2>{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
    </Layout>
  )
}

export default Post
