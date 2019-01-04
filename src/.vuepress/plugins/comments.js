const comments = require('../_data/comments.json')

module.exports = (options, ctx) => {
  return {
    extendPageData($page) {
      $page.comments = comments[$page.key] || []
    }
  }
}