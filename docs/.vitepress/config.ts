import type { UserConfig } from 'vitepress'

const config: UserConfig = {
    base: '/vdi/',
    title: 'vdi',
    description: '简单的vue 依赖注入',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        nav: [
            { text: '文档', link: '/guide/', activeMatch: '^/guide/' },
            {
                text: 'DEMO',
                link: 'https://stackblitz.com/edit/vite-y7m4fy?file=main.tsx'
            },
            {
                text: 'Github',
                link: 'https://github.com/JinghuiS/vdi'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '基础',
                    children: [{ text: '快速开始', link: '/guide/quick-start' }]
                }
            ]
        }
    }
}

export default config
