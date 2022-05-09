import { ModuleWithProviders } from 'packages/module'
import { ThrottleDirective } from './commonDirective/throttleDirective'
import { CreateDirective } from './createDirective'
import { DIRECTIVE } from './directiveToken'
import { NullDirective } from './nullDirective'
export const DirectiveModule: ModuleWithProviders = {
    providers: [
        [DIRECTIVE, { useClass: NullDirective }],
        [DIRECTIVE, { useClass: ThrottleDirective }],
        [CreateDirective]
    ],
    vueModule: CreateDirective
}
