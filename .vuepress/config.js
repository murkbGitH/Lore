const summary = require('./summary.js');

module.exports = {
    title: 'Lore',
    description: '2 ちゃんねるオカルト板ロア風，140 字程度の創作小説集',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/Lore/' }
        ],
        sidebar: {
            '/article/': summary.genSidebarConfig('目次')
        },
        search: false,
    },
    head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/Lore/',
    dest: 'docs'
}