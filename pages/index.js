import withRedux from 'next-redux-wrapper'
import makeStore from './../store/makeStore'
import Layout from '../components/layout/'
import Home from '../components/Home'

const app = () => (
  <Layout>
    <Home />
  </Layout>
)

export default withRedux(makeStore)(app)
