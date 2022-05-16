import { ModuleWithProviders } from 'packages/module'
import { CreateDirective } from './createDirective'
import { DIRECTIVE } from './directiveToken'
import { NullDirective } from './nullDirective'
export const DirectiveModule: ModuleWithProviders = {
    providers: [[DIRECTIVE, { useClass: NullDirective }], [CreateDirective]],
    vueModule: CreateDirective
}
