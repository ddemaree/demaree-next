function getNamespaceFromPath(pathname = '') {
  let topLevelPaths = pathname.split('/').slice(1)

  if(topLevelPaths.length === 0 || topLevelPaths[0] === '')
    topLevelPaths.splice(0, 1, 'index')

  return topLevelPaths[0]
}

export default getNamespaceFromPath