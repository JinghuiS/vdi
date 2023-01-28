# Vdi

一个简单的 vue di 插件，基于`@wendellhu/redi`实现

-   [docs](https://vdi-docs.vercel.app/)

## 安装

```bash
$ npm install @wendellhu/redi vdi
```

## 功能

-   更好的依赖注入  
    基于 `redi` 增强 vue3 依赖注入

-   简单使用，非侵入  
    最少两个 api 就可以完成强大的依赖注入

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

## License

[MIT](https://github.com/JinghuiS/vdi/blob/main/LICENSE)
