import { Injector } from '@wendellhu/redi'
import { defineComponent, h, inject, provide } from 'vue'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { VUE_INJECTOR_KEY } from '../module'
import type { VdiRouterRaw } from './type'

export default function ModuleEmptyComponent(moduleConfig: any) {
    return defineComponent(() => {
        const parent = inject<Injector>(VUE_INJECTOR_KEY)
        const injector = parent!.createChild(moduleConfig.providers)
        moduleConfig.startupModules.map((item: any) => {
            injector.get(item)
        })
        provide(VUE_INJECTOR_KEY, injector)
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
            // _route.children = scannerRoutes(scannerRouterChildren(loadChildren))
            _route.component = emptyComponent
        }

        if (children) {
            _route.children = scannerRoutes(children)
        }
        return _route as RouteRecordRaw
    })
}