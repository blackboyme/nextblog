import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-down': 'fade-down 2s infinite ease-in-out',
      },
      keyframes: {
        'fade-down': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            opacity: '1'
          },
          '50%': {
            transform: 'translateY(25%)',
            opacity: '0.2'
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
