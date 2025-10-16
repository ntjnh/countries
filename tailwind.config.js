/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        grey: {
          925: '#111517'
        },
        neutral: {
          450: '#858585'
        },
        slate: {
          750: '#2b3945',
          775: '#202c37'
        }
      }
    },
  },
  plugins: [],
}
