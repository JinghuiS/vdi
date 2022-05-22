import { TestService } from '@/test.service'
import { vueModule } from 'packages/module'
import { VdiRouterModule } from 'packages/router'

export const TestModule = vueModule({
    providers: [[TestService]],
    imports: [
        VdiRouterModule.forChild([
            {
                path: '/test/a',
                component: () => import('./test.vue')
            }
        ])
    ]
})
