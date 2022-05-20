import { createIdentifier } from '@wendellhu/redi'
import type { OverlayType } from './type'

export interface OverlayChildRef<T = any> extends OverlayType {
    params?: T
    close: (msg?: any) => void
}

export const OverLayChildRef = createIdentifier<OverlayChildRef>(
    'OverLayChildRef____Token'
)
