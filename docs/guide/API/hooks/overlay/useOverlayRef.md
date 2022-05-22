# useOverlayRef

在使用 useOverLay open 打开的子组件中使用 useOverLay 中的方法

-   ### Type
    ```ts
    interface OverlayChildRef extends OverlayType {
        params?: any
        close: (msg?: any) => void
    }
    function useOverlayRef(): OverlayChildRef
    ```
