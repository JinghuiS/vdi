# VdiRouterModule

forRoot 把 vue-router 绑定到当前 vue 实例上

-   type
    ```ts
    class VdiRouterModule {
        static forRoot(config: VdiVueRouterOptions): ModuleWithProviders
    }
    ```
-   Details  
    `forRoot`的入参跟[vue-router 的 RouterOptions](https://router.vuejs.org/zh/api/#parsequery)几乎保持一致，只是[routes](https://router.vuejs.org/zh/api/#routes)因为分层依赖注入的特性，我们需要做一些处理  
    `forRoot`会返回[vueModule](/guide/API/vueModule)，其中包含了创建路由守卫的服务  
    入参 routes 类型要经过处理

    -   类型为

        ```ts
        routes:VdiRouterRaw[]
        ```

    -   其中了 module 属性，当需要多层依赖注入时，可以用此属性代替 component 属性，module 属性可以是一个 vueModule，最后会被解析成绑定此 vueModule 的 vueModule.declarations 如果 declarations 不存在，则会返回[router-view](https://router.vuejs.org/zh/api/#router-view-props)

-   Example
    ```ts
    import { vueModule, VdiRouterModule } from 'vdi'
    import { createWebHashHistory } from 'vue-router'
    import { TestModule } from 'app/test/test.module'
    export const AppRoutingModule = vueModule({
        imports: [
            VdiRouterModule.forRoot({
                history: createWebHashHistory(),
                routes: [
                    {
                        path: '/test',
                        // TestModule没有declarations时，返回<router-view />
                        module: TestModule,
                        children: [
                            {
                                path: '/test/test-child',
                                // 此组件可以获取TestModule的依赖
                                component: () => import('./app/test/test.vue')
                            }
                        ]
                    }
                ]
            })
        ]
    })
    ```
