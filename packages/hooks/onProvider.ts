import { Dependency } from '@wendellhu/redi'
import { provide, onUnmounted } from 'vue'
import { VUE_INJECTOR_KEY } from './token'
import { useInjector } from './useInjector'

export function onProvider(dependency: Dependency[]) {
    let injector = useInjector()
    const childInjector = injector?.createChild(dependency)
    provide(VUE_INJECTOR_KEY, childInjector)
    onUnmounted(() => {
        childInjector.dispose()
    })
}
