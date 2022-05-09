import { Inject, Many } from '@wendellhu/redi'
import { App } from 'vue'
import { VUE_APP } from 'packages'
import { DIRECTIVE } from './directiveToken'
import { DirectiveImplements } from './types'
import { Null_Directive_Name } from './nullDirective'

export class CreateDirective {
    constructor(
        @Inject(VUE_APP) private readonly vue: App,
        @Many(DIRECTIVE)
        private readonly Directives?: DirectiveImplements[]
    ) {
        if (this.Directives) {
            this.Directives.map((item) => {
                if (item.name !== Null_Directive_Name) {
                    this.vue.directive(item.name, item)
                }
            })
        }
    }
}
