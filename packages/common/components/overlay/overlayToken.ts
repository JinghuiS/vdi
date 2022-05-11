import { createIdentifier } from '@wendellhu/redi'
import { OverlayType } from './type'

export interface OverlayChildRef extends OverlayType {
    close: (msg?: any) => void
}

export const OverLayChildRef =
    createIdentifier<OverlayChildRef>('OverLayChildRef')
