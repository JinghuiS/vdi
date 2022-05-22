import { Injector } from '@wendellhu/redi'
import { defineComponent, h, inject, onUnmounted, provide } from 'vue'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { VUE_INJECTOR_KEY } from '../module'
import { VdiRouterChildClassName } from './routerModule'
import type { VdiRouterRaw } from './type'

export default function ModuleEmptyComponent(moduleConfig: any) {
    return defineComponent(() => {
        const parent = inject<Injector>(VUE_INJECTOR_KEY)
        const injector = parent!.createChild(moduleConfig.providers)
        moduleConfig.startupModules.map((item: any) => {
            injector.get(item)
        })
        provide(VUE_INJECTOR_KEY, injector)
        onUnmounted(() => {
            injector.dispose()
        })
        return () => h(moduleConfig.declarations || RouterView)
    })
}

function bindModule(module: any, component?: any) {
    let emptyComponent = ModuleEmptyComponent(module)

    return { component: emptyComponent }
}

export function scannerRoutes(routes: VdiRouterRaw[]) {
    return routes.map(({ module, children, component, ...route }) => {
        const _route: any = { ...route }
        _route.component = component
        if (module) {
            const { component: emptyComponent } = bindModule(module, component)
            const childRoutes = module.startupModules.find(
                (item) => item.name === VdiRouterChildClassName
            )
            if (childRoutes) {
                _route.children = scannerRoutes(childRoutes.childRoutes)
            }

            _route.component = emptyComponent
        }

        if (children) {
            _route.children = [..._route.children, ...scannerRoutes(children)]
        }
        return _route as RouteRecordRaw
    })
}
