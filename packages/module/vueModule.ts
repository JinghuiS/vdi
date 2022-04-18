import { CreateModuleType } from './type'

export function vueModule({ declarations, providers }: CreateModuleType) {
    return { declarations, providers: providers || [] }
}
