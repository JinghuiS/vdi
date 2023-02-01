import { Dependency, Injector } from '@wendellhu/redi'
import { Plugin } from 'vue'
import { VUE_APP, VUE_INJECTOR_KEY } from './hooks/token'

function vdi(providers?: Dependency[]): Plugin {
    return {
        install(app, ...options) {
            let _providers: Dependency[] = [[VUE_APP, { useValue: app }]]
            if (providers) {
                _providers = [..._providers, ...providers]
            }
            const injector = new Injector(_providers)
            app.provide(VUE_INJECTOR_KEY, injector)
        }
    }
}

export { vdi }
