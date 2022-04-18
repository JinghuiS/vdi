import { Dependency, DependencyIdentifier, Injector } from '@wendellhu/redi'
import { getCurrentInstance, inject, provide } from 'vue'
import { VUE_INJECTOR_KEY } from './moduleToken'

export function useInjector(selfInject: boolean = false) {
    if (selfInject) {
        const instance = getCurrentInstance()

        //@ts-ignore
        return instance!.provides[VUE_INJECTOR_KEY]
    }
    const injector = inject<Injector>(VUE_INJECTOR_KEY)
    return injector
}
export function useDependency<T>(
    provider: DependencyIdentifier<T>,
    options?: { self: boolean }
): T {
    const injector = useInjector(options?.self)
    return injector!.get(provider)
}

export function onProvider(dependency: Dependency[]) {
    let injector = useInjector()
    const childInjector = injector?.createChild(dependency)
    provide(VUE_INJECTOR_KEY, childInjector)
}