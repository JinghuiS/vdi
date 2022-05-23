# useOverlay

一个简单帮助你快速使用组件库弹出层的 hook

-   ### Type

    ```ts
    function useOverlay(
        overlayChild: Component<any, any, any, ComputedOptions, MethodOptions>
    ): { open close show }
    ```

    open 的类型

    ```ts
    type OverlayType<T = any> = {
        component: Component<any, any, any, ComputedOptions, MethodOptions>
        options?: T
        params?: any
    }
    open(overlay: OverlayType):Promise<any>
    ```

    close 的类型

    ```ts
     close: (msg?: any) => void
    ```

-   ### Details

    -   这个 hook 可以帮助你快速创建组件库弹出层服务，第一个参数为组件库的弹出层组件，不管是弹窗或者是抽屉，都可以使用这个 hook 创建 。

    -   只要组件接受 options，visible,onClose，即可使用 如果组件库的组件展示关闭属性不是 visible，可以自定义组件后，接收 visible 属性之后再传递给组件库的组件，

    -   open 是一个 promise,当弹出层的子组件调用 close 方法时，open 的 promise 会被 resolve，并且会把 close 的参数传递给 open 的 promise，

    -   open 中的参数 component 是必填的，他会插入弹出层的默认 slot 中

    -   可以查看这个[封装例子](https://github.com/JinghuiS/td-fast-forward/tree/main/src/app/shared/components/dialog)来查看如何使用，[配合使用例子](https://github.com/JinghuiS/td-fast-forward/tree/main/src/app/feature/componentList/overlayList)

-   ### Example

    以 `element-plus` 的[dialog](https://element-plus.org/zh-CN/component/dialog.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)为例子
    首先因为 element-plus 的 dialog 处理展示隐藏的值不是 visible，所以需要先自定义组件

    ```vue
    <!--DialogComponent.vue  -->
    <template>
        <ElDialog v-bind="options ? options : {}" :modelValue="visible">
            <slot></slot>
        </ElDialog>
    </template>

    <script setup lang="ts">
    import { ElDialog } from 'element-plus'
    import type { DialogProps } from 'element-plus'
    const props = defineProps<{
        visible: boolean
        options: DialogProps
    }>()
    </script>
    ```

    然后封装`useDialog`

    ```ts
    // useDialog.ts
    import { useOverlay } from 'vdi'
    import Dialog from './DialogComponent.vue'
    import type { DialogProps } from 'element-plus'

    export type useDialogProps = OverlayType<DialogProps>

    export const useDialog = () => {
        const { open: _open, close } = useOverlay<DialogProps>(Dialog)

        const open = (dialogType: useDialogProps) => {
            return _open<DialogProps>(dialogType)
        }
        return {
            open,
            close
        }
    }
    ```

    最后在页面上使用  
     弹出层中间的组件

    ```vue
    <!-- DialogChildView.vue -->
    <template>
        <div>
            父组件传参:{{ params }}
            <button @click="close('子组件关闭')">点击关闭</button>
        </div>
    </template>

    <script setup lang="ts">
    import { useOverlayRef } from 'vdi'
    const { params, close } = useOverlayRef()
    </script>
    ```

    调用 useDialog 的页面，把刚刚创建的 DialogChildView.vue 传给 open

    ```vue
    <template>
        <button @click="openDialog">打开弹窗</button>
    </template>

    <script setup lang="ts">
    import { useDialog } from './useDialog'
    import DialogChildView from './DialogChildView.vue'

    const { open } = useDialog()

    const openDialog = () => {
        open({
            component: DialogChildView,
            options: {},
            params: {
                abc: 1
            }
        }).then((msg) => {
            console.log(msg)
        })
    }
    </script>
    ```
