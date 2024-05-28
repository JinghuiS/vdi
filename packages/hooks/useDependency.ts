import { DependencyIdentifier, LookUp, Quantity } from '@wendellhu/redi'
import { useInjector } from './useInjector'

function useDependency<T>(
    id: DependencyIdentifier<T>,
    options?: {
        self: boolean
        quantity?: Quantity.MANY | Quantity.OPTIONAL | Quantity.REQUIRED
        quantityOrLookup?: Quantity | LookUp
    },
    lookUp?: LookUp
): T
function useDependency<T>(
    id: DependencyIdentifier<T>,
    options?: { self: boolean; quantity: Quantity.MANY },
    lookUp?: LookUp
): T[]
function useDependency<T>(
    id: DependencyIdentifier<T>,
    options?: { self: boolean; quantity: Quantity.OPTIONAL },

    lookUp?: LookUp
): T | null
function useDependency<T>(
    id: DependencyIdentifier<T>,
    options?: { self: boolean; quantity: Quantity.REQUIRED },

    lookUp?: LookUp
): T
function useDependency<T>(
    id: DependencyIdentifier<T>,
    options?: { self: boolean; quantity?: Quantity },

    lookUp?: LookUp
): T[] | T | null
function useDependency<T>(
    id: DependencyIdentifier<T>,
    options?: { self: boolean; quantityOrLookup?: Quantity | LookUp },
    lookUp?: LookUp
): T[] | T | null
function useDependency<T>(
    provider: DependencyIdentifier<T>,
    options?: {
        self: boolean
        quantity?: Quantity.MANY | Quantity.OPTIONAL | Quantity.REQUIRED
        quantityOrLookup?: Quantity | LookUp
    },
    lookUp?: LookUp
) {
    const injector = useInjector()

    if (options?.quantity) {
        return injector!.get(provider, options.quantity, lookUp)
    }

    return injector!.get(provider, lookUp)
}

export { useDependency }
