import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
    .use(vuetify)
    .use(store)
    .mount('#app')
