import { Inject, Injector } from '@wendellhu/redi'
import { App } from 'vue'
import { createRouter } from 'vue-router'
import { useInjector, VUE_APP } from '../module'
import { CreateRouterGuard } from './routerGuard'
import { ROUTER_CONFIG, VDI_ROUTER } from './routerToken'
import { VdiVueRouterOptions } from './type'
import { scannerRoutes } from './scannerRoutes'
/**@deprecated The  will be removed in next version. */
export class VdiVueRouter {
    constructor(
        @Inject(VUE_APP) public VUE_APP: App,
        @Inject(ROUTER_CONFIG) public _routerConfig: VdiVueRouterOptions,
        @Inject(VUE_APP) public vue: App,
        @Inject(CreateRouterGuard) private CreateRouterGuard: CreateRouterGuard
    ) {
        const { routes: _routes, ...routerConfig } = this._routerConfig
        const routes = scannerRoutes(_routes)
        const appRouter = createRouter({
            ...routerConfig,
            routes
        })
        const injector: Injector =
            this.VUE_APP.config.globalProperties.$GLOBAL_INJECTOR

        this.CreateRouterGuard.register(appRouter)
        injector.add(VDI_ROUTER, {
            useValue: appRouter
        })
        this.vue.use(appRouter)
    }
}
