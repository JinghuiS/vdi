import { createIdentifier, Injector } from '@wendellhu/redi'
import { App, InjectionKey } from 'vue'
import { VdiConfig } from './config'
export const VUE_APP = createIdentifier<App>('VUE_APP')

/**@deprecated The  will be removed in next version. */
export type APP_INITIALIZER_TYPE = {
    startup: () => Promise<any>
}

/**@deprecated The  will be removed in next version. */
export const APP_INITIALIZER = createIdentifier<APP_INITIALIZER_TYPE>(
    'Application Initializer'
)

export const VUE_INJECTOR_KEY: InjectionKey<Injector> =
    Symbol('VUE_INJECTOR_KEY')

/**@deprecated The  will be removed in next version. */
export const VDI_CONFIG = createIdentifier<typeof VdiConfig>('VDI_CONFIG')
