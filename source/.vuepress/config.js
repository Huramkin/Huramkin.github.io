module.exports = {
  title: 'Huramkin-intl',
  description: 'description',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#b19693' }],
  ],
  theme: 'cherry',
  themeConfig: {
    hostname: 'https://intl.huramkin.com',
    docsRepo: 'Huramkin/Huramkin.github.io',
    docsDir: 'source',
    docsBranch: 'writing',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: false,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '归档',
        link: '/post/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    sidebar: false,
    comment: {
      service: 'disqus',
      shortname: '',
    },
  },
  markdown: {
    lineNumbers: true,
    plugins: [
      'abbr',
      'footnote',
      'ins',
      'sub',
      'sup',
    ],
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: ''
    }],
  ],
}
