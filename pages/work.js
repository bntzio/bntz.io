import withRedux from 'next-redux-wrapper'
import makeStore from './../store/makeStore'
import Layout from '../components/layout/'
import Work from '../components/Work'

const work = () => (
  <Layout>
    <Work />
  </Layout>
)

export default withRedux(makeStore)(work)
