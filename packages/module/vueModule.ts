import { Scan } from './scan'
import { CreateModuleType, ModuleType } from './type'

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
