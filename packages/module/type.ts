import { Dependency } from '@wendellhu/redi'
import { Component, ComputedOptions, MethodOptions } from 'vue'
export type CreateModuleType = {
    providers?: Dependency[]
    declarations: Component<any, any, any, ComputedOptions, MethodOptions> | any
}
