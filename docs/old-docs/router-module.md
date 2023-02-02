## 根据路由分层依赖注入

在快速开始的例子中，我们使用了`onProvider`简单的实现了多层注入，但是完全使用`onProvider`进行分层注入有很多缺点：

-   `onProvider`只是放置在组件中，后期不容易精准定位依赖
-   `onProvider`只能注入依赖，不能使用模块，不够灵活

为了更好的体验，这时我们可以借助[vue-router](https://router.vuejs.org/guide/)实现分层依赖注入，首先安装[vue-router](https://router.vuejs.org/guide/)

```sh
npm install vue-router
```

## 路由模块

创建文件 App.routing.module.ts,引入`VdiRouterModule`,当然也可以直接在[AppModule](/old-docs/module#声明-vuemodule)的`imports`中引入，但是为了更好维护，我们还是声明一个名为 AppRouteingModule 的 vueModule 模块并放在单独文件中
类似于下方的例子

> -   VdiRouterModule 会读取当前项目的 vue-router 库 使用，只是改成依赖注入的模式
> -   VdiRouterModule.forRoot 的入参和 vue-router 保持一致，除了 routes 我们做过单独的处理
>
> -   我们也提供了依赖注入模式的路由守卫，具体可以查看这里
>
> -   需要多层依赖注入时,在父级路由使用 module 而不是 component，module 接受一个 vueModule,并且返回一个没有样式,绑定当前 vueModule 的 [router-view](https://router.vuejs.org/api/#name) 组件,
>     当传递 declarations 属性后，会返回 declarations 传递的组件并把 vueModule 绑定上去

```ts
//App.routing.module.ts
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
                    module: TestModule,
                    children: [
                        {
                            path: '/test/test-child',
                            component: () => import('./app/test/test.vue')
                        }
                    ]
                }
            ]
        })
    ]
})
```
