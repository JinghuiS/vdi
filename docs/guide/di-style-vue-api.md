## 如何使用依赖注入风格的 vue 方法

相信跟着例子到这里你会有疑问，如果使用`createModule`创建 vue 实例，在 createModule 的返回中使用`vue.use`,`vue.directive`,`vue.component`等方法，
还需要 createModule,vueModule 干什么

其实 Vdi 提供了 vueModule 风格的自定义指令，路由守卫等功能，当然也可以自定义通过查看[DirectiveModule](https://github.com/JinghuiS/vdi/tree/main/packages/common/directive)来学习

> -   createModule 创建的 vue 实例，可以通过[识别符](https://redi.wendell.fun/docs/identifier)`VUE_APP`获取当前 vue 实例，Vdi 的`DirectiveModule`，`VdiRouterModule`都是通过`VUE_APP`实现全局绑定的
>
> -   在使用自定义指令时不需要引入`DirectiveModule`，引入`CommonModule`即可，我们以后会把常用的 vue 功能都放在这个 module 中
>
> -   推荐把全局功能单独放在一个 CoreModule 中，再在根 module 中引入这样更便于管理，大致目录例子如下:
>     ```
>         ├── core
>         │   ├── routerGuard
>         │   ├── directive
>         │   ├── component
>         │   └── Core.Module.ts
>     ```

## 使用 Vdi 提供的识别符

在刚刚的例子中我们使用了 redi 的[识别符](https://redi.wendell.fun/docs/identifier)`VUE_APP`，这个识别符可以获取当前 vue 实例，其实 Vdi 提供了不少识别符  
以`APP_INITIALIZER`为例，当它作为依赖传入根模块时，Vdi 会先执行`APP_INITIALIZER`中的 startup 方法，等待 startup 执行结束再把 vue 实例返回出来，这样可以实现在 vue 挂载之前发送请求，并且返回响应数据注入 vue 实例中
::: details 例子

```ts
import { ref } from 'vue'
import { Inject } from '@wendellhu/redi'
import {
    APP_INITIALIZER,
    APP_INITIALIZER_TYPE,
    createModule,
    vueModule,
    CommonModule
} from 'vdi'

import App from './App.vue'

class TestReactiveService {
    test = ref('')
}

class TestAppInitializer implements APP_INITIALIZER_TYPE {
    constructor(
        @Inject(TestReactiveService)
        public TestReactiveService: TestReactiveService
    ) {}
    startup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.TestReactiveService.test.value = 'hello world'
                resolve(true)
            }, 1000)
        })
    }
}

const AppModule = vueModule({
    declarations: App,
    imports: [CommonModule, AppRouteingModule],
    providers: [
        [TestReactiveService],
        //会在mount之前执行,并且等待startup执行完毕
        [APP_INITIALIZER, { useClass: TestAppInitializer }]
    ]
})

createModule(AppModule).then((app) => {
    app.mount('#app')
})
```

:::
