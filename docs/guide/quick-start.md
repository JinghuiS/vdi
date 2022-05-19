---
title: 模块化
---

# 快速开始

## 写在前头

Vdi 依赖于[redi](https://redi.wendell.fun/)，它是一个基于 vue3 的依赖注入插件，它可以让你在 vue3 中使用 [redi](https://redi.wendell.fun/) 的 api，并且可以增强你的 vue3 开发，写出更少耦合、更易调整、更易维护的代码

-   Vdi 只能在 vue3 中使用
-   如果不了解依赖注入模式可能会对这个插件有一定的困惑，可以先去阅读 [redi 的博客](https://redi.wendell.fun/blogs/di)
-   为什么不是[injection-js](https://github.com/mgechev/injection-js),因为 injection-js 依赖于 ts 元数据，需要安装`reflect-metadata`,而且继承的父类中的依赖不会被查找出来，需要在 class 中手动注入
-   文档因为我的个人能力有些很可能云里雾里，不如直接使用[启动模板看看](https://github.com/JinghuiS/vdi-template)

## 安装

选择你常用的包管理器，因为依赖于[redi](https://redi.wendell.fun/)所以要跟`vdi`一并安装

```bash
$ npm install @wendellhu/redi vdi
```

## 配置

在使用[redi](https://redi.wendell.fun/)时我们可能需要用到装饰器和类，所以配置[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)

```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "useDefineForClassFields": false
    }
}
```

## 如何使用

vdi 并不需要整个项目使用依赖注入，只需要：

-   [onProvider](/guide/API/hooks/onProvider)注入依赖
-   [useDependency](/guide/API/hooks/useDependency)获取依赖

### 单独页面使用

首先创建一个服务：

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

::: tip 提示

-   如果需要在服务中使用其他依赖,在[constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)中使用装饰器[@inject](https://redi.wendell.fun/docs/relationship)获取依赖

-   在服务中可以使用[ref](https://vuejs.org/api/reactivity-core.html#ref)创建响应式数据，如果服务是从上层注入的，我们的这个服务就变成一个简单的状态管理了
    ::: details 例子

    ```ts
    import { inject } from '@wendellhu/redi'
    // 引入其他服务
    import { OtherService } from './other.service'
    // count.service.ts
    import { ref } from 'vue'
    export class CountService {
        constructor(@Inject(OtherService) public OtherService: OtherService) {}
        count = ref<number>(0)
        inc() {
            this.count.value++
        }
    }
    ```

    :::

:::

随后在页面上使用[onProvider](/guide/API/hooks/onProvider)注入刚刚创建的服务，并使用[useDependency](/guide/API/hooks/useDependency) **_self 为 true_** 引用当前组件注入的服务

```vue{7,10}
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

### 层级的依赖注入

在上面的例子中我们为单独页面使用了依赖注入，而这个例子我们从父组件注入依赖，子组件获取依赖来传递状态

首先在父组件[onProvider](/guide/API/hooks/onProvider)注入刚刚的服务

```vue{8,11}
<!--Father.vue -->
<script setup lang="ts">
import { onProvider, useDependency } from 'vdi'

import { CountService } from './count.service'

//在父组件组件注入依赖
onProvider([[CountService]])

//因为是从该组件注入，所以需要self来获取自身依赖
const CountService = useDependency(CountService, { self: true })
</script>

<template>
    父组件： {{ CountService.count }}
    <button @click="CountService.inc">count+</button>
</template>
```

在子组件中使用[useDependency](/guide/API/hooks/useDependency)获取依赖，**_注意此时不要使用 self 为 true_**，因为要获取上层的依赖，而不是当前组件的依赖

```vue{8}
<!--Child.vue -->
<script setup lang="ts">
import { onProvider, useDependency } from 'vdi'

import { CountService } from './count.service'

//获取提供的依赖，不需要使用self，因为父组件已经注入了依赖
const CountService = useDependency(CountService)
</script>

<template>
    <div class="child">
        子组件： {{ CountService.count }}
        <button @click="CountService.inc">count+</button>
    </div>
</template>
```

:::tip 须知

-   在组件使用[onProvider](/guide/API/hooks/onProvider)注入依赖之后，该组件之下的每一层都能获取顶层的依赖，直到同一个依赖在下层被再次注入，则从下层开始获取到的是再次注入的依赖

-   在需要获取从上层提供的依赖时，[useDependency](/guide/API/hooks/useDependency)会自动寻找上层注入器获取依赖，不要使用 `self`，因为`self`代表获取当前组件自身依赖

:::

### 更多依赖注入的 api

vdi 本身是基于[redi](https://redi.wendell.fun/docs/concepts),所以在类中的使用方式和 redi 一样，只是不需要创建 Injector，
更多 api 查看[redi](https://redi.wendell.fun/docs/concepts)文档
