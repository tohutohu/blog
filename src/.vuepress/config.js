module.exports = {
  base: '/',
  serviceWorker: false,
  ga: 'UA-68129373-8',
  head: [
    ['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}],
    ['link', {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', 
      integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: "anonymous"}]
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'とーふとふのブログ',
      description: ''
    }
  },
  markdown: {
    lineNumber: true,
    config: md => {
      md.use(require('markdown-it-footnote'))
      md.set({
        breaks: true,
        linkify: true
      })
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
