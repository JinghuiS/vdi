import { VUE_INJECTOR_KEY } from 'packages/hooks/token'
import { App } from 'vue'

/**
 * Get global vue injector
 * 获取挂载在vue全局的injector
 *
 */
export function getGlobalInjector(instance: App) {
    //@ts-ignore
    return instance._context.provides[VUE_INJECTOR_KEY]
}
