import { DependencyIdentifier, LookUp, Quantity } from '@wendellhu/redi'
import { useInjector } from './useInjector'

export function useDependency<T>(
    id: DependencyIdentifier<T>,
    lookUp?: LookUp
): T
export function useDependency<T>(
    id: DependencyIdentifier<T>,
    quantity: Quantity.MANY,
    lookUp?: LookUp
): T[]
export function useDependency<T>(
    id: DependencyIdentifier<T>,
    quantity: Quantity.OPTIONAL,
    lookUp?: LookUp
): T | null
export function useDependency<T>(
    id: DependencyIdentifier<T>,
    quantity: Quantity.REQUIRED,
    lookUp?: LookUp
): T
export function useDependency<T>(
    id: DependencyIdentifier<T>,
    quantity: Quantity,
    lookUp?: LookUp
): T | T[] | null
export function useDependency<T>(
    id: DependencyIdentifier<T>,
    quantity?: Quantity,
    lookUp?: LookUp
): T | T[] | null
export function useDependency<T>(
    id: DependencyIdentifier<T>,
    quantityOrLookUp?: Quantity | LookUp,
    lookUp?: LookUp
): T | T[] | null {
    const injector = useInjector()
    return injector.get<T>(id, quantityOrLookUp, lookUp)
}
