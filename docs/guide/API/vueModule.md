# vueModule

声明一个 vueModule

-   Type

    ```ts
    function vueModule({
        declarations,
        providers,
        imports
    }: ModuleType): CreateModuleType
    ```

-   Details

    -   declarations: vueModule 要挂载的组件,主要作用在[createModule]('/guide/API/createModule')中
        -   当组件被销毁时，会自动销毁对应的服务
    -   providers: vueModule 中的依赖注入
        -   有各种格式的依赖项，通过[redi](https://redi.wendell.fun/docs/item)文档查看
    -   imports: 其他模块

        -   imports 接收的 vueModule 可以是两种模式，一种是正常格式的 vueModule,一种是特殊类型的`ModuleWithProviders`

            ```ts
            interface ModuleWithProviders {
                providers: Dependency[]
                vueModule: DependencyIdentifier<any>
            }
            ```

            ModuleWithProviders 格式的 vueModule 当被创建时，会自动执行其中的 vueModule 依赖，但是需要把 vueModule 也放在 providers 中，Vdi 的[VdiRouterModule](/guide/API/router/VdiRouterModule)就是靠这个特性实现的创建时挂载 vue-router，这是[VdiRouterModule](https://github.com/JinghuiS/vdi/blob/main/packages/router/routerModule.ts)源码

        -   vueModule 会解析 imports 中的 vueModule,并且将其中的 providers 和 imports 合并到当前 vueModule 中

-   Example

    ```ts
    import { vueModule } from 'vdi'
    import { OtherModule } from './Other.Module.ts'
    import App from './App.vue'

    export class TestService {}

    export const AppModule = vueModule({
        declarations: App,
        providers: [[TestService]],
        imports: [OtherModule]
    })
    ```
