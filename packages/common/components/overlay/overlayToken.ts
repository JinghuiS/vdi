import { createIdentifier } from '@wendellhu/redi'
import { OverlayType } from './type'

export interface OverlayChildRef<T> extends OverlayType {
    params?: T
    close: (msg?: any) => void
}

export function OverLayChildRef<T = any>() {
    return createIdentifier<OverlayChildRef<T>>('OverLayChildRef____Token')
}
