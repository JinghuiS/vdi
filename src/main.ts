import { createModule, vueModule } from 'packages'
import App from './App.vue'
import { TestService } from './test.service'

const AppModule = vueModule({ declarations: App, providers: [[TestService]] })

createModule(AppModule).then((app) => {
    app.mount('#app')
})
