# 快速开始

## vdi 是干什么的

vdi 依赖于[redi](https://redi.wendell.fun/)，它是一个基于 vue 的依赖注入插件，它可以让你在 vue 中使用 [redi](https://redi.wendell.fun/) 的 api，并且可以增强你的 vue 开发，写出更少耦合、更易调整、更易维护的代码

## 安装

选择你常用的包管理器，因为依赖于[redi](https://redi.wendell.fun/)所以要跟`vdi`一并安装

```sh
npm install @wendellhu/redi vdi
```

## 配置

在使用`@wendellhu/redi`时我们可能需要用到装饰器和类，所以配置一下`tsconfig.json`

```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "useDefineForClassFields": false
    }
}
```

## 单独页面使用

vdi 并不需要整个项目使用依赖注入:

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

```vue
<script setup lang="ts">
import { onProvider, useDependency } from 'vdi'

import { CountService } from './count.service'

//在当前组件注入依赖
onProvider([[CountService]])

//获取提供的依赖，self为true时候获取的是当前组件的依赖
const CountService = useDependency(CountService, { self: true })
</script>

<template>
    {{ CountService.count }}
    <button @click="CountService.inc">修改</button>
</template>
```
