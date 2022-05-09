import { vueModule } from 'packages'
import { DirectiveModule } from './directive'

export const CommonModule = vueModule({
    imports: [DirectiveModule]
})

export * from './directive'

export * from './components'
