import { Inject, Many } from '@wendellhu/redi'
import { App } from 'vue'

import { DIRECTIVE } from './directiveToken'
import { DirectiveImplements } from './types'
import { Null_Directive_Name } from './nullDirective'
import { VUE_APP } from 'packages/hooks/token'

export class CreateDirective {
    constructor(
        @Inject(VUE_APP) private readonly vue: App,
        @Many(DIRECTIVE)
        private readonly Directives?: DirectiveImplements[]
    ) {
        if (this.Directives) {
            this.Directives.map((item) => {
                if (item.name !== Null_Directive_Name) {
                    this.vue.directive(item.name, {
                        created(...args) {
                            item.created && item.created(...args)
                        },
                        beforeMount(...args) {
                            item.beforeMount && item.beforeMount(...args)
                        },
                        mounted(...args) {
                            item.mounted && item.mounted(...args)
                        },
                        beforeUpdate(...args) {
                            item.beforeUpdate && item.beforeUpdate(...args)
                        },
                        updated(...args) {
                            item.updated && item.updated(...args)
                        },
                        beforeUnmount(...args) {
                            item.beforeUnmount && item.beforeUnmount(...args)
                        },
                        unmounted(...args) {
                            item.unmounted && item.unmounted(...args)
                        }
                    })
                }
            })
        }
    }
}
