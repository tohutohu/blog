export function resolveSidebarItems (page, route, site, localePath) {
  let pages = site.pages
  const list = []
  pages.forEach(pa => {
    if (pa.frontmatter.exclude) {
      return
    }
    let pathList = pa.path.split('/').filter(p => p !== '')
    if (pathList.length > 2) {
      pathList = pathList.slice(0, 2)
    }
    let tmp = list
    let nowPath = ''
    let now
    pathList.forEach((name, i) => {
      nowPath = nowPath + '/' + name
      now = tmp.find(e => e.path === nowPath + '/')
      if (!now) {
        tmp.push({
          type: (i===1?'auto':'group'),
          title: name,
          path: (nowPath + '/'),
          collapsable: true,
          children: []
        })
        now = tmp.find(e => e.path === nowPath+'/')
      } 
      tmp = now.children
    })
  })
  return [page, ...list]
}

