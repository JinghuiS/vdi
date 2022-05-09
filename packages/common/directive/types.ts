import { DirectiveBinding, VNode } from 'vue'

export interface DirectiveImplements {
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
