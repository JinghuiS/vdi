import { Component, ComputedOptions, MethodOptions } from 'vue'
import {
    NavigationFailure,
    NavigationGuardNext,
    NavigationGuardWithThis,
    parseQuery,
    PathParserOptions,
    RouteLocationNormalized,
    RouteMeta,
    RouteRecordName,
    RouteRecordRedirectOption,
    RouterHistory,
    RouterScrollBehavior,
    stringifyQuery,
    _RouteRecordBase
} from 'vue-router'
import { CreateModuleType } from '../module'
/**@deprecated The  will be removed in next version. */
export interface RouterGuardImplements {
    beforeResolve?: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => boolean | Promise<any> | any
    beforeEach?: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => boolean | Promise<any> | any
    afterEach?: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        failure: void | NavigationFailure | undefined
    ) => boolean | Promise<any> | any
}
/**@deprecated The  will be removed in next version. */
export interface VdiRouterRaw {
    /**
     * Path of the record. Should start with `/` unless the record is the child of
     * another record.
     *
     * @example `/users/:id` matches `/users/1` as well as `/users/posva`.
     */
    path: string
    /**
     * Where to redirect if the route is directly matched. The redirection happens
     * before any navigation guard and triggers a new navigation with the new
     * target location.
     */
    redirect?: RouteRecordRedirectOption
    /**
     * Array of nested routes.
     */
    component?: Component<any, any, any, ComputedOptions, MethodOptions>
    module?: CreateModuleType
    children?: VdiRouterRaw[]
    alias?: string | string[]
    /**
     * Name for the route record.
     */
    name?: RouteRecordName
    /**
     * Before Enter guard specific to this record. Note `beforeEnter` has no
     * effect if the record has a `redirect` property.
     */
    beforeEnter?:
        | NavigationGuardWithThis<undefined>
        | NavigationGuardWithThis<undefined>[]
    /**
     * Arbitrary data attached to the record.
     */
    meta?: RouteMeta
}
/**@deprecated The  will be removed in next version. */
export interface VdiVueRouterOptions extends PathParserOptions {
    /**
     * History implementation used by the router. Most web applications should use
     * `createWebHistory` but it requires the server to be properly configured.
     * You can also use a _hash_ based history with `createWebHashHistory` that
     * does not require any configuration on the server but isn't handled at all
     * by search engines and does poorly on SEO.
     *
     * @example
     * ```js
     * createRouter({
     *   history: createWebHistory(),
     *   // other options...
     * })
     * ```
     */
    history: RouterHistory
    /**
     * Initial list of routes that should be added to the router.
     */
    routes: VdiRouterRaw[]
    /**
     * Function to control scrolling when navigating between pages. Can return a
     * Promise to delay scrolling. Check {@link ScrollBehavior}.
     *
     * @example
     * ```js
     * function scrollBehavior(to, from, savedPosition) {
     *   // `to` and `from` are both route locations
     *   // `savedPosition` can be null if there isn't one
     * }
     * ```
     */
    scrollBehavior?: RouterScrollBehavior
    /**
     * Custom implementation to parse a query. See its counterpart,
     * {@link RouterOptions.stringifyQuery}.
     *
     * @example
     * Let's say you want to use the package {@link https://github.com/ljharb/qs | qs}
     * to parse queries, you can provide both `parseQuery` and `stringifyQuery`:
     * ```js
     * import qs from 'qs'
     *
     * createRouter({
     *   // other options...
     *   parseQuery: qs.parse,
     *   stringifyQuery: qs.stringify,
     * })
     * ```
     */
    parseQuery?: typeof parseQuery
    /**
     * Custom implementation to stringify a query object. Should not prepend a leading `?`.
     * {@link RouterOptions.parseQuery | parseQuery} counterpart to handle query parsing.
     */
    stringifyQuery?: typeof stringifyQuery
    /**
     * Default class applied to active {@link RouterLink}. If none is provided,
     * `router-link-active` will be applied.
     */
    linkActiveClass?: string
    /**
     * Default class applied to exact active {@link RouterLink}. If none is provided,
     * `router-link-exact-active` will be applied.
     */
    linkExactActiveClass?: string
    /**
     * Default class applied to non active {@link RouterLink}. If none is provided,
     * `router-link-inactive` will be applied.
     */
    // linkInactiveClass?: string
}
