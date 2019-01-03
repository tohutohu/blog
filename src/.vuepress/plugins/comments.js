const comments = require('../_data/comments.json')

module.exports = (options, ctx) => {
  console.log(comments)
  return {
    extendPageData($page) {
      $page.comments = comments[$page.key] || []
    }
  }
}