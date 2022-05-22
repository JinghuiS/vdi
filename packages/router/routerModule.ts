import { ModuleWithProviders } from '../module'
import { VdiVueRouter } from './createRouter'
import { CreateRouterGuard, EmptyRouterGuard } from './routerGuard'
import { ROUTER_CONFIG, ROUTER_GUARD } from './routerToken'
import { VdiRouterRaw, VdiVueRouterOptions } from './type'

export const VdiRouterChildClassName = '_Static_VdiRouterChild_'
export class _Static_VdiRouterChild_ {
    static childRoutes: VdiRouterRaw[] = []
}
function childBindRoutes(childRoutes: VdiRouterRaw[]) {
    _Static_VdiRouterChild_.childRoutes = childRoutes
    return _Static_VdiRouterChild_
}

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
            providers: [[childBindRoutes(routes)]],
            vueModule: _Static_VdiRouterChild_
        }
    }
}
