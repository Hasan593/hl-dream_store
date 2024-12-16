/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      animation: {
        'step': 'step 2s ease-in-out 3',  // 3 বার ধাপে ধাপে প্রগ্রেস হবে
      },
      keyframes: {
        step: {
          '0%': { width: '0%' },
          '30%': { width: '30%' },
          '60%': { width: '60%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
