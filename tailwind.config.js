/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#2c3e50',
      },
      boxShadow: {
        'custom': '0 0 0 2px #2c3e50',
      }
    },
  },
  varients: {
    extend: {
      boxShadow: ['hover'],
    }
  },
  plugins: [],
}
