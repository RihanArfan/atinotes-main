// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    // https://ui.nuxt.com/pro
    '@nuxt/ui-pro'
  ],

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-auth-utils',
    '@nuxtjs/plausible'
  ],

  devtools: {
    enabled: true
  },

  mdc: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'material-theme-palenight'
      }
    }
  },

  routeRules: {
    // Used for notes.atinux.com
    // Fell free to remove it
    '/nuxt-custom-fetch': { redirect: { to: 'https://nuxt.com/docs/guide/recipes/custom-usefetch', statusCode: 302 } }
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-29',

  hub: {
    kv: true
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
