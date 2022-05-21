# Vdi

一个简单的 vue di 插件，基于`@wendellhu/redi`实现

-   [docs](https://vdi-docs.vercel.app/)
-   [Starter Template](https://github.com/JinghuiS/vdi-template)

## 安装

```bash
$ npm install @wendellhu/redi vdi
```

## 功能

-   更好的依赖注入  
    基于 `redi` 增强 vue3 依赖注入

-   简单使用，非侵入  
    最少两个 api 就可以完成强大的依赖注入

-   vueModule 模式  
    基于 Vdi 接管 vue 项目，把一些 vue api 变成依赖注入模式，提供更好的开发体验

## 例子

### 简单使用

创建服务

```ts
// count.service.ts
import { ref } from 'vue'
export class CountService {
    count = ref<number>(0)
    inc() {
        this.count.value++
    }
}
```

页面注入并使用

```vue
<!--Father.vue -->
<script setup lang="ts">
import { onProvider, useDependency } from 'vdi'

import { CountService } from './count.service'

//在当前组件注入依赖
onProvider([[CountService]])

//获取提供的依赖，self为true时候获取的是当前组件的依赖
const countService = useDependency(CountService, { self: true })
</script>

<template>
    {{ countService.count }}
    <button @click="countService.inc">修改</button>
</template>
```

在子组件使用

```vue
<!--Child.vue -->
<script setup lang="ts">
import { onProvider, useDependency } from 'vdi'

import { CountService } from './count.service'

//获取提供的依赖，不需要使用self，因为父组件已经注入了依赖
const countService = useDependency(CountService)
</script>

<template>
    <div class="child">
        子组件： {{ countService.count }}
        <button @click="countService.inc">count+</button>
    </div>
</template>
```

### vueModule 模式

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

```ts
//main.ts
import { createModule } from 'vdi'
import { AppModule } from './App.Module.ts'

createModule(AppModule).then((vueInstance) => {
    //挂载
    vueInstance.mount('#app')
})
```
