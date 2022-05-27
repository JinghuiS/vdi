import { Dependency, DependencyIdentifier } from '@wendellhu/redi'
import {
    CreateModuleType,
    ModuleImportsType,
    ModuleWithProviders
} from './type'

export class Scan {
    public providers: Dependency[] = []

    public startupModules: DependencyIdentifier<any>[] = []
    scanProviders(providers: Dependency[]) {
        this.providers = [...this.providers, ...providers]
    }
    scanModule(module: any) {
        this.scanImports(module)
        this.scanProviders(module)
        return {
            providers: this.providers,
            startupModules: this.startupModules
        }
    }

    scanImports(module: ModuleImportsType): void {
        const imports = module
        const moduleProviders: Dependency[] = []

        imports.map((item) => {
            if ((item as CreateModuleType).startupModules) {
                this.startupModules = [
                    ...this.startupModules,
                    ...(item as CreateModuleType).startupModules
                ]
            }
            if ((item as ModuleWithProviders).vueModule) {
                this.startupModules.push(
                    (item as ModuleWithProviders).vueModule
                )
            }
            if (item.providers) {
                this.providers = [...this.providers, ...item.providers]
            }
            if (!(item as ModuleWithProviders).vueModule && !item.providers) {
                const itemModule = this.scanModule(item)
                moduleProviders.concat(itemModule.providers)
            }
        })

        this.providers = this.providers.concat(moduleProviders)
    }
}
