import defaultConfig from 'tailwindcss/defaultConfig'

import thaitone from 'tailwind-thaitone'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "K2D",
          ...defaultConfig.theme.fontFamily.sans,
        ],
        heading: ['K2D', ...defaultConfig.theme.fontFamily.sans],
      },
      colors: {
        brand: {
          yellow: '#F1D816',
          green: '#007454',
          orange: '#FF6633',
          blue: '#29C7C8',
        }
      },
    },
  },
}
