import { ModuleWithProviders } from '../module'
import { VdiVueRouter } from './createRouter'
import { CreateRouterGuard, EmptyRouterGuard } from './routerGuard'
import { ROUTER_CONFIG, ROUTER_GUARD } from './routerToken'
import { VdiVueRouterOptions } from './type'

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
}
