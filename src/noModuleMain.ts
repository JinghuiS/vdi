import { vdi } from 'packages/use'
import { createApp } from 'vue'
import { AppRoutes } from './app.routes'
import AppVue from './App.vue'
import { TestService } from './test.service'

createApp(AppVue)
    .use(vdi([[TestService]]))
    .use(AppRoutes)
    .mount('#app')
