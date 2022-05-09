import { TestService } from '@/test.service'
import { vueModule } from 'packages/module'

export const TestModule = vueModule({
    providers: [[TestService]]
})
