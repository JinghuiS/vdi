# createModule

创建 vue 实例，绑定 vueModule

-   ### Type

    ```ts
    function createModule(vueModule: CreateModuleType): Promise<Vue>
    ```

-   ### Details

    接受一个 vueModule，并且根据 vueModule 的 declarations 创建 vue 实例，绑定 vueModule，返回 vue 实例，
    通过返回的 vue 实例挂载

-   ### Example

    ```ts
    //main.ts
    import { createModule } from 'vdi'
    import { AppModule } from './App.Module.ts'

    createModule(AppModule).then((vueInstance) => {
        //挂载
        vueInstance.mount('#app')
    })
    ```
