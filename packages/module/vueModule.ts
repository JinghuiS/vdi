import { Scan } from './scan'
import { CreateModuleType, ModuleType } from './type'

/**@deprecated The  will be removed in next version. */
export function vueModule({
    declarations,
    providers,
    imports
}: ModuleType): CreateModuleType {
    const scan = new Scan()
    if (providers) {
        scan.scanProviders(providers)
    }
    if (imports) {
        scan.scanImports(imports)
    }

    return {
        declarations,
        providers: scan.providers,
        startupModules: scan.startupModules
    }
}
