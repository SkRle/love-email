declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'vuetify/styles' {
    const styles: any
    export default styles
}

declare module 'vuetify/confirm' {
    import { Plugin } from 'vue'
    const plugin: Plugin
    export default plugin
}

declare module 'vuex' {
    export * from 'vuex/types/index.d.ts'
    export * from 'vuex/types/helpers.d.ts'
    export * from 'vuex/types/logger.d.ts'
    export * from 'vuex/types/vue.d.ts'
}
