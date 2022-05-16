// import { Inject } from '@wendellhu/redi'
// import {
//     APP_INITIALIZER,
//     APP_INITIALIZER_TYPE,
//     createModule,
//     vueModule
// } from 'packages'
// import { CommonModule } from 'packages/common'
// import { AppRouteingModule } from './app.routeing'
import App from './App.vue'
// import { TestService } from './test.service'

// class Test implements APP_INITIALIZER_TYPE {
//     constructor(@Inject(TestService) public TestService: TestService) {}
//     async startup() {
//         this.TestService.Test.value = 'test'
//     }
// }

// const AppModule = vueModule({
//     declarations: App,
//     imports: [CommonModule, AppRouteingModule],
//     providers: [[TestService], [APP_INITIALIZER, { useClass: Test }]]
// })

// createModule(AppModule).then((app) => {
//     app.mount('#app')
// })
import { createApp } from 'vue'

createApp(App).mount('#app')
