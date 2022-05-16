import { createIdentifier, Injector } from '@wendellhu/redi'
import { App, InjectionKey } from 'vue'
import { VdiConfig } from './config'
export const VUE_APP = createIdentifier<App>('VUE_APP')

export type APP_INITIALIZER_TYPE = {
    startup: () => Promise<any>
}
export const APP_INITIALIZER = createIdentifier<APP_INITIALIZER_TYPE>(
    'Application Initializer'
)

export const VUE_INJECTOR_KEY: InjectionKey<Injector> =
    Symbol('VUE_INJECTOR_KEY')

export const VDI_CONFIG = createIdentifier<typeof VdiConfig>('VDI_CONFIG')
