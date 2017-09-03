import fetch from 'isomorphic-unfetch'
import Book from '../components/Book'
import Layout from '../components/layout/'
import { getSlugsAndPaths } from '../utils/content'

const book = ({ title, body, author, rating }) => (
  <Layout>
    <Book title={title} body={body} author={author} rating={rating} />
  </Layout>
)

const findBySlug = async (slug) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const slugsAndPaths = await getSlugsAndPaths()
  let entryPath
  let bookList

  slugsAndPaths.forEach(file => {
    if (file.slug === slug) {
      entryPath = file.path
    }
  })

  const res = await fetch(`${baseUrl}/${entryPath}`)
  bookList = await res.json()

  return bookList
}

book.getInitialProps = async ({ query }) => {
  const slug = query.slug
  const book = await findBySlug(slug)

  return {
    title: book.title,
    body: book.bodyHtml,
    author: book.author,
    rating: book.rating
  }
}

export default book
