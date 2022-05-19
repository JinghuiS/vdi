import { Inject } from '@wendellhu/redi'
import {
    APP_INITIALIZER,
    APP_INITIALIZER_TYPE,
    createModule,
    VDI_ROUTER,
    vueModule
} from 'packages'
import { CommonModule, DIRECTIVE, DirectiveImplements } from 'packages/common'
import { DirectiveBinding, VNode } from 'vue'
import { Router } from 'vue-router'
import { AppRouteingModule } from './app.routeing'
import App from './App.vue'
import { TestService } from './test.service'

class Test implements APP_INITIALIZER_TYPE {
    constructor(
        @Inject(TestService) public TestService: TestService,
        @Inject(VDI_ROUTER) public router: Router
    ) {}
    async startup() {
        this.router.push('/test/a')
        this.TestService.Test.value = 'test'
    }
}
class TestD implements DirectiveImplements {
    name = 'test'
    constructor(@Inject(TestService) public TestService: TestService) {
        console.log(this.TestService)
    }
    created() {
        console.log(this.TestService)
    }
}

const AppModule = vueModule({
    declarations: App,
    imports: [CommonModule, AppRouteingModule],
    providers: [
        [TestService],
        [APP_INITIALIZER, { useClass: Test }],
        [DIRECTIVE, { useClass: TestD }]
    ]
})

createModule(AppModule).then((app) => {
    app.mount('#app')
})
