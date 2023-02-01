import { DependencyIdentifier } from '@wendellhu/redi'
import { useInjector } from './useInjector'

export function useDependency<T>(
    provider: DependencyIdentifier<T>,
    options?: { self: boolean }
): T {
    const injector = useInjector(options?.self)
    return injector!.get(provider)
}
