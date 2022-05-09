import { Injector } from '@wendellhu/redi'
import { LogService, VDI_LOG } from '../utils/log'
import { createApp } from 'vue'
import { APP_INITIALIZER, VUE_APP, VUE_INJECTOR_KEY } from './moduleToken'
import { NoopStartupService } from './noopStartup.service'
import { CreateModuleType } from './type'
export async function createModule(module: CreateModuleType) {
    const started = Date.now()
    const { declarations, providers, startupModules } = module
    const Root = createApp(declarations)
    const RootInject = new Injector([
        // injector vue instance
        [VUE_APP, { useValue: Root }],
        // base null startup service
        [APP_INITIALIZER, { useClass: NoopStartupService }],
        [VDI_LOG, { useClass: LogService }]
    ])
    const injector = RootInject.createChild(providers)
    startupModules.map((item) => {
        injector.get(item)
    })
    const appInit = injector.get(APP_INITIALIZER)
    // init app
    await appInit
        .startup()
        .then((res) => {
            const elapsed = Date.now() - started
            injector
                .get(VDI_LOG)
                .primaryGroup('initialization success', [
                    () => console.log(`Response time: ${elapsed}ms`)
                ])
        })
        .catch((err) => {
            const elapsed = Date.now() - started
            injector
                .get(VDI_LOG)
                .errorGroup('initialization failed', [
                    () => console.log(`Response time: ${elapsed}ms`)
                ])
        })
    Root.provide(VUE_INJECTOR_KEY, injector)
    return Root
}
