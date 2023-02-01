import type { UserConfig } from 'vitepress'

const config: UserConfig = {
    base: '/',
    title: 'Vdi',
    description: '简单的vue 依赖注入',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        nav: [
            {
                text: 'docs',
                link: '/guide/quick-start',
                activeMatch: '^/guide/'
            },
            {
                text: '中文文档',
                link: '/zh/index',
                activeMatch: '^/zh/'
            },
            {
                text: 'old-docs',
                link: '/old-docs/quick-start',
                activeMatch: '^/old-docs/'
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
                        }
                    ]
                }
            ],
            '/old-docs/': [
                {
                    text: '基础',
                    children: [
                        { text: '快速开始', link: '/old-docs/quick-start' }
                    ]
                },
                {
                    text: 'Vdi 接管 vue 项目',
                    children: [
                        { text: '模块化', link: '/old-docs/module' },
                        {
                            text: '路由多层模块',
                            link: '/old-docs/router-module'
                        },
                        {
                            text: '依赖注入风格调用vue方法',
                            link: '/old-docs/di-style-vue-api'
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
                                    link: '/old-docs/API/hooks/onProvider'
                                },
                                {
                                    text: 'useDependency',
                                    link: '/old-docs/API/hooks/useDependency'
                                },
                                {
                                    text: 'overlay',
                                    children: [
                                        {
                                            text: 'useOverlay',
                                            link: '/old-docs/API/hooks/overlay/useOverlay'
                                        },
                                        {
                                            text: 'useOverlayRef',
                                            link: '/old-docs/API/hooks/overlay/useOverlayRef'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'router',
                            children: [
                                {
                                    text: 'VdiRouterModule',
                                    link: '/old-docs/API/router/VdiRouterModule'
                                },
                                {
                                    text: 'ROUTER_GUARD',
                                    link: '/old-docs/API/router/ROUTER_GUARD'
                                },
                                {
                                    text: 'VDI_ROUTER',
                                    link: '/old-docs/API/router/VDI_ROUTER'
                                }
                            ]
                        },
                        {
                            text: 'directive',
                            children: [
                                {
                                    text: 'DirectiveModule',
                                    link: '/old-docs/API/directive/DirectiveModule'
                                },
                                {
                                    text: 'DIRECTIVE',
                                    link: '/old-docs/API/directive/DIRECTIVE'
                                }
                            ]
                        },
                        {
                            text: '识别符',
                            children: [
                                {
                                    text: 'APP_INITIALIZER',
                                    link: '/old-docs/API/identifier/APP_INITIALIZER'
                                }
                            ]
                        },
                        {
                            text: 'createModule',
                            link: '/old-docs/API/createModule'
                        },
                        {
                            text: 'vueModule',
                            link: '/old-docs/API/vueModule'
                        }
                    ]
                }
            ]
        }
    }
}

export default config
