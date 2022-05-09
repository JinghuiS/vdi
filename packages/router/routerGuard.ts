import { Many } from '@wendellhu/redi'
import { Router } from 'vue-router'
import { ROUTER_GUARD } from './routerToken'
import { RouterGuardImplements } from './type'

export class CreateRouterGuard {
    constructor(
        @Many(ROUTER_GUARD)
        private _guard: RouterGuardImplements[]
    ) {}
    register(router: Router) {
        this._guard.map((item: RouterGuardImplements) => {
            item.beforeEach && router.beforeEach(item.beforeEach)
            item.afterEach && router.afterEach(item.afterEach)
            item.beforeResolve && router.beforeResolve(item.beforeResolve)
        })
    }
}

export class EmptyRouterGuard implements RouterGuardImplements {}
