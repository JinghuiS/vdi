import type { UserConfig } from 'vitepress'

const config: UserConfig = {
    base: '/Vdi/',
    title: 'Vdi',
    description: '简单的vue 依赖注入',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        nav: [
            {
                text: '文档',
                link: '/guide/quick-start',
                activeMatch: '^/guide/'
            },
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
                },
                {
                    text: 'Vdi 接管 vue 项目',
                    children: [
                        { text: '模块化', link: '/guide/module' },
                        {
                            text: '路由多层模块',
                            link: '/guide/router-module'
                        },
                        {
                            text: '依赖注入风格调用vue方法',
                            link: '/guide/di-style-vue-api'
                        }
                    ]
                },
                {
                    text: 'API',
                    children: [
                        {
                            text: 'hooks',
                            children: [
                                {
                                    text: 'onProvider',
                                    link: '/guide/API/hooks/onProvider'
                                },
                                {
                                    text: 'useDependency',
                                    link: '/guide/API/hooks/useDependency'
                                }
                            ]
                        },
                        {
                            text: 'router',
                            children: [
                                {
                                    text: 'VdiRouterModule',
                                    link: '/guide/API/router/VdiRouterModule'
                                },
                                {
                                    text: 'ROUTER_GUARD',
                                    link: '/guide/API/router/ROUTER_GUARD'
                                }
                            ]
                        },
                        {
                            text: 'directive',
                            children: [
                                {
                                    text: 'DirectiveModule',
                                    link: '/guide/API/directive/DirectiveModule'
                                },
                                {
                                    text: 'DIRECTIVE',
                                    link: '/guide/API/directive/DIRECTIVE'
                                }
                            ]
                        },
                        {
                            text: '识别符',
                            children: [
                                {
                                    text: 'APP_INITIALIZER',
                                    link: '/guide/API/identifier/APP_INITIALIZER'
                                }
                            ]
                        },
                        {
                            text: 'createModule',
                            link: '/guide/API/createModule'
                        },
                        {
                            text: 'vueModule',
                            link: '/guide/API/vueModule'
                        }
                    ]
                }
            ]
        }
    }
}

export default config
