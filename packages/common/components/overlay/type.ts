import { Component, ComputedOptions, MethodOptions } from 'vue'
/**@deprecated The  will be removed in next version. Please use [vue-modal-provider](https://github.com/JinghuiS/vue-modal-provider) */
export type OverlayType<T = any> = {
    component: Component<any, any, any, ComputedOptions, MethodOptions>
    options?: T
    params?: any
}
/**@deprecated The  will be removed in next version. Please use [vue-modal-provider](https://github.com/JinghuiS/vue-modal-provider) */
export type OverlayChildType<T = any> = {
    params: T
    close: (msg?: any) => void
}
