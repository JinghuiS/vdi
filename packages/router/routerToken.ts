import { createIdentifier } from '@wendellhu/redi'
import { RouterGuardImplements, VdiVueRouterOptions } from './type'

export const ROUTER_CONFIG =
    createIdentifier<VdiVueRouterOptions>('ROUTER_CONFIG')

export const ROUTER_GUARD =
    createIdentifier<RouterGuardImplements[]>('ROUTER_GUARD')
