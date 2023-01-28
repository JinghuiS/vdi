import type { ModuleWithProviders } from '../module'
import { VdiVueRouter } from './createRouter'
import { CreateRouterGuard, EmptyRouterGuard } from './routerGuard'
import { ROUTER_CONFIG, ROUTER_GUARD } from './routerToken'
import type { VdiRouterRaw, VdiVueRouterOptions } from './type'

export const VdiRouterChildClassName = '_Static_VdiRouterChild_'

function childBindRoutes(childRoutes: VdiRouterRaw[]) {
    return function (target: any) {
        target.childRoutes = childRoutes
        return target
    }
}
/**@deprecated The  will be removed in next version. */
export class VdiRouterModule {
    static forRoot(config: VdiVueRouterOptions): ModuleWithProviders {
        return {
            providers: [
                [
                    ROUTER_GUARD,
                    {
                        useClass: EmptyRouterGuard
                    }
                ],
                [CreateRouterGuard],
                [ROUTER_CONFIG, { useValue: config }],
                [VdiVueRouter]
                // RouterService,
                // RouteService
            ],
            vueModule: VdiVueRouter
        }
    }
    static forChild(routes: VdiRouterRaw[]): ModuleWithProviders {
        return {
            providers: [],
            vueModule: childBindRoutes(routes)(class _Static_VdiRouterChild_ {})
        }
    }
}
