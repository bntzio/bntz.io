const summary = require('../content/summary.json')

export function getPaths () {
  const postPathsArray = summary.sourceFileArray
  let newPostPathsArray = []
  postPathsArray.forEach((postPath, i) => {
    if (postPath !== 'content/index.md') {
      newPostPathsArray.push(postPath)
    }
  })

  return newPostPathsArray
}

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
