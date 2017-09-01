const summary = require('../content/summary.json')
const moment = require('moment')
const _ = require('lodash')

// get posts/entries paths from the summary.sourceFileArray (blog + journal)
export function getPaths (type) {
  const pathsArray = summary.sourceFileArray
  let newPathsArray = []
  pathsArray.forEach((path, i) => {
    if (path !== 'content/index.md' && path.includes(`content/${type}`) === true) {
      newPathsArray.push(path)
    }
  })

  return newPathsArray
}

// get the slug and path for each summary.fileMap
export function getSlugsAndPaths () {
  const fileMap = summary.fileMap
  let arr = []
  Object.keys(fileMap).forEach(key => {
    if (key.includes('index.json') === false) {
      arr.push({slug: fileMap[key].slug, path: key})
    }
  })

  return arr
}

// sort posts by descending order
export function orderPosts (posts) {
  const sortedPosts = _.sortBy(posts, o => {
    return new moment(o.date, 'MM/DD/YYYY').format('MM DD YYYY')
  }).reverse()

  return sortedPosts
}

// get the last period (now) eg: 4, 2, 32, 7, 46 to build the url -> /now/46
export function getLastPeriod () {
  const nowPaths = getPaths('nows')
  let numbers = []
  nowPaths.map(nowPath => {
    const number = nowPath.replace(/\D+/g, '') // regex to get the numbers from a string
    numbers.push(parseInt(number))
  })

  return Math.max(...numbers)
}
