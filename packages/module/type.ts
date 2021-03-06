import { Dependency, DependencyIdentifier } from '@wendellhu/redi'
import { Component, ComputedOptions, MethodOptions } from 'vue'
export type ModuleType = {
    providers?: Dependency[]
    imports?: ModuleImportsType
    declarations?:
        | Component<any, any, any, ComputedOptions, MethodOptions>
        | any
}

export interface CreateModuleType extends ModuleType {
    startupModules: any[]
}
export interface ModuleWithProviders {
    providers: Dependency[]
    vueModule: DependencyIdentifier<any>
}

export type ModuleImportsType = Array<ModuleWithProviders | CreateModuleType>
