# APP_INITIALIZER

在 vue 实例挂载之前执行 promise 的[识别符](https://redi.wendell.fun/docs/identifier)

-   ### type
    ```ts
    const APP_INITIALIZER = createIdentifier<APP_INITIALIZER_TYPE>(
        'Application Initializer'
    )
    ```
    ```ts
    type APP_INITIALIZER_TYPE = {
        startup: () => Promise<any>
    }
    ```
-   ### Details

    当 APP_INITIALIZER 被传入根模块时，它会在 vue 实例挂载之前执行，并且等待 APP_INITIALIZER 运行完成才会继续执行

-   ### Example

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
    //可以在vue挂载之前发送请求，并且返回响应数据注入vue实例中
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
