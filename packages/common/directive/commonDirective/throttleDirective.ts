import { DirectiveBinding, VNode } from 'vue'
import { DirectiveImplements } from '../types'

export class ThrottleDirective implements DirectiveImplements {
    name: string = 'throttle-click'
    created(el: any, binding: DirectiveBinding<any>) {
        let last: number
        let timer: number
        let interval = 200 || Number(binding.arg)
        let now = +new Date()

        function onClick(..._args: any[]) {
            if (last && now - last < interval) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    last = now
                    binding.value(..._args)
                }, interval)
            } else {
                last = now
                binding.value(..._args)
            }
        }
        el.addEventListener('click', onClick)
    }
    unmounted(
        el: any,
        binding: DirectiveBinding<any>,
        vnode: VNode<any, any, { [p: string]: any }>,
        prevVnode: any
    ) {
        el.removeEventListener('click', binding.value)
    }
}
