const summary = require('../content/summary.json')

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
