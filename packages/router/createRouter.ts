import { Inject } from '@wendellhu/redi'
import { App } from 'vue'
import { createRouter } from 'vue-router'
import { VUE_APP } from '../module'
import { CreateRouterGuard } from './routerGuard'
import { ROUTER_CONFIG } from './routerToken'
import { VdiVueRouterOptions } from './type'
import { scannerRoutes } from './scannerRoutes'
export class VdiVueRouter {
    constructor(
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
        this.CreateRouterGuard.register(appRouter)

        this.vue.use(appRouter)
    }
}
