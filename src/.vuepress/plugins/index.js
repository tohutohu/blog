const { getPermalink } = require('@vuepress/shared-utils')
const path = require('path')
module.exports = (options, ctx) => {
  let md
  return {
    extendPageData ({_strippedContent, frontmatter, _filePath, _context: { markdown },  ...rest}) { 
      if (typeof _strippedContent !== 'string') return
      const slug = path.basename(_filePath, '.md')
      const pagePath = getPermalink({pattern: frontmatter.permalink, date: frontmatter.date, slug: slug})
      const {data: {__data_block: data}} = markdown.render(_strippedContent)
      if (data && data.images) {
        const imagePath = path.resolve(pagePath, data.images[0])
        console.log(imagePath)
      }
    }
    // TODO: add data to frontmatter.meta
  }
}