import { Inject } from '@wendellhu/redi'

import { DirectiveBinding, VNode } from 'vue'
import {
    NavigationGuardNext,
    RouteLocationNormalized,
    Router
} from 'vue-router'

import App from './App.vue'
import { TestService } from './test.service'

// createModule(AppModule).then((app) => {
//     app.mount('#app')
// })

import './noModuleMain'
