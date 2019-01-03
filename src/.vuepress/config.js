module.exports = {
  base: '/',
  serviceWorker: false,
  ga: 'UA-68129373-8',
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-68129373-8' }
    ],
    '@vuepress/blog',
    require('./plugins/index.js'),
    require('./plugins/comments.js')
  ],
  head: [
    ['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}],
    ['link', {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', 
      integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: "anonymous"}],
    ['script', {src: "https://platform.twitter.com/widgets.js", charset: "utf-8", async: true}]
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'とーふとふのブログ',
      description: ''
    }
  },
  extendMarkdown(md) {
    md.use(require('markdown-it-footnote'))
    md.set({
      breaks: true,
      linkify: true
    })

    const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    }

    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      if (!Array.isArray(md.$data.__data_block.images)) {
        md.$data.__data_block.images = []
      }
      md.$data.__data_block.images.push(tokens[idx].attrs[0][1])

      return defaultRender(tokens, idx, options, env, self)
    }

    md.block.ruler.after('heading', 'after-title', state => {
      if (state['after-title']) return false
      const lastToken = state.tokens[state.tokens.length - 1]
      if (lastToken && lastToken.type === 'heading_close' && lastToken.tag === 'h1') {
        state.push('after-title', '', 0)
        state['after-title'] = true
      }
      return false
    })
    md.renderer.rules['after-title'] = function(tokens, idx, options, env, renderer) {
      md.$data.__data_block.po = 'popopo'
      return `<article-info />`

    }
  },
  themeConfig: {
    nav: [
      {type: 'link', text: 'about', link: '/about/'},
      {type: 'link', text: 'twitter', link: 'https://twitter.com/to_hutohu'},
      {type: 'link', text: 'github', link: 'https://github.com/tohutohu'}
    ],
    lastUpdated: true
  },
  evergreen: true
}
