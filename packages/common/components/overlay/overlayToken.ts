import { createIdentifier } from '@wendellhu/redi'
import type { OverlayType } from './type'
/**@deprecated The  will be removed in next version. Please use [vue-modal-provider](https://github.com/JinghuiS/vue-modal-provider) */
export interface OverlayChildRef<T = any> extends OverlayType {
    params?: T
    close: (msg?: any) => void
}
/**@deprecated The  will be removed in next version. Please use [vue-modal-provider](https://github.com/JinghuiS/vue-modal-provider) */
export const OverLayChildRef = createIdentifier<OverlayChildRef>(
    'OverLayChildRef____Token'
)
