import { Injector } from '@wendellhu/redi'
import { createApp } from 'vue'
import { APP_INITIALIZER, VUE_APP, VUE_INJECTOR_KEY } from './moduleToken'
import { NoopStartupService } from './noopStartup.service'
import { CreateModuleType } from './type'
export async function createModule(module: CreateModuleType) {
    const { declarations, providers } = module
    const Root = createApp(declarations)
    const RootInject = new Injector([
        // injector vue instance
        [VUE_APP, { useValue: Root }],
        // base null startup service
        [APP_INITIALIZER, { useClass: NoopStartupService }]
    ])
    const injector = RootInject.createChild(providers)
    const appInit = injector.get(APP_INITIALIZER)
    // init app
    await appInit
        .startup()
        .then((res) => {
            console.log('initialization success')
        })
        .catch((err) => {
            console.log('initialization failed')
        })
    Root.provide(VUE_INJECTOR_KEY, injector)
    return Root
}
