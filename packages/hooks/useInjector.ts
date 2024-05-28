import { Injector } from '@wendellhu/redi'
import { injectLocal } from '@vueuse/core'

import { VUE_INJECTOR_KEY } from './token'

export function useInjector(): Injector {
    const injector = injectLocal<Injector>(VUE_INJECTOR_KEY)
    if (!injector) {
        return new Injector()
    }
    return injector
}
