import { Dependency } from '@wendellhu/redi'
import { provide, onUnmounted } from 'vue'
import { VUE_INJECTOR_KEY } from './token'
import { useInjector } from './useInjector'

/**
 * Component injector.
 *
 * Inherit the dependency of the parent component
 *
 * All components under the component can use `useDependency` to obtain the currently injected dependencies
 *
 *
 * 依赖关系注入器.
 *
 * 继承父组件的依赖关系
 *
 * 当前组件之下的所有组件都可以通过`useDependency`获取依赖关系
 */
export function onProvider(dependency: Dependency[]) {
    let injector = useInjector()
    const childInjector = injector?.createChild(dependency)
    provide(VUE_INJECTOR_KEY, childInjector)
    onUnmounted(() => {
        childInjector.dispose()
    })
    return childInjector
}
