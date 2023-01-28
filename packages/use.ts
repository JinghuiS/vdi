import { Dependency, Injector } from '@wendellhu/redi'
import { Plugin } from 'vue'
import { VUE_INJECTOR_KEY } from './module'

function vdi(providers?: Dependency[]): Plugin {
    const injector = new Injector(providers)
    return {
        install(app, ...options) {
            app.provide(VUE_INJECTOR_KEY, injector)
        }
    }
}

export { vdi }
