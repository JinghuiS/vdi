import { useInjector, useDependency } from 'packages/module'
import { OverLayChildRef } from './overlayToken'
import { OverlayService } from './overlay.service'
import { onUnmounted } from 'vue'
import { Injector } from '@wendellhu/redi'

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
    })
    return {
        open: overlayService.open.bind(overlayService),
        show: overlayService.show,
        close: overlayService.close.bind(overlayService)
    }
}

export function useOverlayRef() {
    const overlayService = useDependency(OverLayChildRef)
    return overlayService
}
