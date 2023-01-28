import { useInjector, useDependency } from 'packages/module'
import { OverLayChildRef } from './overlayToken'
import { OverlayService } from './overlay.service'
import { onUnmounted } from 'vue'
import { Injector } from '@wendellhu/redi'

/**@deprecated The  will be removed in next version. Please use [vue-modal-provider](https://github.com/JinghuiS/vue-modal-provider) */
export function useOverlay(overlayChild: any) {
    const inject = useInjector(true)
    const childInjector = new Injector([], inject)
    const overlayService = new OverlayService(childInjector)
    overlayService.OverLayChildElement = overlayChild

    onUnmounted(() => {
        if (overlayService.overlayElement?.parentNode) {
            overlayService.overlayElement.parentNode.removeChild(
                overlayService.overlayElement
            )
        }
        overlayService.overlayElement = null
        childInjector.dispose()
    })

    return {
        open: overlayService.open.bind(overlayService),
        show: overlayService.show,
        close: overlayService.close.bind(overlayService)
    }
}
/**@deprecated The  will be removed in next version. Please use [vue-modal-provider](https://github.com/JinghuiS/vue-modal-provider) */
export function useOverlayRef<T = {}>() {
    const overlayService = useDependency(OverLayChildRef)
    return overlayService
}
