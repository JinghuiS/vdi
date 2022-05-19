# useDependency

获取依赖

-   Type
    ```ts
    function useDependency<T>(
        provider: DependencyIdentifier<T>,
        options?: { self: boolean }
    ): T
    ```
-   Details  
    获取依赖并返回，如果没有 self 为 true，则会一直从组件树中向上寻找依赖

-   Example  
    获取上级的依赖

    ```vue
    <script setup lang="ts">
    import { useDependency } from 'vdi'

    import { CountService } from './count.service'

    //因为是从该组件注入，所以需要self来获取自身依赖
    const CountService = useDependency(CountService)
    </script>

    <template>
        父组件依赖： {{ CountService.count }}
        <button @click="CountService.inc">count+</button>
    </template>
    ```

    获取自身依赖，需要配合[onProvider]('/guide/API/hooks/onProvider'),并且 useDependency self 为 true

    ```vue
    <!--Child.vue -->
    <script setup lang="ts">
    import { onProvider, useDependency } from 'vdi'
    import { CountService } from './count.service'

    onProvider([[CountService]])

    //获取本身的依赖，虽然跟父组件是同一个，但是因为是自身重新注入的值也是不一样的
    const ChildCountService = useDependency(CountService, { self: true })
    </script>

    <template>
        <div class="child">
            子组件： {{ ChildCountService.count }}
            <button @click="ChildCountService.inc">count+</button>
        </div>
    </template>
    ```
