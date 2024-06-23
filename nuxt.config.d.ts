declare module '@nuxt/types' {
  interface NuxtConfig {
    postcss?: {
      plugins?: Record<string, any>
    }
  }
}
