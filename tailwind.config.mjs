import defaultConfig from 'tailwindcss/defaultConfig'

import thaitone from 'tailwind-thaitone'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Noto Sans Thai Variable'",
          ...defaultConfig.theme.fontFamily.sans,
        ],
        heading: ['K2D', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // https://rayriffy.github.io/tailwind-thaitone/
    thaitone,
  ],
}
