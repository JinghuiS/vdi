import { Injector } from '@wendellhu/redi'
import { getCurrentInstance, inject } from 'vue'
import { VUE_INJECTOR_KEY } from './token'

export function useInjector(selfInject: boolean = false): Injector {
    const instance = getCurrentInstance()
    //@ts-ignore
    const instanceInjector = instance!.provides[VUE_INJECTOR_KEY]
    if (selfInject) {
        return instanceInjector
    }
    if (!instanceInjector) {
        return new Injector()
    }

    const injector = inject<Injector>(VUE_INJECTOR_KEY)
    if (!injector) {
        return new Injector()
    }
    return injector
}
