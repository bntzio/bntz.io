const summary = require('../content/summary.json')

// get posts paths from the summary.sourceFileArray (blog)
export function getPostPaths () {
  const postPathsArray = summary.sourceFileArray
  let newPostPathsArray = []
  postPathsArray.forEach((postPath, i) => {
    if (postPath !== 'content/index.md' && postPath.includes('content/posts') === true) {
      newPostPathsArray.push(postPath)
    }
  })

  return newPostPathsArray
}

// get entry paths from the summary.sourceFileArray (journal)
export function getEntryPaths () {
  const entryPathsArray = summary.sourceFileArray
  let newEntryPathsArray = []
  entryPathsArray.forEach((entryPath, i) => {
    if (entryPath !== 'content/index.md' && entryPath.includes('content/entries') === true) {
      newEntryPathsArray.push(entryPath)
    }
  })

  return newEntryPathsArray
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
