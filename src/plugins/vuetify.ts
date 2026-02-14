import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'loveTheme',
    themes: {
      loveTheme: {
        dark: false,
        colors: {
          background: '#FFF8F0', // Cream/Off-white
          surface: '#FFFFFF',
          primary: '#D8A7B1', // Soft Rose
          secondary: '#E6C9C9', // Muted Pink
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          text: '#4A4A4A', // Soft Charcoal
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
