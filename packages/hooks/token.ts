import { createIdentifier, Injector } from '@wendellhu/redi'
import { App, InjectionKey } from 'vue'

export const VUE_INJECTOR_KEY: InjectionKey<Injector> =
    Symbol('VUE_INJECTOR_KEY')

export const VUE_APP = createIdentifier<App>('VUE_APP')
