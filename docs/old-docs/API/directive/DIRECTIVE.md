# DIRECTIVE

注入自定义指令的[识别符](https://redi.wendell.fun/docs/identifier)

-   ### type

    ```ts
    const DIRECTIVE = createIdentifier<DirectiveImplements>('DIRECTIVE')
    ```

    ```ts
    interface DirectiveImplements {
        name: string
        created?: (
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
        beforeMount?: (
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
        mounted?: (
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
        beforeUpdate?: (
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
        updated?: (
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
        beforeUnmount?: (
            el: any,
            binding: DirectiveBinding<any>,
            VNode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
        unmounted?: (
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) => any
    }
    ```

-   ### Details

    必须先在 vueModule 中引入[DirectiveModule](/old-docs/API/directive/DirectiveModule)或者 CommonModule，再注入 DIRECTIVE,
    可以注入多个  
     name 属性是必须的，它会是指令的名称:

    ```
    name= 'test'

    <div v-test ></div>
    ```

-   ### Example

    ```ts
    import { DirectiveImplements } from 'vdi'

    export class TestDirective implements DirectiveImplements {
        name: string = 'test'
        mounted(
            el: any,
            binding: DirectiveBinding<any>,
            vnode: VNode<any, any, { [p: string]: any }>,
            prevVnode: any
        ) {
            console.log(el)
        }
    }

    export const AppModule = vueModule({
        declarations: App,
        imports: [CommonModule],
        providers: [[DIRECTIVE, { useClass: TestDirective }]]
    })
    ```
