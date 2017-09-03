import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/'
import BookList from '../components/BookList'
import { getPaths } from '../utils/content'

const books = ({ books }) => (
  <Layout>
    <BookList books={books} />
  </Layout>
)

books.getInitialProps = async ({ req }) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const paths = await getPaths('books')
  let bookList = []

  for (let path of paths) {
    const jsonFilePath = path.replace('.md', '.json')
    const res = await fetch(`${baseUrl}/static/${jsonFilePath}`)
    const data = await res.json()
    bookList.push(data)
  }

  return { books: bookList }
}

export default books
