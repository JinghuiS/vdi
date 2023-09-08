import { Inject } from '@wendellhu/redi'
import { CREATED_VUE_APP_EXECUTION } from 'packages/hooks/token'
import { vdi } from 'packages/use'
import { createApp } from 'vue'
import { AppRoutes } from './app.routes'
import AppVue from './App.vue'
import { TestService } from './test.service'

class TestStartupService {
    constructor(@Inject(TestService) public t: TestService) {
        console.log(11, this.t)
    }
}

createApp(AppVue)
    .use(
        vdi([
            [TestService],
            [CREATED_VUE_APP_EXECUTION, { useClass: TestStartupService }]
        ])
    )
    .use(AppRoutes)
    .mount('#app')
