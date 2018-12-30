module.exports = {
  base: '/',
  serviceWorker: false,
  ga: 'UA-68129373-8',
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-68129373-8' }
    ],
    '@vuepress/blog'
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
