# VDI_ROUTER

获取当前 vue 实例中的 [router](https://router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95)

-   type

    ```ts
    const VDI_ROUTER = createIdentifier<Router>('VDI_ROUTER')
    ```

-   example

    ```ts
    import { Inject } from '@wendellhu/redi'
    import { VDI_ROUTER } from 'vdi'

    class Test {
        constructor(@Inject(VDI_ROUTER) public router: Router) {}
        startup() {
            this.router.push('/')
        }
    }
    ```
