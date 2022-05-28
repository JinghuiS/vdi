import { Injector } from '@wendellhu/redi'
import { onProvider, VUE_INJECTOR_KEY } from '../../../module'
import {
    App,
    Component,
    ComputedOptions,
    createApp,
    createVNode,
    defineComponent,
    h,
    MethodOptions,
    onUnmounted,
    provide,
    ref,
    render
} from 'vue'

import { OverLayChildRef } from './overlayToken'
import { OverlayType } from './type'

export class OverlayService {
    public overlayElement!: Element | null
    constructor(private readonly injector: Injector) {
        this.overlayElement = document.createElement('div')
        document.body.appendChild(this.overlayElement)
    }

    public OverLayChildElement!: any

    private options: any = {}

    private params: any = null

    private childrenComponent!: Component<
        any,
        any,
        any,
        ComputedOptions,
        MethodOptions
    >

    public show = ref<boolean>(false)

    public OverlayInstance?: App
    private createdOverlay() {
        const vm = defineComponent(() => {
            onProvider([
                [
                    OverLayChildRef,
                    {
                        useValue: {
                            params: this.params,
                            close: this.close.bind(this)
                        }
                    }
                ]
            ])

            return () =>
                h(
                    this.OverLayChildElement,
                    {
                        options: this.options,
                        visible: this.show.value,
                        onClose: this.close.bind(this)
                    },
                    {
                        default: () =>
                            createVNode(this.childrenComponent, {
                                close: this.close.bind(this),
                                params: this.params
                            })
                    }
                )
        })

        if (this.overlayElement) {
            this.OverlayInstance = createApp(vm).provide(
                VUE_INJECTOR_KEY,
                this.injector
            )

            this.OverlayInstance.config.globalProperties.$GLOBAL_INJECTOR =
                this.injector
            this.OverlayInstance.mount(this.overlayElement)
        }
    }

    private _resolve: (value?: unknown) => void = () => {}
    private _reject: (reason?: any) => void = () => {}
    public open<T = any>(overlay: OverlayType<T>) {
        const { component, params, options } = overlay
        this.childrenComponent = component
        this.params = params
        this.options = options
        return new Promise((resolve, reject) => {
            this._resolve = resolve
            this._reject = reject
            this.createdOverlay()
            this.show.value = true
        })
    }
    public close(msg?: any) {
        if (!this.overlayElement) return
        this.show.value = false
        if (msg) {
            this._resolve(msg)
        } else {
            this._resolve()
        }
        this.OverlayInstance?.unmount()
        this.OverlayInstance = undefined
    }
}
