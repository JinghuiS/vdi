import { Component, ComputedOptions, MethodOptions } from 'vue'

export type OverlayType<T = any> = {
    component: Component<any, any, any, ComputedOptions, MethodOptions>
    options?: T
    params?: any
}

export type OverlayChildType<T = any> = {
    params: T
    close: (msg?: any) => void
}
