# ROUTER_GUARD

注入路由守卫的[识别符](https://redi.wendell.fun/docs/identifier)

-   ### type
    ```ts
    const ROUTER_GUARD =
        createIdentifier<RouterGuardImplements[]>('ROUTER_GUARD')
    ```
    ```ts
    interface RouterGuardImplements {
        beforeResolve?: (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => boolean | Promise<any> | any
        beforeEach?: (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => boolean | Promise<any> | any
        afterEach?: (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            failure: void | NavigationFailure | undefined
        ) => boolean | Promise<any> | any
    }
    ```
-   ### Details

    -   ROUTER_GUARD 可以注入多个路由守卫，只要在在[VdiRouterModule](/guide/API/router/VdiRouterModule)注入的[vueModule](/guide/API/vueModule),多次注入 ROUTER_GUARD 即可

-   ### Example

    ```ts
    export class TestGuard implements RouterGuardImplements {
        beforeResolve(
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) {
            console.log('beforeResolve')
            return true
        }
        beforeEach(
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) {
            console.log('beforeEach')
            return true
        }
        afterEach(
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            failure: void | NavigationFailure | undefined
        ) {
            console.log('afterEach')
            return true
        }
    }
    ```

    ```ts
    import { ROUTER_GUARD } from 'vdi'
    import { TestGuard } from './Test.Guard.ts'
    import { AppRoutingModule } from './AppRouting.Module.ts'
    export const AppModule = vueModule({
        declarations: App,

        providers: [
            //可以声明多个路由守卫，格式如下
            [ROUTER_GUARD, { useClass: TestGuard }],
            //如果多个的话
            [ROUTER_GUARD, { useClass: TestGuard2 }]
        ],
        imports: [AppRoutingModule]
    })
    ```
