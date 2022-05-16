import { Dependency, DependencyIdentifier, Injector } from '@wendellhu/redi'
import { getCurrentInstance, inject, onUnmounted, provide } from 'vue'
import { VUE_INJECTOR_KEY } from './moduleToken'

export function useInjector(selfInject: boolean = false): Injector {
    const instance = getCurrentInstance()

    if (selfInject) {
        //@ts-ignore
        return instance!.provides[VUE_INJECTOR_KEY]
    }
    if (!instance?.appContext.config.globalProperties.$GLOBAL_INJECTOR) {
        const _injector = new Injector()
        instance!.appContext.config.globalProperties.$GLOBAL_INJECTOR =
            _injector
        return _injector
    }
    const injector = inject<Injector>(VUE_INJECTOR_KEY)
    if (!injector) {
        return new Injector()
    }
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
    onUnmounted(() => {
        childInjector.dispose()
    })
}
