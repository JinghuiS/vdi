import { Dependency, Injector } from '@wendellhu/redi'
import { provide, onUnmounted } from 'vue'
import { VUE_APP, VUE_INJECTOR_KEY } from './token'
import { useDependency } from './useDependency'

/**
 * Component injector.
 *
 * Create a new injector without inheriting the parent dependency
 *
 * All components under the component can use `useDependency` to obtain the currently injected dependencies
 *
 *
 * 依赖关系注入器.
 *
 * 不继承父子关系，创建新的注入器
 *
 * 当前组件之下的所有组件都可以通过`useDependency`获取依赖关系
 */
export function onInjector(newInjector: Injector) {
    const VueApp = useDependency(VUE_APP)

    newInjector.add([VUE_APP, { useValue: VueApp }])
    provide(VUE_INJECTOR_KEY, newInjector)
    onUnmounted(() => {
        newInjector.dispose()
    })
    return newInjector
}
