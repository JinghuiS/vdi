import { createIdentifier } from '@wendellhu/redi'
import { Router } from 'vue-router'
import { RouterGuardImplements, VdiVueRouterOptions } from './type'

export const ROUTER_CONFIG = createIdentifier('ROUTER_CONFIG')

export const ROUTER_GUARD = createIdentifier('ROUTER_GUARD')

export const VDI_ROUTER = createIdentifier('VDI_ROUTER')
