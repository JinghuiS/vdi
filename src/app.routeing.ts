import { vueModule } from 'packages/module'
import { VdiRouterModule } from 'packages/router/routerModule'
import { createWebHashHistory } from 'vue-router'
import { TestModule } from './app/test/test.module'

export const AppRouteingModule = vueModule({
    imports: [
        VdiRouterModule.forRoot({
            history: createWebHashHistory(),
            routes: [
                {
                    path: '/test',
                    module: TestModule
                }
            ]
        })
    ]
})
