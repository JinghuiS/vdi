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
            if (item.beforeEach) {
                router.beforeEach((...args) => {
                    item.beforeEach && item.beforeEach(...args)
                })
            }

            if (item.afterEach) {
                router.afterEach((...args) => {
                    item.afterEach && item.afterEach(...args)
                })
            }

            if (item.beforeResolve) {
                router.beforeResolve((...args) => {
                    item.beforeResolve && item.beforeResolve(...args)
                })
            }
        })
    }
}

export class EmptyRouterGuard implements RouterGuardImplements {}
