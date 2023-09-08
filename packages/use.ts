import { Dependency, Injector, Optional } from '@wendellhu/redi'
import { Plugin } from 'vue'
import {
    CreatedVueAppExecutionService,
    nullCreatedVueAppExecutionService
} from './common/createdVueAppExecution'
import {
    CREATED_VUE_APP_EXECUTION,
    VUE_APP,
    VUE_INJECTOR_KEY
} from './hooks/token'

function createdVueAppExecution(injector: Injector) {
    injector.add([
        CREATED_VUE_APP_EXECUTION,
        { useClass: nullCreatedVueAppExecutionService }
    ])
    injector.add([CreatedVueAppExecutionService])
    injector.get(CreatedVueAppExecutionService)
}

/**
 * Vdi plug-in
 * 
 * @params Dependency[]
 * @params Injector
 * 
 * @example
 * createApp(AppVue)
    .use(vdi([[TestService]])
 */
function vdi(providers?: Dependency[]): Plugin {
    return {
        install(app, RootInjector?: Injector, ...options) {
            if (RootInjector) {
                RootInjector.add([VUE_APP, { useValue: app }])
                const childInjector = RootInjector.createChild(providers)
                createdVueAppExecution(childInjector)
                app.provide(VUE_INJECTOR_KEY, childInjector)
                return
            }
            let _providers: Dependency[] = [[VUE_APP, { useValue: app }]]
            if (providers) {
                _providers = [..._providers, ...providers]
            }
            const injector = new Injector(_providers)

            createdVueAppExecution(injector)

            app.provide(VUE_INJECTOR_KEY, injector)
        }
    }
}

export { vdi }
