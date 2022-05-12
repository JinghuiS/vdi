import { Injector } from '@wendellhu/redi'
import { VUE_INJECTOR_KEY } from '../../../module'
import {
    Component,
    ComputedOptions,
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

    private createdOverlay() {
        const vm = defineComponent(() => {
            provide(VUE_INJECTOR_KEY, this.injector)

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
            render(createVNode(vm), this.overlayElement)
        }
    }

    private _resolve: (value?: unknown) => void = () => {}
    private _reject: (reason?: any) => void = () => {}
    public open(overlay: OverlayType) {
        const { component, params, options } = overlay
        this.childrenComponent = component
        this.params = params
        this.options = options
        return new Promise((resolve, reject) => {
            this._resolve = resolve
            this._reject = reject
            this.injector.add(OverLayChildRef, {
                useValue: {
                    close: this.close.bind(this),
                    ...overlay
                }
            })
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
    }
}
