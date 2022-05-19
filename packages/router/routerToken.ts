import { createIdentifier } from '@wendellhu/redi'
import { Router } from 'vue-router'
import { RouterGuardImplements, VdiVueRouterOptions } from './type'

export const ROUTER_CONFIG =
    createIdentifier<VdiVueRouterOptions>('ROUTER_CONFIG')

export const ROUTER_GUARD =
    createIdentifier<RouterGuardImplements[]>('ROUTER_GUARD')

export const VDI_ROUTER = createIdentifier<Router>('VDI_ROUTER')
