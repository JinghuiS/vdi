Vdi 提供了一些功能和约束写法，但是需要 Vdi 来接管 vue 实例创建过程。

-   使用`vueModule`声明模块
-   使用`createModule`创建 vue 实例并创建 vueModule，挂载 dom

## 声明 vueModule

首先引入 vueModule,声明 module，并传入组件

-   declarations 代表该模块依附的组件，在之后创建模块的时候，`createModule`会自动把
    当前模块的依赖传递给组件

```ts
import { vueModule } from 'vdi'
import App from './App.vue'

export const AppModule = vueModule({
    declarations: App
})
```

在之前的[快速开始例子](/guide/quick-start#单独页面使用)里，我们声明了 [`CountService`](/guide/quick-start#单独页面使用) 服务，我们可以在当前模块中注入，这样在此模块组件之下的所有组件都可以使用这个服务。

```ts
import { vueModule } from 'vdi'
import App from './App.vue'

import { CountService } from './count.service.ts'

export const AppModule = vueModule({
    declarations: App,
    providers: [
        // 在快速开始中我们声明了CountService这个服务
        CountService
    ]
})
```

`vueModule`是可以相互引用的，你可以在模块中声明其他模块，这样可以方便的管理依赖。

-   在模块中声明其他模块，可以使用`imports`属性，这个属性是一个数组，可以传入多个模块
-   vdi 提供了不少模块，可以在这里查看

现在我们得到了一个完整的 vueModule 例子

```ts
//App.Module.ts
import { vueModule, CommonModule } from 'vdi'
import App from './App.vue'

import { CountService } from './count.service.ts'
/**
 * 声明一个 vueModule
 * @param declarations 当前模块依赖注入的组件
 * @param imports 注入其他模块
 * @param providers 注入依赖
 */
export const AppModule = vueModule({
    declarations: App,
    imports: [
        // vdi提供的常用模块，如果需要使用vdi的依赖注入模式的自定义指令，需要在这里引入
        CommonModule
    ],
    providers: [
        // 在快速开始中我们声明了CountService这个服务
        CountService
    ]
})
```

## 接管 vue 实例创建过程，并绑定 vueModule

在刚刚的例子里我们声明了[根模块](/guide/module#声明-vuemodule)，现在我们用`createModule`接管 vue 创建实例并把根模板绑定并创建出来

> -   createModule 会根据当前项目的 vue 库，创建 vue 实例
> -   createModule 会读取 module 中的 declarations，当做根组件传递给 vue 创建组件
> -   createModule 是一个异步函数, 会返回一个 Promise 对象，这个 Promise 对象
>     会在模块创建完成并且`APP_INITIALIZER`加载完成后 resolve 返回 vue 实例。

```ts
//main.ts
import { createModule } from 'vdi'
import { AppModule } from './App.Module.ts'

createModule(AppModule).then((vueInstance) => {
    //挂载
    vueInstance.mount('#app')
})
```

这样我们创建了 vue 实例绑定了 [AppModule](/guide/module#声明-vuemodule)，并且挂载到了 `#app` 元素上。
