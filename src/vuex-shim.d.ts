declare module 'vuex' {
    export * from 'vuex/types/index.d.ts'
    export * from 'vuex/types/helpers.d.ts'
    export * from 'vuex/types/logger.d.ts'
    export * from 'vuex/types/vue.d.ts'
}

declare module 'vuex' {
    import { Store } from 'vuex/types/index.d.ts'
    export function createStore<S>(options: any): Store<S>
}
