import {
    createIdentifier,
    Ctor,
    DependencyIdentifier,
    Injector
} from '@wendellhu/redi'
import { App, InjectionKey } from 'vue'

export const VUE_INJECTOR_KEY: InjectionKey<Injector> =
    Symbol('VUE_INJECTOR_KEY')

export const VUE_APP = createIdentifier<App>('VUE_APP')

/**
 * When vdi is initialized, the dependency to be executed
 * 
 * @useValue class[]
 * 
 * @example
 * 
 * class TestStartupService {
 *      constructor(){
 *          console.log('Execution')
 *      }
 * }
 * 
 * createApp(AppVue)
    .use(
        vdi([[CREATED_VUE_APP_EXECUTION,
                {
                    useValue: [
                        TestStartupService,
                    ]
                }
            ]
        ])
    )
 * 
    
 */
export const CREATED_VUE_APP_EXECUTION = createIdentifier<any>(
    'CREATED_VUE_APP_EXECUTION'
)
